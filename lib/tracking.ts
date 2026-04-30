"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadEventName =
  | "lead_form_submit"
  | "lead_whatsapp_click"
  | "lead_call_click"
  | "lead_email_click"
  | "lead_quote_request"
  | "lead_consultation_booking";

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
