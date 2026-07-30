"use client";

import { useEffect, useRef } from "react";

/** Thin brand-gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? st / h : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden />;
}
