import { Metadata } from 'next'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { services } from "@/data/services-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Briefcase,
  Building,
  Paintbrush,
  ClipboardList,
  Hammer,
  PaintBucket,
  PencilRuler,
  ExternalLink,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CollapsibleSection } from "@/components/collapsible-section";

export const metadata: Metadata = {
  title: 'Top Interior Design & Construction Services Bangalore | Renovation Experts',
  description: 'Full-service Home & Office Interiors, House Renovation, and Construction in Bangalore. Expert Architects & Designers. Check our Packages!',
  keywords: [
    'interior design services Bangalore',
    'home interior services Bangalore',
    'office interior services Bangalore',
    'house construction services Bangalore',
    'renovation services Bangalore',
    'PMC services Bangalore',
    'design and drawings Bangalore',
    'Annapoornaa Interio services'
  ],
  metadataBase: new URL('https://annapoornaainterio.com'),
  alternates: {
    canonical: 'https://annapoornaainterio.com/services',
  },
}

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    home: <Home className={className} />,
    briefcase: <Briefcase className={className} />,
    building: <Building className={className} />,
    paint: <PaintBucket className={className} />,
    "clipboard-list": <ClipboardList className={className} />,
    "pencil-ruler": <PencilRuler className={className} />,
  };
  return icons[name] || <Sparkles className={className} />;
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mt-24 pb-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-16 mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8 text-gold-500" />
              Our Excellence in Services
              <Sparkles className="h-8 w-8 text-gold-500" />
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive interior design and construction solutions tailored
              to your specific needs with 3D images and Walkthrough videos
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/20">
                      <IconComponent name={service.iconName} className="h-10 w-10 text-gold-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    {service.pmcSections ? (
                      service.pmcSections.slice(0, 3).map((section, idx) => (
                        <CollapsibleSection
                          key={idx}
                          title={section.title}
                          emoji={section.emoji}
                          items={section.items}
                        />
                      ))
                    ) : (
                      service.designSections?.slice(0, 1).map((section, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                          <h3 className="text-xl font-semibold text-navy-900 mb-4 flex items-center gap-2">
                            <span>{section.emoji}</span> {section.title}
                          </h3>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {section.items.slice(0, 8).map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="text-gold-500">•</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    )}
                  </div>

                  <Link href={`/services/${service.slug}`} className="inline-block group">
                    <button className="flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-800 transition-all shadow-lg hover:shadow-navy-900/20">
                      Explore Full Service Details
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                <div className="flex-1 w-full">
                  <Card className="overflow-hidden shadow-2xl rounded-3xl border-none">
                    <CardContent className="p-0 relative aspect-[4/3] group">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Annapoornaa Interio`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent"></div>
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
  );
}
