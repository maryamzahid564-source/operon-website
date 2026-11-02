import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WorkSlider from "@/components/work/WorkSlider";
import CtaBanner from "@/components/home/CtaBanner";
import { services } from "@/lib/content";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "What We Do — Integrated Facilities Management Services",
  description:
    "Six disciplines, one accountable partner: integrated facilities management, engineering and technical services, soft services, smart FM and technology, sustainability and energy management, and projects and asset solutions across the UAE.",
  alternates: { canonical: "/what-we-do" },
};

// Short labels for the slider's top tab bar.
const tabLabels: Record<string, string> = {
  "integrated-facilities-management": "Integrated FM",
  "engineering-technical-services": "Engineering & Technical",
  "soft-services": "Soft Services",
  "smart-fm-technology": "Smart FM & Technology",
  "sustainability-energy-management": "Sustainability & Energy",
  "projects-asset-solutions": "Projects & Assets",
};

export default function WhatWeDoPage() {
  const slides = services.map((s) => ({
    slug: s.slug,
    name: s.name,
    headline: s.headline,
    line: s.summary,
    chips: s.capabilities.slice(0, 3),
    img: photoFor(`services/${s.slug}`),
    href: `/what-we-do/${s.slug}`,
    tab: tabLabels[s.slug],
  }));

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              What we do
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              Six disciplines. One accountable partner.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey">
              From critical building systems to guest-facing services, every
              discipline is delivered by our own teams, to one standard,
              under one contract.
            </p>
          </Reveal>
        </Container>
      </section>

      <WorkSlider
        slides={slides}
        ariaLabel="Our services"
        linkLabel="Explore Service"
      />

      <CtaBanner />
    </>
  );
}
