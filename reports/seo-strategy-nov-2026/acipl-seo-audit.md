# ACIPL SEO audit: November 2026

Site: https://www.ac-ipl.in (Next.js 15 App Router on Vercel, canonical host `www`)
Audit date: 2026-11-25. Every figure below comes from a crawl of all 147 live sitemap URLs, the repository, or the official GBA ward data. Nothing here is an estimate.

## 1. Where the site stands

This is not a fresh site. Earlier phases (August–November 2026) already delivered:

| Area | State today |
|---|---|
| Indexable URLs | 147 in sitemap, all 200, all self-canonical, one H1 each |
| Locality landing pages | 102 (`/{service}-in-{locality}`) |
| Bangalore-wide pillars | 25 (live) + 4 drafts waiting on client figures |
| Core / product pages | 20 |
| Legacy URLs | 14 permanent redirects (`/bangalore/*` stubs, a Yelahanka near-duplicate) |
| Schema | Organization + WebSite site-wide. Service, BreadcrumbList, FAQPage and ImageObject on landing pages. No self-serving ratings. |
| Hubs | `/services`, `/areas-we-serve` (linked from footer) |
| Thin content | Locality pages: minimum 859 visible words, median 1,102 |

The work this audit finds is mostly in **conversion, local presence and the business facts** that block the highest-value pages. It is not in page count.

## 2. Business facts (verified from the site and repo)

- **Legal name:** Annapoorneshwari Constructions Interiors Pvt Ltd (ACIPL)
- **Address:** 1st Floor, #395, 8th 'B' Main, 14th 'B' Cross, 2nd Stage, 'B' Sector, Yelahanka New Town, Bangalore 560064
  - GBA ward (point-in-polygon on the site's geo): **North City Corporation, ward 1, Raja Kempegowda ward**
- **Phones:** +91 99000 94942 (primary), +91 80731 41413 (WhatsApp)
- **Email:** raghu@ac-ipl.in
- **Hours:** Mon–Sat 10:00–19:00
- **Projects on record** (`data/projects-data.ts`):
  - Asmara Apparels: office, Ulsoor
  - Emudhra Ltd: office, Aerospace Park, Devanahalli
  - Surbana Jurong – SMEC: office, Yelahanka
  - Century Club: renovation
  - Gelato Factory: retail
  - Golden Harness: office
  - Black BX: office
  - A resort in Ooty
  - Residential interior and construction galleries, without named locations

## 3. Service inventory: what can be claimed

| Category | Evidence on site | Verdict |
|---|---|---|
| Home interiors (BHK, villa, wardrobes, TV units, pooja, bedrooms, ceilings) | Gallery photos, 40+ live pages | Claimable |
| Modular kitchens | Kitchen photos, 17 locality pages | Claimable. Bangalore pillar waits on price bands. |
| Office interiors / fit-out | 5 named office projects | Claimable. Bangalore pillar waits on client figures. |
| House / villa / duplex construction | Construction photos, live pages | Claimable. Rates and warranties must come from client. |
| Renovation (home, kitchen, bathroom) | Century Club renovation, live pages | Claimable |
| Products (UPVC, aluminium, fire doors, railings, PVC ceilings, workstations) | Product pages | Claimable |
| Retail / restaurant / cafe / clinic interiors | 1 retail project, 0 healthcare | **Requires business verification** |
| Architecture, structural, MEP, BIM, PMC, PEB, industrial | No evidence on site | **Requires business verification.** No pages until confirmed. |
| Flooring, painting, electrical, plumbing as standalone trades | Mentioned only within renovation scope | Fold into renovation pages |

## 4. Location inventory

- `bangalore-location-database.csv` covers the 53 localities that already have pages. It records:
  - GBA corporation and matched ward(s)
  - adjacent wards
  - straight-line distance from the office
  - which services are published
- `gba-ward-database.csv` covers all 369 wards from the final delimitation (19 Nov 2025): Central 63, North 72, South 72, West 112, East 50.
- **Key finding: ward names and search names are not the same thing.** These well-known localities have *no ward of their own* and sit inside differently named wards:
  - Koramangala, BTM Layout, Sahakar Nagar, Basavanagudi, Frazer Town, Brookefield and CV Raman Nagar
  - Electronic City, which falls under ELCITA and outside the ward map
- So ward-name pages would target names people don't search. Of the 369 wards:
  - **38** are covered by an existing page.
  - **48** lie within 10 km of the office and are listed as candidates *only after* demand is confirmed in Search Console.
  - **283** should simply roll up to the nearest covered locality page.
  - No ward pages were created.
- Devanahalli, Bagalur, Hoskote, Sarjapur town and Electronic City lie outside or at the edge of the GBA ward map. Their plan-sanction authority must be confirmed by the client (see `lib/business.ts`).

## 5. Keyword opportunities

- `acipl-service-keywords.csv` holds 106 service keywords, each mapped to one target page and status.
- `acipl-locality-keywords.csv` holds 275 locality × service keywords.
- **Search volume, difficulty and competition are left as "Not measured".** This session had no access to Google Search Console or Keyword Planner, and the brief forbids inventing numbers. Fill these from GSC (Performance → Queries, 16 months) and Keyword Planner before choosing the next batch of pages.

The highest-value gaps are four keywords with **no live page**. Each has a draft blocked only by client facts:

| Keyword | Draft page | Blocked on |
|---|---|---|
| house construction / construction company / building contractors in Bangalore | `/house-construction-company-in-bangalore` | package names, ₹/sq ft, specs, warranties, approvals wording |
| house construction cost in Bangalore | `/house-construction-cost-in-bangalore` | same |
| office interior designers in Bangalore | `/office-interior-designers-in-bangalore` | years, project count |
| modular kitchen in Bangalore | `/modular-kitchen-in-bangalore` | price bands / years |

Getting these figures from the client is the single biggest SEO lever available.

## 6. Cannibalisation report

| Query | Competing URLs | Recommendation |
|---|---|---|
| interior designers Yelahanka | `/interior-designers-in-yelahanka`, `/bangalore-yelahanka`, `/contact` (title says "Interior Designers in Yelahanka New Town") | Keep `/interior-designers-in-yelahanka`. Retitle `/contact` as "Contact ACIPL, Yelahanka New Town Office". Consolidate `/bangalore-yelahanka` with a 301 after checking its GSC clicks (open decision D3). |
| house construction Yelahanka | `/home-construction-services-in-yelahanka`, `/turnkey-construction-in-yelahanka` (+ `/villa-construction-in-yelahanka`, distinct intent) | Merge the first two and 301 the weaker one after a GSC check (D4) |
| interior designers Bangalore | `/` (homepage) vs `/expertise/interior` ("Interior Design Services in Bangalore") | Homepage owns "interior designers in Bangalore". The expertise page owns "interior design services / residential interior designers". |
| turnkey construction Bangalore | `/expertise/construction` vs future `/house-construction-company-in-bangalore` | When the pillar publishes, retitle the expertise page to the turnkey / commercial angle |
| PVC false ceiling | `/products/pvc-false-ceilings` vs `/false-ceiling-contractors-in-bangalore` | Product page owns PVC. The service page owns gypsum / false ceiling contractors. |

## 7. On-page issues found by the crawl

- 21 titles over 65 characters. They are mostly core pages, e.g. the homepage at 70 and `/expertise/interior` at 76.
- 41 meta descriptions over 165 characters. These get truncated in results but do no harm.
- None missing; no duplicates.
- The South, East and West Bangalore pillars have the longest descriptions (232–248 characters). Shorten them in the next content pass.

## 8. Competitor landscape (summary; details in `acipl-competitor-analysis.csv`)

- **Platforms** (Livspace, HomeLane, Design Cafe, NoBroker Interiors, Interior Company) win on brand and programmatic city/locality pages.
  - NoBroker runs `/home-interior-designers-in-bangalore/{locality}`.
  - Livspace lists an experience centre in Hennur.
- **Construction:** Brick & Bolt runs a large locality matrix (`/construction-company-{locality}`) and publishes per-sq-ft packages and a 2026 cost guide. That is exactly the content ACIPL's two construction drafts would match once real rates exist.
- **Office fit-out:** Design Arc, Woodkraft and Atmosphere. Design Arc shows up through Clutch and GoodFirms profiles.
- **ACIPL's real differentiators to lean on:**
  - one team for design, construction and interiors
  - a North Bengaluru base, so a short distance to Yelahanka, Jakkur, Hebbal and Devanahalli sites
  - named office clients
- **Backlink data is not included.** Referring domains, DA and ranking keywords need an Ahrefs or Semrush export, and none was available. The prospects file lists only links observed in search results plus legitimate directories, associations and partner opportunities.
