import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import { stats, credentials } from "@/lib/content";
import { photoFor } from "@/lib/images";

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="pt-16 sm:pt-20 lg:pt-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
            Operon Middle East &middot; UAE
          </p>
          <h1 className="mt-6 max-w-4xl text-[2.75rem] font-black leading-[1.04] tracking-[-0.02em] text-black sm:text-6xl lg:text-[4.75rem]">
            Measured by what we deliver.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-grey sm:text-lg">
            Integrated facilities management for 300+ buildings across the
            UAE &mdash; engineering, cleaning, security and energy,
            delivered to one standard since 2008.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Request a Proposal
            </Button>
          </div>
        </Reveal>
      </Container>

      <Reveal delay={100}>
        <div className="mt-16 sm:mt-20">
          <Photo
            src={photoFor("home-hero")}
            alt="Aerial view of a managed community in the Operon portfolio"
            aspect="aspect-[16/10] sm:aspect-[21/9] max-h-[680px]"
            sizes="100vw"
            priority
          />
        </div>
      </Reveal>

      <Container className="mt-16 sm:mt-20">
        <Reveal delay={150}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-black text-4xl text-black sm:text-5xl tracking-tight">{s.value}</p>
                <p className="mt-2 text-xs leading-snug text-grey sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="mt-16 border-t border-black/10 bg-mist sm:mt-20">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-grey">
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
  );
}
