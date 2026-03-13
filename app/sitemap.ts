import type { MetadataRoute } from "next"
import { blogPosts } from "@/data/blog-data"
import { services } from "@/data/services-data"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain

  // Bangalore location pages
  const bangaloreLocations = [
    'indiranagar',
    'whitefield',
    'koramangala',
    'jayanagar',
    'malleshwaram',
    'hsr-layout',
    'rajajinagar',
    'banashankari',
    'marathahalli',
    'hebbal',
    'electronic-city',
    'jp-nagar',
    'btm-layout'
  ]

  const locationPages = bangaloreLocations.map(location => ({
    url: `${baseUrl}/bangalore/${location}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date("2026-03-13"),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/featured-projects`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/upvc-windows-doors`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/fire-doors`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/system-railings`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/pvc-false-ceilings`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/workstations`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products/aluminum-doors-windows`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/expertise/interior`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/expertise/construction`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/bangalore-yelahanka`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-13"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPages,
    ...locationPages,
  ]
}
