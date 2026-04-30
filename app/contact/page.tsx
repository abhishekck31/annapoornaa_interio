import { Metadata } from 'next'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, MapPin, Phone, Sparkles } from "lucide-react"
import FormspreeForm from "./FormspreeForm"
import { buildMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = buildMetadata({
  title: 'Contact ACIPL | Bangalore Consultation and Quotes',
  description:
    'Call, WhatsApp, or send a project brief to discuss interiors, renovation, construction, and product requirements in Bangalore.',
  path: '/contact',
  keywords: ['contact interior designers Bangalore', 'construction quote Bangalore', 'interior consultation Yelahanka'],
})

export default function ContactPage() {

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="mt-32 pt-16 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-gold-500 mr-2" />
              <span className="text-lg text-gray-600 uppercase tracking-wider font-medium">Contact us</span>
              <Sparkles className="h-6 w-6 text-gold-500 ml-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Get In Touch</h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to start your project? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* FORM CARD */}
            <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
              <FormspreeForm />
            </div>
            {/* CONTACT INFO CARD */}
            <div className="bg-navy-900 text-white p-8 rounded-xl shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-gold-400">Contact Information</h3>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gold-300 mb-1">Email Us</h4>
                  <a href="mailto:info@ac-ipl.in" className="text-gray-300 hover:text-white">info@ac-ipl.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gold-300 mb-1">Call Us</h4>
                  <a href={siteConfig.primaryPhoneHref} className="block text-gray-300 hover:text-white">+91 99000 94942</a>
                  <a href={siteConfig.secondaryPhoneHref} className="block text-gray-300 hover:text-white">+91 80731 41413</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-gold-300 mb-1">Our Location</h4>
                  <p className="text-gray-300">1st floor, #395, 8th 'B' Main, 14th 'B' cross, 2nd stage, 'B' sector, Yelahanka New Town, Bangalore - 560064.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full width map below cards */}
        <div className="rounded-xl overflow-hidden shadow-xl h-64 md:h-80 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.4913874230583!2d77.57682457525138!3d13.097041212115355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae195d4e36c281%3A0x65c9d0a66be1de7e!2sAnnapoorneshwari%20constructions%20interiors%20private%20limited!5e1!3m2!1sen!2sin!4v1744939312882!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Annapoorneshwari Constructions Interiors Location"
          ></iframe>
        </div>
      </section>
      <Footer />
    </main>
  )
}
