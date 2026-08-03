import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { services } from "@/lib/content";

const LIMITS = {
  name: 200,
  company: 200,
  email: 320,
  phone: 50,
  sector: 100,
  assets: 100,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const KNOWN_SERVICES = new Set(services.map((s) => s.name));

// Per-instance rate limit — enough to stop naive floods; a serverless
// deployment with many instances should add an edge/WAF rule as well.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const rateHits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  if (rateHits.size > 1000) {
    for (const [key, times] of rateHits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) rateHits.delete(key);
    }
  }
  const recent = (rateHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateHits.set(ip, recent);
  return false;
}

function cleanString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > max ? null : trimmed;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Report success so
  // bots get no signal, but drop the submission.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = cleanString(body.name, LIMITS.name);
  const company = cleanString(body.company, LIMITS.company);
  const email = cleanString(body.email, LIMITS.email);
  const phone = cleanString(body.phone, LIMITS.phone);
  const message = cleanString(body.message, LIMITS.message);
  const sector = cleanString(body.sector, LIMITS.sector) ?? "";
  const assets = cleanString(body.assets, LIMITS.assets) ?? "";
  const selectedServices = Array.isArray(body.services)
    ? body.services.filter(
        (s): s is string => typeof s === "string" && KNOWN_SERVICES.has(s)
      )
    : [];

  if (!name || !company || !email || !phone || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid required fields." },
      { status: 400 }
    );
  }

  const summary = [
    `Name:      ${name}`,
    `Company:   ${company}`,
    `Email:     ${email}`,
    `Phone:     ${phone}`,
    `Sector:    ${sector || "-"}`,
    `Assets:    ${assets || "-"}`,
    `Services:  ${selectedServices.length ? selectedServices.join(", ") : "-"}`,
    ``,
    `Requirements:`,
    message,
  ].join("\n");

  const host = process.env.SMTP_HOST;
  if (!host) {
    // No mail transport configured (e.g. local development): keep the
    // submission visible in server logs instead of dropping it.
    console.log(`RFQ submission received (SMTP not configured):\n${summary}`);
    return NextResponse.json({ ok: true });
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const to = process.env.RFQ_TO_EMAIL ?? "info@operon.co";
  const from = process.env.RFQ_FROM_EMAIL ?? user ?? "website@operon.co";

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user ? { user, pass: process.env.SMTP_PASS } : undefined,
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Website RFQ — ${company}`,
      text: summary,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RFQ email delivery failed:", error);
    return NextResponse.json(
      { ok: false, error: "Delivery failed." },
      { status: 502 }
    );
  }
}
