import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Charbel's Portfolio - Full Stack Developer",
    template: "%s | Charbel's Portfolio"
  },
  description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and experience in creating innovative digital solutions.",
  keywords: ["Full Stack Developer", "React", "Next.js", "JavaScript", "TypeScript", "Web Development", "Portfolio", "Charbel"],
  authors: [{ name: "Charbel" }],
  creator: "Charbel",
  publisher: "Charbel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "Charbel's Portfolio - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and experience in creating innovative digital solutions.",
    siteName: "Charbel's Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Charbel's Portfolio - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Charbel's Portfolio - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and experience.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000'}/og-image.png`],
    creator: '@Charbel936',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Xj9i7eROWn758MpIe4lkwmrlqiexpevYBDOyT_1YCvg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body suppressHydrationWarning
        className={`${inter}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
