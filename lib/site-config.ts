export const siteConfig = {
  name: "ACIPL",
  legalName: "Annapoorneshwari Constructions Interiors Private Limited",
  domain: "https://www.ac-ipl.in",
  defaultOgImage: "/images/logo.png",
  description:
    "Interior design, renovation, construction, and building product solutions for homes and businesses across Bangalore.",
  email: "info@ac-ipl.in",
  phones: ["+91 99000 94942", "+91 80731 41413"],
  primaryPhoneHref: "tel:+919900094942",
  secondaryPhoneHref: "tel:+918073141413",
  whatsappNumber: "918073141413",
  whatsappMessage:
    "Hello! I would like a consultation for my interior or construction project in Bangalore.",
  address: {
    streetAddress: "1st floor, #395, 8th B Main, 14th B Cross, 2nd stage, B Sector",
    addressLocality: "Yelahanka New Town",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  geo: {
    latitude: 13.1006,
    longitude: 77.5963,
  },
  serviceAreas: [
    "Yelahanka",
    "Whitefield",
    "HSR Layout",
    "Koramangala",
    "Indiranagar",
    "Jayanagar",
    "JP Nagar",
    "Hebbal",
    "Electronic City",
    "Marathahalli",
    "Rajajinagar",
    "Banashankari",
    "BTM Layout",
    "Malleshwaram",
    "Bangalore",
  ],
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  businessHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  leadEvents: {
    formSubmit: "lead_form_submit",
    whatsappClick: "lead_whatsapp_click",
    callClick: "lead_call_click",
    emailClick: "lead_email_click",
    quoteRequest: "lead_quote_request",
    consultationBooking: "lead_consultation_booking",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const primarySiteUrl = new URL(siteConfig.domain);
