/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  experimental: {
    // dynamicIO: true,
    staleTimes: {
      dynamic: 180,
    },
  },
};

export default nextConfig;
