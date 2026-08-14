"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Gentle scroll parallax: the child drifts vertically as the section moves
 * through the viewport. Progressive enhancement — without JS (or with
 * reduced motion) the child simply stays put.
 */
export default function Parallax({
  children,
  strength = 36,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const vh = window.innerHeight;
      // -1 when the section sits below the viewport, +1 above, 0 centred.
      const progress = Math.max(
        -1,
        Math.min(1, (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2))
      );
      el.style.transform = `translateY(${(-progress * strength).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
