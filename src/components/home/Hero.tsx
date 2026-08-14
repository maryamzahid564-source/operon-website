import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { stats, credentials } from "@/lib/content";
import { photoFor } from "@/lib/images";

export default function Hero() {
  const heroSrc = photoFor("home-hero");

  return (
    <>
      <section className="relative -mt-20 flex min-h-[92svh] lg:-mt-24 flex-col justify-end overflow-hidden bg-black">
        <div className="kenburns absolute inset-0">
          {heroSrc ? (
            <Image
              src={heroSrc}
              alt="Aerial view of a managed community in the Operon portfolio"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#2a2a2a]" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/60 to-transparent" />

        <Container className="relative pb-20 pt-44 sm:pb-24">
          <Reveal>
            <span className="mb-5 block h-0.5 w-10 bg-green" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Facilities Management &middot; UAE
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Measured by what
              <br />
              we deliver.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Integrated facilities management for 300+ buildings across the
              UAE &mdash; delivered to one standard since 2008.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button href="/contact" variant="primary">
                Request a Proposal
              </Button>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white underline-offset-8 transition-colors hover:text-green hover:underline"
              >
                Explore our projects
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-4 sm:py-16">
              {stats.map((s) => (
                <div key={s.label}>
                  <CountUp
                    value={s.value}
                    className="text-3xl font-black tracking-tight text-green sm:text-4xl"
                  />
                  <p className="mt-2 text-sm leading-snug text-grey">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>

        <div className="border-y border-black/10 bg-mist">
          <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-6">
            <span className="text-xs font-bold uppercase tracking-widest text-grey">
              Certifications &amp; memberships
            </span>
            {credentials.map((c) => (
              <span key={c.name} className="text-sm text-black/70">
                {c.name}
              </span>
            ))}
          </Container>
        </div>
      </section>
    </>
  );
}
