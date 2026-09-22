import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Meet the Team", href: "/our-team" },
      { label: "Join Our Team", href: "/careers" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "What We Do", href: "/what-we-do" },
      { label: "Our Work", href: "/our-work" },
      { label: "Smart & Sustainable", href: "/what-we-do/smart-fm-technology" },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/operon-middle-east/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/operon.me/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-green bg-black text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <Image
            src="/images/logo-full-white.png"
            alt="Operon — An Edgenta Company"
            width={111}
            height={120}
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
            Integrated facilities management for the UAE&rsquo;s built
            environment &mdash; part of the UEM Edgenta Group.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
              {col.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-green"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Connect
          </h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-green">
                Contact Us
              </Link>
            </li>
            <li className="flex items-center gap-4 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Operon on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center border border-white/25 text-white/70 transition-colors hover:border-green hover:bg-green hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </li>
            <li className="pt-3">
              <a
                href="https://www.uemedgenta.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-green hover:text-green"
              >
                Visit UEM Edgenta
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href="tel:+9718004145" className="transition-colors hover:text-green">
                800 4145
              </a>
            </li>
            <li>
              <a href="mailto:info@operon.co" className="transition-colors hover:text-green">
                info@operon.co
              </a>
            </li>
            <li>Dubai, UAE</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-white/45">
            Certifications &amp; memberships
          </span>
          <span className="text-sm text-white/60">MEFMA</span>
          <span className="text-sm text-white/60">BICSc</span>
          <span className="text-sm text-white/60">ISO 9001 &middot; 14001 &middot; 45001 &mdash; Bureau Veritas</span>
          <span className="text-sm text-white/60">ASHRAE</span>
        </Container>
      </div>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/55 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Operon Middle East. All rights reserved.</p>
          <p className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-green">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-green">
              Terms &amp; Conditions
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
