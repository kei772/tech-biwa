/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // カスタムドメインを使用するのでbasePathは不要
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  images: {
    unoptimized: true,
  }
}

export default nextConfig
