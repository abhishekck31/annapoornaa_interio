export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Site-wide FAQ data used both on the /faq page and in the FAQPage JSON-LD schema.
 * Questions are chosen to match high-volume "People Also Ask" queries for interior
 * design and construction in Bangalore.
 */
export const siteFaqs: FaqItem[] = [
  {
    question: "What is the cost of interior design in Bangalore?",
    answer:
      "Interior design costs in Bangalore typically range from ₹800 to ₹1,500+ per sq ft depending on the material grade and scope. A 2BHK full interior (modular kitchen, wardrobes, false ceilings, living and dining) averages ₹6–12 lakhs. ACIPL provides a detailed itemised estimate before work begins.",
  },
  {
    question: "How much does a 3BHK interior cost in Bangalore?",
    answer:
      "A 3BHK full interior in Bangalore costs between ₹10–20 lakhs depending on finish level, the number of modular units, false ceiling complexity, and flooring choices. ACIPL offers budget, premium, and luxury tiers with transparent pricing.",
  },
  {
    question: "How much does a modular kitchen cost in Bangalore?",
    answer:
      "A modular kitchen in Bangalore costs ₹1.5–5 lakhs depending on size, shutter material (membrane, acrylic, veneer), hardware brand, and appliance integration. ACIPL's modular kitchen packages start at ₹1.8 lakhs for a 10 ft straight kitchen.",
  },
  {
    question: "What areas in Bangalore does ACIPL serve?",
    answer:
      "ACIPL serves all major Bangalore localities including Yelahanka, Whitefield, Koramangala, HSR Layout, Indiranagar, Jayanagar, JP Nagar, Hebbal, Electronic City, Marathahalli, Rajajinagar, Banashankari, BTM Layout, and Malleshwaram. Our office is in Yelahanka New Town.",
  },
  {
    question: "How long does a home interior project take?",
    answer:
      "Typical timelines: a 2BHK or 3BHK full interior takes 35–45 days for execution after design approval. Modular kitchens take 20–25 days. Full home renovation takes 60–90 days. New construction projects range from 12–18 months depending on built-up area and approvals.",
  },
  {
    question: "Does ACIPL handle turnkey construction in Bangalore?",
    answer:
      "Yes. ACIPL is a full-scope civil contractor handling everything from architectural design and structural construction to plumbing, electrical, flooring, and final interior finishing — all under one contract with a single point of accountability.",
  },
  {
    question: "Do you offer office interior design in Bangalore?",
    answer:
      "Yes. ACIPL designs and executes commercial office interiors including open workstations, cabin layouts, conference rooms, reception areas, false ceilings, and IT infrastructure coordination. We serve startups, corporates, and co-working operators across Bangalore.",
  },
  {
    question: "What is the warranty on modular interiors by ACIPL?",
    answer:
      "ACIPL offers a 5-year warranty on modular interiors covering manufacturing defects and hardware failures. Site workmanship such as civil, plumbing, and electrical is covered by a 1-year workmanship warranty.",
  },
  {
    question: "Can ACIPL help with a home renovation in Bangalore?",
    answer:
      "Yes. ACIPL handles complete home renovations including kitchen remodelling, bathroom upgrades, flooring replacement, false ceiling installation, painting, and electrical rewiring. We provide a room-wise scope and cost breakdown before starting.",
  },
  {
    question: "How do I get a quote from ACIPL?",
    answer:
      "You can call or WhatsApp ACIPL at +91 99000 94942, submit the contact form on the website, or visit the office in Yelahanka New Town, Bangalore. Consultations and site visits are free of charge.",
  },
];
