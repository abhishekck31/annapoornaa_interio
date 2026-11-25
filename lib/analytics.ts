/**
 * GA4 event helpers.
 *
 * `gtag` is defined by the inline bootstrap in app/layout.tsx, which runs
 * before the page is interactive. The gtag.js library itself loads lazily, and
 * events sent before it arrives wait in `dataLayer` and go out once it loads.
 *
 * Event names are documented in reports/acipl-conversion-tracking-plan.md.
 * Mark them as key events in the GA4 admin before treating them as conversions.
 */

export type LeadEvent =
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "contact_form_submit"
  | "site_visit_request"

type Params = Record<string, string | number | undefined>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(name: LeadEvent, params: Params = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  })
}
