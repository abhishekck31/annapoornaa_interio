import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Note: 'qualities' is not a standard Next.js image config property.
    // Optimization is handled automatically or via the quality prop on the Image component.
  },
  experimental: {
    // Keep internal features standard to avoid resolution issues
  },
  // Ensure video files are properly handled using Asset Modules (modern Webpack 5)
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]',
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
      // Critical Performance: Cache static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/favicon_io/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Cache images and other static assets from public folder
      {
        source: '/:path*((?:jpg|jpeg|png|gif|webp|avif|svg|ico|css|js|woff|woff2|ttf|eot))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Add headers for video files
      {
        source: '/homevideo/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Accept-Ranges', value: 'bytes' },
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
    NEXT_PUBLIC_SITE_URL: 'https://annapoornaainterio.com'
  }
};

export default bundleAnalyzer(nextConfig);
