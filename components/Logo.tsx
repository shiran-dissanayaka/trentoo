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
 * stem. The gradient (#lmGrad) is defined once in the root layout.
 */
export function Logo({ size = 28, className, decorative = false }: LogoProps) {
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
      <g fill="none" stroke="url(#lmGrad)" strokeWidth={3.4} strokeLinecap="round">
        <path d="M9 12H31" />
        <path d="M20 12V31" />
      </g>
      <circle cx="9" cy="12" r="2.5" fill="url(#lmGrad)" />
      <circle cx="31" cy="12" r="2.5" fill="url(#lmGrad)" />
      <circle className="lm-pulse" cx="20" cy="21" r="2.6" fill="#F0913A" />
    </svg>
  );
}

/** Hidden shared gradient def for the logo mark. Rendered once in layout. */
export function LogoGradientDef() {
  return (
    <svg
      width={0}
      height={0}
      aria-hidden
      focusable="false"
      style={{ position: "absolute" }}
    >
      <defs>
        <linearGradient id="lmGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B4BE8" />
          <stop offset="0.52" stopColor="#C9407A" />
          <stop offset="1" stopColor="#F0913A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
