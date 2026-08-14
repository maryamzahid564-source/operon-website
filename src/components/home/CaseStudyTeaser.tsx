import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { caseStudies } from "@/lib/content";
import { photoFor } from "@/lib/images";

function ShowcaseCard({
  slug,
  title,
  sector,
  location,
  index,
  featured = false,
  className = "",
  sizes,
}: {
  slug: string;
  title: string;
  sector: string;
  location: string;
  index: number;
  featured?: boolean;
  className?: string;
  sizes: string;
}) {
  const src = photoFor(`case-studies/${slug}`);
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={`group relative block overflow-hidden bg-black ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      ) : (
        <div className="absolute inset-0 bg-mist" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <span className="absolute left-6 top-6 text-sm font-black tracking-tight text-white/70 sm:left-8 sm:top-8">
        {String(index).padStart(2, "0")}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">
          {sector} &middot; {location}
        </p>
        <h3
          className={`mt-2 font-bold leading-snug text-white ${
            featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {title}
        </h3>
        <span className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/0 transition-all duration-500 group-hover:text-white">
          View project
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function CaseStudyTeaser() {
  const [featured, second, third] = caseStudies;

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="mb-5 block h-0.5 w-12 bg-green" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                Our work
              </p>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                The assets that tell our story.
              </h2>
            </div>
            <Button href="/case-studies" variant="outline" className="hidden sm:inline-flex">
              View all projects
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <ShowcaseCard
              slug={featured.slug}
              title={featured.title}
              sector={featured.sector}
              location={featured.location}
              index={1}
              featured
              className="aspect-[4/3] lg:col-span-2 lg:row-span-2 lg:aspect-auto"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <ShowcaseCard
              slug={second.slug}
              title={second.title}
              sector={second.sector}
              location={second.location}
              index={2}
              className="aspect-[16/10] lg:aspect-auto lg:min-h-[220px]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <ShowcaseCard
              slug={third.slug}
              title={third.title}
              sector={third.sector}
              location={third.location}
              index={3}
              className="aspect-[16/10] lg:aspect-auto lg:min-h-[220px]"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 sm:hidden">
          <Button href="/case-studies" variant="outline">
            View all projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
