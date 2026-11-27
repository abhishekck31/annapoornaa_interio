/**
 * Locality pages, second November 2026 batch. Same rules as localities.ts:
 * local copy in general terms, no builders, projects, distances or prices.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"

export const localInputs2: LocalInput[] = [
  // -------------------------------------------------------------------------
  // Interior designers — East Bangalore
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "Varthur",
    key: "varthur",
    badge: "Serving Varthur, Gunjur and Balagere",
    image: "villaRoom",
    pitch: "interiors for new apartments and villas around Varthur, Gunjur and Balagere — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Varthur's new apartments and villa communities — designed in 3D and fitted by one accountable team.",
    intro:
      "Varthur and the roads towards Gunjur, Balagere and Sarjapur have filled up with new apartment towers and villa communities in recent years. Most of our enquiries from here are for newly handed-over homes that need everything, from the kitchen to the last curtain rod.",
    context: {
      heading: "New communities, new-home interiors",
      body: [
        "New homes come with the builder's points for plumbing, electrical and AC already fixed. We map them on the first visit and design around them, changing only what is worth changing, which keeps cost and time under control.",
        "The roads around Varthur can be slow, so we batch material deliveries and keep most of the carpentry in the factory. That means fewer trips, less noise in the community, and a shorter time before you can move in.",
      ],
    },
    faqs: [
      {
        question: "Do you take up villa interiors in Varthur and Gunjur?",
        answer:
          "Yes. We design complete villa interiors here — kitchens, wardrobes, staircases, living areas and lighting — as one project with one palette across the house.",
      },
      {
        question: "Can you inspect our flat at handover before starting?",
        answer:
          "Yes. We walk the home with you, note hollow tiles, damp patches and electrical faults, and give you a list to raise with the builder before our work covers anything up.",
      },
    ],
    related: [
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Hoodi",
    key: "hoodi",
    badge: "Serving Hoodi, Mahadevapura and ITPL Road",
    image: "livingTv",
    pitch: "interiors for apartments near ITPL and the metro — complete home design, modular kitchens and wardrobes.",
    subtitle:
      "Apartment interiors in Hoodi — efficient designs for busy owners, with updates you can follow from work.",
    intro:
      "Hoodi sits between Mahadevapura and Whitefield, close to the ITPL tech parks and on the metro line. Its homes are mostly apartments, from mid-sized buildings to large gated communities, and most owners work long hours in the tech corridor nearby.",
    context: {
      heading: "Interiors without taking time off work",
      body: [
        "We keep your involvement focused on decisions, not logistics. Measurements happen at the flat, designs are reviewed online or on a weekend visit, and material samples come to you. During the work, your site supervisor sends photo updates on WhatsApp.",
        "In compact apartments we plan storage hard: full-height wardrobes with lofts, a tall kitchen pantry, an entrance unit for shoes and keys, and a work-from-home corner where the floor plan allows.",
      ],
    },
    faqs: [
      {
        question: "Can we review designs on a video call?",
        answer:
          "Yes. We share layouts and 3D views online and walk you through them on a call. Most Hoodi clients only meet us at the flat and on a weekend visit for samples.",
      },
      {
        question: "Do you also work in Mahadevapura and Brookefield?",
        answer:
          "Yes. We take up projects across Hoodi, Mahadevapura, Brookefield, Whitefield and KR Puram.",
      },
    ],
    related: [
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
    ],
  },
  {
    service: "interior",
    place: "Brookefield",
    key: "brookefield",
    badge: "Serving Brookefield and Kundalahalli",
    image: "partition",
    pitch: "interiors for apartments and independent houses in Brookefield and Kundalahalli — kitchens, wardrobes and refurbishment.",
    subtitle:
      "Interiors for Brookefield homes — new flats and established houses, designed and delivered by one team.",
    intro:
      "Brookefield is one of the more established parts of the Whitefield belt, with independent houses and apartment buildings that have been around for a while, alongside newer projects. Interior work here is a mix of complete fit-outs for new owners and upgrades for homes that have been lived in for years.",
    context: {
      heading: "Upgrading an established home",
      body: [
        "Older apartments and houses here often need more than new carpentry: kitchens with tired plumbing, wardrobes swollen at the base, and lighting that has not kept up. We survey all of it first, then design the new interiors so they last.",
        "For owners upgrading while living in the home, we phase the work room by room and keep the kitchen usable for as long as possible.",
      ],
    },
    faqs: [
      {
        question: "Can you update our home while we live in it?",
        answer:
          "Yes. We phase the work, keep noisy jobs to agreed hours, cover finished areas, and clean up daily. Factory-made units shorten the time spent working inside your home.",
      },
      {
        question: "Do you do only kitchen and wardrobe upgrades?",
        answer:
          "Yes. Many clients start with just the kitchen or wardrobes. We quote each part separately so you can decide what to do now and what to leave for later.",
      },
    ],
    related: [
      { label: "Interior Designers in Hoodi", href: "/interior-designers-in-hoodi" },
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "Home Renovation in Whitefield", href: "/home-renovation-in-whitefield" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Kadugodi",
    key: "kadugodi",
    badge: "Serving Kadugodi and East Whitefield",
    image: "livingMarble",
    pitch: "interiors for new apartments and houses near the Whitefield metro terminus — kitchens, wardrobes and full homes.",
    subtitle:
      "Interiors for Kadugodi apartments and houses — practical, durable, and delivered on a dated schedule.",
    intro:
      "Kadugodi, at the eastern end of Whitefield, has grown around its older village core into an area of new apartment projects and independent houses, helped by the metro reaching Whitefield. Interior briefs here are mostly for newly bought flats and newly built houses.",
    context: {
      heading: "Planning around a new home",
      body: [
        "If you are still waiting for handover, we can start the design from the builder's drawings and confirm measurements once you have the keys. That saves weeks and gets you moving in sooner.",
        "For newly built independent houses, involving us before the electrical and plumbing points are final means switches, AC points and kitchen plumbing land where the interiors need them.",
      ],
    },
    faqs: [
      {
        question: "Can design start before we get the keys?",
        answer:
          "Yes. We work from the builder's floor plan and electrical layout, then measure the actual flat before anything goes into production.",
      },
      {
        question: "Do you also do interiors for independent houses in Kadugodi?",
        answer:
          "Yes. We design complete interiors for independent houses, and can also handle construction if you are still building.",
      },
    ],
    related: [
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Interior Designers in Hoodi", href: "/interior-designers-in-hoodi" },
      { label: "Interior Designers in Varthur", href: "/interior-designers-in-varthur" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Horamavu",
    key: "horamavu",
    badge: "Serving Horamavu, Hennur and Kalkere",
    image: "kitchenParallel",
    pitch: "interiors for apartments and independent houses in Horamavu and Kalkere — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Horamavu homes — apartments and houses designed for daily family life, by one accountable team.",
    intro:
      "Horamavu, off the Outer Ring Road between Kalyan Nagar and KR Puram, grew quickly into a dense mix of apartment buildings and independent houses. Families here want interiors that are practical first: a kitchen that works hard, plenty of storage, and finishes that survive children.",
    context: {
      heading: "Interiors that survive daily life",
      body: [
        "We specify durable finishes where wear is highest: scratch-resistant laminates on kitchen and wardrobe shutters, moisture-resistant boards near water, and washable paint in children's rooms and corridors.",
        "Horamavu is a reasonable drive from our Yelahanka office through Hennur, which makes regular supervision practical through the busy stages of the work.",
      ],
    },
    faqs: [
      {
        question: "Which finishes are best for a home with young children?",
        answer:
          "Laminate shutters, rounded edges on low units, washable wall paint, and soft-close hardware all help. We also suggest child locks on low kitchen drawers and safe socket placement.",
      },
      {
        question: "Do you work in Kalkere and Ramamurthy Nagar too?",
        answer:
          "Yes. We take up projects across Horamavu, Kalkere, Ramamurthy Nagar, Banaswadi and Kalyan Nagar.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
    ],
  },
  {
    service: "interior",
    place: "CV Raman Nagar",
    key: "cv-raman-nagar",
    badge: "Serving CV Raman Nagar and Old Madras Road",
    image: "bedroom",
    pitch: "interiors for apartments and independent houses — modular kitchens, wardrobes, false ceilings and refurbishment.",
    subtitle:
      "Interiors for CV Raman Nagar homes — modern, practical and delivered by one team from design to handover.",
    intro:
      "CV Raman Nagar is a quiet, established part of East Bangalore with independent houses, older apartment buildings and newer projects towards Old Madras Road and the Baiyappanahalli metro. Many homes here have been lived in for years and are ready for a modern update.",
    context: {
      heading: "A modern update for a lived-in home",
      body: [
        "We start with what is behind the walls: wiring that may need replacing, damp that would ruin new wardrobes, and kitchen plumbing that has been patched over the years. Fixing those first is what makes new interiors last.",
        "Then we design for how you live now — more storage, better lighting, a kitchen with modern appliances and space for them — while reusing anything that is still sound.",
      ],
    },
    faqs: [
      {
        question: "Should we rewire before doing new interiors?",
        answer:
          "If the wiring is old or the house trips often, yes. It is much cheaper before new wardrobes, panels and ceilings go up. We check it on our first visit.",
      },
      {
        question: "Can you reuse our existing furniture?",
        answer:
          "Where it is sound and fits the new design, yes. We can refinish or modify existing pieces and design the new units around them.",
      },
    ],
    related: [
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Interior Designers in Old Airport Road", href: "/interior-designers-in-old-airport-road" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
    ],
  },
  {
    service: "interior",
    place: "Old Airport Road",
    key: "old-airport-road",
    badge: "Serving Old Airport Road, Domlur and HAL",
    image: "stoneWall",
    pitch: "interiors for apartments and homes along Old Airport Road, Domlur and HAL — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Old Airport Road apartments and homes — refined design, solid materials and one team to deliver it.",
    intro:
      "Old Airport Road runs from Domlur past HAL towards Marathahalli, with apartment complexes of every age and independent houses in the layouts on either side. Owners here often want a refined, modern look — and a team that can deliver it without endless follow-up.",
    context: {
      heading: "A finished look, properly executed",
      body: [
        "Feature walls, panelling, profile lighting and fluted surfaces look striking when they are detailed properly — joints aligned, lights hidden, switches where you need them. We design them with the electrical layout in hand and show you everything in 3D first.",
        "In older apartments along the road, we often combine new interiors with a lighting upgrade and a few targeted ceiling areas, which changes how the whole flat feels without a full ceiling.",
      ],
    },
    faqs: [
      {
        question: "Can you do profile lighting and fluted panels?",
        answer:
          "Yes. We design and install profile lights, fluted and textured panels, and concealed lighting, planned with the electrical layout so the finish is clean.",
      },
      {
        question: "Do you work in Domlur and HAL 2nd Stage?",
        answer:
          "Yes. We take up projects across Old Airport Road, Domlur, HAL, Indiranagar and Murugeshpalya.",
      },
    ],
    related: [
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "Interior Designers in CV Raman Nagar", href: "/interior-designers-in-cv-raman-nagar" },
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // Interior designers — Central and North
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "Frazer Town",
    key: "frazer-town",
    badge: "Serving Frazer Town, Cox Town and Richards Town",
    image: "partition",
    pitch: "interiors for older bungalows and newer apartments in Frazer Town, Cox Town and Richards Town.",
    subtitle:
      "Interiors for Frazer Town homes — modern comfort in older houses, and complete fit-outs for new apartments.",
    intro:
      "Frazer Town, Cox Town and Richards Town have some of Bangalore's older homes — bungalows with high ceilings and solid timber — alongside apartment buildings that have replaced many of them. We design for both: sensitive updates for older houses and complete interiors for new flats.",
    context: {
      heading: "Working with older houses",
      body: [
        "High ceilings, thick walls and old timber doors are worth keeping. We design wardrobes and storage that sit comfortably under a tall ceiling, restore timber where it is sound, and plan lighting that suits the rooms rather than fighting them.",
        "Older houses also need checks before new interiors go in — wiring, damp in thick walls, plumbing that has been patched. We look at all of it first and tell you honestly what needs fixing.",
      ],
    },
    faqs: [
      {
        question: "Can you restore our old wooden doors and windows?",
        answer:
          "Yes. Old solid timber can often be repaired, re-polished and re-hung, and we design new interiors to match.",
      },
      {
        question: "Do you also fit out new apartments here?",
        answer:
          "Yes. We do complete interiors for new apartments in Frazer Town and the surrounding areas, starting with a handover inspection.",
      },
    ],
    related: [
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "Interior Designers in RT Nagar", href: "/interior-designers-in-rt-nagar" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
      { label: "Interior Designers in Sadashivanagar", href: "/interior-designers-in-sadashivanagar" },
    ],
  },
  {
    service: "interior",
    place: "Sadashivanagar",
    key: "sadashivanagar",
    badge: "Serving Sadashivanagar and Dollars Colony",
    image: "villaRoom",
    pitch: "luxury interiors for bungalows and premium apartments — complete design, bespoke joinery and lighting.",
    subtitle:
      "Luxury interiors for Sadashivanagar bungalows and apartments — bespoke design, careful detailing and one accountable team.",
    intro:
      "Sadashivanagar and nearby Dollars Colony are among Bangalore's most established premium neighbourhoods, with large bungalows and high-end apartments. Interior projects here are about detail: bespoke joinery, natural stone, layered lighting and finishes that age well.",
    context: {
      heading: "Detail is the brief",
      body: [
        "In a premium home, the difference is in the details — how panels meet, where lights are hidden, how stone is book-matched, how a wardrobe shutter closes. We produce detailed drawings and samples for every key element and agree them with you before anything is made.",
        "Large homes also need a single design language. We agree a palette and finish level for the whole house first, then design each room within it.",
      ],
    },
    faqs: [
      {
        question: "Do you do bespoke joinery rather than standard modular units?",
        answer:
          "Yes. For premium homes we design custom joinery — wardrobes, panelling, bars, libraries and furniture — with detailed drawings and finish samples before production.",
      },
      {
        question: "Can you work with our architect or lighting consultant?",
        answer:
          "Yes. We regularly coordinate with architects and consultants, working from their drawings and handling execution on site.",
      },
    ],
    related: [
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Interior Designers in Mathikere", href: "/interior-designers-in-mathikere" },
    ],
  },
  {
    service: "interior",
    place: "Mathikere",
    key: "mathikere",
    badge: "Serving Mathikere, Gokula and New BEL Road",
    image: "kitchenU",
    pitch: "interiors for family homes, rental floors and apartments around Mathikere, Gokula and New BEL Road.",
    subtitle:
      "Interiors for Mathikere homes — your own floor, rental floors and apartments, each designed for how it will be used.",
    intro:
      "Mathikere, Gokula and the New BEL Road area are busy residential neighbourhoods with many independent houses — often with rental floors — and apartment buildings. We design both owners' homes and durable fit-outs for rental units.",
    context: {
      heading: "Your floor and the rental floors",
      body: [
        "For the floor you live on, we design around your family: a kitchen built for daily cooking, wardrobes with the right split of hanging and shelf space, and lighting that makes rooms feel larger.",
        "For rental floors, simple modular kitchens, laminate wardrobes and easy-to-maintain finishes hold up to tenant use. We quote them separately so each floor gets the budget it needs.",
      ],
    },
    faqs: [
      {
        question: "Can you do economical interiors for rental floors?",
        answer:
          "Yes. We recommend durable, low-maintenance finishes for rental units and quote them separately from your own home.",
      },
      {
        question: "Do you work in Yeshwanthpur and Sanjaynagar too?",
        answer:
          "Yes. We take up projects across Mathikere, Gokula, Sanjaynagar, Yeshwanthpur and New BEL Road.",
      },
    ],
    related: [
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Jalahalli",
    key: "jalahalli",
    badge: "Serving Jalahalli and Vidyaranyapura",
    image: "pooja",
    pitch: "interiors for independent houses and apartments in Jalahalli — kitchens, wardrobes, pooja units and refurbishment.",
    subtitle:
      "Interiors for Jalahalli homes — from a new kitchen in a family house to complete interiors for a new flat.",
    intro:
      "Jalahalli, in North-West Bangalore, is a settled area of independent houses — many built by families who have lived here for decades — and newer apartment buildings. It is close to Vidyaranyapura and within easy reach of our Yelahanka office.",
    context: {
      heading: "Upgrading family houses",
      body: [
        "Houses that have been extended over the years rarely have standard room sizes, so we measure each room and design units to fit instead of filling gaps with panels.",
        "Pooja rooms matter in most homes here, and we design them carefully — in wood, marble or both — with proper storage for pooja items and lighting that suits the space.",
      ],
    },
    faqs: [
      {
        question: "Can you design a traditional pooja unit?",
        answer:
          "Yes. We design pooja rooms and units in wood, marble or a combination, with details like bells, carved panels and concealed lighting.",
      },
      {
        question: "Do you also build houses or add floors in Jalahalli?",
        answer:
          "Yes. ACIPL handles construction too, including additional floors where the existing structure allows it.",
      },
    ],
    related: [
      { label: "Interior Designers in Vidyaranyapura", href: "/interior-designers-in-vidyaranyapura" },
      { label: "Interior Designers in Mathikere", href: "/interior-designers-in-mathikere" },
      { label: "Pooja Room Design in Bangalore", href: "/pooja-room-design-in-bangalore" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Kogilu",
    key: "kogilu",
    badge: NORTH,
    image: "livingTv",
    pitch: "interiors for new apartments and houses near Kogilu Cross and Bellahalli — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Kogilu's new apartments and houses — designed and supervised from our office minutes away.",
    intro:
      "Kogilu, just east of Yelahanka near the airport road, has grown fast with new apartment projects and independent houses in newer layouts. It is one of the closest areas to our Yelahanka New Town office, so supervision is easy.",
    context: {
      heading: "Close by, closely supervised",
      body: [
        "Because we are close, our supervisor can be on your site often — when the carpenter needs a decision, when the electrician is marking points, and for the final snag check. Decisions get made on site, not over the phone.",
        "For new homes, we start with a handover inspection and design around the builder's fixed points to keep costs and timelines sensible.",
      ],
    },
    faqs: [
      {
        question: "How quickly can you visit our site in Kogilu?",
        answer:
          "Kogilu is very close to our office, so site visits are usually easy to arrange. Call or WhatsApp us with a convenient time.",
      },
      {
        question: "Do you build houses in Kogilu as well?",
        answer:
          "Yes. We design and build independent houses here, and can do the interiors as part of the same project.",
      },
    ],
    related: [
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
      { label: "House Construction in Kogilu", href: "/house-construction-in-kogilu" },
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
      { label: "Interior Designers in North Bangalore", href: "/interior-designers-in-north-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // Interior designers — South and West
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "Begur",
    key: "begur",
    badge: "Serving Begur, Hongasandra and Bommanahalli",
    image: "kitchenParallel",
    pitch: "interiors for new apartments along Begur Road and Hongasandra — kitchens, wardrobes, TV units and ceilings.",
    subtitle:
      "Interiors for Begur apartments — practical storage, a kitchen that works, and a schedule you can plan around.",
    intro:
      "Begur Road and the neighbourhoods around it, between Bommanahalli and Electronic City, have filled with apartment projects popular with people working along Hosur Road. Most interior projects here are complete fit-outs for 2BHK and 3BHK flats.",
    context: {
      heading: "Making a new flat liveable, fast",
      body: [
        "We prioritise the kitchen and bedroom wardrobes in the schedule so the flat is liveable first, with decorative work following.",
        "Most units are made in the factory, which keeps the noisy work in the flat short and keeps the association and neighbours on side.",
      ],
    },
    faqs: [
      {
        question: "Which rooms should we do first if budget is limited?",
        answer:
          "The kitchen, wardrobes and electrical changes first — they are hardest to add later. TV units, feature walls and decorative ceilings can follow.",
      },
      {
        question: "Do you also work in Electronic City and Bommanahalli?",
        answer:
          "Yes. We take up projects across Begur, Bommanahalli, Hongasandra, Electronic City and HSR Layout.",
      },
    ],
    related: [
      { label: "Interior Designers in Bommanahalli", href: "/interior-designers-in-bommanahalli" },
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "Budget Interior Designers in Bangalore", href: "/budget-interior-designers-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Bommanahalli",
    key: "bommanahalli",
    badge: "Serving Bommanahalli and Hosur Road",
    image: "livingMarble",
    pitch: "interiors for apartments and independent houses along Hosur Road and Bommanahalli — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Bommanahalli homes — apartments and houses designed around your space and your budget.",
    intro:
      "Bommanahalli, on Hosur Road between HSR Layout and Electronic City, combines older independent houses with a large number of apartment buildings. Owners here range from families upgrading a long-time home to professionals furnishing a first flat.",
    context: {
      heading: "Designing to a budget, honestly",
      body: [
        "Every unit in our quote is priced separately, so you can see exactly what each choice costs. If the total is above your budget, we show you where to save — a finish, an accessory, a room for later — without compromising on the parts that matter.",
        "For older houses, we check wiring, damp and plumbing first, so the new interiors are not built on old problems.",
      ],
    },
    faqs: [
      {
        question: "Can you work within a fixed budget?",
        answer:
          "Yes. Tell us your budget at the start. We design to it and show you the itemised cost, with options to adjust scope or finishes if needed.",
      },
      {
        question: "Do you work in HSR Layout and Begur too?",
        answer:
          "Yes. We take up projects across Bommanahalli, HSR Layout, Begur, Hongasandra and Electronic City.",
      },
    ],
    related: [
      { label: "Interior Designers in Begur", href: "/interior-designers-in-begur" },
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
      { label: "Interior Designers in BTM Layout", href: "/interior-designers-in-btm-layout" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
    ],
  },
  {
    service: "interior",
    place: "Uttarahalli",
    key: "uttarahalli",
    badge: "Serving Uttarahalli and Subramanyapura",
    image: "pooja",
    pitch: "interiors for independent houses and apartments in Uttarahalli and Subramanyapura — kitchens, wardrobes, pooja units.",
    subtitle:
      "Interiors for Uttarahalli homes — family houses and apartments, designed in 3D and built by one team.",
    intro:
      "Uttarahalli and Subramanyapura, in South-West Bangalore, have many independent houses in residential layouts and a growing number of apartment buildings. A lot of our enquiries are from families who have just built a house or bought a flat and need complete interiors.",
    context: {
      heading: "Interiors for a newly built house",
      body: [
        "If your house is still under construction, bring us in before the electrical and plumbing points are fixed. Small changes at that stage — moving a switch, adding a point behind the TV — save rework later.",
        "We design the whole house as one, with a consistent palette across floors, and storage planned for every room including the staircase and utility areas.",
      ],
    },
    faqs: [
      {
        question: "When should we involve an interior designer while building?",
        answer:
          "Before electrical and plumbing points are finalised and before plastering is complete, so the interiors and services line up.",
      },
      {
        question: "Do you work in Kanakapura Road and Banashankari too?",
        answer:
          "Yes. We take up projects across Uttarahalli, Subramanyapura, Banashankari, Kanakapura Road and RR Nagar.",
      },
    ],
    related: [
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Interior Designers in Kanakapura Road", href: "/interior-designers-in-kanakapura-road" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Nagarbhavi",
    key: "nagarbhavi",
    badge: "Serving Nagarbhavi and Chandra Layout",
    image: "stoneWall",
    pitch: "interiors for independent houses and apartments in Nagarbhavi and Chandra Layout — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Nagarbhavi homes — modern design for family houses and apartments, delivered by one team.",
    intro:
      "Nagarbhavi is a well-established West Bangalore area of planned layouts, with many independent houses and a growing number of apartments. Homeowners here often want a modern, finished look — feature walls, layered lighting, a statement living room — on top of practical storage.",
    context: {
      heading: "Modern design for independent houses",
      body: [
        "Independent houses give more freedom than apartments: you can open up the kitchen, add a staircase feature, or redesign the entrance. We check what is structural before suggesting changes, and design the electrical layout alongside the interiors.",
        "Many owners have rental floors too. We design and quote those separately, with durable finishes suited to tenants.",
      ],
    },
    faqs: [
      {
        question: "Can you design a feature wall for our staircase?",
        answer:
          "Yes. Staircase walls suit textured panels, cladding, wallpaper or a gallery wall with lighting. We show the design in 3D before starting.",
      },
      {
        question: "Do you work in Vijayanagar and Basaveshwaranagar too?",
        answer:
          "Yes. We take up projects across Nagarbhavi, Chandra Layout, Vijayanagar, Basaveshwaranagar and RR Nagar.",
      },
    ],
    related: [
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "Interior Designers in West Bangalore", href: "/interior-designers-in-west-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Basaveshwaranagar",
    key: "basaveshwaranagar",
    badge: "Serving Basaveshwaranagar and Kamakshipalya",
    image: "partition",
    pitch: "interiors and refurbishment for established family houses and apartments — kitchens, wardrobes, ceilings.",
    subtitle:
      "Interiors for Basaveshwaranagar homes — refreshing established houses and fitting out new flats.",
    intro:
      "Basaveshwaranagar is one of West Bangalore's established residential areas, with independent houses that families have lived in for years and apartment buildings of various ages. Much of our work here is refreshing homes that are structurally sound but need modern kitchens, storage and lighting.",
    context: {
      heading: "Refreshing a home you love",
      body: [
        "We plan the work room by room so you can keep living at home, keep noisy jobs to agreed hours, and clean up every day.",
        "Old cement kitchen platforms, built-in cupboards and wooden lofts can often be reused or refaced rather than demolished, which saves money and mess. We tell you honestly what is worth keeping.",
      ],
    },
    faqs: [
      {
        question: "Can you reface old built-in cupboards instead of replacing them?",
        answer:
          "If the structure is sound, yes. New shutters, handles and internal fittings can transform old cupboards at a fraction of the cost of new ones.",
      },
      {
        question: "Can we stay at home during the work?",
        answer:
          "Yes, for most projects. We phase the work, protect finished rooms, and keep at least the kitchen or a bathroom usable.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "Home Renovation in Rajajinagar", href: "/home-renovation-in-rajajinagar" },
    ],
  },
  {
    service: "interior",
    place: "Kengeri",
    key: "kengeri",
    badge: "Serving Kengeri and Kengeri Satellite Town",
    image: "livingTv",
    pitch: "interiors for new apartments and independent houses in Kengeri and Kengeri Satellite Town near the metro.",
    subtitle:
      "Interiors for Kengeri homes — new apartments and houses designed in 3D and delivered by one team.",
    intro:
      "Kengeri and Kengeri Satellite Town, on Mysore Road at the western edge of the city, have grown with new apartment projects and independent houses, helped by the metro extension. Most interior briefs here are for new homes that need complete interiors.",
    context: {
      heading: "New homes on the western edge",
      body: [
        "For new apartments, we start with a handover inspection, then design around the builder's fixed points. For new houses, we prefer to get involved before the final electrical and plumbing points are set.",
        "Kengeri is on the far side of the city from our office, so we plan site visits, deliveries and supervision in advance and keep you updated with regular photo reports.",
      ],
    },
    faqs: [
      {
        question: "Kengeri is far from Yelahanka. Do you still take projects here?",
        answer:
          "Yes. We serve all of Bangalore. We plan visits and deliveries in advance and give you the same free site visit and itemised quote.",
      },
      {
        question: "Do you also build houses in Kengeri?",
        answer:
          "Yes. We design and build independent houses in Kengeri and can deliver the interiors in the same project.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "Interior Designers in West Bangalore", href: "/interior-designers-in-west-bangalore" },
    ],
  },

  // -------------------------------------------------------------------------
  // Modular kitchens
  // -------------------------------------------------------------------------
  {
    service: "kitchen",
    place: "Koramangala",
    key: "koramangala",
    badge: "Serving all blocks of Koramangala",
    image: "kitchenU",
    pitch: "modular kitchens for apartments, builder floors and independent houses — open kitchens, islands and remodels.",
    subtitle:
      "Modular kitchens for Koramangala homes — open-plan, island or classic, designed around how you cook.",
    intro:
      "Koramangala's homes range from independent houses and builder floors to apartments of every age, and its kitchens range just as widely — from compact closed kitchens to open-plan spaces with an island. We design each for the space and for the way you cook.",
    context: {
      heading: "Open kitchens done properly",
      body: [
        "An open kitchen is on display, so it needs more closed storage, a chimney strong enough to keep smells out of the living area, and finishes that look good from the sofa. We plan all of it in the design, not as fixes afterwards.",
        "In older houses, we often remodel the whole kitchen — platform, plumbing, tiles and wiring — along with the new units.",
      ],
    },
    faqs: [
      {
        question: "Can you add an island to our kitchen?",
        answer:
          "If there is enough clearance on all sides, yes. We check this on site. Where an island does not fit, a peninsula or breakfast counter often works just as well.",
      },
      {
        question: "Do you do complete home interiors in Koramangala too?",
        answer:
          "Yes. We do complete home interiors here as well — wardrobes, living areas, ceilings and lighting.",
      },
    ],
    related: [
      { label: "Home Interior Design in Koramangala", href: "/home-interior-design-in-koramangala" },
      { label: "Home Renovation in Koramangala", href: "/home-renovation-in-koramangala" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
      { label: "Modular Kitchen in Indiranagar", href: "/modular-kitchen-in-indiranagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Indiranagar",
    key: "indiranagar",
    badge: "Serving Indiranagar and HAL 2nd Stage",
    image: "kitchenParallel",
    pitch: "modular kitchens and kitchen remodels for older houses and apartments — designed on site, installed in days.",
    subtitle:
      "Modular kitchens for Indiranagar homes — a modern kitchen in an older house, planned around what is already there.",
    intro:
      "Many Indiranagar homes are older independent houses and early apartment buildings with kitchens that pre-date modular units. Replacing them is often the single biggest improvement an owner can make — and it needs planning around the existing structure.",
    context: {
      heading: "Remodelling an older kitchen",
      body: [
        "We check the platform, the plumbing and the wiring on the first visit and tell you what can stay and what should go. Older kitchens often need dedicated power points for modern appliances and a new route for the chimney duct.",
        "Busy streets and tight parking mean we plan deliveries carefully. Units are made in the factory, so the time your kitchen is out of use is kept short.",
      ],
    },
    faqs: [
      {
        question: "Our kitchen has no chimney duct. Can one be added?",
        answer:
          "Usually, yes — through an external wall or a window. We plan the shortest, straightest route so the chimney works well.",
      },
      {
        question: "Can you also renovate the rest of the house?",
        answer:
          "Yes. We renovate bathrooms, flooring, wiring and interiors as well, under one contract if you want.",
      },
    ],
    related: [
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
      { label: "Modular Kitchen in Koramangala", href: "/modular-kitchen-in-koramangala" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Jayanagar",
    key: "jayanagar",
    badge: "Serving all blocks of Jayanagar",
    image: "kitchenU",
    pitch: "modular kitchens for independent houses and apartments — remodels of older kitchens and new fit-outs.",
    subtitle:
      "Modular kitchens for Jayanagar homes — built for serious daily cooking, with storage for everything.",
    intro:
      "Jayanagar's homes are mostly established independent houses and apartments, and their kitchens work hard — daily cooking, festivals, visiting family. A modular kitchen here needs deep storage, a strong chimney and a layout that keeps everything within reach.",
    context: {
      heading: "Built for daily cooking",
      body: [
        "We plan deep drawers for heavy vessels, pull-outs for masalas and dry goods near the hob, a tall unit for provisions, and space for a grinder and other appliances with dedicated power points.",
        "Many Jayanagar kitchens have a separate utility or wash area. We design storage for it too, so the main kitchen stays clear.",
      ],
    },
    faqs: [
      {
        question: "Do you design kitchens with a separate wash area?",
        answer:
          "Yes. We plan storage, plumbing and drainage for the utility or wash area as part of the kitchen design.",
      },
      {
        question: "Can you keep our existing granite platform?",
        answer:
          "If it is sound, level and at a comfortable height, yes. Otherwise we recommend replacing it and show you both costs.",
      },
    ],
    related: [
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "Home Renovation in Jayanagar", href: "/home-renovation-in-jayanagar" },
      { label: "Modular Kitchen in Banashankari", href: "/modular-kitchen-in-banashankari" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Banashankari",
    key: "banashankari",
    badge: "Serving all stages of Banashankari",
    image: "kitchenParallel",
    pitch: "modular kitchens for independent houses and apartments across Banashankari — new kitchens and remodels.",
    subtitle:
      "Modular kitchens for Banashankari homes — measured on site, made off site and installed with minimum disruption.",
    intro:
      "Banashankari is a large South Bangalore area of independent houses and apartments built over several decades. Kitchen projects here range from remodelling a thirty-year-old kitchen to fitting out a newly built house or a new flat.",
    context: {
      heading: "Old kitchens, new kitchens",
      body: [
        "For older kitchens, we assess the platform, plumbing and wiring before designing, and include any civil work in the quote. For new houses, we prefer to plan the kitchen before plastering so points land in the right places.",
        "In both cases, cabinets are made in the factory so installation is quick and clean.",
      ],
    },
    faqs: [
      {
        question: "How long does it take to install a modular kitchen?",
        answer:
          "Installation itself is quick because cabinets arrive ready-made. Any civil, plumbing or tiling work comes before it. You get a dated schedule before we start.",
      },
      {
        question: "Do you do kitchens for new houses still under construction?",
        answer:
          "Yes, and it is the best time. We plan the kitchen before plastering so plumbing and electrical points match the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
      { label: "Modular Kitchen in Jayanagar", href: "/modular-kitchen-in-jayanagar" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Bellandur",
    key: "bellandur",
    badge: "Serving Bellandur and the ORR tech corridor",
    image: "kitchenU",
    pitch: "modular kitchens for high-rise apartments near the ORR tech parks — designed around your builder's fixed points.",
    subtitle:
      "Modular kitchens for Bellandur apartments — compact layouts, maximum storage and quick, clean installation.",
    intro:
      "Bellandur's apartment kitchens are typically compact L-shaped or parallel layouts with a small utility. New owners often get a bare platform from the builder; others want to replace a basic builder kitchen with something that actually works.",
    context: {
      heading: "More storage in a compact kitchen",
      body: [
        "Vertical storage makes the biggest difference: a tall pantry pull-out, a full-height loft, and a corner unit that uses space most kitchens waste. We also plan appliance garages so the counter stays clear.",
        "High-rise communities have strict work rules. We handle permits and lift bookings and install factory-made units quickly to keep noise and disruption low.",
      ],
    },
    faqs: [
      {
        question: "Can you replace a builder-supplied kitchen?",
        answer:
          "Yes. We remove the existing units, check plumbing and electrical points, and install a new kitchen designed for your needs. Sound parts like the countertop can sometimes be reused.",
      },
      {
        question: "Do you handle the community's work permits?",
        answer:
          "Yes. We arrange permits and lift bookings with the facility management and work within the permitted hours.",
      },
    ],
    related: [
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Modular Kitchen in Sarjapur Road", href: "/modular-kitchen-in-sarjapur-road" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
      { label: "Modular Kitchen in Marathahalli", href: "/modular-kitchen-in-marathahalli" },
    ],
  },
  {
    service: "kitchen",
    place: "Kalyan Nagar",
    key: "kalyan-nagar",
    badge: "Serving Kalyan Nagar, HRBR and HBR Layout",
    image: "kitchenParallel",
    pitch: "modular kitchens for builder floors, independent houses and apartments in Kalyan Nagar, HRBR and HBR Layout.",
    subtitle:
      "Modular kitchens for Kalyan Nagar homes — modern design, hard-wearing materials, installed by our own team.",
    intro:
      "Kalyan Nagar and the HRBR and HBR layouts have many builder floors and independent houses with generous kitchens, alongside apartments. Owners here often want a modern kitchen with good appliances and a finish that matches the rest of the home.",
    context: {
      heading: "Kitchens with built-in appliances",
      body: [
        "Built-in ovens, microwaves, dishwashers and refrigerators need exact cut-outs, ventilation and dedicated power points. We design around the specific models you choose, so everything fits on installation day.",
        "In builder floors, a breakfast counter or peninsula often makes the kitchen more sociable. We plan power and lighting for it before the floor is finished.",
      ],
    },
    faqs: [
      {
        question: "Can you design for a built-in oven and dishwasher?",
        answer:
          "Yes. Tell us the models and we design the cabinets, cut-outs, ventilation and electrical points to suit them.",
      },
      {
        question: "Do you work in Hennur and Horamavu too?",
        answer:
          "Yes. We do modular kitchens across Kalyan Nagar, Hennur, Horamavu, Banaswadi and the surrounding areas.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Modular Kitchen in Hennur", href: "/modular-kitchen-in-hennur" },
      { label: "Interior Designers in Horamavu", href: "/interior-designers-in-horamavu" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Hennur",
    key: "hennur",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for new apartments and villas along Hennur Main Road and Hennur–Bagalur Road.",
    subtitle:
      "Modular kitchens for Hennur's new apartments and villas — designed on site, installed quickly, supervised closely.",
    intro:
      "Hennur's new apartments and villas usually come with a bare platform or a basic builder kitchen. Owners want a proper modular kitchen before moving in — and villa owners often want a show kitchen plus a separate wet kitchen.",
    context: {
      heading: "Show kitchen and wet kitchen",
      body: [
        "In villas, splitting the cooking between a clean show kitchen and a separate wet kitchen keeps the main space presentable. We plan storage, plumbing and appliances across both so neither is cramped.",
        "Hennur is close to our Yelahanka office, so measurement, design meetings and installation supervision are easy to arrange.",
      ],
    },
    faqs: [
      {
        question: "Do you design wet kitchens for villas?",
        answer:
          "Yes. We design the show kitchen and wet kitchen together, deciding which appliances and storage go where.",
      },
      {
        question: "Can the kitchen be ready before we move in?",
        answer:
          "Yes. If you contact us early, we can design from the builder's drawings and confirm measurements at handover, so the kitchen is installed before your move.",
      },
    ],
    related: [
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Modular Kitchen in Thanisandra", href: "/modular-kitchen-in-thanisandra" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
    ],
  },
  {
    service: "kitchen",
    place: "Thanisandra",
    key: "thanisandra",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "modular kitchens for 2BHK and 3BHK apartments along Thanisandra Main Road — compact layouts, smart storage.",
    subtitle:
      "Modular kitchens for Thanisandra apartments — smart storage in a compact space, installed with minimum fuss.",
    intro:
      "Most Thanisandra kitchens we design are in 2BHK and 3BHK apartments: compact L-shaped or parallel layouts with a small utility. The goal is always the same — more storage, more counter space, and a layout that makes cooking easier.",
    context: {
      heading: "Small kitchen, smart storage",
      body: [
        "Corner carousels or blind-corner units, tall pantry pull-outs, full-height lofts and wall-mounted rails turn a compact kitchen into a well-organised one.",
        "We are a short drive away in Yelahanka, so measurements and installation supervision are easy to fit around your work schedule.",
      ],
    },
    faqs: [
      {
        question: "Which layout is best for a small apartment kitchen?",
        answer:
          "Usually an L-shape or parallel layout, depending on where the doors and windows are. We decide on site after measuring and seeing how you use the space.",
      },
      {
        question: "Can you do the rest of the flat too?",
        answer:
          "Yes. We do complete interiors in Thanisandra — wardrobes, TV units, ceilings and lighting.",
      },
    ],
    related: [
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "Modular Kitchen in Hennur", href: "/modular-kitchen-in-hennur" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
    ],
  },
  {
    service: "kitchen",
    place: "Sahakar Nagar",
    key: "sahakar-nagar",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens and kitchen remodels for independent houses and apartments in Sahakar Nagar.",
    subtitle:
      "Modular kitchens for Sahakar Nagar homes — remodels of established kitchens and new fit-outs, close to our office.",
    intro:
      "Sahakar Nagar is a well-established North Bangalore neighbourhood of independent houses and apartments. Many kitchens here are fifteen or twenty years old — solid but dated — and owners want a modern modular kitchen without rebuilding more than necessary.",
    context: {
      heading: "Remodel only what needs it",
      body: [
        "If the platform and plumbing are sound, we can fit new units around them and save on civil work. If not, we explain why rebuilding is the better choice and show both costs.",
        "Sahakar Nagar is close to our Yelahanka office, so our supervisor can be there for the key steps — removal, plumbing, installation and the final check.",
      ],
    },
    faqs: [
      {
        question: "Can you fit a modular kitchen without breaking the platform?",
        answer:
          "Often, yes. If the platform is sound and at a comfortable height, we design units to fit below and above it.",
      },
      {
        question: "Do you do full-home interiors in Sahakar Nagar?",
        answer:
          "Yes. We do complete interiors here too, including wardrobes, living areas, ceilings and lighting.",
      },
    ],
    related: [
      { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
      { label: "Home Renovation in Sahakar Nagar", href: "/home-renovation-in-sahakar-nagar" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
    ],
  },
  {
    service: "kitchen",
    place: "Rajajinagar",
    key: "rajajinagar",
    badge: "Serving all blocks of Rajajinagar",
    image: "kitchenParallel",
    pitch: "modular kitchens for independent houses and apartments across Rajajinagar — new kitchens and remodels.",
    subtitle:
      "Modular kitchens for Rajajinagar homes — built for daily family cooking, installed cleanly by our own team.",
    intro:
      "Rajajinagar is a large, established West Bangalore area of independent houses and apartments, many with kitchens that have served a family for decades. A modern modular kitchen brings more storage, easier cleaning and space for today's appliances.",
    context: {
      heading: "A kitchen for a joint or extended family",
      body: [
        "Bigger households need bigger storage: deep drawers for large vessels, a provisions unit, and enough counter space for two people to cook at once. We design the layout around that.",
        "Older kitchens often need new plumbing and electrical points too. We include them in the same quote so there are no surprises.",
      ],
    },
    faqs: [
      {
        question: "Can two people cook comfortably in our kitchen?",
        answer:
          "We design for it — separating the sink, prep and cooking zones and keeping a clear walkway. Where space allows, a parallel or U-shaped layout works best.",
      },
      {
        question: "Do you work in Malleshwaram and Basaveshwaranagar too?",
        answer:
          "Yes. We do modular kitchens across Rajajinagar, Malleshwaram, Basaveshwaranagar and West Bangalore.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Home Renovation in Rajajinagar", href: "/home-renovation-in-rajajinagar" },
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },

  // -------------------------------------------------------------------------
  // House construction
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Sahakar Nagar",
    key: "sahakar-nagar",
    badge: NORTH,
    image: "houseFourStorey",
    pitch: "new houses, rebuilds and extra floors in Sahakar Nagar — drawings, approvals, construction and interiors.",
    subtitle:
      "Rebuild or extend your Sahakar Nagar home with a team close by — design, approvals and construction.",
    intro:
      "Sahakar Nagar is an established neighbourhood, so most construction here is rebuilding: replacing an older house with a modern one, often with rental floors, or adding a floor to an existing home. That work needs care around neighbours and existing structures.",
    context: {
      heading: "Rebuilding in an established area",
      body: [
        "We plan demolition, debris removal and protection of neighbouring walls carefully, and agree working hours that keep the street on our side. Shoring and careful excavation matter when the neighbour's house is right next to yours.",
        "If you are considering adding a floor instead, we first assess whether the existing foundation and columns can take it — and say so honestly if they cannot.",
      ],
    },
    faqs: [
      {
        question: "Should we rebuild or add a floor?",
        answer:
          "It depends on the existing structure's condition and design. We assess it and compare both options — cost, time and what you end up with — before you decide.",
      },
      {
        question: "Do you handle demolition?",
        answer:
          "Yes. Demolition, debris removal and site clearance are part of our rebuild projects, with neighbouring properties protected.",
      },
    ],
    related: [
      { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
      { label: "House Construction in Jakkur", href: "/house-construction-in-jakkur" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Kogilu",
    key: "kogilu",
    badge: NORTH,
    image: "villaRoof",
    pitch: "independent houses and villas on plots near Kogilu Cross — soil test, drawings, approvals and construction.",
    subtitle:
      "Build on your Kogilu plot with a design-and-build team just minutes away in Yelahanka.",
    intro:
      "Kogilu, next to Yelahanka on the airport side, has many residential plots in newer layouts. It is one of the closest areas to our office, which means our engineers can be on your site often — the single biggest factor in construction quality.",
    context: {
      heading: "Quality is decided on site",
      body: [
        "Whether the reinforcement matches the drawings before concrete is poured, whether slabs are cured properly, whether plumbing is pressure-tested before it is covered — these checks happen on site. Being close means they actually happen.",
        "On newer layouts, we also check road access, water and power for construction, and the layout's approval status before design begins.",
      ],
    },
    faqs: [
      {
        question: "How often will an engineer visit our site?",
        answer:
          "Our site engineer runs the work and is present for critical stages like reinforcement checks and concrete pours. Kogilu is close to our office, so visits are frequent.",
      },
      {
        question: "Do you do interiors after construction?",
        answer:
          "Yes. We can plan interiors alongside the construction drawings and deliver both as one project.",
      },
    ],
    related: [
      { label: "Interior Designers in Kogilu", href: "/interior-designers-in-kogilu" },
      { label: "Home Construction Services in Yelahanka", href: "/home-construction-services-in-yelahanka" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
    ],
  },
  {
    service: "construction",
    place: "Rajarajeshwari Nagar",
    key: "rajarajeshwari-nagar",
    badge: "Serving RR Nagar and Kengeri",
    image: "houseTimber",
    pitch: "independent houses and duplexes in RR Nagar layouts — drawings, approvals, construction and interiors.",
    subtitle:
      "Build your RR Nagar house with one team — design, approvals, construction and interiors, with materials named in the contract.",
    intro:
      "Rajarajeshwari Nagar has many planned residential layouts where owners are building independent houses and duplexes, often with a rental floor. Most want one firm to take the project from drawings to keys.",
    context: {
      heading: "Planning a house with rental income",
      body: [
        "A ground-floor home with rental units above is a common plan here. We design separate entrances, independent meters and efficient rental layouts, and size the structure for the floors you might add later.",
        "We give you a detailed estimate with materials named by brand and grade, and link payments to completed stages of work.",
      ],
    },
    faqs: [
      {
        question: "Can you design a house with rental floors?",
        answer:
          "Yes. We design the owner's floor and rental units together, with separate access and utilities.",
      },
      {
        question: "Do you build in Kengeri too?",
        answer:
          "Yes. We build across RR Nagar, Kengeri and the Mysore Road layouts.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Kengeri",
    key: "kengeri",
    badge: "Serving Kengeri and Mysore Road",
    image: "houseFourStorey",
    pitch: "independent houses on plots in Kengeri and the Mysore Road layouts — drawings, approvals and construction.",
    subtitle:
      "Build your Kengeri house with a design-and-build team — drawings, approvals, construction and handover.",
    intro:
      "Kengeri and the layouts along Mysore Road have many residential plots, and the metro extension has made the area more attractive to build in. Owners here are building family homes, duplexes and houses with rental floors.",
    context: {
      heading: "From plot to keys",
      body: [
        "We start with the plot: dimensions, setbacks, road width, permitted floors and a soil test. The design follows from what the plot allows and what you need.",
        "Kengeri is on the far side of the city from our office, so we plan the schedule, deliveries and engineer visits in advance, and send regular photo updates.",
      ],
    },
    faqs: [
      {
        question: "Do you build in Kengeri even though your office is in Yelahanka?",
        answer:
          "Yes. We build across Bangalore and plan supervision for the distance. The plot visit and estimate are free.",
      },
      {
        question: "What documents do we need to start?",
        answer:
          "Typically the sale deed, khata or equivalent property record and tax receipts. We review them before design and tell you what the plan sanction will need.",
      },
    ],
    related: [
      { label: "Interior Designers in Kengeri", href: "/interior-designers-in-kengeri" },
      { label: "House Construction in Rajarajeshwari Nagar", href: "/house-construction-in-rajarajeshwari-nagar" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Uttarahalli",
    key: "uttarahalli",
    badge: "Serving Uttarahalli and Subramanyapura",
    image: "houseTimber",
    pitch: "new houses and rebuilds in Uttarahalli and Subramanyapura — drawings, approvals, construction and interiors.",
    subtitle:
      "New houses and rebuilds in Uttarahalli — one team from soil test to handover.",
    intro:
      "Uttarahalli and Subramanyapura have a mix of empty plots in newer layouts and older houses ready to be rebuilt. We take on both, with drawings prepared in-house and approvals handled for you.",
    context: {
      heading: "Rebuild or build new",
      body: [
        "For rebuilds, we handle demolition and protect neighbouring walls. For new plots, we check access, water and power for construction first.",
        "Either way, materials are named in the contract and payments are linked to completed stages.",
      ],
    },
    faqs: [
      {
        question: "Can you rebuild our old house with rental floors?",
        answer:
          "Yes. We design the new house with your home and rental units, and handle demolition, approvals and construction.",
      },
      {
        question: "Do you also do the interiors?",
        answer:
          "Yes. ACIPL can deliver construction and interiors as one project.",
      },
    ],
    related: [
      { label: "Interior Designers in Uttarahalli", href: "/interior-designers-in-uttarahalli" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "JP Nagar",
    key: "jp-nagar",
    badge: "Serving all phases of JP Nagar",
    image: "houseFourStorey",
    pitch: "rebuilds, new houses and additional floors across JP Nagar — design, approvals and construction.",
    subtitle:
      "Rebuild or extend your JP Nagar home — drawings, approvals and construction by one accountable team.",
    intro:
      "JP Nagar's older independent houses are increasingly being rebuilt into modern homes, often with rental floors, while others are being extended upward. Both need careful planning in a dense, established neighbourhood.",
    context: {
      heading: "Building next to neighbours",
      body: [
        "In dense areas, excavation and foundations need care so neighbouring structures are not disturbed. We plan shoring where needed, manage debris and deliveries on narrow roads, and agree working hours.",
        "For additional floors, we assess the existing structure first and only recommend it if the foundation and columns can take the load.",
      ],
    },
    faqs: [
      {
        question: "Can our house take another floor?",
        answer:
          "It depends on the existing foundation and columns. We inspect the structure and any available drawings before advising.",
      },
      {
        question: "Do you handle approvals for a rebuild?",
        answer:
          "Yes. We prepare drawings and handle the plan-sanction paperwork, and tell you upfront which documents we need.",
      },
    ],
    related: [
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
    ],
  },
  {
    service: "construction",
    place: "Sarjapur",
    key: "sarjapur",
    badge: "Serving Sarjapur and Sarjapur Road",
    image: "villaPool",
    pitch: "independent houses and villas on plots around Sarjapur and Sarjapur Road — design, approvals, construction.",
    subtitle:
      "Build your house or villa around Sarjapur — design, approvals and construction by one team.",
    intro:
      "Beyond the gated apartment communities, Sarjapur and the villages along Sarjapur Road have many plotted layouts where owners are building independent houses and villas. Plots here are often larger, which opens up options like gardens, courtyards and pools.",
    context: {
      heading: "Building on a larger plot",
      body: [
        "A larger plot gives room for a courtyard, a garden, a pool or a separate outhouse. We design the house and the outdoor spaces together, with drainage and levels planned from the start.",
        "On developing layouts, we check access, water and power for construction and the layout's approval status before design begins.",
      ],
    },
    faqs: [
      {
        question: "Can you build a villa with a swimming pool?",
        answer:
          "Yes. We design and build villas with pools, planning the structure, waterproofing, filtration space and drainage as part of the project.",
      },
      {
        question: "Do you do interiors for the villa too?",
        answer:
          "Yes. We can plan interiors alongside construction and deliver both as one project.",
      },
    ],
    related: [
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "House Construction in Hoskote", href: "/house-construction-in-hoskote" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Hoskote",
    key: "hoskote",
    badge: "Serving Hoskote and Old Madras Road",
    image: "villaRoof",
    pitch: "independent houses and villas on plots in and around Hoskote — design, approvals and construction.",
    subtitle:
      "Build on your Hoskote plot — design, approvals, construction and interiors from one team.",
    intro:
      "Hoskote, east of the city on Old Madras Road, has seen extensive plotted development, and many owners are now ready to build. Projects range from compact family homes to larger villas on bigger plots.",
    context: {
      heading: "Building beyond city limits",
      body: [
        "Approval routes outside the city differ from those inside it. We check your plot's documents and location early and tell you which approvals apply.",
        "We also confirm practical basics — access for trucks, water and power for construction — and plan temporary supply where needed.",
      ],
    },
    faqs: [
      {
        question: "Which authority approves plans in Hoskote?",
        answer:
          "It depends on where your plot is and how the layout was approved. We review your documents and tell you which approval route applies before design.",
      },
      {
        question: "Can construction start without a water connection?",
        answer:
          "Yes. Construction water can be brought by tanker, and we include it in the plan. We also advise on a borewell or sump where appropriate.",
      },
    ],
    related: [
      { label: "House Construction in Sarjapur", href: "/house-construction-in-sarjapur" },
      { label: "Interior Designers in Hoskote", href: "/interior-designers-in-hoskote" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
  },

  // -------------------------------------------------------------------------
  // Home renovation
  // -------------------------------------------------------------------------
  {
    service: "renovation",
    place: "Koramangala",
    key: "koramangala",
    badge: "Serving all blocks of Koramangala",
    image: "bathroom",
    pitch: "renovation of independent houses, builder floors and apartments — kitchens, bathrooms, flooring and rewiring.",
    subtitle:
      "Renovate your Koramangala home — kitchens, bathrooms, flooring and wiring handled by one team under one quote.",
    intro:
      "Koramangala's independent houses and early apartment buildings are in great locations but many are showing their age: leaking bathrooms, dated kitchens, old flooring and wiring that cannot keep up. Renovating is usually far better value than moving.",
    context: {
      heading: "Renovating floor by floor",
      body: [
        "Many Koramangala houses have rented floors or home offices. We can renovate floor by floor so part of the house stays in use, with dust screens and separate access where possible.",
        "We fix causes, not just surfaces — bathroom waterproofing, terrace leaks and undersized wiring are sorted before new finishes go on.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate one floor while the others are occupied?",
        answer:
          "Yes. We phase the work floor by floor with dust control, agreed hours and daily clean-up.",
      },
      {
        question: "Do you do kitchen-only or bathroom-only renovations?",
        answer:
          "Yes. We take up single-room renovations as well as whole-home projects.",
      },
    ],
    related: [
      { label: "Home Interior Design in Koramangala", href: "/home-interior-design-in-koramangala" },
      { label: "Modular Kitchen in Koramangala", href: "/modular-kitchen-in-koramangala" },
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Jayanagar",
    key: "jayanagar",
    badge: "Serving all blocks of Jayanagar",
    image: "washroom",
    pitch: "renovation of established family homes — kitchens, bathrooms, flooring, rewiring, painting and interiors.",
    subtitle:
      "Renovate your Jayanagar home — modern kitchens and bathrooms, new flooring and wiring, by one team.",
    intro:
      "Jayanagar is full of well-built family homes that are now thirty or more years old. The structure is usually sound; what needs attention is everything else — bathrooms, kitchens, flooring, wiring and damp.",
    context: {
      heading: "Keeping the structure, renewing the rest",
      body: [
        "We survey the whole home first — damp, cracks, wiring, plumbing — and give you a clear scope with priorities, so you can decide what to do now and what can wait.",
        "Where old features are worth keeping, like solid timber doors or a well-laid floor, we restore them rather than replace them.",
      ],
    },
    faqs: [
      {
        question: "What should we renovate first?",
        answer:
          "Anything that causes damage — leaking bathrooms, terrace problems, old wiring — comes first. Kitchens, flooring and interiors follow.",
      },
      {
        question: "Can elderly family members stay at home during the work?",
        answer:
          "Often, yes, with careful phasing and dust control. For whole-home rewiring or flooring, a short stay elsewhere may be easier — we will advise honestly.",
      },
    ],
    related: [
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "Modular Kitchen in Jayanagar", href: "/modular-kitchen-in-jayanagar" },
      { label: "Interior Designers in Basavanagudi", href: "/interior-designers-in-basavanagudi" },
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
    ],
  },
  {
    service: "renovation",
    place: "Whitefield",
    key: "whitefield",
    badge: "Serving Whitefield and ITPL Road",
    image: "bathroom",
    pitch: "renovation of older apartments and villas — kitchens, bathrooms, flooring, waterproofing and interiors.",
    subtitle:
      "Renovate your Whitefield apartment or villa — leak-free bathrooms, new kitchens and fresh interiors.",
    intro:
      "Whitefield's first wave of apartments and villa communities are now well over a decade old. Bathrooms leak, kitchens look tired, wooden flooring wears out — and owners want an upgrade without moving.",
    context: {
      heading: "Renovating inside gated communities",
      body: [
        "We work within community rules on timing, lift use, debris and deposits, and handle approvals with the facility management.",
        "Bathroom waterproofing is the most common hidden problem in older apartments. We redo it properly, with a flood test, before new tiles go down.",
      ],
    },
    faqs: [
      {
        question: "Our bathroom is leaking into the flat below. Can you fix it?",
        answer:
          "Yes. We trace the leak, redo the plumbing and waterproofing, flood-test it, and then retile.",
      },
      {
        question: "Can you replace old wooden flooring?",
        answer:
          "Yes. We remove worn flooring and lay new vitrified tiles, laminate or engineered wood, checking door clearances and levels first.",
      },
    ],
    related: [
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Banashankari",
    key: "banashankari",
    badge: "Serving all stages of Banashankari",
    image: "washroom",
    pitch: "renovation of independent houses and apartments — kitchens, bathrooms, flooring, rewiring and painting.",
    subtitle:
      "Renovate your Banashankari home — one team for civil work, plumbing, electrical, carpentry and painting.",
    intro:
      "Banashankari has independent houses and apartments built over several decades. Renovation briefs range from a single bathroom to a full overhaul of a thirty-year-old house.",
    context: {
      heading: "One contract instead of five contractors",
      body: [
        "Renovations stall when the plumber, electrician, carpenter, tiler and painter are all separate. We handle all of them under one supervisor and one itemised quote.",
        "We sequence the work properly — services before surfaces — so nothing gets broken open again after it is finished.",
      ],
    },
    faqs: [
      {
        question: "Can you do the whole house in stages?",
        answer:
          "Yes. We plan the full scope and then phase it to suit your budget and how you are using the house.",
      },
      {
        question: "Do you also add floors?",
        answer:
          "Yes, if the structure allows. We assess the existing foundation and columns before recommending it.",
      },
    ],
    related: [
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Modular Kitchen in Banashankari", href: "/modular-kitchen-in-banashankari" },
      { label: "Home Renovation in Jayanagar", href: "/home-renovation-in-jayanagar" },
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Rajajinagar",
    key: "rajajinagar",
    badge: "Serving all blocks of Rajajinagar",
    image: "pooja",
    pitch: "renovation of family homes and rental floors — kitchens, bathrooms, flooring, rewiring and interiors.",
    subtitle:
      "Renovate your Rajajinagar home and rental floors — one team, one itemised quote.",
    intro:
      "Rajajinagar's independent houses often combine an owner's home with rental floors, many of them decades old. Renovating both together — with different finish levels for each — is one of the most common projects we take on here.",
    context: {
      heading: "Owner's floor and rental floors",
      body: [
        "For your own floor, we focus on comfort and finish. For rental floors, we focus on durability and quick turnaround, so the units are back on the market fast.",
        "Old wiring and plumbing are often shared between floors. We plan replacement across the building so each floor is safe and independently metered where needed.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate a rental floor between tenants quickly?",
        answer:
          "Yes. We plan the scope in advance so work starts as soon as the floor is vacant, and we keep the finishes practical.",
      },
      {
        question: "Do you rewire whole buildings?",
        answer:
          "Yes. We rewire floor by floor or the whole building, with new distribution boards and protection for each unit.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Modular Kitchen in Rajajinagar", href: "/modular-kitchen-in-rajajinagar" },
      { label: "Home Renovation in Malleshwaram", href: "/home-renovation-in-malleshwaram" },
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
    ],
  },
  {
    service: "renovation",
    place: "Sahakar Nagar",
    key: "sahakar-nagar",
    badge: NORTH,
    image: "washroom",
    pitch: "renovation of independent houses and apartments — bathrooms, kitchens, flooring, rewiring and painting.",
    subtitle:
      "Renovate your Sahakar Nagar home with a team minutes away — bathrooms, kitchens, flooring and wiring.",
    intro:
      "Sahakar Nagar's independent houses and apartments are mostly well built but many are twenty or more years old. Bathrooms, kitchens, flooring and wiring are the usual candidates for renovation.",
    context: {
      heading: "Close supervision through the messy stages",
      body: [
        "Renovation decisions come up most during demolition and services work, when hidden problems surface. Being close to our Yelahanka office means our supervisor is there to decide on the spot.",
        "We fix root causes — waterproofing, leaks, overloaded wiring — before putting new finishes on top.",
      ],
    },
    faqs: [
      {
        question: "How do you handle surprises found during demolition?",
        answer:
          "We show you what we found, explain the options and cost, and agree in writing before doing any extra work.",
      },
      {
        question: "Do you also do interiors after the renovation?",
        answer:
          "Yes. We can combine renovation with new kitchens, wardrobes and ceilings under one contract.",
      },
    ],
    related: [
      { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
      { label: "Modular Kitchen in Sahakar Nagar", href: "/modular-kitchen-in-sahakar-nagar" },
      { label: "Home Renovation in Hebbal", href: "/home-renovation-in-hebbal" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
]
