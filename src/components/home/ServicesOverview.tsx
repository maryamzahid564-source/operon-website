import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              What we do
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-black sm:text-3xl tracking-tight">
              Six disciplines. One accountable partner.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-black/10">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-4 border-b border-black/10 py-8 transition-colors sm:flex-row sm:items-center sm:gap-10 sm:py-10"
              >
                <span className="text-sm font-bold text-grey sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-black transition-colors group-hover:text-green sm:text-xl">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-grey">
                    {s.summary}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-black/20 text-black transition-all group-hover:border-green group-hover:bg-green group-hover:text-white">
                  <svg width="16" height="12" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
