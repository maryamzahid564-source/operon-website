"use client";

import { useState } from "react";
import { vacancies, isOpen } from "@/lib/careers";

const inputCls =
  "w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-green";

export default function ApplyForm({ position }: { position?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const openRoles = vacancies.filter((v) => isOpen(v));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    if (process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1") {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-green/30 bg-tint p-10 text-center">
        <p className="text-lg font-bold text-black">Thank you for applying.</p>
        <p className="mt-2 text-sm leading-relaxed text-grey">
          We&rsquo;ve received your application and will be in touch if
          there&rsquo;s a match.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-7 sm:grid-cols-2">
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="ap-name" className="text-xs font-bold uppercase tracking-widest text-grey">
          Full name *
        </label>
        <input id="ap-name" name="name" required maxLength={200} className={inputCls} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="ap-email" className="text-xs font-bold uppercase tracking-widest text-grey">
          Email *
        </label>
        <input id="ap-email" name="email" type="email" required maxLength={200} className={inputCls} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="ap-phone" className="text-xs font-bold uppercase tracking-widest text-grey">
          Phone
        </label>
        <input id="ap-phone" name="phone" maxLength={50} className={inputCls} placeholder="+971…" />
      </div>
      <div>
        <label htmlFor="ap-role" className="text-xs font-bold uppercase tracking-widest text-grey">
          Position *
        </label>
        <select
          id="ap-role"
          name="position"
          required
          defaultValue={position ?? ""}
          className={`${inputCls} appearance-none`}
        >
          <option value="" disabled>
            Select a role
          </option>
          {openRoles.map((v) => (
            <option key={v.id} value={v.title}>
              {v.title} — {v.location}
            </option>
          ))}
          <option value="General application">General application</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="ap-message" className="text-xs font-bold uppercase tracking-widest text-grey">
          Tell us about yourself *
        </label>
        <textarea
          id="ap-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          className={inputCls}
          placeholder="A short introduction, your experience, and a link to your CV or LinkedIn profile"
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center bg-green px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Submit Application"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-700">
            Something went wrong sending your application. Please try again,
            or email us at info@operon.co.
          </p>
        )}
      </div>
    </form>
  );
}
