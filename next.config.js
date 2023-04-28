const { withPlausibleProxy } = require("next-plausible");

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,

  images: {
    domains: ["firebasestorage.googleapis.com"],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

module.exports = nextConfig;
