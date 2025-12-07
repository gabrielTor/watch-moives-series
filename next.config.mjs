/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "cdn.watchmode.com",
      },
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
};

export default nextConfig;
