"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { CaseStudy } from "@/lib/content";

export default function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.map((c) => c.sector)))],
    [caseStudies]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? caseStudies : caseStudies.filter((c) => c.sector === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {sectors.map((sector) => (
          <button
            key={sector}
            aria-pressed={active === sector}
            onClick={() => setActive(sector)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              active === sector
                ? "border-green bg-green text-white"
                : "border-black/15 text-black/70 hover:border-black/40"
            }`}
          >
            {sector}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 6) * 60}>
            <Link href={`/case-studies/${c.slug}`} className="group block">
              <ImagePlaceholder aspect="aspect-[4/3]" className="rounded-2xl" />
              <p className="mt-5 text-xs font-bold uppercase tracking-wide text-green">
                {c.sector} &middot; {c.location}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug text-black transition-colors group-hover:text-green">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey">
                {c.valueDelivered}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
