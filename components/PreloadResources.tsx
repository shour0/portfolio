"use client";
import { useEffect } from 'react';

const PreloadResources = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      '/b1.svg',
      '/grid.svg',
      '/b4.svg',
      '/b5.svg',
      '/og-image.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
  }, []);

  return null;
};

export default PreloadResources;