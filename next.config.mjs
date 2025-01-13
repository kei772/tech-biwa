/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 開発環境ではbasePathを適用しない
  basePath: process.env.NODE_ENV === 'production' ? '/tech-biwa' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  }
}

export default nextConfig
