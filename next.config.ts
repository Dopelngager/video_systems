import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/video-systems",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
