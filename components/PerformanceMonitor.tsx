"use client";
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID detected');
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS detected');
          }
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.log('Performance observer not supported');
      }

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;