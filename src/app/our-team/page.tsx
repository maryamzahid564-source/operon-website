import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import { team } from "@/lib/content";
import { teamMembers } from "@/lib/team";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Executive Team — Operon Middle East",
  description:
    "Meet the executive team leading Operon and supporting our teams across the UAE.",
  alternates: { canonical: "/our-team" },
};

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Executive team
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
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
            {teamMembers.map((m, i) => {
              const src = photoFor(`team/${m.slug}`);
              return (
                <Reveal key={m.slug} delay={(i % 3) * 70}>
                  <div className="group relative aspect-[3/4] overflow-hidden bg-white ring-1 ring-black/5">
                    {src && (
                      <Image
                        src={src}
                        alt={m.name}
                        fill
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <p className="mt-3 text-sm font-bold text-black sm:text-base">
                    {m.name}
                  </p>
                  {m.designation && (
                    <p className="text-xs text-grey sm:text-sm">{m.designation}</p>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
