"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger index within a group → adds transition-delay. */
  index?: number;
  /** Per-step delay in ms (default 90). */
  step?: number;
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper. The wrapper animates opacity/translateY; the child
 * (e.g. a card) keeps its own hover transform, so the two never conflict.
 */
export function Reveal({
  children,
  className,
  index = 0,
  step = 90,
  as: Tag = "div",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${index * step}ms` }}
    >
      {children}
    </Tag>
  );
}
