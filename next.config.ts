import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/video-systems",
  assetPrefix: "/video_systems/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
