// @ts-ignore: Allow side-effect global CSS import without type declarations
import './globals.css'

import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import ClientRootLayout from "./client-layout"
import GridOverlay from "@/components/grid-overlay"
import { GridBackground } from "@/components/grid-background"
import JsonLd from "@/components/seo/json-ld"
import { organizationSchema, websiteSchema } from "@/lib/seo/schema"
import { SITE_URL, siteConfig } from "@/lib/seo/site"
import Script from "next/script"

// Initialize Poppins font with the weights we need
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Best Interior Designers in Bangalore | ACIPL \u2013 Yelahanka & Hebbal',
    template: '%s | ACIPL Bangalore'
  },
  description: 'Top-rated interior designers & construction company in Yelahanka, Hebbal & Bangalore. Home interiors, office design, renovation & construction. Free consultation. Call +91 99000 94942.',
  keywords: [
    'interior designers Yelahanka',
    'interior designers Bangalore',
    'interior designers Hebbal',
    'home interior design Bangalore',
    'construction company Yelahanka',
    'renovation services Bangalore',
    'office interior designers Bangalore',
    'modular kitchen Bangalore',
    'ACIPL'
  ],
  alternates: {
    canonical: '/',
    languages: { 'en-IN': '/' }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: siteConfig.name,
    title: 'Best Interior Designers in Bangalore | ACIPL',
    description: 'Top-rated interior designers & construction company in Yelahanka, Hebbal & Bangalore. Home interiors, office design, renovation & construction.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ACIPL Interior Designers Bangalore' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designers in Bangalore | ACIPL',
    description: 'Top-rated interior design & construction in Yelahanka, Hebbal & Bangalore.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: [
      { url: "/ac-ipllogo.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/ac-ipllogo.png",
    apple: "/ac-ipllogo.png",
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YXB89D6ZEH"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YXB89D6ZEH');
          `}
        </Script>
        <link rel="icon" href="/ac-ipllogo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/ac-ipllogo.png" />
        {/*
          Removed a `window.onload = () => scrollTo(0,0)` script that ran on
          every page. It defeated in-page anchor navigation — the footer links
          to /services#construction and similar — and broke the browser's
          scroll restoration on back-navigation.
        */}
      </head>
      <body className="font-poppins">
        {/*
          The single canonical business entity for the whole site. Every other
          schema on any page references this by @id rather than redeclaring the
          business, which is what keeps Google from seeing competing entities.
        */}
        <JsonLd id="schema-organization" data={organizationSchema()} />
        <JsonLd id="schema-website" data={websiteSchema()} />

        <GridBackground />
        <GridOverlay />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  )
}
