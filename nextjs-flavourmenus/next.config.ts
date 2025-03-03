import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
  reactStrictMode: false
};

export default nextConfig;
