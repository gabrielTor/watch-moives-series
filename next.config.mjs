/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.watchmode.com",
      },
    ],
  },
};

export default nextConfig;
