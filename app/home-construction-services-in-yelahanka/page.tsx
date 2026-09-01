import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"
import { CheckCircle, Home, HardHat, Building2, ShieldCheck, MapPin, Star, Award, Clock, HeartHandshake } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projects } from "@/data/projects-data"
import JsonLd from "@/components/seo/json-ld"
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo/schema"
import { yelahankaConstructionFaqs } from "@/lib/seo/hand-built-faqs"

export const metadata: Metadata = {
  title: { absolute: "Home Construction Services in Yelahanka, Bangalore | ACIPL" },
  description: "Home construction services in Yelahanka, Bangalore. Trusted residential contractors handling plan sanction, structural design and turnkey builds from foundation to handover.",
  alternates: {
    canonical: 'https://www.ac-ipl.in/home-construction-services-in-yelahanka',
  },
}

export default function YelahankaConstructionPage() {
  return (
    <main className="min-h-screen">
      <JsonLd
        id="schema-home-construction-yelahanka"
        data={[
          serviceSchema({
            name: "Home Construction Services in Yelahanka, Bangalore",
            description:
              "Turnkey residential and commercial construction in Yelahanka, Bangalore — BBMP plan sanction, structural engineering, 3D elevations and stage-linked billing to handover.",
            path: "/home-construction-services-in-yelahanka",
            areaServed: "Yelahanka, Bangalore",
            serviceType: "Construction",
          }),
          faqPageSchema(yelahankaConstructionFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Home Construction Services in Yelahanka", path: "/home-construction-services-in-yelahanka" },
          ]),
        ]}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-96 mt-32 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Premium <span className="text-secondary">Home Construction Services in Yelahanka</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Transforming your dream home into reality. As a leading home construction company yelahanka, we bring decades of expertise to every residential and commercial project in the region.
            </p>
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Our Home Construction Services in Yelahanka?
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                When it comes to building your dream home, selecting the right partner is crucial. Our <strong>home construction services in yelahanka</strong> are tailored to meet the unique architectural preferences and lifestyle requirements of Bangalore's residents. From initial design to final handover, we ensure absolute transparency and uncompromising quality.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                As a highly rated <strong>residential construction company in yelahanka</strong>, our portfolio speaks for itself. We integrate modern construction technologies with skilled craftsmanship to deliver homes that stand the test of time.
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">End-to-end project management and execution.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Use of premium, certified building materials.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Strict adherence to Vastu and local building codes.</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Home className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Residential Excellence</h3>
                <p className="text-gray-600">The premier residential construction company in yelahanka, building custom homes and villas.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Building2 className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Commercial Projects</h3>
                <p className="text-gray-600">Also recognized as a top commercial construction company in yelahanka for office spaces.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Trusted Partner</h3>
                <p className="text-gray-600">Known as a trusted construction company yelahanka with a legacy of on-time delivery.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <HardHat className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Expert Engineers</h3>
                <p className="text-gray-600">Our building construction services yelahanka are backed by structural experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Home Construction Services in Yelahanka
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Annapoorneshwari Constructions stands as the defining standard for <strong>home construction services in yelahanka</strong>. Whether you need an independent house built from scratch, or a large-scale commercial complex, we provide complete turnkey solutions. 
          </p>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Many clients search for a reliable <strong>home construction company yelahanka</strong> that can handle everything from architectural planning to the final coat of paint. By choosing us, you are partnering with a <strong>trusted construction company yelahanka</strong> that values your investment and vision. We also bring immense expertise to corporate infrastructure, serving as a prominent <strong>commercial construction company in yelahanka</strong>. Our overarching goal is to elevate the standard of <strong>building construction services yelahanka</strong> and deliver spaces that inspire.
          </p>
          <Link href="/gallery">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-6 rounded-md text-lg shadow-lg transition-all duration-300">
              View Our Completed Projects
            </Button>
          </Link>
        </div>
      </section>

      {/* Recent Works Carousel Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Recent Works in Yelahanka
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Take a look at some of the premium spaces we have crafted. As a top residential construction company in yelahanka, our portfolio reflects our dedication to excellence.
            </p>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.slice(0, 6).map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative group overflow-hidden rounded-xl h-72 shadow-md">
                      <Image
                        src={project.mainImage || "/placeholder.jpg"}
                        alt={`Home construction project in Yelahanka by ACIPL — ${project.title}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 opacity-90 transition-opacity duration-300">
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gold-400 text-sm">{project.category}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white text-primary border-gray-200 shadow-md hover:bg-slate-50" />
              <CarouselNext className="hidden md:flex -right-12 bg-white text-primary border-gray-200 shadow-md hover:bg-slate-50" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* 10 Reasons Section */}
      <section className="py-16 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              10 Reasons to Choose ACIPL in Yelahanka
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you need home renovation or are looking for a complete home construction service in Yelahanka, here is why we stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Unmatched Expertise as a leading home construction company yelahanka.",
              "100% Transparent Pricing with detailed BOQs and zero hidden costs.",
              "Premium Quality Materials sourced from certified top-tier vendors.",
              "On-Time Project Delivery to respect your timeline and investment.",
              "End-to-End Solutions covering architecture, approvals, and interiors.",
              "Vastu-Compliant Designs tailored to traditional and modern preferences.",
              "Dedicated Project Managers ensuring seamless site execution.",
              "Proven Track Record as a trusted construction company yelahanka.",
              "Comprehensive Post-Construction Support and warranty services.",
              "Expert In-House Team of structural engineers and visionary architects."
            ].map((reason, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-secondary/10 p-2 rounded-full mr-4 flex-shrink-0">
                  <span className="text-secondary font-bold text-lg w-6 h-6 flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 font-medium text-lg pt-1">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
                <Star className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">4.9/5</h3>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-gray-600 font-medium">On-Time Delivery</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center border border-gray-100 shadow-sm">
                <HeartHandshake className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Happy Families</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why People Trust ACIPL
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Building a home is an emotional and financial milestone. Clients choose us not just for our building construction services yelahanka, but for the peace of mind we offer. We believe in building relationships as strong as our foundations.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                As a highly recognized residential and commercial construction company in yelahanka, ACIPL is synonymous with structural integrity and ethical business practices. Our clients are kept in the loop at every stage, with regular site updates, quality checks, and open communication channels. 
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-navy-800 text-white px-8 py-6 rounded-md text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Talk To Our Experts Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to know about our home construction services in yelahanka.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                What makes you the best home construction services in yelahanka?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We combine years of local expertise, premium materials, and a transparent process to deliver exceptional homes. Our commitment to quality and timeline adherence makes our home construction services in yelahanka highly sought after.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                Do you handle both residential and commercial projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes! While we are renowned as a top residential construction company in yelahanka, we also have a dedicated team for corporate and retail spaces, making us a leading commercial construction company in yelahanka as well.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                What is the typical timeline for a new home construction?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                The timeline varies based on the size and complexity of the project. Generally, a standard residential project takes between 8 to 12 months from foundation to handover. As a trusted construction company yelahanka, we provide a detailed schedule before starting.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                Do your building construction services yelahanka include architectural design?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. We provide complete turnkey solutions, which means our building construction services yelahanka cover architectural planning, structural engineering, 3D elevations, and interior design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                Are there any hidden costs involved in your projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No. Transparency is one of our core values. Before the project begins, we provide a comprehensive bill of quantities (BOQ). As an ethical home construction company yelahanka, we ensure you know exactly what you are paying for.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                Do you help with building approvals and permits in Yelahanka?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, our team assists you with all the necessary BBMP approvals, plan sanctions, and legal compliance required for construction in the Yelahanka region.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  )
}
