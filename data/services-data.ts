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
        shortDescription: "Bespoke home interior solutions from concept to completion. We specialize in luxury and functional living spaces in Bangalore.",
        description: "Annapoornaa Interio is Bangalore's premier home interior design firm, dedicated to transforming your vision into reality. We combine aesthetic elegance with functional brilliance to create personalized living spaces. From luxury villas to modern apartments, our expert designers ensure every corner of your home reflects your personality. Our end-to-end service includes everything from initial concepts and 3D visualizations to final execution, ensuring a stress-free experience for our clients.",
        features: [
            "Bespoke Concept & Mood Board Design",
            "Advanced 3D Visualization & VR Walkthroughs",
            "Custom-built Modular Kitchens & Wardrobes",
            "Premium Material Selection & Procurement",
            "Expert Site Supervision & Quality Audits",
            "On-time Project Delivery Guarantee",
            "Post-handover Service Support"
        ],
        image: "/updated-homein.jpg",
        designSections: [
            {
                title: "Comprehensive Home Design Services",
                emoji: "🏠",
                items: [
                    "Full-Home Interior Designing",
                    "Modular Kitchen Systems",
                    "Luxury Wardrobes & Storage",
                    "Elegant Living Room Units",
                    "Custom Pooja Room Designs",
                    "Kids' Bedroom Interior",
                    "False Ceiling & Lighting",
                    "Premium Wall Finishes & Painting",
                    "Curtains, Blinds & Soft Furnishings",
                    "Smart Home Automation Integration"
                ],
            },
        ],
        seoTitle: "Best Home Interior Designers in Bangalore | Luxury & Modular Interiors",
        seoDescription: "Searching for the best home interior designers in Bangalore? Annapoornaa Interio offers premium modular kitchens, custom wardrobes, and full-home interiors. Free consultation!",
        keywords: ["home interior designers Bangalore", "best interior designers Bangalore", "modular kitchen Bangalore", "wardrobe design Bangalore", "residential interiors Bangalore"],
    },
    {
        id: "office-interior",
        slug: "office-corporate-interiors",
        title: "Office/Corporate Interiors",
        iconName: "briefcase",
        shortDescription: "Scalable and productive workspace solutions for startups and corporate giants in Bangalore.",
        description: "Create a workspace that inspires innovation and drives productivity with Annapoornaa Interio's corporate interior solutions. We specialize in designing and building high-performance work environments for Bangalore's growing businesses. Our designs focus on employee well-being, brand identity, and ergonomic efficiency. Whether you're a startup needing a collaborative hub or an established firm requiring a sophisticated headquarters, we deliver turnkey solutions that align with your business goals.",
        features: [
            "Strategic Workspace Optimization",
            "Ergonomic Furniture & Seating Solutions",
            "Advanced IT Networking & Low Voltage Systems",
            "Comprehensive HVAC & Ventilation Labs",
            "Acoustic & Soundproofing Solutions",
            "Standard-compliant Safety & Security Systems",
            "Sustainable & Green Office Design"
        ],
        image: "/Updated-officein-services.jpg",
        designSections: [
            {
                title: "End-to-End Corporate Solutions",
                emoji: "🏢",
                items: [
                    "Executive Office Design",
                    "Collaborative Breakout Zones",
                    "Modern Conference & Meeting Rooms",
                    "Ergonomic Workstations",
                    "Reception & Lobby Design",
                    "Cafeteria & Pantry Interiors",
                    "Data Centers & Server Rooms",
                    "Industrial-grade Flooring & Ceilings",
                    "Professional Signages & Branding",
                    "Glass & Drywall Partitions"
                ],
            },
        ],
        seoTitle: "Office & Corporate Interior Designers Bangalore | Workspace Experts",
        seoDescription: "Top-rated office interior designers in Bangalore. We build productive, ergonomic, and tech-enabled corporate spaces. Turnkey solutions for startups & enterprises.",
        keywords: ["office interior Bangalore", "corporate office design Bangalore", "commercial interiors Bangalore", "workstation designers Bangalore"],
    },
    {
        id: "construction",
        slug: "residential-commercial-construction",
        title: "Residential & Commercial Construction",
        iconName: "building",
        shortDescription: "End-to-end building construction with expert architectural planning and structural engineering in Bangalore.",
        description: "Annapoornaa Interio is a leading A-class civil contractor and building construction company in Bangalore. We provide comprehensive 'Design to Delivery' construction services for residential villas, apartments, and commercial complexes. Our team of experienced architects and structural engineers ensures that every project meets the highest standards of safety, durability, and aesthetics. We handle everything from land survey and soil testing to structural design, regulatory approvals, and final construction with premium finishes.",
        features: [
            "Turnkey Residential & Commercial Construction",
            "A-Class Civil Contracting Services",
            "Expert Architectural & Structural Planning",
            "Liaisoning & BBMP/BDA Approval Assistance",
            "High-grade Material Selection (Cement, Steel, etc.)",
            "Real-time Project Progress Tracking",
            "Compliance with IS Codes & Safety Standards"
        ],
        image: "/Const1.png",
        designSections: [
            {
                title: "Core Construction Expertise",
                emoji: "🏗️",
                items: [
                    "New Building Construction",
                    "A-Class Civil Works",
                    "Vastu-compliant Architectural Planning",
                    "Premium Villa Construction",
                    "Commercial Building Contractors",
                    "Structural Engineering & Analysis",
                    "Landscaping & Exterior Development",
                    "Waterproofing & Terrace Treatment",
                    "Electrical & Plumbing Layouts",
                    "Sanitary & Sewage Systems"
                ]
            }
        ],
        seoTitle: "Best Construction Company in Bangalore | Residential & Commercial Builders",
        seoDescription: "Searching for top building contractors in Bangalore? Annapoornaa Interio offers turnkey residential and commercial construction with expert architectural and structural planning.",
        keywords: ["construction company Bangalore", "building contractors Bangalore", "house construction Bangalore", "civil contractors Bangalore", "residential construction Bangalore"],
    },
    {
        id: "renovation",
        slug: "renovation-services",
        title: "Home & Office Renovation",
        iconName: "paint",
        shortDescription: "Renew your old spaces with our expert structural and aesthetic renovation services in Bangalore.",
        description: "Breathe new life into your existing property with Annapoornaa Interio's expert renovation services. We specialize in transforming old Bangalore homes, apartments, and offices into modern, functional spaces. Our renovation process involves a deep audit of the existing structure, followed by creative redesigning and meticulous execution. Whether it's a kitchen makeover, bathroom remodeling, or a complete structural overhaul, we ensure your renovated space meets contemporary standards while preserving its original charm.",
        features: [
            "Complete Home & Office Makeovers",
            "Structural Integrity Checks & Strengthening",
            "Modern Kitchen & Bathroom Remodeling",
            "Electrical & Plumbing Retrofitting",
            "Modern Flooring & False Ceiling Upgrades",
            "External Elevation & Facade Renovation",
            "Eco-friendly & Energy-efficient Upgrades"
        ],
        image: "/Updated-renovation.png",
        designSections: [
            {
                title: "Specialized Renovation Solutions",
                emoji: "🛠️",
                items: [
                    "Old Home Structural Strengthening",
                    "Premium Kitchen Remodeling",
                    "Modern Bathroom Makeovers",
                    "Apartment Internal Renovations",
                    "Commercial Space Retrofitting",
                    "External Elevation Designing",
                    "Full-house Painting & Polishing",
                    "Door & Window Replacements",
                    "Waterproofing & Damage Repairs",
                    "Modern Lighting & Electrical Retrofitting"
                ]
            }
        ],
        seoTitle: "Home & Office Renovation Services Bangalore | Best Remodeling Experts",
        seoDescription: "Transform your old space with Bangalore's best renovation experts. We provide complete home, kitchen, and bathroom remodeling with quality assurance and on-time delivery.",
        keywords: ["home renovation Bangalore", "apartment renovation Bangalore", "kitchen remodeling Bangalore", "office renovation Bangalore", "renovation contractors Bangalore"],
    },
    {
        id: "pre-engineered-building",
        slug: "pmc-project-management-consultancy",
        title: "PMC - Project Management & Consultancy",
        iconName: "clipboard-list",
        shortDescription: "Professional construction management services ensuring timely delivery, cost control, and quality assurance in Bangalore.",
        features: [
            "Strategic Project Planning & Budgeting",
            "Real-time Milestone & Progress Monitoring",
            "Rigorous Quality Control & IS Code Compliance",
            "Efficient Resource & Material Management",
            "Detailed Risk Mitigation & Problem Solving",
            "Transparent Communication & Reporting",
            "Final Handover & Snag-list Clearance"
        ],
        description: "At Annapoornaa Interio, we provide specialized Project Management and Consultancy (PMC) services for complex construction and interior projects in Bangalore. We act as the technical bridge between the client and various contractors, ensuring that the project is delivered on time, within budget, and as per specifications. Our PMC team focuses on value engineering to optimize costs without compromising on quality, making us the preferred consultancy partner for developers and corporate firms.",
        image: "/PMC1.png",
        pmcSections: [
            {
                title: "Pre-Construction Excellence",
                emoji: "🏗️",
                items: [
                    "Detailed Project Feasibility Studies",
                    "Budget Estimation & Cost Planning",
                    "Vetting of Designs & Technical Specs",
                    "Tendering & Contractor Selection Support"
                ],
            },
            {
                title: "On-site Execution & Governance",
                emoji: "🛠️",
                items: [
                    "Daily Site Supervision & Quality Audits",
                    "Safety & Environmental Compliance",
                    "Material Testing & Approval Management",
                    "Inventory & Wastage Control"
                ],
            },
            {
                title: "Cost & Schedule Oversight",
                emoji: "📋",
                items: [
                    "Cash Flow Analysis & Bill Certification",
                    "Critical Path Management (CPM)",
                    "Vendor & Stakeholder Management",
                    "Dispute Resolution & Contract Admin"
                ],
            },
        ],
        seoTitle: "Construction Project Management Bangalore | Professional PMC Services",
        seoDescription: "Lead your construction project with Bangalore's top PMC experts. We handle project scheduling, cost control, and quality audits for residential & commercial builds.",
        keywords: ["PMC services Bangalore", "construction management Bangalore", "project consultancy Bangalore", "structural consultancy Bangalore", "best project management Bangalore"],
    },
    {
        id: "products",
        slug: "design-and-drawings",
        title: "Architectural Design & Drawings",
        iconName: "pencil-ruler",
        shortDescription: "Precision architectural, structural, and MEP design services for Bangalore's modern building projects.",
        features: [
            "Vastu-compliant Architectural Planning",
            "High-precision Structural Design & Detailing",
            "Comprehensive MEP (Electrical, Plumbing, HVAC) Drawings",
            "Advanced 3D BIM (Building Information Modelling)",
            "Detailed GFC (Good for Construction) Documentation",
            "As-built Drawings for Final Documentation",
            "Professional Walkthrough Videos & Renderings"
        ],
        description: "Annapoornaa Interio providing high-precision building design services that serve as the blueprint for excellence. Our 'Design and Drawings' wing provides architects and developers in Bangalore with technically sound and aesthetically pleasing solutions. We specialize in converting conceptual ideas into detailed, executable GFC drawings while ensuring compliance with local building bylaws and engineering standards.",
        image: "/Updated-D&D.jpg",
        designSections: [
            {
                title: "Architectural & 3D Visualization",
                emoji: "🧱",
                items: [
                    "Conceptual Building Layouts",
                    "Interior & Exterior 3D Renderings",
                    "Site Development & Landscaping Plans",
                    "Detailed Elevation & Section Drawings"
                ],
            },
            {
                title: "Engineering & Technical Drawings",
                emoji: "🏗️",
                items: [
                    "RCC & Steel Structural Detailing",
                    "MEP Layouts (Electrical & HVAC)",
                    "Plumbing & Sanitation Schematics",
                    "Fire Safety & Life Safety Designs"
                ],
            },
            {
                title: "Construction Support Documentation",
                emoji: "📐",
                items: [
                    "GFC (Good for Construction) Drawings",
                    "Bar Bending Schedules (BBS)",
                    "Project Specifications & BOM",
                    "Clash Detection & BIM Support"
                ],
            },
        ],
        seoTitle: "Architectural Design & Structural Drawings Bangalore | Expert Drafting",
        seoDescription: "Get technically sound architectural and structural drawings for your project in Bangalore. We provide GFC drawings, MEP plans, and 3D visualizations for all builds.",
        keywords: ["architectural drawings Bangalore", "structural design Bangalore", "MEP design Bangalore", "3D building plans Bangalore", "best architects Bangalore"],
    },
];
