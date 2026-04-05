import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export — deploy to any CDN, no Node server needed
  output: "export",

  // next/image needs this for static export; swap domains in if you host images externally
  images: {
    unoptimized: true,
  },

  // Trailing slash for clean static export URLs
  trailingSlash: true,
}

export default nextConfig
