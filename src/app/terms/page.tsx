import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Operon Middle East website.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
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
      </Container>
    </section>
  );
}
