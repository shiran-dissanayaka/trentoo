"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently under a thin band near
 * the top-middle of the viewport. Uses a single IntersectionObserver; when no
 * tracked section is in the band it keeps the previous value (no flicker).
 *
 * Pass a STABLE `ids` array (e.g. a module constant) so the observer isn't
 * torn down on every render.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>("");
  const intersecting = useRef<Set<string>>(new Set());

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    intersecting.current = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.current.add(entry.target.id);
          else intersecting.current.delete(entry.target.id);
        }
        // Prefer the first tracked id (document order) currently in the band.
        for (const id of ids) {
          if (intersecting.current.has(id)) {
            setActive(id);
            return;
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
