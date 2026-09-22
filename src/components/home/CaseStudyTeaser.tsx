import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Scroller from "@/components/ui/Scroller";
import { environments } from "@/lib/content";
import { photoFor } from "@/lib/images";

// "Where our work comes to life" — the six environments Operon manages.
// No client or project names appear anywhere in this section.
export default function CaseStudyTeaser() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our work
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                Where our work comes to life.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-grey">
                From master communities and residential developments to
                commercial spaces, retail and lifestyle destinations, our
                teams work behind the scenes to keep places performing
                every day.
              </p>
            </div>
            <p className="text-sm font-bold text-grey">
              01 &mdash; {String(environments.length).padStart(2, "0")}
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="mt-10">
        <Scroller ariaLabel="Environments we manage">
          {environments.map((e, i) => {
            const src = photoFor(`environments/${e.slug}`);
            return (
              <Link
                key={e.slug}
                href={`/our-work#${e.slug}`}
                className="group relative block aspect-[16/11] w-[82vw] shrink-0 snap-start overflow-hidden bg-black sm:aspect-[16/10] sm:w-[480px] lg:w-[600px]"
              >
                {src ? (
                  <Image
                    src={src}
                    alt={e.name}
                    fill
                    sizes="(min-width: 1024px) 600px, (min-width: 640px) 480px, 82vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-mist" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <span className="absolute left-6 top-6 text-sm font-bold tracking-tight text-white/70 sm:left-8 sm:top-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 sm:p-8">
                  <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    {e.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                    {e.summary}
                  </p>
                  <span className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/0 transition-all duration-500 group-hover:text-white">
                    Explore
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
          <Link
            href="/our-work"
            className="group flex aspect-[16/11] w-[82vw] shrink-0 snap-start flex-col justify-between bg-green p-8 text-white sm:aspect-[16/10] sm:w-[480px] lg:w-[600px]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80">
              Our work
            </p>
            <div>
              <p className="text-2xl font-bold leading-snug sm:text-3xl">
                See every environment
                <br />
                we manage.
              </p>
              <span className="mt-6 flex h-12 w-12 items-center justify-center border border-white/60 transition-all group-hover:bg-white group-hover:text-green">
                <svg width="18" height="13" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </Scroller>
      </div>
    </section>
  );
}
