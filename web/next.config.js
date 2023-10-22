/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['image.tmdb.org', 'yts.mx', 'rb.gy'],
  },
}
