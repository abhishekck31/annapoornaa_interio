# ACIPL SEO implementation roadmap (from November 2026)

Status key: ✅ done in code this session · 🔒 blocked on client/owner · ⏳ next

## Priority 1: technical, existing pages, conversion, GBP

| Item | Status |
|---|---|
| GA4 lead events (phone, WhatsApp, email, contact form, site visit) | ✅ code, tested locally. 🔒 GA4 key events and DebugView after deploy |
| Site visit form on all 121 live template landing pages | ✅ |
| Mobile Call / WhatsApp / Site Visit sticky bar on landing pages | ✅ |
| gtag bootstrap fixed so early clicks are not lost | ✅ |
| Nearby-locality internal links (272 links, build-validated) | ✅ |
| GBP verification, categories, services, photos, review requests | 🔒 owner |
| Citations: Justdial, Sulekha, Bing Places, Apple | 🔒 owner |
| Retitle `/contact` away from "Interior Designers in Yelahanka" | ⏳ needs approval (main-site page) |
| D3 `/bangalore-yelahanka` and D4 duplicate Yelahanka construction page | ⏳ needs approval + GSC check |
| Mobile performance (framer-motion in global components) | ⏳ |

## Priority 2: high-intent Bangalore pillars

| Page | Status |
|---|---|
| `/office-interior-designers-in-bangalore` | 🔒 client: years in business, project count |
| `/modular-kitchen-in-bangalore` | 🔒 client: same stats |
| `/house-construction-company-in-bangalore` | 🔒 client: 3 package names, ₹/sq ft, specs, warranties, approval authority wording |
| `/house-construction-cost-in-bangalore` | 🔒 same as above |
| `/villa-construction-in-bangalore` | ⏳ New page recommended (local villa page exists) |

The full client checklist is in `NEW_PAGES_PLACEHOLDERS.md` and `lib/business.ts`. The build refuses to publish a page that still contains `{{CONFIRM}}`.

## Priority 3: locality × service pages

`acipl-page-opportunity-matrix.csv` scores 55 locations × 5 services (275 combinations):

| Status | Count | Notes |
|---|---|---|
| Existing and working | 99 | |
| New page recommended | 33 | All in North Bengaluru near the Yelahanka office. Mostly modular kitchen, renovation and construction in localities that already have an interior page. |
| Requires business verification | 23 | Office pages in business clusters (Hebbal/Manyata, ORR, Koramangala) need a real office project there. Construction further from Yelahanka needs a decision on site reach. |
| Not recommended | 120 | Dense built-up areas for construction; kitchen and renovation pages outside the North until GSC shows demand |

Before building more, pull GSC queries for the last 3 months and keep only combinations that show impressions. Do not just build all 33.

## Priority 4: wards

None of the 369 wards gets its own page:

- **38** wards map to an existing page. They are linked through the nearby-links block.
- **48** wards within 10 km of the office are candidates only if GSC shows ward-name searches.
- **283** wards roll up to the nearest covered locality.

Re-run when GSC data is in.

## Priority 5: content and authority

- **Content calendar:** 14 articles, Dec 2026 to Jun 2027. Seven need client figures; seven can be written now from ACIPL's own process and projects.
- **Links:**
  - Clutch and GoodFirms profiles with the office clients
  - Houzz pro profile
  - IndiaMART for the product lines
  - installer locators of the brands ACIPL installs
  - case-study mentions from Surbana Jurong, Emudhra and Century Club
- No paid press releases, PBNs or link swaps.

## Priority 6: measure and expand

- Monthly: GSC queries and pages, GA4 key events by `page_path` and `cta_location`, and GBP calls and direction requests.
- Expand only where impressions exist. Prune or merge locality pages that have no impressions after 6 months.

## Deliverables in this folder

| File | What it is |
|---|---|
| acipl-seo-audit.md | Audit, service and location inventory, cannibalisation, competitors |
| acipl-technical-seo-report.md | Technical checks and changes |
| acipl-conversion-tracking-plan.md | Events, GA4 setup, GBP plan |
| bangalore-location-database.csv | 53 served localities with GBA ward, corporation and adjacency |
| gba-ward-database.csv | All 369 GBA wards with an SEO recommendation each |
| acipl-service-keywords.csv / acipl-locality-keywords.csv | Keyword → one target page (volumes "Not measured") |
| acipl-page-opportunity-matrix.csv | 275 service × location rows with status |
| acipl-existing-url-audit.csv / acipl-proposed-url-inventory.csv | Every live, redirected, draft and proposed URL with status |
| acipl-competitor-analysis.csv / competitor-backlink-prospects.csv | Observed competitor facts and legitimate link prospects |
| acipl-internal-linking-plan.csv | Missing links (the locality-to-locality set is now implemented) |
| acipl-content-calendar.csv | 14 articles tied to commercial pages |

**On the URL architecture:** the brief's `/services/...` and `/locations/...` tree was **not adopted**. It would move 147 indexed, working URLs. The flat `/{service}-in-{locality}` pattern already carries the keyword, and the hubs exist: `/services` and `/areas-we-serve`.
