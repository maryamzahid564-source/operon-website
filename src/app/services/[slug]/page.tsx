import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Photo from "@/components/ui/Photo";
import CtaBanner from "@/components/home/CtaBanner";
import { services } from "@/lib/content";
import { photoFor } from "@/lib/images";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Operon Middle East`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Services
            </p>
            <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey">
              {service.tagline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-grey">
              {service.summary}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              src={photoFor(`services/${service.slug}`)}
              alt={service.name}
              aspect="aspect-[4/5] max-h-[640px]"
              className="rounded-3xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Overview
              </p>
              <p className="mt-5 text-base leading-relaxed text-grey">
                {service.description}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a Proposal
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              What&rsquo;s included
            </p>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-center gap-4 py-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0"
                  >
                    <circle cx="10" cy="10" r="9.25" stroke="#55A755" strokeWidth="1.5" />
                    <path
                      d="M6 10.2L8.5 12.7L14 7"
                      stroke="#55A755"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm leading-snug text-black/80">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {service.framework && (
        <section className="bg-white pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                  How it works
                </p>
                <h2 className="mt-4 text-2xl font-bold text-black sm:text-3xl tracking-tight">
                  {service.framework.heading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-grey">
                  {service.framework.intro}
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {service.framework.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 70} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl bg-mist p-6">
                    <span className="text-sm font-bold text-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {service.groupImpact && (
        <section className="bg-black py-24 text-white sm:py-32">
          <Container>
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                  Group impact
                </p>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl tracking-tight">
                  {service.groupImpact.heading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/60">
                  {service.groupImpact.intro}
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-10 sm:grid-cols-3">
              {service.groupImpact.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 60}>
                  <p className="text-2xl font-black text-green sm:text-3xl tracking-tight">{s.value}</p>
                  <p className="mt-2 text-xs leading-snug text-white/60 sm:text-sm">
                    {s.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-xs leading-relaxed text-white/55">
              {service.groupImpact.note}
            </p>
          </Container>
        </section>
      )}

      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Explore more
            </p>
            <h2 className="mt-4 text-2xl font-bold text-black sm:text-3xl tracking-tight">
              Other services
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-black hover:bg-black"
                >
                  <span className="text-base font-bold text-black transition-colors group-hover:text-white">
                    {s.name}
                  </span>
                  <span className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black transition-all group-hover:border-green group-hover:bg-green group-hover:text-white">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M1 5H13M13 5L9 1M13 5L9 9"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
