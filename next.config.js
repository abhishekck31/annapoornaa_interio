/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    domains: [],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Ensure video files are properly handled
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
        ],
      },
      // Critical Performance: Cache static assets for 1 year
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      {
        source: '/favicon_io/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      // Cache other static assets
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|css|js|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Expires', value: new Date(Date.now() + 31536000 * 1000).toUTCString() }
        ],
      },
      // Add headers for video files
      {
        source: '/homevideo/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Content-Type', value: 'video/mp4' }
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/interior.php',
        destination: '/expertise/interior',
        permanent: true,
      },
      {
        source: '/construction.php',
        destination: '/expertise/construction',
        permanent: true,
      },
      {
        source: '/gallery.php',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/renovation.php',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/railingsservices.php',
        destination: '/products/system-railings',
        permanent: true,
      },
      {
        source: '/commercialbuildingsconstruction.php',
        destination: '/expertise/construction',
        permanent: true,
      },
      {
        source: '/w-chairs.php',
        destination: '/products/workstations',
        permanent: true,
      },
    ]
  },
  // Make environment variables available to the browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  }
}

module.exports = withBundleAnalyzer(nextConfig)
