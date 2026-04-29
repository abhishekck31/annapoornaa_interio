"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

import { blogPosts } from "@/data/blog-data";
import { services } from "@/data/services-data";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export default function StructuredData() {
  const pathname = usePathname();
  const schemas: Record<string, unknown>[] = [];

  if (pathname === "/") {
    schemas.push(buildOrganizationSchema());
    schemas.push(
      buildFaqSchema([
        {
          question: "What services does ACIPL offer in Bangalore?",
          answer:
            "We offer home interiors, office interiors, construction, renovation, project management consultancy, architectural design, and selected building products across Bangalore.",
        },
        {
          question: "Which Bangalore locations do you serve?",
          answer: `We serve ${siteConfig.serviceAreas.join(", ")} and nearby areas from our Yelahanka office.`,
        },
        {
          question: "How can I request a site visit or quote?",
          answer:
            "You can call, WhatsApp, or submit the contact form to request a consultation, site visit, budget discussion, or quote.",
        },
      ]),
    );
  }

  if (pathname.startsWith("/services/")) {
    const service = services.find((item) => pathname === `/services/${item.slug}`);
    if (service) {
      schemas.push(
        buildServiceSchema({
          name: service.title,
          description: service.seoDescription,
          path: pathname,
        }),
      );
      schemas.push(
        buildFaqSchema(service.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))),
      );
    }
  }

  if (pathname.startsWith("/blog/")) {
    const post = blogPosts.find((item) => pathname === `/blog/${item.slug}`);
    if (post) {
      schemas.push(
        buildArticleSchema({
          title: post.title,
          description: post.seoDescription,
          path: pathname,
          image: post.image,
          datePublished: post.publishedAt,
          dateModified: post.modifiedAt,
          author: post.author,
        }),
      );
      if (post.faqs.length > 0) {
        schemas.push(
          buildFaqSchema(post.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))),
        );
      }
    }
  }

  if (pathname !== "/") {
    const segments = pathname.split("/").filter(Boolean);
    schemas.push(
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        ...segments.map((segment, index) => ({
          name: segment
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" "),
          path: `/${segments.slice(0, index + 1).join("/")}`,
        })),
      ]),
    );
  }

  if (schemas.length === 0) {
    schemas.push(buildOrganizationSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`structured-data-${index}`}
          id={`structured-data-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </Script>
      ))}
    </>
  );
}
