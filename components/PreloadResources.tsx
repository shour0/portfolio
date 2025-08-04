"use client";
import { useEffect } from 'react';

const PreloadResources = () => {
  useEffect(() => {
    // Use requestIdleCallback for non-critical preloading
    const preloadWhenIdle = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback);
      } else {
        setTimeout(callback, 1);
      }
    };

    // Preload only critical images immediately
    const criticalImages = [
      { src: '/b1.svg', priority: 'high' },
      { src: '/grid.svg', priority: 'high' },
    ];

    criticalImages.forEach(({ src, priority }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = priority as any;
      document.head.appendChild(link);
    });

    // Defer non-critical resources
    preloadWhenIdle(() => {
      // Non-critical images
      const nonCriticalImages = [
        { src: '/b4.svg' },
        { src: '/b5.svg' },
      ];

      nonCriticalImages.forEach(({ src }) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });

      // Preload critical fonts with better caching
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical JavaScript chunks (only in production)
      if (process.env.NODE_ENV === 'production') {
        const chunks = ['vendor', 'three'];
        chunks.forEach(chunk => {
          const modulePreloadLink = document.createElement('link');
          modulePreloadLink.rel = 'modulepreload';
          modulePreloadLink.href = `/_next/static/chunks/${chunk}.js`;
          document.head.appendChild(modulePreloadLink);
        });
      }

      // Prefetch non-critical resources
      const prefetchImages = ['/og-image.png'];
      prefetchImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    });
  }, []);

  return null;
};

export default PreloadResources;