import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// Lazy load heavy components with better chunking
const RecentProject = lazy(() =>
  import("@/components/RecentProject").then(module => ({ default: module.default }))
);
const Experience = lazy(() =>
  import("@/components/Experience").then(module => ({ default: module.default }))
);
const Approach = lazy(() =>
  import("@/components/Approach").then(module => ({ default: module.default }))
);
const Journey = lazy(() =>
  import("@/components/Journey").then(module => ({ default: module.default }))
);
const Footer = lazy(() =>
  import("@/components/Footer").then(module => ({ default: module.default }))
);

// Optimized loading component
const ComponentLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple" style={{ willChange: 'transform' }}></div>
  </div>
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px10 px-5">
      <div className="max-w-[120rem] w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />

        <Suspense fallback={<ComponentLoader />}>
          <RecentProject />
        </Suspense>

        <Suspense fallback={<ComponentLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<ComponentLoader />}>
          <Approach />
        </Suspense>

        <Suspense fallback={<ComponentLoader />}>
          <Journey />
        </Suspense>

        <Suspense fallback={<ComponentLoader />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
