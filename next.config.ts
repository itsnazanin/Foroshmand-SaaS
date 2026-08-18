import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mantoform.com",
      },
      {
        protocol: "https",
        hostname: "luxurydress.ir"
      },
      {
        protocol: "https",
        hostname: "www.sarabara.com"
      }
    ],
  },
};

export default nextConfig;