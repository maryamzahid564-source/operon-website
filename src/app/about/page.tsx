import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import Values from "@/components/home/Values";
import WhyOperon from "@/components/home/WhyOperon";
import CtaBanner from "@/components/home/CtaBanner";
import { about } from "@/lib/content";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Who We Are — Operon Middle East",
  description:
    "Operon Middle East is a UAE-based integrated facilities management company — part of UEM Edgenta, combining deep knowledge of the UAE market with international expertise, engineering capability and strong governance.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section id="about" className="scroll-mt-28 bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Who we are
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              {about.headline}
            </h1>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 max-w-xl text-base leading-relaxed text-grey">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <Photo
              src={photoFor("about-team") ?? photoFor("environments/master-communities")}
              alt="Operon teams at work across the UAE"
              aspect="aspect-[4/5] max-h-[640px]"
              className=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="max-w-3xl text-2xl font-bold leading-snug tracking-tight text-black sm:text-3xl">
              Local where it matters.{" "}
              <span className="text-green">Global where it counts.</span>
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-grey">
              As part of UEM Edgenta, we combine deep knowledge of the UAE
              market with international expertise, engineering capability and
              strong governance.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-black/10 pt-10 sm:grid-cols-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our mission
              </p>
              <p className="mt-4 border-l-2 border-green pl-5 text-lg font-bold leading-snug text-black">
                {about.mission}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our vision
              </p>
              <p className="mt-4 border-l-2 border-green pl-5 text-lg font-bold leading-snug text-black">
                {about.vision}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <div id="foundation" className="scroll-mt-28">
        <WhyOperon />
      </div>

      <Values />

      <CtaBanner />
    </>
  );
}
