import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ChairsPage = () => {
  const features = [
    "Ergonomic design",
    "Premium quality materials",
    "Adjustable features",
    "Lumbar support",
    "Breathable mesh options",
    "Multiple color choices",
    "Durable construction",
    "Warranty coverage",
  ];

  const products = [
    {
      name: "Executive Chair",
      description:
        "Premium chairs designed for comfort and style in executive offices.",
      image: "/Chairs/Chairs - Executive.jpg",
    },
    {
      name: "Task Chair",
      description:
        "Ergonomic chairs perfect for long hours of work and enhanced comfort.",
      image: "/Chairs/Chairs - Task.jpg",
    },
    {
      name: "Mesh Chair",
      description: "Breathable mesh chairs for enhanced comfort and Minimal looks.",
      image: "/Chairs/Chairs - Mesh.jpg",
    },
    {
      name: "Visitor Chair",
      description:
        "Comfortable visitor chairs ideal for reception and waiting areas.",
      image: "/Chairs/Chairs - Visitor.jpg",
    },
    {
      name: "Designer Chair",
      description:
        "Stylish designer chairs that add a modern touch to any space.",
      image: "/Chairs/Chairs - Designer.jpg",
    },
    {
      name: "Conference Chair",
      description:
        "Conference chairs that combine comfort and functionality for meeting rooms.",
      image: "/Chairs/Chairs - Conference.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mt-32 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Office Chairs
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ergonomic and stylish seating solutions for your workplace
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/Chairs/Chairs - Main.jpg"
                alt="Office Chairs"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Premium Office Seating
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our collection of office chairs combines ergonomic design with
                superior comfort, ensuring productive workdays and proper
                posture. Each chair is crafted with attention to detail and
                quality materials.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From executive chairs to task seating, we offer a wide range of
                options to suit your specific needs and office environment. All
                our chairs are built to last and come with comprehensive
                warranty coverage.
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
              Our Chair Collection
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

export default ChairsPage;
