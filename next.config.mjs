import createNextIntlPlugin from 'next-intl/plugin';

// Next-intl configuration with request file path
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wtmmontreal',
  trailingSlash: true,
  reactStrictMode: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default withNextIntl(nextConfig);
