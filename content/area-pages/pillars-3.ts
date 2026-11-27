/**
 * Bangalore-wide pages, December 2026 batch (22 pages): construction-first
 * keyword pages (villa, turnkey, rebuild, plot sizes, Vastu, apartment
 * buildings, regional hubs), industrial (PEB, warehouse, factory), design and
 * approvals, PMC, office fit-out, and a buyer's guide for choosing a builder.
 *
 * Ground rules as before: no prices, timelines, project counts, warranties or
 * reviews. Plot-size pages describe what typically fits and what decides it,
 * never a rate per square foot. Competitors are never named.
 */

import type { PillarInput } from "./build"

const BLR = "Design-and-build across Bangalore"

const plotStages = {
  heading: "What decides what you can build",
  bullets: [
    "Road width in front of the plot, which affects the permitted floor area and number of floors.",
    "Setbacks — the open space you must leave at the front, rear and sides — which depend on plot size and the zoning rules.",
    "The authority that approves your plan and the layout's own approval status.",
    "Parking requirements, which grow with the number of units you build.",
    "Soil conditions, which decide the foundation and therefore part of the cost.",
  ],
  note: "We check all of these on the first visit and before any drawing is finalised. Figures vary by plot, so we do not publish generic numbers.",
}

export const pillarInputs3: PillarInput[] = [
  // -------------------------------------------------------------------------
  // House construction — keyword pages
  // -------------------------------------------------------------------------
  {
    slug: "villa-construction-in-bangalore",
    service: "construction",
    serviceType: "Villa Construction",
    primaryKeyword: "villa construction in bangalore",
    breadcrumbLabel: "Villa Construction in Bangalore",
    title: "Villa Construction in Bangalore | Design & Build | ACIPL",
    description:
      "Villa construction in Bangalore — architecture, structure, landscaping, pools and interiors by one design-and-build team. Materials named in the contract.",
    h1: "Villa Construction in Bangalore",
    badge: BLR,
    subtitle: "Villas designed and built by one team — architecture, structure, landscape, pool and interiors.",
    image: "villaPool",
    introHeading: "Villa construction, from plot to keys",
    intro: [
      "A villa is more than a bigger house. It is a home designed around its site — how the sun moves across it, where the garden goes, how indoor and outdoor spaces connect — and it usually includes things a city house does not: a pool, landscaping, a double-height living room, outdoor kitchens and terraces.",
      "ACIPL designs and builds villas across Bangalore from our office in Yelahanka New Town. Architecture, structure, services, landscaping and interiors are handled by one team, with materials named in the contract and payments linked to completed stages.",
    ],
    context: {
      heading: "What makes villa projects different",
      body: [
        "Villas in gated communities have to follow the community's design guidelines as well as the planning rules. Villas on independent plots, especially on the city's edge, need careful checks on land conversion, approvals, water and power. We handle both kinds.",
        "Because the outdoor spaces matter as much as the indoor ones, we design the landscape, drainage, pool and lighting together with the house, not as an afterthought once the structure is up.",
      ],
    },
    details: [
      {
        heading: "What a villa project usually includes",
        table: {
          columns: ["Element", "What we design and build"],
          rows: [
            ["Architecture", "Floor plans, elevations, sections and 3D views, revised with you until signed off"],
            ["Structure", "Soil test, foundation and frame design, including large spans and double-height spaces"],
            ["Services", "Electrical, plumbing, drainage, rainwater harvesting, solar and home-automation provisions"],
            ["Outdoors", "Landscape, driveway, compound wall, gate, outdoor lighting, pool and decking"],
            ["Interiors", "Kitchen, wardrobes, living spaces, ceilings and lighting, if you want them in the same contract"],
          ],
        },
      },
    ],
    trustHeading: "Why families build their villa with ACIPL",
    faqHeading: "Villa construction in Bangalore: common questions",
    faqs: [
      {
        question: "What does villa construction in Bangalore cost?",
        answer:
          "It depends on the built-up area, the structure, the specification of finishes and the extras like a pool and landscaping. We visit the plot, agree the brief and give you a detailed estimate with brands and grades named, so you can compare quotes on the same basis.",
      },
      {
        question: "Can you build in a gated villa community?",
        answer:
          "Yes. We design to the community's guidelines, submit drawings to the association for approval, and follow its rules on working hours and site upkeep.",
      },
      {
        question: "Do you build swimming pools?",
        answer:
          "Yes. We design and build pools with the villa, including the structure, waterproofing, filtration, lighting and decking.",
      },
      {
        question: "Can you also do the interiors?",
        answer:
          "Yes. Planning interiors with the construction drawings means electrical points, plumbing and ceilings match the kitchen, wardrobes and lighting you want.",
      },
    ],
    related: [
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
      { label: "House Construction in Kanakapura Road", href: "/house-construction-in-kanakapura-road" },
      { label: "House Construction in Varthur", href: "/house-construction-in-varthur" },
    ],
    enquiryCard: "Planning a villa?",
    enquiry: "Hi, I'd like to discuss building a villa in Bangalore with ACIPL.",
    closing: "Ready to build your villa?",
  },
  {
    slug: "building-contractors-in-bangalore",
    service: "construction",
    primaryKeyword: "building contractors in bangalore",
    breadcrumbLabel: "Building Contractors in Bangalore",
    title: "Building Contractors in Bangalore | House & Commercial | ACIPL",
    description:
      "Building contractors in Bangalore for houses, rental buildings and commercial projects — drawings, approvals, construction and finishing under one contract.",
    h1: "Building Contractors in Bangalore",
    badge: BLR,
    subtitle: "Houses, rental buildings and commercial buildings — drawings, approvals and construction under one contract.",
    image: "footing",
    introHeading: "Building contractors who also design",
    intro: [
      "Most people looking for a building contractor in Bangalore want two things: a building that is built properly, and a contractor who does what they promised, at the price they promised. Both depend on what is written down before work starts.",
      "ACIPL is a design-and-build firm based in Yelahanka New Town. We prepare the drawings, handle plan sanction, build the structure and finish the building — with the materials, brands and payment stages written into the contract.",
    ],
    context: {
      heading: "Design-and-build versus labour contracts",
      body: [
        "Some contractors only supply labour, leaving you to buy materials and coordinate trades. Others quote a single rate with a vague specification. A design-and-build contract with a detailed specification sits in between: one party responsible for design, materials and workmanship, with everything you are paying for written down.",
        "Whichever model you choose, ask for the specification in writing — cement and steel brands and grades, block type, electrical and plumbing brands, tile and fitting allowances — so quotes can be compared fairly.",
      ],
    },
    details: [
      {
        heading: "What we build",
        table: {
          columns: ["Building type", "Typical scope"],
          rows: [
            ["Independent houses and duplexes", "Design, approvals, structure, services, finishing, optional interiors"],
            ["Villas", "Architecture, structure, landscape, pool, interiors"],
            ["Rental and mixed-use buildings", "Unit planning, separate services and meters, durable finishes"],
            ["Additional floors", "Structural check of the existing building, design and construction of new floors"],
            ["Commercial and industrial", "Offices, showrooms, warehouses, factories and pre-engineered buildings"],
          ],
        },
      },
    ],
    trustHeading: "Why owners choose ACIPL as their building contractor",
    faqHeading: "Building contractors in Bangalore: common questions",
    faqs: [
      {
        question: "Do you work on a labour-only basis?",
        answer:
          "Our usual model is design-and-build with materials included and named in the contract, because it puts responsibility for quality in one place. Talk to us if you have a different arrangement in mind.",
      },
      {
        question: "Do you handle plan sanction?",
        answer:
          "Yes. We prepare the drawings and the plan-sanction paperwork, and tell you up front which documents we need from you.",
      },
      {
        question: "How are payments made?",
        answer:
          "Payments are linked to completed stages of work and written into the contract, so you pay for progress you can see.",
      },
      {
        question: "Which areas of Bangalore do you cover?",
        answer:
          "We take on construction across Bangalore — north, south, east and west — from our office in Yelahanka New Town.",
      },
    ],
    related: [
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
      { label: "House Construction in South Bangalore", href: "/house-construction-in-south-bangalore" },
      { label: "House Construction in East Bangalore", href: "/house-construction-in-east-bangalore" },
      { label: "House Construction in West Bangalore", href: "/house-construction-in-west-bangalore" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
    ],
    enquiryCard: "Looking for a building contractor?",
    enquiry: "Hi, I'm looking for a building contractor in Bangalore and would like to talk to ACIPL.",
    closing: "Ready to start building?",
  },
  {
    slug: "turnkey-house-construction-in-bangalore",
    service: "construction",
    serviceType: "Turnkey House Construction",
    primaryKeyword: "turnkey house construction in bangalore",
    breadcrumbLabel: "Turnkey House Construction in Bangalore",
    title: "Turnkey House Construction in Bangalore | ACIPL",
    description:
      "Turnkey house construction in Bangalore: design, approvals, construction, finishing and interiors by one team, with a detailed specification in the contract.",
    h1: "Turnkey House Construction in Bangalore",
    badge: BLR,
    subtitle: "One contract from soil test to handover — design, approvals, construction, finishing and interiors.",
    image: "houseTimber",
    introHeading: "What turnkey really means",
    intro: [
      "A turnkey house is handed over ready to live in. You agree the design and specification at the start, and the builder takes responsibility for everything in between — approvals, materials, labour, supervision, finishing and, if included, interiors.",
      "ACIPL builds turnkey homes across Bangalore. The specification — brands, grades and allowances for finishes — is written into the contract, payments are tied to completed stages, and one team is accountable from the first drawing to the keys.",
    ],
    context: {
      heading: "Turnkey only works with a clear specification",
      body: [
        "The risk in any turnkey contract is a vague specification: “good quality tiles”, “branded fittings”. We write down the brand, grade or allowance for every important item, so there is no argument later about what was included.",
        "Where you want to choose finishes yourself — tiles, sanitaryware, fittings — the contract carries an allowance. If you pick something above or below it, the difference is adjusted openly.",
      ],
    },
    details: [
      {
        heading: "What a turnkey contract with us covers",
        bullets: [
          "Soil test, architectural, structural and MEP drawings, and 3D elevation.",
          "Plan-sanction paperwork with the relevant authority.",
          "Foundation, structure, masonry, plastering and waterproofing.",
          "Electrical, plumbing, drainage, sump, overhead tank and rainwater harvesting.",
          "Flooring, doors and windows, painting, fittings and fixtures.",
          "Optional: modular kitchen, wardrobes, false ceilings and lighting.",
          "Final cleaning, snag list, handover and help with utility connections.",
        ],
      },
    ],
    trustHeading: "Why owners choose ACIPL for turnkey homes",
    faqHeading: "Turnkey house construction: common questions",
    faqs: [
      {
        question: "Is turnkey construction more expensive than managing it ourselves?",
        answer:
          "Not necessarily. Managing it yourself avoids a builder's margin but adds your time, the risk of wastage and the cost of mistakes between trades. A detailed turnkey quote lets you compare the two honestly.",
      },
      {
        question: "Can we change the design during construction?",
        answer:
          "Small changes are usually possible. Any change that affects cost or time is agreed in writing before it is done.",
      },
      {
        question: "Are interiors included?",
        answer:
          "Only if you want them. We can include the kitchen, wardrobes, ceilings and lighting in the same contract or quote them separately.",
      },
      {
        question: "How do we track progress?",
        answer:
          "A named site engineer sends regular photo updates, and you can visit the site whenever you like. Each payment stage is checked against completed work.",
      },
    ],
    related: [
      { label: "Turnkey Construction in Yelahanka", href: "/turnkey-construction-in-yelahanka" },
      { label: "Turnkey Construction in Hebbal", href: "/turnkey-construction-in-hebbal" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
    ],
    enquiryCard: "Want a turnkey home?",
    enquiry: "Hi, I'd like a turnkey house construction quote from ACIPL.",
    closing: "Ready for a home built end to end?",
  },
  {
    slug: "old-house-demolition-and-rebuild-in-bangalore",
    service: "construction",
    serviceType: "House Reconstruction",
    primaryKeyword: "old house demolition and rebuild in bangalore",
    breadcrumbLabel: "Old House Demolition and Rebuild in Bangalore",
    title: "Old House Demolition & Rebuild in Bangalore | ACIPL",
    description:
      "Rebuild your old house in Bangalore: structural assessment, demolition, plan sanction and new construction by one team, with neighbours protected throughout.",
    h1: "Old House Demolition and Rebuild in Bangalore",
    badge: BLR,
    subtitle: "Replace an ageing house with a modern home on the same plot — assessment, demolition, approvals and construction.",
    image: "houseFourStorey",
    introHeading: "Rebuilding on the plot you already own",
    intro: [
      "Across Bangalore's older neighbourhoods — Jayanagar, Rajajinagar, Malleshwaram, Banaswadi, RT Nagar and many more — families are replacing houses built decades ago with modern homes: more floors, stilt parking, a lift, rental units and today's plumbing and wiring.",
      "ACIPL handles the whole process: an honest assessment of the existing house, demolition and debris removal, plan sanction for the new building, and construction through to handover.",
    ],
    context: {
      heading: "Rebuild or renovate? An honest assessment first",
      body: [
        "Not every old house needs to come down. If the structure is sound and the layout can work, renovation or an added floor may cost far less. We inspect the building and give you both options before you decide.",
        "When a rebuild is right, the biggest risks are to the neighbours. We photograph adjoining walls, plan demolition and excavation to protect their foundations, and keep heavy work to agreed hours.",
      ],
    },
    details: [
      {
        heading: "How a rebuild runs",
        table: {
          columns: ["Stage", "What happens"],
          rows: [
            ["Assessment", "Structure, documents, boundaries, setbacks and permitted floors checked"],
            ["Design and approval", "New plans and elevation, plan sanction with the relevant authority"],
            ["Salvage and demolition", "Doors, pillars or fittings you want to keep removed; controlled demolition and debris removal"],
            ["Construction", "Soil test, foundation, structure, services and finishing, stage by stage"],
            ["Handover", "Snag walk, cleaning, and help with water and power connections"],
          ],
        },
      },
    ],
    trustHeading: "Why families rebuild with ACIPL",
    faqHeading: "Rebuilding an old house: common questions",
    faqs: [
      {
        question: "Do we need a new plan sanction to rebuild?",
        answer:
          "Yes. A rebuilt house is a new building and needs its plan approved. We prepare the drawings and paperwork and tell you which documents we need.",
      },
      {
        question: "Where will we live during the rebuild?",
        answer:
          "Most families rent nearby for the duration. We give you a schedule at the start so you can plan the move.",
      },
      {
        question: "Can we reuse anything from the old house?",
        answer:
          "Often, yes — wooden doors, windows, pillars, stone or fittings. We identify them before demolition and design them into the new house.",
      },
      {
        question: "How do you protect neighbouring houses?",
        answer:
          "We record their condition before work, design excavation support where needed, and keep vibration-heavy work to agreed hours.",
      },
    ],
    related: [
      { label: "House Construction in Jayanagar", href: "/house-construction-in-jayanagar" },
      { label: "House Construction in Rajajinagar", href: "/house-construction-in-rajajinagar" },
      { label: "House Construction in RT Nagar", href: "/house-construction-in-rt-nagar" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
    ],
    enquiryCard: "Thinking of rebuilding?",
    enquiry: "Hi, I'd like ACIPL to assess our old house for a rebuild.",
    closing: "Ready to rebuild your home?",
  },
  // ---------------------------------------------------------------- Plot sizes
  {
    slug: "20x30-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "20x30 house construction in bangalore",
    breadcrumbLabel: "20x30 House Construction in Bangalore",
    title: "20x30 House Construction in Bangalore | Plans & Build | ACIPL",
    description:
      "Building on a 20x30 (600 sq ft) site in Bangalore? Compact house designs, G+2 and G+3 options, rental units, approvals and construction by ACIPL.",
    h1: "20x30 House Construction in Bangalore",
    badge: BLR,
    subtitle: "Making a 600 sq ft site work — compact plans, more floors and smart storage, built by one team.",
    image: "houseFourStorey",
    introHeading: "Building well on a 20x30 site",
    intro: [
      "A 20x30 site is 600 square feet — one of the most common plot sizes in Bangalore's older layouts and BDA sites. It is small, but with careful planning it can hold a comfortable family home, and often a rental unit or two on upper floors.",
      "ACIPL designs and builds houses on 20x30 sites across Bangalore. Small plots reward good design more than any other: the staircase position, the parking bay and every window decide how the house feels.",
    ],
    context: {
      heading: "Small plot, big decisions",
      body: [
        "On a 20-foot frontage, the staircase and a parking bay can take up much of the ground floor. We test several layouts — internal or external staircase, stilt parking or not — and show you what each gives in usable space.",
        "Light and ventilation are the biggest challenge on a narrow plot with neighbours on both sides. We use a light well, a staircase skylight and careful window placement to keep every floor bright.",
      ],
    },
    details: [
      plotStages,
      {
        heading: "Layouts we often draw on a 20x30 site",
        table: {
          columns: ["Option", "Typical use"],
          rows: [
            ["G+1 family home", "One 2BHK across two floors, or a 1BHK on each floor"],
            ["G+2 with rental", "Owner's floor plus one or two compact rental units"],
            ["Stilt + 3", "Parking on the stilt floor, homes above, where the rules allow"],
          ],
        },
        note: "Which options are allowed depends on your plot's road width, zoning and setbacks. We confirm them before design.",
      },
    ],
    trustHeading: "Why owners of small plots build with ACIPL",
    faqHeading: "20x30 house construction: common questions",
    faqs: [
      {
        question: "How many floors can we build on a 20x30 site?",
        answer:
          "It depends on the road width, zoning and setbacks for your plot. We check these on the first visit and tell you exactly what is permitted before drawing anything.",
      },
      {
        question: "Can we fit car parking on a 20x30 site?",
        answer:
          "Often, yes, with a stilt floor or a front parking bay. Whether it works depends on the frontage and setbacks, which we check first.",
      },
      {
        question: "How much does it cost to build on a 20x30 site?",
        answer:
          "Cost depends on the number of floors, the structure and the specification. We give you a detailed estimate with materials named after visiting the plot, rather than a generic per-square-foot figure.",
      },
    ],
    related: [
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
    ],
    enquiryCard: "Building on a 20x30 site?",
    enquiry: "Hi, I have a 20x30 site in Bangalore and would like to discuss building with ACIPL.",
    closing: "Ready to build on your 20x30 site?",
  },
  {
    slug: "30x40-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "30x40 house construction in bangalore",
    breadcrumbLabel: "30x40 House Construction in Bangalore",
    title: "30x40 House Construction in Bangalore | Plans & Build | ACIPL",
    description:
      "Building on a 30x40 (1,200 sq ft) site in Bangalore? House plans, duplex and rental options, plan sanction and construction by ACIPL's design-and-build team.",
    h1: "30x40 House Construction in Bangalore",
    badge: BLR,
    subtitle: "Bangalore's most common site size — planned for family, parking and rental income, and built by one team.",
    image: "houseTimber",
    introHeading: "Getting the most from a 30x40 site",
    intro: [
      "A 30x40 site — 1,200 square feet — is the size many Bangalore families own, especially in BDA and private layouts. It is large enough for a spacious family home with parking, and many owners also add one or two rental floors.",
      "ACIPL designs and builds 30x40 houses across Bangalore. We start by checking what your plot allows, then draw layout options so you can choose between a bigger family home and more rental units with the trade-offs in front of you.",
    ],
    context: {
      heading: "Family home, rental floors or both",
      body: [
        "Common plans on a 30x40 site include a duplex family home, a ground-floor home with rental units above, or separate floors for parents and children. Each needs a different staircase, entrance and services layout, so we fix the plan before the structure is designed.",
        "If you might add floors later, we design the foundation and columns for the final height now. It costs a little more today and avoids strengthening work later.",
      ],
    },
    details: [
      plotStages,
      {
        heading: "Layouts we often draw on a 30x40 site",
        table: {
          columns: ["Option", "Typical use"],
          rows: [
            ["Duplex (G+1)", "One family home across two floors with 3 or 4 bedrooms"],
            ["G+2 owner-plus-rental", "Owner's floor plus one or two rental units"],
            ["Stilt + 3", "Parking on the stilt floor, three floors of homes above, where allowed"],
            ["Floor-wise family home", "Separate floors for parents and children with a shared staircase or lift"],
          ],
        },
        note: "What is permitted depends on your plot's road width, zoning and setbacks. We confirm them before design.",
      },
    ],
    trustHeading: "Why 30x40 plot owners build with ACIPL",
    faqHeading: "30x40 house construction: common questions",
    faqs: [
      {
        question: "Which is better on a 30x40 site — a duplex or rental floors?",
        answer:
          "It depends on your family's needs and whether you want rental income. We draw both and show you the usable area and number of units each gives, so you can decide.",
      },
      {
        question: "Can you design a 30x40 house to Vastu?",
        answer:
          "Yes. Tell us which principles matter to you and we plan the entrance, kitchen, pooja room and bedrooms around them, within the plot's rules.",
      },
      {
        question: "What does it cost to build on a 30x40 site?",
        answer:
          "It depends on the number of floors, the structure and the specification. We give you a detailed estimate with brands named after visiting the plot, rather than a generic rate.",
      },
      {
        question: "Can we add a lift?",
        answer:
          "Yes. If we plan the shaft and pit now, a lift can be installed at any time without major work.",
      },
    ],
    related: [
      { label: "20x30 House Construction in Bangalore", href: "/20x30-house-construction-in-bangalore" },
      { label: "30x50 House Construction in Bangalore", href: "/30x50-house-construction-in-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
      { label: "Vastu-Compliant House Construction in Bangalore", href: "/vastu-compliant-house-construction-in-bangalore" },
    ],
    enquiryCard: "Building on a 30x40 site?",
    enquiry: "Hi, I have a 30x40 site in Bangalore and would like to discuss building with ACIPL.",
    closing: "Ready to build on your 30x40 site?",
  },
  {
    slug: "30x50-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "30x50 house construction in bangalore",
    breadcrumbLabel: "30x50 House Construction in Bangalore",
    title: "30x50 House Construction in Bangalore | Plans & Build | ACIPL",
    description:
      "Building on a 30x50 (1,500 sq ft) site in Bangalore? Spacious family homes, duplexes and rental buildings — design, approvals and construction by ACIPL.",
    h1: "30x50 House Construction in Bangalore",
    badge: BLR,
    subtitle: "A 1,500 sq ft site gives room for a generous family home, a garden strip and rental units.",
    image: "villaWhite",
    introHeading: "More room to plan on a 30x50 site",
    intro: [
      "A 30x50 site gives 1,500 square feet — enough for a spacious family home with room to breathe, or a family home with well-sized rental units above.",
      "ACIPL designs and builds 30x50 houses across Bangalore, starting with what your plot permits and how your family wants to live.",
    ],
    context: {
      heading: "Using the extra depth well",
      body: [
        "The extra depth of a 30x50 site makes it easier to fit parking at the front, a generous living area, and bedrooms at the back away from the road.",
        "It also leaves room for a small garden, a utility area or a courtyard that brings light into the middle of the house.",
      ],
    },
    details: [
      plotStages,
      {
        heading: "Layouts we often draw on a 30x50 site",
        table: {
          columns: ["Option", "Typical use"],
          rows: [
            ["Duplex with courtyard", "A 4-bedroom family home with a central light well or courtyard"],
            ["Owner-plus-rental", "A large owner's floor with two rental units above"],
            ["Multi-generation home", "Separate floors for each generation with a shared lift"],
          ],
        },
      },
    ],
    trustHeading: "Why 30x50 plot owners build with ACIPL",
    faqHeading: "30x50 house construction: common questions",
    faqs: [
      {
        question: "Can we have a courtyard in a 30x50 house?",
        answer:
          "Yes. A small internal courtyard or light well brings light and air into the middle of the house, and we design its drainage and waterproofing carefully.",
      },
      {
        question: "How many rental units can a 30x50 site take?",
        answer:
          "It depends on the permitted floors and floor area for your plot. We check these and draw options showing the number of units each gives.",
      },
      {
        question: "Do you include interiors?",
        answer:
          "If you want them. Planning interiors with construction means every point and ceiling is in the right place.",
      },
    ],
    related: [
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
      { label: "40x60 House Construction in Bangalore", href: "/40x60-house-construction-in-bangalore" },
      { label: "Turnkey House Construction in Bangalore", href: "/turnkey-house-construction-in-bangalore" },
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
    ],
    enquiryCard: "Building on a 30x50 site?",
    enquiry: "Hi, I have a 30x50 site in Bangalore and would like to discuss building with ACIPL.",
    closing: "Ready to build on your 30x50 site?",
  },
  {
    slug: "40x60-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "40x60 house construction in bangalore",
    breadcrumbLabel: "40x60 House Construction in Bangalore",
    title: "40x60 House Construction in Bangalore | Villas & Homes | ACIPL",
    description:
      "Building on a 40x60 (2,400 sq ft) site in Bangalore? Villas, large family homes and rental buildings — design, approvals and construction by ACIPL.",
    h1: "40x60 House Construction in Bangalore",
    badge: BLR,
    subtitle: "A 2,400 sq ft site — room for a villa-style home, a garden, parking for several cars, or a rental building.",
    image: "villaGarden",
    introHeading: "Planning a large home on a 40x60 site",
    intro: [
      "A 40x60 site gives 2,400 square feet — a generous plot by Bangalore standards. Owners here usually build a villa-style family home with a garden and parking for several cars, or a larger building with several rental units.",
      "ACIPL designs and builds 40x60 homes across Bangalore, with the architecture, structure, landscaping and interiors handled by one team.",
    ],
    context: {
      heading: "A home designed around its site",
      body: [
        "On a wider plot you can orient rooms to the light and breeze, set the house back with a garden, and plan a double-height living room or a home office with its own entrance.",
        "Larger homes benefit from planning services early — solar, rainwater harvesting, home automation, a lift — so they fit neatly rather than being added later.",
      ],
    },
    details: [
      plotStages,
      {
        heading: "What owners often build on a 40x60 site",
        table: {
          columns: ["Option", "Typical use"],
          rows: [
            ["Villa-style home", "A large family home with garden, double-height living and terraces"],
            ["Home plus rental floors", "A spacious owner's floor with several rental units"],
            ["Home with office", "Family home with a ground-floor office or studio with its own entrance"],
          ],
        },
      },
    ],
    trustHeading: "Why owners of larger plots build with ACIPL",
    faqHeading: "40x60 house construction: common questions",
    faqs: [
      {
        question: "Can we build a swimming pool on a 40x60 site?",
        answer:
          "Often, yes, depending on the setbacks and layout. We design the pool with the house so structure, drainage and filtration are planned together.",
      },
      {
        question: "Can you plan home automation and solar?",
        answer:
          "Yes. We plan wiring, conduits and roof space for automation and solar in the drawings, even if you install them later.",
      },
      {
        question: "Do you landscape the garden?",
        answer:
          "Yes. Landscaping, outdoor lighting, paving and irrigation can be part of the same project.",
      },
    ],
    related: [
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "30x50 House Construction in Bangalore", href: "/30x50-house-construction-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
    ],
    enquiryCard: "Building on a 40x60 site?",
    enquiry: "Hi, I have a 40x60 site in Bangalore and would like to discuss building with ACIPL.",
    closing: "Ready to build on your 40x60 site?",
  },
  {
    slug: "vastu-compliant-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "vastu compliant house construction in bangalore",
    breadcrumbLabel: "Vastu-Compliant House Construction in Bangalore",
    title: "Vastu-Compliant House Construction in Bangalore | ACIPL",
    description:
      "House construction in Bangalore planned to your Vastu preferences — entrance, kitchen, pooja room and bedrooms — within your plot's rules. Design to handover.",
    h1: "Vastu-Compliant House Construction in Bangalore",
    badge: BLR,
    subtitle: "Homes planned around the Vastu principles that matter to you, and built to the drawings you approve.",
    image: "pooja",
    introHeading: "Vastu and good design, together",
    intro: [
      "For many Bangalore families, Vastu is an important part of planning a home — the direction of the main entrance, where the kitchen and pooja room sit, the master bedroom's position, the staircase and the water tank.",
      "ACIPL designs and builds homes that follow the Vastu principles you care about, balanced with the plot's orientation, the planning rules and good light and ventilation.",
    ],
    context: {
      heading: "Working with your plot's direction",
      body: [
        "East- and north-facing plots are often preferred, but a good Vastu-aware plan can be drawn for plots facing any direction. We discuss your priorities first and design the layout around them.",
        "If you consult a Vastu expert, we are happy to work with them and revise drawings to their recommendations before construction starts.",
      ],
    },
    details: [
      {
        heading: "What we usually plan around",
        bullets: [
          "Main entrance position and direction.",
          "Kitchen placement and the cooking direction.",
          "Pooja room or unit location.",
          "Master bedroom position.",
          "Staircase direction and placement.",
          "Sump, borewell and overhead tank locations.",
          "Slopes, open spaces and window positions.",
        ],
        note: "We plan to the principles you ask for. Interpretations vary, so we follow your guidance or your Vastu consultant's.",
      },
    ],
    trustHeading: "Why families trust ACIPL to plan their home",
    faqHeading: "Vastu-compliant construction: common questions",
    faqs: [
      {
        question: "Can a south-facing plot be Vastu-compliant?",
        answer:
          "Many families build Vastu-aware homes on south- and west-facing plots by planning the entrance, rooms and services carefully. We discuss your priorities and show you options.",
      },
      {
        question: "Will you work with our Vastu consultant?",
        answer:
          "Yes. We share the drawings and revise them to the consultant's recommendations before finalising.",
      },
      {
        question: "Does following Vastu increase construction cost?",
        answer:
          "Usually not by itself. It affects the layout more than the materials. We will tell you if a particular requirement has a cost impact.",
      },
    ],
    related: [
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
      { label: "Pooja Room Design in Bangalore", href: "/pooja-room-design-in-bangalore" },
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
      { label: "House Construction in Basavanagudi", href: "/house-construction-in-basavanagudi" },
    ],
    enquiryCard: "Planning a Vastu-aware home?",
    enquiry: "Hi, I'd like to build a Vastu-compliant house in Bangalore with ACIPL.",
    closing: "Ready to plan your home?",
  },
  {
    slug: "apartment-building-construction-in-bangalore",
    service: "construction",
    serviceType: "Residential Building Construction",
    primaryKeyword: "apartment building construction in bangalore",
    breadcrumbLabel: "Apartment Building Construction in Bangalore",
    title: "Apartment Building Construction in Bangalore | ACIPL",
    description:
      "Small apartment and multi-unit residential buildings in Bangalore for plot owners — unit planning, approvals, structure, services and finishing by ACIPL.",
    h1: "Apartment Building Construction in Bangalore",
    badge: BLR,
    subtitle: "Small apartment buildings for plot owners — planned for sale or rent, and built to a written specification.",
    image: "houseFourStorey",
    introHeading: "Building a small apartment block on your plot",
    intro: [
      "Many Bangalore plot owners want to develop their land into a small apartment building — to sell some units, rent them out, or house the extended family under one roof. These projects are larger than a house and need more careful planning of units, parking, services and approvals.",
      "ACIPL designs and builds small residential buildings across Bangalore for plot owners, with the unit plan, structure and services designed together and the specification written into the contract.",
    ],
    context: {
      heading: "What changes when a house becomes a building",
      body: [
        "More units mean more parking, larger water storage, fire-safety requirements, a lift and common areas. The rules that apply depend on the building's size and height, and we check them before design.",
        "Each unit needs its own meter, water line and drainage, and common services need to be easy to maintain. We plan these so the building is simple to run after handover.",
      ],
    },
    details: [
      {
        heading: "What we handle",
        table: {
          columns: ["Area", "Scope"],
          rows: [
            ["Planning", "Unit mix, parking, common areas and compliance checks"],
            ["Approvals", "Plan sanction and the clearances that apply to the building's size"],
            ["Structure and services", "Foundation, frame, lift, fire, water, drainage and electrical"],
            ["Finishing", "Units, common areas, façade, landscaping and handover documents"],
          ],
        },
      },
    ],
    trustHeading: "Why plot owners build with ACIPL",
    faqHeading: "Apartment building construction: common questions",
    faqs: [
      {
        question: "Do you take up joint development projects?",
        answer:
          "We work as the design-and-build contractor for the plot owner. If you are considering a joint-development arrangement, talk to us and we will explain what we can offer.",
      },
      {
        question: "Which approvals does a small apartment building need?",
        answer:
          "That depends on the size and height of the building and where the plot is. We check what applies and prepare the drawings and paperwork.",
      },
      {
        question: "Can you finish the units to different specifications?",
        answer:
          "Yes. For example, the owner's units can be finished to a higher specification than units for sale or rent.",
      },
    ],
    related: [
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
    ],
    enquiryCard: "Developing your plot?",
    enquiry: "Hi, I'd like to discuss building a small apartment building on my plot with ACIPL.",
    closing: "Ready to develop your plot?",
  },
  // ------------------------------------------------------------ Regional hubs
  {
    slug: "house-construction-in-south-bangalore",
    service: "construction",
    location: "South Bangalore",
    areaServed: "South Bengaluru",
    primaryKeyword: "house construction in south bangalore",
    breadcrumbLabel: "House Construction in South Bangalore",
    title: "House Construction in South Bangalore | ACIPL",
    description:
      "House construction in South Bangalore — Jayanagar, JP Nagar, Banashankari, HSR, BTM, Kanakapura Road, Electronic City and more. Design to handover.",
    h1: "House Construction in South Bangalore",
    badge: BLR,
    subtitle: "Rebuilds in established neighbourhoods and new homes on growing corridors across South Bangalore.",
    image: "houseTimber",
    introHeading: "Building across South Bangalore",
    intro: [
      "South Bangalore has two kinds of construction. In established neighbourhoods like Jayanagar, Basavanagudi, Banashankari and JP Nagar, it is mostly rebuilding older houses. On growth corridors like Kanakapura Road, Bannerghatta Road and around Electronic City, it is new homes on layout plots.",
      "ACIPL designs and builds both, with drawings, plan sanction, construction and finishing handled by one team and the specification written into the contract.",
    ],
    context: {
      heading: "Different areas, different checks",
      body: [
        "Rebuilds need careful demolition, protection of neighbouring houses and a check on old documents. New layouts need checks on layout approval, access, water and drainage. We tailor the first survey to the plot.",
        "Some low-lying areas near lakes need a raised plinth and careful drainage. We check this on every plot.",
      ],
    },
    details: [
      {
        heading: "Areas we cover in South Bangalore",
        bullets: [
          "Jayanagar, Basavanagudi, Banashankari, JP Nagar and Uttarahalli.",
          "HSR Layout, BTM Layout and Koramangala.",
          "Kanakapura Road, Bannerghatta Road, Begur and Hulimavu.",
          "Electronic City and the layouts around it.",
        ],
      },
    ],
    trustHeading: "Why South Bangalore owners build with ACIPL",
    faqHeading: "House construction in South Bangalore: common questions",
    faqs: [
      {
        question: "Your office is in Yelahanka. Do you build in South Bangalore?",
        answer:
          "Yes. We take on construction across Bangalore, with a site engineer assigned to your project and regular photo updates.",
      },
      {
        question: "Do you do rebuilds as well as new construction?",
        answer:
          "Yes. We assess the existing house, handle demolition and build the new home on the same plot.",
      },
      {
        question: "Can you do the interiors after construction?",
        answer:
          "Yes. ACIPL is a design-and-build firm, so construction and interiors can be planned together.",
      },
    ],
    related: [
      { label: "House Construction in Jayanagar", href: "/house-construction-in-jayanagar" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
      { label: "House Construction in Banashankari", href: "/house-construction-in-banashankari" },
      { label: "House Construction in HSR Layout", href: "/house-construction-in-hsr-layout" },
      { label: "House Construction in Kanakapura Road", href: "/house-construction-in-kanakapura-road" },
      { label: "House Construction in Electronic City", href: "/house-construction-in-electronic-city" },
    ],
    enquiryCard: "Building in South Bangalore?",
    enquiry: "Hi, I'd like to discuss building a house in South Bangalore with ACIPL.",
    closing: "Ready to build in South Bangalore?",
  },
  {
    slug: "house-construction-in-east-bangalore",
    service: "construction",
    location: "East Bangalore",
    areaServed: "East Bengaluru",
    primaryKeyword: "house construction in east bangalore",
    breadcrumbLabel: "House Construction in East Bangalore",
    title: "House Construction in East Bangalore | ACIPL",
    description:
      "House construction in East Bangalore — Whitefield, Marathahalli, KR Puram, Hoodi, Varthur, Kadugodi and Sarjapur. Homes, villas and rental buildings.",
    h1: "House Construction in East Bangalore",
    badge: BLR,
    subtitle: "Homes, villas and rental buildings around East Bangalore's tech corridors.",
    image: "villaWhite",
    introHeading: "Building around the tech corridors",
    intro: [
      "East Bangalore's tech parks — Whitefield, the Outer Ring Road, ITPL — have created strong demand for homes and rentals in the surrounding layouts. Owners here build family homes, villas and rental buildings for the people working nearby.",
      "ACIPL designs and builds across East Bangalore, from plot checks and drawings to handover, with materials named in the contract.",
    ],
    context: {
      heading: "Water, drainage and access",
      body: [
        "Water supply and drainage vary widely across the east. We plan rainwater harvesting, recharge pits, sumps and storage to reduce dependence on tankers.",
        "Plots near lakes and low-lying land need a raised plinth and careful storm-water drainage. We check every plot for this.",
      ],
    },
    details: [
      {
        heading: "Areas we cover in East Bangalore",
        bullets: [
          "Whitefield, Kadugodi, Hoodi and Varthur.",
          "Marathahalli, KR Puram and Ramamurthy Nagar.",
          "CV Raman Nagar and the areas around Old Madras Road.",
          "Sarjapur and Hoskote.",
        ],
      },
    ],
    trustHeading: "Why East Bangalore owners build with ACIPL",
    faqHeading: "House construction in East Bangalore: common questions",
    faqs: [
      {
        question: "Can you build rental units for tech-park tenants?",
        answer:
          "Yes. We plan compact, well-ventilated units with parking, separate meters and reliable water.",
      },
      {
        question: "Do you build villas in East Bangalore?",
        answer:
          "Yes. We design and build villas, including landscaping and pools, in gated communities and on independent plots.",
      },
      {
        question: "Do you also do office interiors in the east?",
        answer:
          "Yes. We design and fit out offices in Whitefield, Marathahalli, Bellandur and along the Outer Ring Road.",
      },
    ],
    related: [
      { label: "House Construction in Whitefield", href: "/house-construction-in-whitefield" },
      { label: "House Construction in Marathahalli", href: "/house-construction-in-marathahalli" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "House Construction in Varthur", href: "/house-construction-in-varthur" },
      { label: "House Construction in Sarjapur", href: "/house-construction-in-sarjapur" },
      { label: "House Construction in Hoskote", href: "/house-construction-in-hoskote" },
    ],
    enquiryCard: "Building in East Bangalore?",
    enquiry: "Hi, I'd like to discuss building a house in East Bangalore with ACIPL.",
    closing: "Ready to build in East Bangalore?",
  },
  {
    slug: "house-construction-in-west-bangalore",
    service: "construction",
    location: "West Bangalore",
    areaServed: "West Bengaluru",
    primaryKeyword: "house construction in west bangalore",
    breadcrumbLabel: "House Construction in West Bangalore",
    title: "House Construction in West Bangalore | ACIPL",
    description:
      "House construction in West Bangalore — Rajajinagar, Malleshwaram, Vijayanagar, Basaveshwaranagar, Nagarbhavi, RR Nagar, Kengeri and Magadi Road.",
    h1: "House Construction in West Bangalore",
    badge: BLR,
    subtitle: "Rebuilds in West Bangalore's established neighbourhoods and new homes on its growing edges.",
    image: "houseFourStorey",
    introHeading: "Building across West Bangalore",
    intro: [
      "West Bangalore includes some of the city's oldest planned neighbourhoods — Rajajinagar, Malleshwaram, Basaveshwaranagar, Vijayanagar — where most construction is rebuilding. Further out, Nagarbhavi, Rajarajeshwari Nagar, Kengeri and Magadi Road have new layouts where families are building their first homes.",
      "ACIPL designs and builds across West Bangalore, handling drawings, approvals, construction and finishing as one project.",
    ],
    context: {
      heading: "Multi-generation homes and rental floors",
      body: [
        "Many West Bangalore families rebuild as multi-generation homes, with separate floors for parents and children and a lift provision. Others add rental floors to make the plot pay for itself.",
        "We plan the floors, staircase, lift and services around how your family will live, then design the structure for the final number of floors.",
      ],
    },
    details: [
      {
        heading: "Areas we cover in West Bangalore",
        bullets: [
          "Rajajinagar, Malleshwaram and Mathikere.",
          "Basaveshwaranagar, Vijayanagar and Nagarbhavi.",
          "Rajarajeshwari Nagar, Kengeri and Magadi Road.",
          "Yeshwanthpur, Jalahalli and Dasarahalli.",
        ],
      },
    ],
    trustHeading: "Why West Bangalore owners build with ACIPL",
    faqHeading: "House construction in West Bangalore: common questions",
    faqs: [
      {
        question: "Can you design separate floors for each generation?",
        answer:
          "Yes. Each floor can be an independent home with its own kitchen, connected by a shared staircase and lift.",
      },
      {
        question: "Do you check old documents before a rebuild?",
        answer:
          "Yes. We review the title deed, khata and tax receipts and check boundaries before design.",
      },
      {
        question: "Do you renovate as well as rebuild?",
        answer:
          "Yes. If renovation makes more sense for your house, we will tell you and can do that instead.",
      },
    ],
    related: [
      { label: "House Construction in Rajajinagar", href: "/house-construction-in-rajajinagar" },
      { label: "House Construction in Malleshwaram", href: "/house-construction-in-malleshwaram" },
      { label: "House Construction in Vijayanagar", href: "/house-construction-in-vijayanagar" },
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
      { label: "House Construction in Rajarajeshwari Nagar", href: "/house-construction-in-rajarajeshwari-nagar" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
    ],
    enquiryCard: "Building in West Bangalore?",
    enquiry: "Hi, I'd like to discuss building a house in West Bangalore with ACIPL.",
    closing: "Ready to build in West Bangalore?",
  },
  // ------------------------------------------------------- Industrial buildings
  {
    slug: "pre-engineered-building-construction-in-bangalore",
    service: "construction",
    serviceType: "Pre-Engineered Building Construction",
    primaryKeyword: "pre engineered building construction in bangalore",
    breadcrumbLabel: "Pre-Engineered Building Construction in Bangalore",
    title: "Pre-Engineered Building (PEB) Construction in Bangalore | ACIPL",
    description:
      "Pre-engineered steel buildings in Bangalore for warehouses, factories and workshops — design, foundations, steel erection, cladding and services by ACIPL.",
    h1: "Pre-Engineered Building Construction in Bangalore",
    badge: BLR,
    subtitle: "Steel buildings for warehouses, factories and workshops — designed, founded, erected and finished by one team.",
    image: "steelFrame",
    introHeading: "Pre-engineered buildings, start to finish",
    intro: [
      "A pre-engineered building (PEB) is a steel structure whose columns, rafters, purlins and cladding are designed for your building and fabricated off site, then bolted together on a prepared foundation. It suits buildings that need large column-free spaces — warehouses, factories, workshops and showrooms.",
      "ACIPL handles PEB projects in and around Bangalore end to end: site survey, design coordination, foundations and floor slab, steel erection, roofing and cladding, and the civil, electrical and plumbing work that turns the shell into a working building.",
    ],
    context: {
      heading: "Why owners choose PEB over conventional construction",
      body: [
        "Because the steel is fabricated off site while foundations are built, PEB projects usually reach a weather-tight shell sooner than an equivalent concrete-frame building. Steel also gives wide clear spans with fewer columns in the way of racking, machinery and vehicles.",
        "PEB structures can be extended later by adding bays, and mezzanine floors, crane beams and canopies can be designed in from the start. We plan for the use you have today and the expansion you expect.",
      ],
    },
    details: [
      {
        heading: "What a PEB project includes",
        table: {
          columns: ["Stage", "What we do"],
          rows: [
            ["Survey and brief", "Site survey, soil test, use of the building, loads, crane and mezzanine needs"],
            ["Design", "Layout, structural design of steel frame and foundations, drainage and services"],
            ["Approvals", "Building plan approval with the relevant authority, such as KIADB or the local planning authority"],
            ["Civil works", "Foundations, anchor bolts, plinth, industrial floor slab, drains and roads"],
            ["Steel erection", "Primary frames, purlins, girts, bracing, roof and wall cladding, insulation and skylights"],
            ["Finishing", "Doors and shutters, electrical, lighting, plumbing, fire provisions and office areas"],
          ],
        },
      },
    ],
    highlights: [
      { title: "One contractor for civil and steel", body: "Foundations, floor slab and steel erection coordinated by one team, so anchor bolts, levels and drainage line up." },
      { title: "Designed for how you will use it", body: "Clear spans, eave height, crane beams, mezzanines and loading docks planned around your operations." },
      { title: "Specification in writing", body: "Steel grades, cladding profile and thickness, insulation and floor-slab specification named in the contract." },
      { title: "Ready to operate", body: "Electrical, lighting, plumbing, fire provisions and office areas delivered with the shell, not left for later." },
    ],
    process: [
      { step: "Site survey and brief", body: "We study the site, soil and how the building will be used." },
      { step: "Design and estimate", body: "Layout, structural design and a detailed estimate with specifications named." },
      { step: "Approvals and foundations", body: "Plan approval, then foundations and floor slab while the steel is fabricated." },
      { step: "Erection and handover", body: "Steel erection, cladding, services and handover of a ready-to-use building." },
    ],
    trustHeading: "Why businesses choose ACIPL for steel buildings",
    faqHeading: "Pre-engineered buildings: common questions",
    faqs: [
      {
        question: "What does a PEB building cost in Bangalore?",
        answer:
          "It depends on the span, height, loads, cladding, floor slab and services. We survey the site, agree the brief and give you a detailed estimate with specifications named.",
      },
      {
        question: "Can a PEB building have a mezzanine or office floor?",
        answer:
          "Yes. Mezzanines, office blocks and staircases can be designed into the steel structure from the start.",
      },
      {
        question: "Can the building be extended later?",
        answer:
          "Yes. PEB buildings can be extended by adding bays if the end walls and foundations are planned for it, which we do when expansion is likely.",
      },
      {
        question: "Do you handle approvals for industrial plots?",
        answer:
          "Yes. We prepare drawings and coordinate building plan approval with the authority that applies to your plot.",
      },
    ],
    related: [
      { label: "Warehouse Construction in Bangalore", href: "/warehouse-construction-in-bangalore" },
      { label: "Factory Construction in Bangalore", href: "/factory-construction-in-bangalore" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
      { label: "Project Management Consultancy in Bangalore", href: "/project-management-consultancy-in-bangalore" },
    ],
    enquiryCard: "Planning a steel building?",
    enquiry: "Hi, I'd like to discuss a pre-engineered building project in Bangalore with ACIPL.",
    closing: "Ready to plan your PEB building?",
  },
  {
    slug: "warehouse-construction-in-bangalore",
    service: "construction",
    serviceType: "Warehouse Construction",
    primaryKeyword: "warehouse construction in bangalore",
    breadcrumbLabel: "Warehouse Construction in Bangalore",
    title: "Warehouse Construction in Bangalore | PEB & RCC | ACIPL",
    description:
      "Warehouse construction in and around Bangalore — PEB steel structures, industrial floors, docks, drainage and services. Design, approvals and build by ACIPL.",
    h1: "Warehouse Construction in Bangalore",
    badge: BLR,
    subtitle: "Warehouses designed for racking, vehicles and expansion, and built with the floor and docks to match.",
    image: "industrialShed",
    introHeading: "Warehouses built around your operations",
    intro: [
      "Bangalore's growth has driven demand for warehouses along its highways — Hosur Road, Tumkur Road, Old Madras Road, the airport corridor and Mysore Road. A good warehouse is designed around what happens inside it: racking heights, forklift and truck movement, loading docks and the floor that carries it all.",
      "ACIPL designs and builds warehouses in and around Bangalore, usually as pre-engineered steel structures, with the civil works, industrial floor, drainage and services delivered by the same team.",
    ],
    context: {
      heading: "The floor and the docks matter most",
      body: [
        "Racking and forklifts put heavy, concentrated loads on the floor. We design the floor slab, its joints and surface finish for the loads you expect, because repairing a failed warehouse floor later is disruptive and costly.",
        "Dock levels, apron slopes, truck turning space and drainage decide how smoothly goods move in and out. We plan these with the building, not after it.",
      ],
    },
    details: [
      {
        heading: "What we plan into a warehouse",
        bullets: [
          "Clear height and column spacing to suit your racking.",
          "Industrial floor slab designed for racking and forklift loads.",
          "Loading docks, dock levellers and canopies.",
          "Truck circulation, parking, apron and boundary works.",
          "Roof drainage, storm-water drains and rainwater harvesting.",
          "Lighting, power, fire provisions and a site office.",
        ],
      },
    ],
    highlights: [
      { title: "Designed for your racking", body: "Clear height, column grid and floor loads planned around the storage system you will use." },
      { title: "Civil and steel together", body: "Foundations, floor slab, docks and steel erection coordinated by one team." },
      { title: "Approvals handled", body: "Plans prepared and approval coordinated with the authority that applies to your land." },
      { title: "Room to grow", body: "End walls and foundations planned so the warehouse can be extended by adding bays." },
    ],
    process: [
      { step: "Site and operations review", body: "We study the land, access and how goods will move through the building." },
      { step: "Design and estimate", body: "Layout, structure, floor and dock design with a detailed estimate." },
      { step: "Approvals and civil works", body: "Approval, then foundations, floor slab and drainage." },
      { step: "Steel, services and handover", body: "Steel erection, cladding, services and handover." },
    ],
    trustHeading: "Why businesses build warehouses with ACIPL",
    faqHeading: "Warehouse construction: common questions",
    faqs: [
      {
        question: "Do you build warehouses outside Bangalore city limits?",
        answer:
          "Yes. Most warehouse land is on the city's edges and along the highways, and we take on projects there.",
      },
      {
        question: "PEB or RCC for a warehouse?",
        answer:
          "Most warehouses are built with a steel PEB structure for the wide spans and faster erection. We explain the options for your use and site.",
      },
      {
        question: "Can you design for a specific racking system?",
        answer:
          "Yes. Share the racking supplier's layout and loads and we design the floor and column grid around them.",
      },
    ],
    related: [
      { label: "Pre-Engineered Building Construction in Bangalore", href: "/pre-engineered-building-construction-in-bangalore" },
      { label: "Factory Construction in Bangalore", href: "/factory-construction-in-bangalore" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
    ],
    enquiryCard: "Planning a warehouse?",
    enquiry: "Hi, I'd like to discuss a warehouse construction project with ACIPL.",
    closing: "Ready to build your warehouse?",
  },
  {
    slug: "factory-construction-in-bangalore",
    service: "construction",
    serviceType: "Factory Construction",
    primaryKeyword: "factory construction in bangalore",
    breadcrumbLabel: "Factory Construction in Bangalore",
    title: "Factory Construction in Bangalore | Industrial Buildings | ACIPL",
    description:
      "Factory and industrial building construction in Bangalore — layout, PEB or RCC structure, floors, utilities, offices and approvals by one design-and-build team.",
    h1: "Factory Construction in Bangalore",
    badge: BLR,
    subtitle: "Factories and workshops designed around your process, and built with the utilities and offices to run it.",
    image: "industrialRender",
    introHeading: "Industrial buildings designed around your process",
    intro: [
      "A factory building has to serve a process: where raw materials arrive, how they move through production, where finished goods leave, and what machinery, utilities and people need along the way. Getting that flow right at the design stage saves money for the life of the building.",
      "ACIPL designs and builds factories and workshops in Bangalore's industrial areas — Peenya, Bommasandra, Jigani, Doddaballapur, Hoskote and others — with PEB or RCC structures, industrial floors, utilities and office areas delivered by one team.",
    ],
    context: {
      heading: "Planning utilities and compliance early",
      body: [
        "Power, compressed air, water, drainage, effluent handling and ventilation need routes and space in the building. We plan them with your process engineers before the structure is designed.",
        "Factories also need to meet fire-safety, building and industrial requirements. We plan for these from the first layout and coordinate the building approvals.",
      ],
    },
    details: [
      {
        heading: "What a factory project usually covers",
        table: {
          columns: ["Area", "Scope"],
          rows: [
            ["Production hall", "PEB or RCC structure, clear spans, crane beams if needed, industrial floor"],
            ["Utilities", "Power distribution, lighting, compressed-air and water routes, drainage"],
            ["Offices and amenities", "Office block, canteen, washrooms, changing rooms"],
            ["External works", "Roads, parking, compound wall, security cabin, storm-water drains"],
            ["Approvals", "Building plan approval and coordination of the clearances that apply"],
          ],
        },
      },
    ],
    highlights: [
      { title: "Process-led layout", body: "Material flow, machinery positions and future expansion planned before the structure." },
      { title: "Structure to suit", body: "PEB steel or RCC, chosen for spans, loads, cranes and budget." },
      { title: "Offices and amenities included", body: "Office blocks, canteens and washrooms designed and built with the factory." },
      { title: "Interiors in-house", body: "Office interiors fitted out by our own interiors team when the building is ready." },
    ],
    process: [
      { step: "Process and site review", body: "We understand your process, machinery and site constraints." },
      { step: "Layout and design", body: "Layout, structural design, utilities and a detailed estimate." },
      { step: "Approvals and construction", body: "Approvals, then civil works, structure and utilities." },
      { step: "Commissioning support", body: "Handover with as-built drawings, ready for machinery installation." },
    ],
    trustHeading: "Why manufacturers build with ACIPL",
    faqHeading: "Factory construction: common questions",
    faqs: [
      {
        question: "Can you work with our process consultant?",
        answer:
          "Yes. We coordinate with your process and machinery consultants so the building, foundations and utilities match their requirements.",
      },
      {
        question: "Do you build machine foundations?",
        answer:
          "Yes. Machine foundations, pits and trenches are designed to the machinery supplier's loads and built with the floor.",
      },
      {
        question: "Can you fit out the factory's offices?",
        answer:
          "Yes. Our interiors team designs and fits out office areas, conference rooms and canteens.",
      },
    ],
    related: [
      { label: "Pre-Engineered Building Construction in Bangalore", href: "/pre-engineered-building-construction-in-bangalore" },
      { label: "Warehouse Construction in Bangalore", href: "/warehouse-construction-in-bangalore" },
      { label: "Office Fit-Out Contractors in Bangalore", href: "/office-fit-out-contractors-in-bangalore" },
      { label: "Project Management Consultancy in Bangalore", href: "/project-management-consultancy-in-bangalore" },
    ],
    enquiryCard: "Planning a factory?",
    enquiry: "Hi, I'd like to discuss a factory construction project with ACIPL.",
    closing: "Ready to build your factory?",
  },
  // ------------------------------------------------------ Offices, PMC, design
  {
    slug: "office-fit-out-contractors-in-bangalore",
    service: "office",
    serviceType: "Office Fit-Out",
    primaryKeyword: "office fit out contractors in bangalore",
    breadcrumbLabel: "Office Fit-Out Contractors in Bangalore",
    title: "Office Fit-Out Contractors in Bangalore | Design & Build | ACIPL",
    description:
      "Office fit-out contractors in Bangalore — layout, partitions, ceilings, electrical, data cabling, HVAC coordination and furniture under one contract.",
    h1: "Office Fit-Out Contractors in Bangalore",
    badge: BLR,
    subtitle: "Design-and-build office fit-outs — one contract, one project manager, an itemised BOQ.",
    image: "officeOpen",
    introHeading: "Office fit-outs, designed and built by one team",
    intro: [
      "An office fit-out turns a bare or old floor into a working office: layout, partitions, ceilings, flooring, electrical, data cabling, AC and fire coordination, furniture and branding. Done well, it happens on schedule and with no surprises in the final bill.",
      "ACIPL fits out offices across Bangalore. Our projects include workspaces for Asmara Apparels, Surbana Jurong, eMudhra and Golden Harness. We work design-and-build, with an itemised BOQ and one project manager from survey to handover.",
    ],
    context: {
      heading: "Bare shell, warm shell or refurbishment",
      body: [
        "Bare-shell spaces need everything — flooring, ceilings, services and partitions. Warm-shell spaces come with some services, which the design should reuse where possible. Refurbishments work around an existing layout and sometimes an occupied office.",
        "We survey the space first, tell you what can be reused, and price only what needs to change.",
      ],
    },
    details: [
      {
        heading: "What an office fit-out covers",
        table: {
          columns: ["Package", "Scope"],
          rows: [
            ["Civil and interiors", "Partitions, ceilings, flooring, painting, joinery, glass and doors"],
            ["Electrical and data", "Power distribution, lighting, UPS circuits, structured cabling"],
            ["HVAC and fire", "Coordination with building systems, diffuser and sprinkler relocation"],
            ["Furniture", "Workstations, storage, meeting tables, seating and loose furniture"],
            ["Branding", "Reception, logo walls, graphics and signage"],
          ],
        },
      },
    ],
    trustHeading: "Why companies choose ACIPL for their fit-out",
    faqHeading: "Office fit-outs in Bangalore: common questions",
    faqs: [
      {
        question: "What does an office fit-out cost in Bangalore?",
        answer:
          "It depends on the area, the condition of the space, the number of cabins and meeting rooms, furniture and finishes. We give you an itemised BOQ after a free survey.",
      },
      {
        question: "Do you work in tech parks with strict fit-out rules?",
        answer:
          "Yes. We follow the park's fit-out manual and coordinate approvals and inspections with its facility team.",
      },
      {
        question: "Can you refurbish our current office while we work?",
        answer:
          "Yes. We phase the work, schedule noisy jobs out of hours and keep the rest of the office running.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Koramangala", href: "/office-interior-designers-in-koramangala" },
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
      { label: "Office Interior Designers in Hebbal", href: "/office-interior-designers-in-hebbal" },
      { label: "Office Interior Designers in Yelahanka", href: "/office-interior-designers-in-yelahanka" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
    ],
    enquiryCard: "Planning an office fit-out?",
    enquiry: "Hi, I'd like a quote for an office fit-out in Bangalore from ACIPL.",
    closing: "Ready for your new office?",
  },
  {
    slug: "project-management-consultancy-in-bangalore",
    service: "construction",
    serviceType: "Project Management Consultancy",
    primaryKeyword: "project management consultancy in bangalore",
    breadcrumbLabel: "Project Management Consultancy in Bangalore",
    title: "Project Management Consultancy (PMC) in Bangalore | ACIPL",
    description:
      "Construction project management consultancy in Bangalore — planning, contractor coordination, quality checks, cost control and reporting for owners.",
    h1: "Project Management Consultancy in Bangalore",
    badge: BLR,
    subtitle: "An experienced team on your side — planning, quality checks, cost control and progress reporting.",
    image: "excavation",
    introHeading: "Project management for owners who want control",
    intro: [
      "Some owners prefer to hire contractors directly but want an experienced team to plan the project, check quality, control cost and keep everyone on schedule. That is what project management consultancy (PMC) provides.",
      "ACIPL offers PMC for residential, commercial and industrial projects in Bangalore. We represent the owner: reviewing drawings, preparing schedules and budgets, checking work on site, certifying contractor bills and reporting progress regularly.",
    ],
    context: {
      heading: "When PMC makes sense",
      body: [
        "PMC is useful when you are building something larger or more complex than a single house, when you have several contractors to coordinate, or when you cannot be on site often and need someone you trust checking the work.",
        "Because ACIPL also builds, our engineers know what good work looks like at each stage and where problems usually start.",
      ],
    },
    details: [
      {
        heading: "What our PMC service covers",
        table: {
          columns: ["Phase", "Our role"],
          rows: [
            ["Pre-construction", "Feasibility, budget, schedule, design coordination and tender documents"],
            ["Contractor selection", "Comparing quotes on the same basis and helping you negotiate"],
            ["Construction", "Site supervision, quality checks, schedule tracking and meeting records"],
            ["Cost control", "Measurement and certification of contractor bills, change control"],
            ["Close-out", "Snag lists, testing, handover documents and final accounts"],
          ],
        },
      },
    ],
    highlights: [
      { title: "On the owner's side", body: "We represent you, not the contractor, and report to you directly." },
      { title: "Quality checked at each stage", body: "Reinforcement, concrete, waterproofing and finishes checked before the next stage starts." },
      { title: "Bills you can trust", body: "Contractor bills measured and certified against completed work and agreed rates." },
      { title: "Regular reporting", body: "Progress, cost and issues reported in a format you can act on." },
    ],
    process: [
      { step: "Brief and appointment", body: "We understand the project, your goals and the level of support you need." },
      { step: "Planning", body: "Budget, schedule, design review and contractor selection." },
      { step: "Construction oversight", body: "Supervision, quality checks, bill certification and reporting." },
      { step: "Handover", body: "Snagging, testing and a complete set of handover documents." },
    ],
    trustHeading: "Why owners choose ACIPL for PMC",
    faqHeading: "Project management consultancy: common questions",
    faqs: [
      {
        question: "How is PMC charged?",
        answer:
          "It depends on the size and length of the project and how much support you need. We agree the scope of our role first and then quote.",
      },
      {
        question: "Can you manage a project being built by another contractor?",
        answer:
          "Yes. That is the core of PMC — we oversee contractors on your behalf.",
      },
      {
        question: "Do you take PMC for industrial projects?",
        answer:
          "Yes. We provide PMC for residential, commercial and industrial buildings, including PEB structures.",
      },
    ],
    related: [
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
      { label: "Pre-Engineered Building Construction in Bangalore", href: "/pre-engineered-building-construction-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
    ],
    enquiryCard: "Need a project manager on your side?",
    enquiry: "Hi, I'd like to discuss project management consultancy for my project with ACIPL.",
    closing: "Ready to take control of your project?",
  },
  {
    slug: "house-plan-and-elevation-design-in-bangalore",
    service: "construction",
    serviceType: "Architectural Design",
    primaryKeyword: "house plan and elevation design in bangalore",
    breadcrumbLabel: "House Plan and Elevation Design in Bangalore",
    title: "House Plan & Elevation Design in Bangalore | 3D | ACIPL",
    description:
      "House plans, 3D elevation design and working drawings for your Bangalore plot — designed to your brief, the plot's rules and your Vastu preferences.",
    h1: "House Plan and Elevation Design in Bangalore",
    badge: BLR,
    subtitle: "Floor plans and 3D elevations for your plot — revised with you until they feel right.",
    image: "houseTimber",
    introHeading: "A plan that fits your family and your plot",
    intro: [
      "A good house plan balances many things: how your family lives, the plot's size and orientation, the setbacks and floors the rules allow, light and ventilation, Vastu preferences and your budget. The elevation then gives the house its face on the street.",
      "ACIPL prepares house plans, 3D elevations and working drawings for plots across Bangalore — whether we go on to build the house or you build with another contractor.",
    ],
    context: {
      heading: "From brief to working drawings",
      body: [
        "We start with a conversation about your family, your plot and your budget, then draw layout options. Once you choose one, we develop it into detailed plans and a 3D elevation, and revise them with you.",
        "When the design is signed off, we prepare the drawings needed for plan sanction and construction — architectural, structural and electrical and plumbing layouts.",
      ],
    },
    details: [
      {
        heading: "What you receive",
        table: {
          columns: ["Drawing set", "What it shows"],
          rows: [
            ["Concept layouts", "Two or three layout options for the plot"],
            ["Floor plans", "Room sizes, doors, windows and furniture layout for every floor"],
            ["3D elevation", "The front of the house with materials and colours"],
            ["Sanction drawings", "Drawings in the format the approving authority needs"],
            ["Working drawings", "Structural, electrical, plumbing and detail drawings for construction"],
          ],
        },
      },
    ],
    trustHeading: "Why owners choose ACIPL to design their home",
    faqHeading: "House plan and elevation design: common questions",
    faqs: [
      {
        question: "Can we get only the design without construction?",
        answer:
          "Yes. We can prepare plans, elevation and working drawings as a design-only service.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We agree this at the start. Our aim is a plan you are happy with, so we revise until the layout and elevation are right within the agreed scope.",
      },
      {
        question: "Can you design to Vastu?",
        answer:
          "Yes. Tell us the principles that matter to you and we plan the layout around them.",
      },
    ],
    related: [
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
      { label: "Vastu-Compliant House Construction in Bangalore", href: "/vastu-compliant-house-construction-in-bangalore" },
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
    ],
    enquiryCard: "Need a house plan?",
    enquiry: "Hi, I'd like a house plan and elevation design for my plot from ACIPL.",
    closing: "Ready to design your home?",
  },
  {
    slug: "building-plan-approval-in-bangalore",
    service: "construction",
    serviceType: "Building Plan Approval Services",
    primaryKeyword: "building plan approval in bangalore",
    breadcrumbLabel: "Building Plan Approval in Bangalore",
    title: "Building Plan Approval in Bangalore | Plan Sanction | ACIPL",
    description:
      "Help with building plan approval in Bangalore — document checks, sanction drawings and the application with the city corporation, BDA or planning authority.",
    h1: "Building Plan Approval in Bangalore",
    badge: BLR,
    subtitle: "Document checks, sanction drawings and the plan-approval application, handled by people who build.",
    image: "footing",
    introHeading: "Getting your building plan sanctioned",
    intro: [
      "Every new building in Bangalore needs its plan sanctioned before construction starts. Which authority approves it depends on where the plot is — the city corporations under the Greater Bengaluru Authority, the BDA for its layouts, or planning authorities such as BIAAPA and BMRDA's local planning authorities outside the city corporations.",
      "ACIPL prepares sanction drawings and handles the plan-approval application for plots across Bangalore, starting with a check of your documents so the application goes in complete.",
    ],
    context: {
      heading: "Most delays start with documents",
      body: [
        "Applications are usually delayed by missing or mismatched documents — a khata in a different name, an old tax receipt, a plot measurement that does not match the deed. We review your documents first and tell you what needs fixing.",
        "The drawings must also meet the zoning rules for your plot — setbacks, floor area, height and parking. We design within them so the plan is approved as drawn.",
      ],
    },
    details: [
      {
        heading: "Documents usually needed",
        bullets: [
          "Title deed or sale deed.",
          "Khata certificate and extract.",
          "Latest property tax paid receipt.",
          "Encumbrance certificate.",
          "Survey sketch or plot measurement details.",
          "Owner's identity documents.",
        ],
        note: "The exact list depends on the authority and the plot. We confirm it for your case at the start.",
      },
    ],
    trustHeading: "Why owners rely on ACIPL for plan approval",
    faqHeading: "Building plan approval in Bangalore: common questions",
    faqs: [
      {
        question: "Which authority approves my building plan?",
        answer:
          "It depends on where your plot is and how its layout was approved. We check this from your documents and handle the application with the right authority.",
      },
      {
        question: "Can you get approval if we build with another contractor?",
        answer:
          "Yes. We can prepare sanction drawings and handle the application as a separate service.",
      },
      {
        question: "What if our plot has a B-khata?",
        answer:
          "Plots with document or khata issues may need those resolved first. We review your case and explain the options before any design work.",
      },
    ],
    related: [
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
      { label: "Old House Demolition and Rebuild in Bangalore", href: "/old-house-demolition-and-rebuild-in-bangalore" },
    ],
    enquiryCard: "Need your plan sanctioned?",
    enquiry: "Hi, I need help with building plan approval in Bangalore from ACIPL.",
    closing: "Ready to get your plan approved?",
  },
  {
    slug: "structural-design-services-in-bangalore",
    service: "construction",
    serviceType: "Structural Design",
    primaryKeyword: "structural design services in bangalore",
    breadcrumbLabel: "Structural Design Services in Bangalore",
    title: "Structural Design Services in Bangalore | ACIPL",
    description:
      "Structural design and drawings in Bangalore for houses, additional floors, commercial and steel buildings — designed to Indian Standards and coordinated with services.",
    h1: "Structural Design Services in Bangalore",
    badge: BLR,
    subtitle: "Structural design and drawings for houses, extra floors, commercial and steel buildings.",
    image: "steelFrame",
    introHeading: "A structure designed for the building you want",
    intro: [
      "The structure is the part of a building you never see and can never easily change. A good structural design is safe, economical and coordinated with the architecture and services, so beams do not clash with ducts and columns do not land in the middle of a room.",
      "ACIPL provides structural design for houses, additional floors, rental and commercial buildings and steel structures in Bangalore, as part of our design-and-build projects or as a separate service.",
    ],
    context: {
      heading: "Designed to code, coordinated with services",
      body: [
        "We design reinforced-concrete structures to the relevant Indian Standards, including IS 456 for concrete and the loading and seismic codes, using the soil test results for the foundation design.",
        "Because we also build, our drawings are practical on site — clear reinforcement details, bar schedules and notes that contractors can follow.",
      ],
    },
    details: [
      {
        heading: "What we design",
        table: {
          columns: ["Project type", "Typical structural work"],
          rows: [
            ["New houses and buildings", "Foundation, columns, beams, slabs and staircase design and drawings"],
            ["Additional floors", "Assessment of the existing structure and design of new floors or strengthening"],
            ["Steel and PEB", "Steel frames, mezzanines, canopies and their foundations"],
            ["Alterations", "Removing or shifting walls and columns with safe new supports"],
          ],
        },
      },
    ],
    trustHeading: "Why owners and architects choose ACIPL for structural design",
    faqHeading: "Structural design services: common questions",
    faqs: [
      {
        question: "Can you check whether our house can take another floor?",
        answer:
          "Yes. We assess the existing foundation and frame, using drawings if available and tests if needed, and tell you whether an extra floor is safe or what strengthening it needs.",
      },
      {
        question: "Do you need a soil test?",
        answer:
          "For new foundations, yes. The soil test tells us what the ground can carry and at what depth, which decides the foundation design.",
      },
      {
        question: "Can you work with our architect's drawings?",
        answer:
          "Yes. We design the structure to your architect's plans and coordinate any changes with them.",
      },
    ],
    related: [
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
      { label: "Pre-Engineered Building Construction in Bangalore", href: "/pre-engineered-building-construction-in-bangalore" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
    ],
    enquiryCard: "Need structural drawings?",
    enquiry: "Hi, I need structural design for my building from ACIPL.",
    closing: "Ready for a structure you can rely on?",
  },
  // ------------------------------------------------------------ Buyer's guide
  {
    slug: "best-construction-company-in-bangalore",
    service: "construction",
    primaryKeyword: "best construction company in bangalore",
    breadcrumbLabel: "Choosing the Best Construction Company in Bangalore",
    title: "Best Construction Company in Bangalore? How to Choose | ACIPL",
    description:
      "How to choose the best construction company in Bangalore for your home — what to check, what to ask, red flags to avoid and how to compare quotes fairly.",
    h1: "How to Choose the Best Construction Company in Bangalore",
    badge: BLR,
    subtitle: "A practical checklist for comparing builders — and the questions we expect you to ask us too.",
    image: "excavation",
    introHeading: "What “best” should mean for your home",
    intro: [
      "Search for the best construction company in Bangalore and you will find long lists and confident claims. But the best builder for you is the one that builds properly, sticks to what was agreed and is still answering your calls when something needs fixing.",
      "This page is a checklist for comparing builders — including ACIPL. Use it with every company you speak to, and you will quickly see who is giving you clear answers.",
    ],
    context: {
      heading: "Compare like with like",
      body: [
        "A low per-square-foot rate means little without the specification behind it. Two quotes can look different simply because one includes compound walls, sumps, approvals or better fittings and the other does not. Always compare the full scope and the named materials.",
        "Ask every builder for the same things in writing: the specification, the payment schedule, what is excluded, and how changes are priced. If a builder will not put it in writing, treat that as your answer.",
      ],
    },
    details: [
      {
        heading: "Checklist: what to ask every builder",
        table: {
          columns: ["Check", "Why it matters", "What to ask for"],
          rows: [
            ["Completed work", "Shows real quality, not renderings", "Addresses of finished homes you can visit, and owners you can talk to"],
            ["Specification", "The single biggest source of disputes", "Brands and grades of cement, steel, blocks, wiring, pipes, tiles and fittings"],
            ["Exclusions", "Where surprise costs hide", "A written list of what is not included: approvals, compound wall, sump, borewell, utility connections"],
            ["Payment schedule", "Protects you from paying ahead of work", "Payments tied to completed stages, not to dates"],
            ["Supervision", "Quality depends on who is on site", "Name of the site engineer and how often they visit"],
            ["Design and drawings", "Prevents clashes and rework", "Structural and MEP drawings, not just a floor plan"],
            ["Changes", "Changes are where budgets slip", "How variations are priced and approved before work"],
            ["After handover", "Problems often appear in the first monsoon", "What the builder does if leaks or cracks appear, in writing"],
          ],
        },
      },
      {
        heading: "Red flags",
        bullets: [
          "A rate quoted before anyone has seen your plot.",
          "A specification that says “branded” or “standard” instead of naming brands and grades.",
          "Large advance payments before work starts.",
          "No structural drawings, or structure “designed on site”.",
          "Reluctance to show completed homes or put commitments in writing.",
        ],
      },
    ],
    trustHeading: "How ACIPL answers this checklist",
    faqHeading: "Choosing a construction company: common questions",
    faqs: [
      {
        question: "Which is the best construction company in Bangalore?",
        answer:
          "There is no single answer — it depends on your project, budget and how much you want to be involved. Use the checklist on this page with every builder you consider, including us, and choose the one that gives you the clearest written answers.",
      },
      {
        question: "Is the cheapest quote a bad sign?",
        answer:
          "Not by itself, but check what it leaves out. Compare the full specification and exclusions; a low headline rate often comes with lower-grade materials or extra charges later.",
      },
      {
        question: "Will ACIPL show us completed work?",
        answer:
          "Yes. Ask us for examples of completed projects relevant to yours, and we will arrange what we can.",
      },
      {
        question: "Does ACIPL put the specification in writing?",
        answer:
          "Yes. Materials, brands and grades, payment stages and exclusions are written into our contract before work starts.",
      },
    ],
    related: [
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
      { label: "Turnkey House Construction in Bangalore", href: "/turnkey-house-construction-in-bangalore" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
    ],
    enquiryCard: "Comparing builders?",
    enquiry: "Hi, I'm comparing construction companies in Bangalore and would like a detailed quote from ACIPL.",
    closing: "Put us to the test",
  },
]
