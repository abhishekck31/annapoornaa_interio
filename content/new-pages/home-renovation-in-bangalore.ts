import { business } from "@/lib/business"

import type { NewLandingPage } from "./types"

export const homeRenovationInBangalore: NewLandingPage = {
  slug: "home-renovation-in-bangalore",
  kind: "pillar",
  primaryKeyword: "home renovation in Bangalore",
  service: "Home Renovation",
  location: "Bangalore",
  areaServed: "Bengaluru",
  breadcrumbLabel: "Home Renovation in Bangalore",

  title: "Home Renovation in Bangalore | Contractors | ACIPL",
  description:
    "Home renovation in Bangalore for older houses and apartments: waterproofing, rewiring, re-plumbing, kitchen and bathroom remodels, and adding a floor.",
  h1: "Home Renovation in Bangalore",
  heroBadge: "Older houses and apartments across Bengaluru",
  heroSubtitle:
    "We fix what is behind the walls first — seepage, wiring, plumbing — then rebuild the kitchens, bathrooms and finishes on top of it.",
  image: "/centuryclub/WhatsApp Image 2025-04-26 at 19.14.41_34eae5d8.jpg",
  imageAlt: "Renovated washroom with patterned grey wall tiles and a vanity counter at Century Club, Bengaluru, by ACIPL",

  introHeading: "Home renovation in Bangalore that starts behind the walls",
  intro: [
    "A lot of renovation money in Bengaluru is spent on the surface: new tiles over a wall that is still damp, a fresh coat of paint over wiring that is thirty years old, a new kitchen on top of pipes that already leak. A year later the stains come back. Good home renovation in Bangalore works the other way round — find and fix the cause, then finish.",
    "ACIPL renovates independent houses and apartments across the city. Before we quote, we inspect the building for seepage, wiring condition, plumbing and structural soundness, and tell you what needs doing now and what can wait. Our renovation work also includes larger commercial spaces such as Century Club on Seshadri Road.",
  ],
  localContext: {
    heading: "The problems we find in older Bengaluru homes",
    body: [
      "Houses built in the 1980s and 1990s across Bengaluru's older layouts were usually well built, but their services were designed for a different way of living. Wiring was sized for a few fans and lights, not air conditioners, geysers and induction hobs. Galvanised iron water pipes corrode from inside. Terraces were waterproofed once, if at all, and the sunshades and parapets have been letting water into the walls ever since.",
      "Apartments from the early 2000s have their own pattern: seepage between bathrooms and the flat below, bathroom floors laid without proper slope, and kitchens built around the plumbing the builder chose. These are all fixable, but only if the renovation is planned around them.",
    ],
  },
  details: [
    {
      heading: "What a renovation can include",
      bullets: [
        "Seepage investigation and waterproofing — terrace, bathrooms, external walls and sunshades",
        "Full rewiring with a new distribution board, earthing and circuits sized for today's appliances",
        "Re-plumbing in CPVC or UPVC to replace old galvanised iron pipes",
        "Kitchen remodel, including relocating the sink or hob where the plumbing allows",
        "Bathroom remodel with proper floor slope, waterproofing and concealed cisterns",
        "New flooring, false ceilings, doors, windows and painting",
        "Adding a floor, after a structural check of the existing foundation and columns",
      ],
    },
    {
      heading: "Adding a floor to an existing house",
      paragraphs: [
        "Adding a floor is often the best-value way to get more space or rental income from a plot you already own, but only if the building can carry it. Before we price it, a structural engineer checks the foundation, columns and slab, and we look at the original sanction and what the rules now allow. If the structure needs strengthening, you will know before any money is committed. A revised plan sanction is usually needed, and we handle that application alongside the design.",
      ],
    },
  ],

  highlights: [
    {
      title: "Diagnosis before the quote",
      body: "Moisture readings, a wiring and plumbing inspection and a structural look at cracks — so the quote is based on the building's actual condition.",
    },
    {
      title: "Waterproofing done properly",
      body: `Terraces, bathrooms and external walls treated at the source, not patched from inside. Waterproofing warranty: ${business.construction.waterproofingWarranty}.`,
    },
    {
      title: "Services renewed, not patched",
      body: "Rewiring and re-plumbing done before any finishes go on, then tested, so you are not chasing faults behind new tiles.",
    },
    {
      title: "Living-in or vacant",
      body: "We can phase work room by room if you stay in the house, or run it faster if the house is empty. The quote says which and how long.",
    },
  ],
  process: [
    {
      step: "Inspect",
      body: "A walk-through with moisture checks, services inspection and a note of any structural cracks.",
    },
    {
      step: "Scope and quote",
      body: "An itemised scope split into must-do and optional work, with a schedule for each phase.",
    },
    {
      step: "Strip and fix",
      body: "Demolition, waterproofing, rewiring and re-plumbing, tested before anything is closed up.",
    },
    {
      step: "Rebuild and finish",
      body: "Kitchen, bathrooms, flooring, ceilings and painting, then a snag walk and handover.",
    },
  ],

  trustHeading: "Why homeowners trust us with renovation",

  faqHeading: "Home renovation in Bangalore: common questions",
  faqs: [
    {
      question: "Can you stop seepage without breaking all the tiles?",
      answer:
        "Sometimes. If the source is the terrace, external wall or a sunshade, it can often be treated from outside without touching the interior. If the leak is from a bathroom floor or a concealed pipe, the tiles in that area usually have to come up so it can be fixed at the source. We find the source first so we only break what we must.",
    },
    {
      question: "How do I know if my house needs rewiring?",
      answer:
        "Signs include frequent tripping, warm switches or sockets, no earth leakage protection, and wiring that is more than about 20 to 25 years old. If you are adding air conditioners or other heavy appliances, the existing circuits often cannot carry the load. We inspect and test the installation before recommending anything.",
    },
    {
      question: "Can an old house take an extra floor?",
      answer:
        "It depends on the foundation and columns, which is why a structural check comes first. Many houses built with a future floor in mind can take one; others need strengthening, and a few cannot safely take the load. You also need a revised sanction, which we apply for as part of the job.",
    },
    {
      question: "Can we stay in the house during the renovation?",
      answer:
        "For many projects, yes. We work room by room, keep one bathroom and the kitchen usable as long as possible, and clear debris daily. Whole-house rewiring or re-plumbing is quicker and less disruptive if you can move out for that phase.",
    },
    {
      question: "How long does a full home renovation take?",
      answer:
        "A full renovation of a typical independent house takes {{CONFIRM: weeks/months}}, and an apartment {{CONFIRM: weeks}}, depending on scope. Waterproofing needs curing and testing time that should not be skipped. The schedule is set out in the quote.",
    },
  ],
  related: [
    { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
    { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
    { label: "Modular Kitchen in Bangalore", href: "/modular-kitchen-in-bangalore" },
    { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
  ],

  enquiryCardHeading: "Planning a renovation?",
  enquiryMessage:
    "Hi, I'd like a quote for home renovation in Bangalore from ACIPL.",
  closingHeading: "Ready to renovate your home?",
}
