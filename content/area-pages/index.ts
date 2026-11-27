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
import { localInputs2 } from "./localities-2"
import { localInputs3 } from "./localities-3"
import { localInputs4 } from "./localities-4"
import { pillarInputs } from "./pillars"
import { pillarInputs2 } from "./pillars-2"
import { pillarInputs3 } from "./pillars-3"

export type { AreaPage } from "./build"

export const areaPages: AreaPage[] = [
  ...[...pillarInputs, ...pillarInputs2, ...pillarInputs3].map(buildPillar),
  ...[...localInputs, ...localInputs2, ...localInputs3, ...localInputs4].map((input, i) => buildLocal(input, i)),
]

export const areaPageBySlug = new Map(areaPages.map((page) => [page.slug, page]))

if (areaPageBySlug.size !== areaPages.length) {
  throw new Error("Duplicate slug in content/area-pages")
}
