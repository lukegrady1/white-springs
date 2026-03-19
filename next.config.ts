import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/white-springs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
