import type { ReactNode } from "react";
import type { IconName } from "@/lib/content";

const paths: Record<IconName, ReactNode> = {
  code: <path d="M8 6 3 12l5 6M16 6l5 6-5 6" />,
  ai: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <rect x="8" y="8" width="8" height="8" rx="2" />
    </>
  ),
  ad: <path d="M3 11l18-8-4 18-5-6-4 4z" />,
  os: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  laptop: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 20h20" />
    </>
  ),
  network: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  device: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

/** Decorative line icon. Inherits color from `currentColor`. */
export function Icon({ name, size = 21, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
