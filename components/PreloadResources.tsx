"use client";
import { useEffect } from 'react';

const PreloadResources = () => {
  useEffect(() => {
    // Preload critical images with priority
    const criticalImages = [
      { src: '/b1.svg', priority: 'high' },
      { src: '/grid.svg', priority: 'high' },
      { src: '/b4.svg', priority: 'low' },
      { src: '/b5.svg', priority: 'low' },
    ];

    criticalImages.forEach(({ src, priority }) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (priority === 'high') {
        link.fetchPriority = 'high';
      }
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

    // Preload critical JavaScript chunks
    const modulePreloadLink = document.createElement('link');
    modulePreloadLink.rel = 'modulepreload';
    modulePreloadLink.href = '/_next/static/chunks/vendor.js';
    document.head.appendChild(modulePreloadLink);

    // Prefetch non-critical resources
    const prefetchImages = ['/og-image.png'];
    prefetchImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

export default PreloadResources;