/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({});
module.exports = nextConfig;
