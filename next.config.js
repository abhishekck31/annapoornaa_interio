/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 1080, 1600],
    imageSizes: [16, 32, 48]
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
  // Make environment variables available to the browser
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  }
}

module.exports = nextConfig
