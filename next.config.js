const HASHNODE_ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/ping/data-event",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/data-event`,
      },
      {
        source: "/ping/view",
        destination: `${HASHNODE_ANALYTICS_BASE_URL}/api/view`,
      },
    ];
  },
  optimizeFonts: false,

  images: {
    domains: ["cdn.hashnode.com", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
