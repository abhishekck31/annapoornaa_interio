import { Home, Briefcase, Building, Paintbrush, ClipboardList, PencilRuler, Hammer, PaintBucket } from "lucide-react";
import React from 'react';

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
}

export const services: Service[] = [
    {
        id: "home-interior",
        slug: "home-interiors",
        title: "Home Interiors",
        iconName: "home",
        shortDescription: "Transform your living spaces with our comprehensive Interiors design solutions, from concept to completion.",
        description: "Transform your living spaces with our expert home interior design services. We create beautiful, functional, and personalized interiors that reflect your style and meet your needs.",
        features: [
            "Color scheme and material consultation",
            "Space planning and layout optimization",
            "Lighting design and fixtures",
            "Flooring and wall treatments",
            "Accessories and decor selection",
            "3D images and Walkthrough videos"
        ],
        image: "/updated-homein.jpg",
        designSections: [
            {
                title: "Home Interiors Services",
                emoji: "🏠",
                items: [
                    "Concepts, Designs & Drawings",
                    "Pooja room",
                    "Modular kitchens",
                    "Wardrobes",
                    "TV units",
                    "False ceilings",
                    "Flooring solutions",
                    "Fabrication works",
                    "Painting and wall finishes",
                    "Railings",
                    "Electrical and lighting works",
                    "Plumbing works",
                    "Wall decoration",
                    "Curtains & Blinds"
                ],
            },
        ],
        seoTitle: "Best Home Interior Designers in Yelahanka, Bangalore | Annapoornaa Interio",
        seoDescription: "Transform your home with the top interior designers in Yelahanka & Bangalore. Custom modular kitchens, wardrobes & luxury living spaces. Free consultation!",
        keywords: ["home interior designers Bangalore", "interior designers Yelahanka", "modular kitchen Bangalore", "wardrobe design Bangalore", "residential interiors Bangalore"],
    },
    {
        id: "office-interior",
        slug: "office-corporate-interiors",
        title: "Office/Corporate Interiors",
        iconName: "briefcase",
        shortDescription: "Create productive and stylish workspaces with our expert corporate Interiors design and implementation services.",
        description: "Create productive and inspiring workspaces with our office interiors solutions. We design offices that enhance productivity, reflect your brand identity, and impress your clients.",
        features: [
            "Workspace planning and layout",
            "Ergonomic furniture selection",
            "Brand integration in design",
            "Meeting and collaborative spaces",
            "Chairs and work stations",
            "Employee wellness considerations",
            "heating, ventilation and air conditioning(HVAC)",
            "Electrical,lightning,flooring walls and ceiling works",
            "Fabrication,glazzing/glassworks,IT Networking,painting wokrs"
        ],
        image: "/Updated-officein-services.jpg",
        designSections: [
            {
                title: "Office Interior Services",
                emoji: "🏢",
                items: [
                    "Concepts, Designs & Drawings",
                    "Workstations & Chairs",
                    "Storage units",
                    "Glazing",
                    "Glass partitions",
                    "Dry wall partitions",
                    "False ceilings",
                    "Floorings",
                    "Fabrication works",
                    "Painting works",
                    "Railings",
                    "Electrical works",
                    "Plumbing works",
                    "Carpentry works",
                    "HVAC - Heating Ventilation & Air Conditioning",
                    "Signages",
                    "Curtains & Blinds",
                    "Civil works"
                ],
            },
        ],
        seoTitle: "Office & Corporate Interior Designers Bangalore | Workspace Solutions",
        seoDescription: "Lead your business with inspiring office interiors in Bangalore. Ergonomic workstations, HVAC solutions & modern corporate designs for productivity.",
        keywords: ["office interior Bangalore", "corporate office design Bangalore", "commercial interiors Yelahanka", "workstation designers Bangalore"],
    },
    {
        id: "construction",
        slug: "residential-commercial-construction",
        title: "Residential & Commercial Construction",
        iconName: "building",
        shortDescription: "End-to-end construction services with expert architectural planning, structural engineering, and project management.",
        description: "Build your dream property with our professional construction services. From residential homes to commercial buildings, we handle all aspects of construction with quality and precision.",
        features: [
            "Residential and commercial construction",
            "Architectural planning and design",
            "Structural engineering",
            "Project management and consultancy",
            "Quality material sourcing",
            "Regulatory compliance and permits",
        ],
        image: "/Const1.png",
        designSections: [
            {
                title: "Residential & Commercial Construction Services",
                emoji: "🏗️",
                items: [
                    "Architectural Planning & Designs",
                    "Structural engineering",
                    "Project Planning & Control",
                    "Budget & Cost Control",
                    "Procurement & Material Selection",
                    "Labor Management",
                    "On-site Supervision & Quality Control",
                    "Risk Management & Problem-Solving"
                ]
            }
        ],
        seoTitle: "Top Construction Company in Yelahanka, Bangalore | Annapoornaa Interio",
        seoDescription: "Leading building contractors in Yelahanka, Bangalore. Quality residential and commercial construction with architectural planning & structural engineering.",
        keywords: ["construction company Yelahanka", "building contractors Bangalore", "house construction Bangalore", "civil engineering Bangalore"],
    },
    {
        id: "renovation",
        slug: "renovation-services",
        title: "Renovation",
        iconName: "paint",
        shortDescription: "Revitalize your existing spaces with our comprehensive renovation services.",
        description: "Revitalize your existing spaces with our comprehensive renovation services. We breathe new life into old structures while preserving their character and enhancing functionality.",
        features: [
            "Complete home renovations",
            "Kitchen and bathroom remodeling",
            "Structural modifications",
            "Electrical and plumbing works",
            "Flooring and ceiling renovations",
            "Exterior facade improvements",
        ],
        image: "/Updated-renovation.png",
        designSections: [
            {
                title: "Renovation Services",
                emoji: "🛠️",
                items: [
                    "Space planning & layout redesign",
                    "Repairing & Decorating of Walls & Ceilings",
                    "Flooring works",
                    "Painting & Decoration of walls",
                    "Electrical & lighting works",
                    "Plumbing works",
                    "Wood works",
                    "Kitchen & bathroom remodeling",
                    "False ceiling works",
                    "Window & door replacements",
                    "Wardrobe & storage solutions",
                    "Fabrication works",
                    "Curtains & Blinds"
                ]
            }
        ],
        seoTitle: "Home & Apartment Renovation Services Bangalore | Modern Makeovers",
        seoDescription: "Professional home renovation in Bangalore. We specialize in kitchen remodeling, bathroom updates, and complete structural renovations for old apartments.",
        keywords: ["home renovation Bangalore", "apartment renovation Bangalore", "kitchen remodeling Bangalore", "bathroom remodeling Bangalore"],
    },
    {
        id: "pre-engineered-building",
        slug: "pmc-project-management-consultancy",
        title: "PMC - Project Management & Consultancy",
        iconName: "clipboard-list",
        shortDescription: "Expert project management and consultancy services to ensure your construction projects are delivered on time and within budget.",
        features: [
            "Project feasibility and budgeting",
            "Real-time progress monitoring",
            "Quality assurance and compliance",
            "Resource and material management"
        ],
        description: "At Annapoornaa Interio, we offer specialized Project Management and Consultancy (PMC) services tailored for the construction industry. From concept to commissioning, we ensure that every stage of your project is planned, executed, and delivered with precision.",
        image: "/PMC1.png",
        pmcSections: [
            {
                title: "Pre-Construction Planning",
                emoji: "🏗️",
                items: [
                    "Feasibility studies",
                    "Project budgeting and cost estimation",
                    "Design coordination and approvals",
                ],
            },
            {
                title: "Construction Phase Management",
                emoji: "🛠️",
                items: [
                    "Project scheduling & milestone tracking",
                    "Contractor coordination and site supervision",
                    "Quality control and safety compliance",
                    "Material and resource management",
                ],
            },
            {
                title: "Cost & Time Control",
                emoji: "📋",
                items: [
                    "Budget adherence and cost audits",
                    "Real-time progress monitoring",
                    "Delay analysis and corrective actions",
                    "Value engineering and optimization",
                ],
            },
            {
                title: "Quality Assurance & Compliance",
                emoji: "🧱",
                items: [
                    "Ensuring adherence to IS codes, building bylaws, and project specifications",
                    "Regular site inspections and third-party audits",
                    "Documentation and compliance management",
                ],
            },
            {
                title: "Communication & Reporting",
                emoji: "📡",
                items: [
                    "Centralized communication with all stakeholders",
                    "Daily/weekly progress reports and review meetings",
                    "Transparent documentation and regular updates",
                ],
            },
            {
                title: "Project Handover & Close-out",
                emoji: "🎯",
                items: [
                    "Final inspection and snag list clearance",
                    "Commissioning and testing",
                    "As-built documentation and handover",
                ],
            },
        ],
        seoTitle: "Construction Project Management Bangalore | PMC Experts",
        seoDescription: "Professional PMC services in Bangalore for construction projects. We manage budgeting, scheduling, quality control, and project handover with precision.",
        keywords: ["PMC services Bangalore", "construction management Bangalore", "project consultancy Bangalore", "structural consultancy"],
    },
    {
        id: "products",
        slug: "design-and-drawings",
        title: "Design and Drawings",
        iconName: "pencil-ruler",
        shortDescription: "Detailed architectural drawings and design documentation with precision engineering and creative excellence.",
        features: [
            "Architectural and structural drawings",
            "MEP design and drafting",
            "3D modelling and visualizations",
            "GFC and as-built documentation"
        ],
        description: "At Annapoornaa Interio, we provide comprehensive Architectural, Structural, and MEP (Mechanical, Electrical, Plumbing) design and drafting services that form the foundation of any successful construction project. We combine creativity, functionality, and technical expertise to deliver designs that are both aesthetically pleasing and structurally sound.",
        image: "/Updated-D&D.jpg",
        designSections: [
            {
                title: "Architectural Design",
                emoji: "🧱",
                items: [
                    "Conceptual layouts and 3D visualizations",
                    "Floor plans and walkthrough videos",
                    "Facade, landscaping, and elevation drawings",
                ],
            },
            {
                title: "Structural Design & Drawings",
                emoji: "🏗️",
                items: [
                    "RCC & steel structural designs",
                    "Foundation design and detailing",
                    "Load calculations and analysis",
                    "Bar bending schedules (BBS) and reinforcement drawings",
                ],
            },
            {
                title: "MEP Design & Drafting",
                emoji: "🔌",
                items: [
                    "Electrical layout plans",
                    "Plumbing and drainage systems",
                    "HVAC design and ducting layout",
                    "Fire-fighting and safety system designs",
                ],
            },
            {
                title: "Working & Construction Drawings",
                emoji: "📐",
                items: [
                    "GFC (Good for Construction) drawings",
                    "As-built drawings and documentation",
                    "Detailing for site execution and fabrication",
                    "Coordination drawings for site teams",
                ],
            },
            {
                title: "3D Modelling & Visualization",
                emoji: "🎨",
                items: [
                    "Walkthroughs and renderings for client presentations",
                    "BIM (Building Information Modelling) support",
                    "Clash detection and design validation",
                ],
            },
        ],
        seoTitle: "Architectural Design & Structural Drawings Bangalore",
        seoDescription: "Get detailed architectural drawings, 3D renderings, and MEP plans for your projects in Bangalore. Expert design and drafting services by Annapoornaa Interio.",
        keywords: ["architectural drawings Bangalore", "structural design Bangalore", "MEP design Bangalore", "3D floor plans Bangalore"],
    },
];
