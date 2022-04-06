/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    SANITY_PROJECT_ID: "klr1kbxl",
  },
};

module.exports = nextConfig;
