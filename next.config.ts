/* eslint-disable @typescript-eslint/no-explicit-any */
// next.config.ts
const nextConfig = {
  experimental: {
    serverActions: true,
    turbo: false,
  },
  reactStrictMode: false,
  images: {
    domains: ["us-west-2.graphassets.com", "lh3.googleusercontent.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as any;

export default nextConfig;
