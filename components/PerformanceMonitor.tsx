"use client";
import { useEffect } from 'react';

// Extend PerformanceEntry for layout shift entries
interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      let lcpValue = 0;
      let clsValue = 0;
      let fidValue = 0;

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              lcpValue = entry.startTime;
              if (process.env.NODE_ENV === 'development') {
                console.log('LCP:', lcpValue.toFixed(2) + 'ms');
              }
              break;
            case 'first-input':
              const firstInputEntry = entry as PerformanceEventTiming;
              fidValue = firstInputEntry.processingStart - firstInputEntry.startTime;
              if (process.env.NODE_ENV === 'development') {
                console.log('FID:', fidValue.toFixed(2) + 'ms');
              }
              break;
            case 'layout-shift':
              const layoutShiftEntry = entry as LayoutShiftEntry;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
                if (process.env.NODE_ENV === 'development') {
                  console.log('CLS:', clsValue.toFixed(4));
                }
              }
              break;
          }
        }
      });

      try {
        observer.observe({
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
        });
      } catch (error) {
        // Fallback for older browsers
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (fallbackError) {
          console.log('Performance observer not supported');
        }
      }

      // Report final metrics when page is about to unload
      const reportMetrics = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('Final Web Vitals:', {
            LCP: lcpValue.toFixed(2) + 'ms',
            CLS: clsValue.toFixed(4),
            FID: fidValue.toFixed(2) + 'ms'
          });
        }
      };

      window.addEventListener('beforeunload', reportMetrics);

      return () => {
        observer.disconnect();
        window.removeEventListener('beforeunload', reportMetrics);
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;