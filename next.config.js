/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "github.com"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
