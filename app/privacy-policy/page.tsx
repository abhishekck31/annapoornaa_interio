import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Annapoorneshwari Constructions Interiors",
  description: "Privacy Policy for Annapoorneshwari Constructions Interiors Private Limited",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-40 pb-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mb-12 rounded-full"></div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              At Annapoorneshwari Constructions Interiors Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. This may include your name, email address, phone number, and project details.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. These uses include providing quotes, communicating with you about projects, and improving our services.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade any of your information with third parties for their promotional purposes.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this notice, you may email us or contact us by post at our registered office address in Bangalore.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
