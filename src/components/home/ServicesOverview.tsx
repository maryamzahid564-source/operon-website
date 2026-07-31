import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            What we do
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Six disciplines. One accountable partner.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col justify-between bg-cream p-8 transition-colors hover:bg-charcoal sm:min-h-[15rem]"
            >
              <div>
                <span className="text-xs font-medium text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-xl text-charcoal group-hover:text-cream">
                  {s.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 group-hover:text-cream/60">
                  {s.summary}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-charcoal group-hover:text-gold">
                Learn more
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
