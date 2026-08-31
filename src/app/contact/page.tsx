import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import RfqForm from "@/components/contact/RfqForm";

export const metadata: Metadata = {
  title: "Contact & Request a Proposal",
  description:
    "Request a facilities management proposal from Operon Middle East. Call +971 800 4145 or tell us about your assets — hard FM, soft FM, energy and technology across Dubai and the UAE.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
            Contact
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
            Let&rsquo;s talk about your portfolio.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey">
            Tell us about your assets and we&rsquo;ll come back with a
            proposal built around how you actually operate.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal delay={80}>
            <div className="space-y-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-black/60">
                  Phone
                </p>
                <a href="tel:+9718004145" className="mt-2 block text-lg font-bold text-black hover:text-green">
                  +971 800 4145
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-black/60">
                  Email
                </p>
                <a href="mailto:info@operon.co" className="mt-2 block text-lg font-bold text-black hover:text-green">
                  info@operon.co
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-black/60">
                  Location
                </p>
                <p className="mt-2 text-lg font-bold text-black">
                  United Arab Emirates
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <RfqForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
