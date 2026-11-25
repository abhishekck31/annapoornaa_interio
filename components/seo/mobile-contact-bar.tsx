import { CalendarCheck, MessageCircle, Phone } from "lucide-react"

import { siteConfig, whatsappLink } from "@/lib/seo/site"

/**
 * Phone-only sticky Call / WhatsApp / Site visit bar for the landing pages.
 *
 * It is a server component with plain links, so it adds no client JS. Clicks
 * are reported by ConversionTracker. While it is on the page, globals.css hides
 * the floating WhatsApp button (the bar already has one) and lifts the scroll
 * buttons above it.
 */
export default function MobileContactBar({ enquiryMessage }: { enquiryMessage: string }) {
  return (
    <nav
      aria-label="Contact ACIPL"
      data-cta="mobile_sticky_bar"
      className="mobile-contact-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-gray-200 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${siteConfig.telephone}`}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold text-navy-900"
      >
        <Phone className="h-5 w-5" /> Call
      </a>
      <a
        href={whatsappLink(enquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 bg-green-600 py-2.5 text-xs font-semibold text-white"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <a
        href="#site-visit"
        className="flex flex-col items-center justify-center gap-1 bg-gold-600 py-2.5 text-xs font-semibold text-navy-900"
      >
        <CalendarCheck className="h-5 w-5" /> Site Visit
      </a>
    </nav>
  )
}
