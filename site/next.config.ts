import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site pre-renders, so Cloudflare Pages can
  // serve it directly from the `out` directory with no adapter.
  output: "export",
};

export default nextConfig;
