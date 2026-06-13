// @ts-ignore: Allow side-effect global CSS import without type declarations
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
  metadataBase: new URL('https://www.ac-ipl.in'),
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
    canonical: 'https://www.ac-ipl.in/',
    languages: { 'en-IN': 'https://www.ac-ipl.in/' }
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.ac-ipl.in',
    siteName: 'ACIPL',
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InteriorDesigner"],
  "name": "ACIPL – Annapoorneshwari Constructions Interiors Pvt Ltd",
  "url": "https://www.ac-ipl.in",
  "logo": "https://www.ac-ipl.in/ac-ipllogo.png",
  "image": "https://www.ac-ipl.in/og-image.jpg",
  "telephone": "+919900094942",
  "email": "raghu@ac-ipl.in",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#395, 8th B Main, 14th B Cross, 2nd Stage, B Sector, Yelahanka New Town",
    "addressLocality": "Yelahanka",
    "addressRegion": "Karnataka",
    "postalCode": "560064",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.1007,
    "longitude": 77.5963
  },
  "areaServed": [
    "Bangalore","Yelahanka","Yelahanka New Town",
    "Hebbal","Kogilu","Thanisandra","Jakkur","Bagalur"
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday",
      "Thursday","Friday","Saturday"],
    "opens": "10:00",
    "closes": "19:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "47",
    "bestRating": "5"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ACIPL",
  "url": "https://www.ac-ipl.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.ac-ipl.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

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

        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  )
}
