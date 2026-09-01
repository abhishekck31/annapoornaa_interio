import type { FaqItem } from "./schema"

/**
 * FAQ copy for the hand-built location pages under `app/` that predate the
 * `/[slug]` landing-page registry. These pages render the same questions and
 * answers as visible accordion content; the arrays here mirror that copy
 * verbatim so the FAQPage JSON-LD stays in lockstep with what the user sees
 * (Google treats mismatched FAQ markup as a violation).
 *
 * The `/[slug]` landing pages don't use this — they get their FAQs straight
 * from `landing-pages.ts`.
 */

/**
 * The four `interior-designers-in-<area>-bangalore` pages share one templated
 * FAQ block that differs only by locality. `short` is the bare area name
 * ("HSR Layout"); the long form appends " Bangalore".
 */
export function interiorDesignerLocationFaqs(short: string): FaqItem[] {
  const long = `${short} Bangalore`
  return [
    {
      question: `What makes you the best Interior Designers in ${long}?`,
      answer:
        "We combine years of expertise, premium quality materials, and a transparent process to deliver exceptional living spaces. Our personalized approach and commitment to deadlines are what make our design team highly sought after.",
    },
    {
      question: "Do you handle both residential and commercial interior projects?",
      answer:
        `Yes! While we are renowned for residential setups, we also have a dedicated team for corporate and retail spaces, making us a leading choice for Office Interior Designers in ${short} as well.`,
    },
    {
      question: "What is the typical timeline for an interior design project?",
      answer:
        "The timeline varies based on the size and complexity of the space. Generally, a standard 3BHK residential interior project takes between 45 to 60 days from finalization of design to handover.",
    },
    {
      question: "Do your services include modular kitchens?",
      answer:
        `Absolutely. We are recognized as top Modular Kitchen Designers in ${short}. We provide intelligent, space-saving, and highly aesthetic modular kitchen solutions tailored to your specific cooking habits and preferences.`,
    },
    {
      question: "Are there any hidden costs involved in your projects?",
      answer:
        "No. Transparency is one of our core values. Before the project begins, we provide a comprehensive estimate. As an ethical design firm, we ensure you know exactly what you are paying for with zero surprises.",
    },
    {
      question: "Do you specialize in luxury or high-end interiors?",
      answer:
        `Yes, our team includes specialized Luxury Interior Designers in ${long} who focus on premium materials, bespoke furniture, and lavish aesthetics to bring high-end visions to life.`,
    },
    {
      question: "Is customized or modular furniture included in your services?",
      answer:
        "We offer both. Depending on your budget and requirements, our factory-finished modular furniture or on-site customized carpentry can be incorporated seamlessly into your project by our experts.",
    },
  ]
}

/** `app/interior-designers-in-yelahanka/page.tsx` */
export const yelahankaInteriorFaqs: FaqItem[] = [
  {
    question: "What makes you the best interior designers in yelahanka?",
    answer:
      "We combine years of expertise, premium quality materials, and a transparent process to deliver exceptional living spaces. Our personalized approach and commitment to deadlines are what make our interior designers in yelahanka highly sought after.",
  },
  {
    question: "Do you handle both residential and commercial interior projects?",
    answer:
      "Yes! While we are renowned as home interior designers in yelahanka, we also have a dedicated team for corporate and retail spaces, making us a leading choice for commercial interior design as well.",
  },
  {
    question: "What is the typical timeline for an interior design project?",
    answer:
      "The timeline varies based on the size and complexity of the space. Generally, a standard 3BHK residential interior project takes between 45 to 60 days from finalization of design to handover.",
  },
  {
    question: "Do your services include 3D design and planning?",
    answer:
      "Absolutely. We provide complete turnkey solutions. This means our experts will provide detailed 2D space planning and 3D renderings before any actual execution begins, ensuring you know exactly what the final outcome will look like.",
  },
  {
    question: "Are there any hidden costs involved in your projects?",
    answer:
      "No. Transparency is one of our core values. Before the project begins, we provide a comprehensive estimate. As an ethical design firm, we ensure you know exactly what you are paying for with zero surprises.",
  },
  {
    question: "Do you specialize in luxury or high-end interiors?",
    answer:
      "Yes, our team includes specialized luxury interior designers in yelahanka who focus on premium materials, bespoke furniture, and lavish aesthetics to bring high-end visions to life.",
  },
  {
    question: "Is customized or modular furniture included in your services?",
    answer:
      "We offer both. Depending on your budget and requirements, our factory-finished modular furniture or on-site customized carpentry can be incorporated seamlessly into your project.",
  },
]

/** `app/home-construction-services-in-yelahanka/page.tsx` */
export const yelahankaConstructionFaqs: FaqItem[] = [
  {
    question: "What makes you the best home construction services in yelahanka?",
    answer:
      "We combine years of local expertise, premium materials, and a transparent process to deliver exceptional homes. Our commitment to quality and timeline adherence makes our home construction services in yelahanka highly sought after.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes! While we are renowned as a top residential construction company in yelahanka, we also have a dedicated team for corporate and retail spaces, making us a leading commercial construction company in yelahanka as well.",
  },
  {
    question: "What is the typical timeline for a new home construction?",
    answer:
      "The timeline varies based on the size and complexity of the project. Generally, a standard residential project takes between 8 to 12 months from foundation to handover. As a trusted construction company yelahanka, we provide a detailed schedule before starting.",
  },
  {
    question: "Do your building construction services yelahanka include architectural design?",
    answer:
      "Absolutely. We provide complete turnkey solutions, which means our building construction services yelahanka cover architectural planning, structural engineering, 3D elevations, and interior design.",
  },
  {
    question: "Are there any hidden costs involved in your projects?",
    answer:
      "No. Transparency is one of our core values. Before the project begins, we provide a comprehensive bill of quantities (BOQ). As an ethical home construction company yelahanka, we ensure you know exactly what you are paying for.",
  },
  {
    question: "Do you help with building approvals and permits in Yelahanka?",
    answer:
      "Yes, our team assists you with all the necessary BBMP approvals, plan sanctions, and legal compliance required for construction in the Yelahanka region.",
  },
]
