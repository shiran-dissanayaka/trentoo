"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  /** Fraction of the element visible before it counts as in view. */
  threshold?: number;
  rootMargin?: string;
  /** Reveal only once, then stop observing (default true). */
  once?: boolean;
}

/**
 * Typed IntersectionObserver hook. Returns a ref to attach and a boolean.
 * Respects prefers-reduced-motion by reporting "in view" immediately, so
 * content is never gated behind motion.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.16, rootMargin = "0px 0px -8% 0px", once = true } =
    options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      // Reveal on the next frame (avoids a synchronous setState in the
      // effect body). Reduced-motion visibility is also CSS-enforced.
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
