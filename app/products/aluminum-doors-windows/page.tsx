import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AluminumDoorsWindowsPage = () => {
  const features = [
    "Lightweight yet durable construction",
    "Excellent weather resistance",
    "Low maintenance requirements",
    "Modern and sleek appearance",
    "Wide range of design options",
    "Superior structural strength",
    "Corrosion resistant",
    "Environmentally friendly material",
  ];

  const products = [
    {
      name: "Sliding Door",
      description:
        "Elegant sliding doors perfect for modern homes and offices.",
      image: "/UP-A-Slidingdoor.jpg",
    },
    {
      name: "Sliding Window",
      description:
        "Modern sliding windows that combine functionality with sleek design.",
      image: "/Alumilium Doors and Windows/Alumilium-Slidingwindow.jpg",
    },
    {
      name: "Casement Window",
      description:
        "Durable casement windows that provide excellent ventilation and views.",
      image: "/Alumilium Doors and Windows/Alumilium-Casementwindow.jpg",
    },
    {
      name: "Tilt and Turn",
      description:
        "Versatile windows offering both tilt and turn functionality for maximum convenience.",
      image: "/Alumilium Doors and Windows/Alumilium-Tiltandturn.jpg",
    },
    {
      name: "Bifold Door",
      description:
        "Innovative bifold doors that maximize space and accessibility.",
      image: "/Alumilium Doors and Windows/Alumilium-Bifolddoor.jpg",
    },
    {
      name: "French Door",
      description: "Classic French doors that add elegance to any entrance.",
      image: "/Alumilium Doors and Windows/Alumilium-Frenchdoor.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-24 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Aluminum Doors & Windows
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Modern, durable aluminum windows and doors with sleek designs for
              residential and commercial buildings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/alumainnew.jpg"
                alt="Aluminum Doors and Windows"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Premium Aluminum Solutions
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our aluminum doors and windows represent the perfect blend of
                modern aesthetics and functional design. Built to last, these
                products offer exceptional durability while maintaining a sleek,
                contemporary appearance.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Whether you're looking for sliding windows for your office or
                elegant French doors for your home, our aluminum solutions
                provide the perfect balance of style, security, and
                functionality.
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
              Our Aluminum Collection
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AluminumDoorsWindowsPage;
