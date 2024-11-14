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
    staleTimes: {
      dynamic: 180,
      static: 180,
    },
  },
};

export default nextConfig;
