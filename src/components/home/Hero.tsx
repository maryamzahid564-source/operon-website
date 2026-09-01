import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { stats, credentials } from "@/lib/content";
import { photoFor, videoFor } from "@/lib/images";

export default function Hero() {
  const heroSrc = photoFor("home-hero");
  const heroVideo = videoFor("home-hero");

  return (
    <>
      <section className="hero-timeline relative -mt-20 flex min-h-[100svh] flex-col overflow-hidden bg-black lg:-mt-[8.25rem]">
        <div className="kenburns hero-bg-exit absolute inset-0">
          {heroVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={heroSrc ?? undefined}
            >
              <source src={heroVideo} />
            </video>
          ) : heroSrc ? (
            <Image
              src={heroSrc}
              alt="Commercial towers rising over managed green grounds"
              fill
              sizes="100vw"
              priority
              className="object-cover object-[center_38%]"
            />
          ) : (
            <div className="absolute inset-0 bg-[#2a2a2a]" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/65 to-transparent" />

        <div className="hero-exit relative flex flex-1 flex-col justify-center">
          <Container className="pb-14 pt-40 sm:pb-16">
            <div className="hero-el" style={{ animationDelay: "0.15s" }}>
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Facilities Management &middot; UAE
              </p>
            </div>
            <h1
              className="hero-el mt-6 max-w-5xl text-[2.75rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{ animationDelay: "0.3s" }}
            >
              Measured by what
              <br className="hidden sm:block" />
              we deliver.
            </h1>
            <p
              className="hero-el mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
              style={{ animationDelay: "0.5s" }}
            >
              Integrated facilities management for 300+ buildings across the
              UAE &mdash; delivered to one standard since 2008.
            </p>
            <div
              className="hero-el mt-9 flex flex-wrap items-center gap-6"
              style={{ animationDelay: "0.65s" }}
            >
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
          </Container>

          <div
            className="hero-el absolute bottom-10 right-10 hidden flex-col items-center gap-3 text-white/70 lg:flex"
            style={{ animationDelay: "1s" }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Scroll
            </span>
            <span className="scroll-cue relative block h-14 w-px overflow-hidden bg-white/20" />
          </div>
        </div>

        {/* Live numbers on the first screen — the story starts counting
            before the visitor even scrolls. */}
        <div
          className="hero-el relative border-t border-white/15 bg-black/30 backdrop-blur-sm"
          style={{ animationDelay: "0.85s" }}
        >
          <Container className="grid grid-cols-2 gap-x-6 gap-y-7 py-7 sm:grid-cols-4 sm:py-8">
            {stats.map((s) => (
              <div key={s.label}>
                <CountUp
                  value={s.value}
                  className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                />
                <p className="mt-1.5 text-xs leading-snug text-white/65 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </Container>
        </div>
      </section>

      <div className="border-b border-black/10 bg-mist">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
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
    </>
  );
}
