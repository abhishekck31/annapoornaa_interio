"use client"

import { useEffect } from "react"

import { trackEvent } from "@/lib/analytics"

/**
 * One document-level listener that reports every phone, WhatsApp and email link
 * click on the site to GA4, so no individual button has to remember to.
 *
 * Optional `data-cta="hero"` (or similar) on a link, or on any ancestor, is sent
 * as `cta_location` so clicks can be split by where on the page they happened.
 */
export default function ConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute("href") ?? ""
      const ctaLocation = link.closest("[data-cta]")?.getAttribute("data-cta") ?? undefined
      const linkText = (link.textContent ?? "").trim().slice(0, 60) || undefined

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          phone_number: href.slice(4),
          cta_location: ctaLocation,
          link_text: linkText,
        })
      } else if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        trackEvent("whatsapp_click", { cta_location: ctaLocation, link_text: linkText })
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { cta_location: ctaLocation })
      }
    }

    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}
