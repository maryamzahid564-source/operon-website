"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./ui/Container";
import { services } from "@/lib/content";

const navLink =
  "relative text-xs font-bold uppercase tracking-[0.18em] text-black/70 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-green after:transition-transform after:duration-300 hover:text-black hover:after:scale-x-100 group-data-[overlay=true]:text-white/85 group-data-[overlay=true]:hover:text-white";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the homepage hero; solid everywhere else and on scroll.
  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <header
      data-scrolled={scrolled}
      data-overlay={overlay}
      className="group fixed inset-x-0 top-0 z-50 transition-colors duration-300 data-[overlay=false]:border-b data-[overlay=false]:border-black/10 data-[overlay=false]:bg-white/95 data-[overlay=false]:backdrop-blur data-[overlay=true]:bg-transparent"
    >
      {/* Corporate utility bar — collapses away on scroll. */}
      <div className="hidden overflow-hidden bg-black text-white/70 transition-[max-height] duration-300 group-data-[scrolled=true]:max-h-0 lg:block lg:max-h-9">
        <Container className="flex h-9 items-center justify-between text-[11px] tracking-[0.08em]">
          <span className="font-bold uppercase tracking-[0.18em] text-white/60">
            An Edgenta Company
          </span>
          <span className="flex items-center gap-7">
            <a href="tel:+9718004145" className="transition-colors hover:text-white">
              +971 800 4145
            </a>
            <a href="mailto:info@operon.co" className="transition-colors hover:text-white">
              info@operon.co
            </a>
          </span>
        </Container>
      </div>
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Operon — home">
          {/* The complete original lock-up in its compact format — colour on
              light backgrounds, white reversed over the hero. */}
          <Image
            src="/images/logo-full.png"
            alt="Operon — An Edgenta Company"
            width={166}
            height={180}
            className="h-[4.25rem] w-auto group-data-[overlay=true]:hidden lg:h-[5.25rem]"
            priority
          />
          <Image
            src="/images/logo-full-white.png"
            alt="Operon — An Edgenta Company"
            width={166}
            height={180}
            className="hidden h-[4.25rem] w-auto group-data-[overlay=true]:block lg:h-[5.25rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <div
            className="relative"
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
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-6">
                <div className="border border-black/10 bg-white py-2 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-6 py-3 text-sm text-black/70 transition-colors hover:bg-mist hover:text-green"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/case-studies" className={navLink}>
            Projects
          </Link>
          <Link href="/about" className={navLink}>
            Who We Are
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center border border-black px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white group-data-[overlay=true]:border-white group-data-[overlay=true]:text-white group-data-[overlay=true]:hover:bg-white group-data-[overlay=true]:hover:text-black"
          >
            Request a Proposal
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-7 bg-black transition-transform group-data-[overlay=true]:bg-white ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-black transition-opacity group-data-[overlay=true]:bg-white ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-black transition-transform group-data-[overlay=true]:bg-white ${open ? "-translate-y-2 -rotate-45" : ""}`} />
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
                className="px-2 py-2.5 text-sm text-black/70 hover:bg-mist"
              >
                {s.name}
              </Link>
            ))}
            <div className="my-3 h-px bg-black/10" />
            <Link href="/case-studies" onClick={() => setOpen(false)} className="px-2 py-2.5 text-sm font-medium text-black/80 hover:bg-mist">
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="px-2 py-2.5 text-sm font-medium text-black/80 hover:bg-mist">
              Who We Are
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="px-2 py-2.5 text-sm font-medium text-black/80 hover:bg-mist">
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-green px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Request a Proposal
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
