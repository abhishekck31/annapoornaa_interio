import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Annapoorneshwari Constructions Interiors",
  description: "Terms and Conditions for Annapoorneshwari Constructions Interiors Private Limited",
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="pt-96 mt-32 pb-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Terms and Conditions</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mb-12 rounded-full"></div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to Annapoorneshwari Constructions Interiors Private Limited. These terms and conditions outline the rules and regulations for the use of our Website and Services.
            </p>
            
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. License and Website Access</h2>
            <p>
              Unless otherwise stated, Annapoorneshwari Constructions Interiors Private Limited and/or its licensors own the intellectual property rights for all material on our website. All intellectual property rights are reserved. You may access this from our website for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Service Contracts</h2>
            <p>
              Any design, construction, or interior work undertaken by us will be subject to a separate, detailed contract agreed upon by both parties. These website terms act as a general guide and do not supersede the specific clauses of your signed project agreement.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. User Comments and Content</h2>
            <p>
              Parts of this website may offer an opportunity for users to post and exchange opinions and information in certain areas of the website. We do not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect our views or opinions.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Revisions and Errata</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Governing Law</h2>
            <p>
              Any claim relating to Annapoorneshwari Constructions Interiors Private Limited's website shall be governed by the laws of India without regard to its conflict of law provisions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
