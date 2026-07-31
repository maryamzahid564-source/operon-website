import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="bg-charcoal py-24 text-cream sm:py-28">
      <Container className="flex flex-col items-start gap-8 sm:items-center sm:text-center">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          Let&rsquo;s talk about your portfolio.
        </h2>
        <p className="max-w-xl text-cream/60">
          Tell us about your assets and we&rsquo;ll come back with a proposal
          built around how you actually operate.
        </p>
        <Button href="/contact" variant="primary">
          Request a Proposal
        </Button>
      </Container>
    </section>
  );
}
