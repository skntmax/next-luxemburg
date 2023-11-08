/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,

  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
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
}
//   , 
//  webpack: (config) => {
//     config.resolve.alias.canvas = false;
  
//      return config;
//    },

   
}

module.exports = nextConfig
