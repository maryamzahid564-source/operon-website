"use client";

import { useRef, ReactNode } from "react";

/**
 * Horizontal scroll-snap showcase. The track bleeds full-width while its
 * padding keeps the first card aligned with the page container; arrows
 * advance one card at a time. Degrades to native swipe/scroll without JS.
 */
export default function Scroller({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  const advance = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild;
    const step = first
      ? first.getBoundingClientRect().width + 20
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-8 lg:px-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:[scroll-padding-left:max(3rem,calc((100vw-80rem)/2+3rem))] [&::-webkit-scrollbar]:hidden scroll-pl-6 sm:scroll-pl-8"
      >
        {children}
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-7xl justify-end gap-3 px-6 sm:px-8 lg:px-12">
        <button
          onClick={() => advance(-1)}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition-all hover:border-green hover:bg-green hover:text-white"
        >
          <svg width="16" height="12" viewBox="0 0 14 10" fill="none" className="rotate-180">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => advance(1)}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center border border-black/20 text-black transition-all hover:border-green hover:bg-green hover:text-white"
        >
          <svg width="16" height="12" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
