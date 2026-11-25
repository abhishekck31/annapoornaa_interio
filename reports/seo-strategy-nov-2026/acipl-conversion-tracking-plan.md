# ACIPL conversion and tracking plan: November 2026

GA4 property: `G-YXB89D6ZEH` (already on the site via gtag.js). No Google Tag Manager container is installed. The events below are sent with gtag directly, so GTM is optional.

## What is implemented in code (tested locally, not yet deployed)

| Event | Fires when | Parameters | Where |
|---|---|---|---|
| `phone_click` | Any `tel:` link is clicked, anywhere on the site | `phone_number`, `cta_location`, `link_text`, `page_path` | components/conversion-tracker.tsx (one document-level listener) |
| `whatsapp_click` | Any `wa.me` link is clicked, or the floating WhatsApp button | `cta_location`, `link_text`, `page_path` | conversion-tracker.tsx + whatsapp-button.tsx |
| `email_click` | Any `mailto:` link is clicked | `cta_location`, `page_path` | conversion-tracker.tsx |
| `contact_form_submit` | The /contact form submits successfully (Formspree 200) | `form_name=contact_page` | app/contact/FormspreeForm.tsx |
| `site_visit_request` | A landing-page site visit form submits successfully | `form_name=landing_site_visit`, `service`, `area` | components/seo/site-visit-form.tsx |

`cta_location` values: `hero`, `enquiry_card`, `closing`, `mobile_sticky_bar`, `floating_button`. They come from `data-cta` attributes. Add `data-cta="..."` to any other container to split its clicks.

New on every landing page (121 live pages use the two shared templates):

- **"Book a free site visit" form.** Fields: name, phone, locality (prefilled), property type and an optional message. It posts to the same Formspree inbox as /contact, with a subject line like "Site visit request: Modular Kitchen in Hebbal" and the page URL.
- **Mobile sticky bar:** Call / WhatsApp / Site Visit. Phones only (hidden at ≥768px). While it is showing, the floating WhatsApp button is hidden (the bar replaces it) and the scroll buttons and footer are lifted clear.
- The enquiry card's "Request a Callback" link (to /contact) now jumps to the on-page form.

**Verified locally** (headless Chrome against a production build):

- All four click and submit events fire with the parameters above.
- The bar shows on a 390px viewport and not on 1366px.
- The Site Visit button scrolls to the form.
- The form shows its thank-you state (Formspree was stubbed).
- The homepage is unchanged: no bar, floating WhatsApp still present.

## Not live until you do these (owner access needed)

Tracking is **not** confirmed live until these steps are done and checked in GA4 DebugView on the deployed site.

1. **Deploy** the branch (PR → merge to main).
2. **GA4 → Admin → Events:** after the first real hits, mark `phone_click`, `whatsapp_click`, `contact_form_submit` and `site_visit_request` as **key events**.
3. **GA4 → Admin → Custom definitions:** register event-scoped dimensions `cta_location`, `service`, `area` and `form_name`.
4. **Check in DebugView:** install the Google Analytics Debugger extension, open a landing page, tap each button, and confirm each event arrives once.
5. **Formspree plan:** the free tier has a monthly submission cap. Now that 121 pages carry a form, confirm the plan's limit in the Formspree dashboard so leads are not dropped.
6. **Google Ads** (if used): import the GA4 key events as conversions.
7. **Call tracking caveat:** `phone_click` counts taps, not connected calls. For true call counts, use the GBP call history, or a call-tracking number used consistently with NAP. Don't swap numbers in a way that breaks NAP consistency.

## Google Business Profile (the "near me" engine)

"Near me" searches are won through the map pack, not through URLs. There are no "near me" pages, by design. Actions for the owner:

1. Confirm the GBP is verified at the exact address and phone above, and that the name matches the legal or trading name (no keywords added to the name).
2. Set the primary category to "Interior designer". Add secondary categories only where true, e.g. "General contractor", "Construction company", "Kitchen remodeler".
3. Add Services with short descriptions that mirror the live pillar pages.
4. Upload real project photos regularly: office projects, kitchens, villas.
5. Set the website link to `https://www.ac-ipl.in/?utm_source=google&utm_medium=organic&utm_campaign=gbp` so GBP traffic is visible in GA4.
6. Ask completed clients for reviews with a short review link. Never incentivise or fabricate reviews.
7. Make sure the same NAP is on Justdial, Sulekha, Bing Places, Apple Business Connect, Facebook and Instagram (see competitor-backlink-prospects.csv).
