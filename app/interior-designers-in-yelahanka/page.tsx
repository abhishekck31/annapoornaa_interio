import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"
import { CheckCircle, Home, HardHat, Building2, ShieldCheck, MapPin, Star, Award, Clock, HeartHandshake } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { projects } from "@/data/projects-data"

export const metadata: Metadata = {
  title: { absolute: "Interior Designers in Yelahanka, Bangalore | ACIPL" },
  description: "Looking for expert interior designers in Yelahanka? ACIPL offers premium home and office interior design, modular kitchens and turnkey fit-outs across Yelahanka and North Bangalore.",
  alternates: {
    canonical: 'https://www.ac-ipl.in/interior-designers-in-yelahanka',
  },
}

export default function YelahankaInteriorDesignersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-96 mt-32 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Premium <span className="text-secondary">Interior Designers in Yelahanka</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Transforming your living and workspace into a masterpiece. As the best interior designers in yelahanka, we bring creativity, functionality, and unmatched aesthetics to every project.
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
                Why Choose Our Interior Designers in Yelahanka?
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary mb-6 rounded-full"></div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Finding the right experts for your space can be overwhelming, but our dedicated team of <strong>home interior designers in yelahanka</strong> makes it a seamless experience. We specialize in curating bespoke environments tailored to your lifestyle and architectural preferences. 
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our reputation is built on delivering high-quality finishes and absolute transparency. When you hire our <strong>interior designers in yelahanka</strong>, you are partnering with professionals who integrate modern design trends with practical functionality.
              </p>
              
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">End-to-end space planning and execution.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Use of premium, certified materials and finishes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">Strict adherence to your budget and timelines.</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Home className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Home Interiors</h3>
                <p className="text-gray-600">The premier home interior designers in yelahanka, creating stunning living spaces.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Building2 className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Office Interiors</h3>
                <p className="text-gray-600">Recognized as top-tier office interior designers in yelahanka for corporate setups.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Star className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Luxury Designs</h3>
                <p className="text-gray-600">Your go-to luxury interior designers in yelahanka for lavish, bespoke aesthetics.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-md">
                <Award className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Expert Decorators</h3>
                <p className="text-gray-600">We are recognized among the top interior decorators in yelahanka bangalore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Solutions by Interior Designers in Yelahanka
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Annapoorneshwari Interio stands as the defining standard when it comes to transforming spaces. Whether you want a cozy modular kitchen or a complete corporate overhaul, our expert <strong>interior designers in yelahanka</strong> provide comprehensive turnkey solutions. 
          </p>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto mb-10 leading-relaxed">
            Many clients look for reliable experts who can handle everything from 2D space planning to the final execution. By choosing us, you are collaborating with the <strong>best interior designers in yelahanka</strong> who value your investment and vision. We also bring immense expertise to commercial and corporate spaces, serving proudly as dedicated <strong>office interior designers in yelahanka</strong>. Our overarching goal is to elevate your everyday environment.
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
              Our Recent Works
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Take a look at some of the premium spaces we have crafted. Our portfolio reflects our dedication to excellence.
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
                      <img
                        src={project.mainImage || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              10 Reasons to Choose ACIPL
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you need a minor aesthetic upgrade or a full-scale renovation, here is why our <strong>interior designers in yelahanka</strong> stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Unmatched Expertise as top interior decorators in yelahanka bangalore.",
              "100% Transparent Pricing with detailed estimates and zero hidden costs.",
              "Premium Quality Materials sourced from certified top-tier brands.",
              "On-Time Project Delivery to respect your timeline.",
              "End-to-End Solutions from 3D conceptualization to handover.",
              "Vastu-Compliant Designs tailored to your cultural preferences.",
              "Dedicated Project Managers ensuring flawless site execution.",
              "Proven Track Record as luxury interior designers in yelahanka.",
              "Comprehensive Post-Installation Support and warranty services.",
              "Expert In-House Team of visionary designers and craftsmen."
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
                Transforming a house into a home is an emotional journey. Clients choose us not just for our design expertise, but for the peace of mind we offer. We believe in building relationships as strong as our foundations.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                As a highly recognized firm, ACIPL is synonymous with structural integrity, premium aesthetics, and ethical business practices. Our clients are kept in the loop at every stage, with regular updates, quality checks, and open communication channels. 
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
            <p className="text-gray-600 text-lg">Everything you need to know about hiring our interior designers in yelahanka.</p>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                1. What makes you the best interior designers in yelahanka?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We combine years of expertise, premium quality materials, and a transparent process to deliver exceptional living spaces. Our personalized approach and commitment to deadlines are what make our interior designers in yelahanka highly sought after.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                2. Do you handle both residential and commercial interior projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes! While we are renowned as home interior designers in yelahanka, we also have a dedicated team for corporate and retail spaces, making us a leading choice for commercial interior design as well.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                3. What is the typical timeline for an interior design project?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                The timeline varies based on the size and complexity of the space. Generally, a standard 3BHK residential interior project takes between 45 to 60 days from finalization of design to handover.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                4. Do your services include 3D design and planning?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Absolutely. We provide complete turnkey solutions. This means our experts will provide detailed 2D space planning and 3D renderings before any actual execution begins, ensuring you know exactly what the final outcome will look like.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                5. Are there any hidden costs involved in your projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                No. Transparency is one of our core values. Before the project begins, we provide a comprehensive estimate. As an ethical design firm, we ensure you know exactly what you are paying for with zero surprises.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                6. Do you specialize in luxury or high-end interiors?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                Yes, our team includes specialized luxury interior designers in yelahanka who focus on premium materials, bespoke furniture, and lavish aesthetics to bring high-end visions to life.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary">
                7. Is customized or modular furniture included in your services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed">
                We offer both. Depending on your budget and requirements, our factory-finished modular furniture or on-site customized carpentry can be incorporated seamlessly into your project.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  )
}
