import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 启用静态图片优化
  images: {
    // 允许的图片域名
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
