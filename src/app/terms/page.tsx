import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Operon Middle East website.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="bg-white pb-14 pt-16 sm:pb-20 sm:pt-20 lg:pt-24">
      <Container>
        <Reveal>
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey">
          The terms and conditions for use of this website will be published
          here at launch. For any questions in the meantime, please contact{" "}
          <a href="mailto:info@operon.co" className="text-green underline underline-offset-4">
            info@operon.co
          </a>
          .
        </p>
        </Reveal>
      </Container>
    </section>
  );
}
