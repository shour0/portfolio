"use client";
import Script from 'next/script';

export default function PerformanceScript() {
  return (
    <Script id="performance-observer" strategy="afterInteractive">
      {`
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.startTime);
              }
              if (entry.entryType === 'first-input') {
                console.log('FID:', entry.processingStart - entry.startTime);
              }
              if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                console.log('CLS:', entry.value);
              }
            }
          });

          try {
            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
          } catch (error) {
            console.log('Performance observer not supported');
          }
        }
      `}
    </Script>
  );
}