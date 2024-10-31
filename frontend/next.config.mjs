/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  experimental: {
    // staleTimes: {
    //   dynamic: 30,
    // },
  },
};

export default nextConfig;
