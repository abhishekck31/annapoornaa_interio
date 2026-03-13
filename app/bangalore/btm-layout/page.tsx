import { Metadata } from 'next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { services } from "@/data/services-data";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from '@/components/cta-section';

const LOCALITY = 'Btm Layout';
const CITY = 'Bangalore';
const COMPANY = 'Annapoornaa Interio';

export const metadata: Metadata = {
    title: `Best Interior Designers in ${LOCALITY}, ${CITY} | ${COMPANY}`,
    description: `Looking for top interior designers in ${LOCALITY}, ${CITY}? ${COMPANY} provides luxury home interiors, modular kitchens, and turnkey construction services in ${LOCALITY}. Book a free consultation today!`,
    keywords: [`interior designers in ${LOCALITY}`, `best interior designers ${LOCALITY}`, `home interiors ${LOCALITY}`, `office interiors ${LOCALITY}`, `${LOCALITY} interior design company`],
    alternates: {
        canonical: `https://annapoornaainterio.com/bangalore/${LOCALITY.toLowerCase().replace(/\s+/g, '-')}`,
    },
}

export default function LocalityPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section Replacements/Adjustments for Locality */}
            <section className="relative pt-32 pb-20 bg-navy-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-gold-500 font-medium mb-4">
                                <MapPin className="h-5 w-5" />
                                <span>Premium Interior Services in {LOCALITY}, {CITY}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">
                                Transforming Spaces in <span className="text-gold-500">{LOCALITY}</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8">
                                {COMPANY} is the most trusted interior design and construction company in {LOCALITY}. From luxury villas to smart apartments, we deliver excellence.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact">
                                    <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-8 py-4 rounded-xl shadow-lg transition-all">
                                        Free Design Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-800">
                            <Image
                                src="/updated-homein.jpg"
                                alt={`Interior Design in ${LOCALITY}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us in Locality */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Why We Are the Best Interior Designers in {LOCALITY}
                        </h2>
                        <div className="w-24 h-1.5 bg-gold-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Local Presence", desc: `Our deep understanding of ${LOCALITY}'s architecture and client preferences makes us the ideal choice.` },
                            { title: "Quality Guarantee", desc: "We use only premium materials and follow a rigorous 150-point quality check for all projects." },
                            { title: "On-time Delivery", desc: "Transparent timelines and strict adherence to schedules ensure your project is handed over on time." }
                        ].map((item, i) => (
                            <Card key={i} className="border-none shadow-xl hover:-translate-y-2 transition-transform">
                                <CardContent className="p-8">
                                    <CheckCircle className="h-10 w-10 text-gold-500 mb-4" />
                                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services in Locality */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                                Complete Interior & Construction Solutions
                            </h2>
                            <p className="text-lg text-gray-700 mb-8">
                                Whether you're looking for a modular kitchen in {LOCALITY} or a full-home renovation, our team handles everything. We bring technical precision and creative flair to every project.
                            </p>
                            <div className="space-y-4">
                                {["Luxury Home Interiors", "Modular Kitchens & Wardrobes", "Office & Commercial Design", "Turnkey Building Construction"].map((s, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <Sparkles className="h-5 w-5 text-gold-500" />
                                        <span className="font-semibold text-navy-900 font-medium">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg mt-8">
                                <Image src="/Const1.png" fill alt="Construction" className="object-cover" />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                                <Image src="/Updated-officein-services.jpg" fill alt="Office Interiors" className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}

