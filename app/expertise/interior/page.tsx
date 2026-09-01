import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"
import JsonLd from "@/components/seo/json-ld"
import { buildMetadata } from "@/lib/seo/metadata"
import { serviceSchema } from "@/lib/seo/schema"

export const metadata = buildMetadata({
  title: "Interior Design Services in Bangalore | Residential & Commercial | ACIPL",
  description:
    "Interior design services in Bangalore covering residential, commercial, modular kitchens, false ceilings and turnkey fit-outs. In-house design and execution from concept to handover.",
  path: "/expertise/interior",
  image: "/updated-homein.jpg",
  imageAlt: "Interior design project completed by ACIPL in Bangalore",
  keywords: [
    "interior design services Bangalore",
    "interior designers Bangalore",
    "turnkey interiors Bangalore",
    "commercial interior design Bangalore",
  ],
})

const interiorServiceSchema = serviceSchema({
  name: "Interior Design Services in Bangalore",
  description:
    "Residential and commercial interior design, modular kitchens, wardrobes, false ceilings and turnkey fit-outs delivered across Bangalore.",
  path: "/expertise/interior",
  serviceType: "Interior Design",
})

const interiorExpertise = [
  {
    title: "Residential Interior Design",
    description:
      "Create beautiful, functional living spaces that reflect your personal style and meet your family's needs.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Living room and bedroom designs",
      "Kitchen and bathroom renovations",
      "Custom furniture and cabinetry",
      "Color scheme and material selection",
      "Lighting design and fixtures",
      "Accessory and decor curation",
    ],
  },
  {
    title: "Commercial Interior Design",
    description:
      "Design professional workspaces that enhance productivity, reflect your brand identity, and impress your clients.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Office space planning and layout",
      "Corporate branding integration",
      "Ergonomic furniture selection",
      "Meeting and collaborative spaces",
      "Reception and waiting areas",
      "Employee wellness considerations",
    ],
  },
  {
    title: "Retail Interior Design",
    description:
      "Create engaging retail environments that attract customers, showcase products effectively, and drive sales.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Store layout and flow optimization",
      "Product display solutions",
      "Brand-aligned visual merchandising",
      "Lighting to highlight products",
      "Customer experience enhancement",
      "Point-of-sale area design",
    ],
  },
  {
    title: "Hospitality Interior Design",
    description: "Design inviting hospitality spaces that provide memorable experiences and keep guests coming back.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Restaurant and cafe designs",
      "Hotel lobby and room concepts",
      "Bar and lounge atmospheres",
      "Theme development and execution",
      "Durable material selection",
      "Acoustic and lighting solutions",
    ],
  },
]

export default function InteriorExpertisePage() {
  return (
    <>
    <JsonLd id="schema-service-interior" data={interiorServiceSchema} />
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-96 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Interior Design Expertise</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming spaces with innovative design solutions tailored to your specific needs
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Interior Design Approach</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At ACIPL, we believe that great interior design is about creating spaces that are not
                  only beautiful but also functional and reflective of the people who use them. Our comprehensive
                  approach combines creativity, technical expertise, and attention to detail to deliver exceptional
                  results.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We work closely with our clients throughout the design process, from initial concept to final
                  installation, ensuring that every aspect of the project meets their needs and exceeds their
                  expectations. Our team of experienced designers brings a wealth of knowledge and creativity to every
                  project, regardless of size or scope.
                </p>
                <p className="text-lg text-gray-700">
                  Whether you're looking to redesign a single room or undertake a complete renovation, we have the
                  expertise and resources to bring your vision to life.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Interior design concept process by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Interior finishes and material selection by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg mt-8"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Interior space planning by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Interior fit-out execution by ACIPL, Bangalore"
                  width={300}
                  height={300}
                  unoptimized
                  className="rounded-lg shadow-lg mt-8"
                />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {interiorExpertise.map((item, index) => (
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
                          alt={`${item.title} — interior design service by ACIPL in Bangalore`}
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
