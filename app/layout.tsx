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
  title: "Best Interior Designers & Construction Company in Bangalore | Annapoornaa Interio",
  description: "Annapoornaa Interio is the leading interior design and construction company in Bangalore. Custom home interiors, modular kitchens, and turnkey construction with 10+ years of expertise.",
  keywords:
    "Interior Designers in Bangalore, Best Interior Designers Bangalore, Home Interiors Bangalore, Turnkey Interiors Bangalore, Construction Company Bangalore, Civil Contractors Bangalore, Modular Kitchen Bangalore, Office Interior Design Bangalore",
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
    title: "Best Interior Designers & Construction Company in Bangalore | Annapoornaa Interio",
    description: "Premium interior design and construction services in Bangalore. Award-winning designs, modular kitchens, and turnkey project management.",
    url: "https://annapoornaainterio.com",
    siteName: "Annapoornaa Interio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://annapoornaainterio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Annapoornaa Interio - Best Interior & Construction Company in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers & Construction Company in Bangalore | Annapoornaa Interio",
    description: "Expert interior designers and building contractors in Bangalore. Transforming spaces with quality and precision.",
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



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicons */}
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16" />

        {/* Critical resource preloading */}

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