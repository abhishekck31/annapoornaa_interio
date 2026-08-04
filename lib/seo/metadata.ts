import type { Metadata } from "next"

import { absoluteUrl, siteConfig } from "./site"

export interface BuildMetadataOptions {
  title: string
  description: string
  /** Root-relative path, e.g. "/products/fire-doors". Drives the canonical. */
  path: string
  keywords?: string[]
  /** Root-relative or absolute image URL. Defaults to the site OG image. */
  image?: string
  imageAlt?: string
  /** Set false for thin/duplicate pages that should stay out of the index. */
  index?: boolean
  type?: "website" | "article"
}

/**
 * Produces a consistent Metadata object: canonical, OpenGraph and Twitter tags
 * always agree with each other and always use the canonical www host.
 *
 * Pass the title exactly as it should appear in the SERP — the root layout's
 * title template appends the brand suffix for pages that use a plain string,
 * so `title.absolute` is used here to keep landing page titles under control.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  imageAlt,
  index = true,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  const ogImage = image ? absoluteUrl(image) : siteConfig.ogImage

  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      type,
      locale: "en_IN",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: index
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        }
      : { index: false, follow: true },
  }
}
