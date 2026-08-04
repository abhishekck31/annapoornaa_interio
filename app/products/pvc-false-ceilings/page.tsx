import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "PVC False Ceilings in Bangalore | Panels & Soffit Ceilings | ACIPL",
  description:
    "PVC false ceilings in Bangalore — moisture-resistant panels, tiles, perforated and backlit systems for balconies, bathrooms, utilities and commercial interiors. Supplied and installed.",
  path: "/products/pvc-false-ceilings",
  image: "/PVC-Panels.jpg",
  imageAlt: "PVC false ceiling panels installed by ACIPL in Bangalore",
  keywords: [
    "PVC false ceiling Bangalore",
    "PVC ceiling panels Bangalore",
    "false ceiling contractors Bangalore",
    "soffit ceiling Bangalore",
  ],
});


const PVCFalseCeilingsPage = () => {
  const features = [
    "Lightweight and easy to install",
    "Water and moisture resistant",
    "Low maintenance requirements",
    "Fire retardant properties",
    "Wide range of designs and patterns",
    "Excellent thermal insulation",
    "Sound absorption capabilities",
    "Long-lasting durability",
  ];

  // New images from the newsoffit folder
  const ceilingImages = [
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.42_7511a6ff.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.41_349229ae.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.42_6e4673b0.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.44_c90fd73c.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.43_24550d78.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.45_9d239f6a.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.47_5acfff2e.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.44_808d72e9.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.44_9976e2f1.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.45_438f0e31.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.42_efe9d2e1.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.43_0432816c.jpg",
    "/newsoffit/WhatsApp Image 2025-04-26 at 21.27.46_a09f72e0.jpg",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-24 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Soffit False Ceilings
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Modern, lightweight, and water-resistant false ceiling
              solutions for enhanced interior aesthetics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/newsoffit/WhatsApp Image 2025-04-26 at 21.27.44_c90fd73c.jpg"
                alt="Soffit False Ceilings"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
               Wide range of false ceilings
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                False ceilings offer a wide variety of design and material options,
                allowing for both aesthetic enhancement and practical benefits like hiding 
                wiring and improving insulation.Common materials include gypsum, POP(Plaster of Paris),
                metal and wood. The choice of materials depends on factors like budget, desired design, and the room's specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking for simple elegant panels or decorative
                designs, our range of soffit false ceilings can transform any space
                while ensuring long-lasting durability and easy maintenance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Soffit Ceiling Designs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {ceilingImages.map((imageSrc, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={imageSrc}
                      alt={`Soffit Ceiling Design ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PVCFalseCeilingsPage;
