import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"
import JsonLd from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { serviceSchema } from "@/lib/seo/schema"

export const metadata = buildMetadata({
  title: "Construction Services in Bangalore | Turnkey Contractors | ACIPL",
  description:
    "Construction services in Bangalore — residential and commercial builds, turnkey contracts, plan sanction support, structural design and project management from foundation to handover.",
  path: "/expertise/construction",
  image: "/Const1.png",
  imageAlt: "Residential construction project managed by ACIPL in Bangalore",
  keywords: [
    "construction services Bangalore",
    "turnkey construction Bangalore",
    "civil contractors Bangalore",
    "house construction Bangalore",
  ],
})

const constructionServiceSchema = serviceSchema({
  name: "Construction Services in Bangalore",
  description:
    "Residential and commercial construction, turnkey contracts, plan sanction support and project management delivered across Bangalore.",
  path: "/expertise/construction",
  serviceType: "General Contractor",
})

const constructionExpertise = [
  {
    title: "Residential Construction",
    description:
      "Build your dream home with our expert residential construction services, from individual homes to multi-unit developments.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Custom home construction",
      "Villa and luxury residence building",
      "Multi-family residential projects",
      "Architectural planning and design",
      "Structural engineering",
      "Interior finishing and detailing",
    ],
  },
  {
    title: "Commercial Construction",
    description:
      "Develop professional commercial spaces that meet your business needs and create the right impression for your clients and customers.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Office buildings and complexes",
      "Retail and shopping centers",
      "Restaurants and hospitality venues",
      "Medical and healthcare facilities",
      "Educational institutions",
      "Industrial and warehouse spaces",
    ],
  },
  {
    title: "Pre-engineered Buildings",
    description:
      "Efficient, cost-effective, and quickly deployable building solutions for industrial, commercial, and large-scale projects.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Industrial facilities and factories",
      "Warehouses and storage buildings",
      "Commercial complexes",
      "Sports and recreational facilities",
      "Agricultural structures",
      "Customized PEB solutions",
    ],
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform existing structures with our comprehensive renovation and remodeling services that breathe new life into old spaces.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Complete building renovations",
      "Historic building restoration",
      "Commercial space remodeling",
      "Structural modifications",
      "Facade improvements",
      "Interior space reconfiguration",
    ],
  },
]

export default function ConstructionExpertisePage() {
  return (
    <>
    <JsonLd id="schema-service-construction" data={constructionServiceSchema} />
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-96 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Construction Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building quality structures with precision engineering and superior craftsmanship
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Construction Approach</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At ACIPL, we approach construction with a commitment to quality, efficiency, and client
                  satisfaction. Our comprehensive construction services cover everything from initial planning and
                  design to final execution and finishing touches.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We combine traditional construction expertise with modern techniques and technologies to deliver
                  buildings that are not only aesthetically pleasing but also structurally sound, energy-efficient, and
                  built to last. Our team of experienced professionals ensures that every project is completed on time,
                  within budget, and to the highest standards.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're looking to build a new home, develop a commercial property, or renovate an existing
                  structure, we have the expertise and resources to bring your vision to life.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Construction planning and site drawings by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Quality construction materials sourced by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg mt-8"
                />
                <Image
                  src="/placeholder.svg"
                  alt="On-site construction process managed by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Finished residential construction handover by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {constructionExpertise.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{item.description}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services Include:</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/2] w-full">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.title} — construction service by ACIPL in Bangalore`}
                          fill
                          unoptimized={!item.image || item.image.startsWith("/placeholder")}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
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
    </>
  )
}
