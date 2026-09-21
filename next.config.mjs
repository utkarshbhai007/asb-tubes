/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "asbtubes.com",
      },
      {
        protocol: "https",
        hostname: "www.asbtubes.com",
      },
    ],
  },
};

export default nextConfig;

