import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { buildMetadata } from "@/lib/seo/metadata"
import JsonLd from "@/components/seo/json-ld"
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schema"

export const metadata = buildMetadata({
  title: "System Railings in Bangalore | Glass & Steel Railings | ACIPL",
  description:
    "System railings in Bangalore — frameless glass, stainless steel, aluminium and combination railings for staircases, balconies and terraces. Engineered fixings, installed to spec.",
  path: "/products/system-railings",
  image: "/SystemRailings/SystemRailing-Main.jpg",
  imageAlt: "Frameless glass system railing installed by ACIPL in Bangalore",
  keywords: [
    "system railings Bangalore",
    "glass railings Bangalore",
    "stainless steel railings Bangalore",
    "balcony railing design India",
  ],
})

const SystemRailingsPage = () => {
  const features = [
    "Modern and elegant designs",
    "High-quality materials",
    "Customizable options",
    "Durable construction",
    "Easy maintenance",
    "Safety compliant",
    "Professional installation",
    "Weather resistant",
  ]

  const railingImages = [
    "/SystemRailings/Railing-Glass.jpg",
    "/SystemRailings/Railings-Steel.webp",
    "/SystemRailings/Ralings-Alumilium.jpg",
    "/SystemRailings/Railings-Combination.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.17_54b23978.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.17_991b7772.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.17_afd90883.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.18_2f7fe878.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.18_56840484.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.18_ace34407.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.19_6bb89562.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.19_741e9266.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.19_769d3460.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.19_c375af4a.jpg",
    "/Railings/WhatsApp Image 2025-04-26 at 22.30.21_962b554d.jpg",
  ]

  return (
    <>
      <JsonLd
        id="schema-product-system-railings"
        data={[
          serviceSchema({
            name: "System Railings in Bangalore",
            description:
              "Design, supply and installation of glass, stainless steel and aluminium system railings for staircases, balconies and terraces across Bangalore.",
            path: "/products/system-railings",
            serviceType: "Railing Supply and Installation",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "System Railings", path: "/products/system-railings" },
          ]),
        ]}
      />
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-24 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">System Railings</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Modern, customizable railing systems for staircases, balconies, and other applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/SystemRailings/SystemRailing-Main.jpg"
                alt="Glass and stainless steel staircase and balcony railing systems in Bangalore — ACIPL"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Premium Railing Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our system railings combine aesthetics with functionality, providing safe and stylish solutions for
                your residential or commercial space. Each railing system is engineered for durability and designed
                to complement modern architecture.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From sleek glass railings to robust steel systems, we offer a wide range of options to match your
                specific requirements and design preferences.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Railing Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {railingImages.map((imageSrc, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={imageSrc}
                      alt={`Glass and steel railing system design ${index + 1} by ACIPL, Bangalore`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SystemRailingsPage
