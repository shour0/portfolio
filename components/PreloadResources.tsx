import Head from 'next/head';

const PreloadResources = () => {
  return (
    <Head>
      {/* Preload critical images */}
      <link rel="preload" href="/bg.png" as="image" />
      <link rel="preload" href="/b1.svg" as="image" />
      <link rel="preload" href="/grid.svg" as="image" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//api.microlink.io" />

      {/* Preconnect to important third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default PreloadResources;