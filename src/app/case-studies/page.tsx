import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CtaBanner from "@/components/home/CtaBanner";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import { caseStudies, clients, portfolio } from "@/lib/content";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Facilities management projects across Dubai and the UAE — master communities, commercial towers, golf and leisure destinations, retail and specialised assets managed by Operon Middle East.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const caseStudiesWithImages = caseStudies.map((c) => ({
    ...c,
    imageSrc: photoFor(`case-studies/${c.slug}`),
  }));

  return (
    <>
      <section className="bg-white pb-16 pt-16 sm:pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Projects
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Selected work across the UAE.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey">
              From master communities to leisure destinations and
              high-occupancy towers &mdash; a look at the assets we manage
              day to day.
            </p>
          </Reveal>
        </Container>
      </section>

      <div className="border-y border-black/10 bg-mist py-6">
        <Container className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-grey">
            Selected clients
          </span>
          {clients.map((c) => (
            <span key={c} className="text-sm text-black/70">
              {c}
            </span>
          ))}
        </Container>
      </div>

      <section className="py-14 sm:py-20">
        <Container>
          <CaseStudiesGrid caseStudies={caseStudiesWithImages} />
        </Container>
      </section>

      <section className="border-t border-black/10 bg-mist py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Across our portfolio
            </p>
            <h2 className="mt-4 max-w-2xl text-2xl font-bold text-black sm:text-3xl tracking-tight">
              The places behind our work.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
              <Reveal key={n} delay={(i % 4) * 60}>
                <Photo
                  src={photoFor(`portfolio/p${n}`)}
                  alt=""
                  aspect="aspect-[4/3]"
                  className=""
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={80}>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((p) => (
                <li
                  key={p}
                  className="border-b border-black/10 pb-4 text-sm text-black/80"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
