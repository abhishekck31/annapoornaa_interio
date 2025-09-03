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
  title: "Annapoornaa Interio - Construction and Interior",
  description: "Annapoorna Interio is the leading interior & Construction company in Yelahanka, Bangalore. We provide best interior & Construction services.",
  keywords:
    "interior design Bangalore, construction services Yelahanka, office interior Bangalore, home renovation Yelahanka, UPVC windows Bangalore, fire doors Yelahanka, system railings, false ceilings, workstations Bangalore, interior designers near me, commercial interiors Bangalore, turnkey projects Bangalore, modular kitchen Bangalore, luxury interiors Bangalore, renovation contractors Bangalore, residential interior designers Bangalore, architecture firms Bangalore, space planning Bangalore, interior decorators Yelahanka, building contractors Bangalore, best interior designers Bangalore, interior and construction services Yelahanka Bangalore",
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
    title: "Annapoornaa Interio | Premium Interior & Construction Services in Bangalore",
    description:
      "Annapoornaa Interio is the leading construction company in Yelahanka, Bangalore. Transform your space with our expert team.",
    url: "https://annapoornaainterio.com",
    siteName: "Annapoornaa Interio",
    locale: "en_IN",
    type: "website",
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

export function JsonLd() {
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
  <meta name="description" content="Annapoorna Interio is the leading interior & Construction company in Yelahanka, Bangalore. We provide best interior & Construction services." />
  {/* Event snippet for Page view conversion page */}
  <Script id="gtag-conversion" strategy="afterInteractive" dangerouslySetInnerHTML={{
    __html: `
      gtag('event', 'conversion', {
          'send_to': 'AW-17467517901/PvM_CLzVo5AbEM3XlIlB',
          'value': 1.0,
          'currency': 'INR'
      });
    `
  }} />
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