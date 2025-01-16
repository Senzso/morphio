/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'images.squarespace-cdn.com'],
  },
  typescript: {
    // !! WARN 
    // This is an escape hatch that allows production builds to successfully complete even if your project has type errors.
    // It's not recommended unless you're sure you want to ignore type errors in your project.
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

