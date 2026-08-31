import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { sustainabilityStats, sustainabilityNote } from "@/lib/content";

// Smart, sustainable delivery — group sustainability achievements set on the
// brand green tint, with routes into the two enabling services.
export default function Sustainability() {
  return (
    <section className="bg-tint py-14 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <span className="mb-5 block h-0.5 w-12 bg-green" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Smart &amp; sustainable
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
              Technology-led. Sustainability-driven.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-grey">
              Operon embeds sustainability into everyday facilities
              management &mdash; improving energy and water efficiency,
              reducing waste and optimising asset performance &mdash; while
              our CAFM platform gives clients real-time visibility across
              the portfolio, with audit-ready reporting on demand.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/services/energy-management"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:text-green"
              >
                Energy Management
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services/technology-solutions"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:text-green"
              >
                Technology Solutions
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-9 border-t-2 border-green pt-8">
              {sustainabilityStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold tracking-tight text-green sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-grey">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-grey/80">
              {sustainabilityNote}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
