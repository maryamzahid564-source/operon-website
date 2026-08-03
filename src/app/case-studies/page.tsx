import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import CaseStudiesGrid from "@/components/case-studies/CaseStudiesGrid";
import { caseStudies, clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | Operon Middle East",
  description:
    "Selected facilities management work across residential, commercial, hospitality and specialised assets in the UAE.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-16 sm:pt-20 lg:pt-28">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Case Studies
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
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
          <span className="text-[11px] font-bold uppercase tracking-widest text-grey/70">
            Selected clients
          </span>
          {clients.map((c) => (
            <span key={c} className="text-sm text-black/70">
              {c}
            </span>
          ))}
        </Container>
      </div>

      <section className="py-20 sm:py-24">
        <Container>
          <CaseStudiesGrid caseStudies={caseStudies} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
