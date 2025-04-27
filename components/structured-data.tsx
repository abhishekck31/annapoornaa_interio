"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

const StructuredData = () => {
  const pathname = usePathname()

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Annapoorna Interio",
    url: "https://annapoornaainterio.com",
    logo: "https://annapoornaainterio.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/annapoornaainterio",
      "https://www.instagram.com/annapoornaainterio",
      "https://www.linkedin.com/company/annapoornaainterio",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Design Street, Creative Avenue",
      addressLocality: "Yelahanka",
      addressRegion: "Bangalore",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1005,
      longitude: 77.5945,
    },
    telephone: "+919876543210",
    email: "info@annapoornainterio.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "₹₹-₹₹₹₹",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    description:
      "Premium interior design and construction services in Bangalore and Yelahanka. Specializing in home and office interiors, renovation, and high-quality products.",
  }

  // Local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Annapoornaa Interio - Bangalore & Yelahanka",
    image: "https://annapoornaainterio.com/images/logo.png",
    url: "https://annapoornaainterio.com",
    telephone: "+9199000 94942",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st floor, #395, 8th 'B' Main, 14th 'B' cross,2nd stage, 'B' sector",
      addressLocality: "Yelahanka",
      addressRegion: "Bangalore",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1005,
      longitude: 77.5945,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/ainterio",
      "https://www.instagram.com/annapoornaainterio",
      "https://www.linkedin.com/company/annapoornaainterio",
    ],
  }

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Interior Design and Construction Services",
    provider: {
      "@type": "LocalBusiness",
      name: "Annapoornaa Interio",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yelahanka",
        addressRegion: "Bangalore",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    description:
      "Premium interior design and construction services in Bangalore and Yelahanka, including home and office interiors, renovation, and high-quality products.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
      },
    },
  }

  // Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "UPVC Windows and Doors in Bangalore",
    description:
      "Energy-efficient, durable UPVC windows and doors designed for Bangalore's climate and architectural styles.",
    brand: {
      "@type": "Brand",
      name: "Annapoornaa Interio",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      highPrice: "50000",
      lowPrice: "5000",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
  }

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Annapoornaa Interio offer in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a comprehensive range of interior design and construction services in Bangalore including home interior design, office interior design, construction, renovation, pre-engineered buildings, and various products like UPVC windows, doors, fire doors, system railings, PVC Soffit False Ceilings, workstations, and chairs.",
        },
      },
      {
        "@type": "Question",
        name: "Does Annapoornaa Interio serve the Yelahanka area in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide all our services in Yelahanka and throughout Bangalore. Our team has extensive experience working in Yelahanka and understands the local preferences and requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical interior design project take in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary depending on the scope and complexity. A simple interior design project in Bangalore might take 4-6 weeks, while a full construction project could take several months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
        },
      },
    ],
  }

  let currentSchema: Record<string, any> = organizationSchema;

  if (pathname === "/") {
    currentSchema = organizationSchema
  } else if (pathname === "/bangalore-yelahanka") {
    currentSchema = localBusinessSchema
  } else if (pathname === "/services") {
    currentSchema = serviceSchema
  } else if (pathname.includes("/products/")) {
    currentSchema = productSchema
  } else if (pathname === "/faq" || pathname === "/#faq") {
    currentSchema = faqSchema
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(currentSchema)}
    </Script>
  )
}

export default StructuredData
