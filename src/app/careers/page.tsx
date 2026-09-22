import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ApplyForm from "@/components/careers/ApplyForm";
import { careersIntro } from "@/lib/content";
import { vacancies, isOpen } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers — Join Our Team at Operon Middle East",
  description:
    "Explore current opportunities at Operon Middle East and find your place with a growing UAE facilities management team.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  // Vacancies auto-hide once their closing date has passed.
  const open = vacancies.filter((v) => isOpen(v));

  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Careers
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              {careersIntro.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-grey">
              {careersIntro.intro}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <span className="mb-5 block h-0.5 w-12 bg-green" />
            <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Current opportunities
            </h2>
          </Reveal>

          {open.length === 0 ? (
            <Reveal delay={100}>
              <div className="mt-10 border border-black/10 bg-mist p-10">
                <p className="text-base font-bold text-black">
                  There are no open vacancies right now.
                </p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-grey">
                  New roles are posted here as they open. You&rsquo;re welcome
                  to send a general application below and we&rsquo;ll keep it
                  on file.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {open.map((v, i) => (
                <Reveal key={v.id} delay={i * 60}>
                  <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black sm:text-xl">{v.title}</h3>
                      <p className="mt-1 text-sm text-grey">
                        {v.location} &middot; {v.department} &middot; Apply by{" "}
                        {new Date(v.closingDate + "T00:00:00").toLocaleDateString("en-AE", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-grey">
                        {v.details}
                      </p>
                    </div>
                    <a
                      href="#apply"
                      className="inline-flex w-fit shrink-0 items-center border border-black px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-black hover:text-white"
                    >
                      Apply
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <section id="apply" className="scroll-mt-28 bg-mist py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Apply
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl">
              Send us your application.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-grey">
              Choose a role &mdash; or send a general application &mdash; and
              tell us a little about yourself. We read every one.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ApplyForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
