import { Metadata } from 'next';
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Safety Fire Doors in Bangalore | Fire Rated Wooden & Steel Doors',
  description: 'Safety-compliant fire doors in Bangalore. We provide fire-rated wooden and steel doors designed to prevent the spread of fire. Certified safety solutions.',
  keywords: ['fire doors Bangalore', 'fire rated doors', 'steel fire doors', 'wooden fire doors', 'safety doors Bangalore'],
}

const FireDoorsPage = () => {
  const features = [
    "Fire-resistant for up to specified hours",
    "Smoke-sealed for maximum protection",
    "Durable and long-lasting construction",
    "Compliant with safety regulations",
    "Professional installation",
    "Various finishes and designs",
    "Emergency exit functionality",
    "Sound insulation properties",
  ]

  const products = [
    {
      name: "Wooden Fire Door",
      description: "Classic wooden fire doors that combine safety with aesthetic appeal.",
      image: "/Fire Doors/Fire-Wooden.png",
    },
    {
      name: "Steel Fire Door",
      description: "Robust steel fire doors for maximum protection and durability.",
      image: "/Fire Doors/Fire-Steel.jpg",
    },
    {
      name: "Glazed Fire Door",
      description: "Fire doors with glazed panels for enhanced visibility and safety.",
      image: "/Fire Doors/Fire-Glazed.webp",
    },
    {
      name: "Double Fire Door",
      description: "Double fire doors designed for larger openings and extra security.",
      image: "/Fire Doors/Fire-Double.jpg",
    },
    {
      name: "Acoustic Fire Door",
      description: "Fire doors with acoustic properties for sound insulation.",
      image: "/Fire Doors/Fire-Acoustic.jpg",
    },
    {
      name: "Emergency Exit Door",
      description: "Specialized fire doors for emergency exit routes.",
      image: "/Fire Doors/Fire-Emergency.png",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-24 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fire Doors</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Safety-compliant fire doors designed to prevent the spread of fire and smoke in buildings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Fire Doors/Firedoors-Main.jpg"
                alt="Fire Doors"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Professional Fire Door Solutions</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our fire doors are engineered to provide crucial protection in the event of a fire, helping to contain
                smoke and flames while providing safe evacuation routes. Each door is manufactured to meet strict safety
                standards and regulations.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From wooden fire doors that blend with your interior design to heavy-duty steel options for industrial
                settings, we offer a comprehensive range of fire-rated doors to suit your specific requirements.
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Fire Door Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
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
  )
}

export default FireDoorsPage
