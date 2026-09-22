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
import { SITE_URL, SITE_NAME } from "@/lib/site";

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
    title: `${service.name} in Dubai & the UAE`,
    description: `${service.name} from Operon Middle East — ${service.summary}`,
    alternates: { canonical: `/what-we-do/${service.slug}` },
    openGraph: {
      title: `${service.name} | Operon Middle East`,
      description: service.summary,
    },
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

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    url: `${SITE_URL}/what-we-do/${service.slug}`,
    areaServed: "AE",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="bg-white pt-16 sm:pt-20 lg:pt-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              What we do
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black sm:text-xl">
              {service.headline}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-grey">
              {service.paragraphs[0]}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              src={photoFor(`services/${service.slug}`)}
              alt={service.name}
              aspect="aspect-[4/5] max-h-[640px]"
              className=""
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Overview
              </p>
              {service.paragraphs.slice(1).map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-grey">
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Talk to Us
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
              Our capabilities include
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

      <section className="bg-mist py-14 sm:py-20">
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
                  href={`/what-we-do/${s.slug}`}
                  className="group flex h-full flex-col justify-between border border-black/10 bg-white p-6 transition-colors hover:border-black hover:bg-black"
                >
                  <span className="text-base font-bold text-black transition-colors group-hover:text-white">
                    {s.name}
                  </span>
                  <span className="mt-6 flex h-9 w-9 items-center justify-center border border-black/20 text-black transition-all group-hover:border-green group-hover:bg-green group-hover:text-white">
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
