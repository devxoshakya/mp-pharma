import type { NextConfig } from "next";
 import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';


const nextConfig: NextConfig = {
  // Turbopack configuration for optimal performance
  turbopack: {
    resolveAlias: {
      // Optimize common imports
      'framer-motion': 'framer-motion/dist/es/index.mjs',
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/index.mjs',
    },
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  
  // Enhanced image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enhanced performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },
  
  // Enhanced experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@tabler/icons-react'],
    webpackBuildWorker: true,
    parallelServerCompiles: true,
    parallelServerBuildTraces: true,
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 244000,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|@react-spring)[\\/]/,
            name: 'animations',
            chunks: 'async',
            priority: 30,
          },
          icons: {
            test: /[\\/]node_modules[\\/](@tabler\/icons-react|lucide-react)[\\/]/,
            name: 'icons',
            chunks: 'async',
            priority: 20,
          },
        },
      };
    }
    
    // Tree shaking optimization
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    
    // Resolve optimization
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    return config;
  },
  
  eslint: {
    ignoreDuringBuilds: true
  },
  
  // Enable static exports for better SEO
  trailingSlash: false,
  
  // Redirect configuration for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

// Setup Cloudflare dev platform in development
if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

export default nextConfig;
