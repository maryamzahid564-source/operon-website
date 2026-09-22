import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team — Operon Middle East",
  description:
    "Meet the people leading Operon and supporting our teams across the UAE.",
  alternates: { canonical: "/our-team" },
};

// Management profiles (photo, name, designation) arrive from OME with
// the photoshoot — placeholders hold the layout until then.
const placeholders = Array.from({ length: 8 });

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our team
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              {team.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey">
              {team.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {placeholders.map((_, i) => (
              <Reveal key={i} delay={(i % 4) * 70}>
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <div className="absolute inset-x-6 bottom-6 space-y-2">
                    <span className="block h-2 w-2/3 bg-black/[0.07]" />
                    <span className="block h-2 w-1/2 bg-black/[0.07]" />
                  </div>
                </div>
                <p className="mt-3 text-sm font-bold text-black">Name</p>
                <p className="text-xs text-grey">Designation</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-12 text-sm leading-relaxed text-grey">
              Leadership profiles and photography are being prepared and will
              appear here shortly.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
