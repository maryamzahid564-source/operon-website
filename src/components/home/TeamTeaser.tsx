import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { team } from "@/lib/content";

// "Meet the Team" — people-focused teaser; profiles and photography
// arrive from OME with the shoot.
export default function TeamTeaser() {
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
          {[0, 1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 70}>
              <Link href="/our-team" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <div className="absolute inset-x-6 bottom-6 space-y-2">
                    <span className="block h-2 w-2/3 bg-black/[0.07]" />
                    <span className="block h-2 w-1/2 bg-black/[0.07]" />
                  </div>
                </div>
                <p className="mt-3 text-sm font-bold text-black transition-colors group-hover:text-green">
                  Profile coming soon
                </p>
                <p className="text-xs text-grey">Designation</p>
              </Link>
            </Reveal>
          ))}
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
