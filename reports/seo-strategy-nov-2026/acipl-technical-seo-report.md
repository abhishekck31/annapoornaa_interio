# ACIPL technical SEO report: November 2026

The checks were run against the live site (147 sitemap URLs fetched with curl) and a local production build (`next build && next start`).

| Check | Result | Status |
|---|---|---|
| Crawlability | All 147 sitemap URLs return 200. `robots.txt` (app/robots.ts) allows `/` and disallows `/api/`. Sitemap is on the `www` host. | OK |
| Indexability | `X-Robots-Tag: index, follow`. Unpublished drafts 404 in production and are not in the sitemap. | OK |
| Canonicals | Every page is self-canonical on `https://www.ac-ipl.in`. The bare host 307s to `www`. | OK. Consider asking Vercel for a 308/301 on the apex-to-www hop. |
| XML sitemap | Generated from the route registry (lib/seo/routes.ts). The build fails on duplicate routes or links to non-live routes. | OK |
| Redirects | 14 permanent redirects (next.config.js) | OK. Two consolidations (D3, D4) await approval. |
| Broken internal links | Area-page `related` links and the new nearby links are validated at build time | OK |
| Headings | One H1 per page on all 147 URLs | OK |
| Titles / descriptions | 21 titles >65 chars, 41 descriptions >165 chars. None missing or duplicated. | Needs optimisation (low priority) |
| Structured data | Organization + WebSite (layout). Landing pages carry Service, BreadcrumbList, FAQPage and ImageObject. No AggregateRating or Review, which is correct: there are no on-site reviews to mark up. | OK |
| FAQ answers in HTML | Accordion panels are force-mounted, so answers are server-rendered | OK |
| JavaScript rendering | All pages are statically prerendered (○ in the build output). Content is in the initial HTML. | OK |
| Images | next/image with AVIF/WebP. Alt text is written per image on landing pages. | OK |
| Open Graph | Set via lib/seo/metadata.ts | OK |
| Pagination | Not applicable (no paginated listings) | — |
| Mobile performance | Earlier Lighthouse mobile runs: SEO 100, Performance 45–65. The cost is main-thread JS from framer-motion in the shared navbar, footer and floating buttons. | **Open: largest technical item** |
| Core Web Vitals | No field data collected in this session. Check Search Console → Core Web Vitals and PageSpeed Insights (CrUX). | Unknown |

## Changes made in this session

1. **gtag bootstrap moved to `afterInteractive`.** The few-line inline `dataLayer`/`gtag` definition now runs right after hydration. The gtag.js library itself still loads `lazyOnload`, so there is no performance cost. Clicks made before the library arrives are queued in `dataLayer`, behind the `config` command, instead of being lost.
2. **Nearby-area internal links.** `lib/seo/nearby-pages.ts` is generated from the GBA ward map: for 71 locality pages, up to four nearest same-service pages within 12 km (272 links). They are appended without duplicates to each page's existing "Related services and areas" grid. `routes.ts` fails the build if any target is not a live route.
3. **Site-visit form and mobile contact bar** on all landing pages (details in the conversion plan).

## Recommended next technical work (in order)

1. **Performance.** Replace framer-motion in the global floating buttons (WhatsApp, scroll navigation, social links) with CSS transitions. Lazy-load the navbar's animated menu. These components load on every page.
2. **Apex redirect.** Make `ac-ipl.in → www.ac-ipl.in` permanent in the Vercel domain settings.
3. **Search Console.**
   - Submit the sitemap again after deploy.
   - Inspect 5 to 10 new locality URLs.
   - Watch Page indexing for "Crawled – currently not indexed" across the 102 locality pages. That is the early signal of a thin-page problem.
4. **Metadata trim.** Shorten the 41 long descriptions, starting with the North/South/East/West pillars and the 16 original landing pages.
