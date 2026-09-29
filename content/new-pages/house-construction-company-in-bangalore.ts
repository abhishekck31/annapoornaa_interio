import { business } from "@/lib/business"

import type { NewLandingPage } from "./types"

const [p1, p2, p3] = business.construction.packages

export const houseConstructionCompanyInBangalore: NewLandingPage = {
  slug: "house-construction-company-in-bangalore",
  kind: "pillar",
  primaryKeyword: "house construction company in Bangalore",
  service: "House Construction",
  location: "Bangalore",
  areaServed: "Bengaluru",
  breadcrumbLabel: "House Construction Company in Bangalore",

  title: "House Construction Company in Bangalore | ACIPL",
  description:
    "House construction company in Bangalore for independent homes: soil test, plan sanction, structural design, build and finishing on one contract with a BOQ.",
  h1: "House Construction Company in Bangalore",
  heroBadge: "Independent houses across Bengaluru",
  heroSubtitle:
    "One contract from soil test to handover — with a written BOQ, payments tied to finished stages, and an engineer on site every working day.",
  image: "/Construction/construction2.jpg",
  imageAlt: "Multi-storey independent house with timber-finish cladding and glass balconies, built by ACIPL",

  introHeading: "A house construction company in Bangalore that owns the whole job",
  intro: [
    "Most people building an independent house in Bangalore end up managing four or five parties at once: an architect for the plan, a structural consultant, someone to chase the sanction, a civil contractor, and then a separate interiors team. Every hand-off is a place where drawings get misread and responsibility gets passed around. As a house construction company in Bangalore, ACIPL takes all of that under one contract — survey, soil test, plan sanction, structural design, construction, finishing and, if you want it, interiors.",
    "That single point of responsibility matters most when something goes wrong. If a column position clashes with the car parking, or the plumbing stack has to move, the people who drew it and the people building it are the same team. You get one answer, not a round of blame.",
    "We build G+1, G+2 and G+3 homes, including houses with rental floors, on plots across Bengaluru, with our office and site teams working out of Yelahanka New Town in the north of the city.",
  ],
  localContext: {
    heading: "What building in Bengaluru actually involves",
    body: [
      "Bengaluru plots vary more than people expect. Soil on one side of a layout can be firm murram, while two roads away there is filled ground over an old tank bed that needs deeper footings. That is why the soil test comes before the structural design, not after, and why we do not quote a final foundation cost until we have the report.",
      `Approvals are the other variable. Plan sanction, the commencement certificate, temporary electricity and water connections, and the occupancy certificate at the end all sit with different bodies — ${business.approvals.cityAuthority}, BESCOM and BWSSB for most city plots. We prepare and follow up every application; you sign where the owner has to sign.`,
    ],
  },
  details: [
    {
      heading: "Construction packages",
      paragraphs: [
        "Packages give you a fixed specification and a per-square-foot rate to compare against other quotes. Each one lists exactly what goes into the structure and finishes, so there are no surprises at the flooring or painting stage. You can upgrade any single line — a better window, a different floor — without moving to the next package.",
      ],
      table: {
        columns: ["", p1.name, p2.name, p3.name],
        rows: [
          ["Rate (per sq ft of built-up area)", p1.rate, p2.rate, p3.rate],
          ["Cement and steel", p1.structure, p2.structure, p3.structure],
          ["Walls", p1.walls, p2.walls, p3.walls],
          ["Flooring", p1.flooring, p2.flooring, p3.flooring],
          ["Doors and windows", p1.doorsWindows, p2.doorsWindows, p3.doorsWindows],
          ["Electrical", p1.electrical, p2.electrical, p3.electrical],
          ["Plumbing and sanitaryware", p1.plumbing, p2.plumbing, p3.plumbing],
          ["Painting", p1.painting, p2.painting, p3.painting],
        ],
      },
      note: "Rates exclude the plan-sanction fees charged by the authorities, and any extra foundation work the soil report calls for. Both are quoted separately and in writing.",
    },
    {
      heading: "Stage-wise timeline for G+1 and G+2 homes",
      paragraphs: [
        "The durations below are typical for a regular plot with normal soil and road access. We give you a dated schedule for your own plot after the soil test and sanction drawings are done.",
      ],
      table: {
        columns: ["Stage", "G+1", "G+2"],
        rows: [
          ["Soil test, design and sanction drawings", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Excavation, footings and plinth", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Columns, slabs and roof (per floor)", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Blockwork, electrical and plumbing conduits", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Plastering, waterproofing and flooring", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Doors, windows, painting and fixtures", "{{CONFIRM: weeks}}", "{{CONFIRM: weeks}}"],
          ["Total from start on site", "{{CONFIRM: months}}", "{{CONFIRM: months}}"],
        ],
      },
    },
    {
      heading: "Warranty and paperwork you receive",
      bullets: [
        `Structural warranty: ${business.construction.structuralWarranty}`,
        `Waterproofing warranty: ${business.construction.waterproofingWarranty}`,
        "Final architectural, structural and MEP drawings as built, so any future work starts from accurate plans",
        "Material bills and test reports for cement, steel and concrete cubes",
      ],
    },
  ],

  highlights: [
    {
      title: "Daily site supervision",
      body: "A site engineer is on your plot every working day, not visiting once a week. Reinforcement is checked against the structural drawing before every pour, and you get photo updates of the work done.",
    },
    {
      title: "A written BOQ before we start",
      body: "The bill of quantities lists every item with its quantity, specification and rate. When you want to change something, you can see exactly what it adds or saves before you agree to it.",
    },
    {
      title: "Payments tied to finished stages",
      body: "You pay when a stage is complete and inspected — plinth, each slab, blockwork, plastering, finishing — not on calendar dates. If a stage is not done, the payment is not due.",
    },
    {
      title: "Interiors planned with the structure",
      body: "If you want interiors, the same team plans them while the structure is going up, so electrical points, plumbing and ceiling heights are set for your furniture layout rather than fixed afterwards.",
    },
  ],
  process: [
    {
      step: "Survey and soil test",
      body: "Plot survey, soil investigation and a look at road access, neighbours and drainage before any design is fixed.",
    },
    {
      step: "Design and sanction",
      body: "Architectural plan, elevation, structural design and MEP drawings, then the sanction application prepared and followed up.",
    },
    {
      step: "Build",
      body: "Foundation to roof with stage inspections, cube tests and weekly progress reports, and payments released stage by stage.",
    },
    {
      step: "Finish and hand over",
      body: "Flooring, joinery, painting and fixtures, a snag walk with you, then handover with as-built drawings and warranty documents.",
    },
  ],

  trustHeading: "Why Bengaluru families build with us",

  faqHeading: "Building a house in Bangalore: common questions",
  faqs: [
    {
      question: "What does house construction cost per square foot in Bangalore?",
      answer: `Our package rates are ${p1.rate}, ${p2.rate} and ${p3.rate} per square foot of built-up area, depending on the specification you choose. The final number for your plot depends on the soil report, the number of floors and any upgrades, and it is fixed in the written BOQ before work starts.`,
    },
    {
      question: "How long does it take to build a G+2 house?",
      answer:
        "{{CONFIRM: typical G+2 duration}} from the start of work on site, for a regular plot with normal soil. Design and sanction take extra time before that. Monsoon months, a basement or a difficult site can add to it, and we tell you at the planning stage if any of those apply.",
    },
    {
      question: "Can I choose my own materials instead of the package brands?",
      answer:
        "Yes. The package is a starting point, not a lock-in. You can swap any line item — tiles, sanitaryware, windows, paint — and the BOQ shows the difference in cost. If you prefer to buy some items yourself, we agree in writing who is responsible for delivery dates and quality.",
    },
    {
      question: "Do you handle the plan sanction and other approvals?",
      answer:
        "Yes. We prepare the sanction drawings, submit the application and follow it up, and we handle the temporary power and water connections and the paperwork for the occupancy certificate at the end. Government fees are paid at actuals and shown separately from our construction cost.",
    },
    {
      question: "When do I pay, and how much at each stage?",
      answer:
        "Payments are linked to completed stages: an advance at agreement, then instalments at plinth, each roof slab, blockwork, plastering, flooring and final handover. Each stage is inspected before the payment is due, and the schedule is part of the contract you sign.",
    },
  ],
  related: [
    { label: "House Construction Cost in Bangalore", href: "/house-construction-cost-in-bangalore" },
    { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
    { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
    { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
    { label: "Turnkey Construction in Hebbal", href: "/turnkey-construction-in-hebbal" },
    { label: "uPVC Windows and Doors", href: "/products/upvc-windows-doors" },
  ],

  enquiryCardHeading: "Planning to build in Bengaluru?",
  enquiryMessage:
    "Hi, I'm planning to build an independent house in Bangalore and would like a quote from ACIPL.",
  closingHeading: "Ready to plan your house?",
}
