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
        '@repositories': path.resolve(__dirname, 'src/repositories'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@common': path.resolve(__dirname, 'src/common'),
        '@useCases': path.resolve(__dirname, 'src/useCases'),
      },
      ...copy.resolve,
    };

    return copy;
  },
};

module.exports = nextConfig;
