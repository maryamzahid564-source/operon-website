import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { caseStudies } from "@/lib/content";

export default function CaseStudyTeaser() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-cream py-24 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              Our work
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Assets our clients trust us with.
            </h2>
          </div>
          <Button href="/case-studies" variant="outline" className="hidden sm:inline-flex">
            View all case studies
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.slug}
              href="/case-studies"
              className="group flex flex-col justify-between border border-charcoal/10 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gold">
                  {c.sector} &middot; {c.location}
                </p>
                <h3 className="mt-4 font-serif text-xl leading-snug text-charcoal">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {c.summary}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-charcoal group-hover:text-gold">
                Read more
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/case-studies" variant="outline">
            View all case studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
