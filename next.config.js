const { basePath } = require("./config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
