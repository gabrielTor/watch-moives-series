/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  cacheMaxMemorySize: 10 * 1024 * 1024, // 10MB
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "cdn.watchmode.com" },
      { hostname: "image.tmdb.org" },
    ],
  },
};

export default nextConfig;
