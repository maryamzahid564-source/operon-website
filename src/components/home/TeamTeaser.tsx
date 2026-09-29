import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";
import { teamMembers } from "@/lib/team";
import { photoFor } from "@/lib/images";

// "Meet the Team" — people-focused teaser with the first four profiles.
export default function TeamTeaser() {
  const featured = teamMembers.slice(0, 4);

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Meet the team
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                {team.headline}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-grey">
                {team.intro}
              </p>
            </div>
            <Button href="/our-team" variant="outline" className="hidden sm:inline-flex">
              Meet the Team
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {featured.map((m, i) => {
            const src = photoFor(`team/${m.slug}`);
            return (
              <Reveal key={m.slug} delay={i * 70}>
                <Link href="/our-team" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                    {src && (
                      <Image
                        src={src}
                        alt={m.name}
                        fill
                        sizes="(min-width: 640px) 25vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <p className="mt-3 text-sm font-bold text-black transition-colors group-hover:text-green">
                    {m.name}
                  </p>
                  {m.designation && <p className="text-xs text-grey">{m.designation}</p>}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/our-team" variant="outline">
            Meet the Team
          </Button>
        </div>
      </Container>
    </section>
  );
}
