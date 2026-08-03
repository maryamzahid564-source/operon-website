import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, company, email, phone } = body ?? {};
  if (!name || !company || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  // Stub: no email/CRM service is wired up yet — submissions only reach server logs.
  // Connect this to a real provider (e.g. Resend, SendGrid, HubSpot) before launch.
  console.log("RFQ submission received:", body);

  return NextResponse.json({ ok: true });
}
