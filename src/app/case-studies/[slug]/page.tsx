import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CtaBanner from "@/components/home/CtaBanner";
import { caseStudies } from "@/lib/content";
import { photoFor } from "@/lib/images";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} | Operon Middle East`,
    description: study.valueDelivered,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <section className="bg-white pb-16 pt-16 sm:pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-medium text-grey transition-colors hover:text-green"
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="rotate-180">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Projects
            </Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-green">
              {study.sector} &middot; {study.location}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
              {study.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <Reveal delay={100}>
        <Container>
          <Photo
            src={photoFor(`case-studies/${study.slug}`)}
            alt={study.title}
            aspect="aspect-[21/9]"
            className="rounded-3xl"
            sizes="(min-width: 1280px) 1152px, 100vw"
            priority
          />
        </Container>
      </Reveal>

      <section className="py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-3">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Scope
            </p>
            <ul className="mt-5 space-y-3">
              {study.scope.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-black/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Operational Focus
            </p>
            <ul className="mt-5 space-y-3">
              {study.operationalFocus.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-black/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Value Delivered
            </p>
            <p className="mt-5 text-sm leading-relaxed text-black/80">
              {study.valueDelivered}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              More work
            </p>
            <h2 className="mt-4 text-2xl font-black text-black sm:text-3xl tracking-tight">
              Other case studies
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
                <Link href={`/case-studies/${c.slug}`} className="group block">
                  <Photo
                    src={photoFor(`case-studies/${c.slug}`)}
                    alt={c.title}
                    aspect="aspect-[4/3]"
                    className="rounded-2xl"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <p className="mt-5 text-xs font-bold uppercase tracking-wide text-green">
                    {c.sector} &middot; {c.location}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-black transition-colors group-hover:text-green">
                    {c.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
