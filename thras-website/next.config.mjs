/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'nl'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
