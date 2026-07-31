import Link from "next/link";
import Container from "./ui/Container";
import { services } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-serif text-2xl text-cream">Operon</span>
          <span className="mt-0.5 block text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
            Middle East
          </span>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            Integrated facilities management for the assets that define the
            region — trusted across the UAE since 2008.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-cream/80 hover:text-gold transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50">
            Company
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <Link href="/case-studies" className="text-sm text-cream/80 hover:text-gold transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-cream/80 hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-cream/80 hover:text-gold transition-colors">
                Request a Proposal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider text-cream/50">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            <li>Dubai, United Arab Emirates</li>
            <li>
              <a href="tel:+97140000000" className="hover:text-gold transition-colors">
                +971 4 000 0000
              </a>
            </li>
            <li>
              <a href="mailto:info@operon.ae" className="hover:text-gold transition-colors">
                info@operon.ae
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-cream/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Operon Middle East. All rights reserved.</p>
          <p>Facilities Management &mdash; UAE</p>
        </Container>
      </div>
    </footer>
  );
}
