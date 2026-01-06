"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"

const StructuredData = () => {
  const pathname = usePathname()

  // Organization schema with enhanced SEO and E-E-A-T
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://annapoornaainterio.com/#organization",
    name: "Annapoornaa Interio",
    alternateName: ["Annapoorna Interio", "Annapoornaa Interior Designers Bangalore"],
    url: "https://annapoornaainterio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://annapoornaainterio.com/images/logo.png",
      width: 200,
      height: 60
    },
    image: "https://annapoornaainterio.com/images/logo.png",
    sameAs: [
      "https://www.facebook.com/annapoornaainterio",
      "https://www.instagram.com/annapoornaainterio",
      "https://www.linkedin.com/company/annapoornaainterio",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector",
      addressLocality: "Yelahanka New Town",
      addressRegion: "Karnataka",
      addressRegionAbbreviation: "KA",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1006,
      longitude: 77.5963,
    },
    telephone: ["+91 99000 94942", "+91 80731 41413"],
    email: "info@annapoornainterio.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹-₹₹₹₹",
    areaServed: [
      { "@type": "City", name: "Bangalore", sameAs: "https://en.wikipedia.org/wiki/Bangalore" },
      { "@type": "City", name: "Yelahanka" },
      { "@type": "City", name: "Whitefield" },
      { "@type": "City", name: "Koramangala" },
      { "@type": "City", name: "HSR Layout" },
      { "@type": "City", name: "Indiranagar" },
      { "@type": "City", name: "Jayanagar" },
      { "@type": "City", name: "JP Nagar" },
      { "@type": "City", name: "Electronic City" },
      { "@type": "City", name: "Malleshwaram" },
      { "@type": "City", name: "Marathahalli" },
      { "@type": "City", name: "Banashankari" },
      { "@type": "City", name: "Rajajinagar" },
      { "@type": "City", name: "BTM Layout" },
      { "@type": "City", name: "Hebbal" }
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "215",
      bestRating: "5",
      worstRating: "1"
    },
    description:
      "Annapoornaa Interio is the leading interior design and construction company in Bangalore. We provide premium home interior design, office interiors, and turnkey construction services across Bangalore.",
  }

  // Local business schema for the main office
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignBusiness",
    name: "Annapoornaa Interio",
    image: "https://annapoornaainterio.com/images/logo.png",
    url: "https://annapoornaainterio.com",
    telephone: "+91 99000 94942",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector",
      addressLocality: "Yelahanka New Town",
      addressRegion: "Bangalore",
      postalCode: "560064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.1006,
      longitude: 77.5963,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/annapoornaainterio",
      "https://www.instagram.com/annapoornaainterio",
      "https://www.linkedin.com/company/annapoornaainterio",
    ],
    review: [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Satish Kumar" },
        "datePublished": "2024-03-15",
        "reviewBody": "Admin Manager at SMEC India. Delivered high-quality office interior work within timeline. Professional and responsive.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Darhini B S" },
        "datePublished": "2024-02-20",
        "reviewBody": "Outstanding interior work. Personal inspection by proprietor, high standard of excellence and craftsmanship.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Satish Krishnan" },
        "datePublished": "2024-01-10",
        "reviewBody": "Fabulous job in understanding issues and executing renovation seamlessly. Professional approach and constant communication.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  }

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: [
      "House Contractors",
      "Home Construction",
      "House Construction",
      "Interior Decorators",
      "Interior Designers",
      "Construction Company",
      "Renovation Company",
      "Interior Design and Construction Services"
    ],
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
      "House contractors, home construction, house construction, interior decorators, interior designers, construction company, and renovation company in Bangalore and Yelahanka.",
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

  // Enhanced FAQ schema with more questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Annapoornaa Interio offer in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a comprehensive range of interior design and construction services in Bangalore including home interior design, office interior design, house construction, renovation, PMC (Project Management & Consultancy), design & drawings, and various products like UPVC windows, doors, fire doors, system railings, PVC false ceilings, workstations, and chairs. We serve all areas of Bangalore including Yelahanka, Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, and more.",
        },
      },
      {
        "@type": "Question",
        name: "Does Annapoornaa Interio serve the Yelahanka area in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide all our services in Yelahanka and throughout Bangalore. Our office is located in Yelahanka New Town, and our team has extensive experience working in Yelahanka and understands the local preferences and requirements. We offer home interiors, office interiors, construction, and renovation services in Yelahanka.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a typical interior design project take in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Project timelines vary depending on the scope and complexity. A simple home interior design project in Bangalore might take 4-6 weeks, while a full office interior project could take 8-12 weeks. A complete house construction project could take several months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of interior design services in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interior design costs in Bangalore vary based on project scope, materials, and square footage. Home interior design typically ranges from ₹800-₹2000 per sq ft, while office interiors may range from ₹1000-₹3000 per sq ft. We offer customized solutions to fit different budgets. Contact us for a free consultation and detailed quote for your specific project.",
        },
      },
      {
        "@type": "Question",
        name: "Why choose Annapoornaa Interio for interior design in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are recognized as one of the best interior companies in Bangalore with award-winning designs, experienced professionals, quality materials, on-time delivery, and competitive pricing. We provide 3D visualizations and walkthrough videos, serve all areas including Yelahanka, Whitefield, Koramangala, HSR Layout, Indiranagar, and more, and have completed 500+ successful projects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide house construction services in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide complete house construction services in Bangalore including residential and commercial construction. Our services include architectural planning, structural engineering, project management, quality material sourcing, and regulatory compliance. We handle everything from foundation to finishing.",
        },
      },
      {
        "@type": "Question",
        name: "What areas of Bangalore do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all areas of Bangalore including Yelahanka, Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, Malleshwaram, Rajajinagar, Banashankari, Marathahalli, Hebbal, Electronic City, JP Nagar, BTM Layout, and surrounding areas. We provide home interiors, office interiors, construction, and renovation services across Bangalore.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer renovation services in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive renovation services in Bangalore including kitchen renovation, bathroom renovation, complete home renovation, office renovation, space planning, electrical and plumbing works, flooring, painting, false ceiling, and more. We serve all areas of Bangalore.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in home interior design services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our home interior design services include modular kitchens, wardrobes, TV units, false ceilings, flooring solutions, fabrication works, painting and wall finishes, railings, electrical and lighting works, plumbing works, wall decoration, curtains & blinds, pooja room design, and complete space planning with 3D visualizations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide office interior design in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide complete office interior design services in Bangalore including workstations, chairs, storage units, glass partitions, false ceilings, flooring, fabrication works, painting, railings, electrical works, plumbing, HVAC systems, signages, curtains & blinds, and complete space planning. We serve corporate offices across Bangalore.",
        },
      },
    ],
  }

  // Determine which schemas to show
  let schemasToRender: Record<string, any>[] = [];

  if (pathname === "/") {
    // Homepage: Show organization schema and FAQ schema
    schemasToRender = [organizationSchema, faqSchema]
  } else if (pathname === "/bangalore-yelahanka" || pathname.startsWith("/bangalore/")) {
    // Location-specific local business schema
    const locationName = pathname === "/bangalore-yelahanka"
      ? "Yelahanka"
      : pathname.split("/").pop()?.replace(/-/g, " ") || "Bangalore"

    const locationSchema = {
      ...localBusinessSchema,
      name: `Annapoornaa Interio - Interior Designers in ${locationName}, Bangalore`,
      description: `Best interior designers in ${locationName}, Bangalore. Home interiors, office interiors, construction, and renovation services in ${locationName}. Free consultation!`,
      areaServed: {
        "@type": "City",
        name: locationName,
      },
    }
    schemasToRender = [locationSchema]
  } else if (pathname === "/services") {
    // Enhanced service schema for services page
    const servicePageSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: [
        "Home Interior Design",
        "Office Interior Design",
        "House Construction",
        "Home Renovation",
        "Project Management & Consultancy",
        "Design and Drawings",
        "Interior Decorators",
        "Construction Company",
        "Renovation Company"
      ],
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://annapoornaainterio.com/#organization",
        name: "Annapoornaa Interio",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yelahanka New Town",
          addressRegion: "Bangalore",
          addressRegionAbbreviation: "KA",
          postalCode: "560064",
          addressCountry: "IN",
        },
      },
      areaServed: [
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Yelahanka" },
        { "@type": "City", name: "Whitefield" },
        { "@type": "City", name: "Koramangala" },
        { "@type": "City", name: "HSR Layout" },
        { "@type": "City", name: "Indiranagar" },
        { "@type": "City", name: "Jayanagar" },
        { "@type": "City", name: "JP Nagar" },
        { "@type": "City", name: "Electronic City" },
        { "@type": "City", name: "Malleshwaram" },
        { "@type": "City", name: "Marathahalli" },
        { "@type": "City", name: "Banashankari" },
        { "@type": "City", name: "Rajajinagar" },
        { "@type": "City", name: "BTM Layout" },
        { "@type": "City", name: "Hebbal" }
      ],
      description:
        "Complete interior design and construction services in Bangalore including home interior design, office interior design, house construction, renovation, PMC (Project Management & Consultancy), and design & drawings. Serving Yelahanka, Whitefield, Koramangala, HSR Layout, Indiranagar, and all areas of Bangalore.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "INR",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Interior Design Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Home Interior Design Bangalore",
              description: "Complete home interior design including modular kitchens, wardrobes, false ceilings, flooring, and more"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office Interior Design Bangalore",
              description: "Professional office and corporate interior design with workstations, chairs, and complete space planning"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "House Construction Bangalore",
              description: "Residential and commercial construction services from foundation to finishing"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Home Renovation Bangalore",
              description: "Complete renovation services for homes and offices including kitchen, bathroom, and full home renovation"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PMC Services Bangalore",
              description: "Project Management & Consultancy services for construction projects"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Design and Drawings Bangalore",
              description: "Architectural, structural, and MEP design and drafting services"
            }
          }
        ]
      }
    }
    schemasToRender = [servicePageSchema]
  } else if (pathname.includes("/products/")) {
    // Handle specific product pages
    if (pathname === "/products/upvc-windows-doors") {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "UPVC Windows & Doors",
        "description": "Energy-efficient UPVC windows and doors installation in Bangalore",
        "brand": {
          "@type": "Brand",
          "name": "Annapoornaa Interio"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
      schemasToRender = [productSchema]
    } else {
      schemasToRender = [productSchema]
    }
  } else if (pathname === "/faq" || pathname === "/#faq") {
    schemasToRender = [faqSchema]
  } else {
    // Default: show organization schema
    schemasToRender = [organizationSchema]
  }

  return (
    <>
      {schemasToRender.map((schema, index) => (
        <Script key={`structured-data-${index}`} id={`structured-data-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </Script>
      ))}
    </>
  )
}

export default StructuredData
