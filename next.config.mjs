/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ========================================
    // ADD YOUR IMAGE DOMAINS HERE IF NEEDED
    // ========================================
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
