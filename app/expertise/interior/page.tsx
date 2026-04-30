import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

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
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Interior design process"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Interior design materials"
                  className="rounded-lg shadow-lg mt-8"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Interior design planning"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Interior design execution"
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
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto object-cover"
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
  )
}
