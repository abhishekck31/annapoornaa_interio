# New landing pages — facts the client must confirm

This covers the 13 new pages in `content/new-pages/`. Nothing below was invented. Every
`{{CONFIRM: …}}` in the copy is a gap for the client to fill with a real figure. Where
we have no figure, the sentence should be rewritten or removed, never estimated.

**How to use this list:** give the client sections A–E. Send the answers back and they get
dropped into `lib/business.ts` (shared facts) or the page's file in `content/new-pages/`.
To check nothing is left, run:

```
grep -rn "{{CONFIRM" content/new-pages lib/business.ts
```

---

## A. Shared business facts — `lib/business.ts`

These appear on several pages. Change them once and every page picks up the change.

| # | Fact | Where it shows |
|---|---|---|
| A1 | Years in business. `site.ts` says the company was founded in 2014. Is that right? | Stats block, all 13 pages |
| A2 | Number of completed projects (a real count, not a round-up) | Stats block, all 13 pages |
| A3 | Current plan-sanction authority for city plots. BBMP was restructured under the Greater Bengaluru Authority in 2025, so which corporation or authority should we name? | House construction company page |
| A4 | Plan-sanction authority for Devanahalli plots. Is it BIAAPA? | Devanahalli page (intro + FAQ) |
| A5 | Structural warranty: how long, and what it covers | House construction company, Thanisandra, villa pages |
| A6 | Waterproofing warranty period | House construction company page, renovation pillar |
| A7 | Construction packages: 3 tiers. For each: the package name and ₹/sq ft rate, then cement and steel brands/grades, block type, flooring type and ₹/sq ft allowance, doors/windows spec, electrical brands, plumbing and sanitaryware brands, and paint spec. Is the rate on built-up area? | Package table (house construction company page); rates quoted in the cost-guide FAQ and worked examples |

## B. Page-specific figures

### /house-construction-company-in-bangalore
- [ ] Stage-wise timeline table. For **G+1** and **G+2**, typical weeks for each stage: design and sanction; excavation, footings and plinth; columns, slabs and roof (per floor); blockwork and conduits; plastering, waterproofing and flooring; doors, windows, painting and fixtures. Plus the total in months from the start on site.
- [ ] FAQ: typical G+2 duration from the start on site

### /house-construction-cost-in-bangalore
- [ ] Stage-by-stage cost split: the percentage for each of the 9 stages (foundation, RCC frame, masonry, plastering and waterproofing, flooring and tiling, electrical, plumbing and sanitaryware, doors and windows, painting), taken from real past projects
- [ ] Worked examples: typical built-up area, and the total ₹ for each of the 3 packages, for 30x40 G+1, 30x40 G+2, 30x50 G+1 and 30x50 G+2
- [ ] FAQ: ₹ range for a 30x40 G+1 and a 30x40 G+2
- [ ] Confirm that quotes state a validity period and include a steel and cement price-variation clause, as the page says

### /commercial-construction-in-bangalore
- [ ] Which commercial building types ACIPL actually builds: showrooms? small office buildings? factory and warehouse sheds? This text appears in the intro and the first FAQ.
- [ ] Aron Universal: what ACIPL's scope was. The gallery files it under "Construction", but the hero image of it on the site is an architect's rendering by Ambiant Associates.
- [ ] Gokaldas, TSS, Hengst, Ingex: what ACIPL did for each (construction, interiors or products). If that can't be confirmed, delete the sentence.
- [ ] Pre-engineered buildings: does ACIPL design and erect them itself, or through a partner?
- [ ] Which commercial approvals ACIPL handles directly (fire, pollution control, power load and so on)

### /office-interior-designers-in-bangalore
- [ ] Cost per seat for the 3 tiers (essential, standard, premium). The FAQ repeats the low and high ends.
- [ ] Timeline: the seat range for a "small office" and its weeks, plus weeks for a full floor with cabins and HVAC

### /modular-kitchen-in-bangalore
- [ ] Hardware brands used as standard
- [ ] Are cabinets made in an in-house workshop or by a partner factory?
- [ ] Typical ₹ range for a 2BHK kitchen and a 3BHK kitchen
- [ ] Weeks from design sign-off to handover, and days of on-site installation

### /home-renovation-in-bangalore
- [ ] Typical duration for a full renovation of an independent house, and of an apartment
- [ ] Century Club (Seshadri Road): confirm ACIPL renovated the washrooms and lounges shown in the photos, and that we may name the club

### /home-renovation-in-yelahanka
- [ ] Typical lead time for a site inspection in Yelahanka (the page suggests "e.g. 2 working days")

### /office-interior-designers-in-yelahanka
- [ ] Typical turnaround for a small fit-out
- [ ] Minimum project size, if there is one
- [ ] ₹ range for a small office (workstations, one cabin, a meeting room, a pantry)

### /interior-designers-in-jakkur
- [ ] Typical ₹ range for a 2BHK and a 3BHK handover scope
- [ ] Weeks for a full 3BHK scope from design sign-off

### /house-construction-in-thanisandra
- [ ] Typical rental unit mix ACIPL recommends (1BHK, 2BHK and so on)

### /house-construction-in-devanahalli
- [ ] ACIPL's actual experience with the Airports Authority of India height NOC for Devanahalli plots

### /villa-construction-in-yelahanka
- [ ] Typical ₹/sq ft range for ACIPL villas
- [ ] Does ACIPL build swimming pools and water features? The hero photo shows a villa with a pool.

## C. Local statements to verify

These are written in general terms and carry no `{{CONFIRM}}` marker. They are still statements
about a place, so the client should confirm each one matches what they see on the ground.
Anything that doesn't should be softened or removed.

| Page | Statement |
|---|---|
| Home renovation, Yelahanka | Many New Town houses had an upper floor added later, and the old-roof/new-floor joint is a common seepage point. Old Town homes often sit wall to wall on narrow streets. Early apartment blocks have seepage from bathroom to bathroom between floors. |
| Office interiors, Yelahanka | Newer commercial buildings along Doddaballapur Road and the Bellary Road stretch are handed over as bare shells, and older mixed-use buildings need electrical and plumbing upgrades. |
| Jakkur | Most enquiries here are for newly handed-over apartments and newer gated villa communities. |
| Thanisandra | Plot owners here commonly build G+2 or G+3 with rental floors, and many internal roads are too narrow for a transit mixer or boom pump. |
| Sahakar Nagar | Many homes are older independent houses that families have lived in for years. |
| Devanahalli | Plots generally fall outside the city corporation. New layouts may lack piped water and sewer lines. Soil varies from plot to plot. |
| Villa, Yelahanka | Gated villa communities in North Bengaluru often have their own design guidelines and association approval. |
| House construction cost | Steel prices have "swung noticeably" from year to year. |

## D. Process commitments stated on the pages

The pages describe how ACIPL works. Each point below is a promise a customer could hold the
company to, so the client should confirm it is true in every project:

- A site engineer is on site **every working day** (house construction company page, Devanahalli page)
- Photo updates, and photo or video updates at every stage (house construction company, Devanahalli)
- Concrete cube tests and material test reports are provided
- As-built architectural, structural and MEP drawings are handed over at completion
- Payments are tied to completed and inspected stages, not calendar dates
- A written, itemised BOQ comes before work starts, and changes are priced before they are made
- Free site visit or inspection (also stated on the existing template)
- GFC drawings are issued before commercial site work begins
- Daily debris removal and room-by-room phasing for occupied homes
- Workstations come from the in-house workstations range. Fire doors, railings, and uPVC and aluminium glazing come from ACIPL's own products division.
- For handover interiors, a snag walk-through of the builder's work before interiors start (Jakkur)

## E. Images and testimonials

**Photos.** Alt text describes only what is visible, and names a location only where it is known.
Please confirm each photo is ACIPL's own work:

| Page | Image | Confirm |
|---|---|---|
| House construction company | `/Construction/construction2.jpg` | ACIPL built this house. Location, if we may name it? |
| Cost guide | `/Construction/WhatsApp Image 2025-04-26 at 23.32.10_123996c2.jpg` | ACIPL site |
| Commercial | `/Construction/WhatsApp Image 2025-04-26 at 23.32.12_18ec1c63.jpg` | ACIPL erected this steel structure. Is it the Aron Universal building? |
| Office pillar | `/Asmara-project/Asmara1.jpg` | Asmara Apparels, Ulsoor (from the projects data) |
| Modular kitchen | `/homeint/home30.jpg` | ACIPL kitchen |
| Renovation pillar | `/centuryclub/WhatsApp Image 2025-04-26 at 19.14.41_34eae5d8.jpg` | Century Club renovation by ACIPL |
| Renovation, Yelahanka | `/interiors/Interiors6.jpg` | ACIPL kitchen. If it was in Yelahanka, the alt text can say so. |
| Office, Yelahanka | `/images/surbana/surbana1.jpg` | SMEC, Yelahanka (from the projects data) |
| Jakkur | `/homeint/home29.jpg` | ACIPL work. If it was in Jakkur, the alt text can say so. |
| Thanisandra | `/Construction/WhatsApp Image 2025-04-26 at 21.56.48_5f3f2e67.jpg` | ACIPL built this house |
| Sahakar Nagar | `/dsrapartment/WhatsApp Image 2025-05-04 at 21.22.41_6539de36.jpg` | DSR apartment pooja unit by ACIPL |
| Devanahalli | `/Construction/construction4.jpg` | ACIPL built this villa. Location? |
| Villa, Yelahanka | `/const2/WhatsApp Image 2025-04-28 at 18.55.24_6258f4a2.jpg` | ACIPL built this villa and pool. Location? |

**Testimonials.** No new page shows one yet. One is prepared and hidden (`confirmed: false`):

- **/office-interior-designers-in-yelahanka**: an excerpt of the SMEC review already published on
  the site ("The team delivered high-quality work within the committed timeline…"), attributed to
  "Satish, Admin Manager — SMEC India office, Yelahanka". Before switching it to
  `confirmed: true`, confirm that SMEC agrees to it being reused on this page.

Other pages can get a testimonial only when the client supplies a real one and the customer has
agreed to it being published. There is no star rating on the new pages.
