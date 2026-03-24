import './globals.css'

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ClientRootLayout from "./client-layout"
import GoogleAnalytics from "@/components/google-analytics"
import StructuredData from "@/components/structured-data"
import GridOverlay from "@/components/grid-overlay"
import { GridBackground } from "@/components/grid-background"
import Script from "next/script"
import { buildMetadata } from "@/lib/seo"
import { primarySiteUrl } from "@/lib/site-config"

// Initialize Poppins font with the weights we need
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Interior Designers and Construction Company in Bangalore | Annapoornaa Interio",
    description:
      "Interior design, modular kitchens, renovation, and construction services for homes and offices in Yelahanka, Whitefield, HSR Layout, and across Bangalore.",
    path: "/",
    keywords: [
      "interior designers Bangalore",
      "interior designers Yelahanka",
      "home interior designers Bangalore",
      "office interior designers Bangalore",
      "construction company Bangalore",
      "home interiors Yelahanka",
      "modular kitchen designers Bangalore",
      "renovation company Bangalore",
      "turnkey interior design Bangalore",
    ],
  }),
  metadataBase: primarySiteUrl,
  authors: [{ name: "Annapoornaa Interio" }],
  creator: "Annapoornaa Interio",
  publisher: "Annapoornaa Interio",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
  generator: "Next.js",
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
        <GoogleAnalytics />
        <StructuredData />
        <GridBackground />
        <GridOverlay />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  )
}
