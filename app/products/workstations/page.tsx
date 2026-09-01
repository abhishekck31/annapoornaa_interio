import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Office Workstations in Bangalore | Modular Desks & Cubicles | ACIPL",
  description:
    "Office workstations in Bangalore — linear, bench, cubicle, height-adjustable and executive desking, plus conference tables and pods. Manufactured and installed for corporate fit-outs.",
  path: "/products/workstations",
  image: "/Workstations/Workstation-Main.webp",
  imageAlt: "Modular office workstations supplied and installed by ACIPL in Bangalore",
  keywords: [
    "office workstations Bangalore",
    "modular office furniture Bangalore",
    "office cubicles Bangalore",
    "height adjustable desks India",
  ],
});

const WorkstationsPage = () => {
  const features = [
    "Ergonomic design for comfort and productivity",
    "Customizable configurations to fit your space",
    "High-quality materials for durability",
    "Cable management solutions for a clean look",
    "Modular designs for easy reconfiguration",
    "Storage options integrated into workstations",
    "Variety of finishes and colors",
    "Space-efficient designs for maximum utilization",
  ];

  const products = [
    {
      name: "Open Plan Workstation",
      description:
        "Flexible open plan workstations for collaborative environments.",
      image: "/Workstations/Workstations - Open Plan.jpg",
    },
    {
      name: "Cubicle Workstation",
      description:
        "Private cubicle workstations for focused work and standarized corporate feel",
      image: "/Workstations/Workstation - Cubicle.jpg",
    },
    {
      name: "Executive Workstation",
      description: "Premium executive workstations with sophisticated design.",
      image: "/UP-Executivechair.png",
    },
    {
      name: "Linear Workstation",
      description:
        "Space-efficient linear workstations for streamlined layouts.",
      image: "/Workstations/Workstation- Linear.jpg",
    },
    {
      name: "Bench Workstation",
      description: "Collaborative bench workstations for team-based work.",
      image: "/Workstations/Workstation - Bench.jpg",
    },
    {
      name: "Boss Table",
      description:
        "Elegant,Modern and Minimal boss tables for executive offices.",
      image: "/Workstations/Workstation - Boss table.jpg",
    },
    {
      name: "Conference Table",
      description: "Large conference tables for meetings and discussions.",
      image: "/updatedconference.png",
    },
    {
      name: "Height Adjustable Workstation",
      description: "Ergonomic height adjustable workstations for comfort.",
      image: "/Workstations/Workstation - Height Adjustable.jpg",
    },
    {
      name: "Collaborative Pods",
      description:
        "Enclosed spaces designed for small group collaboration and focused work.",
      image: "/Workstations/Workstation - Pods.png",
    },
  ];

  return (
    <>
      <JsonLd
        id="schema-product-workstations"
        data={[
          serviceSchema({
            name: "Office Workstations in Bangalore",
            description:
              "Modular office workstations, cubicles and desking systems in Bangalore — supply, space planning and installation to your headcount and floor plate.",
            path: "/products/workstations",
            serviceType: "Office Workstation Supply and Installation",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Workstations", path: "/products/workstations" },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-24 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Workstations
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ergonomic and efficient workstation solutions for modern office
              environments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Workstations/Workstation-Main.webp"
                alt="Modular office workstations and cubicle systems for Bangalore workplaces — ACIPL"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Productive Workspace Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our workstation solutions are designed to enhance productivity,
                comfort, and collaboration in modern office environments. We
                understand that the workspace plays a crucial role in employee
                satisfaction and efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From open-plan collaborative spaces to private cubicles, our
                workstations combine functionality with aesthetics, creating
                environments where people can do their best work.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Workstation Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={`${product.name} — modular office workstation by ACIPL, Bangalore`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorkstationsPage;
