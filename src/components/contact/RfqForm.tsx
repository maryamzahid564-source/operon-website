"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/content";

const sectors = [
  "Residential",
  "Commercial",
  "Hospitality & Leisure",
  "Specialised Facilities",
  "Other",
];

const inputClass =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none transition-colors focus:border-green";

type Status = "idle" | "submitting" | "success" | "error";

export default function RfqForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(name: string) {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      sector: formData.get("sector"),
      assets: formData.get("assets"),
      message: formData.get("message"),
      services: selectedServices,
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setSelectedServices([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green/30 bg-tint p-10 text-center">
        <p className="text-lg font-bold text-black">Thank you.</p>
        <p className="mt-2 text-sm leading-relaxed text-grey">
          We&rsquo;ve received your request and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Company
          </label>
          <input id="company" name="company" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
          Services of interest
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const active = selectedServices.includes(s.name);
            return (
              <button
                key={s.slug}
                type="button"
                onClick={() => toggleService(s.name)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-green bg-green text-white"
                    : "border-black/15 text-black/70 hover:border-black/40"
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="sector" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Sector
          </label>
          <select id="sector" name="sector" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a sector
            </option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="assets" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
            Number of assets / sites
          </label>
          <input id="assets" name="assets" type="text" placeholder="e.g. 3" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wide text-black/60">
          Tell us about your requirements
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:info@operon.co" className="underline">
            info@operon.co
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-green px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#488f48] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
