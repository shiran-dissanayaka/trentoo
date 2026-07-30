import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: string;
  className?: string;
}

/** Eyebrow + h2 + optional lede, used at the top of each section. */
export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[640px]", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        id={titleId}
        className="mt-3.5 mb-3 font-display text-[clamp(28px,3.6vw,40px)] font-semibold leading-[1.1] tracking-[-0.02em]"
      >
        {title}
      </h2>
      {description && (
        <p className="text-[16.5px] text-muted">{description}</p>
      )}
    </div>
  );
}
