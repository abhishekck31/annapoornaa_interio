/**
 * Renovation, modular kitchen, interior and office interior locality pages,
 * December 2026 batch (44 pages). Same rules as localities.ts: only what is
 * specific to the area lives here; the service profile in build.ts supplies the
 * rest. No builders, projects, distances or prices are named.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"
const CITY = "Design-and-build across Bangalore"

const renovation: LocalInput[] = [
  {
    service: "renovation",
    place: "Hennur",
    key: "hennur",
    badge: NORTH,
    image: "bathroom",
    pitch: "kitchen, bathroom and full-home renovation for apartments and independent houses along Hennur Road.",
    subtitle: "Renovating Hennur homes — kitchens, bathrooms, flooring and rewiring — under one supervisor and one quote.",
    intro:
      "Hennur has both new gated communities and older independent houses in the villages and layouts along the main road. Renovation enquiries here split two ways: owners of five-to-ten-year-old flats updating builder-grade kitchens and bathrooms, and families modernising houses that have grown floor by floor.",
    context: {
      heading: "Two kinds of renovation in Hennur",
      body: [
        "In apartments, the work is usually inside a fixed shell — new kitchen, bathroom upgrades, wardrobes and painting — and it must follow the association's rules on working hours, lifts and debris. We plan to those rules from the start.",
        "In older independent houses, we often find seepage, tired wiring and plumbing that need fixing before anything cosmetic. We survey for those first, so the new finishes last.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate a flat in a gated community without disturbing neighbours?",
        answer:
          "Yes. We follow the association's working hours, protect common areas and lifts, remove debris daily and keep noisy work to the permitted times.",
      },
      {
        question: "Do you fix terrace leaks in independent houses?",
        answer:
          "Yes. We find where the water is getting in, repair cracks, re-do the terrace waterproofing and then repair the ceilings and walls below.",
      },
    ],
    related: [
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "Home Renovation in Thanisandra", href: "/home-renovation-in-thanisandra" },
      { label: "Home Renovation in Kalyan Nagar", href: "/home-renovation-in-kalyan-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Thanisandra",
    key: "thanisandra",
    badge: NORTH,
    image: "washroom",
    pitch: "apartment renovation — kitchen upgrades, bathroom remodelling, flooring and painting — near Manyata.",
    subtitle: "Upgrading Thanisandra apartments: better kitchens, remodelled bathrooms and a fresh finish throughout.",
    intro:
      "Many of Thanisandra's apartments were handed over with basic builder kitchens and bathrooms. A few years on, owners want to upgrade — a proper modular kitchen, bathrooms with better tiles and fittings, wooden or new vitrified flooring, and a full repaint before re-letting or moving in themselves.",
    context: {
      heading: "Renovating a flat, room by room",
      body: [
        "If you are living in the flat, we phase the work so one bathroom and a usable kitchen are always available. Kitchen units are made off site, so the kitchen is out of use for as short a time as possible.",
        "Owners who rent out their flats often renovate between tenants. We can plan a tight, dated schedule so the flat is back on the market quickly.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate our flat between tenants?",
        answer:
          "Yes. We survey the flat, agree the scope and give you a dated schedule, so you can plan the next tenancy around it.",
      },
      {
        question: "Can we keep the existing flooring and just change the kitchen and bathrooms?",
        answer:
          "Yes. Renovation scope is entirely your choice. We will point out anything we think needs attention, but you decide what to include.",
      },
    ],
    related: [
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "Modular Kitchen in Thanisandra", href: "/modular-kitchen-in-thanisandra" },
      { label: "Home Renovation in Hennur", href: "/home-renovation-in-hennur" },
      { label: "Home Renovation in Jakkur", href: "/home-renovation-in-jakkur" },
    ],
  },
  {
    service: "renovation",
    place: "Jakkur",
    key: "jakkur",
    badge: NORTH,
    image: "stoneWall",
    pitch: "home renovation for villas, independent houses and apartments — civil, waterproofing and interiors.",
    subtitle: "Renovation in Jakkur, minutes from our Yelahanka office — villas, houses and flats, done by one team.",
    intro:
      "Jakkur sits just south of Yelahanka, with villa communities, independent houses and apartments around the lake and the old village. It is very close to our office, so we can survey quickly and supervise often.",
    context: {
      heading: "Renovating villas and larger homes",
      body: [
        "Villa renovation often covers several things at once — re-doing bathrooms, updating the kitchen, changing flooring, upgrading lighting and refreshing the exterior. We sequence the trades so the house is not torn up longer than necessary.",
        "Older villas can show seepage around windows, terraces and bathrooms. We trace and fix the cause before repairing plaster and paint.",
      ],
    },
    faqs: [
      {
        question: "Can you repaint the exterior of a villa?",
        answer:
          "Yes. We repair cracks, treat damp patches and repaint with exterior-grade paint, along with any interior work.",
      },
      {
        question: "How quickly can you visit?",
        answer:
          "Jakkur is close to our Yelahanka office, so we can usually schedule a site survey soon after you get in touch.",
      },
    ],
    related: [
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
      { label: "House Construction in Jakkur", href: "/house-construction-in-jakkur" },
      { label: "Modular Kitchen in Jakkur", href: "/modular-kitchen-in-jakkur" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
  {
    service: "renovation",
    place: "Kalyan Nagar",
    key: "kalyan-nagar",
    badge: NORTH,
    image: "livingMarble",
    pitch: "premium home renovation — kitchens, bathrooms, flooring and interiors for houses and apartments.",
    subtitle: "Premium renovations in Kalyan Nagar and HRBR Layout, designed first and delivered by one team.",
    intro:
      "Kalyan Nagar and HRBR Layout have many well-built houses from the 1990s and 2000s that now need updating. Owners here usually want a renovation that feels like a new home — open kitchen, modern bathrooms, new flooring and better lighting — without rebuilding.",
    context: {
      heading: "A new home inside an existing house",
      body: [
        "Bigger changes — opening up a kitchen, combining rooms, moving a bathroom — need a structural check before work starts. We assess walls and beams and tell you what can safely change.",
        "We show you the renovated rooms in 3D before work begins, so you can see the result and adjust the design and budget first.",
      ],
    },
    faqs: [
      {
        question: "Can you remove a wall to open up the kitchen?",
        answer:
          "Often, yes — but only after checking whether it is load-bearing. If it is, we design a beam or other support so it can be removed safely.",
      },
      {
        question: "Do you show a design before renovation starts?",
        answer:
          "Yes. You get layouts and 3D views of the main rooms with the finishes we propose, plus an itemised quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "House Construction in Kalyan Nagar", href: "/house-construction-in-kalyan-nagar" },
      { label: "Home Renovation in Banaswadi", href: "/home-renovation-in-banaswadi" },
      { label: "Home Renovation in Hennur", href: "/home-renovation-in-hennur" },
    ],
  },
  {
    service: "renovation",
    place: "Banaswadi",
    key: "banaswadi",
    badge: NORTH,
    image: "bathroom",
    pitch: "renovating older houses — seepage repair, rewiring, new bathrooms, kitchens and flooring.",
    subtitle: "Bringing older Banaswadi houses up to date — dry walls, safe wiring, new bathrooms and kitchens.",
    intro:
      "Banaswadi's independent houses are often decades old, with original wiring, galvanised pipes and mosaic floors. Renovation here is usually about making the house sound and comfortable again, then making it look new.",
    context: {
      heading: "Fixing the basics first",
      body: [
        "Old wiring can be unsafe for today's appliances. We check the distribution board, earthing and cable sizes and rewire where needed, adding points where you actually use them.",
        "Damp walls usually come from leaking pipes, failed bathroom waterproofing or the terrace. We find the source before any new plaster or paint goes on.",
      ],
    },
    faqs: [
      {
        question: "Do we need to rewire the whole house?",
        answer:
          "Not always. We inspect the existing wiring and tell you whether a full rewire is needed or whether targeted changes are enough.",
      },
      {
        question: "Can you replace old mosaic flooring?",
        answer:
          "Yes. We can lay vitrified tiles, marble or wooden flooring over or in place of mosaic, after checking the floor levels and door heights.",
      },
    ],
    related: [
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "House Construction in Banaswadi", href: "/house-construction-in-banaswadi" },
      { label: "Home Renovation in Kalyan Nagar", href: "/home-renovation-in-kalyan-nagar" },
      { label: "Home Renovation in Horamavu", href: "/home-renovation-in-horamavu" },
    ],
  },
  {
    service: "renovation",
    place: "Horamavu",
    key: "horamavu",
    badge: NORTH,
    image: "washroom",
    pitch: "home renovation for apartments and independent houses — bathrooms, kitchens, flooring and painting.",
    subtitle: "Renovating homes in Horamavu — bathrooms, kitchens and floors — with one itemised quote.",
    intro:
      "Horamavu has a large stock of apartments and independent houses built over the last fifteen to twenty years. Many now need their first serious renovation — bathrooms that leak, kitchens that no longer work, and floors and walls that look tired.",
    context: {
      heading: "Bathrooms done properly",
      body: [
        "A bathroom renovation is only as good as its waterproofing. We remove old tiles, waterproof the floor and the lower walls, test it, and only then tile — so the leak into the room below does not come back.",
        "Concealed plumbing, new sanitaryware, a glass shower partition and better ventilation turn an old bathroom into a modern one in the same footprint.",
      ],
    },
    faqs: [
      {
        question: "Our bathroom leaks into the flat below. Can you fix it?",
        answer:
          "Yes. We find the source, which is usually failed waterproofing or a leaking joint, fix it properly, test it, and then retile.",
      },
      {
        question: "Can you renovate just one bathroom?",
        answer:
          "Yes. We take on single-room jobs as well as full-home renovations.",
      },
    ],
    related: [
      { label: "Interior Designers in Horamavu", href: "/interior-designers-in-horamavu" },
      { label: "House Construction in Horamavu", href: "/house-construction-in-horamavu" },
      { label: "Modular Kitchen in Horamavu", href: "/modular-kitchen-in-horamavu" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "RT Nagar",
    key: "rt-nagar",
    badge: NORTH,
    image: "stoneWall",
    pitch: "renovating older independent houses — waterproofing, rewiring, kitchens, bathrooms and interiors.",
    subtitle: "Updating RT Nagar's older homes without rebuilding — sound structure, new services, fresh interiors.",
    intro:
      "RT Nagar's independent houses are solid but often dated. Not every family wants to rebuild; many would rather keep the house and renovate thoroughly — new kitchen and bathrooms, rewiring, waterproofing and new interiors.",
    context: {
      heading: "Renovate instead of rebuild",
      body: [
        "A well-built older house can be given years more life with the right renovation. We assess the structure and services and tell you honestly whether renovation is sensible for your house.",
        "We plan the work so the family can stay where possible, moving room by room and keeping one bathroom and the kitchen usable.",
      ],
    },
    faqs: [
      {
        question: "Is our house worth renovating or should we rebuild?",
        answer:
          "We inspect it and explain both options. If the structure is sound and the layout can work, renovation is often the better value; if not, we will tell you.",
      },
      {
        question: "Can you add a bathroom to an existing bedroom?",
        answer:
          "Often, yes. We check where drainage can run and whether the room has space, then plan the plumbing and waterproofing.",
      },
    ],
    related: [
      { label: "Interior Designers in RT Nagar", href: "/interior-designers-in-rt-nagar" },
      { label: "House Construction in RT Nagar", href: "/house-construction-in-rt-nagar" },
      { label: "Home Renovation in Sahakar Nagar", href: "/home-renovation-in-sahakar-nagar" },
      { label: "Home Renovation in Mathikere", href: "/home-renovation-in-mathikere" },
    ],
  },
  {
    service: "renovation",
    place: "Mathikere",
    key: "mathikere",
    badge: NORTH,
    image: "bathroom",
    pitch: "renovating homes and rental units — bathrooms, kitchens, flooring, painting and repairs.",
    subtitle: "Renovating Mathikere homes and rental floors, so they are comfortable to live in and easy to let.",
    intro:
      "Mathikere has many houses with rental floors let to students and professionals. Owners here renovate both their own home and their rental units — updating bathrooms and kitchens, fixing leaks and repainting between tenancies.",
    context: {
      heading: "Renovating rental units",
      body: [
        "Rental units need durable, easy-to-clean finishes rather than delicate ones. We recommend materials that look good and stand up to turnover.",
        "We can renovate one unit at a time so the rest of the building keeps earning, with work scheduled to suit your tenants.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate one rental unit while others are occupied?",
        answer:
          "Yes. We keep noise and dust to agreed hours, protect shared areas and keep water and power interruptions to a minimum.",
      },
      {
        question: "Do you do small repairs as well as full renovations?",
        answer:
          "We focus on planned renovation work rather than one-off repairs, but leak fixes, retiling and repainting are often part of a unit refresh.",
      },
    ],
    related: [
      { label: "Interior Designers in Mathikere", href: "/interior-designers-in-mathikere" },
      { label: "House Construction in Mathikere", href: "/house-construction-in-mathikere" },
      { label: "Home Renovation in RT Nagar", href: "/home-renovation-in-rt-nagar" },
      { label: "Home Renovation in Yeshwanthpur", href: "/home-renovation-in-yeshwanthpur" },
    ],
  },
  {
    service: "renovation",
    place: "Yeshwanthpur",
    key: "yeshwanthpur",
    badge: NORTH,
    image: "livingTv",
    pitch: "apartment and house renovation — kitchens, bathrooms, flooring, false ceilings and painting.",
    subtitle: "Apartment and house renovation in Yeshwanthpur, planned room by room with one itemised quote.",
    intro:
      "Yeshwanthpur has large apartment complexes alongside older houses near the main roads. Renovation here ranges from refreshing a flat's kitchen and bathrooms to fully updating an independent house.",
    context: {
      heading: "Renovating a flat in a large complex",
      body: [
        "Big complexes have strict rules on working hours, lift use and debris. We plan the job around them and handle the association paperwork with you.",
        "Most flat renovations combine a new kitchen, bathroom upgrades, a false ceiling with better lighting and a full repaint. We give one itemised quote covering everything.",
      ],
    },
    faqs: [
      {
        question: "Do you get permission from our association?",
        answer:
          "We prepare what the association usually asks for — scope, schedule and contact details — and follow its rules. The application itself is usually made by the owner.",
      },
      {
        question: "Can you add a false ceiling during renovation?",
        answer:
          "Yes. We design the ceiling and lighting together, and route any new wiring before it is closed.",
      },
    ],
    related: [
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "House Construction in Yeshwanthpur", href: "/house-construction-in-yeshwanthpur" },
      { label: "Home Renovation in Mathikere", href: "/home-renovation-in-mathikere" },
      { label: "False Ceiling Contractors in Bangalore", href: "/false-ceiling-contractors-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Vidyaranyapura",
    key: "vidyaranyapura",
    badge: NORTH,
    image: "stoneWall",
    pitch: "renovating independent houses — terraces, bathrooms, kitchens, flooring and full-home updates.",
    subtitle: "Renovation for Vidyaranyapura's independent houses, close to our Yelahanka office.",
    intro:
      "Vidyaranyapura is a settled area of independent houses, many extended over the years. Renovation work here often deals with the joins between old and new parts of a house — leaks, cracks and mismatched floors — along with new kitchens and bathrooms.",
    context: {
      heading: "Houses that have grown over time",
      body: [
        "Where a floor was added later, joints between old and new work are common sources of leaks and cracks. We inspect them carefully and fix the cause before refinishing.",
        "Rooms in extended houses are rarely standard sizes, so we measure and design wardrobes, kitchens and storage to fit exactly.",
      ],
    },
    faqs: [
      {
        question: "There are cracks where our new floor meets the old one. Can you fix them?",
        answer:
          "Yes. We check whether the cracks are structural or just in the plaster, fix the cause, and then repair and repaint.",
      },
      {
        question: "Can you do the renovation and interiors together?",
        answer:
          "Yes. Civil work, waterproofing, plumbing, electrical and interiors are handled by one team under one quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Vidyaranyapura", href: "/interior-designers-in-vidyaranyapura" },
      { label: "House Construction in Vidyaranyapura", href: "/house-construction-in-vidyaranyapura" },
      { label: "Modular Kitchen in Vidyaranyapura", href: "/modular-kitchen-in-vidyaranyapura" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
  {
    service: "renovation",
    place: "Sadashivanagar",
    key: "sadashivanagar",
    badge: NORTH,
    image: "villaRoom",
    pitch: "high-end renovation of bungalows and luxury apartments — design-led, carefully executed.",
    subtitle: "Design-led renovation for Sadashivanagar's bungalows and luxury apartments.",
    intro:
      "Sadashivanagar is one of Bangalore's most exclusive neighbourhoods, with large bungalows and luxury apartments. Renovation here is design-led: premium materials, detailed joinery, lighting design and careful execution in homes that are often still occupied.",
    context: {
      heading: "Renovating a premium home",
      body: [
        "In larger homes, renovation often means re-planning spaces — a bigger kitchen, a walk-in wardrobe, an entertainment room — as well as replacing finishes. We design the whole house first so the pieces work together.",
        "Premium materials such as natural stone, veneers and imported fittings need specialist handling. We plan their sourcing and installation carefully and protect finished areas while work continues.",
      ],
    },
    faqs: [
      {
        question: "Do you work with natural stone and veneers?",
        answer:
          "Yes. We specify, source and install marble, granite and other natural stone, and veneer and lacquer joinery, with samples approved by you first.",
      },
      {
        question: "Can you renovate while we continue to live at home?",
        answer:
          "Yes. We phase the work by zone, control dust and noise, and keep the parts of the house you use clean and usable.",
      },
    ],
    related: [
      { label: "Interior Designers in Sadashivanagar", href: "/interior-designers-in-sadashivanagar" },
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
      { label: "Home Renovation in Malleshwaram", href: "/home-renovation-in-malleshwaram" },
      { label: "Home Renovation in RT Nagar", href: "/home-renovation-in-rt-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Basavanagudi",
    key: "basavanagudi",
    badge: CITY,
    image: "pooja",
    pitch: "renovating traditional homes — keep the character, update the kitchen, bathrooms, wiring and plumbing.",
    subtitle: "Renovating Basavanagudi's traditional homes while keeping what makes them special.",
    intro:
      "Many Basavanagudi homes have features families want to keep — courtyards, wooden doors, red-oxide floors, a traditional pooja room. Renovation here is about updating the kitchen, bathrooms and services while preserving that character.",
    context: {
      heading: "Updating without losing character",
      body: [
        "We restore wooden doors, windows and pillars where possible, and match new work to old finishes so the house still feels like itself.",
        "Behind the walls, old wiring and plumbing are often due for replacement. We renew them with minimal damage to the finishes you want to keep.",
      ],
    },
    faqs: [
      {
        question: "Can you restore our old wooden doors and windows?",
        answer:
          "Often, yes. We repair, strip and re-polish them, and replace only the parts that cannot be saved.",
      },
      {
        question: "Can you redesign our pooja room?",
        answer:
          "Yes. We design pooja rooms and units to your traditions and preferences, in wood, marble or stone.",
      },
    ],
    related: [
      { label: "Interior Designers in Basavanagudi", href: "/interior-designers-in-basavanagudi" },
      { label: "House Construction in Basavanagudi", href: "/house-construction-in-basavanagudi" },
      { label: "Home Renovation in Jayanagar", href: "/home-renovation-in-jayanagar" },
      { label: "Pooja Room Design in Bangalore", href: "/pooja-room-design-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "BTM Layout",
    key: "btm-layout",
    badge: CITY,
    image: "washroom",
    pitch: "renovating homes and rental units — bathrooms, kitchens, flooring and painting between tenancies.",
    subtitle: "Renovating BTM Layout homes and rental floors, with a dated schedule you can plan around.",
    intro:
      "BTM Layout has a high share of rented homes. Owners renovate to raise rents, fix wear and tear between tenants, or update their own floor. The work is usually bathrooms, kitchens, flooring and painting, done quickly.",
    context: {
      heading: "Quick, durable rental renovations",
      body: [
        "Between tenants, time is money. We agree the scope, give you a dated schedule and keep to it, so the unit is ready to let again.",
        "We recommend durable tiles, sturdy fittings and washable paint that keep the unit looking good through several tenancies.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate several rental units in one building?",
        answer:
          "Yes. We can renovate units together or one at a time, depending on when they fall vacant.",
      },
      {
        question: "Do you supply wardrobes and kitchens for rental units?",
        answer:
          "Yes. Simple, durable modular kitchens and wardrobes can be part of the renovation.",
      },
    ],
    related: [
      { label: "Interior Designers in BTM Layout", href: "/interior-designers-in-btm-layout" },
      { label: "House Construction in BTM Layout", href: "/house-construction-in-btm-layout" },
      { label: "Modular Kitchen in BTM Layout", href: "/modular-kitchen-in-btm-layout" },
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
    ],
  },
  {
    service: "renovation",
    place: "Electronic City",
    key: "electronic-city",
    badge: CITY,
    image: "livingTv",
    pitch: "apartment renovation near the tech campuses — kitchens, bathrooms, wardrobes, flooring and painting.",
    subtitle: "Renovating Electronic City apartments, with online design reviews for busy owners.",
    intro:
      "Electronic City has many apartment complexes built in the last fifteen years. Owners — many of them working long hours nearby or living elsewhere — renovate to move in, to re-let, or to update a home that came with basic builder finishes.",
    context: {
      heading: "Renovating when you are short on time",
      body: [
        "You can approve the design and materials online and follow progress through photo updates. We only need you on site for the key decisions.",
        "For owners who rent out, we can coordinate with the current tenant or property manager to plan the work.",
      ],
    },
    faqs: [
      {
        question: "Can you manage the renovation if we live outside Bangalore?",
        answer:
          "Yes. We share drawings, quotes and samples online, and send regular photo updates.",
      },
      {
        question: "Can you replace the builder's kitchen with a modular one?",
        answer:
          "Yes. We remove the old units, fix any plumbing or electrical issues and install a new modular kitchen designed for the space.",
      },
    ],
    related: [
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Modular Kitchen in Electronic City", href: "/modular-kitchen-in-electronic-city" },
      { label: "House Construction in Electronic City", href: "/house-construction-in-electronic-city" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Marathahalli",
    key: "marathahalli",
    badge: CITY,
    image: "bathroom",
    pitch: "renovating apartments and rental homes near the Outer Ring Road — bathrooms, kitchens and more.",
    subtitle: "Renovation in Marathahalli for owners who live in their flat and owners who rent it out.",
    intro:
      "Marathahalli's apartments and independent houses are among the most rented in East Bangalore. Renovation here is a regular need: bathrooms and kitchens that wear out, floors that need replacing, and units that need a fresh look to rent well.",
    context: {
      heading: "Renovating occupied and vacant homes",
      body: [
        "For occupied homes, we phase the work to keep a bathroom and kitchen usable. For vacant ones, we work faster and do everything at once.",
        "Either way, you get an itemised quote and a written schedule before work starts.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate the bathroom without breaking the floor below?",
        answer:
          "Yes. Bathroom renovation works from the top down — removing old tiles, waterproofing, testing and retiling — without disturbing the slab or the flat below.",
      },
      {
        question: "Do you also do interiors in Marathahalli?",
        answer:
          "Yes. We design and install modular kitchens, wardrobes and full home interiors.",
      },
    ],
    related: [
      { label: "Interior Designers in Marathahalli", href: "/interior-designers-in-marathahalli" },
      { label: "Modular Kitchen in Marathahalli", href: "/modular-kitchen-in-marathahalli" },
      { label: "House Construction in Marathahalli", href: "/house-construction-in-marathahalli" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Vijayanagar",
    key: "vijayanagar",
    badge: CITY,
    image: "stoneWall",
    pitch: "renovating older independent houses — waterproofing, rewiring, kitchens, bathrooms and flooring.",
    subtitle: "Renovating Vijayanagar's established homes, from the terrace down to the floors.",
    intro:
      "Vijayanagar's older houses are well built but showing their age — terraces that leak, bathrooms from another era, wiring that was never meant for today's appliances. Families here often renovate thoroughly rather than rebuild.",
    context: {
      heading: "From the terrace down",
      body: [
        "We usually start at the top: terrace waterproofing, then bathrooms, wiring and plumbing, and finally flooring, interiors and paint. That order means new finishes are not damaged by work that comes later.",
        "We plan the work room by room so you can stay at home through most of it.",
      ],
    },
    faqs: [
      {
        question: "What order should a full renovation follow?",
        answer:
          "Generally waterproofing and structural repairs first, then services such as plumbing and wiring, then flooring, carpentry and paint. We give you a written sequence and schedule.",
      },
      {
        question: "Can you add a modular kitchen during the renovation?",
        answer:
          "Yes. We design it with the plumbing and electrical changes so everything fits on installation day.",
      },
    ],
    related: [
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "House Construction in Vijayanagar", href: "/house-construction-in-vijayanagar" },
      { label: "Home Renovation in Rajajinagar", href: "/home-renovation-in-rajajinagar" },
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
    ],
  },
]

const kitchens: LocalInput[] = [
  {
    service: "kitchen",
    place: "Banaswadi",
    key: "banaswadi",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens designed for older houses and newer flats — measured, made off site and installed.",
    subtitle: "Modular kitchens for Banaswadi homes, designed around your existing plumbing and gas points.",
    intro:
      "Kitchens in Banaswadi's older houses are often larger but irregular, with a tiled platform built decades ago. In newer flats they are compact and standard. We design both kinds, measuring on site and planning units to fit the room you actually have.",
    context: {
      heading: "Replacing an old platform kitchen",
      body: [
        "If the existing platform is sound and at a good height, we can fit units under and above it. If not, we rebuild it at the right height for you.",
        "We plan the sink, hob and fridge so they work together, and add tall storage and a loft to make up for space lost to old pillars or windows.",
      ],
    },
    faqs: [
      {
        question: "Can you fit a modular kitchen into an irregular old kitchen?",
        answer:
          "Yes. We measure on site and make the units to fit, using fillers and custom sizes where walls are not straight.",
      },
      {
        question: "Can you move the sink to the other wall?",
        answer:
          "Often, yes, if the drain can run there. We check on the first visit and include the plumbing work in the quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "Home Renovation in Banaswadi", href: "/home-renovation-in-banaswadi" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
      { label: "Modular Kitchen in Horamavu", href: "/modular-kitchen-in-horamavu" },
    ],
  },
  {
    service: "kitchen",
    place: "Horamavu",
    key: "horamavu",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "modular kitchens for apartments and independent houses — itemised quote, factory-made units.",
    subtitle: "Modular kitchens for Horamavu flats and houses, with every cabinet priced in an itemised quote.",
    intro:
      "Horamavu has many mid-sized apartments with L-shaped and parallel kitchens, plus independent houses with larger, more open kitchens. Most owners want more storage, better counter space and a kitchen that is easy to clean.",
    context: {
      heading: "More storage in the same space",
      body: [
        "Corner carousels, tall pantry pull-outs, lofts up to the ceiling and drawers instead of shelves can double usable storage without changing the room.",
        "We show you the kitchen in 3D with your chosen finishes before production, so there are no surprises on installation day.",
      ],
    },
    faqs: [
      {
        question: "Which layout is best for a small kitchen?",
        answer:
          "Usually L-shaped or parallel, depending on where the door and window are. We draw options and explain the pros and cons of each for your room.",
      },
      {
        question: "Do you install chimneys and hobs?",
        answer:
          "Yes. We can supply them or fit the ones you buy, with the cut-outs, power and ducting planned in the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Horamavu", href: "/interior-designers-in-horamavu" },
      { label: "Home Renovation in Horamavu", href: "/home-renovation-in-horamavu" },
      { label: "Modular Kitchen in Banaswadi", href: "/modular-kitchen-in-banaswadi" },
      { label: "Modular Kitchen in Hennur", href: "/modular-kitchen-in-hennur" },
    ],
  },
  {
    service: "kitchen",
    place: "Jakkur",
    key: "jakkur",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for villas and apartments near Yelahanka — U-shaped, island and parallel layouts.",
    subtitle: "Modular kitchens for Jakkur's villas and flats, designed and installed by a team minutes away.",
    intro:
      "Jakkur's villas often have generous kitchens with room for a U-shape or an island, while its apartments have compact L-shaped or parallel kitchens. Being close to our Yelahanka office, we can measure, review and install quickly.",
    context: {
      heading: "Villa kitchens with room to spare",
      body: [
        "Larger kitchens can take an island or breakfast counter, a separate utility and a tall appliance wall with a built-in oven. We plan the power, plumbing and lighting for each.",
        "Open kitchens need a good chimney and easy-clean finishes, because they are always on show. We help you choose both.",
      ],
    },
    faqs: [
      {
        question: "Can you design a kitchen island?",
        answer:
          "Yes. We plan the island's size, storage, seating and any power or plumbing in the floor, and show it in 3D first.",
      },
      {
        question: "Can we see samples before choosing finishes?",
        answer:
          "Yes. We bring laminate, acrylic and countertop samples to your home, or you can visit our Yelahanka office.",
      },
    ],
    related: [
      { label: "Interior Designers in Jakkur", href: "/interior-designers-in-jakkur" },
      { label: "Home Renovation in Jakkur", href: "/home-renovation-in-jakkur" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
      { label: "Modular Kitchen in Kogilu", href: "/modular-kitchen-in-kogilu" },
    ],
  },
  {
    service: "kitchen",
    place: "Kogilu",
    key: "kogilu",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "modular kitchens for new homes near Yelahanka — designed, made off site and installed.",
    subtitle: "Modular kitchens for new homes in Kogilu, from a team based just down the road.",
    intro:
      "Kogilu, next to Yelahanka, has many newly built houses and apartments. Owners here often fit their first proper kitchen — and if the house is still under construction, the kitchen can be planned with the plumbing and electrical work.",
    context: {
      heading: "Planning the kitchen during construction",
      body: [
        "If your house is still being built, we can fix the positions of the sink, hob, chimney, fridge and appliances now, so plumbing and power points are exactly where the kitchen needs them.",
        "For finished homes, we work around existing points wherever possible and only move them where it really helps.",
      ],
    },
    faqs: [
      {
        question: "Our house is under construction. When should we plan the kitchen?",
        answer:
          "Before the plumbing and electrical work starts. That way every point is in the right place and nothing needs to be broken later.",
      },
      {
        question: "Do you build houses too?",
        answer:
          "Yes. ACIPL is a design-and-build firm, so we can build the house and do the kitchen and interiors.",
      },
    ],
    related: [
      { label: "Interior Designers in Kogilu", href: "/interior-designers-in-kogilu" },
      { label: "House Construction in Kogilu", href: "/house-construction-in-kogilu" },
      { label: "Modular Kitchen in Jakkur", href: "/modular-kitchen-in-jakkur" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
    ],
  },
  {
    service: "kitchen",
    place: "Vidyaranyapura",
    key: "vidyaranyapura",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for independent houses and flats — custom-sized units, itemised quote.",
    subtitle: "Modular kitchens made to measure for Vidyaranyapura's houses and flats.",
    intro:
      "Kitchens in Vidyaranyapura's independent houses come in all shapes and sizes, often with an old platform and open shelves. Families here want closed storage, better lighting and a kitchen that is easier to keep clean.",
    context: {
      heading: "Made to measure, not forced to fit",
      body: [
        "We measure each wall and design units to fit, rather than forcing in standard sizes and filling gaps with panels.",
        "Good task lighting under the wall units and a well-planned chimney make a bigger difference than most people expect. We plan both.",
      ],
    },
    faqs: [
      {
        question: "Can you keep our granite platform?",
        answer:
          "If it is in good condition and at a comfortable height, yes. We design the units to fit under and above it.",
      },
      {
        question: "Which shutter finish is easiest to clean?",
        answer:
          "Laminate and acrylic are both easy to wipe clean. We bring samples so you can see and feel the options.",
      },
    ],
    related: [
      { label: "Interior Designers in Vidyaranyapura", href: "/interior-designers-in-vidyaranyapura" },
      { label: "Home Renovation in Vidyaranyapura", href: "/home-renovation-in-vidyaranyapura" },
      { label: "Modular Kitchen in Jalahalli", href: "/modular-kitchen-in-jalahalli" },
      { label: "Modular Kitchen in Sahakar Nagar", href: "/modular-kitchen-in-sahakar-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Jalahalli",
    key: "jalahalli",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "modular kitchens for houses and apartments — layouts, finishes and appliances planned together.",
    subtitle: "Modular kitchens for Jalahalli homes, with layout, finishes and appliances planned together.",
    intro:
      "Jalahalli's homes range from older independent houses to newer apartments. Whatever the home, most families want the same things: more storage, a counter that works for Indian cooking, and a kitchen that is easy to maintain.",
    context: {
      heading: "Designed for Indian cooking",
      body: [
        "Heavy cooking needs a strong chimney, a heat-resistant countertop and easy-clean shutters near the hob. We specify each with that in mind.",
        "We plan storage for large vessels, a pressure-cooker drawer, a masala pull-out and space for grinders and mixers, so the counter stays clear.",
      ],
    },
    faqs: [
      {
        question: "Granite or quartz for the countertop?",
        answer:
          "Both work well. Granite is very heat-tolerant; quartz offers more uniform colours. We show you samples and explain the trade-offs.",
      },
      {
        question: "Can you make space for a dishwasher?",
        answer:
          "Yes. We plan the space, water inlet, drain and power point in the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
      { label: "House Construction in Jalahalli", href: "/house-construction-in-jalahalli" },
      { label: "Modular Kitchen in Yeshwanthpur", href: "/modular-kitchen-in-yeshwanthpur" },
      { label: "Modular Kitchen in Vidyaranyapura", href: "/modular-kitchen-in-vidyaranyapura" },
    ],
  },
  {
    service: "kitchen",
    place: "Yeshwanthpur",
    key: "yeshwanthpur",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for apartments and houses — 3D design, factory-made units, quick installation.",
    subtitle: "Modular kitchens for Yeshwanthpur homes, designed in 3D and installed quickly.",
    intro:
      "Yeshwanthpur's large apartment complexes have standard kitchens that suit modular units well, while the older houses nearby need custom designs. We do both, measuring on site and showing you the design in 3D first.",
    context: {
      heading: "A quick switch to a modular kitchen",
      body: [
        "Because units are made off site, the kitchen is out of use only for removal, any plumbing or electrical changes, and installation.",
        "We coordinate with your association for working hours and lift use, and clean up fully before handover.",
      ],
    },
    faqs: [
      {
        question: "How long will our kitchen be unusable?",
        answer:
          "Only for the removal, any civil and plumbing work, and installation. You get a dated schedule for those days before we start.",
      },
      {
        question: "Can you replace just the shutters?",
        answer:
          "If the cabinets are in good condition, yes. We check them first and quote for shutters and hardware only.",
      },
    ],
    related: [
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "Home Renovation in Yeshwanthpur", href: "/home-renovation-in-yeshwanthpur" },
      { label: "Modular Kitchen in Mathikere", href: "/modular-kitchen-in-mathikere" },
      { label: "Modular Kitchen in Rajajinagar", href: "/modular-kitchen-in-rajajinagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Mathikere",
    key: "mathikere",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "compact modular kitchens for houses and rental units near Malleshwaram and IISc.",
    subtitle: "Compact, practical modular kitchens for Mathikere homes and rental units.",
    intro:
      "Kitchens in Mathikere are often compact, whether in the owner's floor or a rental unit. A well-designed modular kitchen makes a small space far more usable, and in a rental it is one of the things tenants notice first.",
    context: {
      heading: "Small kitchens, done well",
      body: [
        "In a compact kitchen, tall units, a full-height loft and well-organised drawers matter more than anything else. We plan every centimetre.",
        "For rental units we recommend durable, easy-to-clean finishes and sturdy hardware that stands up to daily use.",
      ],
    },
    faqs: [
      {
        question: "Do you make kitchens for rental units?",
        answer:
          "Yes. We design simple, durable kitchens for rental units, and can do several units at once.",
      },
      {
        question: "Can a straight kitchen still have enough storage?",
        answer:
          "Yes. A tall pantry, a loft to the ceiling and deep drawers can give a straight kitchen surprising capacity.",
      },
    ],
    related: [
      { label: "Interior Designers in Mathikere", href: "/interior-designers-in-mathikere" },
      { label: "Home Renovation in Mathikere", href: "/home-renovation-in-mathikere" },
      { label: "Modular Kitchen in RT Nagar", href: "/modular-kitchen-in-rt-nagar" },
      { label: "Modular Kitchen in Malleshwaram", href: "/modular-kitchen-in-malleshwaram" },
    ],
  },
  {
    service: "kitchen",
    place: "RT Nagar",
    key: "rt-nagar",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for older independent houses — new platforms, plumbing and units, all in one job.",
    subtitle: "New modular kitchens for RT Nagar homes, including platform, plumbing and electrical work.",
    intro:
      "Many RT Nagar kitchens still have the original platform, open shelves and plumbing from when the house was built. Replacing them is often part of a wider renovation, but it can also be done on its own.",
    context: {
      heading: "A complete kitchen replacement",
      body: [
        "We remove the old platform and shelves, update plumbing and wiring, retile the dado and install the new units and countertop — one team, one quote.",
        "We plan the new kitchen around how your family cooks, with space for the appliances you use every day.",
      ],
    },
    faqs: [
      {
        question: "Can you rebuild the kitchen platform at a better height?",
        answer:
          "Yes. We set the countertop height to suit the main cook, which makes a real difference to comfort.",
      },
      {
        question: "Do you retile the kitchen walls?",
        answer:
          "Yes. Dado tiling between the countertop and wall units is part of most kitchen replacements.",
      },
    ],
    related: [
      { label: "Interior Designers in RT Nagar", href: "/interior-designers-in-rt-nagar" },
      { label: "Home Renovation in RT Nagar", href: "/home-renovation-in-rt-nagar" },
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
      { label: "Modular Kitchen in Mathikere", href: "/modular-kitchen-in-mathikere" },
    ],
  },
  {
    service: "kitchen",
    place: "Malleshwaram",
    key: "malleshwaram",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for traditional homes and apartments — custom units and classic or modern finishes.",
    subtitle: "Modular kitchens for Malleshwaram homes, in finishes that suit both classic and modern interiors.",
    intro:
      "Malleshwaram's homes range from traditional houses to newer apartments. Kitchens here are often asked to do a lot — daily cooking for a large family, festival cooking, and storage for brass and steel vessels.",
    context: {
      heading: "A kitchen that suits the home",
      body: [
        "Not everyone wants a glossy modern kitchen. We also design in wood-grain, matte and classic shaker-style finishes that sit comfortably in a traditional home.",
        "We plan storage for large vessels, pooja items and festival cookware, as well as everyday use.",
      ],
    },
    faqs: [
      {
        question: "Can you design a kitchen in a traditional style?",
        answer:
          "Yes. Wood-grain laminates, matte finishes, framed shutters and brass-look handles can give a modular kitchen a classic look.",
      },
      {
        question: "Do you also renovate homes in Malleshwaram?",
        answer:
          "Yes. We renovate bathrooms, flooring, wiring and interiors as well as kitchens.",
      },
    ],
    related: [
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Home Renovation in Malleshwaram", href: "/home-renovation-in-malleshwaram" },
      { label: "Modular Kitchen in Rajajinagar", href: "/modular-kitchen-in-rajajinagar" },
      { label: "Modular Kitchen in Mathikere", href: "/modular-kitchen-in-mathikere" },
    ],
  },
  {
    service: "kitchen",
    place: "BTM Layout",
    key: "btm-layout",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for apartments and rental units — practical designs, durable finishes.",
    subtitle: "Practical modular kitchens for BTM Layout flats and rental floors.",
    intro:
      "BTM Layout's homes are often compact, and many are rented. Owners want kitchens that work well, last through several tenants and do not cost more than they need to.",
    context: {
      heading: "Durable kitchens for busy homes",
      body: [
        "We recommend carcass materials, finishes and hardware that stand up to heavy daily use, and list every choice in the quote so you can see where the money goes.",
        "For rental floors we can standardise the design across units, which keeps cost and maintenance down.",
      ],
    },
    faqs: [
      {
        question: "Can you do the same kitchen design in several units?",
        answer:
          "Yes. A standard design across units keeps costs down and makes repairs easier.",
      },
      {
        question: "What is the most durable shutter finish?",
        answer:
          "Good-quality laminate is very durable and affordable. We show you samples and explain how each finish wears.",
      },
    ],
    related: [
      { label: "Interior Designers in BTM Layout", href: "/interior-designers-in-btm-layout" },
      { label: "Home Renovation in BTM Layout", href: "/home-renovation-in-btm-layout" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Basavanagudi",
    key: "basavanagudi",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for traditional homes — custom-fit units, storage for vessels and festival cooking.",
    subtitle: "Modular kitchens made to fit Basavanagudi's traditional homes.",
    intro:
      "Kitchens in Basavanagudi's older homes were built for a different way of cooking, often with floor-level storage, open shelves and a low platform. A modular kitchen can bring them up to date while keeping room for the things that matter, like festival cooking and brass vessels.",
    context: {
      heading: "Old kitchen, new design",
      body: [
        "We measure carefully, because older rooms are rarely square, and make units to fit.",
        "We plan deep drawers and tall units for large vessels, and keep a place for traditional items you use every day.",
      ],
    },
    faqs: [
      {
        question: "Can you raise our low kitchen platform?",
        answer:
          "Yes. We rebuild it at a comfortable height and design the new units around it.",
      },
      {
        question: "Can we have a separate area for pooja items in the kitchen?",
        answer:
          "Yes. A small pooja niche or unit can be designed into the kitchen if that is where you prefer it.",
      },
    ],
    related: [
      { label: "Interior Designers in Basavanagudi", href: "/interior-designers-in-basavanagudi" },
      { label: "Home Renovation in Basavanagudi", href: "/home-renovation-in-basavanagudi" },
      { label: "Modular Kitchen in Jayanagar", href: "/modular-kitchen-in-jayanagar" },
      { label: "Modular Kitchen in Banashankari", href: "/modular-kitchen-in-banashankari" },
    ],
  },
]

const interiors: LocalInput[] = [
  {
    service: "interior",
    place: "Bagalur",
    key: "bagalur",
    badge: NORTH,
    image: "villaRoom",
    pitch: "interiors for new villas and houses near the airport — kitchens, wardrobes, ceilings and lighting.",
    subtitle: "Interiors for Bagalur's new villas and houses, designed in 3D and delivered by one team.",
    intro:
      "Bagalur, near the airport, has many new villa projects and independent houses. Owners here often have larger homes to furnish — several bedrooms, a big living area and sometimes a double-height space — and want a complete design rather than piecemeal furniture.",
    context: {
      heading: "Designing a whole villa",
      body: [
        "A complete design keeps the house consistent: the same material palette and lighting approach across rooms, with each room still suited to the person who uses it.",
        "If your house is still under construction, we can plan the interiors now so electrical points, plumbing and ceiling heights suit the design.",
      ],
    },
    faqs: [
      {
        question: "Can you do the interiors while the villa is still being built?",
        answer:
          "Yes, and it is the best time. We coordinate points and ceilings with your builder, or build the house ourselves if you prefer.",
      },
      {
        question: "Do you design lighting for double-height spaces?",
        answer:
          "Yes. We combine a feature light, cove or wall lighting and spotlights to light tall spaces well, and show it in 3D.",
      },
    ],
    related: [
      { label: "House Construction in Bagalur", href: "/house-construction-in-bagalur" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Interior Designers in Kattigenahalli", href: "/interior-designers-in-kattigenahalli" },
    ],
  },
  {
    service: "interior",
    place: "Kattigenahalli",
    key: "kattigenahalli",
    badge: NORTH,
    image: "livingTv",
    pitch: "interiors for new houses and apartments near Yelahanka — kitchens, wardrobes and full-home design.",
    subtitle: "Complete interiors for Kattigenahalli homes, from a team a few minutes away.",
    intro:
      "Kattigenahalli's newer houses and apartments are mostly owner-occupied family homes. Many owners here want everything done at once before they move in: kitchen, wardrobes, TV unit, ceilings, lighting and painting.",
    context: {
      heading: "Ready to move in",
      body: [
        "We work to your move-in date, with a dated schedule that covers design sign-off, production, site work and installation.",
        "Being close to our Yelahanka office, you can visit to see samples and our team can be on site often.",
      ],
    },
    faqs: [
      {
        question: "Can you complete the interiors before our move-in date?",
        answer:
          "We agree a dated schedule with you at the start based on the scope. If the date is tight, we will tell you honestly what is achievable.",
      },
      {
        question: "Can we visit your office?",
        answer:
          "Yes. Our office is in Yelahanka New Town, close to Kattigenahalli.",
      },
    ],
    related: [
      { label: "House Construction in Kattigenahalli", href: "/house-construction-in-kattigenahalli" },
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
      { label: "Interior Designers in Kogilu", href: "/interior-designers-in-kogilu" },
      { label: "Interior Designers in Bagalur", href: "/interior-designers-in-bagalur" },
    ],
  },
  {
    service: "interior",
    place: "Kothanur",
    key: "kothanur",
    badge: NORTH,
    image: "livingMarble",
    pitch: "interiors for apartments and villas around Kothanur — 3D design, modular units, one team.",
    subtitle: "Interiors for Kothanur's apartments and villas, designed around how your family lives.",
    intro:
      "Kothanur has a mix of gated apartments and villas in plotted layouts. Most of our enquiries here are for complete home interiors in recently completed homes, where owners want a clear plan and one team responsible for the whole job.",
    context: {
      heading: "One plan for the whole home",
      body: [
        "We start with a furniture layout for every room, then 3D views of the main spaces, then an itemised quote — so you see the whole picture before committing.",
        "Our own supervisor manages carpentry, ceilings, electrical and painting, so you are not coordinating separate contractors.",
      ],
    },
    faqs: [
      {
        question: "Can we do the interiors in phases?",
        answer:
          "Yes. We can design the whole home and build it in phases — for example kitchen and wardrobes first, living room later — so it stays consistent.",
      },
      {
        question: "Do you provide a 3D design?",
        answer:
          "Yes. You get 3D views of the main rooms and we revise them with you until they are signed off.",
      },
    ],
    related: [
      { label: "House Construction in Kothanur", href: "/house-construction-in-kothanur" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Ramamurthy Nagar",
    key: "ramamurthy-nagar",
    badge: NORTH,
    image: "bedroom",
    pitch: "interiors for apartments and independent houses — kitchens, wardrobes, ceilings and painting.",
    subtitle: "Practical, well-built interiors for Ramamurthy Nagar homes, with an itemised quote.",
    intro:
      "Ramamurthy Nagar's homes range from apartments to independent houses with rental floors. Interior work here is usually practical: a good kitchen, wardrobes with plenty of storage, a TV unit and a clean ceiling with good lighting.",
    context: {
      heading: "Interiors that work hard",
      body: [
        "We focus on storage and durability: wardrobes with lofts, a kitchen with deep drawers, and materials that stand up to daily family life.",
        "If you own rental floors, we can also fit simple, durable interiors for those units.",
      ],
    },
    faqs: [
      {
        question: "Can you do interiors for our rental floors too?",
        answer:
          "Yes. We design simple, durable kitchens and wardrobes for rental units, often standardised across floors.",
      },
      {
        question: "Which materials do you use for wardrobes?",
        answer:
          "We specify the board, finish and hardware for every wardrobe in the quote, so you know exactly what you are getting.",
      },
    ],
    related: [
      { label: "House Construction in Ramamurthy Nagar", href: "/house-construction-in-ramamurthy-nagar" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Interior Designers in Horamavu", href: "/interior-designers-in-horamavu" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "HBR Layout",
    key: "hbr-layout",
    badge: NORTH,
    image: "partition",
    pitch: "interiors for independent houses and apartments — full-home design, kitchens, wardrobes and lighting.",
    subtitle: "Complete interiors for HBR Layout homes, designed in 3D and built by one accountable team.",
    intro:
      "HBR Layout, beside Kalyan Nagar, is a well-planned area of independent houses and apartments. Owners here often want considered, design-led interiors: a statement living room, a practical kitchen and bedrooms with good storage.",
    context: {
      heading: "Design-led interiors",
      body: [
        "We develop a material and colour palette for the whole home first, so every room feels part of one design.",
        "Feature elements — a partition, a stone or panelled wall, a statement ceiling — are designed with the lighting, so they look as good at night as during the day.",
      ],
    },
    faqs: [
      {
        question: "Can you design a partition between the living and dining areas?",
        answer:
          "Yes. We design partitions in metal, wood, glass or a mix, often with display shelving, and show them in 3D.",
      },
      {
        question: "Do you also do house construction in this area?",
        answer:
          "Yes. ACIPL builds independent houses as well as doing interiors.",
      },
    ],
    related: [
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "House Construction in Kalyan Nagar", href: "/house-construction-in-kalyan-nagar" },
      { label: "Interior Designers in Banaswadi", href: "/interior-designers-in-banaswadi" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
    ],
  },
  {
    service: "interior",
    place: "Hulimavu",
    key: "hulimavu",
    badge: CITY,
    image: "livingTv",
    pitch: "interiors for apartments off Bannerghatta Road — kitchens, wardrobes, TV units and ceilings.",
    subtitle: "Apartment interiors for Hulimavu, from design to handover by one team.",
    intro:
      "Hulimavu, off Bannerghatta Road, is mostly apartments, with independent houses in the layouts behind. Most enquiries are for 2BHK and 3BHK interiors: a modular kitchen, wardrobes, a TV unit and a ceiling with better lighting.",
    context: {
      heading: "Apartment interiors done properly",
      body: [
        "We map every existing point on the first visit and design around them, keeping cost down and avoiding unnecessary changes.",
        "Owners can review designs on a video call and approve finishes from samples brought to the flat.",
      ],
    },
    faqs: [
      {
        question: "Can we finalise the design online?",
        answer:
          "Yes. We measure on site, share layouts and 3D views online, and bring samples to your flat.",
      },
      {
        question: "Do you handle painting and deep cleaning?",
        answer:
          "Yes. Painting and a final deep clean are part of our interior projects.",
      },
    ],
    related: [
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "Interior Designers in Begur", href: "/interior-designers-in-begur" },
      { label: "House Construction in Bannerghatta Road", href: "/house-construction-in-bannerghatta-road" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Domlur",
    key: "domlur",
    badge: CITY,
    image: "stoneWall",
    pitch: "interiors for apartments and independent houses between Indiranagar and Koramangala.",
    subtitle: "Interiors for Domlur homes — design-led, practical and delivered by one team.",
    intro:
      "Domlur sits between Indiranagar, Koramangala and the old airport area, with a mix of older independent houses and apartments. Owners here often want interiors that feel contemporary and considered, in homes that are compact for their location.",
    context: {
      heading: "Making a central home feel bigger",
      body: [
        "Light colours, mirrored or glass elements, concealed storage and good lighting can make a compact home feel more spacious. We use them carefully so the result still feels warm.",
        "In older houses we check wiring and dampness before planning new interiors, so the finishes last.",
      ],
    },
    faqs: [
      {
        question: "How can we make a small flat feel bigger?",
        answer:
          "Floor-to-ceiling storage, light finishes, layered lighting and multi-use furniture all help. We show you the effect in 3D before work starts.",
      },
      {
        question: "Do you also renovate older houses?",
        answer:
          "Yes. We handle civil work, waterproofing, rewiring and plumbing along with interiors.",
      },
    ],
    related: [
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Interior Designers in Old Airport Road", href: "/interior-designers-in-old-airport-road" },
      { label: "Home Interior Design in Koramangala", href: "/home-interior-design-in-koramangala" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
    ],
  },
  {
    service: "interior",
    place: "Hoskote",
    key: "hoskote",
    badge: CITY,
    image: "villaRoom",
    pitch: "interiors for new houses and villas in Hoskote — kitchens, wardrobes, ceilings and lighting.",
    subtitle: "Complete interiors for new homes in Hoskote, designed in 3D and fitted by one team.",
    intro:
      "Hoskote, east of the city on Old Madras Road, has grown with new layouts, villa projects and independent houses. Many owners here are furnishing a new home for the first time and want one team to handle it all.",
    context: {
      heading: "Furnishing a new home",
      body: [
        "We start with a layout for every room and an itemised quote, so you know the full cost before deciding what to do now and what to leave for later.",
        "Factory-made units mean less time on site, which matters when the home is outside the city.",
      ],
    },
    faqs: [
      {
        question: "Do you take up interior projects in Hoskote?",
        answer:
          "Yes. We work across Bangalore and its outskirts, including Hoskote, with a supervisor assigned to your project.",
      },
      {
        question: "Can you build the house as well?",
        answer:
          "Yes. ACIPL designs and builds houses in Hoskote and can do the interiors too.",
      },
    ],
    related: [
      { label: "House Construction in Hoskote", href: "/house-construction-in-hoskote" },
      { label: "Interior Designers in Kadugodi", href: "/interior-designers-in-kadugodi" },
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
    ],
  },
]

const offices: LocalInput[] = [
  {
    service: "office",
    place: "Koramangala",
    key: "koramangala",
    badge: CITY,
    image: "officeLounge",
    pitch: "startup and corporate office fit-outs — layout, partitions, ceilings, cabling and furniture.",
    subtitle: "Office fit-outs for Koramangala's startups and growing companies, designed and built by one team.",
    intro:
      "Koramangala is home to hundreds of startups and growing companies, many in converted buildings and smaller commercial blocks. Office projects here are often fast-moving: a team that has outgrown its space and needs a new office that reflects its brand, without a long fit-out.",
    context: {
      heading: "Offices for fast-growing teams",
      body: [
        "Growing teams need layouts that can change — benching workstations, flexible meeting rooms and phone booths that can be added later. We plan for the headcount you expect, not just today's.",
        "Converted buildings often have irregular floors and limited services. We survey electrical capacity, AC and fire provisions early so the design is realistic.",
      ],
    },
    faqs: [
      {
        question: "Can you fit out an office in a converted residential building?",
        answer:
          "Yes, where commercial use is permitted. We check the building's services and work within its limits, upgrading power and AC where needed.",
      },
      {
        question: "Can you include our brand in the design?",
        answer:
          "Yes. Brand colours, a logo wall, graphics and materials that reflect your culture are part of the design.",
      },
    ],
    related: [
      { label: "Office Interior Designers in HSR Layout", href: "/office-interior-designers-in-hsr-layout" },
      { label: "Office Interior Designers in Indiranagar", href: "/office-interior-designers-in-indiranagar" },
      { label: "Home Interior Design in Koramangala", href: "/home-interior-design-in-koramangala" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "HSR Layout",
    key: "hsr-layout",
    badge: CITY,
    image: "officeOpen",
    pitch: "office interiors for startups and SMEs — open workspaces, cabins, meeting rooms and pantries.",
    subtitle: "Office interiors for HSR Layout's startups and SMEs, from layout to handover.",
    intro:
      "HSR Layout's commercial streets and converted buildings house many startups and small companies. Office projects here range from a first proper office for a growing team to re-fitting a floor for a new tenant.",
    context: {
      heading: "A first proper office",
      body: [
        "For a first office, getting the basics right matters most: enough power and data points, good lighting, decent acoustics in meeting rooms and a pantry people actually use.",
        "We give you an itemised BOQ so finance can see exactly what each element costs and decide what to do now and later.",
      ],
    },
    faqs: [
      {
        question: "Can you fit out a small office of a few hundred square feet?",
        answer:
          "Yes. We take on small and large office projects, with the same approach to design and BOQ.",
      },
      {
        question: "Do you handle data cabling and Wi-Fi provisions?",
        answer:
          "Yes. Structured cabling, network rack space and access-point positions are planned in the design.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Koramangala", href: "/office-interior-designers-in-koramangala" },
      { label: "Office Interior Designers in Bellandur", href: "/office-interior-designers-in-bellandur" },
      { label: "House Construction in HSR Layout", href: "/house-construction-in-hsr-layout" },
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
    ],
  },
  {
    service: "office",
    place: "Indiranagar",
    key: "indiranagar",
    badge: CITY,
    image: "officeCabin",
    pitch: "office and studio fit-outs in converted buildings and commercial blocks — design to handover.",
    subtitle: "Offices and studios in Indiranagar, designed to impress clients and work well for teams.",
    intro:
      "Indiranagar's offices are often in converted bungalows and boutique commercial buildings — agencies, studios, consultancies and company offices that want a space with character as well as function.",
    context: {
      heading: "Working with character buildings",
      body: [
        "Converted bungalows have high ceilings, irregular rooms and limited services. We use their character and upgrade power, data and AC carefully.",
        "Client-facing offices need a strong reception and meeting rooms that impress, with good acoustics and AV. We design those as priorities.",
      ],
    },
    faqs: [
      {
        question: "Can you design a studio or agency office with a creative feel?",
        answer:
          "Yes. We design around your brand and how your team works, with materials and lighting that give the space character.",
      },
      {
        question: "Do you work with landlords on approvals?",
        answer:
          "Yes. We prepare drawings for the landlord and follow any building rules on working hours and changes.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Koramangala", href: "/office-interior-designers-in-koramangala" },
      { label: "Interior Designers in Indiranagar", href: "/interior-designers-in-indiranagar-bangalore" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
    ],
  },
  {
    service: "office",
    place: "Hebbal",
    key: "hebbal",
    badge: NORTH,
    image: "officeWorkspace",
    pitch: "corporate office fit-outs in North Bangalore — layout, cabins, ceilings, cabling and furniture.",
    subtitle: "Corporate office fit-outs in Hebbal, from a design-and-build team based in North Bangalore.",
    intro:
      "Hebbal has become a major North Bangalore business district, with tech parks and commercial buildings along the airport road. Being based in Yelahanka, we can survey, supervise and support offices here closely.",
    context: {
      heading: "Fit-outs in large commercial buildings",
      body: [
        "Large buildings have detailed fit-out rules — drawings for approval, permitted hours, fire and AC tie-ins. We prepare what building management needs and coordinate with their teams.",
        "Corporate offices need consistency across floors and sites. We work to your standards and specifications where you have them.",
      ],
    },
    faqs: [
      {
        question: "Can you work to our corporate design standards?",
        answer:
          "Yes. Share your standards and we will design and specify to them, flagging anything that needs adapting for the building.",
      },
      {
        question: "Have you done office projects in North Bangalore?",
        answer:
          "Yes. Our office projects include a workspace for Surbana Jurong in Yelahanka and an office for eMudhra in the aerospace park area near Devanahalli.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Manyata Tech Park", href: "/office-interior-designers-in-manyata-tech-park" },
      { label: "Office Interior Designers in Yelahanka", href: "/office-interior-designers-in-yelahanka" },
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Manyata Tech Park",
    key: "manyata-tech-park",
    badge: NORTH,
    image: "officeOpen",
    pitch: "office fit-outs for companies in and around Manyata Tech Park — design, BOQ and execution.",
    subtitle: "Office fit-outs in and around Manyata Tech Park, by a team based in North Bangalore.",
    intro:
      "Manyata Tech Park and the buildings around it on the Outer Ring Road and Nagawara house a large number of company offices. Fit-outs here range from a single floor for a growing team to re-fits for a new tenant.",
    context: {
      heading: "Working inside a tech park",
      body: [
        "Tech parks have their own fit-out manuals covering drawings, materials, fire safety, working hours and access for workers. We follow them and prepare the submissions building management asks for.",
        "We plan noisy work and deliveries for the windows the park allows, so neighbouring tenants are not disturbed.",
      ],
    },
    faqs: [
      {
        question: "Can you follow the tech park's fit-out manual?",
        answer:
          "Yes. We work to the park's rules and coordinate approvals, permits and inspections with the facility team.",
      },
      {
        question: "Can you supply workstations and furniture?",
        answer:
          "Yes. Furniture can be made to your design or sourced from manufacturers, all included in the BOQ.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Hebbal", href: "/office-interior-designers-in-hebbal" },
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "Office Interior Designers in Yelahanka", href: "/office-interior-designers-in-yelahanka" },
    ],
  },
  {
    service: "office",
    place: "Outer Ring Road",
    key: "outer-ring-road",
    badge: CITY,
    image: "officeCabin",
    pitch: "corporate office interiors along the Outer Ring Road tech corridor — design, approvals and fit-out.",
    subtitle: "Corporate office interiors along the Outer Ring Road, delivered under one contract.",
    intro:
      "The Outer Ring Road between Hebbal, Marathahalli and Silk Board is lined with tech parks and commercial towers. Fit-outs here are usually for corporate teams that need a reliable partner, a clear BOQ and a schedule they can plan a move around.",
    context: {
      heading: "A schedule you can plan a move around",
      body: [
        "Moving a team means fixed dates for IT, furniture and people. We agree the schedule up front, including approvals and inspections, and keep you updated against it.",
        "We coordinate AC, fire, electrical and IT with the building and your vendors so they are ready on handover day.",
      ],
    },
    faqs: [
      {
        question: "Can you coordinate with our IT vendor?",
        answer:
          "Yes. We plan cabling, rack space and power with your IT vendor and hand over a site ready for their installation.",
      },
      {
        question: "Do you provide as-built drawings at handover?",
        answer:
          "Yes. You receive as-built drawings of the layout and services for your facility team.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Bellandur", href: "/office-interior-designers-in-bellandur" },
      { label: "Office Interior Designers in Marathahalli", href: "/office-interior-designers-in-marathahalli" },
      { label: "Office Interior Designers in Manyata Tech Park", href: "/office-interior-designers-in-manyata-tech-park" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
    ],
  },
  {
    service: "office",
    place: "Bellandur",
    key: "bellandur",
    badge: CITY,
    image: "officeLounge",
    pitch: "office fit-outs near Ecospace and the Outer Ring Road — workspaces, cabins, pantries and furniture.",
    subtitle: "Office fit-outs in Bellandur's tech parks and commercial buildings, designed and built by one team.",
    intro:
      "Bellandur, on the Outer Ring Road, is surrounded by tech parks and commercial buildings. Companies here range from large corporates to mid-sized teams, and fit-outs need to meet building rules as well as the company's own standards.",
    context: {
      heading: "Meeting building and company standards",
      body: [
        "We prepare drawings and method statements for building approval, follow the building's fire and safety rules, and coordinate with its facility team throughout.",
        "Within those rules, we design a workspace that suits how your team works — focus areas, collaboration spaces and meeting rooms in the right proportions.",
      ],
    },
    faqs: [
      {
        question: "Can you design for hybrid working?",
        answer:
          "Yes. More meeting and collaboration space, bookable desks, phone booths and good video-call rooms are common in hybrid offices.",
      },
      {
        question: "Can you refurbish an existing office instead of a full fit-out?",
        answer:
          "Yes. We can refresh finishes, reconfigure layouts and upgrade meeting rooms without a full strip-out.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
      { label: "Office Interior Designers in HSR Layout", href: "/office-interior-designers-in-hsr-layout" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Office Interior Designers in Marathahalli", href: "/office-interior-designers-in-marathahalli" },
    ],
  },
  {
    service: "office",
    place: "Marathahalli",
    key: "marathahalli",
    badge: CITY,
    image: "officeWorkspace",
    pitch: "office interiors for SMEs and corporates near the Outer Ring Road — design, BOQ and fit-out.",
    subtitle: "Office interiors in Marathahalli for SMEs and corporate teams, from layout to handover.",
    intro:
      "Marathahalli's commercial buildings and tech parks house many SMEs and corporate teams. Office projects here are often relocations or expansions, where getting the space ready on time matters as much as the design.",
    context: {
      heading: "Relocations and expansions",
      body: [
        "For an expansion into an adjoining space, we plan the work so your existing office keeps running, with noisy work out of hours and the new area sealed off.",
        "For relocations, we work to your move date and coordinate furniture, IT and services so the team can start work on day one.",
      ],
    },
    faqs: [
      {
        question: "Can you expand our existing office without stopping work?",
        answer:
          "Yes. We isolate the work area, schedule noisy jobs out of hours and connect the new space at the end.",
      },
      {
        question: "Do you build commercial buildings too?",
        answer:
          "Yes. ACIPL also handles commercial and industrial construction.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Bellandur", href: "/office-interior-designers-in-bellandur" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
      { label: "House Construction in Marathahalli", href: "/house-construction-in-marathahalli" },
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
    ],
  },
]

export const localInputs4: LocalInput[] = [...renovation, ...kitchens, ...interiors, ...offices]
