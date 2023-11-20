/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/start",
        destination: "/html/index.html",
      },
    ];
  },
  images: {
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "103.25.130.33",
        port: "8000",
      },
    ],

    domains: [
      "luxorpen.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
