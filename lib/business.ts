/**
 * Business facts shared by the new landing pages (content/new-pages).
 *
 * Anything a customer could hold us to — years, project counts, rates,
 * warranties, authority names — lives here once, so a correction is made in one
 * place and every page picks it up.
 *
 * `{{CONFIRM: ...}}` values are unconfirmed. They must be replaced with facts
 * supplied by the client before the pages are published. Never replace one with
 * an estimate.
 */

/** True while a string still carries an unconfirmed `{{CONFIRM: ...}}` value. */
export function hasPlaceholder(value: string): boolean {
  return value.includes("{{CONFIRM")
}

export const business = {
  /**
   * Shown in the navy "Why clients choose us" block on every new page. The
   * first three confirmed entries are rendered; unconfirmed ones are skipped,
   * so the years and project count appear as soon as they are filled in.
   */
  stats: [
    {
      value: "{{CONFIRM: years in business — site.ts says founded 2014}}",
      label: "Years delivering across Bengaluru",
    },
    {
      value: "{{CONFIRM: number of completed projects}}",
      label: "Residential and commercial projects completed",
    },
    {
      value: "In-house",
      label: "Design, drawings and site execution",
    },
    {
      value: "Yelahanka",
      label: "Office and site teams based in Yelahanka New Town",
    },
    {
      value: "Free",
      label: "Site visit and itemised quote, no obligation",
    },
  ],

  /** The office every "we're close by" claim is measured from. */
  office: {
    area: "Yelahanka New Town",
    detail: "2nd Stage, B Sector, Yelahanka New Town",
  },

  approvals: {
    /**
     * BBMP was restructured under the Greater Bengaluru Authority in 2025. The
     * client must confirm which body currently sanctions plans for the areas
     * we build in, and how it should be named on the site.
     */
    cityAuthority:
      "{{CONFIRM: name of the current plan-sanction authority for city plots (formerly BBMP)}}",
    devanahalliAuthority:
      "{{CONFIRM: plan-sanction authority for Devanahalli plots — BIAAPA?}}",
  },

  construction: {
    structuralWarranty: "{{CONFIRM: structural warranty period and what it covers}}",
    waterproofingWarranty: "{{CONFIRM: waterproofing warranty period}}",
    /** Per-sq-ft package rates. Built-up area basis — confirm. */
    packages: [
      {
        name: "{{CONFIRM: package 1 name}}",
        rate: "{{CONFIRM: ₹/sq ft}}",
        structure: "{{CONFIRM: cement and steel brands/grades}}",
        walls: "{{CONFIRM: block type — solid concrete / AAC / brick}}",
        flooring: "{{CONFIRM: flooring type and ₹/sq ft allowance}}",
        doorsWindows: "{{CONFIRM: main door, internal doors, window type}}",
        electrical: "{{CONFIRM: wire and switch brands}}",
        plumbing: "{{CONFIRM: pipe and sanitaryware brands}}",
        painting: "{{CONFIRM: interior and exterior paint spec}}",
      },
      {
        name: "{{CONFIRM: package 2 name}}",
        rate: "{{CONFIRM: ₹/sq ft}}",
        structure: "{{CONFIRM: cement and steel brands/grades}}",
        walls: "{{CONFIRM: block type}}",
        flooring: "{{CONFIRM: flooring type and ₹/sq ft allowance}}",
        doorsWindows: "{{CONFIRM: main door, internal doors, window type}}",
        electrical: "{{CONFIRM: wire and switch brands}}",
        plumbing: "{{CONFIRM: pipe and sanitaryware brands}}",
        painting: "{{CONFIRM: interior and exterior paint spec}}",
      },
      {
        name: "{{CONFIRM: package 3 name}}",
        rate: "{{CONFIRM: ₹/sq ft}}",
        structure: "{{CONFIRM: cement and steel brands/grades}}",
        walls: "{{CONFIRM: block type}}",
        flooring: "{{CONFIRM: flooring type and ₹/sq ft allowance}}",
        doorsWindows: "{{CONFIRM: main door, internal doors, window type}}",
        electrical: "{{CONFIRM: wire and switch brands}}",
        plumbing: "{{CONFIRM: pipe and sanitaryware brands}}",
        painting: "{{CONFIRM: interior and exterior paint spec}}",
      },
    ],
  },
} as const

/** The stats actually rendered: confirmed values only, at most three. */
export const confirmedStats = business.stats
  .filter((stat) => !hasPlaceholder(stat.value))
  .slice(0, 3)
