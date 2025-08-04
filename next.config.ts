import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "assets.aceternity.com", // Aceternity assets
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  webpack: (config, { dev }) => {
    if (!dev) {
      // Optimize for production builds
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          motion: {
            name: 'motion',
            test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
            priority: 30,
            chunks: 'async',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;