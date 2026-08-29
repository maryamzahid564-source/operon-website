import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";
import { sectors } from "@/lib/content";
import { photoFor } from "@/lib/images";

// "Facilities in focus" — the environments Operon operates in, as full-bleed
// photographic tiles. Framework and descriptors verbatim from the deck.
export default function Sectors() {
  return (
    <section className="bg-white pb-0 pt-14 sm:pt-20">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 pb-10 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Facilities in focus
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                Trusted across diverse environments.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-grey">
              From residential communities to operationally complex
              destinations &mdash; managed with consistency, compliance and
              operational discipline.
            </p>
          </div>
        </Reveal>
      </Container>

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((s, i) => {
          const src = photoFor(s.slot);
          return (
            <Link
              key={s.name}
              href="/case-studies"
              className="group relative block h-80 overflow-hidden bg-black sm:h-96 lg:h-[28rem]"
            >
              {src && (
                <Parallax className="absolute inset-x-0 -inset-y-12">
                  <Image
                    src={src}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                </Parallax>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <span className="absolute left-6 top-6 text-sm font-black tracking-tight text-white/60 sm:left-7 sm:top-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 sm:p-7">
                <h3 className="text-xl font-bold leading-snug text-white">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-snug text-white/70">
                  {s.detail}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
