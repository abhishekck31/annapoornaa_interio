/**
 * Bangalore-wide pillar pages, November 2026 batch. Each targets a specific,
 * high-intent service query ("2bhk interior design in bangalore", "false ceiling
 * contractors in bangalore" …) that no existing page owns.
 *
 * As with every other page: no prices, timelines, counts or warranties.
 */

import type { PillarInput } from "./build"

const NB = "Office in Yelahanka New Town · projects across Bangalore"

export const pillarInputs: PillarInput[] = [
  {
    slug: "2bhk-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "2bhk interior design in bangalore",
    breadcrumbLabel: "2BHK Interior Design in Bangalore",
    title: "2BHK Interior Design in Bangalore | Complete Flat Interiors | ACIPL",
    description:
      "2BHK interior design in Bangalore: modular kitchen, wardrobes, TV unit, ceilings and lighting for your flat, designed in 3D. Free site visit and itemised quote.",
    h1: "2BHK Interior Design in Bangalore",
    badge: NB,
    subtitle:
      "A complete, ready-to-live-in 2BHK — kitchen, wardrobes, living room and lighting — designed in 3D and delivered by one team.",
    image: "livingTv",
    introHeading: "2BHK interiors that make every square foot work",
    intro: [
      "A 2BHK is where most Bangalore families start, and it is where good design makes the biggest difference. With two bedrooms, a compact kitchen and a combined living-dining area, there is no spare room to hide clutter in — storage has to be planned into every wall.",
      "ACIPL designs and executes complete 2BHK interiors across Bangalore from our office in Yelahanka New Town. You get a furniture layout and 3D views to approve, an itemised quote listing every unit, factory-made modules and one site supervisor from start to handover.",
    ],
    context: {
      heading: "Where 2BHK designs usually go wrong",
      body: [
        "The most common mistakes we fix are wardrobes without lofts (wasting the top third of the wall), TV units that eat into a small living room, kitchens without a proper corner solution, and lighting that leaves rooms dim in the evening. Each is easy to avoid at the design stage.",
        "We also plan the second bedroom for flexibility. In many 2BHKs it is a kids' room today, a guest room on weekends and a home office during the week — so a study desk, a sofa-cum-bed or a wall bed can be planned in from the start.",
      ],
    },
    details: [
      {
        heading: "What a typical 2BHK interior includes",
        table: {
          columns: ["Space", "Usually included", "Popular add-ons"],
          rows: [
            ["Kitchen", "Modular base and wall units, loft, corner unit", "Tall pantry, chimney and hob"],
            ["Master bedroom", "Wardrobe with loft, bed back panel", "Dresser, study desk"],
            ["Second bedroom", "Wardrobe with loft", "Study desk, wall bed, bunk bed"],
            ["Living and dining", "TV unit, false ceiling over living area", "Crockery unit, shoe rack, partition"],
            ["Others", "Pooja unit, electrical changes, painting", "Wallpaper, curtains, decorative lights"],
          ],
        },
        note: "Your scope is set at the design stage — the table shows common choices, not a fixed package.",
      },
    ],
    trustHeading: "Why 2BHK owners across Bangalore choose ACIPL",
    faqHeading: "2BHK interior design: common questions",
    faqs: [
      {
        question: "What is the cost of 2BHK interior design in Bangalore?",
        answer:
          "It depends on which units you include, their sizes, and the materials and finishes you choose — two 2BHK quotes can differ widely for those reasons alone. We visit for free, agree the scope, and send an itemised quote that prices each unit separately, so you can add or drop items to fit your budget.",
      },
      {
        question: "Should we do the whole flat at once or in stages?",
        answer:
          "Doing it at once is usually cheaper and quicker, because ceilings, electrical work and painting happen only once. If budget is tight, do the kitchen, wardrobes and electrical work first, and leave decorative items for later.",
      },
      {
        question: "How do you add storage in a small 2BHK?",
        answer:
          "Full-height wardrobes with lofts, a tall kitchen pantry, storage under the bed and seating, a shoe-and-key unit at the entrance, and wall-mounted units instead of floor-standing furniture.",
      },
      {
        question: "Can you design the second bedroom as a home office?",
        answer:
          "Yes. A desk with overhead storage, good task lighting, enough power and data points, and a wall bed or sofa-cum-bed so the room can still host guests.",
      },
      {
        question: "Which areas of Bangalore do you cover?",
        answer:
          "We take up projects across Bangalore — North Bangalore near our Yelahanka office, and East, South and West Bangalore too. The site visit and quote are free wherever you are.",
      },
    ],
    related: [
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
      { label: "Interior Designers in Electronic City", href: "/interior-designers-in-electronic-city" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
    ],
    enquiryCard: "Planning interiors for your 2BHK?",
    enquiry: "Hi, I'd like a quote for 2BHK interior design in Bangalore from ACIPL.",
    closing: "Ready to design your 2BHK?",
  },
  {
    slug: "3bhk-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "3bhk interior design in bangalore",
    breadcrumbLabel: "3BHK Interior Design in Bangalore",
    title: "3BHK Interior Design in Bangalore | Full Home Interiors | ACIPL",
    description:
      "3BHK interior design in Bangalore: complete interiors for apartments and houses — kitchen, three bedrooms, living, dining and lighting. Free visit, itemised quote.",
    h1: "3BHK Interior Design in Bangalore",
    badge: NB,
    subtitle:
      "Complete 3BHK interiors — one design language across every room, one itemised quote and one team from design to handover.",
    image: "bedroom",
    introHeading: "3BHK interiors designed as one home",
    intro: [
      "A 3BHK gives a family room to breathe: a proper master suite, a room for the children, a guest or study room, and a living-dining area big enough to entertain. The challenge is making all of it feel like one home, not three bedrooms designed on different days.",
      "ACIPL designs complete 3BHK interiors across Bangalore. We start with a palette and design language for the whole home, then plan each room within it — and give you an itemised quote, factory-made units, and a single site supervisor through to handover.",
    ],
    context: {
      heading: "Designing for a family that will grow",
      body: [
        "Children's rooms change fastest. We design them so the wardrobe and storage last, while the loose furniture — bunk bed, study table, play storage — can be swapped as the children grow.",
        "The third bedroom is often the most flexible: guest room, study, home office or a room for parents who visit. We plan it with that flexibility in mind, and often add a wall bed or sofa-cum-bed.",
      ],
    },
    details: [
      {
        heading: "What a typical 3BHK interior includes",
        table: {
          columns: ["Space", "Usually included", "Popular add-ons"],
          rows: [
            ["Kitchen", "Modular units, loft, corner and tall units", "Breakfast counter, utility storage"],
            ["Master bedroom", "Wardrobe with loft, bed back panel, side tables", "Dresser, TV wall, walk-in wardrobe"],
            ["Children's bedroom", "Wardrobe, study desk with storage", "Bunk bed, bookshelves"],
            ["Guest or study room", "Wardrobe or bookshelves", "Wall bed, home-office desk"],
            ["Living and dining", "TV unit, false ceiling with lighting, crockery unit", "Feature wall, partition, foyer unit"],
            ["Others", "Pooja unit, shoe rack, electrical, painting", "Wallpaper, curtains, decorative lighting"],
          ],
        },
        note: "Your scope is set at the design stage — the table shows common choices, not a fixed package.",
      },
    ],
    trustHeading: "Why 3BHK owners across Bangalore choose ACIPL",
    faqHeading: "3BHK interior design: common questions",
    faqs: [
      {
        question: "What does 3BHK interior design cost in Bangalore?",
        answer:
          "It depends on scope, the size of each unit and the materials and finishes you pick. We visit for free and send an itemised quote that prices every unit separately, so you can see exactly where the budget goes and adjust it.",
      },
      {
        question: "How do you keep the design consistent across rooms?",
        answer:
          "We agree a palette — colours, finishes, handle styles, lighting temperature — for the whole home before designing individual rooms, then show you 3D views of each room so you can see how they relate.",
      },
      {
        question: "Can you do a walk-in wardrobe in the master bedroom?",
        answer:
          "If the room or an adjoining dressing area has space, yes. Where it does not, a wall-to-wall wardrobe with a dresser and good lighting gives much of the same convenience.",
      },
      {
        question: "Do you also do villas and independent houses?",
        answer:
          "Yes. We do complete interiors for villas and independent houses as well as apartments. See our villa interior design page for the extra things larger homes need.",
      },
    ],
    related: [
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
      { label: "Interior Designers in Bellandur", href: "/interior-designers-in-bellandur" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
    ],
    enquiryCard: "Planning interiors for your 3BHK?",
    enquiry: "Hi, I'd like a quote for 3BHK interior design in Bangalore from ACIPL.",
    closing: "Ready to design your 3BHK?",
  },
  {
    slug: "villa-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "villa interior design in bangalore",
    breadcrumbLabel: "Villa Interior Design in Bangalore",
    title: "Villa Interior Design in Bangalore | Luxury Villa Interiors | ACIPL",
    description:
      "Villa interior designers in Bangalore: complete interiors for villas and large independent houses — kitchens, bedrooms, staircases, lighting and ceilings.",
    h1: "Villa Interior Design in Bangalore",
    badge: NB,
    subtitle:
      "Complete villa interiors — one palette across every floor, detailed design, and a single team from first drawing to handover.",
    image: "villaRoom",
    introHeading: "Villa interiors, designed as a whole",
    intro: [
      "A villa is a different project from an apartment. There are more rooms, larger spaces, double-height areas, staircases, terraces and often a garden — and the interiors need to tie all of it together into one home.",
      "ACIPL is a design-and-build firm, which matters for villas. We can plan the interiors alongside construction, or take over a newly handed-over villa, and deliver kitchens, wardrobes, panelling, ceilings, lighting and finishes as one project with one accountable team.",
    ],
    context: {
      heading: "What villas need that apartments don't",
      body: [
        "Double-height living rooms need lighting at more than one level and a wall treatment that gives the space a focus. Staircases need railings, lighting and sometimes storage underneath. Large bedrooms can take walk-in wardrobes and seating areas.",
        "Villas also tend to have separate show and wet kitchens, utility rooms, home theatres or family lounges, and outdoor areas. We plan these as one design, so storage, plumbing and lighting are split sensibly between them.",
      ],
    },
    details: [
      {
        heading: "What we design in a villa",
        bullets: [
          "Show kitchen and wet kitchen, with a utility and pantry",
          "Master suite with walk-in wardrobe or dressing area",
          "Children's and guest bedrooms with wardrobes and study units",
          "Double-height living room lighting, feature walls and panelling",
          "Staircase railings, lighting and under-stair storage",
          "Family lounge, home office or media room",
          "Pooja room in wood or marble",
          "False ceilings, cove and concealed lighting throughout",
        ],
      },
    ],
    trustHeading: "Why villa owners in Bangalore choose ACIPL",
    faqHeading: "Villa interior design: common questions",
    faqs: [
      {
        question: "When should villa interiors be planned?",
        answer:
          "As early as possible — ideally during construction, before electrical, plumbing and ceiling heights are fixed. If the villa is already built, we work with what is there and suggest only changes that are worth the cost.",
      },
      {
        question: "Do you design villas in gated communities on Sarjapur Road, Whitefield and North Bangalore?",
        answer:
          "Yes. We take up villa interiors across Bangalore, including the villa communities of North Bangalore near our Yelahanka office, Sarjapur Road, Whitefield and Devanahalli.",
      },
      {
        question: "Can you also build the villa?",
        answer:
          "Yes. We build villas and independent houses, and can deliver construction and interiors as one project.",
      },
      {
        question: "How is the cost estimated for a villa?",
        answer:
          "We visit, agree the scope room by room, and send an itemised quote. Because villas vary so much in size and finish, any per-square-foot figure quoted without seeing the home is not reliable.",
      },
    ],
    related: [
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "Interior Designers in Devanahalli", href: "/interior-designers-in-devanahalli" },
      { label: "Interior Designers in Sarjapur Road", href: "/interior-designers-in-sarjapur-road" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
    enquiryCard: "Planning interiors for your villa?",
    enquiry: "Hi, I'd like to discuss villa interior design in Bangalore with ACIPL.",
    closing: "Ready to design your villa?",
  },
  {
    slug: "wardrobe-designers-in-bangalore",
    service: "interior",
    serviceType: "Wardrobe Design and Installation",
    primaryKeyword: "wardrobe designers in bangalore",
    breadcrumbLabel: "Wardrobe Designers in Bangalore",
    title: "Wardrobe Designers in Bangalore | Sliding Wardrobes | ACIPL",
    description:
      "Wardrobe designers in Bangalore: custom sliding, hinged and walk-in wardrobes with lofts, made to measure. Free site visit and itemised quote from ACIPL.",
    h1: "Wardrobe Designers in Bangalore",
    badge: NB,
    subtitle:
      "Made-to-measure sliding, hinged and walk-in wardrobes — designed around what you actually store.",
    image: "bedroom",
    introHeading: "Wardrobes designed around what you store",
    intro: [
      "A wardrobe is the hardest-working piece of furniture in a bedroom, and the one people most often get wrong — too few drawers, no long-hanging section, a loft that was left out to save money, or shutters that block the room when open.",
      "ACIPL designs and installs custom wardrobes across Bangalore. We measure the wall, ask what you store — sarees, suits, shoes, bags, linen, luggage — and design the inside first. Every unit is made off site and listed in an itemised quote with its board, finish and hardware.",
    ],
    context: {
      heading: "Sliding, hinged or walk-in?",
      body: [
        "Sliding wardrobes save the swing space in front of the shutters, which helps in compact bedrooms; they cost more and give access to only part of the wardrobe at a time. Hinged wardrobes open fully and cost less, but need clear space in front.",
        "Walk-in wardrobes need a dedicated area or dressing room. Where there is room, they give the most storage and the best visibility; where there isn't, a wall-to-wall wardrobe with a dresser beside it gets you most of the way.",
      ],
    },
    details: [
      {
        heading: "Inside the wardrobe: what we plan",
        table: {
          columns: ["Section", "What it holds", "Options"],
          rows: [
            ["Long hanging", "Dresses, sarees on hangers, coats", "Hanging rod, pull-down rod for tall units"],
            ["Short hanging", "Shirts, trousers, kurtas", "Double rods for more capacity"],
            ["Drawers", "Folded clothes, innerwear, accessories", "Soft-close drawers, internal organisers"],
            ["Shelves", "Folded clothes, linen", "Adjustable shelves, saree and trouser pull-outs"],
            ["Loft", "Luggage, seasonal items", "Separate shutters above the main wardrobe"],
            ["Extras", "Valuables, ties and belts, shoes", "Locker, accessory trays, shoe pull-outs, internal lighting"],
          ],
        },
      },
      {
        heading: "Finishes and materials",
        bullets: [
          "Laminate: durable and affordable, with a wide range of colours and textures.",
          "Acrylic or high-gloss: a sleek, reflective finish that suits modern bedrooms.",
          "PU paint: a seamless painted finish in any colour.",
          "Glass or mirror shutters: lighten the room and double as a dressing mirror.",
          "Carcass and hardware: the board, hinges, channels and handles for every unit are named in your quote.",
        ],
      },
    ],
    highlights: [
      { title: "Inside designed first", body: "Hanging, drawers, shelves and loft planned around your clothes, not a standard template." },
      { title: "Made to measure", body: "Measured wall to wall and floor to ceiling, so there are no gaps filled with filler panels." },
      { title: "Itemised quote", body: "Board, finish, hinges, channels and accessories listed for each wardrobe." },
      { title: "Clean installation", body: "Factory-made units installed quickly, with minimal dust and noise in your home." },
    ],
    trustHeading: "Why Bangalore homeowners choose ACIPL for wardrobes",
    faqHeading: "Wardrobes: common questions",
    faqs: [
      {
        question: "What does a custom wardrobe cost in Bangalore?",
        answer:
          "It depends on the size, the internal fittings, the board and the shutter finish. We measure for free and give you an itemised quote, with alternatives priced so you can choose.",
      },
      {
        question: "Should the wardrobe go up to the ceiling?",
        answer:
          "Usually, yes. A loft above the main wardrobe uses space that is otherwise wasted and is ideal for luggage and seasonal items. It also looks neater than leaving a dust-collecting gap.",
      },
      {
        question: "Our old wardrobe has swollen at the bottom. Why?",
        answer:
          "Usually moisture — from mopping, a damp wall or a nearby bathroom — reaching a board not suited to it. We check the wall for damp and use moisture-resistant boards and a raised base where it is a risk.",
      },
      {
        question: "Can you replace only the shutters of our existing wardrobe?",
        answer:
          "If the carcass is in good condition, yes. New shutters, handles and hinges can transform an old wardrobe at a lower cost than replacing it entirely.",
      },
    ],
    related: [
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
      { label: "Interior Designers in Yeshwanthpur", href: "/interior-designers-in-yeshwanthpur" },
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
    ],
    enquiryCard: "Need new wardrobes?",
    enquiry: "Hi, I'd like a quote for custom wardrobes in Bangalore from ACIPL.",
    closing: "Ready for wardrobes that actually fit?",
  },
  {
    slug: "false-ceiling-contractors-in-bangalore",
    service: "interior",
    serviceType: "False Ceiling Installation",
    primaryKeyword: "false ceiling contractors in bangalore",
    breadcrumbLabel: "False Ceiling Contractors in Bangalore",
    title: "False Ceiling Contractors in Bangalore | Gypsum & PVC | ACIPL",
    description:
      "False ceiling contractors in Bangalore: gypsum, POP, PVC and grid ceilings with cove and concealed lighting for homes and offices. Free site visit and quote.",
    h1: "False Ceiling Contractors in Bangalore",
    badge: NB,
    subtitle:
      "Gypsum, PVC and grid false ceilings for homes and offices — designed with your lighting, installed cleanly by our own team.",
    image: "villaRoom",
    introHeading: "False ceilings designed with your lighting",
    intro: [
      "A false ceiling changes how a room feels more than almost anything else — it hides wiring and AC pipes, adds cove and concealed lighting, and can make a room feel taller or cosier. Done badly, it cracks at the joints, sags, or looks heavy.",
      "ACIPL designs and installs false ceilings for homes and offices across Bangalore. We design the ceiling and the lighting together, use proper framing and jointing, and install with our own team. We also supply PVC ceiling panels through our products division.",
    ],
    context: {
      heading: "Choosing the right ceiling material",
      body: [
        "Gypsum board is the most common choice for homes: smooth, paintable and good for cove lighting and layered designs. POP allows curved and moulded shapes. PVC panels are moisture-resistant and need little maintenance, which suits bathrooms, balconies and utility areas. Grid ceilings with tiles suit offices, where access to the services above is needed.",
        "Ceiling height matters. In apartments with lower ceilings, we recommend a peripheral ceiling around the edge of the room with cove lighting, leaving the centre at full height, rather than lowering the whole ceiling.",
      ],
    },
    details: [
      {
        heading: "Ceiling types we install",
        table: {
          columns: ["Type", "Best for", "Notes"],
          rows: [
            ["Gypsum board", "Living rooms, bedrooms, dining", "Smooth finish, cove lighting, layered designs"],
            ["POP", "Curved and decorative designs", "Shaped on site; needs skilled finishing"],
            ["PVC panels", "Bathrooms, balconies, utility, kitchens", "Moisture-resistant, low maintenance"],
            ["Grid ceiling", "Offices and commercial spaces", "Removable tiles for access to services"],
            ["Wooden or panelled", "Feature areas, villas", "Wood or wood-finish panels as an accent"],
          ],
        },
      },
    ],
    highlights: [
      { title: "Ceiling and lighting designed together", body: "Cove lights, spotlights and fan positions planned with the ceiling, so nothing is an afterthought." },
      { title: "Proper framing and jointing", body: "Correctly spaced framing and taped, finished joints to prevent sagging and cracks." },
      { title: "AC and services coordinated", body: "Ceiling levels planned around AC units, ducts and pipes so they are hidden neatly." },
      { title: "Homes and offices", body: "Residential gypsum and POP ceilings, and grid ceilings for commercial spaces." },
    ],
    trustHeading: "Why Bangalore homes and offices choose ACIPL for ceilings",
    faqHeading: "False ceilings: common questions",
    faqs: [
      {
        question: "What is the cost of a false ceiling in Bangalore?",
        answer:
          "It depends on the material, the area, the design complexity and the lighting. We measure for free and give an itemised quote with the ceiling and lighting priced separately.",
      },
      {
        question: "Will a false ceiling make our room feel low?",
        answer:
          "Not if it is designed for the room. In rooms with lower ceilings we use a peripheral design that drops only around the edges, keeping the centre at full height.",
      },
      {
        question: "Why do some false ceilings crack?",
        answer:
          "Usually because of poor framing, untaped joints, or movement from an unsupported fan or light. We use proper framing and jointing, and fix heavy fittings to the slab above rather than the board.",
      },
      {
        question: "Can PVC ceilings be used in bathrooms?",
        answer:
          "Yes. PVC panels are moisture-resistant and easy to clean, which makes them a good choice for bathrooms, balconies and utility areas.",
      },
    ],
    related: [
      { label: "False Ceiling in Yelahanka", href: "/false-ceiling-in-yelahanka" },
      { label: "PVC False Ceilings", href: "/products/pvc-false-ceilings" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
      { label: "Interior Designers in Kalyan Nagar", href: "/interior-designers-in-kalyan-nagar" },
      { label: "Commercial Construction in Bangalore", href: "/commercial-construction-in-bangalore" },
    ],
    enquiryCard: "Planning a false ceiling?",
    enquiry: "Hi, I'd like a quote for a false ceiling in Bangalore from ACIPL.",
    closing: "Ready to transform your ceiling?",
  },
  {
    slug: "turnkey-interior-contractors-in-bangalore",
    service: "interior",
    primaryKeyword: "turnkey interior contractors in bangalore",
    breadcrumbLabel: "Turnkey Interior Contractors in Bangalore",
    title: "Turnkey Interior Contractors in Bangalore | ACIPL",
    description:
      "Turnkey interior contractors in Bangalore: design, carpentry, ceilings, electrical, painting and handover by one team, under one itemised quote.",
    h1: "Turnkey Interior Contractors in Bangalore",
    badge: NB,
    subtitle:
      "One contract, one team, one supervisor — from the first drawing to a cleaned, ready-to-use home or office.",
    image: "partition",
    introHeading: "Turnkey interiors: one team, design to handover",
    intro: [
      "Interior projects go wrong in the gaps between contractors: the carpenter waiting for the electrician, the painter blaming the ceiling contractor, nobody responsible when a deadline slips. A turnkey contract closes those gaps by putting one firm in charge of everything.",
      "ACIPL is a turnkey interior contractor based in Yelahanka New Town, working across Bangalore. We handle design, factory-made modular units, carpentry, false ceilings, electrical and plumbing changes, painting, and the final clean — with one site supervisor accountable for the schedule and the quality.",
    ],
    context: {
      heading: "What turnkey should actually mean",
      body: [
        "A real turnkey contract has a fixed scope, an itemised quote, a dated schedule and a single point of contact. Anything that changes — a new unit, a different finish — is agreed in writing with its cost before it is done.",
        "It also means the firm takes responsibility for coordination. You should not have to tell the electrician where the wardrobe lights go; that is our job.",
      ],
    },
    details: [
      {
        heading: "What our turnkey interior scope covers",
        table: {
          columns: ["Stage", "What we handle"],
          rows: [
            ["Design", "Measurements, layouts, 3D views, material and finish selection"],
            ["Civil and services", "Minor civil changes, electrical points, plumbing, AC provisions"],
            ["Ceilings and lighting", "False ceilings, cove and concealed lighting, fixtures"],
            ["Carpentry", "Factory-made kitchens, wardrobes, TV units, storage, panelling"],
            ["Finishes", "Painting, wallpaper, flooring where required"],
            ["Handover", "Deep cleaning, snag walk, and a list of materials and hardware used"],
          ],
        },
      },
    ],
    trustHeading: "Why Bangalore clients choose a turnkey contract with ACIPL",
    faqHeading: "Turnkey interiors: common questions",
    faqs: [
      {
        question: "Is turnkey more expensive than hiring separate contractors?",
        answer:
          "Not necessarily. Separate contractors can look cheaper on paper, but delays, rework and coordination gaps often cost more. A turnkey quote is itemised, so you can compare it line by line with separate quotes.",
      },
      {
        question: "Do you do turnkey interiors for offices as well as homes?",
        answer:
          "Yes. We do turnkey fit-outs for offices — workstations, cabins, partitions, ceilings, electrical and data cabling — as well as for homes.",
      },
      {
        question: "What happens if we want to change something midway?",
        answer:
          "We price the change, agree it with you in writing, and update the schedule if needed before doing it. There are no surprise bills at the end.",
      },
      {
        question: "Which areas of Bangalore do you cover?",
        answer:
          "All of Bangalore. Our office is in Yelahanka New Town, and we take up projects across North, East, South and West Bangalore.",
      },
    ],
    related: [
      { label: "Turnkey Construction in Yelahanka", href: "/turnkey-construction-in-yelahanka" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
      { label: "Interior Designers in North Bangalore", href: "/interior-designers-in-north-bangalore" },
    ],
    enquiryCard: "Want one team to handle everything?",
    enquiry: "Hi, I'd like a quote for turnkey interiors in Bangalore from ACIPL.",
    closing: "Ready to hand it over to one team?",
  },
  {
    slug: "interior-designers-in-north-bangalore",
    service: "interior",
    location: "North Bangalore",
    areaServed: "North Bengaluru",
    primaryKeyword: "interior designers in north bangalore",
    breadcrumbLabel: "Interior Designers in North Bangalore",
    title: "Interior Designers in North Bangalore | Yelahanka-Based | ACIPL",
    description:
      "Interior designers in North Bangalore, based in Yelahanka New Town: homes and offices in Hebbal, Hennur, Thanisandra, Jakkur, Devanahalli and nearby.",
    h1: "Interior Designers in North Bangalore",
    badge: "Based in Yelahanka New Town",
    subtitle:
      "A North Bangalore interior design and build firm — close enough to be on your site whenever a decision needs making.",
    image: "livingMarble",
    introHeading: "North Bangalore interior designers, based locally",
    intro: [
      "North Bangalore has changed more than any other part of the city: the airport, the tech parks around Hebbal and Manyata, and new apartments, villas and plotted layouts from Hebbal to Devanahalli. ACIPL has its office in Yelahanka New Town, at the centre of it.",
      "Being local matters for interiors. Site visits happen when you need them, our supervisors can be on several North Bangalore sites in a day, and decisions are made on site rather than over the phone. We design and execute homes and offices with one team and an itemised quote.",
    ],
    context: {
      heading: "Areas we cover in North Bangalore",
      body: [
        "Yelahanka, Yelahanka New Town, Jakkur, Thanisandra, Hennur, Hebbal, Sahakar Nagar, RT Nagar, Vidyaranyapura, Kogilu, Bagalur, Devanahalli, Kalyan Nagar and the airport corridor — and everything in between.",
        "The homes vary as much as the areas: new apartments along Thanisandra Main Road, villas in gated communities towards Devanahalli and Bagalur, and independent houses in the older layouts of Sahakar Nagar, RT Nagar and Vidyaranyapura.",
      ],
    },
    details: [
      {
        heading: "North Bangalore pages by area",
        bullets: [
          "Yelahanka — interiors, kitchens, false ceilings, renovation and construction",
          "Hebbal, RT Nagar and Sahakar Nagar — established homes and apartments",
          "Thanisandra, Hennur and Jakkur — new apartments and villas",
          "Devanahalli and Bagalur — villas and new houses near the airport",
        ],
      },
    ],
    trustHeading: "Why North Bangalore homeowners choose a local firm",
    faqHeading: "Interior design in North Bangalore: common questions",
    faqs: [
      {
        question: "Where is your office?",
        answer:
          "1st Floor, #395, 8th 'B' Main, 14th 'B' Cross, 2nd Stage, 'B' Sector, Yelahanka New Town, Bangalore 560064. You are welcome to visit; please call ahead so the right person is available.",
      },
      {
        question: "Do you only work in North Bangalore?",
        answer:
          "No. North Bangalore is where we are based and where many of our projects are, but we take up homes and offices across the whole city.",
      },
      {
        question: "Do you do construction as well as interiors?",
        answer:
          "Yes. ACIPL builds independent houses, villas and commercial buildings, and can do the interiors for them as part of the same project.",
      },
      {
        question: "How soon can you visit our site?",
        answer:
          "For most North Bangalore locations we can usually arrange a site visit quickly. Call or WhatsApp us with your location and a convenient time.",
      },
    ],
    related: [
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
      { label: "Interior Designers in Hennur", href: "/interior-designers-in-hennur" },
      { label: "Interior Designers in Thanisandra", href: "/interior-designers-in-thanisandra" },
      { label: "Interior Designers in Devanahalli", href: "/interior-designers-in-devanahalli" },
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
    ],
    enquiryCard: "In North Bangalore?",
    enquiry: "Hi, I'd like a quote for interiors in North Bangalore from ACIPL.",
    closing: "Ready to work with a North Bangalore team?",
  },
  {
    slug: "kitchen-renovation-in-bangalore",
    service: "kitchen",
    serviceType: "Kitchen Renovation",
    primaryKeyword: "kitchen renovation in bangalore",
    breadcrumbLabel: "Kitchen Renovation in Bangalore",
    title: "Kitchen Renovation in Bangalore | Remodel Your Kitchen | ACIPL",
    description:
      "Kitchen renovation in Bangalore: new modular kitchen, platform rebuild, tiles, plumbing, electrical and chimney — one team, one itemised quote.",
    h1: "Kitchen Renovation in Bangalore",
    badge: NB,
    subtitle:
      "Turn an old kitchen into one that works — new layout, modular units, tiles, plumbing and lighting, by one team.",
    image: "kitchenParallel",
    introHeading: "Kitchen renovation, start to finish",
    intro: [
      "Most kitchens in Bangalore homes built more than fifteen years ago share the same problems: a fixed cement platform with open shelves underneath, too little counter space, no proper chimney, dated tiles and too few power points for today's appliances.",
      "ACIPL renovates kitchens across Bangalore — removing the old, fixing what is behind it, and installing a modern modular kitchen. Civil work, plumbing, electrical, tiling and carpentry are all handled by our team under one itemised quote.",
    ],
    context: {
      heading: "What a kitchen renovation involves",
      body: [
        "Renovation is more than new cabinets. The plumbing under the sink may need replacing, the platform may be too low or cracked, the wall tiles may be hollow, and the wiring may not support an induction hob, a microwave and a dishwasher at the same time. We check all of it on the first visit.",
        "We then plan the work to keep the kitchen out of action for as short a time as possible: units are made in the factory while civil and services work happens at home, and installation follows straight after.",
      ],
    },
    details: [
      {
        heading: "Typical kitchen renovation scope",
        table: {
          columns: ["Work", "What it involves"],
          rows: [
            ["Removal", "Old shelves, shutters and tiles removed; debris cleared"],
            ["Civil", "Platform repaired or rebuilt; wall and floor tiles replaced"],
            ["Plumbing", "New sink lines, water purifier and dishwasher points"],
            ["Electrical", "Dedicated points for hob, chimney, oven and appliances; new lighting"],
            ["Ventilation", "Chimney duct route through a wall or window"],
            ["Modular kitchen", "Base and wall units, loft, tall unit, countertop, accessories"],
          ],
        },
      },
    ],
    trustHeading: "Why Bangalore homeowners renovate their kitchens with ACIPL",
    faqHeading: "Kitchen renovation: common questions",
    faqs: [
      {
        question: "What does kitchen renovation cost in Bangalore?",
        answer:
          "It depends on the kitchen size, how much civil and plumbing work is needed, and the cabinets, finishes and countertop you choose. We survey for free and send an itemised quote with each part priced separately.",
      },
      {
        question: "How long will we be without a kitchen?",
        answer:
          "Cabinets are made in the factory while civil and services work happens on site, which keeps the downtime short. You get a dated schedule before we start, and we can help you plan a temporary cooking setup.",
      },
      {
        question: "Can we keep the existing granite platform?",
        answer:
          "If it is in good condition and at the right height, yes — we design units around it. Otherwise we recommend replacing it and show the cost of both options.",
      },
      {
        question: "Can you change the kitchen layout?",
        answer:
          "Yes, within the limits of the plumbing and gas lines. Moving the sink or hob is possible but adds cost; we explain the trade-off before you decide.",
      },
    ],
    related: [
      { label: "Modular Kitchen in Hebbal", href: "/modular-kitchen-in-hebbal" },
      { label: "Modular Kitchen in JP Nagar", href: "/modular-kitchen-in-jp-nagar" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
    ],
    enquiryCard: "Time for a new kitchen?",
    enquiry: "Hi, I'd like a quote for kitchen renovation in Bangalore from ACIPL.",
    closing: "Ready to renovate your kitchen?",
  },
  {
    slug: "bathroom-renovation-in-bangalore",
    service: "renovation",
    serviceType: "Bathroom Renovation",
    primaryKeyword: "bathroom renovation in bangalore",
    breadcrumbLabel: "Bathroom Renovation in Bangalore",
    title: "Bathroom Renovation in Bangalore | Waterproofing & Remodel | ACIPL",
    description:
      "Bathroom renovation in Bangalore: waterproofing, new tiles, concealed plumbing, sanitaryware, glass partitions and lighting — one team, one itemised quote.",
    h1: "Bathroom Renovation in Bangalore",
    badge: NB,
    subtitle:
      "Leak-free, modern bathrooms — waterproofed properly, re-plumbed and finished by one team.",
    image: "bathroom",
    introHeading: "Bathroom renovation that starts with waterproofing",
    intro: [
      "Old bathrooms cause more damage than any other room: leaks into the flat below, damp patches on bedroom walls, swollen wardrobe bases and peeling paint. Replacing tiles without fixing the waterproofing and plumbing underneath only hides the problem for a while.",
      "ACIPL renovates bathrooms across Bangalore from the floor slab up — removing old tiles, fixing plumbing, waterproofing properly, then fitting new tiles, sanitaryware, fittings, glass partitions and lighting.",
    ],
    context: {
      heading: "The order of work matters",
      body: [
        "A bathroom renovation done right follows a strict sequence: demolition, plumbing replacement and pressure testing, waterproofing with a flood test, then tiling with correct slopes to the drain, and finally fittings. Skipping the tests is where most leaks come from.",
        "In apartments, we coordinate with the association and the neighbour below, since leaks and noise affect them too.",
      ],
    },
    details: [
      {
        heading: "What a bathroom renovation includes",
        table: {
          columns: ["Stage", "What we do"],
          rows: [
            ["Demolition", "Old tiles, fittings and screed removed down to the slab"],
            ["Plumbing", "New concealed lines, pressure-tested before closing"],
            ["Waterproofing", "Membrane or coating on floor and up the walls, then a flood test"],
            ["Tiling", "Floor tiles laid to slope towards the drain; wall tiles"],
            ["Fittings", "Sanitaryware, CP fittings, shower partition, vanity, mirror"],
            ["Electrical", "Exhaust fan, lighting, geyser point, safe socket placement"],
          ],
        },
      },
    ],
    highlights: [
      { title: "Waterproofing with a flood test", body: "The floor is flooded and checked for leaks before any tile goes down." },
      { title: "Pressure-tested plumbing", body: "New concealed lines tested under pressure before they are covered." },
      { title: "Proper slopes", body: "Floors laid to fall towards the drain, so water does not pool." },
      { title: "One team, one quote", body: "Civil, plumbing, electrical and finishing by our own team, itemised in one quote." },
    ],
    trustHeading: "Why Bangalore homeowners renovate bathrooms with ACIPL",
    faqHeading: "Bathroom renovation: common questions",
    faqs: [
      {
        question: "What does bathroom renovation cost in Bangalore?",
        answer:
          "It depends on the bathroom size, how much plumbing needs replacing, and the tiles, sanitaryware and fittings you choose. We survey for free and send an itemised quote, with an allowance for tiles and fittings you can adjust.",
      },
      {
        question: "Our neighbour below has a leak. Is it our bathroom?",
        answer:
          "Often, yes — failed waterproofing or a leaking concealed pipe is the usual cause. We can inspect and identify the source before recommending a repair or a full renovation.",
      },
      {
        question: "Can you fit a glass shower partition?",
        answer:
          "Yes. We fit framed and frameless toughened glass partitions, sized to your bathroom, with the floor sloped so water stays in the shower area.",
      },
      {
        question: "Can you renovate one bathroom while we use the other?",
        answer:
          "Yes. In homes with more than one bathroom, we renovate them one at a time so you always have one working.",
      },
    ],
    related: [
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "Home Renovation in Hebbal", href: "/home-renovation-in-hebbal" },
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Home Renovation in Indiranagar", href: "/home-renovation-in-indiranagar" },
    ],
    enquiryCard: "Leaking or outdated bathroom?",
    enquiry: "Hi, I'd like a quote for bathroom renovation in Bangalore from ACIPL.",
    closing: "Ready for a leak-free bathroom?",
  },
  {
    slug: "duplex-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "duplex house construction in bangalore",
    breadcrumbLabel: "Duplex House Construction in Bangalore",
    title: "Duplex House Construction in Bangalore | Design & Build | ACIPL",
    description:
      "Duplex house construction in Bangalore: design, structural drawings, plan sanction, construction and interiors for G+1 and G+2 homes. Free plot visit.",
    h1: "Duplex House Construction in Bangalore",
    badge: NB,
    subtitle:
      "Design and build your duplex home — drawings, approvals, construction and interiors from one team, with materials named in the contract.",
    image: "houseTimber",
    introHeading: "Duplex homes, designed and built by one team",
    intro: [
      "A duplex — a home spread over two connected floors — is the most popular choice for families building on a Bangalore plot. It gives separate zones for living and sleeping, room for a family lounge upstairs, and often a terrace or balcony on every level.",
      "ACIPL designs and builds duplex houses across Bangalore. We prepare architectural, structural and MEP drawings in-house, handle the plan-sanction paperwork, build with materials named in the contract, and can deliver the interiors as part of the same project.",
    ],
    context: {
      heading: "Designing a duplex that works",
      body: [
        "The staircase decides how a duplex works. Placed well, it connects the floors naturally and brings light into the centre of the house; placed badly, it wastes space and splits rooms awkwardly. We design the staircase first and the rooms around it.",
        "Most families want a bedroom on the ground floor for elders or guests, the main bedrooms upstairs, and a family lounge connecting them. We also plan for future needs — a lift shaft provision, or a structure that can take another floor.",
      ],
    },
    details: [
      {
        heading: "How a duplex project runs",
        table: {
          columns: ["Stage", "What happens"],
          rows: [
            ["Plot visit and soil test", "Setbacks, permitted floors and foundation type determined"],
            ["Design", "Floor plans, elevation and 3D views; structural and MEP drawings"],
            ["Approvals", "Plan sanction paperwork with the relevant authority"],
            ["Structure", "Foundation, columns, slabs and staircase, floor by floor"],
            ["Services and finishes", "Electrical, plumbing, plastering, flooring, painting"],
            ["Interiors (optional)", "Kitchen, wardrobes, ceilings and lighting"],
          ],
        },
      },
    ],
    trustHeading: "Why families build their duplex with ACIPL",
    faqHeading: "Duplex house construction: common questions",
    faqs: [
      {
        question: "What does duplex house construction cost in Bangalore?",
        answer:
          "It depends on the built-up area, soil conditions, design and the specification of materials and finishes. We visit your plot for free and give a detailed estimate with brands and grades named, so you can compare quotes properly.",
      },
      {
        question: "What plot size do we need for a duplex?",
        answer:
          "Duplexes are built on a wide range of plot sizes. The usable footprint depends on setbacks and the permitted floor area for your plot and road width — we work this out on the plot visit.",
      },
      {
        question: "Can you provide for a lift in the future?",
        answer:
          "Yes. We can leave a lift shaft or a space with the right structural provision, so a lift can be added later without major work.",
      },
      {
        question: "Do you handle approvals and interiors too?",
        answer:
          "Yes. We prepare drawings, handle plan-sanction paperwork, build the house, and can do the complete interiors as part of the same contract.",
      },
    ],
    related: [
      { label: "House Construction in North Bangalore", href: "/house-construction-in-north-bangalore" },
      { label: "Villa Construction in Yelahanka", href: "/villa-construction-in-yelahanka" },
      { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
    ],
    enquiryCard: "Planning a duplex?",
    enquiry: "Hi, I'd like to discuss duplex house construction in Bangalore with ACIPL.",
    closing: "Ready to build your duplex?",
  },
  {
    slug: "house-construction-in-north-bangalore",
    service: "construction",
    location: "North Bangalore",
    areaServed: "North Bengaluru",
    primaryKeyword: "house construction in north bangalore",
    breadcrumbLabel: "House Construction in North Bangalore",
    title: "House Construction in North Bangalore | Builders | ACIPL",
    description:
      "House construction in North Bangalore by a Yelahanka-based design-and-build firm: independent houses and villas in Yelahanka, Hennur, Jakkur, Devanahalli and more.",
    h1: "House Construction in North Bangalore",
    badge: "Based in Yelahanka New Town",
    subtitle:
      "Build your home with a North Bangalore team — drawings, approvals, construction and interiors, with engineers close to your site.",
    image: "houseFourStorey",
    introHeading: "North Bangalore house builders, based locally",
    intro: [
      "North Bangalore has some of the city's most active plot markets — from established layouts in Yelahanka, Vidyaranyapura and Sahakar Nagar to newer developments around Hennur, Bagalur and Devanahalli. ACIPL is based in Yelahanka New Town, in the middle of it.",
      "We design and build independent houses, duplexes, villas and homes with rental floors. Drawings are prepared in-house, approvals handled for you, and our engineers can be on your site regularly because we are close by.",
    ],
    context: {
      heading: "Areas we build in",
      body: [
        "Yelahanka, Yelahanka New Town, Jakkur, Thanisandra, Hennur, Hebbal, Vidyaranyapura, Sahakar Nagar, Kogilu, Bagalur, Devanahalli and the airport corridor.",
        "Conditions vary across these areas — older layouts with tight access and neighbours on both sides, newer layouts still waiting for water and power connections, and plots near lakes and low-lying ground that need careful plinth levels and drainage. We plan for each from the first visit.",
      ],
    },
    details: [
      {
        heading: "Our North Bangalore construction pages",
        bullets: [
          "Yelahanka — home construction, villa construction and turnkey construction",
          "Thanisandra, Hennur and Jakkur — independent houses and villas",
          "Vidyaranyapura — new houses, rebuilds and additional floors",
          "Devanahalli and Bagalur — houses and villas near the airport",
        ],
      },
    ],
    trustHeading: "Why North Bangalore plot owners build with ACIPL",
    faqHeading: "House construction in North Bangalore: common questions",
    faqs: [
      {
        question: "What does it cost to build a house in North Bangalore?",
        answer:
          "Cost depends on built-up area, floors, soil conditions and specification. We visit your plot free of charge and give a detailed estimate with materials named, so you are comparing like with like.",
      },
      {
        question: "Which authority approves house plans in North Bangalore?",
        answer:
          "It depends on where your plot is — city limits and areas like Devanahalli fall under different planning authorities. We check your plot's documents and location, and tell you which approval route applies.",
      },
      {
        question: "Can you build houses with rental floors?",
        answer:
          "Yes. Many owners build their home with one or more rental units. We design separate entrances, independent meters and efficient rental layouts.",
      },
      {
        question: "Do you also do interiors?",
        answer:
          "Yes. ACIPL is a design-and-build firm, so we can plan and deliver interiors with the construction.",
      },
    ],
    related: [
      { label: "Home Construction Services in Yelahanka", href: "/home-construction-services-in-yelahanka" },
      { label: "House Construction in Thanisandra", href: "/house-construction-in-thanisandra" },
      { label: "House Construction in Devanahalli", href: "/house-construction-in-devanahalli" },
      { label: "House Construction in Hennur", href: "/house-construction-in-hennur" },
      { label: "House Construction in Jakkur", href: "/house-construction-in-jakkur" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
    ],
    enquiryCard: "Got a plot in North Bangalore?",
    enquiry: "Hi, I'd like to discuss building a house in North Bangalore with ACIPL.",
    closing: "Ready to build in North Bangalore?",
  },
]
