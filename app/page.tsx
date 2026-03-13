import { Metadata } from "next";
import dynamic from "next/dynamic";

import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import StatsSection from "@/components/stats-section";
import { buildMetadata } from "@/lib/seo";

const ProcessTimeline = dynamic(() => import("@/components/process-timeline"), {
  loading: () => <div className="py-16 bg-white" />,
});
const DifferenceSection = dynamic(() => import("@/components/difference-section"), {
  loading: () => <div className="py-16 bg-white" />,
});
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="py-16 bg-white" />,
});
const ProjectsSection = dynamic(() => import("@/components/projects-section"), {
  loading: () => <div className="py-16 bg-white" />,
});
const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <div className="py-16 bg-white" />,
});
const ClientLogosSection = dynamic(() => import("@/components/client-logos-section"), {
  loading: () => <div className="py-16 bg-white" />,
});

export const metadata: Metadata = buildMetadata({
  title: "Interior Designers and Construction Company in Bangalore | Annapoornaa Interio",
  description:
    "Interior design, renovation, construction, modular kitchens, office interiors, and product solutions across Yelahanka and major Bangalore neighborhoods.",
  path: "/",
  keywords: [
    "interior designers Bangalore",
    "construction company Bangalore",
    "home interiors Yelahanka",
    "office interiors Bangalore",
    "renovation services Bangalore",
    "modular kitchen Bangalore",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ClientLogosSection />
      <ProcessTimeline />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
