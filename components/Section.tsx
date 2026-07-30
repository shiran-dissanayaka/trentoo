import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
}

/** Consistent vertical rhythm for page sections. */
export function Section({ id, children, className, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-[62px] md:py-[78px]", className)}
      {...rest}
    >
      {children}
    </section>
  );
}
