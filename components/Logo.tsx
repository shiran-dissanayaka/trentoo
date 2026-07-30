"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

interface LogoProps {
  size?: number;
  className?: string;
  /** Set aria-hidden when the surrounding link already names it. */
  decorative?: boolean;
}

/**
 * Trentoo mark: a stylised "T" built from a telemetry signal path — a
 * gradient crossbar + stem with two end nodes and a pulse that travels the
 * stem. The gradient is defined *inside* this SVG with a unique id, so the
 * mark renders reliably anywhere (no dependency on a shared external def).
 */
export function Logo({ size = 28, className, decorative = false }: LogoProps) {
  // Unique, selector-safe id per instance (avoids duplicate-id / cross-svg
  // reference issues that can make the paint fail to resolve).
  const grad = "lmGrad-" + useId().replace(/[^a-zA-Z0-9-]/g, "");
  const paint = `url(#${grad})`;

  return (
    <svg
      className={cn("logo-mark", className)}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Trentoo logo mark"}
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* userSpaceOnUse so the gradient paints straight (zero-bbox) lines —
            objectBoundingBox can't resolve on a horizontal/vertical stroke. */}
        <linearGradient
          id={grad}
          gradientUnits="userSpaceOnUse"
          x1="8"
          y1="10"
          x2="32"
          y2="32"
        >
          <stop offset="0" stopColor="#5B4BE8" />
          <stop offset="0.52" stopColor="#C9407A" />
          <stop offset="1" stopColor="#F0913A" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={paint} strokeWidth={3.4} strokeLinecap="round">
        <path d="M9 12H31" />
        <path d="M20 12V31" />
      </g>
      <circle cx="9" cy="12" r="2.5" fill={paint} />
      <circle cx="31" cy="12" r="2.5" fill={paint} />
      <circle className="lm-pulse" cx="20" cy="21" r="2.6" fill="#F0913A" />
    </svg>
  );
}
