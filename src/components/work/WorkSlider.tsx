"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Environment } from "@/lib/content";

type Slide = Environment & { img: string | null };

/**
 * Full-width environment slider — image and content change together with
 * the left/right arrows. Syncs with the URL hash so nav dropdown links
 * (/our-work#retail) open the matching slide.
 */
export default function WorkSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const paused = useRef(false);

  const go = useCallback(
    (next: number) => {
      const n = (next + slides.length) % slides.length;
      setIndex(n);
      if (typeof history !== "undefined") {
        history.replaceState(null, "", `#${slides[n].slug}`);
      }
    },
    [slides]
  );

  // Open on the slide named in the hash; follow later hash changes too.
  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.replace(/^#/, "");
      const i = slides.findIndex((s) => s.slug === slug);
      if (i >= 0) setIndex(i);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [slides]);

  // Gentle auto-advance — pauses on hover, respects reduced motion, and
  // restarts its clock after any manual navigation.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (!paused.current) go(index + 1);
    }, 6500);
    return () => clearInterval(t);
  }, [index, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(index - 1);
      if (e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Environments we manage"
      className="relative h-[78svh] min-h-[540px] overflow-hidden bg-black"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.slug}
          id={s.slug}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}: ${s.name}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {s.img ? (
            <Image
              src={s.img}
              alt={s.name}
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover transition-transform duration-[1400ms] ease-out ${
                i === index ? "scale-100" : "scale-[1.05]"
              }`}
            />
          ) : (
            <div className="absolute inset-0 bg-[#2a2a2a]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 pb-16 sm:pb-20">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-green">
                {String(i + 1).padStart(2, "0")} &mdash;{" "}
                {String(slides.length).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {s.name}
              </h2>
              <p className="mt-3 max-w-2xl text-lg font-bold leading-snug text-white/95 sm:text-xl">
                {s.headline}
              </p>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-white/75">
                {s.line}
              </p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                {s.chips.join("  ·  ")}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="absolute bottom-16 right-6 z-10 flex gap-3 sm:bottom-20 sm:right-8 lg:right-12">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous environment"
          className="flex h-12 w-12 items-center justify-center border border-white/40 text-white transition-all hover:border-green hover:bg-green"
        >
          <svg width="16" height="12" viewBox="0 0 14 10" fill="none" className="rotate-180">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next environment"
          className="flex h-12 w-12 items-center justify-center border border-white/40 text-white transition-all hover:border-green hover:bg-green"
        >
          <svg width="16" height="12" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Environment tabs */}
      <div className="absolute inset-x-0 top-0 z-10 hidden border-b border-white/15 lg:block">
        <div className="mx-auto flex w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          {slides.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => go(i)}
              aria-current={i === index ? "true" : undefined}
              className={`relative flex-1 py-5 text-xs font-bold uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-green after:transition-transform after:duration-300 ${
                i === index
                  ? "text-white after:scale-x-100"
                  : "text-white/50 after:scale-x-0 hover:text-white/80"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
