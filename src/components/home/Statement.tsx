import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

// Full-width typographic statement — the brand promise, verbatim from the
// OME brand guidelines, set at display scale.
export default function Statement() {
  return (
    <section className="overflow-hidden bg-mist py-16 sm:py-24">
      <Container>
        <Reveal>
          <span className="mb-5 block h-0.5 w-12 bg-green" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
            Our promise
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-5xl text-3xl font-bold leading-[1.14] tracking-tight text-black sm:text-4xl lg:text-5xl xl:text-6xl">
            We show up, we deliver, and we earn the trust of every client we
            serve &mdash; <span className="text-green">every single day.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
