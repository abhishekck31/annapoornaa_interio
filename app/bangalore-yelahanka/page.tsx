import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, MapPin, Star, ArrowRight, Building, Home, Briefcase, Paintbrush, Quote } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import TrustSignals from "@/components/trust-signals"

export const metadata: Metadata = {
  title: "Best Interior Design & Construction Services in Bangalore & Yelahanka | Annapoornaa Interio",
  description:
    "Premium interior design and construction services in Bangalore and Yelahanka. Specializing in home and office interiors, renovation, and high-quality products like UPVC windows, fire doors, and more.",
  keywords:
    "interior design Bangalore, construction Yelahanka, home interior Bangalore, office interior Yelahanka, renovation services Bangalore, UPVC windows Yelahanka, fire doors Bangalore,  Yelahanka, false ceilings Bangalore, workstations Yelahanka",
  alternates: {
    canonical: `https://www.annapoornaainterio.com/bangalore-yelahanka`,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const BangaloreYelahankaPage = () => {
  const services = [
    {
      title: "Home Interior Design in Bangalore",
      icon: <Home className="h-10 w-10 text-gold-500" />,
      description:
        "Transform your Bangalore home with our expert interior design services tailored to local aesthetics and preferences.",
      link: "/services#home-interior",
    },
    {
      title: "Office Interior Design in Yelahanka",
      icon: <Briefcase className="h-10 w-10 text-gold-500" />,
      description:
        "Create productive and inspiring workspaces in Yelahanka with our office interior solutions designed for Bangalore businesses.",
      link: "/services#office-interior",
    },
    {
      title: "Construction Services in Bangalore",
      icon: <Building className="h-10 w-10 text-gold-500" />,
      description:
        "Build your dream property in Bangalore with our professional construction services that understand local regulations and requirements.",
      link: "/services#construction",
    },
    {
      title: "Renovation Services in Yelahanka",
      icon: <Paintbrush className="h-10 w-10 text-gold-500" />,
      description:
        "Revitalize your existing spaces in Yelahanka with our comprehensive renovation services tailored to Bangalore's unique architecture.",
      link: "/services#renovation",
    },
  ]

  const products = [
    {
      title: "UPVC Windows & Doors in Bangalore",
      description:
        "Energy-efficient, durable UPVC windows and doors designed for Bangalore's climate and architectural styles.",
      link: "/products/upvc-windows-doors",
    },
    {
      title: "Fire Doors in Yelahanka",
      description:
        "Safety-compliant fire doors meeting Bangalore building codes and regulations for residential and commercial buildings.",
      link: "/products/fire-doors",
    },
    {
      title: "False Ceilings in Yelahanka",
      description:
        "Lightweight, water-resistant false ceiling solutions perfect for Bangalore's climate and modern interiors.",
      link: "/products/pvc-false-ceilings",
    },
    {
      title: "Office Workstations in Bangalore",
      description:
        "Ergonomic and efficient workstation solutions for Bangalore's modern office environments and corporate spaces.",
      link: "/products/workstations",
    },
    {
      title: "Premium Chairs for Yelahanka Offices",
      description:
        "Comfortable, stylish, and ergonomic chairs for offices, homes, and commercial spaces throughout Bangalore and Yelahanka.",
      link: "/products/chairs",
    },
  ]

  const testimonials = [
    {
      name: "Darhini B S",
      location: "Bangalore",
      testimonial:
        "I would like to extend my sincere appreciation for the outstanding interior work done by Annapoornaa Interio. From the initial design, concepts to the final execution, every detail has been handled with exceptional professionalism and creativity.Mr. Raghu the proprietor takes the effort to personally inspect the works regularly and the team works tirelessly to ensure the work is top-notch. From the initial design, concepts to the final execution, every detail has been handled with exceptional professionalism and creativity.Mr. Raghu the proprietor takes the effort to personally inspect the works regularly and the team works tirelessly to ensure the work is top-notch.The craftsmanship, choice of materials, and attention to detail truly reflect a high standard of excellence. The space has been transformed beautifully, balancing aesthetics with functionality. The team's dedication, timely delivery, and willingness to accommodate our preferences made the entire experience seamless and enjoyable.Thank you for your hard work and commitment to quality. I highly recommend Annapoornaa Interio to anyone looking for superior interior design and execution.",
      rating: 5,
    },
    {
      name: "Satish Krishnan",
      location: "Bangalore",
      testimonial:
        "Good work done by Annapoornaa Interio. I got their reference from a known friends circle. My house was 15+ years old and there was good amount of renovation need to be done. Ragu and team did a fabulous job in understanding the issues, consulting design specialists and executing seamlessly. What we liked the most is the professional approach, constant communication with owners, taking efforts to execute as per plan and also suggesting measures for improvement. Overall delighted with their work and would recommend anyone who is planning for their new home design or renovation. Kudos to their entire team !",
      rating: 5,
    },
    {
      name: "Rashmitha Alva",
      location: "Bangalore",
      testimonial:
        "Very good interior company. No where less than the any top brands in market. Completed our project on time and looks exactly the same as we dreamed. Quality of the materials is also good. entire team is very patient and helpful. Definitely the budget friendly interior. I would love to refer to our friends and family.",
      rating: 5,
    },
    {
      name: "Deepa Nagarajan",
      location: "Bangalore",
      testimonial:
        "I had a great experience with the team of Annapoornaa Interio. They executed a wide range of works for us like UPVC windows, all doors including gates, HPL cladding for the exterior elevation, exterior false ceiling works, balcony railings, skylights, shower enclosures, wooden flooring, waterproofing etc Mr. Raghu the owner takes the effort to personally inspect the works regularly and do a quality check. Name the work and he got it done for us. His team of site supervisors also oversee the work. Special thanks to Thangavelu for being responsive. There is no compromise on quality. Highly appreciate and thank Annapoornaa Interiors for making our house a lovely home!",
      rating: 5,
    },
    {
      name: "Satish Kumar",
      location: "Bangalore",
      testimonial:
        "I am Satish, working as an Admin Manager at SMEC India Pvt. Ltd., a Singapore-based company. We recently engaged Annapoornaa Interio for our office interior work, and I am extremely pleased with the outcome. The team delivered high-quality work within the committed timeline, showcasing exceptional professionalism and responsiveness throughout the project. Their attention to detail, efficient project management, and commitment to excellence truly set them apart. I highly recommend Annapoornaa for any office interior projects.",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="pt-56 pb-36 bg-navy-900 text-white relative overflow-hidden">
        {/* Subtle background pattern could go here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4 text-gold-500 font-medium">
                <MapPin className="h-6 w-6 mr-2" />
                <span className="uppercase tracking-wider">Flagship Services in Bangalore & Yelahanka</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 italic leading-tight">
                Premium <span className="text-gold-500">Interior & Construction</span> in Bangalore
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Transforming spaces across Bangalore and Yelahanka with innovative design solutions and world-class craftsmanship since 2010. Our office in Yelahanka New Town serves as a hub for excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all h-auto">
                    Get a Free Consultation
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl shadow-lg transition-all h-auto"
                  >
                    View Bangalore Projects
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-800">
              <Image
                src="/updated-homein.jpg"
                alt="Premium Interior Design in Bangalore & Yelahanka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Why Choose Us in Bangalore */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Why Choose Annapoornaa Interio in Bangalore & Yelahanka
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand Bangalore's unique architectural styles, climate considerations, and local preferences to
              deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-navy-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600">
                  With over 10 years of experience in Bangalore and Yelahanka, we understand local building codes,
                  climate considerations, and design preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-navy-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Star className="h-7 w-7 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Bangalore's Top-Rated</h3>
                <p className="text-gray-600">
                  Recognized as one of Bangalore's top interior design and construction companies with hundreds of
                  successful projects across the city.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-navy-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Quality Materials</h3>
                <p className="text-gray-600">
                  We source the highest quality materials available in Bangalore, ensuring durability and performance in
                  local conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services in Bangalore */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services in Bangalore & Yelahanka</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive design and construction solutions tailored for Bangalore homes and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-gold-300 overflow-hidden cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-navy-50 p-3 rounded-full mr-4">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="text-gold-600 font-medium flex items-center group">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products for Bangalore */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Premium Products for Bangalore & Yelahanka
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality products designed for Bangalore's climate and architectural styles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link href={product.link} key={index}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-gold-300 overflow-hidden cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-gold-600 font-medium flex items-center group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Bangalore Clients Say</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients in Bangalore and Yelahanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-bold text-navy-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Areas We Serve in Bangalore</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services are available throughout Bangalore with special focus on these neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Yelahanka",
              "Hebbal",
              "Jakkur",
              "Sahakara Nagar",
              "RT Nagar",
              "Koramangala",
              "Indiranagar",
              "Whitefield",
              "Electronic City",
              "JP Nagar",
              "Jayanagar",
              "Bannerghatta Road",
              "Marathahalli",
              "HSR Layout",
              "BTM Layout",
              "Sarjapur Road",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg text-center hover:bg-navy-50 transition-colors duration-300"
              >
                <p className="font-medium text-navy-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space in Bangalore?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <Link href="/contact" className="text-gold-600 underline">Contact us</Link> today for a free consultation and quote. Our Bangalore team is ready to bring your vision to
            life.
          </p>
          <Link href="/#contact">
            <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Our Bangalore Team
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BangaloreYelahankaPage
