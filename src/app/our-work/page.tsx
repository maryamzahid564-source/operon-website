import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import WorkSlider from "@/components/work/WorkSlider";
import CtaBanner from "@/components/home/CtaBanner";
import { environments } from "@/lib/content";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Work — Environments We Manage Across the UAE",
  description:
    "Where our work comes to life: master communities, residential, commercial, retail, hospitality and leisure, and specialised facilities — managed by Operon Middle East across the UAE.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  const slides = environments.map((e) => ({
    ...e,
    img: photoFor(`environments/${e.slug}`),
  }));

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our work
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              Where our work comes to life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey">
              From master communities and residential developments to
              commercial spaces, retail and lifestyle destinations, our teams
              work behind the scenes to keep places performing every day.
            </p>
          </Reveal>
        </Container>
      </section>

      <WorkSlider slides={slides} />

      <CtaBanner />
    </>
  );
}
