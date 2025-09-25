"use client";
import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'style' | 'script' | 'font' | 'image';
  type?: string;
  crossOrigin?: 'anonymous' | 'use-credentials';
}

const criticalResources: PreloadResource[] = [
  // Critical fonts
  {
    href: '/fonts/GeistSans.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous'
  },
  // Critical images
  {
    href: '/hero.png',
    as: 'image'
  },
  {
    href: '/logo.svg',
    as: 'image'
  },
  // Critical stylesheets are handled by Next.js automatically
];

export function ResourcePreloader({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const preloadResource = (resource: PreloadResource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }

      // Check if already preloaded
      const existing = document.querySelector(`link[href="${resource.href}"]`);
      if (!existing) {
        document.head.appendChild(link);
      }
    };

    // Preload critical resources
    criticalResources.forEach(preloadResource);

    // Prefetch next likely pages
    const prefetchPages = ['/products', '/about', '/contact'];
    prefetchPages.forEach(page => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = page;
      
      const existing = document.querySelector(`link[href="${page}"]`);
      if (!existing) {
        document.head.appendChild(link);
      }
    });

    // Enable resource hints
    const dnsPreconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    dnsPreconnects.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      
      const existing = document.querySelector(`link[href="${domain}"]`);
      if (!existing) {
        document.head.appendChild(link);
      }
    });

  }, []);

  return <>{children}</>;
}

// Hook for component-level preloading
export function usePreloadImages(imageSources: string[]) {
  useEffect(() => {
    const preloadImages = imageSources.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      // Cleanup if needed
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imageSources]);
}

// Hook for intersection-based preloading
export function useIntersectionPreloader(
  elementRef: React.RefObject<HTMLElement>,
  resources: string[]
) {
  useEffect(() => {
    if (!elementRef.current || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            resources.forEach(resource => {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.href = resource;
              link.as = resource.endsWith('.jpg') || resource.endsWith('.png') ? 'image' : 'fetch';
              
              const existing = document.querySelector(`link[href="${resource}"]`);
              if (!existing) {
                document.head.appendChild(link);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, resources]);
}