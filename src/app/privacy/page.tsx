import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Operon Middle East website.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey">
          Operon Middle East&rsquo;s privacy policy will be published here at
          launch. For any questions about how we handle your information in
          the meantime, please contact{" "}
          <a href="mailto:info@operon.co" className="text-green underline underline-offset-4">
            info@operon.co
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
