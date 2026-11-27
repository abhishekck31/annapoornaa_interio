/**
 * Bangalore-wide topic pages, batch 4 (30 pages): rooms and home types,
 * kitchen layouts, construction formats and guides, renovation by home type,
 * and office formats. All use the existing service profiles.
 *
 * Ground rules as before: no prices, timelines, project counts, warranties or
 * reviews; nothing is claimed that the profiles do not already support.
 */

import type { PillarInput } from "./build"

const BLR = "Design-and-build across Bangalore"

export const pillarInputs4: PillarInput[] = [
  // -------------------------------------------------------------------------
  // Interiors — rooms and home types
  // -------------------------------------------------------------------------
  {
    slug: "living-room-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "living room interior design in bangalore",
    breadcrumbLabel: "Living Room Interior Design in Bangalore",
    title: "Living Room Interior Design in Bangalore | TV Units, Ceilings | ACIPL",
    description:
      "Living room interior design in Bangalore — layout, TV unit, false ceiling, lighting, feature walls and storage, designed in 3D and built by ACIPL.",
    h1: "Living Room Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Living rooms planned around how your family sits, talks, watches and hosts.",
    image: "livingMarble",
    introHeading: "A living room that works every day",
    intro: [
      "The living room is the room guests see and the family uses most. A good design balances both: comfortable seating for everyday use, space to host, a TV unit that hides the clutter, and lighting that suits a quiet evening as well as a full house.",
      "ACIPL designs and builds living rooms across Bangalore as part of complete home interiors or on their own — TV units, feature walls, false ceilings, lighting, display and storage, all shown in 3D before anything is made.",
    ],
    context: {
      heading: "Start with the layout, not the furniture",
      body: [
        "We begin with where people sit, where the TV goes, how you walk through the room and where the light comes from. Furniture and finishes follow from that.",
        "In many Bangalore apartments, the living and dining areas share one space. We use ceilings, lighting, flooring or a partition to define each zone without closing it off.",
      ],
    },
    details: [
      {
        heading: "What a living room design usually includes",
        table: {
          columns: ["Element", "What we design"],
          rows: [
            ["TV unit", "Wall-mounted or floor unit with concealed wiring, storage and display"],
            ["Feature wall", "Panelling, stone, texture or wallpaper behind the TV or sofa"],
            ["False ceiling", "Gypsum or POP ceiling with cove lighting and spotlights"],
            ["Lighting", "Ambient, task and accent lighting on separate circuits"],
            ["Storage and display", "Shoe storage, crockery or display units, bar units if wanted"],
            ["Partition", "Wood, metal or glass screens between living, dining and entrance"],
          ],
        },
      },
    ],
    trustHeading: "Why families trust ACIPL with their living room",
    faqHeading: "Living room interior design: common questions",
    faqs: [
      {
        question: "Can you hide the TV wires?",
        answer: "Yes. We plan a conduit or channel behind the TV unit so set-top boxes, speakers and routers connect without visible wires.",
      },
      {
        question: "Do we need a false ceiling in the living room?",
        answer: "Not always. It helps with lighting and can define zones, but in rooms with low ceilings a simple cove or track lighting can work better. We advise per room.",
      },
      {
        question: "Can you design just the living room?",
        answer: "Yes. Single-room projects are welcome, and we can design them to fit with the rest of your home.",
      },
    ],
    related: [
      { label: "TV Unit Design in Bangalore", href: "/tv-unit-design-in-bangalore" },
      { label: "False Ceiling Contractors in Bangalore", href: "/false-ceiling-contractors-in-bangalore" },
      { label: "Dining Room and Crockery Unit Design in Bangalore", href: "/dining-room-and-crockery-unit-design-in-bangalore" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Redesigning your living room?",
    enquiry: "Hi, I'd like a living room interior design from ACIPL.",
    closing: "Ready for a living room you love?",
  },
  {
    slug: "kids-room-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "kids room interior design in bangalore",
    breadcrumbLabel: "Kids Room Interior Design in Bangalore",
    title: "Kids Room Interior Design in Bangalore | Study & Storage | ACIPL",
    description:
      "Kids room interior design in Bangalore — safe furniture, study units, bunk beds, wardrobes and storage that grow with your child. Designed in 3D by ACIPL.",
    h1: "Kids Room Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Rooms that are safe for little ones, work for study, and grow with your child.",
    image: "bedroom",
    introHeading: "A room that grows with your child",
    intro: [
      "Children's rooms change faster than any other room in the house. A toddler needs floor space and safe storage; a school-goer needs a proper study desk; a teenager wants a room that feels their own. A good design plans for those changes from the start.",
      "ACIPL designs kids' rooms with sturdy, safe furniture, smart storage and a layout that can be updated with new finishes rather than rebuilt.",
    ],
    context: {
      heading: "Safety and durability first",
      body: [
        "We use rounded edges, soft-close hinges, anti-tip fixings for tall units and low-emission boards and finishes. Electrical points are placed out of small children's reach.",
        "Finishes are chosen to wipe clean and stand up to daily wear, with colour and fun added through accessories that are easy to change.",
      ],
    },
    details: [
      {
        heading: "Ideas we often design into a kids' room",
        bullets: [
          "Study desk with shelves, a pin-board and good task lighting.",
          "Bunk or loft bed for shared rooms or to free up floor space.",
          "Wardrobe with adjustable shelves that change as clothes grow.",
          "Low, open storage for toys that children can reach and tidy themselves.",
          "A reading nook or window seat.",
          "Wall space that can be repainted or re-papered as tastes change.",
        ],
      },
    ],
    trustHeading: "Why parents choose ACIPL for kids' rooms",
    faqHeading: "Kids room interior design: common questions",
    faqs: [
      {
        question: "Are bunk beds safe for young children?",
        answer: "We design bunk beds with full guard rails and a sturdy ladder, and generally recommend the top bunk for older children.",
      },
      {
        question: "Can the room be updated as our child grows?",
        answer: "Yes. We design the core furniture to last and keep the theme in elements that are easy to change.",
      },
      {
        question: "Can two children share the room comfortably?",
        answer: "Yes. Bunk or loft beds, two study spaces and divided storage make shared rooms work well.",
      },
    ],
    related: [
      { label: "Bedroom Interior Design in Bangalore", href: "/bedroom-interior-design-in-bangalore" },
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
      { label: "Home Office Interior Design in Bangalore", href: "/home-office-interior-design-in-bangalore" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Planning a kids' room?",
    enquiry: "Hi, I'd like a kids' room interior design from ACIPL.",
    closing: "Ready to design your child's room?",
  },
  {
    slug: "home-office-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "home office interior design in bangalore",
    breadcrumbLabel: "Home Office Interior Design in Bangalore",
    title: "Home Office Interior Design in Bangalore | Study Rooms | ACIPL",
    description:
      "Home office and study room interior design in Bangalore — desks, storage, lighting, acoustics, power and data — for comfortable work-from-home days.",
    h1: "Home Office Interior Design in Bangalore",
    badge: BLR,
    subtitle: "A proper place to work at home — quiet, well lit and wired for video calls.",
    image: "partition",
    introHeading: "Working from home, properly",
    intro: [
      "Many Bangalore professionals now work from home several days a week. A dining table or bedroom corner works for a while, but a dedicated home office makes long days far more comfortable and calls far more professional.",
      "ACIPL designs home offices and study rooms — in a spare room, a corner of the bedroom, under the stairs or on the terrace — with the right desk, storage, lighting and power.",
    ],
    context: {
      heading: "What makes a home office work",
      body: [
        "A desk at the right height, a good chair, light from the side rather than behind the screen, and enough power and data points are the basics. We plan all of them.",
        "For video calls, a tidy backdrop, soft furnishings that reduce echo and a door that closes make a real difference.",
      ],
    },
    details: [
      {
        heading: "What we plan into a home office",
        table: {
          columns: ["Need", "Design response"],
          rows: [
            ["Comfort", "Desk at the right height, space for a proper chair, monitor position"],
            ["Light", "Natural light from the side, task light, glare-free ambient light"],
            ["Power and data", "Enough sockets at desk height, UPS point, wired data if wanted"],
            ["Calls", "Clean backdrop, acoustic panels or soft finishes, a door that seals"],
            ["Storage", "Files, books and equipment stored out of sight"],
          ],
        },
      },
    ],
    trustHeading: "Why professionals choose ACIPL for their home office",
    faqHeading: "Home office interior design: common questions",
    faqs: [
      {
        question: "Can you fit a home office into a bedroom?",
        answer: "Yes. A desk integrated with the wardrobe or a fold-away unit can give a proper workspace without taking over the room.",
      },
      {
        question: "Can you reduce echo for video calls?",
        answer: "Yes. Acoustic panels, curtains, rugs and upholstered furniture all reduce echo. We design them to look good too.",
      },
      {
        question: "Can you add data and power points?",
        answer: "Yes. We plan sockets, a UPS point and data wiring as part of the design.",
      },
    ],
    related: [
      { label: "Kids Room Interior Design in Bangalore", href: "/kids-room-interior-design-in-bangalore" },
      { label: "Bedroom Interior Design in Bangalore", href: "/bedroom-interior-design-in-bangalore" },
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
    ],
    enquiryCard: "Need a home office?",
    enquiry: "Hi, I'd like a home office designed by ACIPL.",
    closing: "Ready to work better from home?",
  },
  {
    slug: "walk-in-wardrobe-design-in-bangalore",
    service: "interior",
    primaryKeyword: "walk in wardrobe design in bangalore",
    breadcrumbLabel: "Walk-In Wardrobe Design in Bangalore",
    title: "Walk-In Wardrobe Design in Bangalore | Dressing Rooms | ACIPL",
    description:
      "Walk-in wardrobe and dressing room design in Bangalore — layouts, lighting, drawers, shoe and accessory storage, designed and built to fit by ACIPL.",
    h1: "Walk-In Wardrobe Design in Bangalore",
    badge: BLR,
    subtitle: "Dressing rooms planned around your clothes, shoes and routine.",
    image: "villaRoom",
    introHeading: "A walk-in wardrobe that is easy to live with",
    intro: [
      "A walk-in wardrobe is one of the most requested features in villas, duplexes and larger apartments. Done well, it makes getting ready easier every day and frees the bedroom of bulky wardrobes.",
      "ACIPL designs walk-in wardrobes and dressing rooms to fit your space and your belongings — hanging, folding, drawers, shoes, accessories and a mirror with good light.",
    ],
    context: {
      heading: "Plan for what you own",
      body: [
        "We start with an inventory: how much long and short hanging, how many shoes, what needs drawers and what can go on shelves. The layout follows from that.",
        "Even a narrow room or a passage between bedroom and bathroom can become a walk-in wardrobe if planned carefully.",
      ],
    },
    details: [
      {
        heading: "Layouts that work",
        table: {
          columns: ["Layout", "Best for"],
          rows: [
            ["Single wall", "Narrow passages between bedroom and bathroom"],
            ["Parallel", "Rooms wide enough for storage on both sides"],
            ["L-shaped", "Corner spaces with a dressing table or mirror"],
            ["U-shaped", "Dedicated dressing rooms with an island or seat"],
          ],
        },
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for dressing rooms",
    faqHeading: "Walk-in wardrobe design: common questions",
    faqs: [
      {
        question: "How much space do we need for a walk-in wardrobe?",
        answer: "It depends on the layout. A single-wall walk-in can work in a fairly narrow passage; parallel layouts need more width. We measure and show you options.",
      },
      {
        question: "Should a walk-in wardrobe have doors?",
        answer: "Open shelving is convenient but gathers dust. Many owners choose a mix — glass doors for display and solid shutters elsewhere.",
      },
      {
        question: "Can you add lighting inside the wardrobe?",
        answer: "Yes. Profile lights and sensor lights make it easy to see everything.",
      },
    ],
    related: [
      { label: "Wardrobe Designers in Bangalore", href: "/wardrobe-designers-in-bangalore" },
      { label: "Bedroom Interior Design in Bangalore", href: "/bedroom-interior-design-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "4BHK Interior Design in Bangalore", href: "/4bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Planning a walk-in wardrobe?",
    enquiry: "Hi, I'd like a walk-in wardrobe designed by ACIPL.",
    closing: "Ready for your dressing room?",
  },
  {
    slug: "4bhk-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "4bhk interior design in bangalore",
    breadcrumbLabel: "4BHK Interior Design in Bangalore",
    title: "4BHK Interior Design in Bangalore | Full Home Interiors | ACIPL",
    description:
      "4BHK interior design in Bangalore for apartments, duplexes and independent houses — complete home design, 3D views, itemised quote and one team to build it.",
    h1: "4BHK Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Complete interiors for larger homes — consistent, personal and managed by one team.",
    image: "livingMarble",
    introHeading: "Designing a larger home as one",
    intro: [
      "A 4BHK home usually means a larger family or multiple generations under one roof, often with a guest room, a study or a home office. Each room has a different user, yet the home should still feel like one design.",
      "ACIPL designs complete 4BHK interiors across Bangalore — apartments, duplexes and independent houses — with a common palette for the whole home and rooms tailored to the people who use them.",
    ],
    context: {
      heading: "One palette, many personalities",
      body: [
        "We agree a core palette of materials and colours for the shared spaces, then let each bedroom express its user within it.",
        "Bigger homes need more coordination. A single supervisor manages carpentry, ceilings, electrical and painting so the schedule holds.",
      ],
    },
    details: [
      {
        heading: "What a 4BHK project usually covers",
        table: {
          columns: ["Space", "Typical scope"],
          rows: [
            ["Living and dining", "TV unit, feature walls, crockery unit, ceilings, lighting"],
            ["Kitchen and utility", "Modular kitchen, tall units, utility storage"],
            ["Master bedroom", "Wardrobe or walk-in, bed back, dressing area"],
            ["Other bedrooms", "Wardrobes, study units, kids' or guest room furniture"],
            ["Extras", "Pooja unit, home office, shoe storage, balcony"],
          ],
        },
      },
    ],
    trustHeading: "Why families with larger homes choose ACIPL",
    faqHeading: "4BHK interior design: common questions",
    faqs: [
      {
        question: "Can we do the 4BHK interiors in phases?",
        answer: "Yes. We design the whole home and execute in phases if you prefer, so it stays consistent.",
      },
      {
        question: "Can parents' and children's rooms have different styles?",
        answer: "Yes, within a shared palette so the home still feels connected.",
      },
      {
        question: "Do you provide an itemised quote?",
        answer: "Yes. Every unit, finish and fitting is listed, room by room.",
      },
    ],
    related: [
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Duplex Interior Design in Bangalore", href: "/duplex-interior-design-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
    ],
    enquiryCard: "Furnishing a 4BHK?",
    enquiry: "Hi, I'd like a quote for 4BHK interiors from ACIPL.",
    closing: "Ready to design your 4BHK?",
  },
  {
    slug: "penthouse-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "penthouse interior design in bangalore",
    breadcrumbLabel: "Penthouse Interior Design in Bangalore",
    title: "Penthouse Interior Design in Bangalore | Luxury Interiors | ACIPL",
    description:
      "Penthouse interior design in Bangalore — double-height living, terraces, premium finishes, lighting and custom joinery, designed and built by ACIPL.",
    h1: "Penthouse Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Penthouses designed around the views, the terrace and the volume of the space.",
    image: "villaRoom",
    introHeading: "Making the most of a penthouse",
    intro: [
      "Penthouses come with features most apartments do not: double-height spaces, large terraces, internal staircases and city views. They also bring challenges — heat from the roof, tall walls that are hard to light, and terraces that need careful waterproofing.",
      "ACIPL designs penthouse interiors that make the most of those features — premium finishes, custom joinery, layered lighting and terraces that are genuinely usable.",
    ],
    context: {
      heading: "Designing for volume and light",
      body: [
        "Double-height walls need scale: tall panelling, a statement light, and lighting at several levels so the space never feels dark at night.",
        "Top-floor homes get more heat. We plan window treatments, ceiling insulation where possible and finishes that stay comfortable.",
      ],
    },
    details: [
      {
        heading: "What we often design in a penthouse",
        bullets: [
          "Double-height living room with a feature wall and statement lighting.",
          "Internal staircase with railings, lighting and storage beneath.",
          "Terrace with decking, planters, outdoor lighting and seating.",
          "Bar or entertainment area.",
          "Master suite with a walk-in wardrobe and a spa-like bathroom.",
        ],
      },
    ],
    trustHeading: "Why penthouse owners choose ACIPL",
    faqHeading: "Penthouse interior design: common questions",
    faqs: [
      {
        question: "Can you make our terrace usable?",
        answer: "Yes. We check the waterproofing first, then design decking, planters, shade, lighting and seating.",
      },
      {
        question: "How do you light a double-height space?",
        answer: "With a combination of a statement fixture, wall lights, cove lighting and spotlights, so the space works at different times of day.",
      },
      {
        question: "Do you work with premium materials?",
        answer: "Yes. We specify, source and install natural stone, veneers, lacquer and imported fittings, with samples approved by you.",
      },
    ],
    related: [
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
      { label: "Duplex Interior Design in Bangalore", href: "/duplex-interior-design-in-bangalore" },
      { label: "Walk-In Wardrobe Design in Bangalore", href: "/walk-in-wardrobe-design-in-bangalore" },
      { label: "4BHK Interior Design in Bangalore", href: "/4bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Designing a penthouse?",
    enquiry: "Hi, I'd like to discuss penthouse interiors with ACIPL.",
    closing: "Ready to design your penthouse?",
  },
  {
    slug: "duplex-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "duplex interior design in bangalore",
    breadcrumbLabel: "Duplex Interior Design in Bangalore",
    title: "Duplex Interior Design in Bangalore | Staircases & Living | ACIPL",
    description:
      "Duplex interior design in Bangalore — living spaces, staircases, double-height areas, kitchens and bedrooms across two floors, designed as one home.",
    h1: "Duplex Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Two floors, one design — living spaces, staircase and bedrooms that flow together.",
    image: "livingTv",
    introHeading: "Designing a duplex as one home",
    intro: [
      "A duplex — whether an apartment or an independent house — splits the home across two floors, usually with living spaces below and bedrooms above. The staircase connects them and is often the first thing visitors see.",
      "ACIPL designs duplex interiors across Bangalore as one continuous home: a consistent palette, a staircase that works as a feature, and lighting that ties the floors together.",
    ],
    context: {
      heading: "The staircase is the centrepiece",
      body: [
        "We design the staircase railing, lighting, the wall beside it and the space beneath — often a pooja unit, storage, a bar or a reading nook.",
        "Where there is a double-height area, we light and furnish it to feel generous rather than empty.",
      ],
    },
    details: [
      {
        heading: "Typical duplex scope",
        table: {
          columns: ["Floor", "Typical scope"],
          rows: [
            ["Ground", "Living, dining, kitchen, guest or parents' bedroom, pooja"],
            ["Staircase", "Railing, lighting, feature wall, under-stair storage or unit"],
            ["Upper", "Master suite, children's rooms, family lounge, study"],
          ],
        },
      },
    ],
    trustHeading: "Why duplex owners choose ACIPL",
    faqHeading: "Duplex interior design: common questions",
    faqs: [
      {
        question: "What can we do with the space under the stairs?",
        answer: "Storage, a pooja unit, a bar, a reading nook or a guest washroom, depending on the size. We show options in 3D.",
      },
      {
        question: "Can you change the staircase railing?",
        answer: "Yes. We design railings in glass, metal, wood or a combination.",
      },
      {
        question: "Do you also build duplex houses?",
        answer: "Yes. ACIPL designs and builds duplex houses and can do the interiors in the same project.",
      },
    ],
    related: [
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
      { label: "Penthouse Interior Design in Bangalore", href: "/penthouse-interior-design-in-bangalore" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
      { label: "4BHK Interior Design in Bangalore", href: "/4bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Designing a duplex?",
    enquiry: "Hi, I'd like a quote for duplex interiors from ACIPL.",
    closing: "Ready to design your duplex?",
  },
  {
    slug: "new-flat-interior-design-in-bangalore",
    service: "interior",
    primaryKeyword: "new flat interior design in bangalore",
    breadcrumbLabel: "New Flat Interior Design in Bangalore",
    title: "New Flat Interior Design in Bangalore | Ready to Move In | ACIPL",
    description:
      "Interiors for a newly handed-over flat in Bangalore — snag check, layout, kitchen, wardrobes, ceilings and lighting, planned to your move-in date.",
    h1: "New Flat Interior Design in Bangalore",
    badge: BLR,
    subtitle: "From key handover to move-in — interiors planned and scheduled around your date.",
    image: "bedroom",
    introHeading: "Just got the keys? Start here",
    intro: [
      "The weeks after a flat is handed over are the best time to do interiors: the flat is empty, the builder's warranty period is running, and you can install everything before moving in.",
      "ACIPL helps new-flat owners across Bangalore go from handover to a finished home — checking the builder's work, designing the interiors and installing them to your move-in date.",
    ],
    context: {
      heading: "Check the flat before you design",
      body: [
        "Before interiors go in, we walk the flat with you to note visible issues — damp patches, uneven floors, faulty points — so you can raise them with the builder while they are responsible.",
        "We then map every electrical and plumbing point and design around them, moving only what genuinely improves the layout.",
      ],
    },
    details: [
      {
        heading: "From handover to move-in",
        table: {
          columns: ["Step", "What happens"],
          rows: [
            ["Walkthrough", "Visible snags noted; points and dimensions measured"],
            ["Design", "Layouts, 3D views of key rooms, material samples, itemised quote"],
            ["Approvals", "Association paperwork and working-hour rules"],
            ["Production and site work", "Units made off site while ceilings and electrical work happen on site"],
            ["Installation and handover", "Installation, painting, deep clean, snag walk"],
          ],
        },
      },
    ],
    trustHeading: "Why new-flat owners choose ACIPL",
    faqHeading: "New flat interior design: common questions",
    faqs: [
      {
        question: "Can you check our flat for defects?",
        answer: "We do a visual walkthrough and note issues we see so you can raise them with the builder. It is not a formal structural inspection.",
      },
      {
        question: "Can you finish before our move-in date?",
        answer: "We agree a dated schedule at the start based on the scope. If the date is tight, we tell you honestly what is achievable.",
      },
      {
        question: "Do you handle the association's paperwork?",
        answer: "We prepare the details associations usually ask for and follow their rules.",
      },
    ],
    related: [
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
      { label: "3BHK Interior Design in Bangalore", href: "/3bhk-interior-design-in-bangalore" },
      { label: "Interior Design for NRIs in Bangalore", href: "/interior-design-for-nris-in-bangalore" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
    ],
    enquiryCard: "Just got your keys?",
    enquiry: "Hi, I've just got the keys to a new flat and would like interiors from ACIPL.",
    closing: "Ready to make the flat your home?",
  },
  {
    slug: "interior-design-for-nris-in-bangalore",
    service: "interior",
    primaryKeyword: "interior design for nri in bangalore",
    breadcrumbLabel: "Interior Design for NRIs in Bangalore",
    title: "Interior Design for NRIs in Bangalore | Managed Remotely | ACIPL",
    description:
      "Interiors for NRI homeowners in Bangalore — online design reviews, itemised quotes, photo and video updates and a single point of contact through handover.",
    h1: "Interior Design for NRIs in Bangalore",
    badge: BLR,
    subtitle: "Your Bangalore home, designed and finished while you are abroad — with clear updates at every stage.",
    image: "livingTv",
    introHeading: "Interiors you can manage from anywhere",
    intro: [
      "Many NRIs buy a flat or build a house in Bangalore for family, for retirement or as an investment. Getting the interiors done from abroad is the hard part: coordinating visits, approving designs across time zones and trusting that work matches what was agreed.",
      "ACIPL works with NRI homeowners to design and complete interiors with minimal need to be in Bangalore — online design reviews, itemised quotes and regular photo and video updates.",
    ],
    context: {
      heading: "Clarity at every step",
      body: [
        "Everything is agreed in writing — the design, the specification of every item and a dated schedule. Changes are priced and approved before they are made.",
        "Your project has one point of contact, available at times that suit your time zone, and family members in Bangalore can visit the site whenever you like.",
      ],
    },
    details: [
      {
        heading: "How we work with NRI clients",
        bullets: [
          "Measurement visit, with a family member or by arrangement with the association.",
          "Layouts and 3D views shared online and reviewed on video calls.",
          "Material samples shown on video or to a family member.",
          "Itemised quote and dated schedule in writing.",
          "Regular photo and video updates through the work.",
          "Final walkthrough on video, snag fixes and handover of keys and documents.",
        ],
      },
    ],
    trustHeading: "Why NRI homeowners trust ACIPL",
    faqHeading: "Interior design for NRIs: common questions",
    faqs: [
      {
        question: "Do we need to visit Bangalore at all?",
        answer: "Not necessarily. Many decisions can be made online. A visit or a family member's help is useful for choosing samples, but it is not required.",
      },
      {
        question: "How will we know the work matches what we approved?",
        answer: "Every item is specified in the quote, and we send photo and video updates at each stage so you can check progress.",
      },
      {
        question: "Can you also manage rental of the flat?",
        answer: "We handle design and execution only, but we can coordinate with your property manager or tenant.",
      },
    ],
    related: [
      { label: "House Construction for NRIs in Bangalore", href: "/house-construction-for-nris-in-bangalore" },
      { label: "New Flat Interior Design in Bangalore", href: "/new-flat-interior-design-in-bangalore" },
      { label: "Rental Property Renovation in Bangalore", href: "/rental-property-renovation-in-bangalore" },
      { label: "Turnkey Interior Contractors in Bangalore", href: "/turnkey-interior-contractors-in-bangalore" },
    ],
    enquiryCard: "Living abroad?",
    enquiry: "Hi, I live abroad and would like ACIPL to do the interiors of my Bangalore home.",
    closing: "Ready to get your Bangalore home finished?",
  },
  {
    slug: "dining-room-and-crockery-unit-design-in-bangalore",
    service: "interior",
    primaryKeyword: "crockery unit design in bangalore",
    breadcrumbLabel: "Dining Room and Crockery Unit Design in Bangalore",
    title: "Dining Room & Crockery Unit Design in Bangalore | ACIPL",
    description:
      "Dining room interiors and crockery unit design in Bangalore — display units, bar units, lighting and partitions, custom-made to fit your space.",
    h1: "Dining Room and Crockery Unit Design in Bangalore",
    badge: BLR,
    subtitle: "Dining spaces and crockery units designed to fit the room and the way you host.",
    image: "partition",
    introHeading: "Where the family comes together",
    intro: [
      "In most Bangalore homes, the dining area is part of the living room or beside the kitchen. It needs to seat the family comfortably every day, stretch for guests, and store crockery, serveware and the things that collect on a dining table.",
      "ACIPL designs dining areas and crockery units to fit your space — display and closed storage, a bar unit if you want one, and lighting that makes meals feel special.",
    ],
    context: {
      heading: "Crockery units that work hard",
      body: [
        "A good crockery unit combines glass-fronted display for the pieces you want to show with closed storage and drawers for everything else.",
        "Where the dining area joins the living room or entrance, a partition or a change in ceiling and lighting defines it without closing it off.",
      ],
    },
    details: [
      {
        heading: "Common dining-area features",
        bullets: [
          "Floor-standing or wall-mounted crockery unit with display and closed storage.",
          "Bar unit with glass storage and a counter.",
          "Pendant light over the dining table on its own circuit.",
          "Partition between dining and entrance or living.",
          "Wash basin area with a mirror and storage.",
        ],
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for dining spaces",
    faqHeading: "Dining room and crockery unit design: common questions",
    faqs: [
      {
        question: "Can a crockery unit double as a partition?",
        answer: "Yes. A two-sided unit can divide the dining area from the entrance or living room while storing crockery.",
      },
      {
        question: "Can you add lighting inside the crockery unit?",
        answer: "Yes. Profile or spot lighting inside display sections shows off your pieces.",
      },
      {
        question: "Can you design a wash basin area?",
        answer: "Yes. Many homes have a basin near the dining area, and we design it with a mirror, storage and lighting.",
      },
    ],
    related: [
      { label: "Living Room Interior Design in Bangalore", href: "/living-room-interior-design-in-bangalore" },
      { label: "Open Kitchen Design in Bangalore", href: "/open-kitchen-design-in-bangalore" },
      { label: "TV Unit Design in Bangalore", href: "/tv-unit-design-in-bangalore" },
      { label: "2BHK Interior Design in Bangalore", href: "/2bhk-interior-design-in-bangalore" },
    ],
    enquiryCard: "Planning a dining space?",
    enquiry: "Hi, I'd like a dining room and crockery unit designed by ACIPL.",
    closing: "Ready to design your dining space?",
  },
  // -------------------------------------------------------------------------
  // Kitchen layouts
  // -------------------------------------------------------------------------
  {
    slug: "l-shaped-modular-kitchen-in-bangalore",
    service: "kitchen",
    primaryKeyword: "l shaped modular kitchen in bangalore",
    breadcrumbLabel: "L-Shaped Modular Kitchen in Bangalore",
    title: "L-Shaped Modular Kitchen in Bangalore | Design & Install | ACIPL",
    description:
      "L-shaped modular kitchens in Bangalore — corner storage, work triangle, chimney and appliance planning, designed in 3D and installed by ACIPL.",
    h1: "L-Shaped Modular Kitchen in Bangalore",
    badge: BLR,
    subtitle: "The most common layout in Bangalore apartments — planned so the corner works as hard as the rest.",
    image: "kitchenU",
    introHeading: "Why L-shaped kitchens are so popular",
    intro: [
      "An L-shaped kitchen runs along two adjoining walls. It suits most mid-sized Bangalore kitchens, keeps the cooking area out of the walkway and leaves room for a small table or a utility door.",
      "ACIPL designs L-shaped modular kitchens across Bangalore, measuring on site and planning the corner, the work triangle and every appliance before anything is made.",
    ],
    context: {
      heading: "Getting the corner right",
      body: [
        "The corner is where L-shaped kitchens either work or waste space. Carousels, pull-out corner units or a simple blind-corner shelf each suit different budgets and uses.",
        "We usually place the hob on one leg and the sink on the other, with counter space between them for preparation.",
      ],
    },
    details: [
      {
        heading: "Is an L-shaped kitchen right for you?",
        table: {
          columns: ["Works well when", "Consider another layout when"],
          rows: [
            ["The kitchen has two adjoining solid walls", "Doors or windows break up both walls"],
            ["The room is mid-sized and roughly square", "The room is long and narrow (consider parallel)"],
            ["You want space for a small table", "You need maximum storage (consider U-shaped)"],
          ],
        },
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for their kitchen",
    faqHeading: "L-shaped modular kitchens: common questions",
    faqs: [
      {
        question: "What is the best corner solution?",
        answer: "It depends on budget and what you store. Carousels and pull-out corner units give the best access; a blind corner shelf is simplest. We show options.",
      },
      {
        question: "Where should the hob and sink go?",
        answer: "Usually on different legs with a preparation counter between, but it depends on the window, door and existing points.",
      },
      {
        question: "Can an L-shaped kitchen have a breakfast counter?",
        answer: "Often, yes — extending one leg into a counter adds seating without blocking the kitchen.",
      },
    ],
    related: [
      { label: "U-Shaped Modular Kitchen in Bangalore", href: "/u-shaped-modular-kitchen-in-bangalore" },
      { label: "Parallel Modular Kitchen in Bangalore", href: "/parallel-modular-kitchen-in-bangalore" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
    ],
    enquiryCard: "Planning an L-shaped kitchen?",
    enquiry: "Hi, I'd like a quote for an L-shaped modular kitchen from ACIPL.",
    closing: "Ready for your new kitchen?",
  },
  {
    slug: "u-shaped-modular-kitchen-in-bangalore",
    service: "kitchen",
    primaryKeyword: "u shaped modular kitchen in bangalore",
    breadcrumbLabel: "U-Shaped Modular Kitchen in Bangalore",
    title: "U-Shaped Modular Kitchen in Bangalore | Maximum Storage | ACIPL",
    description:
      "U-shaped modular kitchens in Bangalore — maximum storage and counter space, two corners planned properly, designed in 3D and installed by ACIPL.",
    h1: "U-Shaped Modular Kitchen in Bangalore",
    badge: BLR,
    subtitle: "Counters on three sides — the most storage and work space a kitchen can offer.",
    image: "kitchenU",
    introHeading: "The layout for serious cooks",
    intro: [
      "A U-shaped kitchen wraps counters around three walls. It gives the most storage and counter space of any layout, and it keeps the cook in a compact zone with everything within reach.",
      "ACIPL designs U-shaped modular kitchens for larger apartments, independent houses and villas across Bangalore, with both corners planned to be usable rather than wasted.",
    ],
    context: {
      heading: "Two corners to plan",
      body: [
        "A U-shape has two corners. We plan both — a carousel in one, perhaps a pull-out or a tall unit near the other — so no storage is lost.",
        "The space between the legs needs to be wide enough for two people to work without bumping into each other. We check it on site.",
      ],
    },
    details: [
      {
        heading: "Is a U-shaped kitchen right for you?",
        table: {
          columns: ["Works well when", "Consider another layout when"],
          rows: [
            ["The kitchen has three usable walls", "The room is too narrow for clear space between legs"],
            ["You cook a lot and need storage", "You want the kitchen open to the dining area (consider an island or peninsula)"],
            ["The door is on the fourth wall", "Doors break up two or more walls"],
          ],
        },
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for their kitchen",
    faqHeading: "U-shaped modular kitchens: common questions",
    faqs: [
      {
        question: "Is our kitchen wide enough for a U-shape?",
        answer: "It needs enough clear floor space between the legs to work comfortably. We measure and tell you on the first visit.",
      },
      {
        question: "Can one leg of the U be a breakfast counter?",
        answer: "Yes. Turning one leg into a peninsula with seating is a popular option in open kitchens.",
      },
      {
        question: "Where does the fridge go?",
        answer: "Usually at the end of one leg, so it is reachable without walking through the cooking zone.",
      },
    ],
    related: [
      { label: "L-Shaped Modular Kitchen in Bangalore", href: "/l-shaped-modular-kitchen-in-bangalore" },
      { label: "Island Kitchen Design in Bangalore", href: "/island-kitchen-design-in-bangalore" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
    ],
    enquiryCard: "Planning a U-shaped kitchen?",
    enquiry: "Hi, I'd like a quote for a U-shaped modular kitchen from ACIPL.",
    closing: "Ready for your new kitchen?",
  },
  {
    slug: "parallel-modular-kitchen-in-bangalore",
    service: "kitchen",
    primaryKeyword: "parallel modular kitchen in bangalore",
    breadcrumbLabel: "Parallel Modular Kitchen in Bangalore",
    title: "Parallel Modular Kitchen in Bangalore | Galley Kitchens | ACIPL",
    description:
      "Parallel (galley) modular kitchens in Bangalore — two efficient counters, wet and dry zones, tall storage, designed in 3D and installed by ACIPL.",
    h1: "Parallel Modular Kitchen in Bangalore",
    badge: BLR,
    subtitle: "Two counters facing each other — efficient, practical and ideal for long, narrow kitchens.",
    image: "kitchenParallel",
    introHeading: "Efficient kitchens for long, narrow rooms",
    intro: [
      "A parallel or galley kitchen has two counters facing each other. It is one of the most efficient layouts for cooking, and it suits the long, narrow kitchens common in Bangalore apartments.",
      "ACIPL designs parallel modular kitchens across Bangalore, splitting wet and dry work between the two sides so the kitchen stays clean and easy to use.",
    ],
    context: {
      heading: "Wet side and dry side",
      body: [
        "A common plan puts the sink and dishwasher on one side and the hob and preparation counter on the other. That keeps water away from the cooking zone and makes cleaning easier.",
        "Tall units at one end and a loft above both sides add storage without crowding the counters.",
      ],
    },
    details: [
      {
        heading: "Is a parallel kitchen right for you?",
        table: {
          columns: ["Works well when", "Consider another layout when"],
          rows: [
            ["The kitchen is long and narrow", "The kitchen is nearly square (consider L or U)"],
            ["There is a door or utility at the end", "The room is too narrow for clear space between counters"],
            ["You want separate wet and dry zones", "You want an open kitchen with seating"],
          ],
        },
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for their kitchen",
    faqHeading: "Parallel modular kitchens: common questions",
    faqs: [
      {
        question: "How wide should the gap between the counters be?",
        answer: "Wide enough to open drawers and pass comfortably. We measure on site and tell you whether a parallel layout works.",
      },
      {
        question: "Which side should the hob go on?",
        answer: "Usually the side with the outside wall, so the chimney can vent easily. We plan it around your room.",
      },
      {
        question: "Can a parallel kitchen have enough storage?",
        answer: "Yes. Tall units, lofts and deep drawers on both sides give a lot of capacity.",
      },
    ],
    related: [
      { label: "L-Shaped Modular Kitchen in Bangalore", href: "/l-shaped-modular-kitchen-in-bangalore" },
      { label: "U-Shaped Modular Kitchen in Bangalore", href: "/u-shaped-modular-kitchen-in-bangalore" },
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
    ],
    enquiryCard: "Planning a parallel kitchen?",
    enquiry: "Hi, I'd like a quote for a parallel modular kitchen from ACIPL.",
    closing: "Ready for your new kitchen?",
  },
  {
    slug: "island-kitchen-design-in-bangalore",
    service: "kitchen",
    primaryKeyword: "island kitchen design in bangalore",
    breadcrumbLabel: "Island Kitchen Design in Bangalore",
    title: "Island Kitchen Design in Bangalore | Villas & Large Homes | ACIPL",
    description:
      "Island kitchen design in Bangalore — islands with storage, seating, hobs or sinks, planned with clearances, power and plumbing by ACIPL.",
    h1: "Island Kitchen Design in Bangalore",
    badge: BLR,
    subtitle: "Islands that add work space, storage and a place to gather — planned with the right clearances.",
    image: "kitchenU",
    introHeading: "When an island makes sense",
    intro: [
      "A kitchen island is a free-standing counter in the middle of the kitchen. It adds preparation space and storage, and with stools it becomes a breakfast counter and a place for family and guests to gather while you cook.",
      "ACIPL designs island kitchens for villas, independent houses and larger apartments across Bangalore, checking that the room has space for comfortable walkways before recommending one.",
    ],
    context: {
      heading: "Plan the island early",
      body: [
        "If the island will have a hob or sink, power, gas or water and drainage must come through the floor. That is easiest to plan before flooring — ideally during construction.",
        "An island needs clear space on every side. If the room is too small, a peninsula — a counter attached at one end — gives similar benefits.",
      ],
    },
    details: [
      {
        heading: "What an island can include",
        table: {
          columns: ["Option", "Considerations"],
          rows: [
            ["Storage only", "Simplest; drawers and cupboards facing the main kitchen"],
            ["Seating", "Counter overhang on one side for stools"],
            ["Sink", "Water and drainage through the floor"],
            ["Hob", "Gas or power through the floor and an island chimney"],
            ["Appliances", "Built-in microwave, wine cooler or dishwasher"],
          ],
        },
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for their kitchen",
    faqHeading: "Island kitchen design: common questions",
    faqs: [
      {
        question: "Is our kitchen big enough for an island?",
        answer: "It needs enough clear space around the island to open drawers and move freely. We measure and show you, and suggest a peninsula if an island will not fit.",
      },
      {
        question: "Can the island have a hob?",
        answer: "Yes, with an island chimney and gas or power through the floor. It is easiest to plan before flooring is laid.",
      },
      {
        question: "Can you design the island for seating?",
        answer: "Yes. A counter overhang on one side gives space for stools.",
      },
    ],
    related: [
      { label: "Open Kitchen Design in Bangalore", href: "/open-kitchen-design-in-bangalore" },
      { label: "U-Shaped Modular Kitchen in Bangalore", href: "/u-shaped-modular-kitchen-in-bangalore" },
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
    ],
    enquiryCard: "Want an island kitchen?",
    enquiry: "Hi, I'd like to discuss an island kitchen with ACIPL.",
    closing: "Ready for your island kitchen?",
  },
  {
    slug: "open-kitchen-design-in-bangalore",
    service: "kitchen",
    primaryKeyword: "open kitchen design in bangalore",
    breadcrumbLabel: "Open Kitchen Design in Bangalore",
    title: "Open Kitchen Design in Bangalore | Kitchen-Dining Layouts | ACIPL",
    description:
      "Open kitchen design in Bangalore — kitchen and dining as one space, with the right chimney, finishes and storage for Indian cooking. Designed by ACIPL.",
    h1: "Open Kitchen Design in Bangalore",
    badge: BLR,
    subtitle: "Kitchens open to the dining and living areas — designed to look good and handle Indian cooking.",
    image: "kitchenParallel",
    introHeading: "Open kitchens and Indian cooking",
    intro: [
      "Open kitchens connect the cook with the family and make a home feel larger. But Indian cooking brings smoke, smell and splatter, so an open kitchen needs more care than a closed one.",
      "ACIPL designs open kitchens across Bangalore that are honest about this: a strong chimney, easy-clean finishes, closed storage, and often a separate utility or working kitchen for heavy cooking.",
    ],
    context: {
      heading: "Making an open kitchen practical",
      body: [
        "A powerful, well-ducted chimney is essential. We plan its position and duct route in the design.",
        "Closed storage keeps the kitchen tidy when it is on view, and a glass partition or sliding door can close it off on heavy-cooking days.",
      ],
    },
    details: [
      {
        heading: "Options for opening up the kitchen",
        bullets: [
          "Fully open kitchen with a peninsula or island facing the dining area.",
          "Semi-open kitchen with a glass partition or sliding glass doors.",
          "Open show kitchen with a separate working kitchen or utility behind.",
          "Breakfast counter between kitchen and dining.",
        ],
        note: "Removing a wall needs a structural check first. We assess it before recommending any change.",
      },
    ],
    trustHeading: "Why homeowners choose ACIPL for their kitchen",
    faqHeading: "Open kitchen design: common questions",
    faqs: [
      {
        question: "Will cooking smells spread through the house?",
        answer: "A strong, ducted chimney and good ventilation reduce it a lot. A glass partition or sliding door adds an option to close off on heavy-cooking days.",
      },
      {
        question: "Can you open up our existing closed kitchen?",
        answer: "Often, yes, after checking whether the wall is load-bearing. If it is, we design support so it can be opened safely.",
      },
      {
        question: "Which finishes are best for an open kitchen?",
        answer: "Matte or anti-fingerprint finishes that wipe clean and look good from the living room. We bring samples.",
      },
    ],
    related: [
      { label: "Island Kitchen Design in Bangalore", href: "/island-kitchen-design-in-bangalore" },
      { label: "Dining Room and Crockery Unit Design in Bangalore", href: "/dining-room-and-crockery-unit-design-in-bangalore" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "L-Shaped Modular Kitchen in Bangalore", href: "/l-shaped-modular-kitchen-in-bangalore" },
    ],
    enquiryCard: "Thinking of an open kitchen?",
    enquiry: "Hi, I'd like to discuss an open kitchen design with ACIPL.",
    closing: "Ready to open up your kitchen?",
  },
  // -------------------------------------------------------------------------
  // House construction — formats and guides
  // -------------------------------------------------------------------------
  {
    slug: "g-plus-2-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "g+2 house construction in bangalore",
    breadcrumbLabel: "G+2 House Construction in Bangalore",
    title: "G+2 House Construction in Bangalore | Family & Rental | ACIPL",
    description:
      "G+2 house construction in Bangalore — ground plus two floors for family living and rental units, with design, approvals and construction by ACIPL.",
    h1: "G+2 House Construction in Bangalore",
    badge: BLR,
    subtitle: "Ground plus two floors — the most popular format for family homes with rental income.",
    image: "houseFourStorey",
    introHeading: "Why G+2 is so common in Bangalore",
    intro: [
      "A G+2 house has a ground floor and two upper floors. On typical Bangalore sites, it is a popular balance: enough space for the family plus one or two rental units, without the extra requirements that taller buildings bring.",
      "ACIPL designs and builds G+2 homes across Bangalore, planning the floors, staircase and services around how each floor will be used.",
    ],
    context: {
      heading: "Planning each floor's use",
      body: [
        "Common arrangements include the family on the ground floor with rentals above, the family across two floors with one rental, or a floor for each generation.",
        "Each arrangement needs a different staircase position, entrances and meters, so we fix the plan before structural design.",
      ],
    },
    details: [
      {
        heading: "Common G+2 arrangements",
        table: {
          columns: ["Arrangement", "Typical use"],
          rows: [
            ["Owner on ground, two rentals above", "Maximum rental income, easy access for the family"],
            ["Owner duplex, one rental", "More family space with some income"],
            ["One floor per generation", "Parents, children and grandchildren under one roof"],
          ],
        },
        note: "What your plot permits depends on road width, setbacks and zoning. We confirm these before design.",
      },
    ],
    trustHeading: "Why owners build their G+2 home with ACIPL",
    faqHeading: "G+2 house construction: common questions",
    faqs: [
      {
        question: "Is G+2 allowed on our plot?",
        answer: "It depends on road width, plot size, setbacks and zoning. We check before drawing anything.",
      },
      {
        question: "Should we design for a third floor later?",
        answer: "If you might add one, we design the foundation and columns for it now, which avoids strengthening later.",
      },
      {
        question: "Can each floor have separate meters?",
        answer: "Yes. Separate electricity and water meters are planned for each unit.",
      },
    ],
    related: [
      { label: "G+3 House Construction in Bangalore", href: "/g-plus-3-house-construction-in-bangalore" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
      { label: "Stilt Parking House Construction in Bangalore", href: "/stilt-parking-house-construction-in-bangalore" },
      { label: "Independent House Construction in Bangalore", href: "/independent-house-construction-in-bangalore" },
    ],
    enquiryCard: "Planning a G+2 home?",
    enquiry: "Hi, I'd like to discuss building a G+2 house with ACIPL.",
    closing: "Ready to build your G+2 home?",
  },
  {
    slug: "g-plus-3-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "g+3 house construction in bangalore",
    breadcrumbLabel: "G+3 House Construction in Bangalore",
    title: "G+3 House Construction in Bangalore | Multi-Floor Homes | ACIPL",
    description:
      "G+3 house construction in Bangalore — ground plus three floors with lift provision, rental units and the approvals that apply, designed and built by ACIPL.",
    h1: "G+3 House Construction in Bangalore",
    badge: BLR,
    subtitle: "Ground plus three floors — more homes on your plot, planned for stairs, lift and services.",
    image: "houseFourStorey",
    introHeading: "Building up on your plot",
    intro: [
      "A G+3 building — ground plus three floors — makes the most of a Bangalore plot where the rules allow it. Owners use the extra floor for more rental income or for another generation of the family.",
      "Taller buildings need more planning: a lift becomes much more useful, the structure carries more load, and more requirements may apply. ACIPL designs and builds G+3 homes with all of this planned from the start.",
    ],
    context: {
      heading: "What changes at G+3",
      body: [
        "With four levels, a lift makes daily life far easier, especially for older family members. We plan the shaft and pit even if the lift is installed later.",
        "The structure, water storage, pumping and parking all grow with the building. We design them together so they work smoothly.",
      ],
    },
    details: [
      {
        heading: "What we plan for a G+3 building",
        bullets: [
          "Foundation and frame designed for four floors and any future additions.",
          "Lift shaft and pit, with stairs designed around them.",
          "Parking — often a stilt floor where permitted.",
          "Water storage and pumping for every floor.",
          "Separate meters and entrances for rental units.",
          "Compliance checks for the plot's road width, height and setbacks.",
        ],
      },
    ],
    trustHeading: "Why owners build G+3 homes with ACIPL",
    faqHeading: "G+3 house construction: common questions",
    faqs: [
      {
        question: "Is G+3 permitted on our plot?",
        answer: "It depends on road width, plot size, setbacks and zoning. We check before design.",
      },
      {
        question: "Do we need a lift?",
        answer: "It is not always required, but with four levels it is very useful. We plan a shaft so one can be fitted now or later.",
      },
      {
        question: "Can we have stilt parking with G+3?",
        answer: "Where the rules allow, yes. We check what your plot permits.",
      },
    ],
    related: [
      { label: "G+2 House Construction in Bangalore", href: "/g-plus-2-house-construction-in-bangalore" },
      { label: "House Construction with Home Lift in Bangalore", href: "/house-construction-with-home-lift-in-bangalore" },
      { label: "Stilt Parking House Construction in Bangalore", href: "/stilt-parking-house-construction-in-bangalore" },
      { label: "Apartment Building Construction in Bangalore", href: "/apartment-building-construction-in-bangalore" },
    ],
    enquiryCard: "Planning a G+3 building?",
    enquiry: "Hi, I'd like to discuss building a G+3 house with ACIPL.",
    closing: "Ready to build up?",
  },
  {
    slug: "stilt-parking-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "stilt parking house construction in bangalore",
    breadcrumbLabel: "Stilt Parking House Construction in Bangalore",
    title: "Stilt Parking House Construction in Bangalore | Stilt + Floors | ACIPL",
    description:
      "Stilt parking houses in Bangalore — covered parking on the stilt floor with homes above, designed for structure, drainage and approvals by ACIPL.",
    h1: "Stilt Parking House Construction in Bangalore",
    badge: BLR,
    subtitle: "Covered parking on the stilt floor, homes above — planned so the structure and space both work.",
    image: "houseFourStorey",
    introHeading: "Parking under the house",
    intro: [
      "A stilt floor is an open ground level, supported on columns, used for parking. In Bangalore, where street parking is scarce and plots are small, stilt parking keeps cars off the road and frees the upper floors for living.",
      "ACIPL designs and builds stilt-parking houses across Bangalore, planning column positions, ramps, drainage and the floors above so parking and living both work well.",
    ],
    context: {
      heading: "Columns, clearances and drainage",
      body: [
        "Column positions decide how many cars fit and how easily they turn. We plan the structure around parking, not the other way round.",
        "Stilt floors need good drainage and lighting, and space for meters, a sump, a security cabin or storage. We design those in.",
      ],
    },
    details: [
      {
        heading: "What we plan on a stilt floor",
        table: {
          columns: ["Item", "Why it matters"],
          rows: [
            ["Column grid", "Decides how many cars fit and how easily they move"],
            ["Height and clearance", "Comfortable headroom and space for services"],
            ["Ramp and entry", "Safe slope from the road, with the gate swing planned"],
            ["Drainage", "Rainwater kept out, floor sloped to drains"],
            ["Utilities", "Meter room, sump, pumps, lighting and staircase lobby"],
          ],
        },
        note: "Whether stilt parking is permitted, and how it is counted, depends on the plot's rules. We check before design.",
      },
    ],
    trustHeading: "Why owners build stilt-parking homes with ACIPL",
    faqHeading: "Stilt parking houses: common questions",
    faqs: [
      {
        question: "How many cars can fit on our stilt floor?",
        answer: "It depends on the plot's width, depth and setbacks, and the column grid. We draw options to show you.",
      },
      {
        question: "Can we use part of the stilt floor as a room?",
        answer: "That depends on the rules for your plot. We advise on what is permitted before design.",
      },
      {
        question: "Do stilt floors flood?",
        answer: "Not if levels and drainage are planned properly. We set the stilt level and slopes carefully.",
      },
    ],
    related: [
      { label: "G+2 House Construction in Bangalore", href: "/g-plus-2-house-construction-in-bangalore" },
      { label: "G+3 House Construction in Bangalore", href: "/g-plus-3-house-construction-in-bangalore" },
      { label: "Structural Design Services in Bangalore", href: "/structural-design-services-in-bangalore" },
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
    ],
    enquiryCard: "Want stilt parking?",
    enquiry: "Hi, I'd like to build a house with stilt parking with ACIPL.",
    closing: "Ready to build with stilt parking?",
  },
  {
    slug: "house-construction-with-home-lift-in-bangalore",
    service: "construction",
    primaryKeyword: "house construction with lift in bangalore",
    breadcrumbLabel: "House Construction with Home Lift in Bangalore",
    title: "House Construction with Home Lift in Bangalore | ACIPL",
    description:
      "Build a house with a home lift in Bangalore — shaft, pit, structure and power planned from the start, so a lift can be installed now or later.",
    h1: "House Construction with Home Lift in Bangalore",
    badge: BLR,
    subtitle: "Homes designed with a lift from the start — for parents, accessibility and easy living across floors.",
    image: "villaWhite",
    introHeading: "Planning a lift into your home",
    intro: [
      "Multi-floor homes are common in Bangalore, and more families now want a lift — for elderly parents, for accessibility, or simply for convenience across three or four floors.",
      "A lift is far easier and cheaper to plan into a new house than to add later. ACIPL designs and builds homes with the shaft, pit, structure and power for a lift planned from the first drawing.",
    ],
    context: {
      heading: "Plan now, install now or later",
      body: [
        "Even if you are not ready to install a lift, we can build the shaft and pit now. The space can be used for storage until the lift goes in.",
        "The lift's position affects the whole plan — staircase, entrances and room layouts — so we decide it at the start.",
      ],
    },
    details: [
      {
        heading: "What a lift-ready house includes",
        bullets: [
          "Lift shaft sized for the type of home lift you are likely to choose.",
          "Pit at the bottom and headroom at the top, as the lift type requires.",
          "Structural design that carries the lift's loads.",
          "Power supply and a dedicated circuit.",
          "Landings and doors on each floor planned into the layout.",
        ],
        note: "Shaft, pit and headroom sizes depend on the lift type and manufacturer. We coordinate with your chosen supplier.",
      },
    ],
    trustHeading: "Why families build lift-ready homes with ACIPL",
    faqHeading: "Houses with a home lift: common questions",
    faqs: [
      {
        question: "Can we add a lift to our house later?",
        answer: "Planning it now makes it simple. Adding a lift to an existing house is possible but usually needs more structural work.",
      },
      {
        question: "Do you supply the lift?",
        answer: "We coordinate with the lift supplier you choose and build the shaft, pit and power to their requirements.",
      },
      {
        question: "Where should the lift go?",
        answer: "Usually near the staircase and entrance, so it serves every floor without wasting space. We plan it in the layout.",
      },
    ],
    related: [
      { label: "G+3 House Construction in Bangalore", href: "/g-plus-3-house-construction-in-bangalore" },
      { label: "Duplex House Construction in Bangalore", href: "/duplex-house-construction-in-bangalore" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "House Plan and Elevation Design in Bangalore", href: "/house-plan-and-elevation-design-in-bangalore" },
    ],
    enquiryCard: "Want a lift in your home?",
    enquiry: "Hi, I'd like to build a house with a home lift with ACIPL.",
    closing: "Ready to build a lift-ready home?",
  },
  {
    slug: "farmhouse-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "farmhouse construction in bangalore",
    breadcrumbLabel: "Farmhouse Construction in Bangalore",
    title: "Farmhouse Construction near Bangalore | Design & Build | ACIPL",
    description:
      "Farmhouse and weekend-home construction around Bangalore — land checks, design, water, solar, landscaping and construction by one design-and-build team.",
    h1: "Farmhouse Construction in Bangalore",
    badge: BLR,
    subtitle: "Weekend homes and farmhouses around Bangalore — designed for the land, built to last.",
    image: "villaGarden",
    introHeading: "A home away from the city",
    intro: [
      "Farmhouses and weekend homes around Bangalore — towards Nelamangala, Doddaballapur, Devanahalli, Kanakapura, Hoskote and beyond — let families enjoy open land, gardens and quiet within driving distance of the city.",
      "ACIPL designs and builds farmhouses with the land, climate and services in mind: verandas and shade, cross-ventilation, water and solar, and landscaping that suits the site.",
    ],
    context: {
      heading: "Check the land first",
      body: [
        "Rules on building on agricultural or rural land vary, and conversion or approvals may be needed. We review the documents and land use before any design work.",
        "Remote sites need water, power and drainage planned from scratch — borewells, storage, solar, septic systems and access roads.",
      ],
    },
    details: [
      {
        heading: "What a farmhouse project often includes",
        table: {
          columns: ["Element", "Considerations"],
          rows: [
            ["House", "Verandas, shade, cross-ventilation, durable low-maintenance finishes"],
            ["Water", "Borewell, storage tanks, rainwater harvesting"],
            ["Power", "Grid connection where available, solar and backup"],
            ["Outdoors", "Landscaping, paths, compound wall, gate, outdoor lighting"],
            ["Extras", "Pool, outdoor kitchen, caretaker's quarters, store room"],
          ],
        },
      },
    ],
    trustHeading: "Why families build their farmhouse with ACIPL",
    faqHeading: "Farmhouse construction: common questions",
    faqs: [
      {
        question: "Can we build a farmhouse on agricultural land?",
        answer: "It depends on the land's status and local rules. We review your documents and explain what is needed before design.",
      },
      {
        question: "Can you plan solar and rainwater harvesting?",
        answer: "Yes. Both are common in farmhouses and are planned into the design.",
      },
      {
        question: "Can you supervise a site far from the city?",
        answer: "Yes. A site engineer visits at every key stage and sends regular photo updates.",
      },
    ],
    related: [
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "House Construction in Nelamangala", href: "/house-construction-in-nelamangala" },
      { label: "House Construction in Doddaballapur", href: "/house-construction-in-doddaballapur" },
      { label: "House Construction in Attibele", href: "/house-construction-in-attibele" },
    ],
    enquiryCard: "Planning a farmhouse?",
    enquiry: "Hi, I'd like to discuss building a farmhouse near Bangalore with ACIPL.",
    closing: "Ready to build your farmhouse?",
  },
  {
    slug: "house-construction-for-nris-in-bangalore",
    service: "construction",
    primaryKeyword: "house construction for nri in bangalore",
    breadcrumbLabel: "House Construction for NRIs in Bangalore",
    title: "House Construction for NRIs in Bangalore | Managed Remotely | ACIPL",
    description:
      "House construction in Bangalore for NRIs — documents checked, design approved online, stage-linked payments and regular photo and video updates.",
    h1: "House Construction for NRIs in Bangalore",
    badge: BLR,
    subtitle: "Build your Bangalore home from abroad — clear contracts, stage-linked payments and regular updates.",
    image: "houseTimber",
    introHeading: "Building in Bangalore while living abroad",
    intro: [
      "Many NRIs own a plot in Bangalore and want to build — for parents, for their own return, or as an investment. The worry is always the same: how do you know the house is being built properly when you are thousands of kilometres away?",
      "ACIPL builds homes for NRI clients with everything agreed in writing, payments linked to completed stages, and regular photo and video updates from a named site engineer.",
    ],
    context: {
      heading: "Trust through transparency",
      body: [
        "The contract names the materials, brands and grades, the payment stages and what is excluded. You pay only when each stage is complete, and you see it in photos and videos first.",
        "Family members in Bangalore can visit the site at any time, and you can join site reviews by video.",
      ],
    },
    details: [
      {
        heading: "How we work with NRI clients",
        table: {
          columns: ["Stage", "What you receive"],
          rows: [
            ["Plot and documents", "Review of title, khata and tax documents, and a site survey report"],
            ["Design", "Plans and 3D elevation reviewed on video calls"],
            ["Approvals", "Plan sanction handled; you sign what is needed"],
            ["Construction", "Photo and video updates at each stage; payments tied to completed stages"],
            ["Handover", "Video walkthrough, snag fixes, documents and keys"],
          ],
        },
      },
    ],
    trustHeading: "Why NRI plot owners build with ACIPL",
    faqHeading: "House construction for NRIs: common questions",
    faqs: [
      {
        question: "Can documents be signed from abroad?",
        answer: "Many can be signed digitally or through a power of attorney. We tell you exactly what is needed at each stage.",
      },
      {
        question: "How do we track progress?",
        answer: "A named site engineer sends regular photo and video updates, and payments are linked to completed stages.",
      },
      {
        question: "Can you also do the interiors?",
        answer: "Yes. Construction and interiors can be planned and delivered together, so the home is ready to move into.",
      },
    ],
    related: [
      { label: "Interior Design for NRIs in Bangalore", href: "/interior-design-for-nris-in-bangalore" },
      { label: "Turnkey House Construction in Bangalore", href: "/turnkey-house-construction-in-bangalore" },
      { label: "House Construction Process in Bangalore", href: "/house-construction-process-in-bangalore" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
    ],
    enquiryCard: "Building from abroad?",
    enquiry: "Hi, I live abroad and would like ACIPL to build a house on my Bangalore plot.",
    closing: "Ready to build your Bangalore home?",
  },
  {
    slug: "house-construction-process-in-bangalore",
    service: "construction",
    primaryKeyword: "house construction process in bangalore",
    breadcrumbLabel: "House Construction Process in Bangalore",
    title: "House Construction Process in Bangalore: Step by Step | ACIPL",
    description:
      "The house construction process in Bangalore explained step by step — documents, soil test, design, plan sanction, foundation, structure, finishing and handover.",
    h1: "House Construction Process in Bangalore, Step by Step",
    badge: BLR,
    subtitle: "What happens at each stage of building a house — and what to check before you pay for it.",
    image: "excavation",
    introHeading: "Building a house, stage by stage",
    intro: [
      "Building a house is the biggest project most families ever take on. Knowing the stages — and what should be checked at each — makes it much easier to plan, budget and spot problems early.",
      "This guide walks through how a house is built in Bangalore, from checking documents to handover. It is how ACIPL runs its projects, but the checks apply whoever builds your home.",
    ],
    context: {
      heading: "Why the order matters",
      body: [
        "Each stage depends on the one before it. Skipping the soil test affects the foundation; rushing the structure affects everything above it; waterproofing done badly shows up in the first monsoon.",
        "Linking payments to completed and checked stages protects you and keeps the project on track.",
      ],
    },
    details: [
      {
        heading: "The stages of building a house",
        table: {
          columns: ["Stage", "What happens", "What to check"],
          rows: [
            ["1. Documents and survey", "Title, khata, tax receipts; boundaries and levels", "Documents in order; plot matches the deed"],
            ["2. Soil test", "Bearing capacity and depth of good soil", "Foundation design uses the results"],
            ["3. Design", "Plans, elevation, structural and MEP drawings", "Layout, Vastu and specification agreed in writing"],
            ["4. Plan sanction", "Application to the approving authority", "Approved plan matches what will be built"],
            ["5. Foundation", "Excavation, footings, plinth beam", "Depth, reinforcement and concrete as per drawings"],
            ["6. Structure", "Columns, beams, slabs, staircase", "Reinforcement checked before every pour; curing done"],
            ["7. Masonry and plastering", "Walls, lintels, plaster", "Line, level and right block or brick"],
            ["8. Services", "Electrical conduits, plumbing, drainage", "Pressure tests before walls and floors are closed"],
            ["9. Waterproofing", "Terrace, bathrooms, sumps", "Water test before tiling"],
            ["10. Finishing", "Flooring, doors, windows, painting, fittings", "Brands and finishes as specified"],
            ["11. Handover", "Cleaning, snag walk, connections", "Snags fixed; drawings and documents handed over"],
          ],
        },
      },
    ],
    trustHeading: "How ACIPL runs every stage",
    faqHeading: "The house construction process: common questions",
    faqs: [
      {
        question: "Why is a soil test needed?",
        answer: "It tells the structural engineer how much load the ground can carry and at what depth, which decides the foundation design.",
      },
      {
        question: "When should we plan the interiors?",
        answer: "Before the electrical and plumbing work, so points are placed for the kitchen, wardrobes and lighting you want.",
      },
      {
        question: "How should payments be structured?",
        answer: "Linked to completed and checked stages — for example foundation, each slab, plastering and finishing — rather than to dates.",
      },
    ],
    related: [
      { label: "Best Construction Company in Bangalore: How to Choose", href: "/best-construction-company-in-bangalore" },
      { label: "Building Plan Approval in Bangalore", href: "/building-plan-approval-in-bangalore" },
      { label: "Turnkey House Construction in Bangalore", href: "/turnkey-house-construction-in-bangalore" },
      { label: "House Construction for NRIs in Bangalore", href: "/house-construction-for-nris-in-bangalore" },
      { label: "Independent House Construction in Bangalore", href: "/independent-house-construction-in-bangalore" },
    ],
    enquiryCard: "Planning to build?",
    enquiry: "Hi, I'm planning to build a house in Bangalore and would like to talk to ACIPL.",
    closing: "Ready to start your build?",
  },
  {
    slug: "independent-house-construction-in-bangalore",
    service: "construction",
    primaryKeyword: "independent house construction in bangalore",
    breadcrumbLabel: "Independent House Construction in Bangalore",
    title: "Independent House Construction in Bangalore | Design & Build | ACIPL",
    description:
      "Independent house construction in Bangalore — plans, 3D elevation, approvals, structure and finishing for family homes, with materials named in the contract.",
    h1: "Independent House Construction in Bangalore",
    badge: BLR,
    subtitle: "Your own house on your own plot — designed around your family and built to a written specification.",
    image: "villaWhite",
    introHeading: "Building your own home",
    intro: [
      "An independent house gives you what an apartment cannot: your own plot, your own layout, room to grow upwards, and freedom to design every detail. It also means many decisions — and choosing a builder you can trust with them.",
      "ACIPL designs and builds independent houses across Bangalore from our office in Yelahanka New Town. Plans, elevation, approvals, construction and finishing are handled by one team, with materials and payment stages written into the contract.",
    ],
    context: {
      heading: "Designed for the family you have and will have",
      body: [
        "We plan for today and for change — a ground-floor room for parents later, a floor that can become a rental, a structure that can take another floor.",
        "The house is designed around the plot's orientation and the rules that apply, so it is bright, airy and approved as drawn.",
      ],
    },
    details: [
      {
        heading: "What we handle",
        table: {
          columns: ["Area", "Scope"],
          rows: [
            ["Design", "Floor plans, 3D elevation, structural and MEP drawings"],
            ["Approvals", "Plan sanction paperwork with the relevant authority"],
            ["Construction", "Foundation, structure, masonry, services, waterproofing"],
            ["Finishing", "Flooring, doors, windows, painting, fittings"],
            ["Optional", "Modular kitchen, wardrobes, ceilings, lighting, landscaping"],
          ],
        },
      },
    ],
    trustHeading: "Why families build their independent house with ACIPL",
    faqHeading: "Independent house construction: common questions",
    faqs: [
      {
        question: "What does it cost to build an independent house in Bangalore?",
        answer: "It depends on size, floors, structure and specification. We give a detailed estimate with brands named after visiting the plot.",
      },
      {
        question: "Can we see the house in 3D before building?",
        answer: "Yes. We share the 3D elevation and key spaces and revise them with you.",
      },
      {
        question: "Do you also do the interiors?",
        answer: "Yes. Construction and interiors can be planned together for a ready-to-live home.",
      },
    ],
    related: [
      { label: "Building Contractors in Bangalore", href: "/building-contractors-in-bangalore" },
      { label: "30x40 House Construction in Bangalore", href: "/30x40-house-construction-in-bangalore" },
      { label: "House Construction Process in Bangalore", href: "/house-construction-process-in-bangalore" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
    ],
    enquiryCard: "Building your own house?",
    enquiry: "Hi, I'd like to build an independent house in Bangalore with ACIPL.",
    closing: "Ready to build your home?",
  },
  // -------------------------------------------------------------------------
  // Renovation by home type
  // -------------------------------------------------------------------------
  {
    slug: "apartment-renovation-in-bangalore",
    service: "renovation",
    primaryKeyword: "apartment renovation in bangalore",
    breadcrumbLabel: "Apartment Renovation in Bangalore",
    title: "Apartment Renovation in Bangalore | Flats, Kitchens, Bathrooms | ACIPL",
    description:
      "Apartment and flat renovation in Bangalore — bathrooms, kitchens, flooring, wardrobes, ceilings and painting, planned around association rules.",
    h1: "Apartment Renovation in Bangalore",
    badge: BLR,
    subtitle: "Renovating flats room by room — within association rules and with one itemised quote.",
    image: "washroom",
    introHeading: "Renovating a flat, the right way",
    intro: [
      "Apartment renovation works inside a fixed shell: you cannot move the structure or the common pipes, and every job must follow the association's rules on hours, lifts and debris. Within those limits, a flat can be transformed.",
      "ACIPL renovates apartments across Bangalore — bathrooms, kitchens, flooring, wardrobes, ceilings and painting — with a written scope, an itemised quote and a supervisor who manages the work and the association.",
    ],
    context: {
      heading: "What you can and cannot change",
      body: [
        "Internal non-structural walls, finishes, kitchens and bathroom fittings can usually change. Structural walls, columns, beams and common pipes generally cannot.",
        "We check the flat's structure and the association's rules before design, so the plan is realistic.",
      ],
    },
    details: [
      {
        heading: "Common apartment renovation jobs",
        table: {
          columns: ["Area", "Typical work"],
          rows: [
            ["Bathrooms", "Waterproofing, retiling, fittings, glass partitions, ventilation"],
            ["Kitchen", "Modular kitchen, countertop, dado tiles, plumbing and electrical updates"],
            ["Flooring", "Vitrified, wooden or laminate flooring, over or replacing existing"],
            ["Storage", "Wardrobes, lofts, shoe and utility storage"],
            ["Ceilings and lighting", "False ceilings, cove lighting, new light points"],
            ["Painting", "Repairs, putty and full repaint"],
          ],
        },
      },
    ],
    trustHeading: "Why flat owners renovate with ACIPL",
    faqHeading: "Apartment renovation: common questions",
    faqs: [
      {
        question: "Do we need permission from the association?",
        answer: "Usually, yes. We prepare the scope, schedule and contact details associations ask for and follow their rules.",
      },
      {
        question: "Can we remove a wall in our flat?",
        answer: "Only if it is not structural. We check before suggesting any change.",
      },
      {
        question: "Can we live in the flat during renovation?",
        answer: "Often, with phasing. We keep a bathroom and kitchen usable and control dust.",
      },
    ],
    related: [
      { label: "Bathroom Renovation in Bangalore", href: "/bathroom-renovation-in-bangalore" },
      { label: "Kitchen Renovation in Bangalore", href: "/kitchen-renovation-in-bangalore" },
      { label: "Rental Property Renovation in Bangalore", href: "/rental-property-renovation-in-bangalore" },
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
    ],
    enquiryCard: "Renovating your flat?",
    enquiry: "Hi, I'd like a quote for renovating my apartment from ACIPL.",
    closing: "Ready to renovate your flat?",
  },
  {
    slug: "independent-house-renovation-in-bangalore",
    service: "renovation",
    primaryKeyword: "independent house renovation in bangalore",
    breadcrumbLabel: "Independent House Renovation in Bangalore",
    title: "Independent House Renovation in Bangalore | Old House Makeover | ACIPL",
    description:
      "Renovate an independent house in Bangalore — structure check, waterproofing, rewiring, plumbing, kitchens, bathrooms, flooring and elevation updates.",
    h1: "Independent House Renovation in Bangalore",
    badge: BLR,
    subtitle: "Giving older houses years more life — from the terrace and wiring to kitchens and the front elevation.",
    image: "stoneWall",
    introHeading: "Renovate instead of rebuild",
    intro: [
      "Many older independent houses in Bangalore are structurally sound but tired: leaking terraces, old wiring, galvanised pipes, dated bathrooms and kitchens, and an elevation that shows its age. A thorough renovation can give them decades more life at a fraction of the cost of rebuilding.",
      "ACIPL renovates independent houses across Bangalore, starting with an honest assessment of the structure and services and ending with a home that feels new.",
    ],
    context: {
      heading: "Start with an honest assessment",
      body: [
        "We inspect the structure, terrace, wiring, plumbing and drainage, then tell you whether renovation is sensible and what it should include.",
        "If rebuilding would make more sense, we say so — and can do that too.",
      ],
    },
    details: [
      {
        heading: "A typical full renovation, in order",
        table: {
          columns: ["Order", "Work"],
          rows: [
            ["1", "Structural repairs and terrace waterproofing"],
            ["2", "Rewiring and replumbing"],
            ["3", "Bathrooms and kitchen"],
            ["4", "Flooring, doors and windows"],
            ["5", "Interiors, ceilings and lighting"],
            ["6", "Painting inside and out, elevation updates"],
          ],
        },
      },
    ],
    trustHeading: "Why owners renovate their houses with ACIPL",
    faqHeading: "Independent house renovation: common questions",
    faqs: [
      {
        question: "Can you update the front elevation?",
        answer: "Yes. New cladding, grills, windows, paint and lighting can transform how the house looks from the street.",
      },
      {
        question: "Can we stay at home during renovation?",
        answer: "Often, by phasing the work room by room. For a full renovation, some families move out for part of it.",
      },
      {
        question: "Can you add a floor at the same time?",
        answer: "If the structure can take it, yes. We check before advising.",
      },
    ],
    related: [
      { label: "Old House Demolition and Rebuild in Bangalore", href: "/old-house-demolition-and-rebuild-in-bangalore" },
      { label: "Additional Floor Construction in Bangalore", href: "/additional-floor-construction-in-bangalore" },
      { label: "Home Renovation in Bangalore", href: "/home-renovation-in-bangalore" },
      { label: "Independent House Interior Design in Bangalore", href: "/independent-house-interior-design-in-bangalore" },
    ],
    enquiryCard: "Renovating your house?",
    enquiry: "Hi, I'd like ACIPL to assess and renovate my house.",
    closing: "Ready to renew your home?",
  },
  {
    slug: "villa-renovation-in-bangalore",
    service: "renovation",
    primaryKeyword: "villa renovation in bangalore",
    breadcrumbLabel: "Villa Renovation in Bangalore",
    title: "Villa Renovation in Bangalore | Interiors & Exteriors | ACIPL",
    description:
      "Villa renovation in Bangalore — interiors, kitchens, bathrooms, terraces, exteriors and landscaping, in gated communities and on independent plots.",
    h1: "Villa Renovation in Bangalore",
    badge: BLR,
    subtitle: "Renovating villas inside and out — designed first, then delivered by one team.",
    image: "villaPool",
    introHeading: "Renovating a villa",
    intro: [
      "Many of Bangalore's villa communities are now ten to twenty years old. Owners are updating kitchens and bathrooms, re-planning rooms for how the family lives now, and repairing terraces, exteriors and gardens.",
      "ACIPL renovates villas across Bangalore, inside and out, with a complete design shown in 3D and one team for civil work, interiors and exteriors.",
    ],
    context: {
      heading: "Inside, outside and the community",
      body: [
        "Villa renovation usually covers more than the interiors: terrace waterproofing, exterior paint, windows, landscaping and outdoor lighting all matter.",
        "In gated communities, we follow the association's rules on exterior changes, working hours and site upkeep.",
      ],
    },
    details: [
      {
        heading: "What villa renovations often include",
        bullets: [
          "Kitchen and bathroom remodelling.",
          "Re-planning rooms — a home office, a guest suite, a walk-in wardrobe.",
          "Flooring, ceilings and lighting updates.",
          "Terrace and balcony waterproofing.",
          "Exterior repainting, window and railing updates.",
          "Landscaping, pool repairs and outdoor lighting.",
        ],
      },
    ],
    trustHeading: "Why villa owners renovate with ACIPL",
    faqHeading: "Villa renovation: common questions",
    faqs: [
      {
        question: "Can you change the exterior of a villa in a gated community?",
        answer: "Within the community's guidelines, yes. We prepare drawings for association approval where needed.",
      },
      {
        question: "Do you repair pools?",
        answer: "We can repair pool finishes, waterproofing and surrounds as part of a villa renovation.",
      },
      {
        question: "Can we see the design before work starts?",
        answer: "Yes. We share layouts and 3D views and revise them with you.",
      },
    ],
    related: [
      { label: "Villa Interior Design in Bangalore", href: "/villa-interior-design-in-bangalore" },
      { label: "Villa Construction in Bangalore", href: "/villa-construction-in-bangalore" },
      { label: "Home Renovation in Varthur", href: "/home-renovation-in-varthur" },
      { label: "Luxury Interior Designers in Bangalore", href: "/luxury-interior-designers-in-bangalore" },
    ],
    enquiryCard: "Renovating your villa?",
    enquiry: "Hi, I'd like ACIPL to renovate my villa.",
    closing: "Ready to renew your villa?",
  },
  {
    slug: "rental-property-renovation-in-bangalore",
    service: "renovation",
    primaryKeyword: "rental property renovation in bangalore",
    breadcrumbLabel: "Rental Property Renovation in Bangalore",
    title: "Rental Property Renovation in Bangalore | Re-Let Faster | ACIPL",
    description:
      "Renovate rental flats and houses in Bangalore between tenancies — durable finishes, modular kitchens, bathroom upgrades and a dated schedule.",
    h1: "Rental Property Renovation in Bangalore",
    badge: BLR,
    subtitle: "Renovations that help rental homes let faster and last longer between refreshes.",
    image: "bathroom",
    introHeading: "Renovating to rent",
    intro: [
      "Bangalore has a huge rental market, and tenants compare homes closely. A dated bathroom or worn kitchen can mean a longer vacancy or a lower rent. A well-planned renovation helps a property let faster and need less maintenance.",
      "ACIPL renovates rental flats and houses across Bangalore with durable finishes, a dated schedule between tenancies, and updates for owners who live elsewhere.",
    ],
    context: {
      heading: "Durable, not delicate",
      body: [
        "Rental homes need finishes that look good and stand up to frequent turnover: vitrified tiles, quality laminates, sturdy hardware and washable paint.",
        "Standardising designs across units makes future repairs simple and cheaper.",
      ],
    },
    details: [
      {
        heading: "Upgrades that matter most to tenants",
        table: {
          columns: ["Upgrade", "Why it matters"],
          rows: [
            ["Bathrooms", "Leak-free, clean, modern fittings — tenants notice first"],
            ["Kitchen", "Closed storage and a clean countertop"],
            ["Wardrobes", "Built-in storage in every bedroom"],
            ["Lighting and fans", "Bright, modern fixtures throughout"],
            ["Paint", "Fresh, washable paint in neutral colours"],
          ],
        },
      },
    ],
    trustHeading: "Why landlords renovate with ACIPL",
    faqHeading: "Rental property renovation: common questions",
    faqs: [
      {
        question: "Can you renovate between tenants?",
        answer: "Yes. We agree the scope and give a dated schedule so you can plan the next tenancy.",
      },
      {
        question: "Can you manage the work if we live abroad?",
        answer: "Yes. Approvals happen online and you receive regular photo updates.",
      },
      {
        question: "Can you renovate several units in one building?",
        answer: "Yes, together or one at a time as they fall vacant.",
      },
    ],
    related: [
      { label: "Apartment Renovation in Bangalore", href: "/apartment-renovation-in-bangalore" },
      { label: "Rental Building Construction in Bangalore", href: "/rental-building-construction-in-bangalore" },
      { label: "Budget Interior Designers in Bangalore", href: "/budget-interior-designers-in-bangalore" },
      { label: "Interior Design for NRIs in Bangalore", href: "/interior-design-for-nris-in-bangalore" },
    ],
    enquiryCard: "Renovating a rental?",
    enquiry: "Hi, I'd like to renovate my rental property with ACIPL.",
    closing: "Ready to refresh your rental?",
  },
  // -------------------------------------------------------------------------
  // Offices
  // -------------------------------------------------------------------------
  {
    slug: "startup-office-interior-design-in-bangalore",
    service: "office",
    primaryKeyword: "startup office interior design in bangalore",
    breadcrumbLabel: "Startup Office Interior Design in Bangalore",
    title: "Startup Office Interior Design in Bangalore | Fit-Outs | ACIPL",
    description:
      "Startup office interiors in Bangalore — flexible layouts, brand-led design, meeting rooms and phone booths, with an itemised BOQ for your finance team.",
    h1: "Startup Office Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Offices that reflect your culture, flex as you grow, and stay within the budget you set.",
    image: "officeLounge",
    introHeading: "An office that grows with your startup",
    intro: [
      "Bangalore is India's startup capital, and a startup's office has to do a lot: attract talent, impress investors and clients, support how the team really works, and adapt as headcount changes — usually on a tight budget.",
      "ACIPL designs and fits out startup offices across Bangalore, with flexible layouts, brand-led design and an itemised BOQ so every rupee is visible.",
    ],
    context: {
      heading: "Flexible by design",
      body: [
        "We plan benching workstations that add seats easily, meeting rooms that can change use, and spare power and data capacity for growth.",
        "Culture shows in the details — a breakout space people actually use, a wall for team photos and wins, colours and materials that match your brand.",
      ],
    },
    details: [
      {
        heading: "What startup offices usually need",
        table: {
          columns: ["Space", "Purpose"],
          rows: [
            ["Open workstations", "Flexible benching that scales with headcount"],
            ["Meeting rooms", "Video-call ready, with good acoustics"],
            ["Phone booths", "Private calls without booking a room"],
            ["Breakout and pantry", "Where the team eats, relaxes and talks"],
            ["Brand wall and reception", "First impressions for candidates and clients"],
          ],
        },
      },
    ],
    trustHeading: "Why startups choose ACIPL for their office",
    faqHeading: "Startup office interiors: common questions",
    faqs: [
      {
        question: "Can we start small and expand later?",
        answer: "Yes. We design for expansion with flexible furniture and spare capacity, so adding seats does not mean starting again.",
      },
      {
        question: "Can you work to a fixed budget?",
        answer: "Yes. We prioritise with you and show the cost of each element in the BOQ so you can decide what to include now.",
      },
      {
        question: "Can you fit out quickly?",
        answer: "We agree a dated schedule at the start based on scope, approvals and furniture lead times.",
      },
    ],
    related: [
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
      { label: "Office Interior Designers in Koramangala", href: "/office-interior-designers-in-koramangala" },
      { label: "Office Interior Designers in HSR Layout", href: "/office-interior-designers-in-hsr-layout" },
      { label: "Office Fit-Out Contractors in Bangalore", href: "/office-fit-out-contractors-in-bangalore" },
    ],
    enquiryCard: "Setting up your startup's office?",
    enquiry: "Hi, I'd like a quote for our startup office interiors from ACIPL.",
    closing: "Ready for your new office?",
  },
  {
    slug: "small-office-interior-design-in-bangalore",
    service: "office",
    primaryKeyword: "small office interior design in bangalore",
    breadcrumbLabel: "Small Office Interior Design in Bangalore",
    title: "Small Office Interior Design in Bangalore | Compact Offices | ACIPL",
    description:
      "Small office interior design in Bangalore — compact layouts, cabins, meeting rooms, storage and lighting that make a small space work hard.",
    h1: "Small Office Interior Design in Bangalore",
    badge: BLR,
    subtitle: "Compact offices that feel open, professional and well organised.",
    image: "officeCabin",
    introHeading: "Making a small office work hard",
    intro: [
      "Many Bangalore businesses — consultancies, professional practices, agencies and small companies — work from offices of a few hundred to a couple of thousand square feet. In a small office, every decision about layout and storage matters more.",
      "ACIPL designs and fits out small offices across Bangalore with the same care as large ones: a space plan, 3D views, an itemised BOQ and one team to deliver it.",
    ],
    context: {
      heading: "Tricks that make a small office feel bigger",
      body: [
        "Glass partitions keep cabins private while letting light through. Light colours, good lighting and storage built into walls keep the space open.",
        "Furniture sized for the space — not oversized executive pieces — leaves room to move and to grow.",
      ],
    },
    details: [
      {
        heading: "Typical small office layout",
        bullets: [
          "Compact reception or waiting area.",
          "One or two cabins with glass partitions.",
          "A meeting room that doubles as a focus room.",
          "Open workstations along the windows.",
          "Pantry corner and built-in storage.",
        ],
      },
    ],
    trustHeading: "Why small businesses choose ACIPL",
    faqHeading: "Small office interior design: common questions",
    faqs: [
      {
        question: "Do you take on very small offices?",
        answer: "Yes. We design and fit out small offices with the same process as large ones.",
      },
      {
        question: "Can a meeting room fit in a small office?",
        answer: "Usually, yes — often a compact room that also serves as a focus room or a manager's cabin.",
      },
      {
        question: "Can you include furniture?",
        answer: "Yes. Furniture sized for the space is included in the BOQ.",
      },
    ],
    related: [
      { label: "Startup Office Interior Design in Bangalore", href: "/startup-office-interior-design-in-bangalore" },
      { label: "Office Renovation in Bangalore", href: "/office-renovation-in-bangalore" },
      { label: "Office Interior Designers in JP Nagar", href: "/office-interior-designers-in-jp-nagar" },
      { label: "Home Office Interior Design in Bangalore", href: "/home-office-interior-design-in-bangalore" },
    ],
    enquiryCard: "Setting up a small office?",
    enquiry: "Hi, I'd like a quote for a small office interior from ACIPL.",
    closing: "Ready for your new office?",
  },
  {
    slug: "office-renovation-in-bangalore",
    service: "office",
    primaryKeyword: "office renovation in bangalore",
    breadcrumbLabel: "Office Renovation in Bangalore",
    title: "Office Renovation in Bangalore | Refurbish Without Downtime | ACIPL",
    description:
      "Office renovation and refurbishment in Bangalore — new layouts, meeting rooms, finishes and furniture, phased so your team keeps working.",
    h1: "Office Renovation in Bangalore",
    badge: BLR,
    subtitle: "Refurbishing offices in phases, so the business keeps running while the space improves.",
    image: "officeWorkspace",
    introHeading: "Refreshing an office you already have",
    intro: [
      "Many offices were fitted out for a different way of working — rows of fixed desks, few meeting rooms, no space for video calls. Renovating can make an existing office fit how your team works today, often without moving.",
      "ACIPL renovates and refurbishes offices across Bangalore, reusing what is sound, changing what matters, and phasing the work so your team keeps working.",
    ],
    context: {
      heading: "Reuse what you can",
      body: [
        "Ceilings, services, some partitions and furniture can often stay. We survey the office and price only what needs to change.",
        "Work is phased zone by zone, with noisy jobs scheduled for evenings and weekends.",
      ],
    },
    details: [
      {
        heading: "Common office renovation work",
        table: {
          columns: ["Change", "Why"],
          rows: [
            ["More meeting rooms and phone booths", "Hybrid working needs more places to talk"],
            ["New finishes and lighting", "A fresher, brighter workplace"],
            ["Reconfigured workstations", "Fit the current team and leave room to grow"],
            ["Upgraded pantry and breakout", "Spaces people want to use"],
            ["Brand refresh", "Reception and graphics that match the brand today"],
          ],
        },
      },
    ],
    trustHeading: "Why companies renovate their office with ACIPL",
    faqHeading: "Office renovation: common questions",
    faqs: [
      {
        question: "Can we keep working during the renovation?",
        answer: "Yes. We phase the work and schedule noisy jobs out of hours.",
      },
      {
        question: "Can you reuse our existing furniture?",
        answer: "Where it is in good condition, yes. We include only what needs replacing in the BOQ.",
      },
      {
        question: "Do you handle building approvals?",
        answer: "Yes. We prepare drawings and follow the building's fit-out rules.",
      },
    ],
    related: [
      { label: "Office Fit-Out Contractors in Bangalore", href: "/office-fit-out-contractors-in-bangalore" },
      { label: "Office Interior Designers in Brookefield", href: "/office-interior-designers-in-brookefield" },
      { label: "Small Office Interior Design in Bangalore", href: "/small-office-interior-design-in-bangalore" },
      { label: "Office Interior Designers in Outer Ring Road", href: "/office-interior-designers-in-outer-ring-road" },
    ],
    enquiryCard: "Refreshing your office?",
    enquiry: "Hi, I'd like a quote for renovating our office from ACIPL.",
    closing: "Ready to refresh your office?",
  },
]
