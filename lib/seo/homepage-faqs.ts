import type { FaqItem } from "./schema"

/**
 * Shared by the rendered FAQ section on the homepage and by its FAQPage JSON-LD.
 *
 * Kept in its own module (rather than exported from the "use client" FAQ
 * component) so a server component can import the data without pulling the
 * component across the client boundary. The visible copy and the structured
 * data must stay identical — Google treats mismatched FAQ markup as a violation.
 */
export const homepageFaqs: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of interior and construction services including home interior, office/corporate interiors, residential & commercial construction, renovation, and various products like UPVC windows, doors, fire doors, system railings, false ceilings, and workstations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple interior design project might take 4-6 weeks, while a full construction project could take several months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes, we offer a free initial consultation to understand your requirements, discuss your vision, and provide preliminary guidance. This helps us create a tailored proposal for your project.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-specific and depends on factors such as scope, materials, complexity, and timeline. We provide detailed quotes after the initial consultation, ensuring transparency with no hidden costs.",
  },
  {
    question: "Do you handle permits and regulations?",
    answer:
      "Yes, we handle all necessary permits, approvals, and ensure compliance with local building codes and regulations as part of our service, making the process hassle-free for you.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "You can view our portfolio on our website's gallery section, or we can arrange a visit to some of our completed projects during the consultation phase.",
  },
]
