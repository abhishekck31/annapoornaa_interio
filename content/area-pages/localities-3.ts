/**
 * House construction locality pages, December 2026 batch (34 pages).
 *
 * Each entry carries only what is specific to that area; the construction
 * profile in build.ts supplies the stage table, highlights, process and service
 * FAQs. Same ground rules as the earlier batches: local copy describes the
 * kind of plots and practical constraints in general terms and names no
 * builders, projects, distances or prices.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"
const CITY = "Design-and-build across Bangalore"

export const localInputs3: LocalInput[] = [
  // -------------------------------------------------------------------------
  // North and north-east Bangalore
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Banaswadi",
    key: "banaswadi",
    badge: NORTH,
    image: "houseFourStorey",
    pitch: "rebuild old houses as G+2 or G+3 homes with rental floors — drawings, approvals and construction.",
    subtitle:
      "Rebuilding an older Banaswadi house as a modern home with rental floors — drawings, approvals and construction by one team.",
    intro:
      "Much of Banaswadi was built as single-storey and two-storey independent houses decades ago. Today the most common enquiry we get here is a rebuild: demolish the old house, build a new home for the family on one floor and add rental floors above, so the plot pays for itself.",
    context: {
      heading: "Rebuilding on a Banaswadi plot",
      body: [
        "Streets in the older layouts are often narrow and busy, so demolition, debris removal and material deliveries need planning. We schedule large deliveries such as steel and ready-mix concrete for off-peak hours and keep the road in front of your plot clear for neighbours.",
        "A rental-floor building is a different design problem from a family home: separate entrances and staircases, independent meters, water and sump planning for several households, and parking. We plan all of that in the first drawings, so the building works for you and your tenants.",
      ],
    },
    faqs: [
      {
        question: "Can you demolish our old house and rebuild on the same plot?",
        answer:
          "Yes. We handle demolition, debris removal and the new construction as one project. Before demolition we check the documents, setbacks and the number of floors allowed, so you know exactly what the new building can be.",
      },
      {
        question: "Can the ground floor be for us and the upper floors for rent?",
        answer:
          "Yes, that is the most common plan we draw in Banaswadi. We design separate access, meters and water for each unit, and keep the owner's floor larger and better finished if that is what you want.",
      },
    ],
    related: [
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "House Construction in Kalyan Nagar", href: "/house-construction-in-kalyan-nagar" },
      { label: "House Construction in Horamavu", href: "/house-construction-in-horamavu" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Kalyan Nagar",
    key: "kalyan-nagar",
    badge: NORTH,
    image: "houseTimber",
    pitch: "premium independent houses and rebuilds with modern elevations — design, plan sanction and construction.",
    subtitle:
      "Independent houses and rebuilds in Kalyan Nagar with a modern elevation, built to the specification you sign off.",
    intro:
      "Kalyan Nagar and HRBR Layout are among the most sought-after residential areas in North-East Bangalore. Plots here are valuable, so owners who build want the house to make full use of the site and to look the part: a clean modern elevation, larger windows, balconies and a well-finished interior.",
    context: {
      heading: "Building a premium home in Kalyan Nagar",
      body: [
        "On a valuable plot the design work matters as much as the construction. We check setbacks and the number of floors allowed for your road width, then plan the floors, staircase, lift provision and parking to use every permissible square foot without overbuilding.",
        "Elevation materials — cladding, glass railings, louvres, stone and textured paint — are chosen with you from samples and named in the contract, so the house looks the way it did in the 3D view.",
      ],
    },
    faqs: [
      {
        question: "Can you provide a lift in a G+3 independent house?",
        answer:
          "Yes. If you want a home lift now or later, we plan the shaft, pit and machine space in the structural drawings, so it can be installed without breaking walls afterwards.",
      },
      {
        question: "Do you design the elevation in 3D before construction?",
        answer:
          "Yes. You see the front elevation in 3D with the actual materials we propose, and we revise it with you before the drawings are finalised.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
      { label: "House Construction in Banaswadi", href: "/house-construction-in-banaswadi" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
    ],
  },
  {
    service: "construction",
    place: "Horamavu",
    key: "horamavu",
    badge: NORTH,
    image: "villaRoof",
    pitch: "new homes on layout plots and rebuilds — soil test, approvals, structure and finishing under one contract.",
    subtitle:
      "New homes on Horamavu's layout plots, built stage by stage with materials named in the contract.",
    intro:
      "Horamavu has grown from scattered layouts into a busy residential area, and many plot owners here are now building. Plots vary — some in established layouts with good roads, some in newer layouts where access, drainage and water connections still need checking before a design is drawn.",
    context: {
      heading: "What we check first on a Horamavu plot",
      body: [
        "Before drawing anything we check the plot documents and khata status, the road width in front of the site, and where water, drainage and power will come from. In newer layouts these decide the design as much as your wish list does.",
        "Some low-lying pockets near lakes and drains collect water in heavy rain. On those plots we set the plinth level and plan storm-water drainage carefully, so the ground floor stays dry.",
      ],
    },
    faqs: [
      {
        question: "Our layout has no drainage connection yet. Can we still build?",
        answer:
          "Often, yes, with a properly designed septic tank or soak pit until the connection arrives. We plan the plumbing so switching to the main line later is simple.",
      },
      {
        question: "Do you check the plot documents before starting?",
        answer:
          "Yes. We review the sale deed, khata and tax receipts, tell you if anything needs fixing for plan sanction, and only then finalise the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Horamavu", href: "/interior-designers-in-horamavu" },
      { label: "House Construction in Banaswadi", href: "/house-construction-in-banaswadi" },
      { label: "House Construction in Ramamurthy Nagar", href: "/house-construction-in-ramamurthy-nagar" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
    ],
  },
  {
    service: "construction",
    place: "Ramamurthy Nagar",
    key: "ramamurthy-nagar",
    badge: NORTH,
    image: "houseFourStorey",
    pitch: "independent houses and rental buildings off Old Madras Road and Outer Ring Road — design to handover.",
    subtitle:
      "Independent houses and rental buildings in Ramamurthy Nagar, planned for the plot and built stage by stage.",
    intro:
      "Ramamurthy Nagar sits between Old Madras Road and the Outer Ring Road, close to the tech corridors to the east. That location makes rental floors attractive, and many owners here build a home for the family with two or three rental units on the same plot.",
    context: {
      heading: "Planning a home with rental income",
      body: [
        "Rental demand near the tech parks favours compact 1BHK and 2BHK units with good ventilation, parking and reliable water. We plan the unit mix with you before the drawings, because changing it after the structure is up is expensive.",
        "We plan sumps, overhead tanks and borewell provisions for the number of households the building will hold, and design separate electricity meters and water lines so each unit can be billed and maintained independently.",
      ],
    },
    faqs: [
      {
        question: "Which unit sizes rent best in Ramamurthy Nagar?",
        answer:
          "That depends on your plot and budget, but compact 1BHK and 2BHK units near the tech corridors are common. We show you a few layout options with the number of units each one gives, so you can decide with the numbers in front of you.",
      },
      {
        question: "Can we build in phases — ground and first floor now, more later?",
        answer:
          "Yes. We design the foundation and columns for the final number of floors, so adding floors later is safe and does not need the structure to be strengthened.",
      },
    ],
    related: [
      { label: "House Construction in Horamavu", href: "/house-construction-in-horamavu" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "Interior Designers in Ramamurthy Nagar", href: "/interior-designers-in-ramamurthy-nagar" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Kothanur",
    key: "kothanur",
    badge: NORTH,
    image: "villaWhite",
    pitch: "villas and independent houses in the layouts around Kothanur and Hennur–Bagalur Road.",
    subtitle:
      "Villas and independent houses in Kothanur's growing layouts, built by a team based just up the road in Yelahanka.",
    intro:
      "Kothanur has filled up with new layouts and gated plotted developments, and plot owners here usually want a spacious family home or a villa with a garden. It is close to our Yelahanka office, so site visits and supervision are easy to fit in.",
    context: {
      heading: "Building in a plotted layout",
      body: [
        "Gated plotted developments often have their own building guidelines — elevation rules, compound wall heights, permitted floors and construction hours. We read the association rules along with the planning norms and design within both.",
        "Larger plots give room for a garden, a car porch and sometimes a pool or terrace garden. We plan the landscape, drainage and outdoor services along with the house, rather than leaving them for later.",
      ],
    },
    faqs: [
      {
        question: "Our gated layout has its own design rules. Can you follow them?",
        answer:
          "Yes. Share the layout's guidelines and we will design the house to comply, then submit drawings to the association for approval alongside the plan sanction.",
      },
      {
        question: "Can you build a villa with a swimming pool?",
        answer:
          "Yes. We design and build pools with the house, including the structure, waterproofing, filtration and the decking around it.",
      },
    ],
    related: [
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "Interior Designers in Kothanur", href: "/interior-designers-in-kothanur" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Kattigenahalli",
    key: "kattigenahalli",
    badge: NORTH,
    image: "villaRoof",
    pitch: "independent houses and villas on new plots near Yelahanka — plan sanction, structure and finishing.",
    subtitle:
      "New homes in Kattigenahalli, a few minutes from our office, with a site engineer you can reach any day.",
    intro:
      "Kattigenahalli, just north-east of Yelahanka, has new layouts filling up quickly with independent houses and villas. Many owners here bought plots years ago and are now ready to build; others are building a second home or a rental property close to the airport road.",
    context: {
      heading: "Building close to our office",
      body: [
        "Kattigenahalli is minutes from our Yelahanka office, so our engineers are on your site often and you can drop in to discuss drawings or pick materials. That closeness makes a real difference to supervision.",
        "In newer layouts, roads, water lines and drainage are sometimes still being completed. We check what is available at your plot and plan the sump, borewell and drainage to work today and connect to the main lines later.",
      ],
    },
    faqs: [
      {
        question: "Can we visit your office to see drawings and samples?",
        answer:
          "Yes. Our office is in Yelahanka New Town, close to Kattigenahalli. You are welcome to visit to review drawings and see material samples.",
      },
      {
        question: "Which authority approves the plan in Kattigenahalli?",
        answer:
          "It depends on where exactly your plot falls and how the layout was approved. We check this from your documents at the start and handle the plan-sanction paperwork with the right authority.",
      },
    ],
    related: [
      { label: "House Construction in Kogilu", href: "/house-construction-in-kogilu" },
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "Interior Designers in Kattigenahalli", href: "/interior-designers-in-kattigenahalli" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
    ],
  },
  {
    service: "construction",
    place: "RT Nagar",
    key: "rt-nagar",
    badge: NORTH,
    image: "houseTimber",
    pitch: "rebuilds of older houses in an established neighbourhood — careful demolition, approvals and construction.",
    subtitle:
      "Rebuilding an older RT Nagar house into a modern home, with neighbours and narrow streets handled carefully.",
    intro:
      "RT Nagar is an established neighbourhood of independent houses, many built decades ago. Families here usually build by demolishing the old house and rebuilding, often for the next generation, with a modern layout, more floors and parking that the old house never had.",
    context: {
      heading: "Rebuilding between neighbours",
      body: [
        "Houses in RT Nagar are close together, so demolition and excavation must protect the walls and foundations next door. We plan the sequence carefully and keep neighbours informed before noisy or heavy work starts.",
        "Older plots sometimes have documents or boundaries that no longer match the ground. We check the measurements and papers first, so the new plan is sanctioned on solid footing.",
      ],
    },
    faqs: [
      {
        question: "How do you protect the neighbouring houses during construction?",
        answer:
          "We assess neighbouring foundations before excavation, shore the sides where needed, keep vibration-heavy work to agreed hours and photograph adjoining walls before we start, so any concern can be checked against a record.",
      },
      {
        question: "Can you design parking into a rebuilt house on a small plot?",
        answer:
          "Usually, yes — a stilt or ground-floor parking bay is one of the most common requests. Whether it fits depends on the plot width and setbacks, which we check on the first visit.",
      },
    ],
    related: [
      { label: "Interior Designers in RT Nagar", href: "/interior-designers-in-rt-nagar" },
      { label: "House Construction in Mathikere", href: "/house-construction-in-mathikere" },
      { label: "House Construction in Sahakar Nagar", href: "/house-construction-in-sahakar-nagar" },
      { label: "Old House Demolition and Rebuild in Bangalore", href: "/old-house-demolition-and-rebuild-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Mathikere",
    key: "mathikere",
    badge: NORTH,
    image: "houseFourStorey",
    pitch: "rebuilds and rental-floor houses near Malleshwaram and IISc — design, approvals and construction.",
    subtitle:
      "New homes and rental floors in Mathikere, designed for compact plots and built by one accountable team.",
    intro:
      "Mathikere, beside Malleshwaram and the IISc campus, has steady rental demand from students, researchers and young professionals. Owners rebuilding here often plan a family floor plus several compact rental units, on plots that are usually modest in size.",
    context: {
      heading: "Making a compact plot work harder",
      body: [
        "On a small plot every decision counts — staircase position, a lift or not, how the rental units share access with the owner's floor. We draw a few layouts with you and compare how much usable space and how many units each one gives.",
        "Good natural light and ventilation are what tenants notice first in a tight neighbourhood. We plan window positions, a light well where possible and cross-ventilation into the design.",
      ],
    },
    faqs: [
      {
        question: "Are compact rental units a good idea in Mathikere?",
        answer:
          "Many owners here build them because of the demand from students and professionals nearby. We help you compare layout options, but the investment decision is yours — we just make sure the building works well whichever you choose.",
      },
      {
        question: "Do you prepare the structural drawings yourselves?",
        answer:
          "Yes. Architectural, structural and MEP drawings are prepared in-house and coordinated with each other, which avoids clashes between beams, pipes and wiring on site.",
      },
    ],
    related: [
      { label: "Interior Designers in Mathikere", href: "/interior-designers-in-mathikere" },
      { label: "House Construction in RT Nagar", href: "/house-construction-in-rt-nagar" },
      { label: "House Construction in Yeshwanthpur", href: "/house-construction-in-yeshwanthpur" },
      { label: "House Construction in Malleshwaram", href: "/house-construction-in-malleshwaram" },
    ],
  },
  {
    service: "construction",
    place: "Yeshwanthpur",
    key: "yeshwanthpur",
    badge: NORTH,
    image: "houseTimber",
    pitch: "independent houses, rebuilds and small commercial-cum-residential buildings — design to handover.",
    subtitle:
      "Homes, rebuilds and mixed-use buildings in Yeshwanthpur, designed for the plot and built stage by stage.",
    intro:
      "Yeshwanthpur mixes older residential streets with busy commercial roads. Enquiries here range from rebuilding a family home to putting up a building with shops or offices on the ground floor and homes above.",
    context: {
      heading: "Residential, commercial or both",
      body: [
        "A mixed-use building has different rules from a home — what is allowed depends on the road and the zoning of the plot. We check what your site permits before designing, so the building can be sanctioned as planned.",
        "Shops on the ground floor need wider spans, shutter openings and separate services, while the floors above need privacy and quiet. We design the structure and services for both uses from the start.",
      ],
    },
    faqs: [
      {
        question: "Can we build shops on the ground floor and live above?",
        answer:
          "It depends on the zoning and road width of your plot. We check what is permitted first and design within it, so the building gets its approvals and occupancy without trouble.",
      },
      {
        question: "Do you also do the interiors for the shops and homes?",
        answer:
          "Yes. We handle shop fronts, retail interiors and home interiors, so the whole building can be delivered by one team.",
      },
    ],
    related: [
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "House Construction in Mathikere", href: "/house-construction-in-mathikere" },
      { label: "House Construction in Jalahalli", href: "/house-construction-in-jalahalli" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Jalahalli",
    key: "jalahalli",
    badge: NORTH,
    image: "villaRoof",
    pitch: "independent houses and rental homes in Jalahalli and nearby layouts — plan sanction to handover.",
    subtitle:
      "Independent houses and rental homes in Jalahalli, built with materials named in the contract and stage-wise payments.",
    intro:
      "Jalahalli and the layouts around it are a mix of older independent houses and newer plots. Many families here are building their own home for the first time, while others are adding floors or rebuilding to create rental income.",
    context: {
      heading: "Building your first house",
      body: [
        "If this is your first construction project, the number of decisions can feel overwhelming. We take you through it stage by stage — what to decide now, what can wait — and give you a written schedule of what you need to sign off and when.",
        "Every material that matters, from cement and steel to wiring and pipes, is named by brand and grade in the contract, and payments are linked to completed stages, so you always know what you are paying for.",
      ],
    },
    faqs: [
      {
        question: "We have never built a house before. How involved do we need to be?",
        answer:
          "As involved as you want to be. We need your decisions on the plan, elevation and finishes; the rest — approvals, labour, materials and supervision — we manage, with regular photo updates so you can follow the work.",
      },
      {
        question: "Can we add a floor to our existing house in Jalahalli?",
        answer:
          "Possibly. We first check whether the existing foundation and columns can carry another floor and whether the plan allows it. If they can, we design and build the addition.",
      },
    ],
    related: [
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
      { label: "House Construction in Yeshwanthpur", href: "/house-construction-in-yeshwanthpur" },
      { label: "House Construction in Dasarahalli", href: "/house-construction-in-dasarahalli" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Hesaraghatta Road",
    key: "hesaraghatta-road",
    badge: NORTH,
    image: "villaGarden",
    pitch: "farmhouses, villas and independent houses on larger plots along Hesaraghatta Road.",
    subtitle:
      "Villas, farmhouses and family homes on Hesaraghatta Road's larger plots, from soil test to handover.",
    intro:
      "Hesaraghatta Road runs out from the city's north-west edge towards greener, more open land. Plots are larger and more varied here, and owners often want something different from a city house: a villa with a garden, a weekend farmhouse, or a home with room to grow.",
    context: {
      heading: "Building on larger and outer plots",
      body: [
        "On land further from the city, the first questions are about the land itself — whether it is converted for residential use, which authority approves the plan, and where water and power will come from. We check all of this before design starts.",
        "Open plots get more sun and wind, so we orient the house, overhangs and windows to keep it cooler, and plan rainwater harvesting and a borewell to reduce dependence on tankers.",
      ],
    },
    faqs: [
      {
        question: "Can you build a farmhouse on agricultural land?",
        answer:
          "That depends on the land's conversion status and local rules. We review your documents at the start and tell you clearly what can be built and what approvals are needed before any design work.",
      },
      {
        question: "Do you plan rainwater harvesting and borewells?",
        answer:
          "Yes. Rainwater harvesting, sumps, overhead tanks and borewell provisions are part of the design, especially on outer plots where piped water may not be available.",
      },
    ],
    related: [
      { label: "House Construction in Vidyaranyapura", href: "/house-construction-in-vidyaranyapura" },
      { label: "House Construction in Dasarahalli", href: "/house-construction-in-dasarahalli" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // West Bangalore
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Dasarahalli",
    key: "dasarahalli",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "homes and rental buildings near Tumkur Road and Peenya — design, approvals and construction.",
    subtitle:
      "Homes and rental buildings in Dasarahalli and around Tumkur Road, built stage by stage to an agreed specification.",
    intro:
      "Dasarahalli, along Tumkur Road beside the Peenya industrial area, has strong demand for rental housing from people working nearby. Most enquiries here are for owner-plus-rental buildings, alongside family homes on the quieter streets.",
    context: {
      heading: "Building beside an industrial area",
      body: [
        "Close to a busy highway and industrial estate, noise and dust matter. We position bedrooms away from the main road where the plot allows, and specify windows and finishes that keep the home quieter and easier to clean.",
        "Rental buildings here need durable, low-maintenance finishes — good tiles, sturdy doors, reliable plumbing — because they take more wear than a family home. We specify them with that in mind.",
      ],
    },
    faqs: [
      {
        question: "Which finishes do you recommend for rental units?",
        answer:
          "Durable vitrified tiles, solid doors and frames, good-quality CP fittings and washable paint hold up best. We list the options and their costs in the estimate, so you can decide where to spend.",
      },
      {
        question: "Can you build a small commercial unit on the ground floor?",
        answer:
          "If the zoning and road width allow it, yes. We check what your plot permits before designing.",
      },
    ],
    related: [
      { label: "House Construction in Jalahalli", href: "/house-construction-in-jalahalli" },
      { label: "House Construction in Hesaraghatta Road", href: "/house-construction-in-hesaraghatta-road" },
      { label: "Factory Construction in Bangalore", href: "/factory-construction-in-bangalore" },
      { label: "House Construction in West Bangalore", href: "/house-construction-in-west-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Rajajinagar",
    key: "rajajinagar",
    badge: CITY,
    image: "houseTimber",
    pitch: "rebuilding older houses in an established neighbourhood — demolition, approvals and new construction.",
    subtitle:
      "Rebuilding an older Rajajinagar home into a modern house, with parking, more floors and today's services.",
    intro:
      "Rajajinagar is one of Bangalore's oldest planned residential areas, and many of its houses are now forty or fifty years old. Families here usually build by rebuilding: a modern house with parking, more bedrooms, better light and updated plumbing and wiring on the same plot.",
    context: {
      heading: "Rebuild or renovate?",
      body: [
        "Not every old house needs to come down. If the structure is sound, a thorough renovation or an added floor can cost less. We assess the existing building honestly and give you both options before you decide.",
        "When a rebuild is the right answer, we plan demolition and excavation around the adjoining houses, check the documents and setbacks for the new plan, and design the new house to use the plot fully.",
      ],
    },
    faqs: [
      {
        question: "How do we know whether to rebuild or renovate?",
        answer:
          "We inspect the structure, foundations, dampness and services, then explain what each option involves. If the house is sound and the layout can be made to work, renovation may make more sense; if not, we will say so.",
      },
      {
        question: "Do you also renovate houses in Rajajinagar?",
        answer:
          "Yes. If a rebuild is not the right choice, our renovation team can update the kitchen, bathrooms, flooring, wiring and interiors instead.",
      },
    ],
    related: [
      { label: "Home Renovation in Rajajinagar", href: "/home-renovation-in-rajajinagar" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "House Construction in Malleshwaram", href: "/house-construction-in-malleshwaram" },
      { label: "House Construction in Basaveshwaranagar", href: "/house-construction-in-basaveshwaranagar" },
    ],
  },
  {
    service: "construction",
    place: "Malleshwaram",
    key: "malleshwaram",
    badge: CITY,
    image: "villaWhite",
    pitch: "rebuilds of heritage-era homes with care for neighbours, trees and the street — design to handover.",
    subtitle:
      "New homes on Malleshwaram's old plots, designed to sit well on the street and built with care.",
    intro:
      "Malleshwaram's tree-lined streets and old bungalows give it a character few Bangalore neighbourhoods have. Rebuilding here usually means replacing an ageing house with a modern family home, while keeping a design that feels at home on the street.",
    context: {
      heading: "A modern house that respects the street",
      body: [
        "Many owners here want modern comfort without a glass-and-cladding box. We often design with sloped roofs, verandas, courtyards and natural materials that suit the neighbourhood, and show you the elevation in 3D before anything is fixed.",
        "Old trees on or beside the plot need care. We plan foundations, drainage and the building footprint to protect them where possible, and handle any permissions needed where they cannot be avoided.",
      ],
    },
    faqs: [
      {
        question: "Can you design a traditional-style house with modern services?",
        answer:
          "Yes. Courtyards, sloped roofs, red-oxide or stone floors and wooden details can all be combined with modern plumbing, electrical, lighting and kitchens.",
      },
      {
        question: "Do you also do renovation in Malleshwaram?",
        answer:
          "Yes. If you would rather keep the old house, we can renovate it — waterproofing, rewiring, new bathrooms and kitchen — while keeping its character.",
      },
    ],
    related: [
      { label: "Home Renovation in Malleshwaram", href: "/home-renovation-in-malleshwaram" },
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "House Construction in Rajajinagar", href: "/house-construction-in-rajajinagar" },
      { label: "House Construction in Mathikere", href: "/house-construction-in-mathikere" },
    ],
  },
  {
    service: "construction",
    place: "Basaveshwaranagar",
    key: "basaveshwaranagar",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "independent houses and G+3 rebuilds in West Bangalore — drawings, plan sanction and construction.",
    subtitle:
      "Independent houses and rebuilds in Basaveshwaranagar, built to the drawings and specification you approve.",
    intro:
      "Basaveshwaranagar is a well-established West Bangalore neighbourhood of independent houses on regular layout plots. Owners here typically rebuild older homes as three or four floors, often with a floor for parents, a floor for the family and a floor to rent.",
    context: {
      heading: "A house for several generations",
      body: [
        "Multi-generation homes need thought: a ground floor that elderly parents can use without stairs, a lift provision for later, and privacy between floors. We plan these into the first drawings.",
        "Regular layout plots make design straightforward, but setbacks and the permitted number of floors still depend on plot size and road width. We confirm these first so the plan is approved as drawn.",
      ],
    },
    faqs: [
      {
        question: "Can you plan the ground floor for elderly parents?",
        answer:
          "Yes. A step-free entrance, wider doors, a bathroom with grab rails and non-slip tiles, and a bedroom on the ground floor are all easy to plan in from the start.",
      },
      {
        question: "Can we add a lift later?",
        answer:
          "Yes, if we plan the shaft and pit now. Leaving the space in the structural design costs little and saves major work later.",
      },
    ],
    related: [
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
      { label: "House Construction in Rajajinagar", href: "/house-construction-in-rajajinagar" },
      { label: "House Construction in Vijayanagar", href: "/house-construction-in-vijayanagar" },
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
    ],
  },
  {
    service: "construction",
    place: "Vijayanagar",
    key: "vijayanagar",
    badge: CITY,
    image: "houseTimber",
    pitch: "rebuilds and new homes on established West Bangalore streets — design, approvals and construction.",
    subtitle:
      "Rebuilds and new homes in Vijayanagar, from soil test and drawings to handover.",
    intro:
      "Vijayanagar is a busy, well-connected West Bangalore neighbourhood of older independent houses and commercial streets. Most of the house construction here is rebuilding — replacing a house that has served a family for decades with a larger, modern one.",
    context: {
      heading: "Rebuilding on a busy street",
      body: [
        "On busy roads, getting materials in and debris out needs planning with the traffic and the neighbours. We schedule heavy deliveries for quieter hours and keep the site tidy and safe for passers-by.",
        "Rebuilt houses here often include a ground-floor shop or office where the zoning allows. We check this before design so the plan reflects what you can actually build.",
      ],
    },
    faqs: [
      {
        question: "How long does it take to get the plan sanctioned?",
        answer:
          "It depends on the authority and how complete the documents are. We prepare the drawings and paperwork, track the application, and tell you up front what we need from you.",
      },
      {
        question: "Do you take care of demolition and debris removal?",
        answer:
          "Yes. Demolition, salvage of anything you want to keep, debris removal and site clearing are part of the project.",
      },
    ],
    related: [
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "House Construction in Basaveshwaranagar", href: "/house-construction-in-basaveshwaranagar" },
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
      { label: "Old House Demolition and Rebuild in Bangalore", href: "/old-house-demolition-and-rebuild-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Nagarbhavi",
    key: "nagarbhavi",
    badge: CITY,
    image: "villaRoof",
    pitch: "new homes on layout plots and rebuilds — soil test, plan sanction, structure and finishing.",
    subtitle:
      "New homes on Nagarbhavi's layout plots, built with materials named in the contract and stage-wise payments.",
    intro:
      "Nagarbhavi has a mix of established layouts and newer plots towards the Outer Ring Road and Mysore Road. Many owners are building their first home here; others are rebuilding older houses on larger plots.",
    context: {
      heading: "Getting the structure right",
      body: [
        "Ground conditions vary across the area, from hard rock near the surface to softer soil. A soil test before design tells the structural engineer what foundation the house needs, so you neither overspend nor under-build.",
        "We name the cement, steel, blocks, wiring and pipes in the contract, so the house you get is the house you paid for, and you can check each stage against the specification.",
      ],
    },
    faqs: [
      {
        question: "Is a soil test really necessary?",
        answer:
          "Yes. It tells us how strong the ground is and at what depth, which decides the foundation design. Skipping it either wastes money on an oversized foundation or risks cracks later.",
      },
      {
        question: "Can we see the house in 3D before we approve the plan?",
        answer:
          "Yes. You get floor plans and a 3D elevation, and we revise them with you until you are happy.",
      },
    ],
    related: [
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "House Construction in Vijayanagar", href: "/house-construction-in-vijayanagar" },
      { label: "House Construction in Rajarajeshwari Nagar", href: "/house-construction-in-rajarajeshwari-nagar" },
      { label: "House Construction in Magadi Road", href: "/house-construction-in-magadi-road" },
    ],
  },
  {
    service: "construction",
    place: "Magadi Road",
    key: "magadi-road",
    badge: CITY,
    image: "villaGarden",
    pitch: "independent houses and villas on new plots along Magadi Road — approvals, structure and finishing.",
    subtitle:
      "New homes on Magadi Road's growing layouts, with documents checked and the plan sanctioned before we build.",
    intro:
      "Magadi Road runs west from the city through fast-growing layouts and plotted developments. Plot owners here are often building on land in newer layouts, where checking the approvals and services before construction matters as much as the design.",
    context: {
      heading: "Checking the plot before you build",
      body: [
        "In newer layouts on the city's edge, the layout approval, khata and the authority that sanctions your plan can vary. We go through your documents first and tell you clearly what needs to be in place.",
        "Water and drainage connections may not be available yet. We design the sump, borewell, rainwater harvesting and septic arrangements so the house works now and can connect to mains later.",
      ],
    },
    faqs: [
      {
        question: "Can you help if our plot is in a newly approved layout?",
        answer:
          "Yes. We check the layout approval and your plot documents, and handle the plan sanction with the relevant authority.",
      },
      {
        question: "Do you build villas as well as standard houses?",
        answer:
          "Yes. We design and build independent houses, duplexes and villas, including landscaping and outdoor works.",
      },
    ],
    related: [
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "House Construction in West Bangalore", href: "/house-construction-in-west-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // South Bangalore
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Jayanagar",
    key: "jayanagar",
    badge: CITY,
    image: "houseTimber",
    pitch: "rebuilds of older homes in Jayanagar's blocks — careful demolition, plan sanction and modern construction.",
    subtitle:
      "Rebuilding a Jayanagar home for the next generation — modern layout, parking and services on the same plot.",
    intro:
      "Jayanagar's blocks are full of houses built forty or more years ago. Families here typically rebuild: a new house with more floors, stilt parking, a lift provision and modern services, often designed so parents and children can live on separate floors.",
    context: {
      heading: "Rebuilding in an established neighbourhood",
      body: [
        "Jayanagar's streets are residential and quiet, and neighbours notice everything. We protect adjoining walls during demolition and excavation, keep noisy work to agreed hours and keep the street clean.",
        "Valuable plots deserve careful design. We check setbacks and the number of floors allowed for your plot, then plan floors, parking and staircase to use the site well.",
      ],
    },
    faqs: [
      {
        question: "Can each floor be a separate home for different family members?",
        answer:
          "Yes. We can design each floor as an independent unit with its own kitchen and entrance, connected by a shared staircase and lift, so the family lives close but separately.",
      },
      {
        question: "Do you handle the interiors for the new house too?",
        answer:
          "Yes. We can plan the interiors during construction, so electrical points, plumbing and ceilings suit the kitchen, wardrobes and lighting you want.",
      },
    ],
    related: [
      { label: "Home Renovation in Jayanagar", href: "/home-renovation-in-jayanagar" },
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "House Construction in Basavanagudi", href: "/house-construction-in-basavanagudi" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
    ],
  },
  {
    service: "construction",
    place: "Basavanagudi",
    key: "basavanagudi",
    badge: CITY,
    image: "villaWhite",
    pitch: "rebuilds of traditional homes in one of Bangalore's oldest neighbourhoods — design to handover.",
    subtitle:
      "New homes in Basavanagudi that keep the warmth of a traditional house, built with care for the street.",
    intro:
      "Basavanagudi is one of the oldest neighbourhoods in Bangalore, with traditional houses, temples and narrow, lively streets. Rebuilding here often means replacing a much-loved old house with something modern that still feels like home.",
    context: {
      heading: "Keeping the character, updating everything else",
      body: [
        "Many families want elements of the old house in the new one — a courtyard, a pooja room in the right place, wooden doors or pillars. We can salvage and reuse pieces from the old house and design around traditional layouts.",
        "Narrow streets mean small vehicles and careful scheduling for materials and debris. We plan logistics so the work does not block the street or disturb neighbours more than necessary.",
      ],
    },
    faqs: [
      {
        question: "Can you reuse old doors or pillars from our house?",
        answer:
          "Often, yes. We identify what can be salvaged before demolition, restore it and design it into the new house.",
      },
      {
        question: "Can you follow Vastu in the new design?",
        answer:
          "Yes. Tell us which principles matter to you — entrance direction, kitchen, pooja room, master bedroom — and we plan the layout around them.",
      },
    ],
    related: [
      { label: "Interior Designers in Basavanagudi", href: "/interior-designers-in-basavanagudi" },
      { label: "House Construction in Jayanagar", href: "/house-construction-in-jayanagar" },
      { label: "House Construction in Banashankari", href: "/house-construction-in-banashankari" },
      { label: "Vastu-Compliant House Construction in Bangalore", href: "/vastu-compliant-house-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Banashankari",
    key: "banashankari",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "independent houses, rebuilds and rental floors across Banashankari's stages — design to handover.",
    subtitle:
      "Independent houses and rebuilds across Banashankari, with drawings, approvals and construction by one team.",
    intro:
      "Banashankari spans several stages, from long-established streets near the temple to newer layouts further out. Enquiries here range from rebuilding a parent's house to building a new G+2 or G+3 home with rental floors on a layout plot.",
    context: {
      heading: "From old stages to new layouts",
      body: [
        "In the older stages, rebuilds dominate — careful demolition, protecting adjoining houses and making the most of a fixed plot. In the newer stages, the work is new construction on vacant plots, where soil, access and services need checking first.",
        "Either way, we give you a detailed estimate with brands and grades named, and link payments to completed stages, so you can compare our quote fairly with others.",
      ],
    },
    faqs: [
      {
        question: "Do you build only on large plots?",
        answer:
          "No. We build on plots of all common sizes, including 20x30 and 30x40 sites. Smaller plots need more careful planning, which is where good design helps most.",
      },
      {
        question: "Can you renovate instead of rebuilding?",
        answer:
          "Yes. We also renovate homes in Banashankari. We will tell you honestly which option makes more sense for your house.",
      },
    ],
    related: [
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
      { label: "House Construction in Kanakapura Road", href: "/house-construction-in-kanakapura-road" },
    ],
  },
  {
    service: "construction",
    place: "Kanakapura Road",
    key: "kanakapura-road",
    badge: CITY,
    image: "villaGarden",
    pitch: "villas and independent houses on Kanakapura Road's layouts — documents, approvals and construction.",
    subtitle:
      "Villas and family homes on Kanakapura Road, from document checks and drawings to handover.",
    intro:
      "Kanakapura Road has become one of South Bangalore's main growth corridors, with plotted layouts, villa communities and land further out towards the hills. Many owners here are building spacious family homes or villas on plots they bought years ago.",
    context: {
      heading: "Building on a growth corridor",
      body: [
        "Layouts along the road were approved at different times by different authorities, so we check the layout approval, khata and conversion status before design. That avoids surprises at plan sanction.",
        "Plots further out often depend on borewells and tankers. We plan rainwater harvesting, sumps and water storage so the house is comfortable from day one.",
      ],
    },
    faqs: [
      {
        question: "Can you build a villa in a gated plotted community?",
        answer:
          "Yes. We follow the community's design guidelines along with the planning rules, and coordinate approvals with the association.",
      },
      {
        question: "Do you supervise sites this far from Yelahanka?",
        answer:
          "Yes. We take on house construction across Bangalore, with a site engineer assigned to your project and regular photo updates.",
      },
    ],
    related: [
      { label: "Interior Designers in Kanakapura Road", href: "/interior-designers-in-kanakapura-road" },
      { label: "House Construction in Banashankari", href: "/house-construction-in-banashankari" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Bannerghatta Road",
    key: "bannerghatta-road",
    badge: CITY,
    image: "houseTimber",
    pitch: "independent houses and rebuilds in the layouts off Bannerghatta Road — design, approvals and construction.",
    subtitle:
      "Independent houses in the layouts off Bannerghatta Road, built stage by stage to an agreed specification.",
    intro:
      "Bannerghatta Road is lined with apartments, but the layouts on either side — around Arekere, Hulimavu and beyond — have many independent house plots. Owners here build family homes, rental buildings and the occasional villa.",
    context: {
      heading: "Working around a busy road",
      body: [
        "Traffic on the main road makes deliveries slow, so we plan material movements for off-peak hours and keep enough stock on site that work does not stop for a late truck.",
        "Some layouts near lakes are low-lying. On those plots we raise the plinth and plan drainage carefully to keep water out of the ground floor during heavy rain.",
      ],
    },
    faqs: [
      {
        question: "Our plot is near a lake. Is that a problem?",
        answer:
          "Not usually, but it needs care. We check buffer-zone rules, raise the plinth where needed, and design drainage so rainwater flows away from the house.",
      },
      {
        question: "Can we see a detailed estimate before signing?",
        answer:
          "Yes. You get an estimate with each stage and the brands and grades of key materials named, so you can compare it fairly with other quotes.",
      },
    ],
    related: [
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
      { label: "House Construction in Begur", href: "/house-construction-in-begur" },
      { label: "House Construction in South Bangalore", href: "/house-construction-in-south-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Begur",
    key: "begur",
    badge: CITY,
    image: "villaRoof",
    pitch: "new homes and rental buildings on Begur's layout plots — soil test, approvals and construction.",
    subtitle:
      "New homes and rental buildings in Begur, with documents checked and materials named in the contract.",
    intro:
      "Begur, between Bannerghatta Road and Hosur Road, has seen many new layouts come up. Owners here build family homes and rental buildings aimed at people working in Electronic City and the nearby tech parks.",
    context: {
      heading: "Building in a fast-growing area",
      body: [
        "Newer layouts sometimes have incomplete roads and services. We check access for construction vehicles, water and power availability, and drainage before finalising the design.",
        "Rental demand from nearby tech parks favours well-designed compact units. We plan unit layouts, parking and water storage for the number of households the building will serve.",
      ],
    },
    faqs: [
      {
        question: "Can we build rental units to suit tech-park tenants?",
        answer:
          "Yes. Compact, well-ventilated 1BHK and 2BHK units with parking and reliable water are common. We show you layout options and the number of units each gives.",
      },
      {
        question: "Do you check the khata and layout approval?",
        answer:
          "Yes. We review your documents at the start and tell you if anything needs to be sorted before plan sanction.",
      },
    ],
    related: [
      { label: "Interior Designers in Begur", href: "/interior-designers-in-begur" },
      { label: "House Construction in Bannerghatta Road", href: "/house-construction-in-bannerghatta-road" },
      { label: "House Construction in Electronic City", href: "/house-construction-in-electronic-city" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Electronic City",
    key: "electronic-city",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "independent houses and rental buildings around Electronic City — design, approvals and construction.",
    subtitle:
      "Homes and rental buildings around Electronic City, planned for tenants and built to a written specification.",
    intro:
      "Electronic City is best known for its tech campuses, but the villages and layouts around it — Neeladri Road, Doddathogur, Hebbagodi and beyond — are full of independent house plots. Most construction here is owner-plus-rental, serving the large workforce nearby.",
    context: {
      heading: "Building for the tech-park market",
      body: [
        "The plots around Electronic City fall under different authorities depending on location, so we confirm which one applies and what it allows before design.",
        "Tenants here expect parking, power backup provision, reliable water and good ventilation. We plan these into every unit so the building rents well and stays easy to maintain.",
      ],
    },
    faqs: [
      {
        question: "Can you provide power backup provision for all units?",
        answer:
          "Yes. We plan wiring for an inverter or a shared generator so each unit's essential circuits are backed up.",
      },
      {
        question: "Do you also do office interiors in Electronic City?",
        answer:
          "Yes. Alongside house construction, we design and fit out offices.",
      },
    ],
    related: [
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Office Interior Design in Electronic City", href: "/office-interior-design-in-electronic-city" },
      { label: "Home Renovation in Electronic City", href: "/home-renovation-in-electronic-city" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "HSR Layout",
    key: "hsr-layout",
    badge: CITY,
    image: "houseTimber",
    pitch: "premium independent houses and rebuilds in HSR's sectors — design, plan sanction and construction.",
    subtitle:
      "Premium homes in HSR Layout, designed to use the plot fully and built to the specification you sign off.",
    intro:
      "HSR Layout is a planned layout of independent house plots in sectors, close to Koramangala and the Outer Ring Road. Owners here build premium family homes, homes with a rental floor, and sometimes small office buildings where the zoning allows.",
    context: {
      heading: "Designing for a planned layout",
      body: [
        "HSR's regular plots make planning clear, but setbacks, floors allowed and parking requirements still depend on plot size and road width. We check them first and design to the limit without overbuilding.",
        "Owners here often want a strong modern elevation, a home office, a terrace garden and good acoustics on busy roads. We plan these in from the first drawings.",
      ],
    },
    faqs: [
      {
        question: "Can we have a home office with a separate entrance?",
        answer:
          "Yes. A ground-floor or top-floor office with its own entrance is easy to plan, and keeps work and home separate.",
      },
      {
        question: "Do you also renovate homes in HSR Layout?",
        answer:
          "Yes. We renovate kitchens, bathrooms, flooring and interiors as well as building new homes.",
      },
    ],
    related: [
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
      { label: "House Construction in BTM Layout", href: "/house-construction-in-btm-layout" },
      { label: "Office Interior Designers in HSR Layout", href: "/office-interior-designers-in-hsr-layout" },
    ],
  },
  {
    service: "construction",
    place: "BTM Layout",
    key: "btm-layout",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "rebuilds and rental buildings in BTM Layout — careful demolition, approvals and construction.",
    subtitle:
      "Rebuilds and rental buildings in BTM Layout, planned for tenants and built stage by stage.",
    intro:
      "BTM Layout is dense, busy and full of tenants — students, young professionals and families who want to live close to Koramangala and the Outer Ring Road. Owners rebuilding here usually plan several rental units, with or without a floor for themselves.",
    context: {
      heading: "Rebuilding in a dense neighbourhood",
      body: [
        "Houses in BTM sit close together on narrow streets. We plan demolition, excavation and deliveries to protect neighbouring buildings and keep the street usable.",
        "Rental buildings need good light and ventilation even when plots are tight. We use light wells, careful window placement and cross-ventilation to keep every unit pleasant.",
      ],
    },
    faqs: [
      {
        question: "How many units can we build on our plot?",
        answer:
          "That depends on the plot size, road width and permitted floor area. We check these and draw layout options showing how many units each one gives.",
      },
      {
        question: "Can you manage the project while we live abroad?",
        answer:
          "Yes. Many of our clients are not in Bangalore during construction. We share drawings online, take approvals over video calls and send regular photo and video updates.",
      },
    ],
    related: [
      { label: "Interior Designers in BTM Layout", href: "/interior-designers-in-btm-layout" },
      { label: "House Construction in HSR Layout", href: "/house-construction-in-hsr-layout" },
      { label: "House Construction in JP Nagar", href: "/house-construction-in-jp-nagar" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  // -------------------------------------------------------------------------
  // East Bangalore
  // -------------------------------------------------------------------------
  {
    service: "construction",
    place: "Whitefield",
    key: "whitefield",
    badge: CITY,
    image: "villaWhite",
    pitch: "independent houses, villas and rental buildings around Whitefield — design, approvals and construction.",
    subtitle:
      "Villas, family homes and rental buildings in and around Whitefield, from plot check to handover.",
    intro:
      "Whitefield has grown from a quiet suburb into one of Bangalore's largest tech hubs. Around the campuses are layouts and villages with independent house plots, where owners build villas, family homes and rental buildings for the people who work nearby.",
    context: {
      heading: "Building around the tech hub",
      body: [
        "Plots around Whitefield range from established layouts to former village land. Approvals, khata and services differ widely, so we check your documents and the plot before design.",
        "Water is a common concern in the area. We plan rainwater harvesting, recharge pits, sumps and storage to reduce dependence on tankers.",
      ],
    },
    faqs: [
      {
        question: "Can you build a villa with a home office for remote work?",
        answer:
          "Yes. A quiet, well-lit home office with good acoustics, data cabling and power backup is easy to plan into the design.",
      },
      {
        question: "Do you also do interiors and renovation in Whitefield?",
        answer:
          "Yes. We do home interiors, modular kitchens and renovation in Whitefield as well as new construction.",
      },
    ],
    related: [
      { label: "Home Renovation in Whitefield", href: "/home-renovation-in-whitefield" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "House Construction in Varthur", href: "/house-construction-in-varthur" },
      { label: "House Construction in Kadugodi", href: "/house-construction-in-kadugodi" },
    ],
  },
  {
    service: "construction",
    place: "Kadugodi",
    key: "kadugodi",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "homes and rental buildings near Whitefield and Hoskote Road — design, approvals and construction.",
    subtitle:
      "Homes and rental buildings in Kadugodi, designed for the plot and built to a written specification.",
    intro:
      "Kadugodi, at the eastern edge of Whitefield, combines an old village core with newer layouts. Rental demand from Whitefield's campuses is strong, and many owners here build homes with several rental units.",
    context: {
      heading: "Rental buildings that last",
      body: [
        "Rental buildings take heavy wear, so we specify durable tiles, solid doors, good plumbing fittings and washable paint, and keep services accessible for repairs.",
        "We plan sumps, overhead tanks and rainwater harvesting for the number of households, and separate meters so each unit is billed independently.",
      ],
    },
    faqs: [
      {
        question: "Can each rental unit have its own electricity meter?",
        answer:
          "Yes. We design separate meters and distribution boards for each unit, and apply for the connections along with the building.",
      },
      {
        question: "Do you build in the older village area too?",
        answer:
          "Yes, after checking the documents and access. Narrow lanes need careful planning for materials and equipment.",
      },
    ],
    related: [
      { label: "Interior Designers in Kadugodi", href: "/interior-designers-in-kadugodi" },
      { label: "House Construction in Whitefield", href: "/house-construction-in-whitefield" },
      { label: "House Construction in Hoskote", href: "/house-construction-in-hoskote" },
      { label: "House Construction in East Bangalore", href: "/house-construction-in-east-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Varthur",
    key: "varthur",
    badge: CITY,
    image: "villaGarden",
    pitch: "villas and independent houses around Varthur and Gunjur — documents, drainage and construction.",
    subtitle:
      "Villas and family homes around Varthur, with plot checks, drainage planning and construction by one team.",
    intro:
      "Varthur and Gunjur, between Whitefield and Sarjapur Road, have many villa communities and plotted layouts. Owners here build spacious homes, often villas with gardens, close to the eastern tech corridors.",
    context: {
      heading: "Plots near lakes and low-lying land",
      body: [
        "Parts of the area are close to lakes and drains. We check buffer-zone rules, set the plinth level and plan storm-water drainage so the house stays dry in heavy rain.",
        "Gated villa communities often have their own design guidelines. We design within them and coordinate approvals with the association.",
      ],
    },
    faqs: [
      {
        question: "How do you protect a ground floor from flooding?",
        answer:
          "We set the plinth above the likely water level, slope the site away from the house, provide adequate drains and, where needed, a sump with a pump for the driveway.",
      },
      {
        question: "Can you build a villa with landscaping and a pool?",
        answer:
          "Yes. We design and build the house, landscape, pool and outdoor services as one project.",
      },
    ],
    related: [
      { label: "Interior Designers in Varthur", href: "/interior-designers-in-varthur" },
      { label: "House Construction in Whitefield", href: "/house-construction-in-whitefield" },
      { label: "House Construction in Sarjapur", href: "/house-construction-in-sarjapur" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Marathahalli",
    key: "marathahalli",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "rental buildings and rebuilds near the Outer Ring Road — design, approvals and construction.",
    subtitle:
      "Rental buildings and rebuilds in Marathahalli, planned around tenants and built stage by stage.",
    intro:
      "Marathahalli sits on the Outer Ring Road, surrounded by tech parks. Rental demand is high, and most construction here is owners rebuilding older houses or developing plots into buildings with several rental units.",
    context: {
      heading: "Building on a busy corridor",
      body: [
        "Traffic around the Outer Ring Road makes logistics a real constraint. We plan deliveries for off-peak hours and keep the site organised to avoid delays.",
        "Rental units here need parking, reliable water and good ventilation to rent well. We plan these into the design and specify finishes that are easy to maintain between tenants.",
      ],
    },
    faqs: [
      {
        question: "Can we build a commercial ground floor with rentals above?",
        answer:
          "If the zoning and road width allow it, yes. We check what your plot permits before design.",
      },
      {
        question: "Do you also fit out offices in Marathahalli?",
        answer:
          "Yes. We design and build office interiors as well as residential buildings.",
      },
    ],
    related: [
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "Modular Kitchen in Marathahalli", href: "/modular-kitchen-in-marathahalli" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "Office Interior Designers in Marathahalli", href: "/office-interior-designers-in-marathahalli" },
    ],
  },
  {
    service: "construction",
    place: "KR Puram",
    key: "kr-puram",
    badge: CITY,
    image: "houseTimber",
    pitch: "independent houses and rental buildings off Old Madras Road — design, approvals and construction.",
    subtitle:
      "Homes and rental buildings in KR Puram, built with materials named in the contract and stage-wise payments.",
    intro:
      "KR Puram, at the junction of Old Madras Road and the Outer Ring Road, is a busy and well-connected area. Owners here build family homes and rental buildings, often on plots in the layouts behind the main roads.",
    context: {
      heading: "Good connectivity, careful logistics",
      body: [
        "Busy junctions make construction logistics harder. We plan material deliveries and debris removal to fit the traffic and keep the site safe for neighbours.",
        "Plots in older layouts sometimes have document or boundary issues. We check the papers and measurements at the start so the plan is sanctioned without delays.",
      ],
    },
    faqs: [
      {
        question: "Can you help with documents before we start?",
        answer:
          "Yes. We review your title deed, khata and tax receipts and tell you what is needed for plan sanction.",
      },
      {
        question: "How are payments structured?",
        answer:
          "Payments are linked to completed stages — foundation, each slab, brickwork, plastering and finishing — and written into the contract.",
      },
    ],
    related: [
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "House Construction in Ramamurthy Nagar", href: "/house-construction-in-ramamurthy-nagar" },
      { label: "House Construction in Hoodi", href: "/house-construction-in-hoodi" },
      { label: "House Construction in Marathahalli", href: "/house-construction-in-marathahalli" },
    ],
  },
  {
    service: "construction",
    place: "Hoodi",
    key: "hoodi",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "homes and rental buildings near ITPL and Whitefield — design, plan sanction and construction.",
    subtitle:
      "Homes and rental buildings in Hoodi, planned for the plot and the tenants, and built stage by stage.",
    intro:
      "Hoodi, between KR Puram and Whitefield, is close to ITPL and several large tech parks. Most owners building here plan a family home with rental units, or a full rental building, to serve the people working nearby.",
    context: {
      heading: "Designing units that rent well",
      body: [
        "We draw layout options with different unit mixes and show you how many units, parking spaces and how much carpet area each gives, so you can choose with the numbers in front of you.",
        "Each unit gets its own meter, water line and access, with durable finishes that are easy to maintain between tenants.",
      ],
    },
    faqs: [
      {
        question: "Can you design studio units?",
        answer:
          "Yes, where the rules allow. We plan studios with a compact kitchen, good storage and ventilation.",
      },
      {
        question: "Do you provide the interiors for rental units?",
        answer:
          "Yes. We can fit wardrobes, kitchens and basic furnishing so the units are ready to let.",
      },
    ],
    related: [
      { label: "Interior Designers in Hoodi", href: "/interior-designers-in-hoodi" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "House Construction in Whitefield", href: "/house-construction-in-whitefield" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "CV Raman Nagar",
    key: "cv-raman-nagar",
    badge: CITY,
    image: "houseTimber",
    pitch: "rebuilds and independent houses in CV Raman Nagar — careful demolition, approvals and construction.",
    subtitle:
      "Rebuilding or building new in CV Raman Nagar, with drawings, approvals and construction by one team.",
    intro:
      "CV Raman Nagar is a settled residential area between Indiranagar and the eastern tech corridors. Many houses here were built decades ago, and owners are now rebuilding them as modern homes, often with a rental floor.",
    context: {
      heading: "Rebuilding an older home",
      body: [
        "We assess the existing house first. If the structure is sound, renovation or adding a floor may be the better option; if not, we plan a rebuild with careful demolition near the neighbours.",
        "New homes here often include stilt parking, a lift provision and a rental unit. We plan the floors around your family's needs and the plot's limits.",
      ],
    },
    faqs: [
      {
        question: "Can you tell us whether our house can take another floor?",
        answer:
          "Yes. We check the foundation, columns and existing drawings if available, and tell you honestly whether an extra floor is safe.",
      },
      {
        question: "Do you also do interiors for the new house?",
        answer:
          "Yes. We can design the interiors during construction so services and ceilings match the kitchen, wardrobes and lighting.",
      },
    ],
    related: [
      { label: "Interior Designers in CV Raman Nagar", href: "/interior-designers-in-cv-raman-nagar" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
      { label: "House Construction in East Bangalore", href: "/house-construction-in-east-bangalore" },
    ],
  },
]
