import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

// Lazy load heavy components with better chunking and preload hints
const RecentProject = lazy(() =>
  import(/* webpackChunkName: "recent-project" */ "@/components/RecentProject")
);
const Experience = lazy(() =>
  import(/* webpackChunkName: "experience" */ "@/components/Experience")
);
const Approach = lazy(() =>
  import(/* webpackChunkName: "approach" */ "@/components/Approach")
);
const Journey = lazy(() =>
  import(/* webpackChunkName: "journey" */ "@/components/Journey")
);
const Footer = lazy(() =>
  import(/* webpackChunkName: "footer" */ "@/components/Footer")
);

// Optimized loading component with reduced layout shift
const ComponentLoader = () => (
  <div className="flex justify-center items-center py-20 min-h-[200px]">
    <div
      className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"
      style={{ willChange: 'transform' }}
      aria-label="Loading content"
    />
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
