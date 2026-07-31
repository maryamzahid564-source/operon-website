import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { stats, awards } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container className="relative flex flex-col gap-14 pb-16 pt-28 sm:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Facilities Management &middot; United Arab Emirates
          </p>
          <h1 className="font-serif text-[2.5rem] leading-[1.12] sm:text-5xl lg:text-6xl">
            The infrastructure behind the UAE&rsquo;s most demanding assets.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            Operon Middle East manages the hard and soft services, energy
            performance and technology behind more than 100 assets across the
            region &mdash; backed by a group with over 80 years of experience
            and a standard built for owners who do not compromise.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary">
              Request a Proposal
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/10 pt-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl text-gold sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs leading-snug text-cream/60 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="relative border-t border-cream/10 bg-black/15">
        <Container className="flex flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <span className="text-[11px] uppercase tracking-widest text-cream/40">
            Recognised by
          </span>
          {awards.map((a) => (
            <span key={a.name} className="text-sm text-cream/70">
              {a.name}
            </span>
          ))}
        </Container>
      </div>
    </section>
  );
}
