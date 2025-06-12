/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💥 This line tells Vercel not to block the build
  },
};

export default nextConfig;