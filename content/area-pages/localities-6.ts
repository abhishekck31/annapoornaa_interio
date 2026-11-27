/**
 * Office interior, home interior and house construction locality pages,
 * batch 4 (30 pages). Same rules as the earlier locality files.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"
const CITY = "Design-and-build across Bangalore"

const offices: LocalInput[] = [
  {
    service: "office",
    place: "MG Road",
    key: "mg-road",
    badge: CITY,
    image: "officeCabin",
    pitch: "office fit-outs in the central business district — MG Road, Brigade Road, Residency Road and Richmond Road.",
    subtitle: "Office interiors in Bangalore's central business district, designed for clients and teams alike.",
    intro:
      "The MG Road area — with Brigade Road, Residency Road, Richmond Road and Cunningham Road nearby — is home to law firms, consultancies, banks and company head offices. Offices here are often client-facing and need to make a strong first impression in a compact, high-value space.",
    context: {
      heading: "Making a central office work harder",
      body: [
        "Space in the CBD is expensive, so the layout has to earn its keep: efficient workstations, meeting rooms that double as focus rooms, and storage built into walls.",
        "Older commercial buildings here can have limited services and strict working hours. We survey early and plan around both.",
      ],
    },
    faqs: [
      {
        question: "Can you work in an older commercial building?",
        answer: "Yes. We check electrical capacity, AC and fire provisions first, and upgrade where needed within the building's rules.",
      },
      {
        question: "Can you design a reception that impresses clients?",
        answer: "Yes. Reception, waiting areas and meeting rooms are designed around your brand and shown in 3D before work starts.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Indiranagar", href: "/office-interior-designers-in-indiranagar" },
      { label: "Office Interior Designers in Domlur", href: "/office-interior-designers-in-domlur" },
      { label: "Office Interior Designers in Old Airport Road", href: "/office-interior-designers-in-old-airport-road" },
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Old Airport Road",
    key: "old-airport-road",
    badge: CITY,
    image: "officeOpen",
    pitch: "office fit-outs along Old Airport Road — tech parks, commercial buildings and corporate floors.",
    subtitle: "Office fit-outs along Old Airport Road, from layout to handover.",
    intro:
      "Old Airport Road, from Domlur to Marathahalli, has tech parks and commercial buildings housing IT, aerospace and services companies. Fit-outs here are usually for corporate teams working within building management rules.",
    context: {
      heading: "Working within building rules",
      body: [
        "We prepare drawings and method statements for building approval, and coordinate fire, AC and electrical tie-ins with the facility team.",
        "Noisy work and deliveries are scheduled for the hours the building allows.",
      ],
    },
    faqs: [
      {
        question: "Can you get our fit-out drawings approved by the building?",
        answer: "We prepare the drawings and documents building managers usually ask for, and handle their comments.",
      },
      {
        question: "Can you supply workstations?",
        answer: "Yes. Workstations and furniture can be made to your design or sourced, all listed in the BOQ.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Domlur", href: "/office-interior-designers-in-domlur" },
      { label: "Office Interior Designers in Marathahalli", href: "/office-interior-designers-in-marathahalli" },
      { label: "Interior Designers in Old Airport Road", href: "/interior-designers-in-old-airport-road" },
      { label: "Office Renovation in Bangalore", href: "/office-renovation-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Domlur",
    key: "domlur",
    badge: CITY,
    image: "officeLounge",
    pitch: "office interiors in Domlur — tech-park floors, boutique offices and agency studios.",
    subtitle: "Office interiors in Domlur for corporate floors and boutique offices.",
    intro:
      "Domlur sits between Indiranagar, Koramangala and Old Airport Road, with business parks and smaller commercial buildings. Offices here range from large corporate floors to small agencies and studios.",
    context: {
      heading: "Large floor or small studio",
      body: [
        "For corporate floors, we work to your standards and the building's fit-out manual. For smaller offices, we focus on layout efficiency and a look that reflects your brand.",
        "Either way, you get a space plan, 3D views and an itemised BOQ before work starts.",
      ],
    },
    faqs: [
      {
        question: "Do you take on small office projects?",
        answer: "Yes. We fit out small and large offices with the same process.",
      },
      {
        question: "Can you design meeting rooms with good acoustics?",
        answer: "Yes. Partitions, ceilings, doors and finishes are specified to reduce noise between rooms.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Indiranagar", href: "/office-interior-designers-in-indiranagar" },
      { label: "Office Interior Designers in Old Airport Road", href: "/office-interior-designers-in-old-airport-road" },
      { label: "Office Interior Designers in Koramangala", href: "/office-interior-designers-in-koramangala" },
      { label: "Interior Designers in Domlur", href: "/interior-designers-in-domlur" },
    ],
  },
  {
    service: "office",
    place: "Bannerghatta Road",
    key: "bannerghatta-road",
    badge: CITY,
    image: "officeWorkspace",
    pitch: "office interiors along Bannerghatta Road — commercial buildings, IT offices and growing companies.",
    subtitle: "Office interiors on Bannerghatta Road for growing teams.",
    intro:
      "Bannerghatta Road has commercial buildings and IT offices between Dairy Circle and Hulimavu. Many companies here are growing and need offices that can be expanded or reconfigured without a full rebuild.",
    context: {
      heading: "Designed to grow",
      body: [
        "We plan modular workstations, flexible meeting rooms and spare power and data capacity, so adding people later does not mean starting over.",
        "Where expansion into adjoining space is likely, we plan the layout so the two areas connect cleanly.",
      ],
    },
    faqs: [
      {
        question: "Can the layout be changed later?",
        answer: "Yes, if we plan for it. Modular workstations and flexible partitions make later changes much easier.",
      },
      {
        question: "Do you provide an itemised BOQ?",
        answer: "Yes. Every item is listed with its specification and quantity.",
      },
    ],
    related: [
      { label: "Office Interior Designers in JP Nagar", href: "/office-interior-designers-in-jp-nagar" },
      { label: "Office Interior Designers in Jayanagar", href: "/office-interior-designers-in-jayanagar" },
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "Startup Office Interior Design in Bangalore", href: "/startup-office-interior-design-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "JP Nagar",
    key: "jp-nagar",
    badge: CITY,
    image: "officeCabin",
    pitch: "office interiors in JP Nagar — small offices, consultancies, clinics' admin offices and SMEs.",
    subtitle: "Office interiors for JP Nagar's SMEs and professional firms.",
    intro:
      "JP Nagar's commercial streets house small companies, consultancies, chartered-accountant and legal practices, and SMEs. Offices here are usually compact and need to be efficient, professional and comfortable.",
    context: {
      heading: "Compact professional offices",
      body: [
        "Small offices need careful planning: a welcoming entrance, a private cabin or two, a meeting room and well-organised storage for files.",
        "We make the most of natural light and use glass partitions so a small office does not feel cramped.",
      ],
    },
    faqs: [
      {
        question: "Can you design a small office with cabins and a meeting room?",
        answer: "Yes. We plan cabins, meeting space and workstations to fit your area and team.",
      },
      {
        question: "Can you include file storage?",
        answer: "Yes. Built-in storage, compactors and lockable units can all be designed in.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Jayanagar", href: "/office-interior-designers-in-jayanagar" },
      { label: "Office Interior Designers in Bannerghatta Road", href: "/office-interior-designers-in-bannerghatta-road" },
      { label: "Interior Designers in JP Nagar", href: "/interior-designers-in-jp-nagar" },
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Jayanagar",
    key: "jayanagar",
    badge: CITY,
    image: "officeLounge",
    pitch: "office interiors in Jayanagar's commercial areas — professional firms, studios and company offices.",
    subtitle: "Office interiors in Jayanagar, designed and delivered by one team.",
    intro:
      "Jayanagar's commercial areas around 4th Block and the main roads have offices for professional firms, studios and established local companies, often in mixed-use buildings.",
    context: {
      heading: "Offices in mixed-use buildings",
      body: [
        "Mixed-use buildings often share stairs, lifts and services with shops or homes. We plan work hours and deliveries to avoid disturbing neighbours.",
        "We check power and AC capacity early and plan upgrades with the building owner where needed.",
      ],
    },
    faqs: [
      {
        question: "Can you work on weekends to avoid disturbing other tenants?",
        answer: "Yes. Noisy work can be scheduled for agreed hours, including weekends.",
      },
      {
        question: "Do you handle electrical upgrades?",
        answer: "Yes. We plan power distribution, UPS circuits and lighting, and coordinate any supply upgrade with the owner.",
      },
    ],
    related: [
      { label: "Office Interior Designers in JP Nagar", href: "/office-interior-designers-in-jp-nagar" },
      { label: "Interior Designers in Jayanagar", href: "/interior-designers-in-jayanagar-bangalore" },
      { label: "Office Interior Designers in Bannerghatta Road", href: "/office-interior-designers-in-bannerghatta-road" },
      { label: "Office Renovation in Bangalore", href: "/office-renovation-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Sarjapur Road",
    key: "sarjapur-road",
    badge: CITY,
    image: "officeOpen",
    pitch: "office fit-outs along Sarjapur Road — tech parks, commercial buildings and growing companies.",
    subtitle: "Office fit-outs on Sarjapur Road, from bare shell to ready-to-work.",
    intro:
      "Sarjapur Road has grown into a major office corridor, with tech parks and new commercial buildings between the Outer Ring Road and Sarjapur. Many spaces here are handed over as bare or warm shells.",
    context: {
      heading: "From bare shell to ready-to-work",
      body: [
        "Bare-shell spaces need everything — flooring, ceilings, services, partitions and furniture. We plan it all in one design and one BOQ.",
        "We coordinate with the building on fire, AC and electrical connections so the office is ready on handover day.",
      ],
    },
    faqs: [
      {
        question: "What is the difference between bare shell and warm shell?",
        answer: "A bare shell has little more than the structure; a warm shell includes some services. We survey and price only what your space needs.",
      },
      {
        question: "Can you plan for hybrid working?",
        answer: "Yes. More meeting and collaboration space, bookable desks and video-call rooms are common now.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Bellandur", href: "/office-interior-designers-in-bellandur" },
      { label: "Office Interior Designers in HSR Layout", href: "/office-interior-designers-in-hsr-layout" },
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Office Fit-Out Contractors in Bangalore", href: "/office-fit-out-contractors-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Brookefield",
    key: "brookefield",
    badge: CITY,
    image: "officeWorkspace",
    pitch: "office interiors near ITPL — corporate floors, refurbishments and expansions.",
    subtitle: "Office interiors and refurbishments in Brookefield and along ITPL Main Road.",
    intro:
      "Brookefield, along ITPL Main Road, has many offices that were fitted out years ago and now need refurbishing — worn carpets, dated cabins and layouts that no longer match how teams work.",
    context: {
      heading: "Refurbishing an existing office",
      body: [
        "Refurbishment can reuse much of what is there — ceilings, services, some partitions — and focus on what has changed: layout, meeting rooms, finishes and furniture.",
        "If you stay in occupation, we phase the work and schedule noisy jobs out of hours.",
      ],
    },
    faqs: [
      {
        question: "Can you refurbish our office while we keep working?",
        answer: "Yes. We phase the work zone by zone and keep noisy jobs to evenings and weekends.",
      },
      {
        question: "Can you reuse our existing furniture?",
        answer: "Where it is in good condition, yes. We survey it and include only what needs replacing in the BOQ.",
      },
    ],
    related: [
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
      { label: "Office Interior Designers in Marathahalli", href: "/office-interior-designers-in-marathahalli" },
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Office Renovation in Bangalore", href: "/office-renovation-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Rajajinagar",
    key: "rajajinagar",
    badge: CITY,
    image: "officeCabin",
    pitch: "office interiors in Rajajinagar — company offices, showrooms' back offices and professional firms.",
    subtitle: "Office interiors in Rajajinagar for established businesses and professional firms.",
    intro:
      "Rajajinagar's commercial roads and the nearby industrial areas have many established businesses — trading and manufacturing companies, professional firms and family businesses — that need practical, presentable offices.",
    context: {
      heading: "Offices for established businesses",
      body: [
        "Many family businesses want a modern office that still has a proper cabin for the owner, space for accounts and a meeting room for clients and suppliers.",
        "We design to how your business actually runs, not to a generic office template.",
      ],
    },
    faqs: [
      {
        question: "Can you design an owner's cabin with a meeting area?",
        answer: "Yes. Larger cabins with a desk, meeting table and storage are common in our designs.",
      },
      {
        question: "Do you fit out factory offices too?",
        answer: "Yes. We design and fit out office areas within industrial buildings as well.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Malleshwaram", href: "/office-interior-designers-in-malleshwaram" },
      { label: "Office Interior Designers in Yeshwanthpur", href: "/office-interior-designers-in-yeshwanthpur" },
      { label: "Office Interior Designers in Peenya", href: "/office-interior-designers-in-peenya" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
    ],
  },
  {
    service: "office",
    place: "Malleshwaram",
    key: "malleshwaram",
    badge: NORTH,
    image: "officeLounge",
    pitch: "office interiors in Malleshwaram — professional practices, institutes and small companies.",
    subtitle: "Office interiors in Malleshwaram, designed for professional practices and small companies.",
    intro:
      "Malleshwaram's offices are often in converted houses and small commercial buildings — professional practices, training institutes and small companies that value a calm, well-organised space.",
    context: {
      heading: "Offices in converted buildings",
      body: [
        "Converted houses have rooms of different sizes and limited services. We use the rooms as cabins and meeting spaces and upgrade power and data carefully.",
        "Where commercial use is permitted, we plan the fit-out to suit the building rather than fight it.",
      ],
    },
    faqs: [
      {
        question: "Can a converted house work as an office?",
        answer: "Often very well, where commercial use is permitted. We plan rooms as cabins and meeting spaces and upgrade services.",
      },
      {
        question: "Can you design a training room?",
        answer: "Yes. Seating, AV provisions, acoustics and lighting are planned for training or classroom use.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Rajajinagar", href: "/office-interior-designers-in-rajajinagar" },
      { label: "Office Interior Designers in Yeshwanthpur", href: "/office-interior-designers-in-yeshwanthpur" },
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Yeshwanthpur",
    key: "yeshwanthpur",
    badge: NORTH,
    image: "officeOpen",
    pitch: "office interiors in Yeshwanthpur — commercial towers, corporate floors and regional offices.",
    subtitle: "Office interiors in Yeshwanthpur's commercial buildings, from a North Bangalore team.",
    intro:
      "Yeshwanthpur has commercial towers near the railway station and Tumkur Road, along with offices serving the industrial areas to the north-west. Companies here range from regional offices to corporate floors.",
    context: {
      heading: "Regional and corporate offices",
      body: [
        "Regional offices often need a mix of open workstations, a few cabins, a training room and a strong reception. We plan the proportions around your team.",
        "We follow building rules on approvals and working hours and coordinate services with the facility team.",
      ],
    },
    faqs: [
      {
        question: "Can you work to our company's standard design?",
        answer: "Yes. Share your standards and we design and specify to them, adapting only where the building requires.",
      },
      {
        question: "Are you based nearby?",
        answer: "Our office is in Yelahanka New Town in North Bangalore, so our team can support projects here closely.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Peenya", href: "/office-interior-designers-in-peenya" },
      { label: "Office Interior Designers in Malleshwaram", href: "/office-interior-designers-in-malleshwaram" },
      { label: "Office Interior Designers in Hebbal", href: "/office-interior-designers-in-hebbal" },
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
    ],
  },
  {
    service: "office",
    place: "Peenya",
    key: "peenya",
    badge: NORTH,
    image: "officeWorkspace",
    pitch: "offices inside factories and commercial buildings in Peenya — admin blocks, cabins, conference rooms.",
    subtitle: "Offices for Peenya's manufacturers — admin areas, cabins and conference rooms.",
    intro:
      "Peenya is one of Asia's largest industrial areas. Manufacturers here need offices inside or beside their factories — admin areas, owners' cabins, conference rooms, design rooms and canteens — that work as hard as the shop floor.",
    context: {
      heading: "Offices inside industrial buildings",
      body: [
        "Factory offices need to handle dust and noise from the shop floor. We specify sealed partitions, durable flooring and good ventilation.",
        "A glass-fronted office overlooking the shop floor lets supervisors see production while keeping noise out.",
      ],
    },
    faqs: [
      {
        question: "Can you build an office mezzanine inside our factory?",
        answer: "We can design and build office areas within your building. A mezzanine needs a structural check, which we arrange.",
      },
      {
        question: "Can you fit out canteens and washrooms too?",
        answer: "Yes. Canteens, washrooms and changing rooms can be part of the same project.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Yeshwanthpur", href: "/office-interior-designers-in-yeshwanthpur" },
      { label: "Office Interior Designers in Rajajinagar", href: "/office-interior-designers-in-rajajinagar" },
      { label: "Factory Construction in Bangalore", href: "/factory-construction-in-bangalore" },
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
    ],
  },
  {
    service: "office",
    place: "Kalyan Nagar",
    key: "kalyan-nagar",
    badge: NORTH,
    image: "officeCabin",
    pitch: "office interiors in Kalyan Nagar and HRBR Layout — startups, agencies and growing companies.",
    subtitle: "Office interiors for Kalyan Nagar's startups and growing companies.",
    intro:
      "Kalyan Nagar and HRBR Layout have a growing number of commercial buildings housing startups, agencies and companies that want to be close to where their teams live in North-East Bangalore.",
    context: {
      heading: "Offices close to where people live",
      body: [
        "Neighbourhood offices tend to be smaller and more personal than tech-park floors. We design spaces with character — good light, warm materials and a pantry people enjoy.",
        "We plan for growth with spare power and data and flexible furniture.",
      ],
    },
    faqs: [
      {
        question: "Can you design an office with a relaxed, homely feel?",
        answer: "Yes. Warm materials, plants, good lighting and a comfortable breakout area all help.",
      },
      {
        question: "Can you supply furniture?",
        answer: "Yes. Workstations, seating and storage can be included in the BOQ.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Hebbal", href: "/office-interior-designers-in-hebbal" },
      { label: "Office Interior Designers in Manyata Tech Park", href: "/office-interior-designers-in-manyata-tech-park" },
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Startup Office Interior Design in Bangalore", href: "/startup-office-interior-design-in-bangalore" },
    ],
  },
  {
    service: "office",
    place: "Thanisandra",
    key: "thanisandra",
    badge: NORTH,
    image: "officeLounge",
    pitch: "office interiors near Manyata — commercial buildings on Thanisandra Main Road.",
    subtitle: "Office interiors on Thanisandra Main Road, close to Manyata Tech Park.",
    intro:
      "Thanisandra Main Road, beside Manyata Tech Park, has new commercial buildings housing smaller companies, service providers and teams that want to be near the tech park without its rents.",
    context: {
      heading: "New buildings, first fit-outs",
      body: [
        "In a new building, you are often the first tenant on the floor. We check what the landlord has provided and plan the rest.",
        "We coordinate with the landlord on power, AC and fire so the office is ready to use on handover.",
      ],
    },
    faqs: [
      {
        question: "Can you coordinate with our landlord?",
        answer: "Yes. We share drawings, agree what the landlord provides and plan our work around it.",
      },
      {
        question: "Are you close to Thanisandra?",
        answer: "Yes. Our Yelahanka office is in North Bangalore, so our team can be on site often.",
      },
    ],
    related: [
      { label: "Office Interior Designers in Manyata Tech Park", href: "/office-interior-designers-in-manyata-tech-park" },
      { label: "Office Interior Designers in Hebbal", href: "/office-interior-designers-in-hebbal" },
      { label: "Office Interior Designers in Kalyan Nagar", href: "/office-interior-designers-in-kalyan-nagar" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
    ],
  },
]

const interiors: LocalInput[] = [
  {
    service: "interior",
    place: "Dasarahalli",
    key: "dasarahalli",
    badge: NORTH,
    image: "livingTv",
    pitch: "interiors for houses and apartments on Tumkur Road — kitchens, wardrobes, ceilings and painting.",
    subtitle: "Practical, well-built interiors for Dasarahalli homes.",
    intro:
      "Dasarahalli, on Tumkur Road near Peenya, has independent houses and growing apartment projects near the metro. Many families here are setting up a new home and want practical interiors that last.",
    context: {
      heading: "Interiors built for daily life",
      body: [
        "We prioritise storage and durability — wardrobes with lofts, a kitchen with deep drawers, and finishes that stand up to family life.",
        "Everything is listed in an itemised quote so you can choose what to do now and what later.",
      ],
    },
    faqs: [
      {
        question: "Can we do the interiors in phases?",
        answer: "Yes. We design the whole home and build it in phases, so it stays consistent.",
      },
      {
        question: "Do you also build houses here?",
        answer: "Yes. ACIPL builds independent houses in Dasarahalli and nearby.",
      },
    ],
    related: [
      { label: "House Construction in Dasarahalli", href: "/house-construction-in-dasarahalli" },
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
      { label: "Interior Designers in Hesaraghatta Road", href: "/interior-designers-in-hesaraghatta-road" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Hesaraghatta Road",
    key: "hesaraghatta-road",
    badge: NORTH,
    image: "bedroom",
    pitch: "interiors for new houses and apartments along Hesaraghatta Road — full-home design and execution.",
    subtitle: "Complete interiors for new homes along Hesaraghatta Road.",
    intro:
      "Hesaraghatta Road, from Jalahalli Cross towards Chikkabanavara, has new layouts and apartment projects where families are moving into their first owned homes.",
    context: {
      heading: "A first home, done completely",
      body: [
        "First-time homeowners often want everything at once — kitchen, wardrobes, TV unit, ceilings, lighting and paint. We plan it as one project with one schedule.",
        "We also tell you honestly what can wait, so the budget goes where it matters most.",
      ],
    },
    faqs: [
      {
        question: "What should we do first if the budget is tight?",
        answer: "Usually the kitchen and bedroom wardrobes, then the living room. We help you prioritise.",
      },
      {
        question: "Do you show a 3D design?",
        answer: "Yes. You get 3D views of the main rooms before anything is made.",
      },
    ],
    related: [
      { label: "House Construction in Hesaraghatta Road", href: "/house-construction-in-hesaraghatta-road" },
      { label: "Interior Designers in Dasarahalli", href: "/interior-designers-in-dasarahalli" },
      { label: "Interior Designers in Vidyaranyapura", href: "/interior-designers-in-vidyaranyapura" },
      { label: "New Flat Interior Design in Bangalore", href: "/new-flat-interior-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Magadi Road",
    key: "magadi-road",
    badge: CITY,
    image: "livingMarble",
    pitch: "interiors for independent houses and apartments along Magadi Road — kitchens, wardrobes and full homes.",
    subtitle: "Interiors for Magadi Road homes, designed in 3D and fitted by one team.",
    intro:
      "Magadi Road has older neighbourhoods near the city end and new layouts and apartments further out. Interior projects here range from updating an older house to fitting out a new flat.",
    context: {
      heading: "Old house or new flat",
      body: [
        "In older houses, we check wiring and damp before planning interiors. In new flats, we work around the builder's points.",
        "Either way, you get a layout, 3D views and an itemised quote before work starts.",
      ],
    },
    faqs: [
      {
        question: "Can you handle civil work as well as interiors?",
        answer: "Yes. Repairs, waterproofing, wiring and plumbing are handled by the same team.",
      },
      {
        question: "Do you give an itemised quote?",
        answer: "Yes. Every unit, finish and fitting is listed.",
      },
    ],
    related: [
      { label: "House Construction in Magadi Road", href: "/house-construction-in-magadi-road" },
      { label: "Interior Designers in Vijayanagar", href: "/interior-designers-in-vijayanagar" },
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
    ],
  },
  {
    service: "interior",
    place: "Kumaraswamy Layout",
    key: "kumaraswamy-layout",
    badge: CITY,
    image: "pooja",
    pitch: "interiors for independent houses in Kumaraswamy Layout — kitchens, wardrobes, pooja units and living rooms.",
    subtitle: "Interiors for Kumaraswamy Layout's family homes.",
    intro:
      "Kumaraswamy Layout is a settled South Bangalore neighbourhood of independent houses, many with multiple floors for extended families or tenants. Interiors here often need to suit several generations.",
    context: {
      heading: "Interiors for several generations",
      body: [
        "Parents may want traditional finishes and a proper pooja room; children may want something more contemporary. We design a palette that ties the floors together while giving each its own character.",
        "Storage is always a priority in a family home, so we plan wardrobes, lofts and utility storage carefully.",
      ],
    },
    faqs: [
      {
        question: "Can you design a traditional pooja room?",
        answer: "Yes. We design pooja rooms and units in wood, marble or stone to suit your traditions.",
      },
      {
        question: "Can each floor have a different style?",
        answer: "Yes. We keep a common thread so the house feels connected, while each floor suits its occupants.",
      },
    ],
    related: [
      { label: "House Construction in Kumaraswamy Layout", href: "/house-construction-in-kumaraswamy-layout" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Interior Designers in Padmanabhanagar", href: "/interior-designers-in-padmanabhanagar" },
      { label: "Pooja Room Design in Bangalore", href: "/pooja-room-design-in-bangalore" },
    ],
  },
  {
    service: "interior",
    place: "Padmanabhanagar",
    key: "padmanabhanagar",
    badge: CITY,
    image: "villaRoom",
    pitch: "interiors for independent houses and apartments in Padmanabhanagar — design-led and practical.",
    subtitle: "Interiors for Padmanabhanagar homes, from one room to the whole house.",
    intro:
      "Padmanabhanagar, between Banashankari and Kumaraswamy Layout, is a residential area of independent houses and smaller apartment buildings. Owners here often renovate and refurnish homes they have lived in for years.",
    context: {
      heading: "Refreshing a long-lived-in home",
      body: [
        "After years in a home, families know exactly what does not work — too little storage, poor lighting, a kitchen that is hard to use. We start from those frustrations.",
        "We can work room by room, so the house stays livable throughout.",
      ],
    },
    faqs: [
      {
        question: "Can you do one room at a time?",
        answer: "Yes. We plan the whole home first and then execute room by room.",
      },
      {
        question: "Can you improve the lighting?",
        answer: "Yes. Layered lighting — ceiling, task and accent — is part of every design.",
      },
    ],
    related: [
      { label: "House Construction in Padmanabhanagar", href: "/house-construction-in-padmanabhanagar" },
      { label: "Interior Designers in Kumaraswamy Layout", href: "/interior-designers-in-kumaraswamy-layout" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
    ],
  },
  {
    service: "interior",
    place: "Chandapura",
    key: "chandapura",
    badge: CITY,
    image: "bedroom",
    pitch: "interiors for new apartments and houses around Chandapura — kitchens, wardrobes and full homes.",
    subtitle: "Interiors for Chandapura's new apartments and houses, south of Electronic City.",
    intro:
      "Chandapura, south of Electronic City on Hosur Road, has many new apartment projects and layouts. Owners here are typically setting up a new home, often while working at the tech campuses nearby.",
    context: {
      heading: "New home, busy owners",
      body: [
        "We keep site visits to the essentials and share designs online, with samples brought to you once.",
        "Factory-made units mean less time on site and a faster move-in.",
      ],
    },
    faqs: [
      {
        question: "Do you take on projects as far out as Chandapura?",
        answer: "Yes. We work across Bangalore and its outskirts, with a supervisor assigned to each project.",
      },
      {
        question: "Can we approve the design online?",
        answer: "Yes. Layouts, 3D views and quotes are shared online.",
      },
    ],
    related: [
      { label: "House Construction in Chandapura", href: "/house-construction-in-chandapura" },
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Modular Kitchen in Electronic City", href: "/modular-kitchen-in-electronic-city" },
      { label: "New Flat Interior Design in Bangalore", href: "/new-flat-interior-design-in-bangalore" },
    ],
  },
]

const construction: LocalInput[] = [
  {
    service: "construction",
    place: "Kumaraswamy Layout",
    key: "kumaraswamy-layout",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "rebuilding and new house construction in Kumaraswamy Layout — multi-floor family and rental homes.",
    subtitle: "Rebuilding Kumaraswamy Layout homes as modern multi-floor houses.",
    intro:
      "Kumaraswamy Layout's houses are mostly owner-built, often on 30x40 and similar sites. Many families are now rebuilding — replacing an older house with a modern home that has parking, more floors and rental units.",
    context: {
      heading: "Rebuilding on a settled street",
      body: [
        "Rebuilding next to occupied houses needs care: we record neighbouring walls, plan demolition and excavation to protect them, and keep heavy work to agreed hours.",
        "We design the structure for the final number of floors, even if you build fewer now.",
      ],
    },
    faqs: [
      {
        question: "Can we add rental floors when we rebuild?",
        answer: "Yes, within what the plot's rules allow. We check road width, setbacks and permitted floors first.",
      },
      {
        question: "Do you handle demolition?",
        answer: "Yes. Demolition, debris removal and salvage of anything you want to keep are part of the project.",
      },
    ],
    related: [
      { label: "Interior Designers in Kumaraswamy Layout", href: "/interior-designers-in-kumaraswamy-layout" },
      { label: "House Construction in Banashankari", href: "/house-construction-in-banashankari" },
      { label: "House Construction in Padmanabhanagar", href: "/house-construction-in-padmanabhanagar" },
      { label: "Old House Demolition and Rebuild in Bangalore", href: "/old-house-demolition-and-rebuild-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Padmanabhanagar",
    key: "padmanabhanagar",
    badge: CITY,
    image: "houseTimber",
    pitch: "house construction and rebuilds in Padmanabhanagar — design, approvals and construction by one team.",
    subtitle: "New homes and rebuilds in Padmanabhanagar, designed and built by one team.",
    intro:
      "Padmanabhanagar's independent houses sit on gently sloping streets between Banashankari and Kumaraswamy Layout. Families here are rebuilding older homes or building on remaining plots.",
    context: {
      heading: "Building on sloping streets",
      body: [
        "Sloping plots affect plinth height, drainage and the entrance. We survey levels and design the ground floor and driveway to suit.",
        "Retaining walls and drainage are designed with the house, not added afterwards.",
      ],
    },
    faqs: [
      {
        question: "Does a sloping plot cost more to build on?",
        answer: "It can, because of extra foundation, retaining or filling work. We survey levels and include it in the estimate.",
      },
      {
        question: "Can you design for stilt parking?",
        answer: "Yes, where the plot and rules allow. We check before design.",
      },
    ],
    related: [
      { label: "Interior Designers in Padmanabhanagar", href: "/interior-designers-in-padmanabhanagar" },
      { label: "House Construction in Kumaraswamy Layout", href: "/house-construction-in-kumaraswamy-layout" },
      { label: "House Construction in Jayanagar", href: "/house-construction-in-jayanagar" },
      { label: "Stilt Parking House Construction in Bangalore", href: "/stilt-parking-house-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Bommanahalli",
    key: "bommanahalli",
    badge: CITY,
    image: "houseFourStorey",
    pitch: "rental and family house construction near Hosur Road — designed for parking, rentals and reliable water.",
    subtitle: "Building family and rental homes in Bommanahalli.",
    intro:
      "Bommanahalli, near Silk Board and Hosur Road, has strong rental demand from people working in HSR, BTM and Electronic City. Many owners here build or rebuild with rental floors above the family home.",
    context: {
      heading: "Designing for rental income",
      body: [
        "Rental units need separate meters, good ventilation, reliable water and durable finishes. We plan these from the start.",
        "We design the unit mix to suit the plot and the rental demand — compact 1BHKs, 2BHKs or a mix.",
      ],
    },
    faqs: [
      {
        question: "How many rental units can we build?",
        answer: "It depends on the plot's permitted floors and floor area. We check and draw options showing the units each gives.",
      },
      {
        question: "Can each unit have its own meter?",
        answer: "Yes. Separate electricity and water meters are planned for each unit.",
      },
    ],
    related: [
      { label: "Interior Designers in Bommanahalli", href: "/interior-designers-in-bommanahalli" },
      { label: "Modular Kitchen in Bommanahalli", href: "/modular-kitchen-in-bommanahalli" },
      { label: "House Construction in Begur", href: "/house-construction-in-begur" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Hulimavu",
    key: "hulimavu",
    badge: CITY,
    image: "houseTimber",
    pitch: "independent house construction off Bannerghatta Road — design, approvals and construction.",
    subtitle: "Independent houses in Hulimavu, designed and built by one team.",
    intro:
      "Hulimavu, off Bannerghatta Road, has layouts of independent houses behind its apartment complexes. Plot owners here build family homes, often with a rental floor.",
    context: {
      heading: "Water and drainage near the lake",
      body: [
        "Plots near Hulimavu lake and low-lying areas need a raised plinth and careful storm-water drainage. We check levels on every plot.",
        "We plan rainwater harvesting, a recharge pit and sump to reduce dependence on tankers.",
      ],
    },
    faqs: [
      {
        question: "Our plot is low-lying. What should we do?",
        answer: "Usually raise the plinth and plan drainage carefully. We survey and design for it.",
      },
      {
        question: "Do you handle plan sanction?",
        answer: "Yes. We prepare the drawings and paperwork.",
      },
    ],
    related: [
      { label: "Interior Designers in Hulimavu", href: "/interior-designers-in-hulimavu" },
      { label: "Modular Kitchen in Hulimavu", href: "/modular-kitchen-in-hulimavu" },
      { label: "House Construction in Bannerghatta Road", href: "/house-construction-in-bannerghatta-road" },
      { label: "House Construction in Begur", href: "/house-construction-in-begur" },
    ],
  },
  {
    service: "construction",
    place: "Brookefield",
    key: "brookefield",
    badge: CITY,
    image: "villaWhite",
    pitch: "independent house construction near ITPL — family homes, rental buildings and rebuilds.",
    subtitle: "Family homes and rental buildings in Brookefield, near the Whitefield tech parks.",
    intro:
      "Brookefield's independent-house layouts sit close to ITPL and the Whitefield tech parks. Owners here build family homes, rebuild older houses, or build rental units for the large working population nearby.",
    context: {
      heading: "Close to the tech parks",
      body: [
        "Rental demand is strong, so many owners design a family floor plus rental units. We plan separate entrances where needed.",
        "Water supply varies across East Bangalore, so we design storage, rainwater harvesting and recharge carefully.",
      ],
    },
    faqs: [
      {
        question: "Can you design separate entrances for rental units?",
        answer: "Yes. A separate staircase or entrance gives tenants and the family privacy.",
      },
      {
        question: "Do you build villas as well?",
        answer: "Yes. We design and build villas and large family homes.",
      },
    ],
    related: [
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Modular Kitchen in Brookefield", href: "/modular-kitchen-in-brookefield" },
      { label: "House Construction in Whitefield", href: "/house-construction-in-whitefield" },
      { label: "House Construction in Marathahalli", href: "/house-construction-in-marathahalli" },
    ],
  },
  {
    service: "construction",
    place: "HBR Layout",
    key: "hbr-layout",
    badge: NORTH,
    image: "houseTimber",
    pitch: "house construction and rebuilds in HBR Layout — design-led homes from a North Bangalore team.",
    subtitle: "Design-led homes in HBR Layout, from a team based in North Bangalore.",
    intro:
      "HBR Layout is a well-planned layout of independent houses near Kalyan Nagar. Owners here often want a contemporary, well-designed home — whether building on a remaining plot or replacing an older house.",
    context: {
      heading: "A home with a strong design",
      body: [
        "We design the elevation, plan and interiors together, so the house looks and works as one.",
        "We show 3D views of the elevation and key spaces before construction starts.",
      ],
    },
    faqs: [
      {
        question: "Can you design a contemporary elevation?",
        answer: "Yes. We design and revise the 3D elevation with you until it is right.",
      },
      {
        question: "Can you do the interiors too?",
        answer: "Yes. Construction and interiors can be planned together.",
      },
    ],
    related: [
      { label: "Interior Designers in HBR Layout", href: "/interior-designers-in-hbr-layout" },
      { label: "Modular Kitchen in HBR Layout", href: "/modular-kitchen-in-hbr-layout" },
      { label: "House Construction in Kalyan Nagar", href: "/house-construction-in-kalyan-nagar" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
    ],
  },
  {
    service: "construction",
    place: "Chandapura",
    key: "chandapura",
    badge: CITY,
    image: "villaGarden",
    pitch: "house construction on plots around Chandapura and Hosur Road — approvals, structure and finishing.",
    subtitle: "Building homes on Chandapura's new layout plots.",
    intro:
      "Chandapura, south of Electronic City, has many new residential layouts where families are building their first homes. These areas often need careful checks on layout approval, access, water and drainage.",
    context: {
      heading: "Checks before building on a new layout",
      body: [
        "We review the layout's approval, the plot documents and access before design, so there are no surprises at plan sanction.",
        "New layouts may not have piped water or drainage yet, so we plan a borewell, sump, storage and septic or sewer connection as needed.",
      ],
    },
    faqs: [
      {
        question: "Which authority approves plans in Chandapura?",
        answer: "It depends on the plot's location and layout approval. We check from your documents.",
      },
      {
        question: "Do you build on the city's outskirts?",
        answer: "Yes. We take on construction across Bangalore and its outskirts.",
      },
    ],
    related: [
      { label: "Interior Designers in Chandapura", href: "/interior-designers-in-chandapura" },
      { label: "House Construction in Electronic City", href: "/house-construction-in-electronic-city" },
      { label: "House Construction in Attibele", href: "/house-construction-in-attibele" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Attibele",
    key: "attibele",
    badge: CITY,
    image: "villaWhite",
    pitch: "house and villa construction around Attibele on the Hosur Road border — design to handover.",
    subtitle: "Houses and villas around Attibele, designed and built by one team.",
    intro:
      "Attibele, on Hosur Road near the state border, has growing residential layouts and villa plots. Land is more affordable than in the city, so owners here often build larger homes with gardens.",
    context: {
      heading: "Larger plots, larger homes",
      body: [
        "Bigger plots allow gardens, wider setbacks and single-level living. We design around the plot's orientation for light and breeze.",
        "We plan water, power and drainage carefully, as services can be less developed in outlying areas.",
      ],
    },
    faqs: [
      {
        question: "Can you design a single-storey house?",
        answer: "Yes. On larger plots, single-storey homes are a comfortable choice, especially for older family members.",
      },
      {
        question: "Do you landscape the garden?",
        answer: "Yes. Landscaping, paving and outdoor lighting can be part of the project.",
      },
    ],
    related: [
      { label: "House Construction in Chandapura", href: "/house-construction-in-chandapura" },
      { label: "House Construction in Electronic City", href: "/house-construction-in-electronic-city" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "Farmhouse Construction in Bangalore", href: "/farmhouse-construction-in-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Nelamangala",
    key: "nelamangala",
    badge: CITY,
    image: "villaGarden",
    pitch: "house, villa and farmhouse construction around Nelamangala on Tumkur Road.",
    subtitle: "Homes, villas and farmhouses around Nelamangala.",
    intro:
      "Nelamangala, on Tumkur Road north-west of the city, has residential layouts, villa plots and farmland. Owners here build family homes, weekend villas and farmhouses.",
    context: {
      heading: "Building beyond the city",
      body: [
        "Outside the city, we check land conversion, approvals and access carefully before design, as these vary from plot to plot.",
        "Water, power and drainage often need to be planned from scratch — borewell, storage, solar and septic systems.",
      ],
    },
    faqs: [
      {
        question: "Can you build a farmhouse?",
        answer: "Yes, where the land use permits. We check conversion and approvals first.",
      },
      {
        question: "Can you plan solar power?",
        answer: "Yes. We plan roof space and wiring for solar in the design.",
      },
    ],
    related: [
      { label: "House Construction in Dasarahalli", href: "/house-construction-in-dasarahalli" },
      { label: "House Construction in Hesaraghatta Road", href: "/house-construction-in-hesaraghatta-road" },
      { label: "Farmhouse Construction in Bangalore", href: "/farmhouse-construction-in-bangalore" },
      { label: "House Construction in West Bangalore", href: "/house-construction-in-west-bangalore" },
    ],
  },
  {
    service: "construction",
    place: "Doddaballapur",
    key: "doddaballapur",
    badge: NORTH,
    image: "villaRoof",
    pitch: "house and villa construction around Doddaballapur Road and the town — from our North Bangalore base.",
    subtitle: "Homes and villas around Doddaballapur, from a team based in Yelahanka.",
    intro:
      "Doddaballapur Road runs north-west from Yelahanka, with new layouts, villa projects and the town of Doddaballapur at its end. Being based in Yelahanka, we can supervise projects here closely.",
    context: {
      heading: "Close supervision from Yelahanka",
      body: [
        "Distance from the city often means less supervision from builders. Our Yelahanka office is on the way, so our engineers can visit regularly.",
        "We check plot documents, approvals and services before design, as they vary widely along the corridor.",
      ],
    },
    faqs: [
      {
        question: "How often will your engineer visit?",
        answer: "A named site engineer visits at every key stage and sends regular photo updates.",
      },
      {
        question: "Do you build villas here?",
        answer: "Yes. We design and build villas and independent houses along Doddaballapur Road.",
      },
    ],
    related: [
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "House Construction in Kattigenahalli", href: "/house-construction-in-kattigenahalli" },
      { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
    ],
  },
]

export const localInputs6: LocalInput[] = [...offices, ...interiors, ...construction]
