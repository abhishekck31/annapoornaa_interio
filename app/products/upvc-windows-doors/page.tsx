import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const UPVCWindowsDoorsPage = () => {
  const features = [
    "Energy efficient with excellent thermal insulation",
    "Sound insulation for a quieter environment",
    "Weather resistant and durable in all conditions",
    "Low maintenance and easy to clean",
    "Enhanced security features",
    "Variety of designs and finishes available",
    "Eco-friendly and recyclable materials",
    "UV resistant - won't fade or discolor",
  ];

  const products = [
    {
      name: "Sliding Window",
      description:
        "Space-saving windows that slide horizontally, perfect for areas with limited space.",
      image: "/UP-Slidingwindow.png",
    },
    {
      name: "Casement Window",
      description:
        "Classic casement windows for excellent ventilation and unobstructed views with a touch of sophistication.",
      image: "/upvc-doors-and-windows/UPVC-Casementwindow.jpg",
    },
    {
      name: "French Door",
      description:
        "Elegant French doors that add a touch of sophistication to any room and minimal look to the walls.",
      image: "/upvc-doors-and-windows/UPVC-Frenchdoors.jpg",
    },
    {
      name: "Tilt and Turn Window",
      description:
        " Versatile tilt and turn windows offer flexible ventilation options while enhancing the modern aesthetic of any space.",
      image: "/UP-T&T.png",
    },
    {
      name: "Bi-Fold Door(Sliding & Folding Door)",
      description:
        "Innovative folding doors for wide openings and seamless transitions and smooth movements.",
      image: "/upvc-doors-and-windows/UPVC-foldingdoors.jpg",
    },
    {
      name: "Sliding Door",
      description:
        "Smooth sliding doors provide effortless access while adding a sleek, modern touch to any space. Designed for convenience and style.",
      image: "/upvc-doors-and-windows/UPVC-Slidingdoors.jpg", //D:\annapoorna-interio\annapoorna-interio\public\upvc-doors-and-windows\UPVC-Slidingdoors.jpg
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-36 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              UPVC Windows & Doors
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              High-quality, energy-efficient UPVC windows and doors for
              residential and commercial buildings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/upvcmainnew.jpg"
                alt="UPVC Windows and Doors"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Premium Quality UPVC Windows & Doors
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our UPVC windows and doors combine style, durability, and energy
                efficiency to enhance your home or office. Made from
                high-quality unplasticized polyvinyl chloride (UPVC), these
                products offer superior insulation, weather resistance, and
                security features.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking for windows that reduce your energy bills
                or doors that enhance your property's security, our UPVC
                solutions are designed to meet your specific needs and
                preferences.
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
              Our UPVC Product Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-700">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="text-gold-600 underline">Contact us</Link> for more information
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UPVCWindowsDoorsPage;
