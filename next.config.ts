import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
};

export default nextConfig;
