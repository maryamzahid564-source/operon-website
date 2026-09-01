import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = isStaticExport
  ? {
      // Review builds: a fully static site (all client-side animation intact)
      // that deploys to any static host via drag and drop.
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
      experimental: { viewTransition: true },
    }
  : {
      async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
      },
      experimental: { viewTransition: true },
    };

export default nextConfig;
