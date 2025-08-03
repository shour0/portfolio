"use client";
import { Suspense, lazy, memo } from "react";

const LazyGlobe = lazy(() => import("./Globe").then(module => ({ default: module.World })));

interface OptimizedGlobeProps {
  globeConfig: any;
  data: any[];
}

const GlobeLoader = () => (
  <div className="flex justify-center items-center h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
  </div>
);

const OptimizedGlobe = memo(({ globeConfig, data }: OptimizedGlobeProps) => {
  return (
    <Suspense fallback={<GlobeLoader />}>
      <LazyGlobe globeConfig={globeConfig} data={data} />
    </Suspense>
  );
});

OptimizedGlobe.displayName = "OptimizedGlobe";

export default OptimizedGlobe;