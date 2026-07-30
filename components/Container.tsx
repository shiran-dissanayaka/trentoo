import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Centered max-width wrapper (1120px) with responsive gutters. */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1120px] px-5 sm:px-7", className)}>
      {children}
    </Tag>
  );
}
