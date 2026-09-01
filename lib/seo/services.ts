/**
 * Single source of truth for the services ACIPL offers.
 *
 * Used in three places, which must never drift apart:
 *   - `organizationSchema().hasOfferCatalog` (rendered site-wide from the root
 *     layout, so every page — homepage included — advertises the full list)
 *   - the per-service `Service` JSON-LD on the `/services` hub page
 *   - the standalone `OfferCatalog` block on the homepage
 *
 * Keep this list aligned with the sections rendered by `app/services/page.tsx`.
 */

export interface OfferedService {
  /** Display name, also used as `serviceType` unless `serviceType` is set. */
  name: string
  description: string
  /** Best page describing this service — a dedicated page or a `/services` anchor. */
  path: string
  /** schema.org `serviceType`; defaults to `name`. */
  serviceType?: string
}

export const offeredServices: OfferedService[] = [
  {
    name: "Home Interior Design",
    description:
      "Turnkey home interiors in Bangalore — space planning, modular kitchens, wardrobes, TV units, false ceilings, flooring, painting and lighting, with 3D visualisation before execution.",
    path: "/expertise/interior",
    serviceType: "Interior Design",
  },
  {
    name: "Office & Corporate Interior Design",
    description:
      "Commercial office fit-outs across Bangalore — workspace planning, workstations and cabins, glass and drywall partitions, HVAC, electrical, flooring, ceilings and brand integration.",
    path: "/services#office-interior",
    serviceType: "Interior Design",
  },
  {
    name: "Residential & Commercial Construction",
    description:
      "Turnkey residential and commercial construction in Bangalore — architectural and structural design, plan sanction and approvals, quality material sourcing and site execution to handover.",
    path: "/expertise/construction",
    serviceType: "General Contractor",
  },
  {
    name: "Renovation",
    description:
      "Whole-home and space renovation in Bangalore — layout redesign, kitchen and bathroom remodelling, flooring, false ceilings, electrical and plumbing works, and facade improvements.",
    path: "/services#renovation",
    serviceType: "Renovation",
  },
  {
    name: "Project Management & Consultancy (PMC)",
    description:
      "Construction PMC in Bangalore — feasibility and budgeting, design coordination, scheduling and site supervision, quality and safety compliance, cost control and project close-out.",
    path: "/services#pre-engineered-building",
    serviceType: "Construction Project Management",
  },
  {
    name: "Architectural, Structural & MEP Design & Drawings",
    description:
      "Design and drafting services in Bangalore — architectural layouts and 3D visualisation, structural design and detailing, and MEP (mechanical, electrical, plumbing) drawings.",
    path: "/services#products",
    serviceType: "Architectural Design",
  },
]
