import './globals.css'

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ClientRootLayout from "./client-layout"
import StructuredData from "@/components/structured-data"
import GridOverlay from "@/components/grid-overlay"
import { GridBackground } from "@/components/grid-background"
import Script from "next/script"

// Initialize Poppins font with the weights we need
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Best Interior Company in Bangalore | Annapoornaa Interio",
  description: "Best interior company in Bangalore. Award-winning home & office interiors, construction, modular kitchens. Free consultation!",
  keywords:
    "house contractors Bangalore, home construction Bangalore, house construction Bangalore, interior decorators Bangalore, interior designers Bangalore, construction company Bangalore, renovation company Bangalore, best interior company Bangalore, top interior designers Bangalore, interior design Bangalore, home interiors Bangalore, office interiors Bangalore, modular kitchen Bangalore, renovation Bangalore, interior services Bangalore",
  authors: [{ name: "Annapoornaa Interio" }],
  creator: "Annapoornaa Interio",
  publisher: "Annapoornaa Interio",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://annapoornaainterio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Interior Company in Bangalore | Annapoornaa Interio",
    description: "Best interior company in Bangalore. Award-winning home & office interiors, construction, modular kitchens. Free consultation!",
    url: "https://annapoornaainterio.com",
    siteName: "Annapoornaa Interio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://annapoornaainterio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Annapoornaa Interio - Best Interior Company in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Company in Bangalore | Annapoornaa Interio",
    description: "Best interior company in Bangalore. Award-winning home & office interiors, construction, modular kitchens. Free consultation!",
    images: ["https://annapoornaainterio.com/og-image.jpg"],
    creator: "@annapoornaainterio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  generator: 'v0.dev'
}

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesignBusiness",
          "name": "Annapoornaa Interio",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "KA",
            "postalCode": "560064",
            "streetAddress": "Yelahanka"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.1007",
            "longitude": "77.5963"
          },
          "telephone": "+91 99000 94942",
          "openingHours": "Mo-Sa 09:00-18:00"
        })
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="preload" href="/UP-Hero3.png" as="image" />
        <link rel="preload" href="/images/logo.png" as="image" />
        <Script
          id="scroll-to-top"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className="font-poppins">
        <StructuredData />
        <GridBackground />
        <GridOverlay />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
    )
  }