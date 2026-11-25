"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackEvent } from "@/lib/analytics"

/** Same Formspree form as /contact, so every enquiry lands in one inbox. */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqapreke"

interface Props {
  /** The service this page is about, e.g. "Modular Kitchen". Prefills the form. */
  service: string
  /** The area this page is about, e.g. "Hebbal". Prefills the locality field. */
  area?: string
}

/**
 * Short "book a free site visit" form for the service and location pages.
 * It asks only for what the team needs to call back: name, phone, locality.
 */
export default function SiteVisitForm({ service, area }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get("website")) return // honeypot

    data.set("page", window.location.href)
    data.set("_subject", `Site visit request: ${service}${area ? ` in ${area}` : ""}`)

    setStatus("sending")
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!response.ok) throw new Error(`Formspree returned ${response.status}`)
      trackEvent("site_visit_request", { form_name: "landing_site_visit", service, area })
      setStatus("sent")
      form.reset()
    } catch (error) {
      console.error("Site visit form failed", error)
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" />
        <p className="text-lg font-semibold text-navy-900">Thank you. We have your request.</p>
        <p className="mt-2 text-gray-600">
          Our team will call you to fix a convenient time for the site visit.
        </p>
      </div>
    )
  }

  const field = "w-full border-gray-300 bg-white focus:border-gold-500 focus:ring-gold-500"

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Book a free site visit">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="service" value={service} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sv-name" className="mb-1 block text-sm font-medium text-gray-700">
            Your name *
          </label>
          <Input id="sv-name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="sv-phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone number *
          </label>
          <Input
            id="sv-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern="[0-9+\s\-]{10,15}"
            title="A 10-digit mobile number, with or without +91"
            className={field}
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sv-area" className="mb-1 block text-sm font-medium text-gray-700">
            Locality / area
          </label>
          <Input id="sv-area" name="area" defaultValue={area} className={field} />
        </div>
        <div>
          <label htmlFor="sv-property" className="mb-1 block text-sm font-medium text-gray-700">
            Property type
          </label>
          <select
            id="sv-property"
            name="property_type"
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
          >
            <option value="">Select</option>
            <option>Apartment</option>
            <option>Independent house / villa</option>
            <option>Empty plot</option>
            <option>Office / commercial space</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="sv-message" className="mb-1 block text-sm font-medium text-gray-700">
          Anything we should know? (optional)
        </label>
        <Textarea id="sv-message" name="message" rows={3} className={field} />
      </div>
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold-600 py-3 font-semibold text-navy-900 hover:bg-gold-700"
      >
        {status === "sending" ? "Sending…" : "Book a Free Site Visit"}
      </Button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          That didn&apos;t go through. Please call or WhatsApp us instead.
        </p>
      )}
    </form>
  )
}
