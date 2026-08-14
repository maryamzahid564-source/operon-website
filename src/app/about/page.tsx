import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import WhyOperon from "@/components/home/WhyOperon";
import Values from "@/components/home/Values";
import CtaBanner from "@/components/home/CtaBanner";
import { photoFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Operon Middle East is an integrated facilities management company in Dubai, UAE — part of the UEM Edgenta Group. Built on trust, delivered with purpose since 2008.",
  alternates: { canonical: "/about" },
};

const brandValues = [
  { title: "Reliability", body: "We deliver on our commitments, every time." },
  { title: "Integrity", body: "We act with honesty and professionalism." },
  { title: "Safety", body: "Every person goes home safely. Non-negotiable." },
  { title: "Excellence", body: "We hold ourselves to a high standard." },
  { title: "People", body: "Our teams are our greatest asset." },
];

const groupProjects = [
  { slot: "group-klcc", name: "KLCC", place: "Kuala Lumpur, Malaysia" },
  { slot: "group-mbfc", name: "Marina Bay Financial Centre", place: "Singapore" },
  { slot: "group-trx", name: "TRX", place: "Kuala Lumpur, Malaysia" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Who we are
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
              Built on trust.
              <br />
              Delivered with purpose.
            </h1>
            <div className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-grey">
              <p>
                Operon Middle East is an integrated facilities management
                company based in the UAE. We manage and maintain the built
                environment for clients across residential, commercial, and
                government assets.
              </p>
              <p>
                Our engineers, technicians, supervisors, and soft services
                teams show up reliably and keep our clients&rsquo; buildings
                running. That operational commitment is at the heart of who
                we are.
              </p>
              <p>
                We are part of the UEM Edgenta Group &mdash; giving us global
                expertise and scale. But Operon Middle East is distinctly
                local: shaped by the UAE market, staffed by UAE-based teams.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              src={photoFor("about-team")}
              alt="Operon technicians at work on site"
              aspect="aspect-[4/5] max-h-[640px]"
              className=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full border-t-2 border-green pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our mission
              </p>
              <p className="mt-5 text-xl font-bold leading-snug text-black sm:text-2xl">
                To keep the UAE&rsquo;s built environment safe, efficient,
                compliant and performing at its best &mdash; showing up and
                delivering for every client, every single day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full border-t-2 border-green pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our vision
              </p>
              <p className="mt-5 text-xl font-bold leading-snug text-black sm:text-2xl">
                To be the region&rsquo;s most trusted facilities management
                partner &mdash; local delivery, global standards,
                institutional strength.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-green py-20 text-white sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
              Our promise
            </p>
            <blockquote className="mt-6 max-w-3xl text-2xl font-bold italic leading-snug sm:text-3xl">
              &ldquo;We show up, we deliver, and we earn the trust of every
              client we serve &mdash; every single day.&rdquo;
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              What guides us
            </p>
            <h2 className="mt-4 text-2xl font-bold text-black sm:text-3xl tracking-tight">
              Five values we hold ourselves to.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {brandValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="border-t-2 border-green pt-5">
                  <h3 className="text-lg font-bold text-black">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Values />

      <WhyOperon />

      <section className="border-t border-black/10 bg-mist py-14 sm:py-20">
        <Container>
          <Reveal>
            <span className="mb-5 block h-0.5 w-10 bg-green" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our team
            </p>
            <h2 className="mt-4 max-w-2xl text-2xl font-bold text-black sm:text-3xl tracking-tight">
              The people behind the delivery.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n, i) => (
              <Reveal key={n} delay={i * 70}>
                <div className="aspect-[3/4] w-full bg-[#e7e7e7]" />
                <div className="mt-4 h-3.5 w-2/3 bg-black/10" />
                <div className="mt-2 h-3 w-1/2 bg-black/5" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-8 text-xs leading-relaxed text-grey">
              Leadership profiles and photography arriving with the upcoming shoot.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Powered by UEM Edgenta
            </p>
            <h2 className="mt-4 max-w-2xl text-2xl font-bold text-black sm:text-3xl tracking-tight">
              Global expertise behind our local delivery.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {groupProjects.map((g, i) => (
              <Reveal key={g.slot} delay={i * 80}>
                <Photo
                  src={photoFor(g.slot)}
                  alt={g.name}
                  aspect="aspect-[4/3]"
                  className=""
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <p className="mt-4 text-base font-bold text-black">{g.name}</p>
                <p className="mt-1 text-sm text-grey">{g.place}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-8 text-xs leading-relaxed text-grey">
              Selected facilities managed across the UEM Edgenta Group portfolio.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
