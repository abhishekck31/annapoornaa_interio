export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  title: string;
  emoji: string;
  items: string[];
}

export interface PMCSection {
  title: string;
  emoji: string;
  items: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  description: string;
  shortDescription: string;
  features: string[];
  image: string;
  designSections?: ServiceDetail[];
  pmcSections?: PMCSection[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  pricingGuide: string;
  timeline: string;
  proofPoints: string[];
  serviceAreas: string[];
  faqs: ServiceFaq[];
}

const coreLocations = [
  "Yelahanka",
  "Whitefield",
  "HSR Layout",
  "Koramangala",
  "Indiranagar",
  "JP Nagar",
  "Hebbal",
  "Jayanagar",
];

export const services: Service[] = [
  {
    id: "home-interior",
    slug: "home-interiors",
    title: "Home Interiors",
    iconName: "home",
    shortDescription:
      "Custom home interiors, modular kitchens, wardrobes, and turnkey execution for apartments, villas, and independent homes in Bangalore.",
    description:
      "Annapoornaa Interio designs and delivers complete home interior projects across Bangalore. We handle modular kitchens, wardrobes, false ceilings, living rooms, bedrooms, utility areas, lighting coordination, and full-site execution with a single accountable team.",
    features: [
      "Concept development and space planning",
      "3D design support and material selection",
      "Modular kitchens, wardrobes, and storage systems",
      "False ceiling, lighting, and electrical coordination",
      "Premium finishes, fabrication, and installation",
      "Site supervision with milestone-based updates",
      "Post-handover support for adjustments and fixes",
    ],
    image: "/updated-homein.jpg",
    designSections: [
      {
        title: "What We Cover",
        emoji: "Home",
        items: [
          "Full-home interior design",
          "Modular kitchens",
          "Wardrobes and loft storage",
          "TV units and living room features",
          "Bedroom interiors and study units",
          "Pooja units and niche carpentry",
          "False ceilings and lighting plans",
          "Soft furnishings and finishing inputs",
        ],
      },
    ],
    seoTitle: "Home Interior Designers in Bangalore | Annapoornaa Interio",
    seoDescription:
      "Looking for home interior designers in Bangalore? We design and execute modular kitchens, wardrobes, living rooms, and full-home interiors across key Bangalore neighborhoods.",
    keywords: [
      "home interior designers Bangalore",
      "modular kitchen Bangalore",
      "wardrobe design Bangalore",
      "apartment interiors Bangalore",
      "villa interiors Bangalore",
    ],
    pricingGuide:
      "Most home interior projects start with a scope review, layout discussion, material shortlist, and room-by-room budget estimate.",
    timeline:
      "Typical apartment interior timelines range from 6 to 12 weeks depending on scope, material selection, and site readiness.",
    proofPoints: [
      "Designed for Bangalore apartments, villas, and independent homes",
      "Single-vendor execution reduces coordination gaps",
      "Detailed room-wise planning before site execution",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Do you handle full-home interiors or only modular work?",
        answer:
          "We handle both. We can take up a full-home interior scope or specific areas like kitchen, wardrobes, bedrooms, or living spaces.",
      },
      {
        question: "Can you help with budgeting before finalizing materials?",
        answer:
          "Yes. We usually start with your floor plan, priorities, and preferred finish level to create a realistic room-wise estimate.",
      },
      {
        question: "Which Bangalore locations do you cover for home interiors?",
        answer:
          "We work across Yelahanka, Whitefield, HSR Layout, Koramangala, Indiranagar, JP Nagar, Hebbal, Jayanagar, and nearby areas.",
      },
    ],
  },
  {
    id: "office-interior",
    slug: "office-corporate-interiors",
    title: "Office and Corporate Interiors",
    iconName: "briefcase",
    shortDescription:
      "Workspace planning, fit-outs, workstations, meeting rooms, and office execution for startups and established businesses in Bangalore.",
    description:
      "We create office interiors that support productivity, branding, circulation, and practical day-to-day operations. Our office design and fit-out services include planning, partitions, workstations, conference spaces, flooring, ceilings, lighting, and coordinated execution.",
    features: [
      "Office planning aligned to team size and workflow",
      "Reception, cabins, meeting rooms, and open work areas",
      "Workstations, storage, and ergonomic furniture support",
      "Electrical, lighting, HVAC, and signage coordination",
      "Execution support for commercial schedules and handover",
      "Clear milestone planning for fit-out completion",
      "Suitable for startups, SMEs, and enterprise offices",
    ],
    image: "/Updated-officein-services.jpg",
    designSections: [
      {
        title: "Commercial Interior Scope",
        emoji: "Office",
        items: [
          "Reception and waiting areas",
          "Executive cabins",
          "Workstations and benching systems",
          "Meeting and conference rooms",
          "Breakout spaces and pantry areas",
          "Glass and drywall partitions",
          "Signage and branding elements",
          "Storage and utility spaces",
        ],
      },
    ],
    seoTitle: "Office Interior Designers in Bangalore | Corporate Fit-Out Experts",
    seoDescription:
      "Need office interior designers in Bangalore? We plan and execute office fit-outs, workstations, meeting rooms, partitions, and commercial interiors for growing businesses.",
    keywords: [
      "office interior designers Bangalore",
      "corporate interiors Bangalore",
      "office fit out Bangalore",
      "commercial interior contractors Bangalore",
    ],
    pricingGuide:
      "Commercial pricing depends on carpet area, workstation density, meeting rooms, MEP coordination, and finish standards.",
    timeline:
      "Most office fit-outs move through planning, approvals, procurement, and execution over 4 to 10 weeks depending on scope.",
    proofPoints: [
      "Designed for functional workflows and team growth",
      "Suitable for fast-turnaround commercial handovers",
      "Execution support across design and site coordination",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Do you work on office renovation as well as new fit-outs?",
        answer:
          "Yes. We take up both fresh office fit-outs and renovation or reconfiguration of existing office spaces.",
      },
      {
        question: "Can you support furniture and workstation planning?",
        answer:
          "Yes. We can coordinate workstation layouts, storage planning, meeting areas, and ergonomic furniture recommendations.",
      },
      {
        question: "Do you work with tight business timelines?",
        answer:
          "Yes. We plan milestones around business handover schedules wherever site conditions, approvals, and procurement allow it.",
      },
    ],
  },
  {
    id: "construction",
    slug: "residential-commercial-construction",
    title: "Residential and Commercial Construction",
    iconName: "building",
    shortDescription:
      "Design-to-delivery construction support for villas, homes, commercial buildings, and structural execution in Bangalore.",
    description:
      "Our construction services cover planning support, structural coordination, material review, vendor execution, and on-site progress management for residential and commercial projects. We work with clients who want a more accountable route from design through site delivery.",
    features: [
      "Residential and commercial construction execution",
      "Coordination with design, structural, and site teams",
      "Material and vendor planning support",
      "Milestone-based supervision and progress reviews",
      "Construction for villas, homes, and select commercial projects",
      "Finishing and allied scope coordination",
      "Support for practical site decision-making",
    ],
    image: "/Const1.png",
    designSections: [
      {
        title: "Construction Scope",
        emoji: "Build",
        items: [
          "Residential home construction",
          "Villa construction",
          "Commercial construction support",
          "Structural and site coordination",
          "Electrical and plumbing planning inputs",
          "Waterproofing and terrace treatment",
          "Exterior and finishing coordination",
          "Turnkey planning discussions",
        ],
      },
    ],
    seoTitle: "Construction Company in Bangalore | Residential and Commercial Builds",
    seoDescription:
      "Searching for a construction company in Bangalore? We support residential and commercial construction with site coordination, execution planning, and accountable project delivery.",
    keywords: [
      "construction company Bangalore",
      "villa construction Bangalore",
      "residential construction Bangalore",
      "commercial construction Bangalore",
      "building contractors Bangalore",
    ],
    pricingGuide:
      "Construction budgets depend on land conditions, structural requirements, built-up area, finish level, and whether the scope is shell-only or turnkey.",
    timeline:
      "Timelines vary significantly by project size, approvals, and finish level, but planning and milestone control are built into every engagement.",
    proofPoints: [
      "Useful for clients who want one accountable execution partner",
      "Structured reviews reduce site delays and rework",
      "Suitable for both new builds and integrated finishing work",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Do you handle both residential and commercial construction?",
        answer:
          "Yes. We support both residential and selected commercial construction projects depending on scope and location.",
      },
      {
        question: "Can you work as a turnkey construction partner?",
        answer:
          "Yes. For suitable projects, we support a design-to-delivery model that reduces coordination gaps between consultants and contractors.",
      },
      {
        question: "Do you also coordinate interior finishing after construction?",
        answer:
          "Yes. One of our strengths is aligning interior and finishing scope with the broader construction plan.",
      },
    ],
  },
  {
    id: "renovation",
    slug: "renovation-services",
    title: "Home and Office Renovation",
    iconName: "paint",
    shortDescription:
      "Renovation planning and execution for apartments, houses, offices, kitchens, bathrooms, and older properties in Bangalore.",
    description:
      "We help clients modernize homes and workspaces through structured renovation planning. Our team works on layout updates, kitchens, wardrobes, bathrooms, ceilings, finishes, and broader renovation scopes where design decisions need to align with practical site realities.",
    features: [
      "Apartment and villa renovation support",
      "Kitchen and bathroom remodeling",
      "False ceiling, lighting, and finish upgrades",
      "Wardrobe, carpentry, and storage redesign",
      "Electrical and plumbing retrofit coordination",
      "Selective structural strengthening discussions",
      "Execution support for occupied and aging properties",
    ],
    image: "/Updated-renovation.png",
    designSections: [
      {
        title: "Typical Renovation Work",
        emoji: "Renovate",
        items: [
          "Kitchen renovation",
          "Bathroom renovation",
          "Apartment modernization",
          "Office renovation",
          "Flooring and false ceiling upgrades",
          "Electrical and plumbing updates",
          "Storage redesign and carpentry changes",
          "Paint, polish, and finish improvements",
        ],
      },
    ],
    seoTitle: "Renovation Services in Bangalore | Home and Office Remodeling",
    seoDescription:
      "Need renovation services in Bangalore? We handle home and office renovation, kitchen remodeling, bathroom upgrades, layout refreshes, and coordinated interior improvements.",
    keywords: [
      "renovation services Bangalore",
      "home renovation Bangalore",
      "office renovation Bangalore",
      "kitchen remodeling Bangalore",
      "bathroom renovation Bangalore",
    ],
    pricingGuide:
      "Renovation costs depend on demolition, plumbing and electrical changes, finish level, and how much of the existing structure can be retained.",
    timeline:
      "Renovation timelines vary by site condition and scope, but most projects benefit from a phased room-by-room or milestone-based execution plan.",
    proofPoints: [
      "Suitable for old apartments and occupied homes",
      "Helps reduce hidden site surprises through early planning",
      "Integrates design upgrades with practical execution",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Do you renovate only homes or offices too?",
        answer:
          "We handle both home and office renovation depending on scope, access, and timeline requirements.",
      },
      {
        question: "Can you renovate older Bangalore apartments?",
        answer:
          "Yes. Older apartments often need a careful mix of redesign, storage optimization, and services upgrades, which is a common renovation use case for us.",
      },
      {
        question: "Do you help prioritize essential work versus aesthetic upgrades?",
        answer:
          "Yes. We can help separate critical upgrades like plumbing, electrical, waterproofing, or layout issues from purely aesthetic changes.",
      },
    ],
  },
  {
    id: "pmc",
    slug: "pmc-project-management-consultancy",
    title: "Project Management and Consultancy",
    iconName: "clipboard-list",
    shortDescription:
      "Planning, monitoring, vendor coordination, and quality oversight for construction and interior projects in Bangalore.",
    description:
      "Our PMC service is designed for clients who need professional oversight across design, budgeting, procurement, execution, and milestone control. We help reduce ambiguity and improve accountability in multi-vendor interior and construction projects.",
    features: [
      "Project planning and milestone setup",
      "Budgeting and scope clarity support",
      "Vendor coordination and review",
      "Quality oversight and progress reporting",
      "Risk tracking and issue escalation",
      "Documentation and handover support",
      "Useful for complex interior and construction projects",
    ],
    image: "/PMC1.png",
    pmcSections: [
      {
        title: "Pre-Construction Planning",
        emoji: "Plan",
        items: [
          "Feasibility and scope review",
          "Budget and milestone planning",
          "Consultant and vendor alignment",
          "Technical review and execution readiness",
        ],
      },
      {
        title: "Execution Oversight",
        emoji: "Track",
        items: [
          "Progress reviews and reporting",
          "Quality checks and site coordination",
          "Material and workmanship verification",
          "Issue tracking and decision support",
        ],
      },
      {
        title: "Close-Out Support",
        emoji: "Finish",
        items: [
          "Snag review and completion follow-up",
          "Vendor close-out support",
          "Documentation review",
          "Handover coordination",
        ],
      },
    ],
    seoTitle: "PMC Services in Bangalore | Project Management and Consultancy",
    seoDescription:
      "Need PMC services in Bangalore? We provide project management, quality oversight, milestone planning, and coordination support for interior and construction projects.",
    keywords: [
      "PMC services Bangalore",
      "project management consultancy Bangalore",
      "construction project management Bangalore",
      "interior project consultancy Bangalore",
    ],
    pricingGuide:
      "PMC fees depend on project size, duration, stakeholder complexity, and the level of reporting or on-site oversight required.",
    timeline:
      "PMC engagement can start from feasibility and planning or mid-project when execution needs stronger control and coordination.",
    proofPoints: [
      "Useful when multiple vendors or consultants are involved",
      "Improves visibility across cost, schedule, and quality",
      "Supports better decision-making for owners and teams",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Is PMC different from turnkey execution?",
        answer:
          "Yes. PMC focuses on oversight, coordination, quality, and project control, while turnkey execution includes direct delivery responsibility.",
      },
      {
        question: "Can you join a project after execution has already started?",
        answer:
          "In many cases, yes. We can assess the project stage and decide whether structured oversight can still add value.",
      },
      {
        question: "Who usually hires PMC services?",
        answer:
          "Clients with larger homes, commercial projects, or multi-vendor execution often benefit the most from PMC support.",
      },
    ],
  },
  {
    id: "design-and-drawings",
    slug: "design-and-drawings",
    title: "Architectural Design and Drawings",
    iconName: "pencil-ruler",
    shortDescription:
      "Architectural planning, technical drawings, visualization support, and design documentation for Bangalore projects.",
    description:
      "We support clients and teams with architectural design, working drawings, visualization inputs, and execution-ready documentation. This service is useful for projects that need stronger planning before construction or interior execution begins.",
    features: [
      "Architectural planning and layout development",
      "Execution-ready drawing support",
      "Interior layout and planning documents",
      "Visualization and design communication support",
      "Coordination between concept and execution needs",
      "Useful for residential and commercial project planning",
      "Helps reduce ambiguity before site work begins",
    ],
    image: "/Updated-D&D.jpg",
    designSections: [
      {
        title: "Design Documentation Scope",
        emoji: "Draw",
        items: [
          "Architectural layout planning",
          "Interior planning drawings",
          "Elevation and design visualization",
          "Execution coordination drawings",
          "Design detailing for site clarity",
          "Working drawing support",
          "Plan revisions for practical use",
          "Presentation-ready design outputs",
        ],
      },
    ],
    seoTitle: "Architectural Design and Drawings in Bangalore | Planning Support",
    seoDescription:
      "Need architectural design and drawings in Bangalore? We provide planning support, working drawings, layout development, and visualization inputs for homes and commercial spaces.",
    keywords: [
      "architectural design Bangalore",
      "working drawings Bangalore",
      "planning drawings Bangalore",
      "interior layout drawings Bangalore",
    ],
    pricingGuide:
      "Design and drawing fees depend on project size, number of revisions, drawing depth, and whether visualization or execution support is included.",
    timeline:
      "Smaller drawing packages move quickly, while larger residential and commercial sets require staged reviews and coordinated approvals.",
    proofPoints: [
      "Creates stronger clarity before execution begins",
      "Useful for aligning design intent with site reality",
      "Supports both interior and construction planning",
    ],
    serviceAreas: coreLocations,
    faqs: [
      {
        question: "Do you provide only design drawings or execution support too?",
        answer:
          "We can support drawings alone or align them with broader execution services depending on project needs.",
      },
      {
        question: "Is this useful before starting construction or interiors?",
        answer:
          "Yes. Strong planning and documentation reduce confusion, delays, and rework once site work starts.",
      },
      {
        question: "Can you help update an existing design package?",
        answer:
          "Yes. We can review an existing concept and help improve clarity, detail, and execution readiness.",
      },
    ],
  },
];
