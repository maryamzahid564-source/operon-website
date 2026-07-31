"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./ui/Container";
import { services } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-cream/95 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl tracking-wide text-charcoal">
            Operon
          </span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
            Middle East
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-medium text-ink hover:text-gold transition-colors">
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-px">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                <div className="rounded-sm border border-charcoal/10 bg-white shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block border-b border-charcoal/5 px-5 py-3 text-sm text-ink last:border-none hover:bg-cream hover:text-gold transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/case-studies" className="text-sm font-medium text-ink hover:text-gold transition-colors">
            Case Studies
          </Link>
          <Link href="/contact" className="text-sm font-medium text-ink hover:text-gold transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-wide text-cream transition-colors hover:bg-gold hover:text-charcoal"
          >
            Request a Proposal
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-7 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <span className="px-2 pt-2 pb-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm text-ink hover:bg-white"
              >
                {s.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-charcoal/10" />
            <Link href="/case-studies" onClick={() => setOpen(false)} className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink hover:bg-white">
              Case Studies
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink hover:bg-white">
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-sm bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-wide text-cream"
            >
              Request a Proposal
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
