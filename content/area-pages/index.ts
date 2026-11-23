/**
 * Registry of the November 2026 area pages (Bangalore-wide pillars and
 * locality pages). Rendered by `app/[slug]/page.tsx` through the same template
 * as the October pages, listed on `/areas-we-serve` and in the sitemap.
 *
 * These pages are not linked from the footer or navbar on purpose, so the
 * existing site stays exactly as it was.
 */

import { buildLocal, buildPillar, type AreaPage } from "./build"
import { localInputs } from "./localities"
import { pillarInputs } from "./pillars"

export type { AreaPage } from "./build"

export const areaPages: AreaPage[] = [
  ...pillarInputs.map(buildPillar),
  ...localInputs.map((input, i) => buildLocal(input, i)),
]

export const areaPageBySlug = new Map(areaPages.map((page) => [page.slug, page]))

if (areaPageBySlug.size !== areaPages.length) {
  throw new Error("Duplicate slug in content/area-pages")
}
