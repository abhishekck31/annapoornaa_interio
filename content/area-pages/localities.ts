/**
 * Locality pages, November 2026 batch. Each entry carries only what is specific
 * to that area; the service profile in build.ts supplies the rest.
 *
 * Local copy describes the kind of homes and the practical constraints of each
 * area in general terms. It deliberately names no builders, projects, distances
 * or prices.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"

export const localInputs: LocalInput[] = [
  // -------------------------------------------------------------------------
  // Interior designers — North Bangalore
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "Hennur",
    key: "hennur",
    badge: NORTH,
    image: "livingTv",
    pitch: "interiors for new apartments and villas off Hennur Main Road and Hennur–Bagalur Road — kitchens, wardrobes, ceilings.",
    subtitle:
      "Complete interiors for Hennur's new apartments and villas — designed in 3D, made off site, and fitted by one accountable team.",
    intro:
      "Hennur has grown fast. Along Hennur Main Road and out towards Bagalur, most of the homes we are asked to design are recently completed apartments and villas in gated communities, bought by families who want to move in soon and do not want to manage five different contractors to get there.",
    context: {
      heading: "Designing for Hennur's newer homes",
      body: [
        "New homes here usually arrive with the builder's flooring, bathroom fittings and electrical points already in place. A good design works with those fixed points instead of fighting them, which keeps the cost down and the timeline short. We map every point on our first visit and plan the kitchen, wardrobes and TV wall around them.",
        "Villas in the newer layouts towards Bagalur often have double-height living rooms, staircases and larger bedrooms. Those spaces need more thought — lighting for a tall ceiling, a feature wall that does not look lost, storage under the stairs — and we design them as part of the same project.",
      ],
    },
    faqs: [
      {
        question: "Do you take up interior projects in villas towards Bagalur?",
        answer:
          "Yes. Hennur, Kothanur, the Hennur–Bagalur Road layouts and Bagalur itself are all close to our Yelahanka office, so site visits and supervision are straightforward.",
      },
      {
        question: "Our villa has a double-height living room. How do you light and finish it?",
        answer:
          "We usually combine a statement light fitting or cove lighting at the upper level with wall washers or spotlights lower down, and use a feature wall or panelling to give the tall wall a focus. All of it is shown in the 3D design before work starts.",
      },
    ],
    related: [
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
    ],
  },
  {
    service: "interior",
    place: "Thanisandra",
    key: "thanisandra",
    badge: NORTH,
    image: "livingMarble",
    pitch: "interiors for 2BHK and 3BHK apartments along Thanisandra Main Road — modular kitchens, wardrobes and false ceilings.",
    subtitle:
      "Apartment interiors for Thanisandra — practical storage, a kitchen that works, and a clear schedule to your move-in date.",
    intro:
      "Thanisandra Main Road is lined with apartment projects, from large gated communities to smaller standalone buildings, plus independent houses in the layouts behind them. Most enquiries we get from Thanisandra are for 2BHK and 3BHK apartments: kitchen, wardrobes, a TV unit, some ceiling work, and storage everywhere it will fit.",
    context: {
      heading: "Getting the most out of a Thanisandra apartment",
      body: [
        "Apartment floor plans here are efficient, which means every wall counts. We look for the storage most designs miss — the loft above the entrance, the space beside the fridge, the bedroom corner that can take a study desk — and plan it into the first layout rather than adding it later.",
        "Many Thanisandra owners work in the Manyata and Hebbal tech areas and are short on time. You can review designs on a video call, approve materials from samples we bring to you, and follow the work through WhatsApp photo updates from your site supervisor.",
      ],
    },
    faqs: [
      {
        question: "Can we finalise the design without visiting your office?",
        answer:
          "Yes. We measure at your flat, share the layouts and 3D views online, discuss them on a call, and bring material samples to your home. Many of our Thanisandra clients only meet us at the flat.",
      },
      {
        question: "We also own a plot nearby. Do you build houses as well?",
        answer:
          "Yes. ACIPL is a design-and-build firm, so the same team can design and construct an independent house and do its interiors.",
      },
    ],
    related: [
      { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
    ],
  },
  {
    service: "interior",
    place: "Vidyaranyapura",
    key: "vidyaranyapura",
    badge: NORTH,
    image: "pooja",
    pitch: "interiors for independent houses and apartments — kitchens, wardrobes, pooja units and full-home refurbishment.",
    subtitle:
      "Interiors for Vidyaranyapura's independent houses and apartments, from a single kitchen to a complete home makeover.",
    intro:
      "Vidyaranyapura is a settled residential area of independent houses, many of them built in stages over the years, alongside newer apartment buildings. The interior work here is often a mix: a new kitchen and wardrobes for a family that has lived in the house for years, or full interiors for a newly built upper floor or a newly bought flat.",
    context: {
      heading: "Interiors for houses that have grown over time",
      body: [
        "Houses that have been extended floor by floor rarely have identical rooms or standard wall sizes. We measure each room on site and design units to fit, rather than forcing in standard sizes and filling the gaps with panels.",
        "We also check the basics before planning new interiors in an older house: dampness on walls that will get wardrobes, the age of the wiring behind the TV wall, and whether the kitchen platform is worth keeping. Fixing those first means the new interiors last.",
      ],
    },
    faqs: [
      {
        question: "Can you design a pooja room that follows our traditions?",
        answer:
          "Yes. We design pooja units and rooms to your preferences — orientation, materials like wood or marble, brass bells, lighting and storage for pooja items — and show you the design in 3D before making it.",
      },
      {
        question: "We are adding a floor to our house. Can you do the interiors for it?",
        answer:
          "Yes, and if you involve us during construction, we can plan electrical points, plumbing and ceiling heights to suit the interiors. ACIPL also handles construction, so we can take on both.",
      },
    ],
    related: [
      { label: "House Construction in Vidyaranyapura", href: "/house-construction-in-vidyaranyapura" },
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
      { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
  {
    service: "interior",
    place: "RT Nagar",
    key: "rt-nagar",
    badge: "Close to Hebbal, a quick drive from our office",
    image: "partition",
    pitch: "interiors and refurbishment for established family homes and apartments — kitchens, wardrobes, ceilings and storage.",
    subtitle:
      "Fresh interiors for RT Nagar's established homes — more storage, better light, and a kitchen built for how your family cooks.",
    intro:
      "RT Nagar is one of North Bangalore's established neighbourhoods: independent houses that families have lived in for decades, often with rented floors above, and apartment buildings of various ages. The typical brief is not a blank shell but a lived-in home that needs to work better.",
    context: {
      heading: "Refreshing a home your family already lives in",
      body: [
        "In a lived-in home we plan the work room by room, so the family can keep using the house. Noisy work is kept to agreed hours, finished rooms are covered, and the site is cleaned at the end of every day.",
        "Owners in RT Nagar often ask us to do two things at once: refresh their own floor and fit out a rental floor. Rental interiors need different choices — durable laminates, simple modular kitchens, wardrobes that tenants will not damage — and we price the two separately so you can see where the money goes.",
      ],
    },
    faqs: [
      {
        question: "Can you do simpler interiors for our rental floor?",
        answer:
          "Yes. For rental floors we recommend durable, easy-to-maintain finishes and a straightforward modular kitchen and wardrobes. We quote it separately from your own floor so you can decide on each independently.",
      },
      {
        question: "Our house is old. Should we rewire before doing interiors?",
        answer:
          "If the wiring is old or the house trips often, yes — it is far cheaper to rewire before new wardrobes, panelling and ceilings go up. We check the wiring on our first visit and tell you honestly whether it is needed.",
      },
    ],
    related: [
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "Interior Designers in Sahakar Nagar", href: "/interior-designers-in-sahakar-nagar" },
      { label: "Home Renovation in Hebbal", href: "/home-renovation-in-hebbal" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
    ],
  },
  {
    service: "interior",
    place: "Devanahalli",
    key: "devanahalli",
    badge: "North of Yelahanka, on our regular route",
    image: "villaRoom",
    pitch: "interiors for new villas and plotted-development homes near the airport — full-home design, kitchens, wardrobes, lighting.",
    subtitle:
      "Villa and new-home interiors around Devanahalli — complete design for larger homes, planned and fitted by one team.",
    intro:
      "Around Devanahalli and the airport corridor, many homes are new villas and independent houses in plotted developments and gated layouts. They tend to be larger than city apartments, with more bedrooms, bigger living spaces and often a garden or terrace — and they need interiors designed as a whole, not room by room.",
    context: {
      heading: "Interiors for larger homes",
      body: [
        "In a villa, consistency matters. We agree a material and colour palette for the whole house first, then design each room within it, so the kitchen, bedrooms, staircase and living areas feel like one home rather than a collection of separate projects.",
        "Because Devanahalli is beyond the city's core, coordination matters too. We plan deliveries in bulk, keep a supervisor on site through the key stages, and send regular photo updates so you do not need to drive out for every decision.",
      ],
    },
    faqs: [
      {
        question: "Do you also build villas in Devanahalli?",
        answer:
          "Yes. ACIPL builds houses and villas in and around Devanahalli as well as doing interiors, so you can have one team for both, with interiors planned while the house is being built.",
      },
      {
        question: "Can you plan interiors before our villa is handed over?",
        answer:
          "Yes. We can work from the builder's drawings to finalise the design and materials in advance, then measure the actual rooms on handover before anything goes into production.",
      },
    ],
    related: [
      { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
    ],
  },
  {
    service: "interior",
    place: "Yeshwanthpur",
    key: "yeshwanthpur",
    badge: "Serving North-West Bangalore",
    image: "bedroom",
    pitch: "interiors for apartments and family homes — modular kitchens, wardrobes, TV units, false ceilings and complete home design.",
    subtitle:
      "Complete interiors for Yeshwanthpur apartments and homes, with a design you approve in 3D and one team to deliver it.",
    intro:
      "Yeshwanthpur combines well-connected apartment complexes near Tumkur Road and the metro with older independent houses in the surrounding streets. We design for both: new apartments that need everything from scratch, and older homes that need a modern kitchen, better storage and a lighter feel.",
    context: {
      heading: "City-centre convenience, compact layouts",
      body: [
        "Apartments around Yeshwanthpur tend to have compact bedrooms and kitchens, so we lean on full-height wardrobes with lofts, sliding shutters where swing doors would block the room, and tall kitchen units that make up for a short counter.",
        "Many buildings here have association rules on working hours and lift use. We get the approvals and plan the schedule around them, so the work does not stall on a disagreement with the building's management.",
      ],
    },
    faqs: [
      {
        question: "Sliding or hinged wardrobes — which is better for a small bedroom?",
        answer:
          "Sliding shutters save the swing space in front of the wardrobe, which helps in compact bedrooms. Hinged shutters give full access to the inside and cost less. We will suggest the right choice for each room in your design.",
      },
      {
        question: "Do you work in Malleshwaram and Rajajinagar too?",
        answer:
          "Yes. We work across North-West Bangalore, including Malleshwaram, Rajajinagar, Mathikere and Jalahalli.",
      },
    ],
    related: [
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
    ],
  },
  {
    service: "interior",
    place: "Kalyan Nagar",
    key: "kalyan-nagar",
    badge: "Serving Kalyan Nagar, HRBR and HBR Layout",
    image: "stoneWall",
    pitch: "homes in HRBR and HBR Layout — kitchens, wardrobes, ceilings and feature walls.",
    subtitle:
      "Well-planned interiors for Kalyan Nagar homes — modern design, practical storage and one team from drawing to handover.",
    intro:
      "Kalyan Nagar, HRBR Layout and HBR Layout are established, well-kept residential areas with a mix of independent houses, builder floors and apartment buildings. Owners here often want a modern, finished look — feature walls, layered lighting, a statement TV wall — without losing practicality.",
    context: {
      heading: "A finished look that still works day to day",
      body: [
        "Feature walls, stone cladding and panelling look striking in a photo, but they also need to work with the switches, AC lines and furniture in the room. We design them with the electrical layout in hand, so the light switches land where you need them and the cables stay hidden.",
        "In builder floors and independent houses here, we often redesign the kitchen and living area together — opening a wall, adding a breakfast counter, or turning an awkward dining corner into usable storage.",
      ],
    },
    faqs: [
      {
        question: "Can you do stone cladding or textured feature walls?",
        answer:
          "Yes. We design and install feature walls in textured panels, stone-finish cladding, fluted panels, wallpaper or wood, with concealed lighting where it helps. You see the design in 3D before we start.",
      },
      {
        question: "Can we open up the kitchen into the living room?",
        answer:
          "Often, yes, but it depends on whether the wall is structural. We check that on site before suggesting it, and in apartments the association's rules also apply.",
      },
    ],
    related: [
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "False Ceiling Contractors in Bangalore", href: "/false-ceiling-contractors-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Banaswadi",
    key: "banaswadi",
    badge: "Serving Banaswadi and Kammanahalli",
    image: "kitchenParallel",
    pitch: "family homes, builder floors and flats in Banaswadi and Kammanahalli — kitchens and wardrobes.",
    subtitle:
      "Interiors for Banaswadi and Kammanahalli homes — practical, well-built and designed around your family.",
    intro:
      "Banaswadi and neighbouring Kammanahalli are lively, long-established areas with independent houses, builder floors and apartments of every age. The projects we see here range from a new kitchen in a twenty-year-old house to full interiors for a newly built floor that will be rented out.",
    context: {
      heading: "Older houses, new interiors",
      body: [
        "Older homes often have thick walls, irregular room sizes and kitchens with fixed cement platforms. We measure each room and design custom units to fit, and we tell you honestly whether to keep the existing kitchen platform or rebuild it.",
        "For floors you plan to rent out, we recommend hard-wearing finishes and simpler designs that keep their look under heavy use, and we price them separately from your own home.",
      ],
    },
    faqs: [
      {
        question: "Can you work with the existing cement kitchen platform?",
        answer:
          "If the platform is sound and at the right height, yes — we design base units to fit under it and wall units above. If it is cracked, too low or poorly placed, we will recommend rebuilding it and explain the cost difference.",
      },
      {
        question: "Do you work in Kammanahalli, Lingarajapuram and Frazer Town too?",
        answer:
          "Yes. We take up projects across Banaswadi, Kammanahalli, Lingarajapuram, Frazer Town and the surrounding areas.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
    ],
  },
  // -------------------------------------------------------------------------
  // Interior designers — East Bangalore
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "KR Puram",
    key: "kr-puram",
    badge: "Serving KR Puram, Ramamurthy Nagar and Old Madras Road",
    image: "livingTv",
    pitch: "interiors for new apartments and older homes around KR Puram, Ramamurthy Nagar and Old Madras Road.",
    subtitle:
      "Interiors for KR Puram homes — from newly bought flats near the metro to older houses due for a makeover.",
    intro:
      "KR Puram sits where Old Madras Road meets the Outer Ring Road, with a growing number of apartment projects alongside older independent houses in Ramamurthy Nagar and the surrounding layouts. Many owners here work in the Whitefield and ORR tech corridors and want interiors done efficiently, with clear updates.",
    context: {
      heading: "Efficient interiors for busy owners",
      body: [
        "We keep the number of visits you need to make low. Measurements and the first discussion happen at your home, designs are reviewed online, and material samples come to you. During the work, your site supervisor sends regular photo updates.",
        "For new flats we start with a handover inspection — checking tiles, damp patches and electrical points — so builder defects are fixed before our carpentry covers them.",
      ],
    },
    faqs: [
      {
        question: "Do you check the flat for builder defects before starting?",
        answer:
          "Yes. On our first visit we walk the flat with you and note hollow tiles, damp patches, faulty switches and drainage issues, so you can get the builder to fix them before interiors begin.",
      },
      {
        question: "Can meetings happen on weekends?",
        answer:
          "Yes. Site visits and design reviews can be scheduled on Saturdays, and design discussions can also happen on video calls at a time that suits you.",
      },
    ],
    related: [
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Marathahalli",
    key: "marathahalli",
    badge: "Serving Marathahalli and the Outer Ring Road",
    image: "kitchenU",
    pitch: "interiors for ORR apartments and independent houses — modular kitchens, wardrobes, TV units and false ceilings.",
    subtitle:
      "Interiors for Marathahalli apartments and homes — sharp design, solid materials and a schedule you can plan your move around.",
    intro:
      "Marathahalli is at the heart of the Outer Ring Road tech belt, with dense apartment development and older independent houses in the lanes behind the main road. Most enquiries here are from working professionals furnishing a newly bought flat or upgrading a home they have lived in for a few years.",
    context: {
      heading: "Apartment interiors along the ORR",
      body: [
        "Traffic on the ORR affects deliveries, so we plan material movement for off-peak hours and batch deliveries where we can. Most units are made in the factory, which keeps the number of days work happens inside your flat as low as possible.",
        "We design for how people here actually live: a work-from-home corner in the bedroom or living room, a kitchen that handles both quick weekday cooking and weekend meals, and storage that keeps a compact flat uncluttered.",
      ],
    },
    faqs: [
      {
        question: "Can you design a work-from-home setup in a small flat?",
        answer:
          "Yes. A wall-mounted desk with overhead storage, a study unit built into a wardrobe, or a corner of the living room with good lighting and power points — we will suggest what fits your floor plan.",
      },
      {
        question: "Do you also do only a modular kitchen?",
        answer:
          "Yes. Many Marathahalli clients start with just the kitchen. We do kitchen-only projects with the same design and quote process.",
      },
    ],
    related: [
      { label: "Modular Kitchen in Marathahalli", href: "/modular-kitchen-in-marathahalli" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Bellandur",
    key: "bellandur",
    badge: "Serving Bellandur and the ORR tech corridor",
    image: "bedroom",
    pitch: "interiors for high-rise apartments near the ORR tech parks — complete home design, kitchens, wardrobes, ceilings.",
    subtitle:
      "High-rise apartment interiors in Bellandur — planned around your building's rules and your move-in date.",
    intro:
      "Bellandur is almost entirely apartments: large gated communities and high-rise towers serving the tech parks on the Outer Ring Road and Sarjapur Road. Interior projects here are mostly newly bought or newly handed-over 2BHK and 3BHK flats, and the owners usually want a complete, ready-to-live-in home.",
    context: {
      heading: "Working inside large gated communities",
      body: [
        "High-rise communities have strict rules: work permits, fixed working hours, lift bookings for materials, and deposits against damage to common areas. We handle the paperwork with the facility management team and schedule around their rules from day one.",
        "Because most of our units are made off site, the noisy work inside the flat is limited. Installation of finished modules is quick and clean, which keeps neighbours — and the association — happy.",
      ],
    },
    faqs: [
      {
        question: "Our community only allows work on weekdays. Is that a problem?",
        answer:
          "No, it is common. We schedule cutting and drilling within the permitted hours and do quieter work like fixing and finishing around them. Factory-made units reduce the work needed inside the flat.",
      },
      {
        question: "Do you work in Sarjapur Road and HSR Layout too?",
        answer:
          "Yes. We take up projects across Bellandur, Sarjapur Road, HSR Layout, Kadubeesanahalli and the surrounding areas.",
      },
    ],
    related: [
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Sarjapur Road",
    key: "sarjapur-road",
    badge: "Serving Sarjapur Road, from Bellandur to Dommasandra",
    image: "villaRoom",
    pitch: "interiors for apartments and villas in gated communities along Sarjapur Road — complete home design to handover.",
    subtitle:
      "Apartment and villa interiors along Sarjapur Road — designed in 3D, built off site and installed by one accountable team.",
    intro:
      "Sarjapur Road has some of Bangalore's largest gated communities, from high-rise apartment towers near the ORR to villa projects further out towards Dommasandra and Sarjapur town. The interior work is correspondingly varied: compact 2BHKs, large 3BHK and 4BHK flats, and complete villas.",
    context: {
      heading: "Apartments near the city, villas further out",
      body: [
        "For apartments nearer the ORR end, the brief is usually efficiency — maximum storage, a hard-working kitchen and a calm, uncluttered look. For villas further out, it is about consistency across a larger home: one palette and level of finish carried through every floor.",
        "Further down Sarjapur Road, deliveries and supervision take more planning. We batch material deliveries, keep a supervisor on site for the key stages, and send photo updates so you are not driving out for every decision.",
      ],
    },
    faqs: [
      {
        question: "Do you do villa interiors on Sarjapur Road?",
        answer:
          "Yes. We design complete villa interiors — kitchens, wardrobes, staircases, living and dining areas, lighting and ceilings — as one project with a single palette across the house.",
      },
      {
        question: "Our community is far out on Sarjapur Road. Do you still take it up?",
        answer:
          "Yes. We plan deliveries and supervision for the distance, and you get the same free site visit and itemised quote.",
      },
    ],
    related: [
      { label: "Modular Kitchen in Sarjapur Road", href: "/modular-kitchen-in-sarjapur-road" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Electronic City",
    key: "electronic-city",
    badge: "Serving Electronic City Phase 1 and 2",
    image: "livingMarble",
    pitch: "interiors for apartments near the tech parks — for owners moving in and for owners furnishing a flat to rent out.",
    subtitle:
      "Interiors for Electronic City apartments — whether you are moving in or getting a flat ready for tenants.",
    intro:
      "Electronic City's apartments serve the tech campuses of Phase 1 and Phase 2 and the Hosur Road corridor. That shapes the interior briefs we get: some owners are moving in and want a complete home, while many others own a flat as an investment and want it furnished well enough to rent quickly and hold up to tenants.",
    context: {
      heading: "Two kinds of brief: your home, or a rental",
      body: [
        "For a home you will live in, we design around your routines — the kitchen you cook in, the storage you need, the light you want in the evening. For a rental, we recommend durable finishes, a straightforward modular kitchen and wardrobes, and lighting that makes the flat photograph well for listings.",
        "Either way, you get the same itemised quote. For rental fit-outs we can keep you updated remotely and hand over the flat cleaned and ready for viewings.",
      ],
    },
    faqs: [
      {
        question: "Can you furnish our flat for rent while we live in another city?",
        answer:
          "Yes. We can measure, design and execute with you reviewing everything online, approve choices on video calls, and send photo updates throughout. We hand over the flat cleaned and ready for tenants.",
      },
      {
        question: "Which finishes hold up best in a rental?",
        answer:
          "Laminate shutters, quartz or granite countertops, good-quality hinges and channels, and washable paint all hold up well. We avoid delicate finishes like high-gloss acrylic in areas tenants will use heavily.",
      },
    ],
    related: [
      { label: "Modular Kitchen in Electronic City", href: "/modular-kitchen-in-electronic-city" },
      { label: "Office Interior Design in Electronic City", href: "/office-interior-design-in-electronic-city" },
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // Interior designers — South and West Bangalore
  // -------------------------------------------------------------------------
  {
    service: "interior",
    place: "JP Nagar",
    key: "jp-nagar",
    badge: "Serving all phases of JP Nagar",
    image: "partition",
    pitch: "interiors for independent houses and apartments across all phases — kitchens, wardrobes, ceilings and complete homes.",
    subtitle:
      "Interiors for JP Nagar homes — whether it is a new apartment or a family house ready for a modern update.",
    intro:
      "JP Nagar is one of South Bangalore's largest residential areas, spread across many phases, with independent houses, builder floors and apartment complexes of every age. We design new interiors for recently bought flats and modern updates for homes that families have lived in for many years.",
    context: {
      heading: "Modern interiors in an established neighbourhood",
      body: [
        "Many JP Nagar homes were built before modular kitchens and built-in wardrobes became standard. Updating them is rarely just carpentry: it often means new electrical points, plumbing changes in the kitchen, and fixing old damp patches first. We survey all of that on the first visit.",
        "Newer apartments in the later phases arrive bare and need complete interiors. For those we start with a handover inspection and design around the builder's fixed points.",
      ],
    },
    faqs: [
      {
        question: "Can you combine interiors with renovation work?",
        answer:
          "Yes. We regularly combine interiors with renovation — flooring, bathroom upgrades, rewiring and painting — under one contract and one supervisor.",
      },
      {
        question: "Do you work in Banashankari and Jayanagar too?",
        answer:
          "Yes. We take up projects across JP Nagar, Jayanagar, Banashankari, BTM Layout and Bannerghatta Road.",
      },
    ],
    related: [
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
    ],
  },
  {
    service: "interior",
    place: "Bannerghatta Road",
    key: "bannerghatta-road",
    badge: "Serving Bannerghatta Road and Arekere",
    image: "livingTv",
    pitch: "interiors for apartments along Bannerghatta Road, Arekere and Hulimavu — kitchens, wardrobes and complete homes.",
    subtitle:
      "Apartment interiors along Bannerghatta Road — designed to make the most of every room, installed by one team.",
    intro:
      "Bannerghatta Road is lined with apartment complexes from Dairy Circle out past Arekere and Hulimavu, ranging from older buildings to large new gated communities. Most interior projects here are complete fit-outs of 2BHK and 3BHK flats, plus kitchen and wardrobe upgrades in older apartments.",
    context: {
      heading: "Upgrading older apartments",
      body: [
        "Apartments that are ten or fifteen years old often have tired kitchens, wardrobes that have swollen at the base, and fluorescent tube lighting. We replace what needs replacing, reuse what is sound, and add lighting and ceiling work that changes how the whole flat feels.",
        "For new flats in the larger communities, we work within the association's rules on timing, lift use and debris, and plan the schedule so you can move in on the date you have planned.",
      ],
    },
    faqs: [
      {
        question: "Our wardrobes have swollen at the bottom. Can you replace just those?",
        answer:
          "Yes. Swelling usually means moisture and a board that was not suited to it. We replace the affected units with moisture-resistant boards and check the wall behind for damp first.",
      },
      {
        question: "Can you change our tube lights to modern lighting without a false ceiling?",
        answer:
          "Yes. Surface-mounted panels, track lights and profile lights can modernise lighting without a full ceiling. Where you want concealed lights, we add a ceiling only in the areas that need it.",
      },
    ],
    related: [
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Interior Designers in BTM Layout", href: "/interior-designers-in-btm-layout" },
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Kanakapura Road",
    key: "kanakapura-road",
    badge: "Serving Kanakapura Road and Konanakunte",
    image: "kitchenParallel",
    pitch: "interiors for new apartments along Kanakapura Road — handover interiors, modular kitchens and wardrobes.",
    subtitle:
      "Handover interiors for Kanakapura Road apartments — ready to move in, without the rent-and-EMI overlap dragging on.",
    intro:
      "Kanakapura Road has seen a wave of new apartment projects beyond Konanakunte and along the metro line, alongside independent houses in the layouts off the main road. Most of our enquiries from here are for newly handed-over flats that need everything — kitchen, wardrobes, TV unit, ceilings and lighting.",
    context: {
      heading: "Moving in on time",
      body: [
        "For many new owners, the pressure is financial: rent on the current home and EMI on the new one. We can start the design from the builder's drawings before handover, so production can begin as soon as we have confirmed the measurements in the flat.",
        "We prioritise the kitchen and bedroom wardrobes in the schedule, so the flat is liveable first and finishing touches follow.",
      ],
    },
    faqs: [
      {
        question: "Can design start before the builder hands over the flat?",
        answer:
          "Yes. We work from the builder's floor plan and electrical layout to fix the design and materials, then measure the flat once you have the keys and confirm everything before production.",
      },
      {
        question: "Do you take up projects on Kanakapura Road beyond NICE Road?",
        answer:
          "Yes. We plan deliveries and supervision for the distance and give you the same free site visit and itemised quote.",
      },
    ],
    related: [
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Basavanagudi",
    key: "basavanagudi",
    badge: "Serving Basavanagudi and South Bangalore",
    image: "pooja",
    pitch: "interiors for traditional family homes — modern kitchens and storage while keeping the character of an older house.",
    subtitle:
      "Interiors for Basavanagudi's traditional homes — modern comfort, without losing the character that makes the house special.",
    intro:
      "Basavanagudi is one of Bangalore's oldest neighbourhoods, with traditional independent houses — some with red-oxide floors, wooden windows and high ceilings — alongside newer apartments that replaced older homes. The brief here is often to modernise sensitively: a working kitchen and proper storage, without stripping out what gives the home its character.",
    context: {
      heading: "Keeping what is worth keeping",
      body: [
        "Old teak doors and windows, high ceilings and solid walls are assets. We design around them — wardrobes that sit below a high ceiling instead of hiding it, a modern kitchen that suits the house, and lighting that respects the original rooms.",
        "Older houses also need checks before new interiors go in: wiring that may predate modern loads, damp in thick walls, and plumbing that has been patched over the years. We look at all of it first.",
      ],
    },
    faqs: [
      {
        question: "Can you keep our old wooden doors and windows?",
        answer:
          "Yes. Solid old timber is often worth restoring. We can repair, re-polish and re-fit them, and design the new interiors to match.",
      },
      {
        question: "Do you design traditional pooja rooms?",
        answer:
          "Yes. We design pooja rooms and units in wood, marble or a combination, with traditional details like bells and carved panels, and proper storage for pooja items.",
      },
    ],
    related: [
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Vijayanagar",
    key: "vijayanagar",
    badge: "Serving Vijayanagar and West Bangalore",
    image: "stoneWall",
    pitch: "interiors for independent houses, builder floors and apartments — kitchens, wardrobes, false ceilings and refurbishment.",
    subtitle:
      "Interiors for Vijayanagar homes — family houses, rental floors and apartments, designed and delivered by one team.",
    intro:
      "Vijayanagar is a busy, established part of West Bangalore with many independent houses — often with the owner's family on one floor and tenants on others — and a growing number of apartment buildings. The work we do here covers both full interiors for the owner's home and simpler, durable fit-outs for rental floors.",
    context: {
      heading: "Owner floors and rental floors",
      body: [
        "For the floor you live on, we design for your family: a kitchen that suits how you cook, wardrobes with the right mix of hanging and shelf space, and lighting that makes the rooms feel bigger.",
        "For rental floors, we recommend durable laminate finishes, a practical modular kitchen and easy-maintenance surfaces, quoted separately so you can decide on each floor on its own merits.",
      ],
    },
    faqs: [
      {
        question: "Can you do interiors on two floors with different budgets?",
        answer:
          "Yes. We design and quote each floor separately — for example a richer finish for your home and a durable, economical one for a rental floor — and run them as one project.",
      },
      {
        question: "Do you also work in Rajajinagar and Basaveshwaranagar?",
        answer:
          "Yes. We take up projects across West Bangalore, including Rajajinagar, Basaveshwaranagar, Chandra Layout and Nagarbhavi.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Rajarajeshwari Nagar",
    key: "rajarajeshwari-nagar",
    badge: "Serving RR Nagar and Kengeri",
    image: "villaRoom",
    pitch: "houses and flats in RR Nagar and Kengeri — kitchens, wardrobes, ceilings, full homes.",
    subtitle:
      "Interiors for RR Nagar homes — complete design for new houses and apartments, and upgrades for homes you already live in.",
    intro:
      "Rajarajeshwari Nagar and nearby Kengeri have a large number of independent houses in planned layouts, many of them newly built, plus apartment projects along Mysore Road. A lot of our enquiries here come from owners who have just finished building a house and now need the interiors done.",
    context: {
      heading: "Interiors for a newly built house",
      body: [
        "If your house is just finishing construction, it is the best time to involve an interior designer — before the final electrical points, false ceiling heights and kitchen plumbing are fixed. A few small changes at this stage save rework later.",
        "We also design for larger independent houses as a whole: staircases, a consistent palette across floors, and storage for every room, not just the kitchen and bedrooms.",
      ],
    },
    faqs: [
      {
        question: "Our house is still under construction. When should interiors start?",
        answer:
          "Ideally before electrical and plumbing points are finalised and before the plastering is complete. That way switches, AC points and kitchen plumbing land where the interior design needs them.",
      },
      {
        question: "Do you work in Kengeri and Mysore Road areas?",
        answer:
          "Yes. We take up projects across RR Nagar, Kengeri, Mysore Road and the nearby layouts.",
      },
    ],
    related: [
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "Interior Designers in Kanakapura Road", href: "/interior-designers-in-kanakapura-road" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
  },

  // -------------------------------------------------------------------------
  // Modular kitchens
  // -------------------------------------------------------------------------
  {
    service: "kitchen",
    place: "Hebbal",
    key: "hebbal",
    badge: "A quick drive from our Yelahanka office",
    image: "kitchenU",
    pitch: "modular kitchens for apartments and independent houses around Hebbal, designed on site and installed in days.",
    subtitle:
      "Modular kitchens for Hebbal homes — measured at your home, made off site and installed with minimum disruption.",
    intro:
      "Hebbal's homes range from apartments in large lakeside and ORR-side communities to independent houses in the older layouts around the flyover. Kitchens vary just as much — compact L-shapes in apartments, larger U-shaped kitchens in houses — and each needs its own design.",
    context: {
      heading: "Designing around how you cook",
      body: [
        "Before drawing anything, we ask how you use the kitchen: daily Indian cooking with heavy tadka, a separate utility for washing, whether you need space for a second fridge or a water purifier, and where you keep everyday utensils. The layout follows from those answers.",
        "Hebbal is close to our Yelahanka office, so the measurement visit, the design meeting and installation supervision are easy to arrange around your schedule.",
      ],
    },
    faqs: [
      {
        question: "Do you design kitchens for heavy Indian cooking?",
        answer:
          "Yes. We plan for a proper chimney with ducting, easy-to-clean surfaces near the hob, deep drawers for heavy vessels, and storage for masalas and dry goods close to where you cook.",
      },
      {
        question: "Can you do the rest of the house too?",
        answer:
          "Yes. We do complete home interiors in Hebbal as well — wardrobes, TV units, ceilings and lighting — under the same quote if you want.",
      },
    ],
    related: [
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "Home Renovation in Hebbal", href: "/home-renovation-in-hebbal" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
      { label: "Interior Designers in RT Nagar", href: "/interior-designers-in-rt-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "HSR Layout",
    key: "hsr-layout",
    badge: "Serving all sectors of HSR Layout",
    image: "kitchenParallel",
    pitch: "modular kitchens for apartments and independent houses in every sector, with itemised quotes and factory-made units.",
    subtitle:
      "Modular kitchens for HSR Layout homes — sharp design, solid materials and a quote you can compare line by line.",
    intro:
      "HSR Layout's mix of independent houses, builder floors and apartment buildings means kitchens of every shape — open kitchens in newer builder floors, closed L-shaped kitchens in apartments, and older cement platforms in houses due for an upgrade.",
    context: {
      heading: "Open kitchens and builder floors",
      body: [
        "Open kitchens look great but put everything on display. We design them with more closed storage, a chimney strong enough to keep cooking smells out of the living area, and finishes that look good from the sofa as well as the hob.",
        "In builder floors, we often add a breakfast counter or island that doubles as a work surface and a casual dining spot — with power and lighting planned in before the floor is finished.",
      ],
    },
    faqs: [
      {
        question: "How do you keep cooking smells out of an open kitchen?",
        answer:
          "A correctly sized chimney ducted to the outside, a short and straight duct route, and enough make-up air. We plan all three into the design rather than adding a chimney at the end.",
      },
      {
        question: "Can we add an island in an apartment kitchen?",
        answer:
          "Only if there is enough clearance around it — we check this on site. Where an island does not fit, a breakfast counter attached to a wall or peninsula often gives the same benefit.",
      },
    ],
    related: [
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Modular Kitchen in Sarjapur Road", href: "/modular-kitchen-in-sarjapur-road" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
    ],
  },
  {
    service: "kitchen",
    place: "Electronic City",
    key: "electronic-city",
    badge: "Serving Electronic City Phase 1 and 2",
    image: "kitchenU",
    pitch: "modular kitchens for apartments near the tech parks — for your own home or a rental flat.",
    subtitle:
      "Modular kitchens for Electronic City apartments — durable, easy to maintain, and installed quickly.",
    intro:
      "Most Electronic City kitchens we work on are in apartments: compact L-shaped or parallel layouts with a small utility area. Some owners are moving in; many are fitting out a flat to rent. Either way, the kitchen has to be durable and easy to keep clean.",
    context: {
      heading: "Kitchens that hold up to daily use",
      body: [
        "For heavy daily use — and for rentals — we recommend boiling-water-resistant plywood in the sink area, laminate shutters that resist scratches, and a quartz or granite countertop. These choices look good for years with very little maintenance.",
        "Compact apartment kitchens gain the most from vertical storage: a tall pantry pull-out, a full loft, and a corner solution that makes use of the space most kitchens waste.",
      ],
    },
    faqs: [
      {
        question: "What is the most durable kitchen finish for a rental flat?",
        answer:
          "Laminate shutters on a moisture-resistant carcass, with a granite or quartz countertop and good-quality soft-close hardware. These hold up well to heavy use and are easy to repair if a panel is damaged.",
      },
      {
        question: "Can you install the kitchen while we are out of town?",
        answer:
          "Yes. You can approve the design and samples online, and we send photo updates during installation and a video walk-through at handover.",
      },
    ],
    related: [
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
      { label: "Office Interior Design in Electronic City", href: "/office-interior-design-in-electronic-city" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "JP Nagar",
    key: "jp-nagar",
    badge: "Serving all phases of JP Nagar",
    image: "kitchenParallel",
    pitch: "new modular kitchens for apartments and kitchen upgrades for older independent houses across all phases.",
    subtitle:
      "Modular kitchens for JP Nagar homes — from a full kitchen remodel in an older house to a fresh fit-out in a new flat.",
    intro:
      "In JP Nagar we work on two kinds of kitchen: complete remodels in older independent houses and apartments, where the cement platform, tiles and plumbing may all need attention, and fresh fit-outs in newer flats where the builder has left a bare platform.",
    context: {
      heading: "Remodelling an older kitchen",
      body: [
        "In older kitchens, the platform height, the position of the sink and the state of the plumbing decide what is possible. We check all three on the first visit and tell you whether the existing platform can stay or should be rebuilt — with the cost difference shown in the quote.",
        "We also look at ventilation. Older kitchens were often built without a chimney in mind; we plan the duct route through a window or wall so the new chimney actually works.",
      ],
    },
    faqs: [
      {
        question: "Should we break the old platform or keep it?",
        answer:
          "Keep it if it is sound, level and at a comfortable height; rebuild if it is cracked, too low, or in the wrong place for a better layout. We show both options with their costs in the quote.",
      },
      {
        question: "Can you redo the kitchen tiles and plumbing too?",
        answer:
          "Yes. Dado tiles, plumbing, electrical points and any civil work are done by our team as part of the same project.",
      },
    ],
    related: [
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
      { label: "Modular Kitchen in Electronic City", href: "/modular-kitchen-in-electronic-city" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Sarjapur Road",
    key: "sarjapur-road",
    badge: "Serving Sarjapur Road, from Bellandur to Dommasandra",
    image: "kitchenU",
    pitch: "modular kitchens for apartments and villas in gated communities, from compact L-shapes to island kitchens.",
    subtitle:
      "Modular kitchens for Sarjapur Road apartments and villas — designed for your space and installed with minimum fuss.",
    intro:
      "Sarjapur Road's gated communities include everything from compact apartment kitchens to large villa kitchens with room for an island and a separate utility. We design for the space you actually have — and for how your family cooks.",
    context: {
      heading: "Villa kitchens and apartment kitchens",
      body: [
        "In villas, there is often room for a U-shaped kitchen or an island, a tall appliance wall with a built-in oven, and a separate wet kitchen or utility. We plan the flow between them so the main kitchen stays clean and presentable.",
        "In apartments, the design is about squeezing out storage: corner units, tall pull-outs and full-height lofts.",
      ],
    },
    faqs: [
      {
        question: "Can you design a separate wet kitchen or utility?",
        answer:
          "Yes. Many villa owners want a show kitchen and a separate wet kitchen for heavy cooking. We design both together so storage, plumbing and appliances are split sensibly between them.",
      },
      {
        question: "Do you work within our community's rules?",
        answer:
          "Yes. We get work permits, follow the permitted working hours, book lifts for deliveries in apartment towers, and remove debris every day.",
      },
    ],
    related: [
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
    ],
  },

  // -------------------------------------------------------------------------
  // House construction — North Bangalore
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Hennur",
    key: "hennur",
    badge: NORTH,
    image: "houseTimber",
    pitch: "independent houses and villas on plots off Hennur Main Road and Hennur–Bagalur Road — drawings, approvals, construction.",
    subtitle:
      "Build your house in Hennur with one team — design, approvals, construction and interiors, with materials named in the contract.",
    intro:
      "Hennur and the Hennur–Bagalur Road corridor have many residential plots in newer layouts, and owners here are building everything from compact independent houses to larger villas with rental floors. Most come to us wanting one firm to handle the whole job, from drawings to handover.",
    context: {
      heading: "Building on a Hennur plot",
      body: [
        "Before designing, we check the basics: the plot's dimensions and setbacks, road width, the number of floors permitted, and the soil. A soil test on the plot tells us what kind of foundation it needs — something that should never be guessed.",
        "Many owners here plan a ground-floor home with rental units above, or space for a future floor. We design the structure for the floors you might add later, so expanding does not mean strengthening the house first.",
      ],
    },
    faqs: [
      {
        question: "Can you design the house so we can add a floor later?",
        answer:
          "Yes. We design the foundation and columns for the total number of floors you plan to build eventually, within what is permitted, so adding a floor later does not need structural strengthening.",
      },
      {
        question: "Do you build rental units on upper floors?",
        answer:
          "Yes. We design separate entrances, independent utilities and efficient layouts for rental floors, alongside the owner's home.",
      },
    ],
    related: [
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Vidyaranyapura",
    key: "vidyaranyapura",
    badge: NORTH,
    image: "houseFourStorey",
    pitch: "new houses, rebuilds and additional floors in Vidyaranyapura's layouts — design, approvals and construction.",
    subtitle:
      "New houses, rebuilds and extra floors in Vidyaranyapura — designed, approved and built by one team close to home.",
    intro:
      "Vidyaranyapura is a settled residential area where many families are now rebuilding old houses or adding floors to existing ones. That work needs more care than building on an empty plot: neighbours on both sides, an existing structure to assess, and often a family living nearby during construction.",
    context: {
      heading: "Rebuilding or adding a floor",
      body: [
        "Adding a floor to an existing house depends entirely on whether the foundation and columns can take the load. We assess the existing structure before promising anything, and if it cannot take another floor, we say so.",
        "For complete rebuilds, we plan demolition, debris removal and protection of neighbouring walls carefully, and agree working hours that keep the street on our side.",
      ],
    },
    faqs: [
      {
        question: "Can our existing house take another floor?",
        answer:
          "It depends on how the foundation and columns were designed. We inspect the structure, check any available drawings, and advise whether a floor can be added safely, needs strengthening first, or is not advisable.",
      },
      {
        question: "Do you handle demolition of an old house?",
        answer:
          "Yes. We handle demolition, debris removal and site clearance as part of a rebuild project, with care taken to protect neighbouring properties.",
      },
    ],
    related: [
      { label: "Interior Designers in Vidyaranyapura", href: "/interior-designers-in-vidyaranyapura" },
      { label: "Home Construction Services in Yelahanka", href: "/home-construction-services-in-yelahanka" },
      { label: "House Construction in Jakkur", href: "/house-construction-in-jakkur" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Jakkur",
    key: "jakkur",
    badge: NORTH,
    image: "villaRoof",
    pitch: "independent houses and villas on Jakkur plots — soil test, drawings, approvals, construction and interiors.",
    subtitle:
      "Build your Jakkur home with a design-and-build team just down the road — from soil test to handover.",
    intro:
      "Jakkur sits between Yelahanka and Hebbal, with residential plots in established and newer layouts that owners are turning into independent houses and villas. It is one of the closest areas to our Yelahanka New Town office, which makes supervision easy.",
    context: {
      heading: "Close supervision makes a better house",
      body: [
        "House quality is decided on site, day by day: whether the reinforcement matches the drawings before concrete goes in, whether slabs are cured properly, whether the plumbing is pressure-tested before it is covered. Being close by means our engineers can be on your site often.",
        "Some parts of North Bangalore have areas near lakes and low-lying ground. A soil test on your plot and correct plinth levels and drainage are part of our design, not afterthoughts.",
      ],
    },
    faqs: [
      {
        question: "Do you do a soil test before designing the foundation?",
        answer:
          "Yes. A soil test tells us the bearing capacity and the right foundation type for your plot. We design the foundation from the test result, not from assumptions.",
      },
      {
        question: "Can you do the interiors once the house is built?",
        answer:
          "Yes. We can plan the interiors alongside the construction drawings, so electrical points and plumbing suit the kitchen and wardrobes from the start.",
      },
    ],
    related: [
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
      { label: "Turnkey Construction in Hebbal", href: "/turnkey-construction-in-hebbal" },
    ],
  },
  {
    service: "construction",
    place: "Bagalur",
    key: "bagalur",
    badge: "North-East of Yelahanka, on our regular route",
    image: "villaPool",
    pitch: "houses and villas on plots near Bagalur and the airport corridor — design, approvals, construction and interiors.",
    subtitle:
      "Build on your Bagalur plot with a team that knows North Bangalore — design, approvals, construction and handover.",
    intro:
      "Bagalur and the surrounding villages towards the airport have seen a lot of plotted development, and many plot owners are now ready to build. Projects here range from compact family homes to larger villas with gardens — often on plots in newer layouts where infrastructure is still developing.",
    context: {
      heading: "Building in a developing area",
      body: [
        "On newer layouts, we check what is actually available at the plot: road access for trucks, water supply for construction, and power. Where water or power is not yet connected, we plan temporary supply into the schedule and estimate.",
        "We also check the layout's approval status and the plot's documents early, because the plan-sanction route depends on them.",
      ],
    },
    faqs: [
      {
        question: "Our plot has no water connection yet. Can construction start?",
        answer:
          "Yes. Water for construction can be brought in by tanker, and we include that in the plan. We also advise on a borewell or sump where appropriate.",
      },
      {
        question: "Which documents do we need before building?",
        answer:
          "Typically the sale deed, khata or equivalent property record, tax receipts and the layout's approval documents. We review them before design and tell you what is needed for plan sanction.",
      },
    ],
    related: [
      { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "Interior Designers in Devanahalli", href: "/interior-designers-in-devanahalli" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
  },

  // -------------------------------------------------------------------------
  // Home renovation
  // -------------------------------------------------------------------------
  {
    service: "renovation",
    place: "Hebbal",
    key: "hebbal",
    badge: "A quick drive from our Yelahanka office",
    image: "washroom",
    pitch: "full-home and room renovation for apartments and houses — kitchens, bathrooms, flooring, rewiring and painting.",
    subtitle:
      "Renovate your Hebbal home with one team — kitchens, bathrooms, flooring, electrical and painting under one quote.",
    intro:
      "Hebbal's older layouts have independent houses that are now twenty or thirty years old, and its apartment complexes include buildings from the early 2000s. Both reach a point where patching is no longer enough: bathrooms leak, wiring cannot handle modern loads, and the kitchen needs to be rebuilt.",
    context: {
      heading: "Fixing causes, not just surfaces",
      body: [
        "Most renovation problems have a hidden cause: damp walls from a failed bathroom waterproofing, cracks from a terrace that holds water, tripping circuits from undersized wiring. We find the cause on the survey and fix it before finishing work goes on top.",
        "Hebbal is close to our Yelahanka office, so our supervisor can be on site regularly through the messy stages, when decisions come up most often.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate just the bathrooms?",
        answer:
          "Yes. Bathroom-only renovations are common. We remove old tiles, redo waterproofing and plumbing, and fit new tiles, sanitaryware and fittings.",
      },
      {
        question: "Do you renovate apartments in Hebbal's gated communities?",
        answer:
          "Yes. We work within association rules on timing, lifts and debris, and handle the approvals with the management.",
      },
    ],
    related: [
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
  {
    service: "renovation",
    place: "Indiranagar",
    key: "indiranagar",
    badge: "Serving Indiranagar and HAL 2nd Stage",
    image: "partition",
    pitch: "renovation of older houses and apartments — kitchens, bathrooms, flooring, rewiring and modern interiors.",
    subtitle:
      "Renovate your Indiranagar home — modern kitchens and bathrooms, new flooring and wiring, handled by one team.",
    intro:
      "Indiranagar has many older independent houses and early apartment buildings in excellent locations, which owners would rather renovate than leave. A well-planned renovation can give an older home a modern kitchen, new bathrooms, better light and updated wiring while keeping its solid structure.",
    context: {
      heading: "Renovating in a busy neighbourhood",
      body: [
        "Indiranagar's streets are busy and parking is tight, so we plan deliveries and debris removal carefully and keep the site tidy for neighbours. Noisy work is kept to agreed hours.",
        "Many homes here are partly rented or used as home offices. We can phase the renovation floor by floor so part of the house stays in use.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate one floor while we live on the other?",
        answer:
          "Yes. We phase the work floor by floor with dust screens and separate access where possible, so the occupied floor stays liveable.",
      },
      {
        question: "Can you replace old mosaic flooring?",
        answer:
          "Yes. We can remove it or lay new flooring over it where levels allow, with vitrified tiles, marble or wood-finish flooring. We check door clearances and thresholds before deciding.",
      },
    ],
    related: [
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Home Interior Design in Koramangala", href: "/home-interior-design-in-koramangala" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
    ],
  },
  {
    service: "renovation",
    place: "Malleshwaram",
    key: "malleshwaram",
    badge: "Serving Malleshwaram and Sadashivanagar",
    image: "pooja",
    pitch: "careful renovation of traditional homes and older apartments — kitchens, bathrooms, flooring, wiring and painting.",
    subtitle:
      "Renovating Malleshwaram's older homes with care — modern comfort, with the character kept intact.",
    intro:
      "Malleshwaram is home to some of Bangalore's oldest residential streets, with traditional houses, high ceilings and solid old timber alongside apartments of various ages. Renovating here means updating kitchens, bathrooms and wiring while respecting what makes these homes worth keeping.",
    context: {
      heading: "Updating old homes sensitively",
      body: [
        "Old houses hide old problems: wiring from another era, plumbing patched many times, damp in thick walls. We survey all of it first and plan the renovation to fix the root causes.",
        "Where there is old teak, red-oxide flooring or original windows worth saving, we restore rather than replace, and design new kitchens and bathrooms to sit comfortably alongside them.",
      ],
    },
    faqs: [
      {
        question: "Can you restore old red-oxide floors?",
        answer:
          "In many cases, yes — they can be cleaned, repaired and re-polished. Where they are badly damaged, we discuss replacing them or laying a new floor in the worst-affected rooms only.",
      },
      {
        question: "Do you rewire old houses?",
        answer:
          "Yes. Rewiring is one of the most important upgrades in an old home. We replace old wiring with correctly sized cables, a new distribution board with protection, and the extra points modern homes need.",
      },
    ],
    related: [
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
]
