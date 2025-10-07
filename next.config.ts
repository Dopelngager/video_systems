import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  output: "standalone",
  // output: "export",
  // basePath: "/video-systems",
  // assetPrefix: "/video-systems/",
  // webpack(config) {
  //   config.plugins.push(
  //     new CopyWebpackPlugin({
  //       patterns: [{ from: ".next/static", to: "static" }],
  //     })
  //   );
  //   return config;
  // },
};

export default nextConfig;
