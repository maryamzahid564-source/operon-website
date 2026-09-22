import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { smartSustainable } from "@/lib/content";

// Smart & Sustainable — Operon's own technology-enabled FM and
// sustainability capabilities. No group-level statistics here.
export default function Sustainability() {
  return (
    <section className="bg-tint py-14 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="mb-5 block h-0.5 w-12 bg-green" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Smart &amp; sustainable
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
              {smartSustainable.headline}
            </h2>
            {smartSustainable.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 max-w-xl text-base leading-relaxed text-grey">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/what-we-do/smart-fm-technology"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:text-green"
              >
                Smart FM &amp; Technology
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/what-we-do/sustainability-energy-management"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:text-green"
              >
                Sustainability &amp; Energy
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {smartSustainable.points.map((pt, i) => (
              <Reveal key={pt.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col border-t-2 border-green bg-white/70 p-6">
                  <span className="text-sm font-bold text-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-bold leading-snug text-black sm:text-lg">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{pt.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
