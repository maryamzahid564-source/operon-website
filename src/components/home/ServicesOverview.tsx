import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/content";
import { photoFor } from "@/lib/images";

export default function ServicesOverview() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                What we do
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-black sm:text-3xl tracking-tight">
                Six disciplines.
                <br />
                One accountable partner.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-grey lg:pb-1">
              From critical building systems to guest-facing services, every
              discipline is delivered by our own teams, to one standard,
              under one contract.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const src = photoFor(`services/${s.slug}`);
            return (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col">
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
                    <h3 className="text-lg font-bold text-black transition-colors group-hover:text-green sm:text-xl">
                      {s.name}
                    </h3>
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
  );
}
