"use client";

import { useEffect, useRef } from "react";

const stats: { v: string; l: string }[] = [
  { v: "Web", l: "full-stack" },
  { v: "Data", l: "apis · db" },
  { v: "AI", l: "rag · nlp" },
];

/** Hero "telemetry" signal card: animated waveform + traveling pulse dot. */
export function SignalCard() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pulseRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const path = pathRef.current;
    const pulse = pulseRef.current;

    if (reduce) {
      svgRef.current?.pauseAnimations?.();
      if (pulse) pulse.style.display = "none";
      return;
    }
    if (!path || !pulse) return;

    const len = path.getTotalLength();
    const dur = 3600;
    let start: number | null = null;
    let raf = 0;
    const frame = (ts: number) => {
      if (start === null) start = ts;
      const t = ((ts - start) % dur) / dur;
      const p = path.getPointAtLength(t * len);
      pulse.setAttribute("cx", String(p.x));
      pulse.setAttribute("cy", String(p.y));
      raf = window.requestAnimationFrame(frame);
    };
    raf = window.requestAnimationFrame(frame);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-surface px-[26px] pb-5 pt-[26px]">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[11.5px] text-muted-dim">
          {"// trentoo.telemetry"}
        </span>
        <span className="flex items-center gap-[7px] font-mono text-[11.5px] text-muted">
          <span className="signal-live" aria-hidden />
          live
        </span>
      </div>

      <svg
        ref={svgRef}
        className="block h-[120px] w-full"
        viewBox="0 0 340 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5B4BE8">
              <animate
                attributeName="stop-color"
                values="#5B4BE8;#C9407A;#F0913A;#5B4BE8"
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="55%" stopColor="#C9407A">
              <animate
                attributeName="stop-color"
                values="#C9407A;#F0913A;#5B4BE8;#C9407A"
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#F0913A">
              <animate
                attributeName="stop-color"
                values="#F0913A;#5B4BE8;#C9407A;#F0913A"
                dur="9s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M0,74 L60,74 L78,74 L92,30 L108,104 L124,58 L140,74 L210,74 L226,74 L240,44 L256,90 L272,74 L340,74"
          fill="none"
          stroke="url(#sg)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.9}
        />
        <circle ref={pulseRef} r={4.5} fill="#F0913A">
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="3.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <div className="mt-3.5 grid grid-cols-3 gap-3 border-t border-line pt-4">
        {stats.map((s) => (
          <div key={s.v}>
            <div className="font-display text-[20px] font-semibold">{s.v}</div>
            <div className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.06em] text-muted-dim">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
