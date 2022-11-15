/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['qiita-user-contents.imgix.net']
  }
}

module.exports = nextConfig
