import { business } from "@/lib/business"

import type { NewLandingPage } from "./types"

export const houseConstructionInThanisandra: NewLandingPage = {
  slug: "house-construction-in-thanisandra",
  kind: "locality",
  primaryKeyword: "house construction in Thanisandra",
  service: "House Construction",
  location: "Thanisandra",
  areaServed: "Thanisandra, Bengaluru",
  breadcrumbLabel: "House Construction in Thanisandra",
  parent: { name: "House Construction Company in Bangalore", path: "/house-construction-company-in-bangalore" },

  title: "House Construction in Thanisandra, Bangalore | ACIPL",
  description:
    "House construction in Thanisandra and the Hennur side: G+2 and G+3 homes with rental floors, planned for narrow roads and tight plots, with a written BOQ.",
  h1: "House Construction in Thanisandra, Bangalore",
  heroBadge: "Thanisandra, Hennur and nearby layouts",
  heroSubtitle:
    "Owner's floor plus rental units, designed to earn — and a site plan that gets concrete to the slab on a road barely wider than a car.",
  image: "/Construction/WhatsApp Image 2025-04-26 at 21.56.48_5f3f2e67.jpg",
  imageAlt: "Four-storey independent house with wood-finish cladding and glass balconies, built by ACIPL",

  introHeading: "House construction in Thanisandra, designed around rental income",
  intro: [
    "A plot around Thanisandra or towards Hennur is rarely just a place to live. With the tech parks and offices in this part of north-east Bengaluru, many owners we speak to want a floor for the family and one or two floors to let — a G+2 or G+3 building where the rent helps pay back the construction loan. That changes how the house should be designed, from the staircase to the water tanks.",
    "House construction in Thanisandra also comes with practical constraints: plots in the older layouts are often on narrow roads, and the newer ones sit next to active construction on every side. We plan both before the design is fixed, because they affect the structure, the schedule and the cost.",
  ],
  localContext: {
    heading: "Narrow roads and concrete pours",
    body: [
      "The slab pour is the day access matters most. A transit mixer needs room to reach the plot and stand while it discharges, and a boom pump needs space to set up its outriggers. On many internal roads in this area neither fits comfortably, and a single parked car can stop a pour halfway — which is how cold joints end up in a slab.",
      "So we survey the approach before we plan the pours. Where a truck can reach, we book early-morning slots when the road is clearest and inform neighbours in advance. Where it cannot, we plan a line pump from the nearest wider road, or site-mixed concrete with extra crew and a strict pour sequence so each slab is cast in one continuous operation. Material deliveries follow the same logic: smaller loads, more often, stacked inside the plot rather than on the road.",
    ],
  },
  details: [
    {
      heading: "Designing a house with rental floors",
      bullets: [
        "Separate entrances or a shared staircase with its own entry, so tenants do not pass through the owner's floor",
        "Separate electricity meters and, where possible, separate water metering or sub-meters for each unit",
        "Sump and overhead tank sized for every unit, with the pump and valves where the owner can control them",
        "Stacked kitchens and bathrooms floor to floor, so plumbing runs straight down and leaks stay easy to trace",
        "Unit sizes chosen for the rental market around you — {{CONFIRM: typical unit mix ACIPL recommends, e.g. 1BHK/2BHK}}",
        "Parking planned for every unit within what the plot and setbacks allow",
      ],
    },
  ],

  highlights: [
    {
      title: "Access and pour planning",
      body: "Road survey before design, early-morning pour slots, and a line pump or site-mix plan where trucks cannot reach.",
    },
    {
      title: "Rental-ready layouts",
      body: "Separate meters, entries and stacked services, so each floor can be let without later changes.",
    },
    {
      title: "Structure sized for the future",
      body: `Foundation and columns designed for the floors you plan to add, even if you build fewer now. Structural warranty: ${business.construction.structuralWarranty}.`,
    },
    {
      title: "Sanction for the full building",
      body: "Plans prepared and submitted for the full number of floors you intend, so the building can be let without regularisation problems later.",
    },
  ],
  process: [
    {
      step: "Plot and road survey",
      body: "Plot dimensions, soil test, the approach road and the neighbours, all checked before any design.",
    },
    {
      step: "Rental-led design",
      body: "Unit layouts, entries, meters and tanks designed with you around the rent you are aiming for.",
    },
    {
      step: "Build with a pour plan",
      body: "Each slab scheduled around access, with the concrete method agreed and neighbours informed.",
    },
    {
      step: "Hand over ready to let",
      body: "Finishing, separate connections for each unit, a snag walk, and the occupancy certificate paperwork.",
    },
  ],

  trustHeading: "Why Thanisandra plot owners build with us",

  faqHeading: "House construction in Thanisandra: common questions",
  faqs: [
    {
      question: "Can you build on a plot where the road is too narrow for a concrete truck?",
      answer:
        "Yes. We use a line pump laid from the nearest road a truck can reach, or site-mixed concrete with a larger crew and a planned sequence so each slab is cast without a break. The method is decided at the planning stage and priced into the quote.",
    },
    {
      question: "Is a G+3 building with rental floors worth it on a 30x40 site?",
      answer:
        "It depends on what the rules allow for your plot, the construction cost and the rents in your area. We work out the permitted built-up area, a unit layout and the construction cost, so you can compare that against expected rent before deciding.",
    },
    {
      question: "Should each floor have its own electricity meter?",
      answer:
        "Yes, for a rental building it is worth it. Separate meters make billing simple, avoid disputes with tenants, and let you isolate one unit without switching off the others. We plan the meter board and cable routes at the design stage and apply for the connections.",
    },
    {
      question: "Can I build two floors now and add the rest later?",
      answer:
        "Yes, if the foundation and columns are designed for the final height from the start and the sanction covers it. Adding floors to a structure that was not designed for them is expensive and sometimes not possible, so we always ask about your long-term plan first.",
    },
  ],
  related: [
    { label: "House Construction Company in Bangalore", href: "/house-construction-company-in-bangalore" },
    { label: "House Construction Cost in Bangalore", href: "/house-construction-cost-in-bangalore" },
    { label: "Turnkey Construction in Hebbal", href: "/turnkey-construction-in-hebbal" },
    { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
    { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
  ],

  enquiryCardHeading: "Building in Thanisandra?",
  enquiryMessage:
    "Hi, I'd like a quote for house construction in Thanisandra from ACIPL.",
  closingHeading: "Ready to plan your Thanisandra build?",
}
