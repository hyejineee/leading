/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  concurrentFeatures: true,

  webpack: config => {
    const copy = { ...config };
    copy.resolve = {
      alias: {
        '@auth': path.resolve(__dirname, 'src/auth'),
        '@article': path.resolve(__dirname, 'src/article'),
        '@comment': path.resolve(__dirname, 'src/comment'),
        '@profile': path.resolve(__dirname, 'src/profile'),
        '@tag': path.resolve(__dirname, 'src/tag'),
        '@common': path.resolve(__dirname, 'src/common'),
      },
      ...copy.resolve,
    };

    return copy;
  },
};

module.exports = nextConfig;
