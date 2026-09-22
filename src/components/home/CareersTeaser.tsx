import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { careersIntro } from "@/lib/content";
import { vacancies, isOpen } from "@/lib/careers";

// "Join Our Team" — compact careers band linking to the Careers page.
export default function CareersTeaser() {
  const openCount = vacancies.filter((v) => isOpen(v)).length;

  return (
    <section className="border-y border-black/10 bg-mist py-12 sm:py-16">
      <Container className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
            Join our team
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
            {careersIntro.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-grey">
            {careersIntro.intro}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
          >
            {openCount > 0
              ? `View ${openCount} open role${openCount === 1 ? "" : "s"}`
              : "Explore opportunities"}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
