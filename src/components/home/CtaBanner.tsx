import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="bg-black py-24 text-white sm:py-32">
      <Container className="flex flex-col items-start gap-8 sm:items-center sm:text-center">
        <Reveal className="flex flex-col items-start gap-8 sm:items-center">
          <h2 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
            Let&rsquo;s talk about your portfolio.
          </h2>
          <p className="max-w-xl text-white/60">
            Tell us about your assets and we&rsquo;ll come back with a
            proposal built around how you actually operate.
          </p>
          <Button href="/contact" variant="primary">
            Request a Proposal
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
