import Link from "next/link";
import Image from "next/image";
import Container from "./ui/Container";
import { services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t-2 border-green bg-black text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
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

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-green"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Company
          </h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/case-studies" className="text-sm text-white/70 transition-colors hover:text-green">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-white/70 transition-colors hover:text-green">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-green">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-green">
                Request a Proposal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-white/60">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>United Arab Emirates</li>
            <li>
              <a href="tel:+9718004145" className="transition-colors hover:text-green">
                +971 800 4145
              </a>
            </li>
            <li>
              <a href="mailto:info@operon.co" className="transition-colors hover:text-green">
                info@operon.co
              </a>
            </li>
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
          <p>An Edgenta Company</p>
        </Container>
      </div>
    </footer>
  );
}
