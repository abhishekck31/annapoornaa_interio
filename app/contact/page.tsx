"use client"

import { Metadata } from 'next'
import React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Contact Us | Annapoornaa Interio - Interior Designers Bangalore',
  description: 'Contact Annapoornaa Interio for interior design services in Bangalore. Free consultation, expert team, quality workmanship.',
}
import { Mail, MapPin, Phone, Sparkles } from "lucide-react"
import FormspreeForm from "./FormspreeForm"

export default function ContactPage() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

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
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gold-300 mb-1">Email Us</h4>
                    <p className="text-gray-300">info@annapoornainterio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gold-300 mb-1">Call Us</h4>
                    <p className="text-gray-300">+91 99000 94942</p>
                    <p className="text-gray-300">+91 80731 41413</p>
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
        </div>
      </section>
      <Footer />
    </main>
  )
}
