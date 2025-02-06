import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['utfs.io'], // Add utfs.io to the list of allowed image domains
  },
};

export default nextConfig;
