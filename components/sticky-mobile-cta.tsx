"use client";

import { MessageCircle, Phone } from "lucide-react";

import LeadLink from "@/components/lead-link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackEvent } from "@/lib/tracking";

type StickyMobileCtaProps = {
  sourcePage: string;
  service?: string;
  location?: string;
};

export default function StickyMobileCta({
  sourcePage,
  service,
  location,
}: StickyMobileCtaProps) {
  const eventParams = {
    sourcePage,
    service,
    location,
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a
          href={siteConfig.primaryPhoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
          onClick={() => {
            trackEvent(siteConfig.leadEvents.callClick, eventParams);
          }}
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <LeadLink
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          eventName="lead_whatsapp_click"
          eventParams={eventParams}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </LeadLink>
      </div>
    </div>
  );
}
