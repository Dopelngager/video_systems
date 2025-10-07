import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/video_systems",
  assetPrefix: "/video_systems/",
};

export default nextConfig;
