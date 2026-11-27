/**
 * Modular kitchen and home renovation locality pages, batch 4 (40 pages).
 * Same rules as the earlier locality files: only what is specific to the area
 * lives here. No builders, projects, distances or prices are named.
 */

import type { LocalInput } from "./build"

const NORTH = "A short drive from our Yelahanka office"
const CITY = "Design-and-build across Bangalore"

const kitchens: LocalInput[] = [
  {
    service: "kitchen",
    place: "Bannerghatta Road",
    key: "bannerghatta-road",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for the apartments and layouts along Bannerghatta Road — measured, made off site, installed.",
    subtitle: "Modular kitchens for Bannerghatta Road apartments, designed around the points you already have.",
    intro:
      "Bannerghatta Road is lined with apartment complexes from Arekere to Hulimavu and beyond, most with compact L-shaped or parallel kitchens. Owners here usually want to replace a basic builder kitchen with one that stores more and is easier to clean.",
    context: {
      heading: "Upgrading a builder kitchen",
      body: [
        "Builder kitchens often have a granite platform, a sink and little else. We check whether the platform can stay, then design base units, wall units and a full-height loft around it.",
        "Because the units are made off site, the kitchen is only out of use for removal, any plumbing changes and installation.",
      ],
    },
    faqs: [
      {
        question: "Can you keep our existing granite platform?",
        answer: "If it is level, sound and at a comfortable height, yes. We design the units to fit under and above it.",
      },
      {
        question: "Can we approve the design online?",
        answer: "Yes. We measure on site, then share the layout and 3D views online and bring samples to your flat.",
      },
    ],
    related: [
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "Home Renovation in Bannerghatta Road", href: "/home-renovation-in-bannerghatta-road" },
      { label: "Modular Kitchen in Hulimavu", href: "/modular-kitchen-in-hulimavu" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Hulimavu",
    key: "hulimavu",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for apartments in Hulimavu — more storage, better counters, an itemised quote.",
    subtitle: "Modular kitchens for Hulimavu flats, with every cabinet and fitting priced line by line.",
    intro:
      "Hulimavu is mostly apartments, with a few independent houses in the layouts behind the main road. Kitchens here are compact, so the design has to make every wall work — corner units, tall pantries and a loft right up to the ceiling.",
    context: {
      heading: "Making a compact kitchen work",
      body: [
        "In a small kitchen, drawers beat shelves. Deep drawers for vessels and a pull-out for daily-use items mean less bending and less clutter.",
        "We plan the chimney, hob, sink and fridge so the cook moves as little as possible between them.",
      ],
    },
    faqs: [
      {
        question: "Can we fit a tall pantry in a small kitchen?",
        answer: "Usually, yes — often at the end of a run or beside the fridge. We show you where it fits in the 3D design.",
      },
      {
        question: "Do you also do wardrobes and TV units?",
        answer: "Yes. Many owners do the kitchen and wardrobes together so finishes match.",
      },
    ],
    related: [
      { label: "Interior Designers in Hulimavu", href: "/interior-designers-in-hulimavu" },
      { label: "Modular Kitchen in Bannerghatta Road", href: "/modular-kitchen-in-bannerghatta-road" },
      { label: "Modular Kitchen in Begur", href: "/modular-kitchen-in-begur" },
      { label: "House Construction in Hulimavu", href: "/house-construction-in-hulimavu" },
    ],
  },
  {
    service: "kitchen",
    place: "Begur",
    key: "begur",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for new flats and independent houses around Begur — designed, made and installed by one team.",
    subtitle: "Modular kitchens for Begur's newer homes, planned before you move in.",
    intro:
      "Begur has grown quickly, with new apartments and independent houses in the layouts around the lake and Begur Road. Many owners here are fitting their first proper kitchen in a newly handed-over home.",
    context: {
      heading: "A kitchen ready before you move in",
      body: [
        "If you plan the kitchen as soon as you get the keys, it can be installed before you move — no cooking in a half-finished kitchen.",
        "In a new home, we check the plumbing and electrical points the builder left and move only what genuinely helps the layout.",
      ],
    },
    faqs: [
      {
        question: "Should we wait until we move in to plan the kitchen?",
        answer: "No — planning it at handover lets us install before you move, which is much easier for everyone.",
      },
      {
        question: "Can you add points for a microwave and water purifier?",
        answer: "Yes. We plan power and water points for every appliance you use and include the work in the quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Begur", href: "/interior-designers-in-begur" },
      { label: "Home Renovation in Begur", href: "/home-renovation-in-begur" },
      { label: "Modular Kitchen in Bommanahalli", href: "/modular-kitchen-in-bommanahalli" },
      { label: "House Construction in Begur", href: "/house-construction-in-begur" },
    ],
  },
  {
    service: "kitchen",
    place: "Bommanahalli",
    key: "bommanahalli",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for homes and rental floors near Hosur Road — durable, practical, itemised.",
    subtitle: "Practical modular kitchens for Bommanahalli homes and rental units.",
    intro:
      "Bommanahalli, on Hosur Road near Silk Board, has many independent houses with rental floors and a growing number of apartments. Owners here often fit kitchens in their own floor and in the units they let out.",
    context: {
      heading: "Kitchens for owners and tenants",
      body: [
        "For your own floor, we design around how your family cooks. For rental units, we recommend durable laminate finishes and sturdy hardware that last through several tenancies.",
        "A standard design across rental units keeps the cost down and makes later repairs simple.",
      ],
    },
    faqs: [
      {
        question: "Can you do kitchens for several rental units at once?",
        answer: "Yes. We can standardise the design and install units together or as they fall vacant.",
      },
      {
        question: "Which finish lasts longest in a rental kitchen?",
        answer: "Good-quality laminate on a moisture-resistant carcass is a reliable choice. We show samples and explain how each finish wears.",
      },
    ],
    related: [
      { label: "Interior Designers in Bommanahalli", href: "/interior-designers-in-bommanahalli" },
      { label: "House Construction in Bommanahalli", href: "/house-construction-in-bommanahalli" },
      { label: "Modular Kitchen in Begur", href: "/modular-kitchen-in-begur" },
      { label: "Modular Kitchen in HSR Layout", href: "/modular-kitchen-in-hsr-layout" },
    ],
  },
  {
    service: "kitchen",
    place: "Kanakapura Road",
    key: "kanakapura-road",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for new apartments and villas along Kanakapura Road — U-shaped, L-shaped and island layouts.",
    subtitle: "Modular kitchens for Kanakapura Road's new apartments and villas.",
    intro:
      "Kanakapura Road has some of South Bangalore's newest apartment towers and villa communities. Kitchens range from compact apartment layouts to large villa kitchens with room for an island and a separate utility.",
    context: {
      heading: "Planning a larger kitchen",
      body: [
        "Villa kitchens can take a U-shape or an island, a tall appliance wall and a utility for washing. We plan the work triangle so a big kitchen does not mean more walking.",
        "Open kitchens are always on show, so we help you pick finishes that look good and wipe clean.",
      ],
    },
    faqs: [
      {
        question: "Can you design a separate utility area?",
        answer: "Yes. A utility with a sink, washing-machine space and storage keeps heavy washing out of the main kitchen.",
      },
      {
        question: "Do you install built-in ovens and dishwashers?",
        answer: "Yes. We plan the cut-outs, power and plumbing for built-in appliances in the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Kanakapura Road", href: "/interior-designers-in-kanakapura-road" },
      { label: "House Construction in Kanakapura Road", href: "/house-construction-in-kanakapura-road" },
      { label: "Home Renovation in Kanakapura Road", href: "/home-renovation-in-kanakapura-road" },
      { label: "Island Kitchen Design in Bangalore", href: "/island-kitchen-design-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Uttarahalli",
    key: "uttarahalli",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for independent houses and apartments in Uttarahalli — made to measure, itemised quote.",
    subtitle: "Made-to-measure modular kitchens for Uttarahalli homes.",
    intro:
      "Uttarahalli has a large number of independent houses built by owners over the last two decades, along with newer apartments. Kitchens in the houses are rarely standard sizes, so units need to be designed to the room, not forced into it.",
    context: {
      heading: "Made to the room",
      body: [
        "We measure every wall, window and pillar and design units to fit, using custom widths rather than filling gaps with panels.",
        "If the existing platform is too low or uneven, we rebuild it at the right height before the units go in.",
      ],
    },
    faqs: [
      {
        question: "Our kitchen has a pillar in the corner. Can you work around it?",
        answer: "Yes. We design units and fillers around pillars and windows so the kitchen still looks fitted.",
      },
      {
        question: "Can you rebuild our kitchen platform?",
        answer: "Yes. We remove the old one and build a new platform at a comfortable height with a new countertop.",
      },
    ],
    related: [
      { label: "Interior Designers in Uttarahalli", href: "/interior-designers-in-uttarahalli" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
      { label: "Home Renovation in Uttarahalli", href: "/home-renovation-in-uttarahalli" },
      { label: "Modular Kitchen in Banashankari", href: "/modular-kitchen-in-banashankari" },
    ],
  },
  {
    service: "kitchen",
    place: "Rajarajeshwari Nagar",
    key: "rajarajeshwari-nagar",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for houses and apartments in RR Nagar — designed in 3D, installed by our team.",
    subtitle: "Modular kitchens for RR Nagar homes, designed in 3D and installed by one team.",
    intro:
      "Rajarajeshwari Nagar is a large, settled residential area of independent houses and apartments off Mysore Road. Families here often update a kitchen that was built with the house — open shelves, a tiled platform and little closed storage.",
    context: {
      heading: "From open shelves to closed storage",
      body: [
        "Closed cabinets keep dust and grease off your vessels. We replace open shelves with base and wall units, a tall pantry and a loft.",
        "Good under-cabinet lighting makes a big difference to an older kitchen, and we plan it with the electrical work.",
      ],
    },
    faqs: [
      {
        question: "How long does it take to replace an old kitchen?",
        answer: "It depends on the civil and plumbing work needed. You get a dated schedule before we start.",
      },
      {
        question: "Do you supply chimneys?",
        answer: "Yes, or we can fit one you buy. Either way, the duct route and power are planned in the design.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "House Construction in Rajarajeshwari Nagar", href: "/house-construction-in-rajarajeshwari-nagar" },
      { label: "Home Renovation in Rajarajeshwari Nagar", href: "/home-renovation-in-rajarajeshwari-nagar" },
      { label: "Modular Kitchen in Kengeri", href: "/modular-kitchen-in-kengeri" },
    ],
  },
  {
    service: "kitchen",
    place: "Kengeri",
    key: "kengeri",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for new homes and apartments around Kengeri — itemised, made off site, installed fast.",
    subtitle: "Modular kitchens for Kengeri's new houses and apartments.",
    intro:
      "Kengeri, on Mysore Road at the city's western edge, has many newly built houses and apartments near the metro. Owners here often want a good kitchen without overspending, with every item priced clearly.",
    context: {
      heading: "A clear, itemised quote",
      body: [
        "Every cabinet, shutter finish, hinge, channel and accessory is listed in the quote, so you can see where the money goes and trim what you do not need.",
        "We suggest where to spend — hardware and countertop — and where a simpler finish works just as well.",
      ],
    },
    faqs: [
      {
        question: "Where is it worth spending more in a kitchen?",
        answer: "Hinges, drawer channels and the countertop take the most wear. Spending a little more there usually pays off.",
      },
      {
        question: "Can we add accessories later?",
        answer: "Yes. Many accessories can be added to standard units later, and we plan the cabinet sizes to allow it.",
      },
    ],
    related: [
      { label: "Interior Designers in Kengeri", href: "/interior-designers-in-kengeri" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "Home Renovation in Kengeri", href: "/home-renovation-in-kengeri" },
      { label: "Modular Kitchen in Rajarajeshwari Nagar", href: "/modular-kitchen-in-rajarajeshwari-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Nagarbhavi",
    key: "nagarbhavi",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for independent houses in Nagarbhavi — custom units, durable finishes, one team.",
    subtitle: "Modular kitchens for Nagarbhavi's independent houses, made to measure.",
    intro:
      "Nagarbhavi is mostly independent houses in BDA and private layouts, many with generous kitchens. Families here often cook for a larger household and want storage for big vessels and festival cooking.",
    context: {
      heading: "Storage for a busy family kitchen",
      body: [
        "We plan deep drawers for large vessels, a tall unit for grains and provisions, and a separate area for the mixer and grinder so the counter stays clear.",
        "A strong chimney and a heat-tolerant countertop near the hob are essential for heavy daily cooking.",
      ],
    },
    faqs: [
      {
        question: "Can you design storage for large cooking vessels?",
        answer: "Yes. Wide, deep drawers with heavy-duty channels hold large vessels and are easier to reach than low shelves.",
      },
      {
        question: "Do you also build houses in Nagarbhavi?",
        answer: "Yes. ACIPL builds independent houses as well as doing kitchens and interiors.",
      },
    ],
    related: [
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
      { label: "Home Renovation in Nagarbhavi", href: "/home-renovation-in-nagarbhavi" },
      { label: "Modular Kitchen in Basaveshwaranagar", href: "/modular-kitchen-in-basaveshwaranagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Basaveshwaranagar",
    key: "basaveshwaranagar",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for established homes in Basaveshwaranagar — replacing old platforms with fitted kitchens.",
    subtitle: "Replacing older kitchens in Basaveshwaranagar with fitted modular kitchens.",
    intro:
      "Basaveshwaranagar's independent houses are well kept but many still have their original kitchens. Replacing one is often the single change that makes the biggest difference to daily life at home.",
    context: {
      heading: "Replacing an original kitchen",
      body: [
        "We remove the old shelves and platform, update the plumbing and wiring, retile the wall and fit new units and a countertop — one team, one quote.",
        "If you are also renovating bathrooms or flooring, we sequence the work so the kitchen is out of use for as short a time as possible.",
      ],
    },
    faqs: [
      {
        question: "Can you change the kitchen while we live at home?",
        answer: "Yes. We keep the work to agreed hours and help you set up a temporary cooking area for the few days it is out of use.",
      },
      {
        question: "Can you replace the kitchen tiles too?",
        answer: "Yes. Dado tiling between the countertop and wall units is part of most kitchen replacements.",
      },
    ],
    related: [
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
      { label: "House Construction in Basaveshwaranagar", href: "/house-construction-in-basaveshwaranagar" },
      { label: "Home Renovation in Basaveshwaranagar", href: "/home-renovation-in-basaveshwaranagar" },
      { label: "Modular Kitchen in Rajajinagar", href: "/modular-kitchen-in-rajajinagar" },
    ],
  },
  {
    service: "kitchen",
    place: "Sadashivanagar",
    key: "sadashivanagar",
    badge: NORTH,
    image: "kitchenU",
    pitch: "premium modular kitchens for bungalows and luxury apartments — lacquer, veneer, quartz and built-in appliances.",
    subtitle: "Premium kitchens for Sadashivanagar homes, designed to the detail.",
    intro:
      "Kitchens in Sadashivanagar's bungalows and luxury apartments are often large, with separate show and working kitchens. Owners here want premium finishes, built-in appliances and careful detailing.",
    context: {
      heading: "Show kitchen and working kitchen",
      body: [
        "Many larger homes have an open show kitchen for light cooking and entertaining, and a separate working kitchen for daily Indian cooking. We design both so they suit their purpose.",
        "Premium finishes such as lacquer, veneer and quartz are specified with samples you approve, and installed with care.",
      ],
    },
    faqs: [
      {
        question: "Can you design both a show kitchen and a working kitchen?",
        answer: "Yes. We plan them together, with appliances, storage and finishes suited to each.",
      },
      {
        question: "Do you work with imported appliances?",
        answer: "Yes. We plan cut-outs and services to the appliance manufacturer's specifications.",
      },
    ],
    related: [
      { label: "Interior Designers in Sadashivanagar", href: "/interior-designers-in-sadashivanagar" },
      { label: "Home Renovation in Sadashivanagar", href: "/home-renovation-in-sadashivanagar" },
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
      { label: "Modular Kitchen in Malleshwaram", href: "/modular-kitchen-in-malleshwaram" },
    ],
  },
  {
    service: "kitchen",
    place: "Frazer Town",
    key: "frazer-town",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for older homes and apartments in Frazer Town and Cox Town.",
    subtitle: "Modular kitchens for Frazer Town and Cox Town homes, made to fit older rooms.",
    intro:
      "Frazer Town and neighbouring Cox Town have older houses and apartments with kitchens that are often narrow or irregular. A well-planned modular kitchen can make them feel far bigger.",
    context: {
      heading: "Narrow kitchens, done well",
      body: [
        "A narrow kitchen usually works best as a straight or parallel layout with slim wall units and a full-height loft.",
        "We measure carefully because older walls are rarely straight, and make units and fillers to fit.",
      ],
    },
    faqs: [
      {
        question: "Can a narrow kitchen have a parallel layout?",
        answer: "Often, yes, if there is enough clear space between the counters. We check on site and show you the options.",
      },
      {
        question: "Can you design for heavy daily cooking?",
        answer: "Yes. We specify a strong chimney, a heat-tolerant countertop and easy-clean finishes near the hob.",
      },
    ],
    related: [
      { label: "Interior Designers in Frazer Town", href: "/interior-designers-in-frazer-town" },
      { label: "Home Renovation in Frazer Town", href: "/home-renovation-in-frazer-town" },
      { label: "Parallel Modular Kitchen in Bangalore", href: "/parallel-modular-kitchen-in-bangalore" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
    ],
  },
  {
    service: "kitchen",
    place: "HBR Layout",
    key: "hbr-layout",
    badge: NORTH,
    image: "kitchenU",
    pitch: "modular kitchens for independent houses and apartments in HBR Layout — design-led and practical.",
    subtitle: "Modular kitchens for HBR Layout homes, designed to look good and work hard.",
    intro:
      "HBR Layout's independent houses and apartments are home to many families who want a kitchen that looks considered as well as working well — matching the rest of a well-designed home.",
    context: {
      heading: "A kitchen that matches the home",
      body: [
        "We choose the kitchen's finishes alongside the living and dining areas, especially in open-plan homes where the kitchen is always in view.",
        "Handle-less profiles, integrated lighting and a tall appliance wall give a clean, modern look without losing storage.",
      ],
    },
    faqs: [
      {
        question: "Are handle-less kitchens practical?",
        answer: "Yes, with good profiles or push-to-open hardware. We show you both so you can choose what feels right.",
      },
      {
        question: "Can you design the kitchen with the rest of the house?",
        answer: "Yes. We often design kitchen, wardrobes and living areas together so the whole home is consistent.",
      },
    ],
    related: [
      { label: "Interior Designers in HBR Layout", href: "/interior-designers-in-hbr-layout" },
      { label: "Home Renovation in HBR Layout", href: "/home-renovation-in-hbr-layout" },
      { label: "Modular Kitchen in Kalyan Nagar", href: "/modular-kitchen-in-kalyan-nagar" },
      { label: "Open Kitchen Design in Bangalore", href: "/open-kitchen-design-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Kothanur",
    key: "kothanur",
    badge: NORTH,
    image: "kitchenParallel",
    pitch: "modular kitchens for apartments and villas in Kothanur — 3D design, factory-made units, one supervisor.",
    subtitle: "Modular kitchens for Kothanur's apartments and villas, from a team in North Bangalore.",
    intro:
      "Kothanur has gated apartments and villa layouts off Hennur Road. Most kitchen enquiries come from owners of recently completed homes who want a modular kitchen fitted before or soon after moving in.",
    context: {
      heading: "Fitted soon after handover",
      body: [
        "We measure as soon as you have access, design in 3D, and install once the units are made — so you can start cooking in a finished kitchen.",
        "In villas, we plan the kitchen with the dining area and utility so they work as one space.",
      ],
    },
    faqs: [
      {
        question: "Can you measure before we get the keys?",
        answer: "We need access to the actual kitchen to measure accurately, but we can start planning from the builder's drawings.",
      },
      {
        question: "Do you also do the rest of the interiors?",
        answer: "Yes. Kitchen, wardrobes, TV unit, ceilings and lighting can all be part of one project.",
      },
    ],
    related: [
      { label: "Interior Designers in Kothanur", href: "/interior-designers-in-kothanur" },
      { label: "House Construction in Kothanur", href: "/house-construction-in-kothanur" },
      { label: "Home Renovation in Kothanur", href: "/home-renovation-in-kothanur" },
      { label: "Modular Kitchen in Hennur", href: "/modular-kitchen-in-hennur" },
    ],
  },
  {
    service: "kitchen",
    place: "KR Puram",
    key: "kr-puram",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for apartments and independent houses around KR Puram — practical and itemised.",
    subtitle: "Practical modular kitchens for KR Puram homes, priced line by line.",
    intro:
      "KR Puram, at the meeting point of Old Madras Road and the Outer Ring Road, has a mix of older independent houses and newer apartments. Kitchens here range from tired originals to bare builder handovers.",
    context: {
      heading: "Two starting points, one approach",
      body: [
        "For older kitchens, we check plumbing and wiring before designing. For new flats, we work around the builder's points wherever possible.",
        "Either way, you get a layout, 3D views and an itemised quote before anything is made.",
      ],
    },
    faqs: [
      {
        question: "Can you replace old plumbing during the kitchen work?",
        answer: "Yes. If the pipes under the sink are old or leaking, we replace them before the new units go in.",
      },
      {
        question: "Do you work in apartments with association rules?",
        answer: "Yes. We follow working-hour and lift rules and clean up daily.",
      },
    ],
    related: [
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "Home Renovation in KR Puram", href: "/home-renovation-in-kr-puram" },
      { label: "Modular Kitchen in Hoodi", href: "/modular-kitchen-in-hoodi" },
    ],
  },
  {
    service: "kitchen",
    place: "Hoodi",
    key: "hoodi",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for apartments near ITPL and Whitefield — online design reviews for busy owners.",
    subtitle: "Modular kitchens for Hoodi apartments, with design reviews that fit around work.",
    intro:
      "Hoodi, between KR Puram and Whitefield, is mostly apartments close to the tech parks. Owners here are often short on time, so we keep site visits to the essentials and share designs online.",
    context: {
      heading: "Designed around your schedule",
      body: [
        "We measure once, share layouts and 3D views online, and bring samples on a single visit. Updates during installation come as photos.",
        "For rented flats, we coordinate access with the tenant or property manager.",
      ],
    },
    faqs: [
      {
        question: "Can you manage it if we are not in Bangalore?",
        answer: "Yes. Approvals can be done online, and we send photo updates through installation.",
      },
      {
        question: "Can you do the kitchen and wardrobes together?",
        answer: "Yes, with matching finishes if you like, under one quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Hoodi", href: "/interior-designers-in-hoodi" },
      { label: "House Construction in Hoodi", href: "/house-construction-in-hoodi" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "Modular Kitchen in KR Puram", href: "/modular-kitchen-in-kr-puram" },
    ],
  },
  {
    service: "kitchen",
    place: "Kadugodi",
    key: "kadugodi",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for new apartments and houses in Kadugodi — designed, made and installed by one team.",
    subtitle: "Modular kitchens for Kadugodi's new homes, east of Whitefield.",
    intro:
      "Kadugodi, just east of Whitefield, has many new apartments and independent houses near the metro. Owners here are typically fitting out a new home and want the kitchen done properly the first time.",
    context: {
      heading: "Getting it right the first time",
      body: [
        "We spend time on the layout before talking about finishes — where you prep, cook and wash, and what you need to store.",
        "Then we show the kitchen in 3D with your chosen finishes, and revise until you are happy.",
      ],
    },
    faqs: [
      {
        question: "How many design revisions do we get?",
        answer: "We revise the layout and finishes with you until you are happy with the design before production.",
      },
      {
        question: "Do you also build houses near Whitefield?",
        answer: "Yes. ACIPL builds independent houses across East Bangalore.",
      },
    ],
    related: [
      { label: "Interior Designers in Kadugodi", href: "/interior-designers-in-kadugodi" },
      { label: "House Construction in Kadugodi", href: "/house-construction-in-kadugodi" },
      { label: "Modular Kitchen in Varthur", href: "/modular-kitchen-in-varthur" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
    ],
  },
  {
    service: "kitchen",
    place: "Varthur",
    key: "varthur",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for villas and apartments around Varthur and Gunjur — U-shaped, island and parallel.",
    subtitle: "Modular kitchens for Varthur's villas and apartments.",
    intro:
      "Varthur and nearby Gunjur have villa communities and apartment projects that have grown with the Whitefield and Sarjapur tech corridors. Villa kitchens here are often large enough for an island or breakfast counter.",
    context: {
      heading: "Kitchens with room for an island",
      body: [
        "An island adds work space, storage and seating, but it needs clear walkways around it. We check the room and show you whether an island or a peninsula works better.",
        "If the island has a hob or sink, power and plumbing need to come through the floor, which is easiest to plan before flooring is laid.",
      ],
    },
    faqs: [
      {
        question: "Is our kitchen big enough for an island?",
        answer: "It depends on the room's width and walkways. We measure and show you the options in 3D.",
      },
      {
        question: "Can you add a breakfast counter instead?",
        answer: "Yes. A peninsula or breakfast counter gives seating in kitchens too small for a full island.",
      },
    ],
    related: [
      { label: "Interior Designers in Varthur", href: "/interior-designers-in-varthur" },
      { label: "House Construction in Varthur", href: "/house-construction-in-varthur" },
      { label: "Home Renovation in Varthur", href: "/home-renovation-in-varthur" },
      { label: "Island Kitchen Design in Bangalore", href: "/island-kitchen-design-in-bangalore" },
    ],
  },
  {
    service: "kitchen",
    place: "Brookefield",
    key: "brookefield",
    badge: CITY,
    image: "kitchenU",
    pitch: "modular kitchens for apartments in Brookefield and ITPL Main Road — practical layouts, quality hardware.",
    subtitle: "Modular kitchens for Brookefield apartments, with hardware chosen to last.",
    intro:
      "Brookefield, along ITPL Main Road, has well-established apartment complexes from the early tech-park years. Many original kitchens are now due for replacement, with sagging shutters and worn hinges.",
    context: {
      heading: "Replacing an ageing modular kitchen",
      body: [
        "If the cabinet boxes are sound, replacing shutters, hinges and channels can refresh a kitchen at lower cost. If they are swollen from moisture, a full replacement is better.",
        "We inspect the existing kitchen and give you both options honestly.",
      ],
    },
    faqs: [
      {
        question: "Can you just replace the shutters?",
        answer: "If the cabinets are in good condition, yes. We check them first and quote for shutters and hardware only.",
      },
      {
        question: "Why do kitchen cabinets swell?",
        answer: "Usually from water around the sink. We use moisture-resistant boards in wet areas and seal edges properly.",
      },
    ],
    related: [
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Home Renovation in Brookefield", href: "/home-renovation-in-brookefield" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "Modular Kitchen in Marathahalli", href: "/modular-kitchen-in-marathahalli" },
    ],
  },
  {
    service: "kitchen",
    place: "CV Raman Nagar",
    key: "cv-raman-nagar",
    badge: CITY,
    image: "kitchenParallel",
    pitch: "modular kitchens for houses and apartments in CV Raman Nagar and around Old Madras Road.",
    subtitle: "Modular kitchens for CV Raman Nagar homes, from measurement to installation.",
    intro:
      "CV Raman Nagar has a mix of older houses, government-employee layouts and newer apartments. Kitchens here come in every shape, so we measure each one and design to fit.",
    context: {
      heading: "Every kitchen measured, not assumed",
      body: [
        "We do not use standard packages. Every kitchen is measured on site and designed around its walls, windows and existing points.",
        "You get a layout, 3D views and an itemised quote, and can change anything before production.",
      ],
    },
    faqs: [
      {
        question: "Do you offer fixed kitchen packages?",
        answer: "No. Every kitchen is designed and priced for your room, so you only pay for what fits and what you need.",
      },
      {
        question: "Can you move the gas line?",
        answer: "We plan the hob position in the design and arrange for any gas-line changes to be done safely by an authorised technician.",
      },
    ],
    related: [
      { label: "Interior Designers in CV Raman Nagar", href: "/interior-designers-in-cv-raman-nagar" },
      { label: "House Construction in CV Raman Nagar", href: "/house-construction-in-cv-raman-nagar" },
      { label: "Home Renovation in CV Raman Nagar", href: "/home-renovation-in-cv-raman-nagar" },
      { label: "Modular Kitchen in Indiranagar", href: "/modular-kitchen-in-indiranagar" },
    ],
  },
]

const renovations: LocalInput[] = [
  {
    service: "renovation",
    place: "Bannerghatta Road",
    key: "bannerghatta-road",
    badge: CITY,
    image: "washroom",
    pitch: "apartment renovation along Bannerghatta Road — bathrooms, kitchens, flooring and painting.",
    subtitle: "Renovating Bannerghatta Road apartments, room by room, under one quote.",
    intro:
      "Many apartments along Bannerghatta Road are now ten to twenty years old. Bathrooms have started to leak, kitchens feel dated and floors are worn — the typical signs that a flat needs its first full renovation.",
    context: {
      heading: "A flat's first big renovation",
      body: [
        "We survey the flat, list what needs fixing and what is optional, and give you an itemised quote so you can decide the scope.",
        "If you are living in the flat, we phase the work so one bathroom and the kitchen stay usable.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate while we stay in the flat?",
        answer: "Yes. We phase the work room by room and keep a bathroom and the kitchen working.",
      },
      {
        question: "Can you fix a leak into the flat below?",
        answer: "Yes. We trace the source, fix the waterproofing or pipe joint, test it, then retile.",
      },
    ],
    related: [
      { label: "Interior Designers in Bannerghatta Road", href: "/interior-designers-in-bannerghatta-road" },
      { label: "Modular Kitchen in Bannerghatta Road", href: "/modular-kitchen-in-bannerghatta-road" },
      { label: "Apartment Renovation in Bangalore", href: "/apartment-renovation-in-bangalore" },
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Begur",
    key: "begur",
    badge: CITY,
    image: "stoneWall",
    pitch: "renovation for independent houses and flats around Begur — civil work, waterproofing and interiors.",
    subtitle: "Renovation in Begur, from fixing leaks to complete home makeovers.",
    intro:
      "Begur has independent houses built over the years alongside newer apartments. Renovation here ranges from fixing terrace and bathroom leaks to a complete update of an older house.",
    context: {
      heading: "Fix first, then finish",
      body: [
        "We start with anything that could damage new finishes — leaks, damp, cracked plaster, failing wiring — and fix it first.",
        "Then come flooring, kitchen, wardrobes, ceilings and paint, planned together so they look like one design.",
      ],
    },
    faqs: [
      {
        question: "Our walls have damp patches. Will painting fix it?",
        answer: "No — painting hides damp only for a while. We find the source of the water and fix it before repainting.",
      },
      {
        question: "Do you do interiors as part of renovation?",
        answer: "Yes. Civil work and interiors are handled by one team under one quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Begur", href: "/interior-designers-in-begur" },
      { label: "Modular Kitchen in Begur", href: "/modular-kitchen-in-begur" },
      { label: "House Construction in Begur", href: "/house-construction-in-begur" },
      { label: "Independent House Renovation in Bangalore", href: "/independent-house-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Bellandur",
    key: "bellandur",
    badge: CITY,
    image: "washroom",
    pitch: "apartment renovation near the Outer Ring Road — bathrooms, kitchens, wardrobes and flooring.",
    subtitle: "Renovating Bellandur apartments for owners who live in them and owners who let them.",
    intro:
      "Bellandur's apartment complexes house many people working along the Outer Ring Road. Owners renovate to move in, to re-let at a better rent, or to update a flat that came with basic builder finishes.",
    context: {
      heading: "Renovating to re-let",
      body: [
        "A refreshed bathroom, a modular kitchen and new paint make a flat far easier to let. We recommend durable finishes that suit rentals.",
        "We can coordinate with your property manager and work between tenancies to a dated schedule.",
      ],
    },
    faqs: [
      {
        question: "Can you finish the renovation between tenants?",
        answer: "We agree the scope and a dated schedule first, so you can plan the next tenancy around it.",
      },
      {
        question: "Can you manage it if we live abroad?",
        answer: "Yes. Designs and quotes are approved online, and we send photo updates through the work.",
      },
    ],
    related: [
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Modular Kitchen in Bellandur", href: "/modular-kitchen-in-bellandur" },
      { label: "Rental Property Renovation in Bangalore", href: "/rental-property-renovation-in-bangalore" },
      { label: "Home Renovation in Sarjapur Road", href: "/home-renovation-in-sarjapur-road" },
    ],
  },
  {
    service: "renovation",
    place: "Sarjapur Road",
    key: "sarjapur-road",
    badge: CITY,
    image: "livingTv",
    pitch: "apartment and villa renovation along Sarjapur Road — kitchens, bathrooms, flooring and interiors.",
    subtitle: "Renovation for Sarjapur Road's apartments and villas, planned and priced in detail.",
    intro:
      "Sarjapur Road has large gated communities of apartments and villas, many now old enough for their first major update. Owners here often combine renovation with new interiors in one project.",
    context: {
      heading: "Renovation and interiors together",
      body: [
        "Doing civil work and interiors in one project avoids breaking new finishes later. We plan bathrooms, flooring and wiring first, then carpentry and paint.",
        "In gated communities, we follow the association's rules on working hours, deliveries and debris.",
      ],
    },
    faqs: [
      {
        question: "Can you renovate a villa in a gated community?",
        answer: "Yes. We follow the community's rules and handle the paperwork the association asks for with you.",
      },
      {
        question: "Can we change the flooring without breaking the old one?",
        answer: "Sometimes new flooring can be laid over the old, if levels and door heights allow. We check on site.",
      },
    ],
    related: [
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "Modular Kitchen in Sarjapur Road", href: "/modular-kitchen-in-sarjapur-road" },
      { label: "Villa Renovation in Bangalore", href: "/villa-renovation-in-bangalore" },
      { label: "Home Renovation in Bellandur", href: "/home-renovation-in-bellandur" },
    ],
  },
  {
    service: "renovation",
    place: "Basaveshwaranagar",
    key: "basaveshwaranagar",
    badge: CITY,
    image: "stoneWall",
    pitch: "renovating established independent houses — waterproofing, rewiring, bathrooms, kitchens and flooring.",
    subtitle: "Thorough renovation for Basaveshwaranagar's established homes.",
    intro:
      "Basaveshwaranagar's independent houses are generally well built, but many are thirty years old or more. Families here often prefer a thorough renovation to rebuilding — keeping the house, but renewing everything inside it.",
    context: {
      heading: "Renewing what you cannot see",
      body: [
        "Wiring, plumbing and waterproofing are hidden but decide how long a renovation lasts. We inspect them and renew what is needed before new finishes go on.",
        "We plan the work so the family can stay through most of it, moving room by room.",
      ],
    },
    faqs: [
      {
        question: "Should we renovate or rebuild?",
        answer: "We inspect the structure and services and give you an honest view of both options.",
      },
      {
        question: "Can you replace old galvanised pipes?",
        answer: "Yes. We replace old pipes with modern ones and pressure-test before closing walls.",
      },
    ],
    related: [
      { label: "Interior Designers in Basaveshwaranagar", href: "/interior-designers-in-basaveshwaranagar" },
      { label: "Modular Kitchen in Basaveshwaranagar", href: "/modular-kitchen-in-basaveshwaranagar" },
      { label: "House Construction in Basaveshwaranagar", href: "/house-construction-in-basaveshwaranagar" },
      { label: "Home Renovation in Rajajinagar", href: "/home-renovation-in-rajajinagar" },
    ],
  },
  {
    service: "renovation",
    place: "Nagarbhavi",
    key: "nagarbhavi",
    badge: CITY,
    image: "bathroom",
    pitch: "renovating independent houses in Nagarbhavi — bathrooms, kitchens, terraces and full-home updates.",
    subtitle: "Renovating Nagarbhavi houses, from bathrooms and terraces to full makeovers.",
    intro:
      "Nagarbhavi's independent houses were mostly built by their owners over the last twenty to thirty years. Common renovation needs are leaking terraces and bathrooms, kitchens that no longer work, and rooms that need updating for a new generation.",
    context: {
      heading: "Updating rooms for a new generation",
      body: [
        "Children's rooms become study rooms, a ground-floor room becomes a bedroom for parents, a bathroom gets grab bars and a non-slip floor. We plan changes around how the family lives now.",
        "Where a room changes use, we update its wiring, lighting and storage to suit.",
      ],
    },
    faqs: [
      {
        question: "Can you make a bathroom safer for elderly parents?",
        answer: "Yes. Non-slip tiles, grab bars, a level shower area and good lighting can be part of the renovation.",
      },
      {
        question: "Can you redo the terrace waterproofing?",
        answer: "Yes. We repair cracks, re-do the waterproofing and slopes, and fix the ceilings below.",
      },
    ],
    related: [
      { label: "Interior Designers in Nagarbhavi", href: "/interior-designers-in-nagarbhavi" },
      { label: "Modular Kitchen in Nagarbhavi", href: "/modular-kitchen-in-nagarbhavi" },
      { label: "House Construction in Nagarbhavi", href: "/house-construction-in-nagarbhavi" },
      { label: "Home Renovation in Vijayanagar", href: "/home-renovation-in-vijayanagar" },
    ],
  },
  {
    service: "renovation",
    place: "Rajarajeshwari Nagar",
    key: "rajarajeshwari-nagar",
    badge: CITY,
    image: "washroom",
    pitch: "renovation for houses and apartments in RR Nagar — bathrooms, kitchens, flooring and painting.",
    subtitle: "Renovation in Rajarajeshwari Nagar, planned room by room with one itemised quote.",
    intro:
      "Rajarajeshwari Nagar has a large stock of independent houses and apartments built since the 1990s. Renovation enquiries here are mostly bathrooms, kitchens, flooring and full repaints, often together.",
    context: {
      heading: "Combining jobs saves disruption",
      body: [
        "Doing bathrooms, kitchen and flooring in one planned project means one round of dust and one supervisor, instead of several separate jobs.",
        "We give you a written sequence so you know which rooms are out of use and when.",
      ],
    },
    faqs: [
      {
        question: "Can we renovate in stages instead?",
        answer: "Yes. We can plan the whole home and do it in stages, so each stage fits the overall design.",
      },
      {
        question: "Do you supply bathroom fittings?",
        answer: "Yes, or you can choose your own. The quote shows an allowance or the exact brands we propose.",
      },
    ],
    related: [
      { label: "Interior Designers in Rajarajeshwari Nagar", href: "/interior-designers-in-rajarajeshwari-nagar" },
      { label: "Modular Kitchen in Rajarajeshwari Nagar", href: "/modular-kitchen-in-rajarajeshwari-nagar" },
      { label: "House Construction in Rajarajeshwari Nagar", href: "/house-construction-in-rajarajeshwari-nagar" },
      { label: "Home Renovation in Kengeri", href: "/home-renovation-in-kengeri" },
    ],
  },
  {
    service: "renovation",
    place: "Kengeri",
    key: "kengeri",
    badge: CITY,
    image: "stoneWall",
    pitch: "renovating homes in Kengeri — finishing upgrades, leak repairs, kitchens and bathrooms.",
    subtitle: "Renovating and upgrading Kengeri homes, with an honest survey first.",
    intro:
      "Kengeri has both older houses in the original town and newer homes in the layouts near the metro. Owners of newer houses often renovate to upgrade basic finishes; owners of older ones to fix leaks and modernise.",
    context: {
      heading: "Upgrading basic finishes",
      body: [
        "Houses built to a tight budget often have basic tiles, fittings and wiring. We upgrade them selectively, starting with what you use most.",
        "Every item is listed in the quote with its brand or allowance, so you can choose where to spend.",
      ],
    },
    faqs: [
      {
        question: "Can we upgrade just the bathrooms and kitchen?",
        answer: "Yes. You choose the scope; we advise on anything we think needs attention.",
      },
      {
        question: "Do you survey before quoting?",
        answer: "Yes. We visit, check for leaks and damp, and then quote.",
      },
    ],
    related: [
      { label: "Interior Designers in Kengeri", href: "/interior-designers-in-kengeri" },
      { label: "Modular Kitchen in Kengeri", href: "/modular-kitchen-in-kengeri" },
      { label: "House Construction in Kengeri", href: "/house-construction-in-kengeri" },
      { label: "Home Renovation in Rajarajeshwari Nagar", href: "/home-renovation-in-rajarajeshwari-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Uttarahalli",
    key: "uttarahalli",
    badge: CITY,
    image: "bathroom",
    pitch: "renovation for owner-built houses in Uttarahalli — leaks, cracks, bathrooms, kitchens and rental floors.",
    subtitle: "Renovating Uttarahalli houses and rental floors, one supervisor from start to finish.",
    intro:
      "Many Uttarahalli houses were built in stages, with floors added for family or rent. Renovation here often means fixing the joins between old and new work, updating rental units and modernising the owner's floor.",
    context: {
      heading: "Houses built in stages",
      body: [
        "Cracks and leaks often appear where new floors meet old ones. We check whether they are structural or surface-level and fix the cause.",
        "Rental floors can be refreshed with durable finishes while the owner's floor gets a fuller update.",
      ],
    },
    faqs: [
      {
        question: "Are the cracks in our walls dangerous?",
        answer: "Most are plaster cracks, but some need a closer look. We inspect and tell you which is which before repairing.",
      },
      {
        question: "Can you renovate a rental floor while tenants live upstairs?",
        answer: "Yes. We keep work to agreed hours and protect shared stairs and areas.",
      },
    ],
    related: [
      { label: "Interior Designers in Uttarahalli", href: "/interior-designers-in-uttarahalli" },
      { label: "Modular Kitchen in Uttarahalli", href: "/modular-kitchen-in-uttarahalli" },
      { label: "House Construction in Uttarahalli", href: "/house-construction-in-uttarahalli" },
      { label: "Home Renovation in Banashankari", href: "/home-renovation-in-banashankari" },
    ],
  },
  {
    service: "renovation",
    place: "Kanakapura Road",
    key: "kanakapura-road",
    badge: CITY,
    image: "livingMarble",
    pitch: "renovation for apartments and villas along Kanakapura Road — upgrades, repairs and interiors.",
    subtitle: "Upgrading Kanakapura Road apartments and villas after handover or years of use.",
    intro:
      "Owners on Kanakapura Road often renovate for one of two reasons: to upgrade builder finishes in a newly handed-over home, or to refresh an apartment or villa after years of family life.",
    context: {
      heading: "Upgrading after handover",
      body: [
        "Replacing builder tiles, fittings or flooring is easiest before you move in. We plan it with your interiors so everything is done in one go.",
        "For older homes, we combine repairs with a design refresh so the result feels new.",
      ],
    },
    faqs: [
      {
        question: "Can you change builder-supplied tiles in a new flat?",
        answer: "Yes. It is easiest before you move in, and we plan it with your interiors.",
      },
      {
        question: "Do you renovate villas?",
        answer: "Yes. We renovate villas inside and out, including exterior painting and landscaping repairs.",
      },
    ],
    related: [
      { label: "Interior Designers in Kanakapura Road", href: "/interior-designers-in-kanakapura-road" },
      { label: "Modular Kitchen in Kanakapura Road", href: "/modular-kitchen-in-kanakapura-road" },
      { label: "House Construction in Kanakapura Road", href: "/house-construction-in-kanakapura-road" },
      { label: "Villa Renovation in Bangalore", href: "/villa-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "KR Puram",
    key: "kr-puram",
    badge: CITY,
    image: "washroom",
    pitch: "renovating houses and apartments around KR Puram — bathrooms, kitchens, wiring and flooring.",
    subtitle: "Renovation for KR Puram homes, from bathrooms and kitchens to full updates.",
    intro:
      "KR Puram's older independent houses and growing apartment stock both need regular renovation. In older houses the priorities are usually wiring and plumbing; in flats, bathrooms and kitchens.",
    context: {
      heading: "Safe wiring, sound plumbing",
      body: [
        "We check the distribution board, earthing and cable sizes, and rewire where the load has outgrown the original wiring.",
        "We replace old pipes and pressure-test them before tiling, so leaks do not return.",
      ],
    },
    faqs: [
      {
        question: "Our MCBs trip often. Can you fix it?",
        answer: "Frequent tripping usually means overloaded circuits or faults. We inspect and rewire or rebalance circuits as needed.",
      },
      {
        question: "Can you renovate just the bathrooms?",
        answer: "Yes. Single-room jobs are welcome.",
      },
    ],
    related: [
      { label: "Interior Designers in KR Puram", href: "/interior-designers-in-kr-puram" },
      { label: "Modular Kitchen in KR Puram", href: "/modular-kitchen-in-kr-puram" },
      { label: "House Construction in KR Puram", href: "/house-construction-in-kr-puram" },
      { label: "Home Renovation in Hoodi", href: "/home-renovation-in-hoodi" },
    ],
  },
  {
    service: "renovation",
    place: "Hoodi",
    key: "hoodi",
    badge: CITY,
    image: "bathroom",
    pitch: "apartment renovation near ITPL — bathrooms, kitchens, flooring and painting with photo updates.",
    subtitle: "Renovating Hoodi apartments with minimal site visits needed from you.",
    intro:
      "Hoodi's apartments, close to the Whitefield tech parks, are often owned by busy professionals or by owners who live elsewhere. Renovation here needs to run smoothly without the owner on site every day.",
    context: {
      heading: "Renovation you can follow remotely",
      body: [
        "You approve the scope, design and samples once, and then receive regular photo updates against a written schedule.",
        "Our site supervisor is your single point of contact for the association, tenants and our team.",
      ],
    },
    faqs: [
      {
        question: "Can you handle the association for us?",
        answer: "We prepare the details associations usually ask for and follow their rules. The owner usually signs the application.",
      },
      {
        question: "Will we get updates during the work?",
        answer: "Yes. You get regular photo updates and can call the supervisor any time.",
      },
    ],
    related: [
      { label: "Interior Designers in Hoodi", href: "/interior-designers-in-hoodi" },
      { label: "Modular Kitchen in Hoodi", href: "/modular-kitchen-in-hoodi" },
      { label: "Home Renovation in Whitefield", href: "/home-renovation-in-whitefield" },
      { label: "Home Renovation in KR Puram", href: "/home-renovation-in-kr-puram" },
    ],
  },
  {
    service: "renovation",
    place: "Varthur",
    key: "varthur",
    badge: CITY,
    image: "livingTv",
    pitch: "villa and apartment renovation around Varthur — interiors, bathrooms, kitchens and exteriors.",
    subtitle: "Renovating Varthur's villas and apartments, inside and out.",
    intro:
      "Varthur's villa communities and apartments are reaching the age where owners start upgrading — new kitchens and bathrooms, better lighting, and exterior repainting for villas.",
    context: {
      heading: "Villas need outside work too",
      body: [
        "Exterior paint, terrace waterproofing and window sealing protect everything inside. We include them in the survey for villas.",
        "Inside, we update rooms to suit how the family uses them now — a home office, a guest room, a bigger kitchen.",
      ],
    },
    faqs: [
      {
        question: "Can you convert a spare room into a home office?",
        answer: "Yes. We add storage, a desk, data and power points and good lighting.",
      },
      {
        question: "Do you repaint villa exteriors?",
        answer: "Yes. We repair cracks, treat damp areas and repaint with exterior-grade paint.",
      },
    ],
    related: [
      { label: "Interior Designers in Varthur", href: "/interior-designers-in-varthur" },
      { label: "Modular Kitchen in Varthur", href: "/modular-kitchen-in-varthur" },
      { label: "House Construction in Varthur", href: "/house-construction-in-varthur" },
      { label: "Villa Renovation in Bangalore", href: "/villa-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "Brookefield",
    key: "brookefield",
    badge: CITY,
    image: "washroom",
    pitch: "renovating older apartments along ITPL Main Road — bathrooms, kitchens, wardrobes and floors.",
    subtitle: "Bringing Brookefield's older apartments up to date.",
    intro:
      "Brookefield's apartment complexes were among the first built for the Whitefield tech parks. Many are now fifteen to twenty-five years old, and owners are renovating bathrooms, kitchens and wardrobes that have reached the end of their life.",
    context: {
      heading: "When the original fittings wear out",
      body: [
        "Original bathrooms often have failed waterproofing and outdated fittings. We strip, waterproof, test and retile.",
        "Wardrobes and kitchens with swollen boards are best replaced; sound ones can be refreshed with new shutters and hardware.",
      ],
    },
    faqs: [
      {
        question: "Can you refresh our wardrobes instead of replacing them?",
        answer: "If the carcasses are sound, new shutters and hardware can refresh them at lower cost.",
      },
      {
        question: "How do you stop bathroom leaks coming back?",
        answer: "By removing old tiles, waterproofing properly, testing with water before tiling, and sealing joints.",
      },
    ],
    related: [
      { label: "Interior Designers in Brookefield", href: "/interior-designers-in-brookefield" },
      { label: "Modular Kitchen in Brookefield", href: "/modular-kitchen-in-brookefield" },
      { label: "Apartment Renovation in Bangalore", href: "/apartment-renovation-in-bangalore" },
      { label: "Home Renovation in Whitefield", href: "/home-renovation-in-whitefield" },
    ],
  },
  {
    service: "renovation",
    place: "CV Raman Nagar",
    key: "cv-raman-nagar",
    badge: CITY,
    image: "stoneWall",
    pitch: "renovating older houses and flats in CV Raman Nagar — civil, electrical, plumbing and interiors.",
    subtitle: "Complete renovation for CV Raman Nagar homes, with one team for civil and interiors.",
    intro:
      "CV Raman Nagar has many older independent houses and apartments, some dating back to the area's early government-employee layouts. Renovation here usually means renewing services as well as finishes.",
    context: {
      heading: "One team for every trade",
      body: [
        "Masons, plumbers, electricians, carpenters and painters all work under one supervisor, so trades are sequenced properly and nothing is redone.",
        "You get one quote and one point of contact for the whole job.",
      ],
    },
    faqs: [
      {
        question: "Do we need separate contractors for civil and interiors?",
        answer: "No. ACIPL handles both under one quote and one supervisor.",
      },
      {
        question: "Can you change our old windows?",
        answer: "Yes. We can replace old windows with new frames as part of the renovation.",
      },
    ],
    related: [
      { label: "Interior Designers in CV Raman Nagar", href: "/interior-designers-in-cv-raman-nagar" },
      { label: "Modular Kitchen in CV Raman Nagar", href: "/modular-kitchen-in-cv-raman-nagar" },
      { label: "House Construction in CV Raman Nagar", href: "/house-construction-in-cv-raman-nagar" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
    ],
  },
  {
    service: "renovation",
    place: "Frazer Town",
    key: "frazer-town",
    badge: CITY,
    image: "livingMarble",
    pitch: "renovating older homes in Frazer Town and Cox Town — keep the character, renew the rest.",
    subtitle: "Renovating Frazer Town's older homes while keeping their character.",
    intro:
      "Frazer Town and Cox Town have some of Bangalore's older houses, with high ceilings, arched windows and old tiled floors. Families here often want to keep that character while bringing kitchens, bathrooms and services up to date.",
    context: {
      heading: "Old character, modern comfort",
      body: [
        "We restore features worth keeping — wooden doors, windows, old floors — and match new work to them.",
        "Behind the walls, we renew wiring and plumbing carefully, with as little damage to original finishes as possible.",
      ],
    },
    faqs: [
      {
        question: "Can you restore old Athangudi or mosaic floors?",
        answer: "Often, yes. We repair damaged tiles where possible and polish the floor, or match new tiles to the old.",
      },
      {
        question: "Can you add a modern kitchen to an old house?",
        answer: "Yes. We design a modular kitchen that suits the house's character and fits its irregular walls.",
      },
    ],
    related: [
      { label: "Interior Designers in Frazer Town", href: "/interior-designers-in-frazer-town" },
      { label: "Modular Kitchen in Frazer Town", href: "/modular-kitchen-in-frazer-town" },
      { label: "Home Renovation in Kalyan Nagar", href: "/home-renovation-in-kalyan-nagar" },
      { label: "Independent House Renovation in Bangalore", href: "/independent-house-renovation-in-bangalore" },
    ],
  },
  {
    service: "renovation",
    place: "HBR Layout",
    key: "hbr-layout",
    badge: NORTH,
    image: "livingTv",
    pitch: "design-led renovation for houses and apartments in HBR Layout — layouts, kitchens, bathrooms and interiors.",
    subtitle: "Design-led renovation for HBR Layout homes, shown in 3D before work starts.",
    intro:
      "HBR Layout's houses are often large enough to re-plan during renovation — opening a kitchen to the dining area, adding a bathroom to a bedroom, or turning a terrace room into a study.",
    context: {
      heading: "Re-planning, not just refinishing",
      body: [
        "Bigger changes need a structural check. We assess which walls can move and design supports where needed.",
        "We show the renovated home in 3D so you can see the result and adjust it before any demolition.",
      ],
    },
    faqs: [
      {
        question: "Can you open our kitchen to the dining room?",
        answer: "Often, yes, after checking whether the wall is load-bearing and designing support if it is.",
      },
      {
        question: "Can you add a bathroom upstairs?",
        answer: "Usually, if drainage can be routed. We check on site and plan the plumbing and waterproofing.",
      },
    ],
    related: [
      { label: "Interior Designers in HBR Layout", href: "/interior-designers-in-hbr-layout" },
      { label: "Modular Kitchen in HBR Layout", href: "/modular-kitchen-in-hbr-layout" },
      { label: "House Construction in HBR Layout", href: "/house-construction-in-hbr-layout" },
      { label: "Home Renovation in Kalyan Nagar", href: "/home-renovation-in-kalyan-nagar" },
    ],
  },
  {
    service: "renovation",
    place: "Kothanur",
    key: "kothanur",
    badge: NORTH,
    image: "washroom",
    pitch: "renovation for apartments and villas in Kothanur — upgrades, repairs and full interiors.",
    subtitle: "Renovation in Kothanur from a North Bangalore team that can be on site often.",
    intro:
      "Kothanur's apartments and villas are mostly ten years old or newer, so renovation here is usually about upgrades — better bathrooms, a modular kitchen, new lighting and storage — rather than major repairs.",
    context: {
      heading: "Upgrades that change how a home feels",
      body: [
        "Good lighting, more storage and an upgraded bathroom often transform a home more than any single big change.",
        "We prioritise with you and plan the work so the most-used rooms are done first.",
      ],
    },
    faqs: [
      {
        question: "Which upgrade makes the biggest difference?",
        answer: "It depends on the home, but lighting, storage and the main bathroom usually have the most impact. We advise after visiting.",
      },
      {
        question: "Are you close to Kothanur?",
        answer: "Yes. Our office is in Yelahanka New Town, so our team can visit and supervise often.",
      },
    ],
    related: [
      { label: "Interior Designers in Kothanur", href: "/interior-designers-in-kothanur" },
      { label: "Modular Kitchen in Kothanur", href: "/modular-kitchen-in-kothanur" },
      { label: "House Construction in Kothanur", href: "/house-construction-in-kothanur" },
      { label: "Home Renovation in Hennur", href: "/home-renovation-in-hennur" },
    ],
  },
  {
    service: "renovation",
    place: "Kogilu",
    key: "kogilu",
    badge: NORTH,
    image: "stoneWall",
    pitch: "renovating houses near Yelahanka — finishing upgrades, leak repairs, kitchens and rental units.",
    subtitle: "Renovation in Kogilu, minutes from our Yelahanka office.",
    intro:
      "Kogilu, next to Yelahanka, has many houses built in the last decade, some with rental floors. Renovation here is often finishing work that was left basic, fixing early leaks, or refreshing rental units.",
    context: {
      heading: "Finishing what was left basic",
      body: [
        "Many houses are built quickly, with basic finishes to save cost. We upgrade flooring, fittings, kitchens and wardrobes selectively.",
        "Early leaks from terraces or bathrooms are easiest to fix before they damage new finishes, so we check for them first.",
      ],
    },
    faqs: [
      {
        question: "Our new house already has a leak. Can you fix it?",
        answer: "Yes. We trace the source — usually the terrace, a bathroom or a pipe joint — and fix it properly.",
      },
      {
        question: "How quickly can you visit Kogilu?",
        answer: "Kogilu is close to our Yelahanka office, so we can usually visit soon after you call.",
      },
    ],
    related: [
      { label: "Interior Designers in Kogilu", href: "/interior-designers-in-kogilu" },
      { label: "Modular Kitchen in Kogilu", href: "/modular-kitchen-in-kogilu" },
      { label: "House Construction in Kogilu", href: "/house-construction-in-kogilu" },
      { label: "Home Renovation in Yelahanka", href: "/home-renovation-in-yelahanka" },
    ],
  },
  {
    service: "renovation",
    place: "Jalahalli",
    key: "jalahalli",
    badge: NORTH,
    image: "bathroom",
    pitch: "renovation for houses and apartments in Jalahalli — bathrooms, kitchens, flooring and repainting.",
    subtitle: "Renovating Jalahalli homes with an itemised quote and a written schedule.",
    intro:
      "Jalahalli has older independent houses, many built for families working at the nearby public-sector campuses, alongside newer apartments. Renovation here is often about modernising a sound older home.",
    context: {
      heading: "Modernising a sound older home",
      body: [
        "Older houses are often solidly built but have dated bathrooms, kitchens and wiring. Renewing these gives the house years more comfortable life.",
        "You get an itemised quote and a written schedule before work starts, so there are no surprises.",
      ],
    },
    faqs: [
      {
        question: "Can you give a fixed quote?",
        answer: "We give an itemised quote for the agreed scope. Any change you request is priced and agreed in writing first.",
      },
      {
        question: "Do you do kitchens as well?",
        answer: "Yes. Modular kitchens are a common part of our renovations.",
      },
    ],
    related: [
      { label: "Interior Designers in Jalahalli", href: "/interior-designers-in-jalahalli" },
      { label: "Modular Kitchen in Jalahalli", href: "/modular-kitchen-in-jalahalli" },
      { label: "House Construction in Jalahalli", href: "/house-construction-in-jalahalli" },
      { label: "Home Renovation in Yeshwanthpur", href: "/home-renovation-in-yeshwanthpur" },
    ],
  },
]

export const localInputs5: LocalInput[] = [...kitchens, ...renovations]
