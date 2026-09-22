import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CtaBanner from "@/components/home/CtaBanner";
import { services } from "@/lib/content";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "What We Do — Integrated Facilities Management Services",
  description:
    "Six disciplines, one accountable partner: integrated facilities management, engineering and technical services, soft services, smart FM and technology, sustainability and energy management, and projects and asset solutions across the UAE.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDoPage() {
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
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

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const src = photoFor(`services/${s.slug}`);
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                  <Link href={`/what-we-do/${s.slug}`} className="group flex h-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                      {src && (
                        <Image
                          src={src}
                          alt={s.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      )}
                      <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center bg-green text-xs font-bold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col pt-5">
                      <h2 className="text-lg font-bold text-black transition-colors group-hover:text-green sm:text-xl">
                        {s.name}
                      </h2>
                      <p className="mt-2 text-[15px] leading-relaxed text-grey">
                        {s.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors group-hover:text-green">
                        Explore
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
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
