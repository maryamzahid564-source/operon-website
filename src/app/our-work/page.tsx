import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
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
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
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

      <div className="mt-14 sm:mt-20">
        {environments.map((e, i) => {
          const even = i % 2 === 0;
          return (
            <section
              key={e.slug}
              id={e.slug}
              className={`scroll-mt-28 py-14 sm:py-20 ${even ? "bg-white" : "bg-mist"}`}
            >
              <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className={even ? "" : "lg:order-2"}>
                  <span className="text-sm font-bold text-grey">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
                    {e.name}
                  </h2>
                  <p className="mt-4 text-lg font-bold leading-snug text-green">
                    {e.headline}
                  </p>
                  {e.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)} className="mt-4 max-w-xl text-base leading-relaxed text-grey">
                      {p}
                    </p>
                  ))}
                  <div className="mt-7 border-t border-black/10 pt-6">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                      What we focus on
                    </p>
                    <div className="mt-4 flex max-w-xl flex-wrap gap-x-2 gap-y-2">
                      {e.focus.map((f) => (
                        <span
                          key={f}
                          className="border border-black/15 px-3 py-1.5 text-xs text-black/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={100} className={even ? "" : "lg:order-1"}>
                  <Photo
                    src={photoFor(`environments/${e.slug}`)}
                    alt={e.name}
                    aspect="aspect-[4/3]"
                    className=""
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <CtaBanner />
    </>
  );
}
