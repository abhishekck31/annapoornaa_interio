import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema";

export const metadata = buildMetadata({
  title: "Building Products in Bangalore | UPVC, Fire Doors, Railings | ACIPL",
  description:
    "Supply and installation of UPVC and aluminium windows, fire doors, system railings, PVC false ceilings and office workstations across Bangalore. Manufacturer-backed warranties.",
  path: "/products",
  keywords: [
    "building products Bangalore",
    "UPVC windows Bangalore",
    "fire doors Bangalore",
    "system railings Bangalore",
    "office workstations Bangalore",
  ],
});

const products = [
  {
    id: "upvc-windows-doors",
    title: "UPVC Windows & Doors",
    description:
      "Energy-efficient, durable, and low-maintenance UPVC windows and doors for residential and commercial buildings.",
    image: "/upvcmainnew.jpg",
    link: "/products/upvc-windows-doors",
  },
  {
    id: "aluminum-doors-windows",
    title: "Aluminum Doors & Windows",
    description:
      "Modern, durable aluminum windows and doors with sleek designs for residential and commercial buildings.",
    image: "/alumainnew.jpg",
    link: "/products/aluminum-doors-windows",
  },
  {
    id: "fire-doors",
    title: "Fire Doors",
    description:
      "Safety-compliant fire doors designed to prevent the spread of fire and smoke in buildings.",
    image: "/Fire Doors/Firedoors-Main.jpg",
    link: "/products/fire-doors",
  },
  {
    id: "system-railings",
    title: "System Railings",
    description:
      "Modern, customizable railing systems for staircases, balconies, and other applications.",
    image: "/SystemRailings/SystemRailing-Main.jpg",
    link: "/products/system-railings",
  },
  {
    id: "pvc-false-&-ceilings",
    title: "Soffit False Ceilings",
    description:
      "Lightweight, water-resistant, and easy-to-install false ceiling solutions for various spaces.",
    image: "/PVC False and Ceilings/PVCFalse-Main.webp",
    link: "/products/pvc-false-ceilings",
  },
  {
    id: "workstations",
    title: "Workstations",
    description:
      "Ergonomic and efficient workstation solutions for modern office environments.",
    image: "/Workstations/Workstation-Main.webp",
    link: "/products/workstations",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        id="schema-products-index"
        data={[
          serviceSchema({
            name: "Building Products Supply & Installation in Bangalore",
            description:
              "Supply and installation of UPVC and aluminium windows and doors, fire-rated doors, glass and steel system railings, PVC false ceilings and modular office workstations across Bangalore.",
            path: "/products",
            serviceType: "Building Product Supply and Installation",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Products
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality products designed
              to enhance your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={product.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={`${product.title} — supplied and installed by ACIPL across Bangalore`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-700">{product.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
