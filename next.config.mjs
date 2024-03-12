/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
