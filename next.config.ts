import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → a plain /out folder that Cloudflare Pages serves directly.
  // The whole site is static, so no server runtime/adapter is needed.
  output: "export",
  // next/image optimization needs a server; with a static export we serve the
  // images as-is (they're already small and appropriately sized).
  images: { unoptimized: true },
  // Emit /route/index.html so paths work cleanly on static hosts.
  trailingSlash: true,

  // Allow the dev server to be reached from any private-LAN IP (e.g. testing on a
  // phone), so this doesn't need updating every time your IP changes. Next matches
  // each "*" against one address segment. Dev-only — no effect on the production build.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
