import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-green py-16 text-white sm:py-20">
      <Image
        src="/images/logo-icon-white.png"
        alt=""
        width={620}
        height={618}
        className="pointer-events-none absolute -right-28 -top-28 opacity-10"
      />
      <Container className="relative flex flex-col items-start gap-8 sm:items-center sm:text-center">
        <Reveal className="flex flex-col items-start gap-8 sm:items-center">
          <h2 className="max-w-2xl text-2xl font-bold leading-tight sm:text-3xl tracking-tight">
            Let&rsquo;s talk about your portfolio.
          </h2>
          <p className="max-w-xl text-white/80">
            Tell us about your assets and we&rsquo;ll come back with a
            proposal built around how you actually operate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-black px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
          >
            Request a Proposal
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
