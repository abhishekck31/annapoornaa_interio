import { business } from "@/lib/business"

import type { NewLandingPage } from "./types"

const [p1, p2, p3] = business.construction.packages

export const houseConstructionCostInBangalore: NewLandingPage = {
  slug: "house-construction-cost-in-bangalore",
  kind: "pillar",
  primaryKeyword: "house construction cost in Bangalore",
  service: "House Construction",
  location: "Bangalore",
  areaServed: "Bengaluru",
  breadcrumbLabel: "House Construction Cost in Bangalore",
  parent: { name: "House Construction", path: "/house-construction-company-in-bangalore" },

  title: "House Construction Cost in Bangalore (2026 Guide) | ACIPL",
  description:
    "House construction cost in Bangalore for 2026: stage-wise cost split, worked examples for 30x40 and 30x50 plots, cost drivers and hidden costs to check.",
  h1: "House Construction Cost in Bangalore — 2026 Breakdown",
  heroBadge: "A 2026 guide for Bengaluru plot owners",
  heroSubtitle:
    "Where the money goes in an independent house, what makes two quotes for the same plot differ, and the costs that are easy to miss.",
  image: "/Construction/WhatsApp Image 2025-04-26 at 23.32.10_123996c2.jpg",
  imageAlt: "Column footing with reinforcement cage and formwork on an ACIPL house construction site",

  introHeading: "How house construction cost in Bangalore is worked out",
  intro: [
    "House construction cost in Bangalore is usually quoted as a rate per square foot of built-up area, and that single number is what most people compare. It is a useful starting point, but it hides most of what decides the final bill: what the rate includes, how the foundation is priced, which finishes are assumed, and what is left out altogether.",
    "This guide breaks the cost down stage by stage, works through two common plot sizes, and lists the questions worth asking any builder before you sign. The figures are ACIPL's own, and every number is confirmed in a written BOQ for your plot before work starts.",
  ],
  localContext: {
    heading: "Why Bengaluru quotes vary so much for the same plot",
    body: [
      "Two builders can quote very different rates for the same 30x40 site and both be honest. One may assume shallow footings while the other has allowed for the deeper foundation the soil report may call for. One may include a sump, overhead tank and compound wall; the other may treat them as extras. One may allow a modest amount per square foot for flooring while the other allows twice that.",
      "Material prices move too. Cement and steel together are a large share of the structure cost, and steel in particular has swung noticeably from one year to the next. A quote that is several months old may no longer hold, which is why ours states how long its rates are valid.",
    ],
  },
  details: [
    {
      heading: "Stage-by-stage cost split",
      paragraphs: [
        "This is roughly how the construction cost of a typical G+1 or G+2 house in Bengaluru divides across stages, based on our own completed projects. Your split will move depending on finishes: expensive flooring or windows push those lines up.",
      ],
      table: {
        columns: ["Stage", "Share of construction cost"],
        rows: [
          ["Foundation and plinth", "{{CONFIRM: %}}"],
          ["RCC structure — columns, beams, slabs", "{{CONFIRM: %}}"],
          ["Masonry (blockwork)", "{{CONFIRM: %}}"],
          ["Plastering and waterproofing", "{{CONFIRM: %}}"],
          ["Flooring and wall tiling", "{{CONFIRM: %}}"],
          ["Electrical", "{{CONFIRM: %}}"],
          ["Plumbing and sanitaryware", "{{CONFIRM: %}}"],
          ["Doors and windows", "{{CONFIRM: %}}"],
          ["Painting", "{{CONFIRM: %}}"],
        ],
      },
    },
    {
      heading: "Worked examples: 30x40 and 30x50 plots",
      paragraphs: [
        "These examples use our package rates and assume a regular plot, normal soil and a road wide enough for a concrete mixer. Built-up area depends on setbacks and the floor area ratio allowed for your plot, so treat the areas as typical, not guaranteed.",
      ],
      table: {
        columns: ["Plot and floors", "Typical built-up area", `${p1.name}`, `${p2.name}`, `${p3.name}`],
        rows: [
          ["30x40, G+1", "{{CONFIRM: sq ft}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}"],
          ["30x40, G+2", "{{CONFIRM: sq ft}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}"],
          ["30x50, G+1", "{{CONFIRM: sq ft}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}"],
          ["30x50, G+2", "{{CONFIRM: sq ft}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}", "{{CONFIRM: ₹}}"],
        ],
      },
      note: `Package rates: ${p1.rate}, ${p2.rate} and ${p3.rate} per sq ft. Figures exclude sanction fees, utility deposits and interiors.`,
    },
    {
      heading: "What pushes the cost up",
      bullets: [
        "Soil: filled ground or clay may need deeper or wider footings, or a raft foundation, and this is only known after the soil test.",
        "Access: a narrow road can rule out a ready-mix truck or boom pump, which means more labour and time for every slab.",
        "Steel and cement prices at the time of purchase, which is why long projects carry a price-variation clause.",
        "Finishes: flooring, windows, sanitaryware and the main door are where specifications — and costs — vary most.",
        "A basement or stilt parking floor, which adds excavation, retaining walls and waterproofing.",
        "Structural provision for a future floor, which costs a little more now and much less than strengthening later.",
      ],
    },
    {
      heading: "Hidden costs to ask about",
      bullets: [
        "Plan-sanction fees, betterment charges and other government fees",
        "Temporary electricity and water connections during construction, and permanent connection deposits",
        "Sump, overhead tank, septic tank or sewer connection, and rainwater harvesting",
        "Compound wall, gate, driveway and external paving",
        "Borewell, if there is no reliable municipal supply",
        "Architect, structural consultant and soil-test fees, if they are not part of the contract",
      ],
    },
  ],

  highlights: [
    {
      title: "An itemised BOQ, not one rate",
      body: "Every quote we give is broken into quantities and rates for each item, so you can compare it line by line against another builder's.",
    },
    {
      title: "Foundation priced from the soil report",
      body: "We do not guess the foundation. The structural design, and its cost, are based on the soil investigation for your plot.",
    },
    {
      title: "Allowances stated in rupees",
      body: "Where a finish is an allowance — flooring, sanitaryware, the main door — the quote states the amount, so you know what you are getting.",
    },
    {
      title: "Price validity in writing",
      body: "The quote says how long its rates hold and how material price movements are handled if the project runs longer.",
    },
  ],
  process: [
    {
      step: "Share your plot details",
      body: "Plot size, location, road width and the number of floors you want. A rough range can be given from this alone.",
    },
    {
      step: "Site visit and soil test",
      body: "We see the plot and arrange the soil investigation, which fixes the foundation design and cost.",
    },
    {
      step: "Drawings and BOQ",
      body: "Plans and structural design, then a full bill of quantities with every rate and allowance stated.",
    },
    {
      step: "Fixed contract",
      body: "The agreed BOQ, payment stages and schedule go into the contract. Changes are priced before they are made.",
    },
  ],

  trustHeading: "Why plot owners trust our numbers",

  faqHeading: "House construction cost in Bangalore: common questions",
  faqs: [
    {
      question: "How much does it cost to build a house on a 30x40 site in Bangalore?",
      answer:
        "A G+1 house on a 30x40 site typically costs {{CONFIRM: ₹ range}} with us, and a G+2 about {{CONFIRM: ₹ range}}, depending on the package and finishes. The soil report and road access can move this, so the final figure is confirmed in the BOQ after the site visit.",
    },
    {
      question: "Is it much cheaper per square foot to build G+2 instead of G+1?",
      answer:
        "The per-square-foot cost usually comes down a little with each added floor, because the foundation and roof are shared across more built-up area. The saving depends on the soil and structure, so we price both options for your plot when you are deciding.",
    },
    {
      question: "Does the per-square-foot rate include plan sanction?",
      answer:
        "Our rate includes preparing the sanction drawings and handling the application. The fees charged by the authorities are paid at actuals and shown as a separate line, because they depend on plot size, location and built-up area rather than on our work.",
    },
    {
      question: "How should I compare quotes from different builders?",
      answer:
        "Ask each builder for an itemised BOQ and compare the same lines: foundation depth, steel and cement brands, flooring allowance per square foot, window type, and what is excluded. A lower rate often turns out to exclude the sump, compound wall or electrical fittings.",
    },
    {
      question: "What happens to my quote if cement or steel prices rise?",
      answer:
        "Our quote states how long the rates are valid and includes a price-variation clause for steel and cement on longer projects. If prices move beyond an agreed band, the change is calculated from published rates and shown to you before it is billed.",
    },
  ],
  related: [
    { label: "House Construction Company in Bangalore", href: "/house-construction-company-in-bangalore" },
    { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
    { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
    { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
    { label: "Construction Expertise", href: "/expertise/construction" },
  ],

  enquiryCardHeading: "Want a cost estimate for your plot?",
  enquiryMessage:
    "Hi, I'd like a house construction cost estimate for my plot in Bangalore.",
  closingHeading: "Get a cost estimate for your plot",
}
