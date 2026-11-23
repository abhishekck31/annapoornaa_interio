/**
 * Builder for the November 2026 "area" landing pages.
 *
 * Each page combines two things:
 *   - a service profile (below): the scope tables, highlights, process and the
 *     service FAQs that are true wherever we work
 *   - page input (localities.ts / pillars.ts): the intro, local context, local
 *     FAQs and links that are specific to that area or that keyword
 *
 * The output is the same `NewLandingPage` shape used by the October batch, so
 * these pages render through `components/seo/new-landing-page.tsx` and look
 * identical to the rest of the location pages.
 *
 * Ground rules carried over from the earlier batches: no prices, timelines,
 * project counts, warranties or reviews are stated anywhere — those need the
 * client's confirmation (see lib/business.ts).
 */

import type { FaqItem } from "@/lib/seo/schema"

import type { DetailSection, NewLandingPage } from "../new-pages/types"

/** Same shape as the October pages, but the slug is not tied to that registry. */
export type AreaPage = Omit<NewLandingPage, "slug"> & { slug: string }

export type ServiceKey = "interior" | "kitchen" | "construction" | "renovation"

export interface Link {
  label: string
  href: string
}

export const images = {
  livingTv: {
    image: "/homeint/home5.jpg",
    imageAlt: "Wall-mounted TV unit in charcoal and oak finish with open shelves, in a new apartment by ACIPL",
  },
  livingMarble: {
    image: "/homeint/home29.jpg",
    imageAlt: "Living room TV unit with a marble-finish panel and open display shelving, by ACIPL",
  },
  stoneWall: {
    image: "/homeint/home1.jpg",
    imageAlt: "Textured stone feature wall with concealed LED strip over grey panelling, by ACIPL",
  },
  bathroom: {
    image: "/homeint/home10.jpg",
    imageAlt: "Bathroom with black-framed glass shower partition, marble vanity and cove-lit ceiling, by ACIPL",
  },
  bedroom: {
    image: "/homeint/home14.jpg",
    imageAlt: "Master bedroom with upholstered bed, two-tone wardrobe and track lighting on marble flooring, by ACIPL",
  },
  villaRoom: {
    image: "/homeint/home20.jpg",
    imageAlt: "Villa bedroom with wood-panelled ceiling feature, recessed lights and marble flooring, by ACIPL",
  },
  partition: {
    image: "/homeint/home24.jpg",
    imageAlt: "Brass-framed shelving partition opening into a study with a backlit world-map wall, by ACIPL",
  },
  kitchenU: {
    image: "/homeint/home30.jpg",
    imageAlt: "U-shaped modular kitchen with blue base units, white wall cabinets and under-cabinet lighting, by ACIPL",
  },
  kitchenParallel: {
    image: "/interiors/Interiors6.jpg",
    imageAlt: "Parallel kitchen with full-height white storage and green base units, by ACIPL",
  },
  pooja: {
    image: "/dsrapartment/WhatsApp Image 2025-05-04 at 21.22.41_6539de36.jpg",
    imageAlt: "Pooja unit with a cut-out Ganesha motif and brass bells in an apartment interior by ACIPL",
  },
  houseTimber: {
    image: "/Construction/construction2.jpg",
    imageAlt: "Multi-storey independent house with timber-finish cladding and glass balconies, built by ACIPL",
  },
  houseFourStorey: {
    image: "/Construction/WhatsApp Image 2025-04-26 at 21.56.48_5f3f2e67.jpg",
    imageAlt: "Four-storey independent house with wood-finish cladding and glass balconies, built by ACIPL",
  },
  villaRoof: {
    image: "/Construction/construction4.jpg",
    imageAlt: "Two-storey villa with a sloped red roof on an open plot, built by ACIPL",
  },
  villaPool: {
    image: "/const2/WhatsApp Image 2025-04-28 at 18.55.24_6258f4a2.jpg",
    imageAlt: "Villa with arched verandas and a swimming pool in a landscaped garden, built by ACIPL",
  },
  footing: {
    image: "/Construction/WhatsApp Image 2025-04-26 at 23.32.10_123996c2.jpg",
    imageAlt: "Column footing with reinforcement cage and formwork on an ACIPL house construction site",
  },
  washroom: {
    image: "/centuryclub/WhatsApp Image 2025-04-26 at 19.14.41_34eae5d8.jpg",
    imageAlt: "Renovated washroom with patterned grey wall tiles and a vanity counter at Century Club, Bengaluru, by ACIPL",
  },
} as const

// ---------------------------------------------------------------------------
// Service profiles
// ---------------------------------------------------------------------------

interface Profile {
  service: string
  /** "Interior Designers", "Modular Kitchen" … used in H1, title, breadcrumb. */
  label: string
  details: (place: string) => DetailSection[]
  highlightsHeading: string
  highlights: { title: string; body: string }[]
  process: { step: string; body: string }[]
  /** Service FAQs, true anywhere. Three are picked per page, rotated by index. */
  faqPool: (place: string) => FaqItem[]
  intro2: (place: string) => string
  enquiry: (place: string) => string
  closing: (place: string) => string
  trust: (place: string) => string
  pillar?: Link
}

const interior: Profile = {
  service: "Interior Design",
  label: "Interior Designers",
  pillar: { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
  details: (place) => [
    {
      heading: `What a home interior in ${place} usually covers`,
      table: {
        columns: ["Room", "Typical work", "Often added"],
        rows: [
          ["Kitchen", "Modular base and wall units, loft, countertop, chimney and hob provision", "Tall pantry unit, breakfast counter"],
          ["Bedrooms", "Wardrobes with lofts, bed back panel, side tables", "Study desk, dresser, TV wall"],
          ["Living and dining", "TV unit, false ceiling with lighting, crockery unit", "Feature wall, partition, foyer and shoe storage"],
          ["Pooja and utility", "Pooja unit or room, utility storage", "Washing-machine housing, ironing station"],
          ["Whole home", "Electrical changes, painting, deep clean before handover", "Wallpaper, curtains and blinds, decorative lighting"],
        ],
      },
      note: "Your scope is fixed at the design stage. The table shows what most owners choose, not a fixed package.",
    },
  ],
  highlightsHeading: "What you get when you work with us",
  highlights: [
    { title: "Design you can see first", body: "Furniture layouts and 3D views of the main rooms, revised until you are happy, before anything goes into production." },
    { title: "An itemised quote", body: "Every unit listed with its size, core material, finish and hardware, so you can compare quotes line by line." },
    { title: "One team, design to handover", body: "Design, carpentry, electrical, ceilings and painting run by our own supervisor, so there is one person accountable." },
    { title: "Materials chosen for Bangalore homes", body: "Boiling-water-resistant ply where moisture is a risk, edge-banded panels and soft-close hardware, specified in writing." },
  ],
  process: [
    { step: "Free site visit", body: "We measure, note every plumbing and electrical point, and understand how you use each room." },
    { step: "Design and quote", body: "Layouts, 3D views and material choices, with an itemised quote you can check line by line." },
    { step: "Production and site work", body: "Modular units are made off site while ceilings, electrical and painting happen at your home." },
    { step: "Install and handover", body: "Installation, a deep clean and a snag walk with you before the keys come back." },
  ],
  faqPool: (place) => [
    {
      question: `How much does home interior design in ${place} cost?`,
      answer:
        "It depends on the rooms you include, the size of each unit and the materials and finishes you choose, so any per-flat figure quoted without seeing the home is a guess. We visit for free, agree the scope with you, and send an itemised quote that lists every unit, so you can see exactly where the money goes and trim where you want to.",
    },
    {
      question: "Do you show a 3D design before work starts?",
      answer:
        "Yes. You get a furniture layout and 3D views of the main rooms, and we revise them with you until the design is signed off. Production only starts after sign-off, so there are no surprises when the units arrive.",
    },
    {
      question: "Which materials do you use for kitchens and wardrobes?",
      answer:
        "We specify the core material, finish and hardware for every unit in the quote. Boiling-water-resistant plywood is the usual choice under sinks and in kitchens, with laminate, acrylic or PU finishes depending on your budget and the look you want, and soft-close hinges and channels throughout.",
    },
    {
      question: "Can you work while we are living in the house?",
      answer:
        "Yes. We plan the work room by room, keep noisy and dusty jobs to agreed hours, cover finished areas, and clean up at the end of each day. Because most units are made off site, the time spent working inside your home is shorter than with fully on-site carpentry.",
    },
    {
      question: "Do you handle electrical, ceiling and painting work too?",
      answer:
        "Yes. Electrical changes, false ceilings, lighting, painting and the final clean are part of the same project and handled by our own team, so you do not have to coordinate separate contractors.",
    },
    {
      question: "How do we stay updated while the work is going on?",
      answer:
        "You get a named site supervisor and regular photo updates on WhatsApp, plus site visits whenever you want them. Any change to the design or cost is agreed in writing before it is done.",
    },
  ],
  intro2: (place) =>
    `We are a Bangalore design-and-build firm with our office in Yelahanka New Town. As interior designers for ${place}, we handle the whole job — design, factory-made modular units, ceilings, electrical, painting and handover — with one site supervisor accountable from start to finish, and an itemised quote before anything is ordered.`,
  enquiry: (place) => `Hi, I'd like a quote for home interiors in ${place} from ACIPL.`,
  closing: (place) => `Ready to design your ${place} home?`,
  trust: (place) => `Why homeowners in ${place} choose ACIPL`,
}

const kitchen: Profile = {
  service: "Modular Kitchen",
  label: "Modular Kitchen",
  pillar: { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
  details: (place) => [
    {
      heading: `Kitchen layouts that suit ${place} homes`,
      table: {
        columns: ["Layout", "Works best for", "Things to watch"],
        rows: [
          ["L-shaped", "Most 2BHK and 3BHK apartment kitchens", "Corner storage — use a carousel or blind-corner unit"],
          ["Parallel", "Narrow kitchens with a utility at the end", "Keep a clear walkway between the two counters"],
          ["U-shaped", "Larger kitchens in villas and independent houses", "Plan the sink, hob and fridge so they are not crammed together"],
          ["Straight", "Compact apartments and studio flats", "Tall units and a loft make up for limited counter run"],
          ["Island or breakfast counter", "Open kitchens in villas and larger flats", "Needs power and sometimes plumbing in the floor"],
        ],
      },
    },
    {
      heading: "Materials and finishes, explained plainly",
      bullets: [
        "Carcass: boiling-water-resistant (BWP) plywood is the usual choice for sink units and anywhere water reaches; other carcass options are explained in the quote.",
        "Shutters: laminate is durable and affordable, acrylic gives a high gloss, PU paint gives a seamless painted finish — each listed with its price in your quote.",
        "Hardware: soft-close hinges and drawer channels, tandem boxes, cutlery and plate organisers, tall pantry pull-outs.",
        "Countertop: granite or quartz, chosen with you from samples.",
        "Appliances: hob, chimney, built-in oven and dishwasher provisions planned into the design, with matching electrical points.",
      ],
    },
  ],
  highlightsHeading: "What's included",
  highlights: [
    { title: "Measured and designed at your home", body: "We measure the kitchen, map plumbing, gas and electrical points, and design around how you cook." },
    { title: "Factory-made units", body: "Cabinets are made off site and installed in days, so your kitchen is out of use for as short a time as possible." },
    { title: "An itemised quote", body: "Every cabinet listed with size, carcass, shutter finish and hardware — easy to compare with any other quote." },
    { title: "Electrical, plumbing and tiling covered", body: "Point changes, dado tiling and countertop work done by the same team that installs the units." },
  ],
  process: [
    { step: "Free kitchen visit", body: "Measurements, service points, and a conversation about how your family cooks and stores." },
    { step: "Design and quote", body: "Layout, 3D views, finish samples and an itemised quote." },
    { step: "Production", body: "Cabinets made off site while any civil, plumbing or electrical changes are done at home." },
    { step: "Install and handover", body: "Countertop, cabinets, appliances and a final check of every drawer and hinge." },
  ],
  faqPool: (place) => [
    {
      question: `What does a modular kitchen in ${place} cost?`,
      answer:
        "The cost depends on the length of the kitchen, the layout, the carcass material, the shutter finish and the accessories you choose. We give you an itemised quote after a free visit, with each cabinet priced separately, so you can see how changing a finish or an accessory changes the total.",
    },
    {
      question: "Is plywood or MDF better for a kitchen?",
      answer:
        "For the sink unit and anywhere water is likely, boiling-water-resistant plywood is the safer choice. Other parts of the kitchen can use other boards to save cost. We list the material for every unit in the quote, so there is no ambiguity about what you are paying for.",
    },
    {
      question: "Can you fit a modular kitchen into an existing kitchen without breaking the platform?",
      answer:
        "Often, yes. If the existing platform is sound and at a comfortable height, we can design units to fit under and above it. If it is damaged, too low or in the wrong place, we will recommend rebuilding it and explain why before you decide.",
    },
    {
      question: "How long is the kitchen out of use?",
      answer:
        "Most of the work happens in the factory. The time your kitchen is actually unusable covers removal of the old units, any civil and plumbing work, and installation — and you get a dated schedule for that before we start.",
    },
    {
      question: "Do you supply the chimney, hob and other appliances?",
      answer:
        "We can, or you can buy your own. Either way we plan the cut-outs, electrical points and ducting for the exact models, so everything fits properly on installation day.",
    },
  ],
  intro2: (place) =>
    `ACIPL designs and installs modular kitchens across Bangalore from our office in Yelahanka New Town. For ${place} homes we measure on site, design around your existing plumbing and gas points wherever possible, make the cabinets off site, and give you an itemised quote before anything is ordered.`,
  enquiry: (place) => `Hi, I'd like a quote for a modular kitchen in ${place} from ACIPL.`,
  closing: (place) => `Planning a new kitchen in ${place}?`,
  trust: (place) => `Why ${place} homeowners trust us with their kitchen`,
}

const construction: Profile = {
  service: "House Construction",
  label: "House Construction",
  pillar: { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
  details: () => [
    {
      heading: "From plot to keys: the stages we manage",
      table: {
        columns: ["Stage", "What happens", "What you sign off"],
        rows: [
          ["Plot and feasibility", "Site visit, soil test, setbacks and permissible floors checked", "Go-ahead and design brief"],
          ["Design and approvals", "Architectural, structural and MEP drawings; plan sanction paperwork", "Floor plans and elevation"],
          ["Foundation and structure", "Excavation, footings, columns, beams and slabs, with curing", "Each slab before the next floor"],
          ["Walls, services and plaster", "Blockwork, electrical conduits, plumbing lines, plastering", "Electrical and plumbing layouts"],
          ["Finishes and handover", "Flooring, doors and windows, painting, fittings, cleaning", "Snag list and final handover"],
        ],
      },
      note: "Materials, brands and the payment schedule are written into the contract before work starts.",
    },
  ],
  highlightsHeading: "What's included",
  highlights: [
    { title: "Drawings and approvals handled", body: "Architectural, structural and MEP drawings prepared in-house, and the plan-sanction paperwork handled for you." },
    { title: "Materials named in the contract", body: "Cement, steel, blocks, electrical and plumbing items specified by brand and grade before work starts." },
    { title: "Stage-wise payments", body: "Payments linked to completed stages of work, so you pay for progress you can see." },
    { title: "Supervision on site", body: "A site engineer running the work, with photo updates and quality checks at every stage." },
  ],
  process: [
    { step: "Plot visit", body: "We check the plot, access, setbacks and what you want to build, at no cost." },
    { step: "Design and estimate", body: "Plans, elevation and a detailed estimate with materials named." },
    { step: "Approvals and construction", body: "Plan sanction, then foundation, structure and services, stage by stage." },
    { step: "Finishing and handover", body: "Flooring, painting and fittings, a snag walk with you, and the keys." },
  ],
  faqPool: (place) => [
    {
      question: `What is the cost of house construction in ${place}?`,
      answer:
        "Construction cost depends on the built-up area, number of floors, soil conditions, and the specification of materials and finishes. We give you a detailed estimate after visiting the plot, with brands and grades named, so you are comparing like with like when you look at other quotes.",
    },
    {
      question: "Do you handle plan sanction and approvals?",
      answer:
        "Yes. We prepare the drawings and handle the plan-sanction paperwork with the relevant authority, and we tell you upfront what documents we need from you, such as the title deed, khata and tax receipts.",
    },
    {
      question: "How are payments structured?",
      answer:
        "Payments are linked to stages of work — for example foundation, each slab, brickwork, plastering and finishing — and written into the contract. You only pay for a stage once it is done.",
    },
    {
      question: "Can we choose our own tiles, fittings and paint?",
      answer:
        "Yes. The contract gives an allowance for items like tiles and sanitaryware. You choose what you like; if it costs more or less than the allowance, the difference is adjusted transparently.",
    },
    {
      question: "Do you do interiors after construction?",
      answer:
        "Yes. ACIPL is a design-and-build firm, so we can plan the interiors alongside the construction drawings. That way electrical points, plumbing and ceiling heights suit the kitchen, wardrobes and lighting you want.",
    },
  ],
  intro2: (place) =>
    `ACIPL is a design-and-build firm based in Yelahanka New Town. For house construction in ${place} we take the project from soil test and drawings through plan sanction, structure and finishing to handover, with materials named in the contract and payments linked to completed stages.`,
  enquiry: (place) => `Hi, I'd like to discuss building a house in ${place} with ACIPL.`,
  closing: (place) => `Ready to build in ${place}?`,
  trust: (place) => `Why plot owners in ${place} build with ACIPL`,
}

const renovation: Profile = {
  service: "Renovation",
  label: "Home Renovation",
  pillar: { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
  details: (place) => [
    {
      heading: `Renovation work we do in ${place}`,
      table: {
        columns: ["Area", "Common work"],
        rows: [
          ["Kitchen", "New modular kitchen, platform rebuild, dado tiles, plumbing and electrical points"],
          ["Bathrooms", "Waterproofing, new tiles, sanitaryware, concealed plumbing, glass partitions"],
          ["Flooring", "Replacing old mosaic or tiles with vitrified tiles, marble or wooden flooring"],
          ["Electrical", "Rewiring, new distribution board, more points and lighting"],
          ["Interiors", "Wardrobes, TV unit, false ceiling, painting and polishing"],
        ],
      },
    },
  ],
  highlightsHeading: "What's included",
  highlights: [
    { title: "An honest site survey", body: "We check for seepage, cracks and old wiring first, so the renovation fixes causes, not just surfaces." },
    { title: "Waterproofing done properly", body: "Bathrooms and terraces waterproofed before new tiles go down, not as an afterthought." },
    { title: "One contract for everything", body: "Civil, plumbing, electrical, carpentry and painting under one team and one supervisor." },
    { title: "Living-in friendly", body: "Room-by-room phasing, dust control and daily clean-up if you are staying at home." },
  ],
  process: [
    { step: "Site survey", body: "A free visit to inspect the home and understand what you want to change." },
    { step: "Plan and quote", body: "A scope of work, design for the key rooms, and an itemised quote." },
    { step: "Execution", body: "Civil, services and finishes in a planned sequence, with regular updates." },
    { step: "Handover", body: "Deep clean, snag walk, and the home back to you." },
  ],
  faqPool: (place) => [
    {
      question: `How much does home renovation in ${place} cost?`,
      answer:
        "It depends entirely on scope — a bathroom refresh and a full-home rewiring with new flooring are very different jobs. We survey the home for free and give you an itemised quote, so you can prioritise the work that matters most.",
    },
    {
      question: "Can we stay at home during the renovation?",
      answer:
        "For most projects, yes. We phase the work room by room and keep the kitchen or one bathroom usable where possible. For whole-home jobs involving flooring and rewiring, moving out for part of the work is usually faster and less stressful — we will tell you honestly which applies.",
    },
    {
      question: "Do you fix seepage and dampness?",
      answer:
        "Yes. We trace the source first — a leaking pipe, failed bathroom waterproofing or a terrace problem — and fix that before repairing plaster and paint, so the damp does not come back.",
    },
    {
      question: "Do we need permission from the association or authorities?",
      answer:
        "Most internal renovation in apartments only needs the association's approval and adherence to its working-hour rules. Structural changes or extra floors in independent houses need approvals, and we will advise you on what applies before starting.",
    },
  ],
  intro2: (place) =>
    `ACIPL renovates homes across Bangalore from our office in Yelahanka New Town. In ${place} we handle the whole job — civil work, waterproofing, plumbing, electrical, carpentry and painting — under one supervisor and one itemised quote.`,
  enquiry: (place) => `Hi, I'd like a quote for renovating my home in ${place} from ACIPL.`,
  closing: (place) => `Ready to renovate your ${place} home?`,
  trust: (place) => `Why ${place} homeowners renovate with ACIPL`,
}

export const profiles: Record<ServiceKey, Profile> = { interior, kitchen, construction, renovation }

// ---------------------------------------------------------------------------
// Locality pages
// ---------------------------------------------------------------------------

export interface LocalInput {
  service: ServiceKey
  /** Display name, e.g. "Electronic City". */
  place: string
  /** URL fragment, e.g. "electronic-city". */
  key: string
  badge: string
  /** Second half of the meta description — what is specific to this area. */
  pitch: string
  subtitle: string
  intro: string
  context: { heading: string; body: string[] }
  faqs: FaqItem[]
  related: Link[]
  image: keyof typeof images
  enquiryCard?: string
}

const slugPrefix: Record<ServiceKey, string> = {
  interior: "interior-designers-in",
  kitchen: "modular-kitchen-in",
  construction: "house-construction-in",
  renovation: "home-renovation-in",
}

export function buildLocal(input: LocalInput, index: number): AreaPage {
  const p = profiles[input.service]
  const { place } = input
  const slug = `${slugPrefix[input.service]}-${input.key}`
  const pool = p.faqPool(place)
  const picked = [0, 1, 2].map((i) => pool[(index + i * 2) % pool.length])
  const unique = picked.filter((faq, i) => picked.findIndex((f) => f.question === faq.question) === i)

  return {
    slug,
    kind: "locality",
    primaryKeyword: `${p.label.toLowerCase()} in ${place}`,
    service: p.service,
    location: place,
    areaServed: `${place}, Bengaluru`,
    breadcrumbLabel: `${p.label} in ${place}`,
    parent: p.pillar ? { name: p.pillar.label, path: p.pillar.href } : undefined,
    title: `${p.label} in ${place}, Bangalore | ACIPL`,
    description: `${p.label} in ${place}, Bangalore: ${input.pitch} Free site visit and itemised quote.`,
    h1: `${p.label} in ${place}, Bangalore`,
    heroBadge: input.badge,
    heroSubtitle: input.subtitle,
    ...images[input.image],
    introHeading: `${p.label} in ${place} — ${p.service === "Interior Design" ? "design to handover" : "planned around your home"}`,
    intro: [input.intro, p.intro2(place)],
    localContext: input.context,
    details: p.details(place),
    highlightsHeading: p.highlightsHeading,
    highlights: p.highlights,
    process: p.process,
    trustHeading: p.trust(place),
    faqHeading: `${p.label} in ${place}: common questions`,
    faqs: [...input.faqs, ...unique],
    related: [...input.related, ...(p.pillar ? [p.pillar] : []), { label: "All areas we serve", href: "/areas-we-serve" }],
    enquiryCardHeading: input.enquiryCard ?? `Planning work in ${place}?`,
    enquiryMessage: p.enquiry(place),
    closingHeading: p.closing(place),
  }
}

// ---------------------------------------------------------------------------
// Bangalore-wide pillar pages
// ---------------------------------------------------------------------------

export interface PillarInput {
  slug: string
  service: ServiceKey
  /** schema.org serviceType override. */
  serviceType?: string
  location?: string
  areaServed?: string
  primaryKeyword: string
  breadcrumbLabel: string
  title: string
  description: string
  h1: string
  badge: string
  subtitle: string
  image: keyof typeof images
  introHeading: string
  intro: string[]
  context: { heading: string; body: string[] }
  details: DetailSection[]
  highlights?: { title: string; body: string }[]
  process?: { step: string; body: string }[]
  trustHeading: string
  faqHeading: string
  faqs: FaqItem[]
  related: Link[]
  enquiryCard: string
  enquiry: string
  closing: string
}

export function buildPillar(input: PillarInput): AreaPage {
  const p = profiles[input.service]
  return {
    slug: input.slug,
    kind: "pillar",
    primaryKeyword: input.primaryKeyword,
    service: input.serviceType ?? p.service,
    location: input.location ?? "Bangalore",
    areaServed: input.areaServed ?? "Bengaluru",
    breadcrumbLabel: input.breadcrumbLabel,
    title: input.title,
    description: input.description,
    h1: input.h1,
    heroBadge: input.badge,
    heroSubtitle: input.subtitle,
    ...images[input.image],
    introHeading: input.introHeading,
    intro: input.intro,
    localContext: input.context,
    details: input.details,
    highlightsHeading: p.highlightsHeading,
    highlights: input.highlights ?? p.highlights,
    process: input.process ?? p.process,
    trustHeading: input.trustHeading,
    faqHeading: input.faqHeading,
    faqs: input.faqs,
    related: [...input.related, { label: "All areas we serve", href: "/areas-we-serve" }],
    enquiryCardHeading: input.enquiryCard,
    enquiryMessage: input.enquiry,
    closingHeading: input.closing,
  }
}
