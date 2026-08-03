"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { services } from "@/lib/content";

const navLink =
  "relative text-sm font-medium text-black/70 transition-colors hover:text-black after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-green after:transition-all after:duration-300 hover:after:w-full";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setServicesOpen(false);
            }}
          >
            <button
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1.5 ${navLink}`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-px">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-5">
                <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.15)]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-black/70 transition-colors hover:bg-mist hover:text-green"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/case-studies" className={navLink}>
            Case Studies
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-green px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#488f48]"
          >
            Request a Proposal
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-7 bg-black transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-black transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-5">
            <span className="px-2 pt-2 pb-1 text-xs font-bold uppercase tracking-wider text-black/40">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-black/70 hover:bg-mist"
              >
                {s.name}
              </Link>
            ))}
            <div className="my-3 h-px bg-black/10" />
            <Link href="/case-studies" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-sm font-medium text-black/80 hover:bg-mist">
              Case Studies
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 text-sm font-medium text-black/80 hover:bg-mist">
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-green px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-white"
            >
              Request a Proposal
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
