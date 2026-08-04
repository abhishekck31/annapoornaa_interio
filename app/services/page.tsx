"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Briefcase,
  Building,
  Paintbrush,
  ClipboardList,
  Warehouse,
  Package,
  PencilRuler,
} from "lucide-react";
import Image from "next/image";
import { CollapsibleSection } from "@/components/collapsible-section";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features?: string[];
  pmcSections?: {
    title: string;
    emoji: string;
    items: string[];
  }[];
  designSections?: {
    title: string;
    emoji: string;
    items: string[];
  }[];
  image: string;
}

const services: Service[] = [
  {
    id: "home-interior",
    title: "Home Interiors",
    icon: <Home className="h-12 w-12 text-primary" />,
    description:
      "Transform your living spaces with our expert home interior design services. We create beautiful, functional, and personalized interiors that reflect your style and meet your needs.",
    features: [
      "Color scheme and material consultation",
      "Space planning and layout optimization",
      "Lighting design and fixtures",
      "Flooring and wall treatments",
      "Accessories and decor selection",
      "3D images and Walkthrough videos"
    ],
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
    image: "/updated-homein.jpg",
  },
  {
    id: "office-interior",
    title: "Office Interiors/Corporate Interiors",
    icon: <Briefcase className="h-12 w-12 text-primary" />,
    description:
      "Create productive and inspiring workspaces with our office interiors solutions. We design offices that enhance productivity, reflect your brand identity, and impress your clients.",
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
    image: "/Updated-officein-services.jpg",
  },
  {
    id: "construction",
    title: "Construction",
    icon: <Building className="h-12 w-12 text-primary" />,
    description:
      "Build your dream property with our professional construction services. From residential homes to commercial buildings, we handle all aspects of construction with quality and precision.",
    features: [
      "Residential and commercial construction",
      "Architectural planning and design",
      "Structural engineering",
      "Project management and consultancy",
      "Quality material sourcing",
      "Regulatory compliance and permits",
    ],
    image: "/Const1.png",
  },
  {
    id: "renovation",
    title: "Renovation",
    icon: <Paintbrush className="h-12 w-12 text-primary" />,
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
    description:
      "Revitalize your existing spaces with our comprehensive renovation services. We breathe new life into old structures while preserving their character and enhancing functionality.",
    features: [
      "Complete home renovations",
      "Kitchen and bathroom remodeling",
      "Structural modifications",
      "Electrical and plumbing works",
      "Flooring and ceiling renovations",
      "Exterior facade improvements",
    ],
    image: "/Updated-renovation.png",
  },
  {
    id: "pre-engineered-building",
    title: "PMC - Project Management & Consultancy",
    icon: <ClipboardList className="h-12 w-12 text-primary" />,
    description:
      "At ACIPL, we offer specialized Project Management and Consultancy (PMC) services tailored for the construction industry. From concept to commissioning, we ensure that every stage of your project is planned, executed, and delivered with precision.",
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
    image: "/PMC1.png",
  },
  {
    id: "products",
    title: "Design and Drawings",
    icon: <PencilRuler className="h-12 w-12 text-primary" />,
    description:
      "At ACIPL, we provide comprehensive Architectural, Structural, and MEP (Mechanical, Electrical, Plumbing) design and drafting services that form the foundation of any successful construction project. We combine creativity, functionality, and technical expertise to deliver designs that are both aesthetically pleasing and structurally sound.",
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
    image: "/Updated-D&D.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mt-24 pb-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-primary">
              Interior Design &amp; Construction Services in Bangalore
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior design and construction solutions tailored
              to your specific needs with 3D images and Walkthrough videos
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>

                  {service.pmcSections ? (
                    <div className="space-y-4">
                      {service.pmcSections.map((section, sectionIndex) => (
                        <CollapsibleSection
                          key={sectionIndex}
                          title={section.title}
                          emoji={section.emoji}
                          items={section.items}
                        />
                      ))}
                    </div>
                  ) : (
                    <div>
                      
                      {/* Custom static visible lists for each service */}
{service.id === "renovation" && (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-navy-900 mb-4">Renovation Services</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pl-3">
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Space planning & layout redesign</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Repairing & Decorating of Walls & Ceilings</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Flooring works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Painting & Decoration of walls</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Electrical & lighting works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Plumbing works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Wood works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Kitchen & bathroom remodeling</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">False ceiling works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Window & door replacements</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Wardrobe & storage solutions</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Fabrication works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Curtains & Blinds</span></li>
    </ul>
  </div>
)}
{service.id === "products" && (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-navy-900 mb-4">Design and Drawings Services</h3>
    {service.designSections && (
      <div className="space-y-4">
        {service.designSections.map((section, sectionIndex) => (
          <CollapsibleSection
            key={sectionIndex}
            title={section.title}
            emoji={section.emoji}
            items={section.items}
          />
        ))}
      </div>
    )}
  </div>
)}
{service.id === "home-interior" && (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-navy-900 mb-6">Home Interior Services</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Concepts, Designs & Drawings</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Pooja room</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Modular kitchens</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Wardrobes</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">TV units</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">False ceilings</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Flooring solutions</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Fabrication works</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Painting and wall finishes</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Railings</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Electrical and lighting works</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Plumbing works</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Wall decoration</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gold-500 flex-shrink-0">•</span>
            <span className="text-navy-900">Curtains & Blinds</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
)}
{service.id === "office-interior" && (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-navy-900 mb-4">Office Interior Services</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pl-3">
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Concepts, designs & drawings</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Painting works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Space planning & layout</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Railing works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Workstations and chairs</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Electrical works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Storage units</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Plumbing works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Glazing</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Carpentary works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Glass partition</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">HVAC - Heating Ventilation & Air Conditioning</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Dry wall partition</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Signages</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">False ceilings</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Curtains and Blinds</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Flooring</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Fabrication works</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Civil works</span></li>
    </ul>
  </div>
)}
{service.id === "construction" && (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-navy-900 mb-4">Residential & Commercial Construction Services</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 pl-3">
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Architectural Planning & Designs</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Structural engineering</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Project Planning & Control</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Budget & Cost Control</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Procurement & Material Selection</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Labor Management</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">On-site Supervision & Quality Control</span></li>
      <li className="flex items-center gap-2 pl-2"><span className="text-gold-500 flex-shrink-0">&#9679;</span><span className="text-navy-900 items-center">Risk Management & Problem-Solving</span></li>
    </ul>
  </div>
)}
                    </div>
                  )}
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 relative h-[400px]">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
