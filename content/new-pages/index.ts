/**
 * Registry of the 13 landing pages added in the October 2026 batch.
 *
 * Each page has its own static route under `app/<slug>/page.tsx` and is
 * rendered by `components/seo/new-landing-page.tsx`. This registry is separate
 * from `lib/seo/landing-pages.ts` on purpose, so the original 16 pages and
 * their template stay untouched.
 */

import { commercialConstructionInBangalore } from "./commercial-construction-in-bangalore"
import { homeRenovationInBangalore } from "./home-renovation-in-bangalore"
import { homeRenovationInYelahanka } from "./home-renovation-in-yelahanka"
import { houseConstructionCompanyInBangalore } from "./house-construction-company-in-bangalore"
import { houseConstructionCostInBangalore } from "./house-construction-cost-in-bangalore"
import { houseConstructionInDevanahalli } from "./house-construction-in-devanahalli"
import { houseConstructionInThanisandra } from "./house-construction-in-thanisandra"
import { interiorDesignersInJakkur } from "./interior-designers-in-jakkur"
import { interiorDesignersInSahakarNagar } from "./interior-designers-in-sahakar-nagar"
import { modularKitchenInBangalore } from "./modular-kitchen-in-bangalore"
import { officeInteriorDesignersInBangalore } from "./office-interior-designers-in-bangalore"
import { officeInteriorDesignersInYelahanka } from "./office-interior-designers-in-yelahanka"
import { villaConstructionInYelahanka } from "./villa-construction-in-yelahanka"
import type { NewLandingPage } from "./types"

export const newLandingPages: NewLandingPage[] = [
  // Bangalore-wide pillars
  houseConstructionCompanyInBangalore,
  houseConstructionCostInBangalore,
  commercialConstructionInBangalore,
  officeInteriorDesignersInBangalore,
  modularKitchenInBangalore,
  homeRenovationInBangalore,
  // Yelahanka and North Bengaluru
  homeRenovationInYelahanka,
  officeInteriorDesignersInYelahanka,
  interiorDesignersInJakkur,
  houseConstructionInThanisandra,
  interiorDesignersInSahakarNagar,
  houseConstructionInDevanahalli,
  villaConstructionInYelahanka,
]

export const newLandingPageBySlug = new Map(newLandingPages.map((page) => [page.slug, page]))
