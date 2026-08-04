/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    // Widened from [640, 1080, 1600]: a 750px-wide phone was being served the
    // 1080px variant, and there was no breakpoint above 1600 for large displays.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400
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
  /**
   * Permanent redirects that collapse duplicate location pages onto a single
   * indexable URL. The `/bangalore/*` pages were ~150-word stubs that rendered
   * no title or canonical (they used `next/head`, which is inert in the App
   * Router), so each one is folded into the richer page for the same intent.
   */
  async redirects() {
    return [
      // Thin locality stubs -> the established page for the same query.
      { source: '/bangalore/whitefield', destination: '/interior-designers-in-whitefield-bangalore', permanent: true },
      { source: '/bangalore/hsr-layout', destination: '/interior-designers-in-hsr-layout-bangalore', permanent: true },
      { source: '/bangalore/indiranagar', destination: '/interior-designers-in-indiranagar-bangalore', permanent: true },
      { source: '/bangalore/jayanagar', destination: '/interior-designers-in-jayanagar-bangalore', permanent: true },

      // Thin locality stubs -> the new service+location landing pages.
      { source: '/bangalore/koramangala', destination: '/home-interior-design-in-koramangala', permanent: true },
      { source: '/bangalore/hebbal', destination: '/home-interior-design-in-hebbal', permanent: true },
      { source: '/bangalore/electronic-city', destination: '/office-interior-design-in-electronic-city', permanent: true },
      { source: '/bangalore/marathahalli', destination: '/modular-kitchen-in-marathahalli', permanent: true },
      { source: '/bangalore/jp-nagar', destination: '/home-renovation-in-jp-nagar', permanent: true },
      { source: '/bangalore/banashankari', destination: '/interior-designers-in-banashankari', permanent: true },
      { source: '/bangalore/btm-layout', destination: '/interior-designers-in-btm-layout', permanent: true },
      { source: '/bangalore/malleshwaram', destination: '/interior-designers-in-malleshwaram', permanent: true },
      { source: '/bangalore/rajajinagar', destination: '/interior-designers-in-rajajinagar', permanent: true },

      // Near-duplicate of /interior-designers-in-yelahanka, which is the keeper.
      { source: '/interior-designers-in-yelahanka-bangalore', destination: '/interior-designers-in-yelahanka', permanent: true },
    ]
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
