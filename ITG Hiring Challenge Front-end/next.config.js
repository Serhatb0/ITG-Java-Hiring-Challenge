/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    BASE_URL: process.env.BASE_URL,
    PAGE_SİZE: 10,
    SECRET: "SECRET",
  },
  publicRuntimeConfig: {
    locale: "en", // varsayılan yerel ayar değeri
    // diğer değişkenler
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
