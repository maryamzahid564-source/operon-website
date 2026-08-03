import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { caseStudies } from "@/lib/content";

export default function CaseStudyTeaser() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our work
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-black sm:text-4xl">
                Assets our clients trust us with.
              </h2>
            </div>
            <Button href="/case-studies" variant="outline" className="hidden sm:inline-flex">
              View all case studies
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {featured.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link href="/case-studies" className="group block">
                <ImagePlaceholder aspect="aspect-[4/3]" className="rounded-2xl" />
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-green">
                  {c.sector} &middot; {c.location}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-black transition-colors group-hover:text-green">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {c.valueDelivered}
                </p>
              </Link>
            </Reveal>
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
