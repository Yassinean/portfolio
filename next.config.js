/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: "export",
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "github.com",
      // Add other image domains you might need
    ],
    unoptimized: true,
  },
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable webpack5
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
  // Customize headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
  // Customize redirects
  async redirects() {
    return [];
  },
  // Environment variables that should be exposed to the client
  env: {
    // Add your public env variables here
  },
};

module.exports = nextConfig;