/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/snapcode-pro",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
