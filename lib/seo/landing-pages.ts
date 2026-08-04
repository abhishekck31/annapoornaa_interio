/**
 * Registry for commercial-intent `/[service]-in-[location]` landing pages.
 *
 * ADDING A NEW PAGE
 * -----------------
 * 1. Append an entry below. The `slug` becomes the URL directly.
 * 2. Nothing else is required — `app/[slug]/page.tsx` statically generates it,
 *    `app/sitemap.ts` picks it up, and the location hub links to it.
 *
 * Every entry must carry genuinely distinct copy. These pages exist to rank for
 * separate queries; recycling the same paragraphs with the locality swapped is
 * what gets a cluster like this classed as doorway content.
 */

import type { FaqItem } from "./schema"
import type { ServiceAreaSlug } from "./service-area-links"

export interface LandingPage {
  /**
   * Typed against the footer link registry, so adding a page here without
   * adding it to `service-area-links.ts` fails the build rather than shipping
   * a landing page nothing links to.
   */
  slug: ServiceAreaSlug
  /** Human-readable service, e.g. "Modular Kitchen". */
  service: string
  /** Human-readable locality, e.g. "Whitefield". */
  location: string
  title: string
  description: string
  h1: string
  heroSubtitle: string
  image: string
  imageAlt: string
  /** Opening body copy — two locality-specific paragraphs. */
  intro: [string, string]
  /** "Why <locality>" section: the local constraint this page speaks to. */
  localContext: { heading: string; body: string }
  /** What is actually included in the scope of work. */
  highlights: { title: string; body: string }[]
  /** Delivery process, tailored to the service. */
  process: { step: string; body: string }[]
  faqs: FaqItem[]
  testimonial: { quote: string; name: string; project: string }
  /** Related internal links — paths must resolve to real routes. */
  related: { label: string; href: string }[]
}

export const landingPages: LandingPage[] = [
  // ---------------------------------------------------------------- Yelahanka
  {
    slug: "modular-kitchen-in-yelahanka",
    service: "Modular Kitchen",
    location: "Yelahanka",
    title: "Modular Kitchen in Yelahanka | Design & Installation | ACIPL",
    description:
      "Modular kitchen design and installation in Yelahanka, Bangalore. Moisture-resistant carcasses, soft-close hardware, transparent per-unit pricing and a 45-day handover. Free site measurement.",
    h1: "Modular Kitchen in Yelahanka",
    heroSubtitle:
      "Designed, manufactured and installed by a team based in Yelahanka New Town — so site visits happen the same week, not the next month.",
    image: "/updated-homein.jpg",
    imageAlt: "Modular kitchen interiors completed by ACIPL for a home in Yelahanka, Bangalore",
    intro: [
      "Our workshop and office are in Yelahanka New Town, which changes what a kitchen project looks like here. Measurements, shutter samples and the final installation are handled by people who are already ten minutes from your site, so the snag list gets closed in days rather than dragging across weeks of scheduled visits.",
      "We build kitchens for the two housing types that dominate Yelahanka: BDA-sanctioned independent houses in the older sectors, where kitchens tend to be long and narrow with a separate utility, and the newer apartment stock along Bellary Road, where the builder-provided platform and plumbing points are fixed and the design has to work around them.",
    ],
    localContext: {
      heading: "Why kitchens in Yelahanka need a local build",
      body: "Yelahanka's older sector homes were built with generous but awkward kitchen footprints — deep counters, high windows, and a utility balcony placed behind the cooking zone. Rather than forcing a showroom layout into that shape, we plan around the existing plumbing stack and daylight, usually with a parallel or L-shaped run and a tall unit bank on the blind wall. In the newer apartments off Bellary Road, the constraint is the opposite: fixed chimney ducting and a shallow platform. There we gain storage vertically, with lift-up wall units and a full-height pantry instead of widening the base run.",
    },
    highlights: [
      {
        title: "Carcass built for Bangalore humidity",
        body: "Base units in BWP-grade plywood with edge-sealed cut lines, because the cabinets under the sink and near the utility door are the ones that fail first in a Bangalore monsoon.",
      },
      {
        title: "Hardware you will actually notice",
        body: "Soft-close hinges and full-extension channels on every drawer as standard — not an upsell on the second quote. Tandem baskets, corner carousels and cutlery inserts specified by how you cook.",
      },
      {
        title: "Counter and backsplash coordination",
        body: "Granite or quartz counters templated after the carcasses are installed, so the joint lines land where they should. Backsplash tiling and the chimney cut-out are sequenced in the same visit.",
      },
      {
        title: "Per-unit pricing, itemised",
        body: "You get a quote broken down by cabinet, not a single lump sum for 'kitchen'. If you drop a tall unit or change a shutter finish, you can see exactly what moves.",
      },
    ],
    process: [
      {
        step: "Site measurement",
        body: "A measured survey of the existing platform, plumbing points, electrical outlets and window reveals. Usually booked within two working days for Yelahanka addresses.",
      },
      {
        step: "Layout and 3D",
        body: "Two or three layout options with working triangle, storage counts and a 3D view so you can judge shutter colour against your existing flooring.",
      },
      {
        step: "Factory build",
        body: "Carcasses and shutters cut and edge-banded off site. Nothing is fabricated in your flat, which keeps dust and noise out of the handover window.",
      },
      {
        step: "Install and snag",
        body: "Installation typically runs three to five days. We walk the snag list with you on the final day and close it before invoicing the balance.",
      },
    ],
    faqs: [
      {
        question: "How much does a modular kitchen cost in Yelahanka?",
        answer:
          "A straight or L-shaped kitchen in a 2BHK typically lands between ₹1.6 lakh and ₹3 lakh depending on shutter finish and hardware. Laminate shutters sit at the lower end, acrylic and lacquered glass at the upper. We quote per cabinet after the site measurement so the number reflects your actual wall lengths rather than a per-square-foot estimate.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Four to six weeks from design sign-off to handover. Roughly three to four weeks of that is factory production; the on-site installation itself is three to five days. Counter templating adds about a week if you are using granite or quartz.",
      },
      {
        question: "Can you work around the builder's existing platform in a new apartment?",
        answer:
          "Yes, and in most Yelahanka apartment handovers that is the sensible option. We retain the RCC platform and plumbing stack, then build the modular carcass around it. Removing the platform is possible but adds civil work, debris disposal and about ten days to the schedule.",
      },
      {
        question: "Do you handle the chimney, hob and sink as well?",
        answer:
          "We install client-supplied appliances at no extra charge and can supply them if you prefer a single point of accountability. Either way the cut-outs, ducting route and electrical points are planned at the design stage rather than improvised during installation.",
      },
    ],
    testimonial: {
      quote:
        "We had an odd L-shaped kitchen with a window right where we wanted tall units. They reworked the layout twice before we signed off, and the site team was here the same week we called about a drawer alignment.",
      name: "Sandhya R.",
      project: "3BHK, Yelahanka New Town",
    },
    related: [
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
      { label: "False Ceiling in Yelahanka", href: "/false-ceiling-in-yelahanka" },
      { label: "Turnkey Construction in Yelahanka", href: "/turnkey-construction-in-yelahanka" },
    ],
  },
  {
    slug: "false-ceiling-in-yelahanka",
    service: "False Ceiling",
    location: "Yelahanka",
    title: "False Ceiling in Yelahanka | Gypsum & PVC Ceilings | ACIPL",
    description:
      "False ceiling contractors in Yelahanka, Bangalore. Gypsum, POP and PVC ceilings with concealed lighting, AC diffuser coordination and dust-controlled installation. Free site visit.",
    h1: "False Ceiling in Yelahanka",
    heroSubtitle:
      "Gypsum, POP and PVC ceilings installed by a Yelahanka-based crew — with the electrical and AC coordination sorted before the grid goes up.",
    image: "/PVC-Panels.jpg",
    imageAlt: "False ceiling with concealed cove lighting installed by ACIPL in Yelahanka, Bangalore",
    intro: [
      "Most false ceiling complaints we get called in to fix are not about the ceiling. They are about what was left above it — a light point in the wrong place, an AC drain running uphill, or a speaker cable nobody pulled before the boards were closed. We plan the services layout first and the ceiling profile second.",
      "In Yelahanka we work across both the older independent houses, which often have high slabs and room for a deep cove, and the newer apartments where floor-to-slab height is tight and the ceiling has to be shallow enough not to make the room feel low.",
    ],
    localContext: {
      heading: "Ceiling heights across Yelahanka's housing stock",
      body: "The independent houses in Yelahanka's older sectors typically give you 10 to 11 feet slab-to-floor, which is enough for a peripheral cove with concealed lighting and still leave the room feeling tall. Newer apartment handovers along Bellary Road and Jakkur are often closer to 9 feet 6 inches, and a full-room drop there costs you more than it gives back. In those flats we usually recommend a peripheral band with a flat centre, or a targeted drop only over the living and dining zones, keeping bedrooms plain with surface-mounted profile lights instead.",
    },
    highlights: [
      {
        title: "Services planned before boarding",
        body: "Light points, AC diffusers, drain slope, speaker and CCTV cabling all marked on the reflected ceiling plan and verified on site before a single board goes up.",
      },
      {
        title: "Gypsum, POP or PVC as the room warrants",
        body: "Gypsum for living and bedroom areas, moisture-resistant board or PVC panelling for bathrooms, balconies and utility areas where a plain gypsum board will eventually stain.",
      },
      {
        title: "Access kept where you need it",
        body: "Removable access panels at AC service points and at any valve or junction above the ceiling. It is a small detail that saves cutting a hole in a finished ceiling two years later.",
      },
      {
        title: "Dust-controlled work",
        body: "Cutting done outside the living area, furniture sheeted, and daily debris clearance. Occupied-flat installations are sequenced room by room so you are not displaced for the full duration.",
      },
    ],
    process: [
      {
        step: "Site visit and levels",
        body: "We check slab level across the room — rarely as flat as it looks — and confirm the finished ceiling height you will actually get.",
      },
      {
        step: "Reflected ceiling plan",
        body: "A drawing showing the ceiling profile, every light point, diffuser and access panel, issued for your approval before material is ordered.",
      },
      {
        step: "Framing and services",
        body: "GI channel grid levelled and hung, then electrical and AC work completed and tested inside the void while it is still open.",
      },
      {
        step: "Boarding, finishing and painting",
        body: "Boards fixed, joints taped and skimmed, then two coats of finish paint. Cove lighting is set and aimed after painting, not before.",
      },
    ],
    faqs: [
      {
        question: "What does a false ceiling cost per square foot in Yelahanka?",
        answer:
          "Plain gypsum ceilings generally run ₹85 to ₹110 per square foot including framing, boarding, finishing and paint. Designed profiles with coves and multiple levels sit around ₹130 to ₹180. PVC panelling for balconies and utility areas is lower, roughly ₹70 to ₹95. Electrical points and light fittings are quoted separately because they vary so much.",
      },
      {
        question: "How much ceiling height will I lose?",
        answer:
          "A plain gypsum ceiling takes about 4 inches including the framing. A cove detail with concealed lighting needs 8 to 10 inches at the perimeter, though the centre of the room stays higher. If your slab height is under 9 feet 6 inches we will usually talk you out of a full-room drop.",
      },
      {
        question: "Gypsum or PVC — which should I choose?",
        answer:
          "Gypsum for living rooms and bedrooms: it takes paint properly, gives a seamless finish and can be shaped. PVC for balconies, utility areas and bathrooms, where moisture will eventually mark a gypsum board however well it is sealed. Using the right one per room costs less than using gypsum everywhere and repairing it later.",
      },
      {
        question: "Can this be done while we are living in the flat?",
        answer:
          "Yes. We sequence occupied flats room by room, sheet the furniture and clear debris daily. A typical 2BHK takes eight to twelve working days that way, against six or seven in an empty flat.",
      },
    ],
    testimonial: {
      quote:
        "They pointed out that our AC drain had been run almost flat by the previous contractor and fixed the slope before boarding. We would never have known until it leaked.",
      name: "Prakash M.",
      project: "2BHK apartment, Yelahanka",
    },
    related: [
      { label: "PVC False Ceilings", href: "/products/pvc-false-ceilings" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
      { label: "Interior Designers in Yelahanka", href: "/interior-designers-in-yelahanka" },
    ],
  },
  {
    slug: "turnkey-construction-in-yelahanka",
    service: "Turnkey Construction",
    location: "Yelahanka",
    title: "Turnkey House Construction in Yelahanka | ACIPL Contractors",
    description:
      "Turnkey house construction in Yelahanka, Bangalore. BBMP and BDA plan sanction support, stage-linked payments, structural drawings and a fixed-scope contract. Talk to our Yelahanka office.",
    h1: "Turnkey House Construction in Yelahanka",
    heroSubtitle:
      "Plan sanction to handover on your Yelahanka site — one contract, stage-linked payments, and a schedule you can hold us to.",
    image: "/Const1.png",
    imageAlt: "Residential construction project managed by ACIPL in Yelahanka, Bangalore",
    intro: [
      "Building on your own plot in Yelahanka means dealing with BDA or BBMP sanction, setback rules that vary by sector, and a soil profile that is generally sound but still needs checking before you fix a foundation type. We take that whole sequence as a single contract so you are not coordinating an architect, a civil contractor and six trades yourself.",
      "Our office is in Yelahanka New Town, which matters more on a construction site than it does on an interiors job. Site supervision is daily rather than weekly, and material deliveries are scheduled against actual progress instead of being dumped on site to sit in the rain.",
    ],
    localContext: {
      heading: "Building on a Yelahanka plot",
      body: "Yelahanka's sanctioned layouts are mostly regular rectangular plots with clear setback requirements, which makes planning straightforward — but the older sectors have narrower access roads, and that governs whether a ready-mix concrete truck and boom pump can reach your site or whether the slab has to be poured differently. We check access before quoting the structure. Plots closer to Jakkur and Bagalur sometimes sit on filled ground, so we insist on a soil test rather than assuming a standard footing depth. Airport-corridor height rules can also apply on the northern edge, and that is worth confirming before you design a third floor.",
    },
    highlights: [
      {
        title: "Sanction and approvals handled",
        body: "Plan preparation and submission for BDA or BBMP sanction, along with the khata, plan approval and commencement documentation, coordinated as part of the contract.",
      },
      {
        title: "Structural design on record",
        body: "RCC design by a qualified structural engineer with drawings issued to site — not a bar-bending schedule improvised by the mason on the day of the pour.",
      },
      {
        title: "Stage-linked payments",
        body: "Payments tied to completed and inspected stages — foundation, each slab, brickwork, finishing — so what you have paid always tracks what is actually built.",
      },
      {
        title: "One contract to handover",
        body: "Civil, plumbing, electrical, waterproofing, joinery and finishing under a single scope, with the interiors carried through by the same team if you want them.",
      },
    ],
    process: [
      {
        step: "Site and soil assessment",
        body: "Plot survey, access check for heavy vehicles, and a soil test to confirm the foundation type before any drawing is finalised.",
      },
      {
        step: "Design and sanction",
        body: "Floor plans and elevations agreed with you, then structural drawings and the sanction submission. Approval timelines are built into the schedule rather than assumed away.",
      },
      {
        step: "Structure",
        body: "Foundation, columns, slabs and blockwork, each stage inspected and signed off before the next payment stage opens.",
      },
      {
        step: "Finishing and handover",
        body: "Plastering, waterproofing, flooring, electrical and plumbing fit-out, painting and joinery, followed by a snag walk and handover with drawings and warranties.",
      },
    ],
    faqs: [
      {
        question: "What is the per-square-foot construction cost in Yelahanka?",
        answer:
          "Standard-specification residential construction generally runs ₹1,850 to ₹2,200 per square foot of built-up area, with premium specification going to ₹2,600 and above. The variance is almost entirely in finishing — flooring, joinery, sanitaryware and electrical fittings. The structure itself varies far less. We issue a specification sheet with the quote so you can see exactly which grade each number assumes.",
      },
      {
        question: "How long does a typical house take?",
        answer:
          "A G+1 house of around 2,400 square feet usually takes ten to fourteen months from sanction to handover. Sanction itself can take six to twelve weeks depending on the authority and how complete the submission is. Monsoon affects excavation and external plastering more than it affects internal work, so scheduling matters.",
      },
      {
        question: "Do you help with BDA or BBMP plan sanction?",
        answer:
          "Yes. Plan preparation, submission and follow-up are part of the turnkey scope. Statutory fees and any betterment charges are paid at cost and shown separately — we do not mark those up.",
      },
      {
        question: "How are payments structured?",
        answer:
          "Against completed stages, not against a calendar. Typically a booking amount, then releases at foundation, each slab, blockwork completion, plastering, and finishing, with a retention held until the snag list is closed after handover.",
      },
    ],
    testimonial: {
      quote:
        "The soil test came back worse than expected and they redesigned the footing rather than carrying on with the standard drawing. It added cost, but they showed us why before we agreed to it.",
      name: "Venkatesh K.",
      project: "G+1 residence, Yelahanka",
    },
    related: [
      { label: "Home Construction Services in Yelahanka", href: "/home-construction-services-in-yelahanka" },
      { label: "Construction Expertise", href: "/expertise/construction" },
      { label: "Modular Kitchen in Yelahanka", href: "/modular-kitchen-in-yelahanka" },
    ],
  },

  // ---------------------------------------------------------------- Whitefield
  {
    slug: "modular-kitchen-in-whitefield",
    service: "Modular Kitchen",
    location: "Whitefield",
    title: "Modular Kitchen in Whitefield, Bangalore | Design & Fitting",
    description:
      "Modular kitchen design and installation in Whitefield, Bangalore. Apartment-friendly scheduling, society approvals, soft-close hardware and itemised per-cabinet pricing. Book a free measurement.",
    h1: "Modular Kitchen in Whitefield, Bangalore",
    heroSubtitle:
      "Built for Whitefield's gated communities — society paperwork, service lift slots and working-hour restrictions handled as part of the job.",
    image: "/updated-homein.jpg",
    imageAlt: "Modular kitchen fit-out completed by ACIPL for an apartment in Whitefield, Bangalore",
    intro: [
      "Almost every kitchen we install in Whitefield goes into a gated apartment complex, and that shapes the project more than the design does. Material has to come up a booked service lift inside a fixed window, work stops at the hour the association says it stops, and there is a deposit and a gate pass list to file before anyone starts.",
      "We treat that as our administrative job, not yours. Our site supervisor files the work permit, submits the worker list, books the lift and keeps the crew inside the permitted hours — which is the difference between a five-day installation and one that stretches over three weekends.",
    ],
    localContext: {
      heading: "Working inside Whitefield's gated communities",
      body: "The large complexes around ITPL, Varthur Road and Hope Farm each run their own fit-out rules: permitted working hours, mandatory interior work deposits, restrictions on wet work like cutting and grinding, and service lift booking that is often limited to a two- or three-hour slot per day. Because we prefabricate carcasses and shutters at the workshop and only assemble on site, we need far fewer lift slots and generate almost no cutting dust inside the flat — which is usually what makes the association sign the permit without argument. It also matters that much of Whitefield's stock is rented; if you are fitting out a flat you own but do not occupy, we can run the whole project on photo updates and a single handover visit.",
    },
    highlights: [
      {
        title: "Society approvals filed for you",
        body: "Work permit application, worker ID list, deposit coordination and service lift booking handled by our supervisor before the crew arrives.",
      },
      {
        title: "Prefabricated, not site-cut",
        body: "Cutting and edge-banding happen at the workshop. On site it is assembly and alignment only, which keeps dust, noise and lift usage to a minimum.",
      },
      {
        title: "Designed around fixed services",
        body: "Builder-fitted platforms, chimney ducting and plumbing stacks in Whitefield apartments are rarely worth moving. We design the storage around them and gain volume vertically.",
      },
      {
        title: "Remote-friendly project management",
        body: "Photo updates at each stage and a video walk-through before handover, for owners who are not in the city during the fit-out.",
      },
    ],
    process: [
      {
        step: "Measurement and society check",
        body: "Site measurement plus a read of your association's fit-out rules, so the schedule we quote is one the society will actually permit.",
      },
      {
        step: "Design sign-off",
        body: "Layout options and 3D views, with shutter and counter samples brought to the flat rather than viewed under showroom lighting.",
      },
      {
        step: "Workshop production",
        body: "Three to four weeks of off-site fabrication. Nothing is delivered to your flat until it is ready to install.",
      },
      {
        step: "Installation within permitted hours",
        body: "Three to five days of assembly inside the society's working window, daily clean-up, and a joint snag walk on the last day.",
      },
    ],
    faqs: [
      {
        question: "Will you handle my apartment association's interior work approval?",
        answer:
          "Yes. We prepare the work permit application, provide worker ID and police verification details where the association asks for them, and coordinate the refundable interior deposit. We also confirm the permitted working hours before quoting a schedule, because a society that allows work only from 10am to 5pm on weekdays changes the timeline materially.",
      },
      {
        question: "How much does a modular kitchen cost in Whitefield?",
        answer:
          "Typically ₹1.7 lakh to ₹3.2 lakh for a standard apartment kitchen, driven mainly by shutter finish. Membrane and laminate sit at the lower end; acrylic, PU and lacquered glass at the upper. We price per cabinet after measuring, so you can add or drop units and see the effect immediately.",
      },
      {
        question: "Can you work in the flat while it is tenanted or while I am abroad?",
        answer:
          "Yes, both are common in Whitefield. For tenanted flats we schedule around the occupant and sequence work to keep the kitchen usable as long as possible. For owners overseas we run the project on stage photos and a recorded walk-through, with a single point of contact on WhatsApp.",
      },
      {
        question: "Do you move the plumbing or chimney duct?",
        answer:
          "Only when there is a real gain. In most Whitefield apartments the stack and duct positions are fixed in the structure, and relocating them means wet work the society may not permit, plus a week added to the schedule. We usually get a better result by redesigning the storage around them.",
      },
    ],
    testimonial: {
      quote:
        "We were still in Pune when the work happened. They dealt with the association, sent photos every couple of days, and the kitchen was exactly what the 3D showed when we finally saw it.",
      name: "Arjun and Meera S.",
      project: "3BHK apartment, Whitefield",
    },
    related: [
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
      { label: "Home Interior Services", href: "/expertise/interior" },
    ],
  },
  {
    slug: "office-interior-design-in-whitefield",
    service: "Office Interior Design",
    location: "Whitefield",
    title: "Office Interior Design in Whitefield | Commercial Fit-Out | ACIPL",
    description:
      "Office interior design and fit-out in Whitefield, Bangalore. Workstations, cabins, meeting rooms and services coordination for tech park and standalone offices. Phased delivery around live operations.",
    h1: "Office Interior Design in Whitefield, Bangalore",
    heroSubtitle:
      "Commercial fit-outs across Whitefield's tech parks and standalone buildings — delivered in phases so your team keeps working.",
    image: "/Updated-officein.jpg",
    imageAlt: "Corporate office interior fit-out delivered by ACIPL in Whitefield, Bangalore",
    intro: [
      "Office fit-outs in Whitefield split into two very different jobs. Inside a managed tech park you are working to the landlord's fit-out manual — approved contractors, defined service tie-in points, mandatory fire and HVAC sign-offs, and night-only work for anything noisy. In a standalone building on Varthur Road or Hope Farm you have more freedom but you own more of the risk, including power provisioning and fire compliance.",
      "We have delivered both, and the scoping conversation is different for each. What stays constant is that we sequence work so an occupied floor stays occupied — phased by zone, with the noisy trades scheduled outside business hours.",
    ],
    localContext: {
      heading: "Tech park fit-outs versus standalone offices in Whitefield",
      body: "Managed developments around ITPL and the Whitefield Main Road corridor issue a fit-out manual that governs almost everything: which sprinkler and smoke detector layout is acceptable, where you may tap into the chilled water or VRF system, how the false ceiling must interface with the building's return air path, and what the landlord requires as a fit-out deposit and insurance certificate. Getting those approvals is a multi-week path and it runs in parallel with design, not after it. Standalone buildings shift the burden — you will typically be arranging your own DG backup sizing, UPS room and fire NOC, and the base build is rarely as square as the drawings suggest, so we measure before we detail anything.",
    },
    highlights: [
      {
        title: "Landlord and fit-out manual compliance",
        body: "Drawings prepared in the format the building management expects, with fire, HVAC and electrical sign-offs pursued alongside design rather than after it.",
      },
      {
        title: "Workstations and cabins to your headcount",
        body: "Space planning against real headcount, growth allowance and meeting-room demand — supplied from our own workstation and seating range, so lead times are ours to control.",
      },
      {
        title: "Services fully coordinated",
        body: "Electrical, data, HVAC, fire detection and sprinkler relocation coordinated on one reflected ceiling plan, which is where most fit-out delays actually originate.",
      },
      {
        title: "Phased delivery on live floors",
        body: "Zone-by-zone handover with temporary seating plans, and noisy or dusty work scheduled to evenings and weekends where the building permits it.",
      },
    ],
    process: [
      {
        step: "Brief and space plan",
        body: "Headcount, meeting-room ratios, storage and any lab or server requirements translated into a test-fit layout on your actual floor plate.",
      },
      {
        step: "Design and landlord approval",
        body: "Detailed drawings, finishes and services layouts issued for both your sign-off and the building's fit-out approval.",
      },
      {
        step: "Fit-out",
        body: "Partitions, ceilings, flooring, electrical and data, HVAC modifications and joinery, sequenced by zone against an agreed programme.",
      },
      {
        step: "Snag and handover",
        body: "Testing and commissioning, snag closure, and handover with as-built drawings and warranties for the landlord's records.",
      },
    ],
    faqs: [
      {
        question: "What does an office fit-out cost per square foot in Whitefield?",
        answer:
          "A functional fit-out with workstations, a few cabins, meeting rooms and standard finishes generally runs ₹1,400 to ₹1,900 per square foot. Higher-specification work with extensive glazing, acoustic treatment, feature ceilings and premium seating moves to ₹2,200 and above. HVAC modification and electrical infrastructure are the two line items that most often push a budget past its estimate, so we scope those early.",
      },
      {
        question: "How long does a fit-out take?",
        answer:
          "For a 10,000 square foot office, budget eight to twelve weeks on site, plus three to five weeks beforehand for design and landlord approvals. In managed tech parks the approval stage is the less predictable half — starting it in parallel with design is the single biggest schedule saving available.",
      },
      {
        question: "Can you work while our team is still in the office?",
        answer:
          "Yes, and most Whitefield projects run that way. We phase by zone, keep a working seating plan throughout, and move demolition, core drilling and anything else noisy to evenings and weekends where building management allows it. It adds roughly fifteen to twenty percent to the programme against an empty floor.",
      },
      {
        question: "Do you supply the furniture as well as the fit-out?",
        answer:
          "Yes. Workstations, storage, conference tables and seating come from our own product range, which means the furniture lead time is inside our control rather than sitting with a third-party vendor. You are free to specify another brand if you have a standard.",
      },
    ],
    testimonial: {
      quote:
        "They flagged the sprinkler relocation approval on day one. Our previous fit-out somewhere else lost a month to exactly that, so it was a relief to have someone raise it before we signed.",
      name: "Deepak N.",
      project: "12,000 sq ft office, Whitefield",
    },
    related: [
      { label: "Workstations", href: "/products/workstations" },
      { label: "Interior Designers in Whitefield", href: "/interior-designers-in-whitefield-bangalore" },
      { label: "Office Interior Design in Electronic City", href: "/office-interior-design-in-electronic-city" },
    ],
  },

  // ------------------------------------------------------------------- Hebbal
  {
    slug: "home-interior-design-in-hebbal",
    service: "Home Interior Design",
    location: "Hebbal",
    title: "Home Interior Design in Hebbal, Bangalore | ACIPL Interiors",
    description:
      "Home interior designers in Hebbal, Bangalore. Full-home interiors for high-rise apartments and villas near Manyata Tech Park — wardrobes, kitchens, ceilings and lighting. Free consultation.",
    h1: "Home Interior Design in Hebbal, Bangalore",
    heroSubtitle:
      "Full-home interiors for Hebbal's high-rise apartments and villas, delivered from our North Bangalore base.",
    image: "/updated-homein.jpg",
    imageAlt: "Home interior design project completed by ACIPL in Hebbal, Bangalore",
    intro: [
      "Hebbal has filled up with high-rise apartments over the last decade, largely serving the Manyata Tech Park catchment, alongside older independent homes and a band of premium lakefront developments. Those three housing types want quite different interiors, and the honest answer to 'what will my home look like' depends heavily on which one you are in.",
      "We work across all three from our Yelahanka office, fifteen minutes up the road. For high-rise units the design conversation is about storage and light; for the older independent homes it is usually about reworking rooms that were planned for a different way of living.",
    ],
    localContext: {
      heading: "Designing for Hebbal's high-rise apartments",
      body: "Hebbal's towers give you good light and often a genuine view, which is worth designing towards rather than blocking with tall furniture on the window wall. What they do not give you is generous floor area — the 2 and 3BHK units in this corridor tend to be efficient rather than large, so storage has to go vertical and circulation has to stay clear. Balconies here are also worth treating properly: they are usable most of the year, and closing one in with a glazed system to gain a study or a utility is one of the highest-value changes available in these flats. For the older independent houses closer to the Hebbal flyover and Sanjaynagar side, the work is more often reconfiguration — opening up a compartmentalised kitchen, or converting an underused formal living room.",
    },
    highlights: [
      {
        title: "Storage planned to the millimetre",
        body: "Full-height wardrobes, loft storage and under-bed drawers designed against your actual inventory, because floor area in these units is too tight for approximate storage.",
      },
      {
        title: "Light kept, not blocked",
        body: "Layouts that keep the window wall clear and use lighter finishes on the deeper side of the room, so a compact flat still reads as open.",
      },
      {
        title: "Balcony conversions",
        body: "Glazed enclosures, flooring and joinery to turn a balcony into a study, utility or reading corner — subject to your association's facade rules, which we check first.",
      },
      {
        title: "One team, whole home",
        body: "Kitchen, wardrobes, ceilings, electrical, painting and furnishing under a single scope, so nobody is waiting on another vendor's slot.",
      },
    ],
    process: [
      {
        step: "Consultation and budget frame",
        body: "A conversation about how you actually use the space, and an honest budget range before we design anything — so the 3D you see is something you can build.",
      },
      {
        step: "Design and 3D",
        body: "Layouts, elevations and 3D visuals room by room, with material samples viewed in your flat's own light.",
      },
      {
        step: "Execution",
        body: "Civil and electrical first, then ceilings, then joinery and painting, sequenced so trades are not working over each other.",
      },
      {
        step: "Styling and handover",
        body: "Lighting set, hardware adjusted, snags closed, and a handover with care instructions for the finishes used.",
      },
    ],
    faqs: [
      {
        question: "What does full home interior cost in Hebbal?",
        answer:
          "A 2BHK apartment typically lands between ₹6 lakh and ₹11 lakh for full interiors including kitchen, wardrobes, ceilings, electrical, painting and a TV unit. A 3BHK usually runs ₹9 lakh to ₹18 lakh. The spread is mostly shutter finishes, ceiling complexity and how much loose furniture is in scope. We give a room-by-room breakdown rather than a single figure.",
      },
      {
        question: "How long will my flat be unusable?",
        answer:
          "Full interiors for a 3BHK take eight to twelve weeks on site. If you are living in the flat, plan for the kitchen to be out of action for two to three weeks of that. Most clients in Hebbal move in after handover, or stay and live around a phased sequence that keeps at least one bedroom and a bathroom clear throughout.",
      },
      {
        question: "Can I enclose my balcony?",
        answer:
          "Usually yes, but it depends on your association and whether the facade is treated as common property. Many Hebbal high-rises permit an internally-fitted glazed system that does not change the external elevation, and prohibit anything that does. We check the by-laws before designing it, because it is a rule that is enforced.",
      },
      {
        question: "Do you work on villas and independent houses too?",
        answer:
          "Yes. The older independent homes around Hebbal and Sanjaynagar often need reconfiguration rather than just finishing — moving a kitchen wall, reworking a staircase edge, upgrading electrical that predates modern loads. That is civil work as well as interiors, and we carry both.",
      },
    ],
    testimonial: {
      quote:
        "Our flat is not big and we were worried it would end up feeling smaller. They kept the window wall completely clear and put everything in full-height units on the other side. It reads much larger than it did empty.",
      name: "Nithya B.",
      project: "3BHK high-rise, Hebbal",
    },
    related: [
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Turnkey Construction in Hebbal", href: "/turnkey-construction-in-hebbal" },
      { label: "Our Project Gallery", href: "/gallery" },
    ],
  },
  {
    slug: "turnkey-construction-in-hebbal",
    service: "Turnkey Construction",
    location: "Hebbal",
    title: "House Construction in Hebbal, Bangalore | Turnkey Contractors",
    description:
      "Turnkey house construction contractors in Hebbal, Bangalore. Plan sanction, structural design, stage-linked payments and single-contract delivery to handover. Free site assessment.",
    h1: "Turnkey House Construction in Hebbal",
    heroSubtitle:
      "Single-contract residential construction on Hebbal plots — sanction, structure, services and finishing, with daily site supervision from North Bangalore.",
    image: "/Const1.png",
    imageAlt: "House construction project managed by ACIPL in Hebbal, Bangalore",
    intro: [
      "Plots around Hebbal command serious value, which tends to push owners toward maximising built-up area — usually G+2 or higher where the sanction allows. That makes the structural design and the setback compliance more consequential than they are on a smaller build, and it is worth getting both right before you fall in love with a floor plan.",
      "We handle the full sequence under one contract: survey, soil test, sanction drawings, structural design, construction and finishing. Our supervision comes out of the Yelahanka office, close enough that site visits are daily rather than a weekly drive across the city.",
    ],
    localContext: {
      heading: "What governs a build in Hebbal",
      body: "Two things shape most Hebbal projects. The first is plot geometry — many of the older sites here are irregular or have restricted road frontage, which limits both setbacks and vehicle access for concrete pours and material delivery. We check whether a boom pump can reach the site before we price the slabs, because the alternative changes both cost and method. The second is that this is North Bangalore near the airport corridor, so height clearance rules can apply on taller builds and are far cheaper to confirm at design stage than to discover at sanction. Groundwater is generally not a problem in this belt, but sites on former tank bed land toward the lake side genuinely need a soil test rather than a standard footing assumption.",
    },
    highlights: [
      {
        title: "Sanction and compliance",
        body: "BBMP plan sanction drawings and submission, setback and FAR compliance verified against the current by-law before design is frozen.",
      },
      {
        title: "Engineered structure",
        body: "Soil investigation, foundation design and RCC detailing by a structural engineer, with drawings issued to site and followed on site.",
      },
      {
        title: "Access-aware method",
        body: "Concrete pour method, material staging and debris removal planned around your plot's actual road access, not an assumed ideal.",
      },
      {
        title: "Interiors carried through",
        body: "If you want it, the same team continues into kitchen, wardrobes, ceilings and painting — so there is no handover gap between builder and interior contractor.",
      },
    ],
    process: [
      {
        step: "Survey and feasibility",
        body: "Plot survey, soil test, access assessment and a check on what the by-law actually permits you to build.",
      },
      {
        step: "Design and sanction",
        body: "Floor plans, elevations and structural drawings, then submission and follow-up through to sanction.",
      },
      {
        step: "Construction",
        body: "Foundation through structure to blockwork, with stage inspections and payments tied to verified completion.",
      },
      {
        step: "Finishing and handover",
        body: "Waterproofing, plastering, flooring, services fit-out, painting and joinery, then snag closure and handover with drawings and warranties.",
      },
    ],
    faqs: [
      {
        question: "What does construction cost per square foot in Hebbal?",
        answer:
          "Standard specification generally runs ₹1,900 to ₹2,300 per square foot of built-up area; premium specification goes ₹2,700 and above. Hebbal sites sometimes carry an access premium — if ready-mix trucks cannot reach the plot, the pour method changes and that shows up in the structure cost. We assess access before quoting rather than adding it as a variation later.",
      },
      {
        question: "Do you handle BBMP plan sanction?",
        answer:
          "Yes, sanction drawings, submission and follow-up are inside the turnkey scope. Statutory fees, betterment charges and any scrutiny fees are paid at actuals and shown as a separate line — they are not marked up.",
      },
      {
        question: "How long does a G+2 house take in Hebbal?",
        answer:
          "Typically fourteen to eighteen months from sanction to handover for a G+2 of around 3,500 square feet built-up. Sanction adds six to twelve weeks before that. Irregular plots and restricted access can add a month, mostly in the structure phase.",
      },
      {
        question: "Can I make changes once construction has started?",
        answer:
          "Changes to finishes are usually straightforward if raised before that trade starts. Changes to the structure or the layout after the slab is cast are expensive and sometimes not possible. We hold a design freeze meeting before foundation for exactly this reason, and any variation after that is priced and signed before it is executed.",
      },
    ],
    testimonial: {
      quote:
        "Our plot has a narrow approach and two contractors had quoted assuming a concrete pump could get in. ACIPL walked the road first and told us it could not. That honesty at quoting stage is why we went with them.",
      name: "Ramesh and Latha P.",
      project: "G+2 residence, Hebbal",
    },
    related: [
      { label: "Construction Expertise", href: "/expertise/construction" },
      { label: "Home Interior Design in Hebbal", href: "/home-interior-design-in-hebbal" },
      { label: "Turnkey Construction in Yelahanka", href: "/turnkey-construction-in-yelahanka" },
    ],
  },

  // -------------------------------------------------------------- Koramangala
  {
    slug: "home-interior-design-in-koramangala",
    service: "Home Interior Design",
    location: "Koramangala",
    title: "Home Interior Designers in Koramangala, Bangalore | ACIPL",
    description:
      "Home interior designers in Koramangala, Bangalore. Interiors for independent houses, builder floors and apartments across Koramangala's blocks. Design, execution and handover under one contract.",
    h1: "Home Interior Designers in Koramangala",
    heroSubtitle:
      "Interiors for Koramangala's independent houses, builder floors and apartments — planned around older structures and tight site access.",
    image: "/updated-homein.jpg",
    imageAlt: "Residential interior design project completed by ACIPL in Koramangala, Bangalore",
    intro: [
      "Koramangala's housing is older than most of Bangalore's IT-corridor stock, and that is the defining fact of an interiors project here. Many homes across the blocks date from the 1980s and 1990s — solid structures, but with electrical loads, plumbing and room proportions designed for a different era. A cosmetic refresh over that usually disappoints within two years.",
      "We tend to scope Koramangala projects with the services first: rewiring for modern loads, replacing concealed plumbing that has already been patched twice, and only then the joinery and finishes that people actually came to talk about.",
    ],
    localContext: {
      heading: "Working on Koramangala's older homes and narrow streets",
      body: "Two practical constraints come up on nearly every Koramangala job. The first is the age of the building services — original wiring in these houses was never sized for the air conditioning, induction cooking and general appliance load of a current household, and concealed plumbing of that vintage is often at the end of its life. Doing the joinery over it means opening finished walls later. The second is access: the inner streets across the blocks are narrow, parking is contested, and material delivery has to be scheduled in small loads at off-peak hours rather than a single truck. Both are manageable, but they need to be in the plan and the price from the start, not discovered midway.",
    },
    highlights: [
      {
        title: "Services assessed before design",
        body: "Electrical load check and a plumbing condition survey up front, so you know whether rewiring or repiping is needed before you commit to a finish budget.",
      },
      {
        title: "Structure-aware alterations",
        body: "Wall removals and openings checked against the original structural arrangement — in buildings of this age, not every internal wall is safely removable.",
      },
      {
        title: "Scheduled small-load deliveries",
        body: "Material brought in off-peak in manageable loads, with debris cleared the same day, so we stay on reasonable terms with your neighbours.",
      },
      {
        title: "Period-appropriate reworking",
        body: "Mosaic and older flooring, teak joinery and generous window openings are often worth restoring rather than replacing. We will tell you when that is the better call.",
      },
    ],
    process: [
      {
        step: "Condition survey",
        body: "A proper look at wiring, plumbing, waterproofing and any damp before design begins — this is where Koramangala projects are won or lost.",
      },
      {
        step: "Design and scope",
        body: "Layouts and 3D views, with the remedial work priced openly alongside the visible work so the budget conversation is honest.",
      },
      {
        step: "Services and civil",
        body: "Rewiring, plumbing, waterproofing and any structural alterations completed and tested before anything is closed up.",
      },
      {
        step: "Finishes and handover",
        body: "Ceilings, joinery, flooring and painting, then snag closure and handover with the as-built services layout for future reference.",
      },
    ],
    faqs: [
      {
        question: "What does home interior cost in Koramangala?",
        answer:
          "For an independent house or builder floor, full interiors typically run ₹10 lakh to ₹25 lakh depending on size and specification. Where rewiring or repiping is needed, budget an additional ₹1.5 lakh to ₹4 lakh — that is the line item most quotes leave out and it is the one that causes disputes later, so we price it explicitly.",
      },
      {
        question: "Do I really need to rewire an older Koramangala house?",
        answer:
          "Not always, but often. If the wiring predates the 2000s it was likely sized for a fraction of your current load, may lack proper earthing, and the distribution board may have no RCCB. We test rather than assume — sometimes a distribution board upgrade and a few dedicated circuits is enough, and we will say so if it is.",
      },
      {
        question: "Can internal walls be removed to open up the layout?",
        answer:
          "Sometimes. In these older constructions load paths are not always obvious, and some internal walls are doing structural work. We have the arrangement assessed before committing, and where a wall can go we design the beam and support properly rather than knocking it through and hoping.",
      },
      {
        question: "How disruptive is this for the neighbours?",
        answer:
          "Genuinely a fair concern on Koramangala's inner streets. We keep working hours civil, schedule deliveries off-peak in small loads, avoid blocking the road, and clear debris daily rather than leaving a pile on the footpath for a week.",
      },
    ],
    testimonial: {
      quote:
        "They tested the wiring on the first visit and told us the whole ground floor needed redoing. Not what we wanted to hear, but the previous designer we spoke to had quoted a full renovation without even opening the DB.",
      name: "Farah I.",
      project: "Independent house, Koramangala 5th Block",
    },
    related: [
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Featured Projects", href: "/featured-projects" },
    ],
  },

  // ---------------------------------------------------------- Electronic City
  {
    slug: "office-interior-design-in-electronic-city",
    service: "Office Interior Design",
    location: "Electronic City",
    title: "Office Interior Design in Electronic City, Bangalore | ACIPL",
    description:
      "Office interior design and fit-out in Electronic City, Bangalore. Workstations, cabins, meeting rooms and full services coordination for Phase 1 and Phase 2 offices. Phased delivery available.",
    h1: "Office Interior Design in Electronic City",
    heroSubtitle:
      "Commercial fit-outs across Electronic City Phase 1 and Phase 2 — scoped for scale, delivered in phases around live teams.",
    image: "/Updated-officein.jpg",
    imageAlt: "Office interior fit-out delivered by ACIPL in Electronic City, Bangalore",
    intro: [
      "Electronic City offices tend to be larger floor plates than the city-centre average, which changes the design problem. At 15,000 square feet and up, the questions that matter are circulation, daylight reaching the core, acoustic separation between team zones, and how many people you can seat without the floor feeling like a call centre.",
      "We plan those floors around real headcount and meeting-room demand rather than a seat-density target, and we deliver in phases so a growing team is not relocated wholesale for three months.",
    ],
    localContext: {
      heading: "Large floor plates and phased occupancy in Electronic City",
      body: "The scale of space here is the opportunity and the trap. A deep floor plate gives you room for proper collaboration zones and a decent pantry, but it also means the centre of the floor gets no daylight unless the plan protects it — so we keep cabins and stores off the window line and put open seating there instead. Phase 1 and Phase 2 buildings vary a lot in base build quality: some hand over with usable HVAC and adequate power provisioning, others need significant electrical infrastructure work before a single partition goes up. Because many companies here take space in stages as they hire, we design the floor with a phase boundary in mind from the start, so the second phase does not mean rebuilding through the first.",
    },
    highlights: [
      {
        title: "Space planning against real headcount",
        body: "Test-fit layouts built from your actual team structure, growth plan and meeting-room ratios — not a generic seats-per-square-foot figure.",
      },
      {
        title: "Daylight-led planning",
        body: "Open seating on the window line, enclosed rooms pushed inboard, and glazed partitions where separation is needed without losing light to the core.",
      },
      {
        title: "Acoustics taken seriously",
        body: "Acoustic ceiling treatment, partition detailing to slab where it matters, and separation between collaboration and focus zones on large open floors.",
      },
      {
        title: "Designed for phase two",
        body: "Services and layout planned so a later expansion connects cleanly, instead of requiring demolition through completed areas.",
      },
    ],
    process: [
      {
        step: "Requirement study and test fit",
        body: "Headcount, team adjacencies, meeting and focus room demand mapped onto the actual floor plate before any visual design.",
      },
      {
        step: "Design development",
        body: "Finishes, furniture, lighting and services drawings, with landlord and statutory approvals started in parallel.",
      },
      {
        step: "Fit-out by phase",
        body: "Partitions, ceilings, flooring, electrical, data, HVAC and furniture installed zone by zone against an agreed programme.",
      },
      {
        step: "Commissioning and handover",
        body: "Services tested, snags closed, as-built drawings issued, and furniture set out to the final seating plan.",
      },
    ],
    faqs: [
      {
        question: "What is the cost of an office fit-out in Electronic City?",
        answer:
          "A standard fit-out runs ₹1,300 to ₹1,800 per square foot; higher specification with extensive glazing, acoustic treatment and premium furniture reaches ₹2,200 and above. Larger floor plates here often deliver slightly better per-square-foot economics on the shell work, but that saving disappears if the base build needs electrical or HVAC upgrading — which is worth establishing before you sign the lease.",
      },
      {
        question: "How many people can I seat in my space?",
        answer:
          "A comfortable modern open-plan figure is 70 to 90 square feet per person once you account for meeting rooms, circulation, pantry and utilities. Denser is possible but it shows, particularly on large floor plates where acoustics get difficult. We produce a test fit at two or three densities so you can see the trade-off rather than argue about a number.",
      },
      {
        question: "Can the fit-out be done in phases as we grow?",
        answer:
          "Yes, and on floor plates this size it is often the sensible approach. The key is planning the phase boundary at design stage — electrical distribution, HVAC zoning and data backbone laid out so phase two plugs in rather than requiring work back through phase one.",
      },
      {
        question: "Do you supply workstations and seating?",
        answer:
          "Yes, from our own range — workstations, cabins, conference tables, storage and seating. Having the furniture inside our scope means the lead time is ours to manage, which matters when a floor of this size needs several hundred units delivered to a fixed date.",
      },
    ],
    testimonial: {
      quote:
        "We took the second half of the floor eight months later and it genuinely just connected. No demolition, no rerouting. That was designed in from the beginning and it saved us a lot.",
      name: "Sridhar V.",
      project: "22,000 sq ft office, Electronic City Phase 1",
    },
    related: [
      { label: "Workstations", href: "/products/workstations" },
      { label: "Office Interior Design in Whitefield", href: "/office-interior-design-in-whitefield" },
      { label: "System Railings", href: "/products/system-railings" },
    ],
  },

  // -------------------------------------------------------------- JP Nagar
  {
    slug: "home-renovation-in-jp-nagar",
    service: "Home Renovation",
    location: "JP Nagar",
    title: "Home Renovation in JP Nagar, Bangalore | Renovation Contractors",
    description:
      "Home renovation contractors in JP Nagar, Bangalore. Full-house renovation for older independent homes — rewiring, plumbing, waterproofing, kitchens and interiors under one contract.",
    h1: "Home Renovation in JP Nagar, Bangalore",
    heroSubtitle:
      "Renovating JP Nagar's established homes — the services and waterproofing first, the finishes second.",
    image: "/Updated-renovation.png",
    imageAlt: "Home renovation project completed by ACIPL in JP Nagar, Bangalore",
    intro: [
      "JP Nagar's phases are full of independent houses built between the 1980s and early 2000s, many now on their second generation of owners. They are generally well-built with good proportions and real garden space, but at twenty-five or thirty years old they reach a point where the sensible move is one comprehensive renovation rather than a rolling series of repairs.",
      "That is the work we do here: rewiring, repiping, terrace and bathroom waterproofing, and structural repair where it is needed, followed by the kitchen, joinery and finishes. Doing it in that order costs less than doing it twice.",
    ],
    localContext: {
      heading: "What thirty-year-old JP Nagar houses actually need",
      body: "There is a recognisable pattern to renovations across JP Nagar's phases. Terrace waterproofing has usually been redone once with a coating that has since failed, and the damp is showing on a first-floor ceiling. Bathrooms of that era were waterproofed to a lower standard and are frequently the source of damp on the wall behind. Electrical wiring was sized long before household air conditioning and modern appliance loads. And the kitchen is typically a closed room with a separate utility, which most families now want opened up toward the dining area. None of this is unusual or alarming — but it is why we survey before quoting, and why a renovation quote that skips straight to finishes is one to be sceptical about.",
    },
    highlights: [
      {
        title: "Waterproofing done properly",
        body: "Terrace and bathroom waterproofing to a full system specification with proper detailing at parapets and outlets, not a coating rolled over an existing failure.",
      },
      {
        title: "Rewiring for current loads",
        body: "New circuits sized for air conditioning and modern appliances, proper earthing, and an RCCB-protected distribution board.",
      },
      {
        title: "Opening up the plan",
        body: "Kitchen and dining reconfiguration, with any wall removal designed and supported properly rather than knocked through.",
      },
      {
        title: "One contract, one accountability",
        body: "Civil, plumbing, electrical, waterproofing, joinery and painting in a single scope — so nobody blames the previous trade for the leak.",
      },
    ],
    process: [
      {
        step: "Condition survey",
        body: "Damp mapping, electrical testing, plumbing assessment and a look at the terrace and bathroom waterproofing before anything is priced.",
      },
      {
        step: "Scope and staging",
        body: "An itemised scope separating essential remedial work from discretionary upgrades, so you can phase the budget with your eyes open.",
      },
      {
        step: "Strip out and services",
        body: "Demolition, rewiring, repiping and waterproofing, all tested before walls and floors are closed.",
      },
      {
        step: "Finishes and handover",
        body: "Flooring, ceilings, kitchen, wardrobes and painting, then snag closure and handover with warranties on the waterproofing system.",
      },
    ],
    faqs: [
      {
        question: "What does a full house renovation cost in JP Nagar?",
        answer:
          "For a typical 2,000 to 2,500 square foot independent house, a comprehensive renovation covering rewiring, plumbing, waterproofing, flooring, kitchen, wardrobes and painting generally runs ₹18 lakh to ₹35 lakh. Where the structure needs repair or the layout is being significantly altered, it goes higher. We quote remedial and cosmetic work as separate sections so you can see what is necessary and what is choice.",
      },
      {
        question: "Can we live in the house during renovation?",
        answer:
          "For a full renovation involving rewiring and repiping, honestly, no — the house will be without power and water in sections for extended periods. Most clients move out for the duration. If you must stay, we can phase it floor by floor, but expect the programme to extend by roughly half and the experience to be uncomfortable.",
      },
      {
        question: "How long does it take?",
        answer:
          "Four to seven months for a full renovation of a house that size, depending on how much structural and waterproofing work is involved. A partial renovation limited to kitchen, bathrooms and painting is six to ten weeks.",
      },
      {
        question: "Our terrace has been waterproofed twice already and still leaks. Why would this be different?",
        answer:
          "Because repeated coating failures usually mean the problem is not the coating. It is typically a detailing issue at the parapet junction, a blocked or badly-set outlet, or ponding from an inadequate slope. We investigate the cause and correct the slope and detailing before applying a system — which is why it holds when a third coating would not have.",
      },
    ],
    testimonial: {
      quote:
        "Two contractors had recoated our terrace. ACIPL found the slope was actually running toward the parapet and water was sitting there. They rebuilt the fall properly. First monsoon in years with a dry ceiling.",
      name: "Girish and Uma D.",
      project: "Independent house, JP Nagar 6th Phase",
    },
    related: [
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Contact Us", href: "/contact" },
    ],
  },

  // ------------------------------------------------------------- HSR Layout
  {
    slug: "home-renovation-in-hsr-layout",
    service: "Home Renovation",
    location: "HSR Layout",
    title: "Home Renovation in HSR Layout, Bangalore | ACIPL Contractors",
    description:
      "Home renovation in HSR Layout, Bangalore. Apartment and builder-floor renovation across Sectors 1 to 7 — kitchens, bathrooms, flooring and full interiors with society approvals handled.",
    h1: "Home Renovation in HSR Layout",
    heroSubtitle:
      "Renovating HSR Layout's builder floors and apartments across Sectors 1 to 7, with society permissions and neighbours handled as part of the job.",
    image: "/Updated-renovation.png",
    imageAlt: "Apartment renovation completed by ACIPL in HSR Layout, Bangalore",
    intro: [
      "HSR Layout's housing is younger than JP Nagar's — mostly builder floors and apartment blocks from the 2000s onward. The renovation brief here is rarely about failing services. It is usually that the original builder specification was basic, and after ten or fifteen years the flooring, bathrooms and kitchen are simply tired rather than broken.",
      "That makes for a different kind of project: less strip-out, more upgrade, and a much stronger case for keeping what still performs. We will tell you when your flooring is worth polishing rather than replacing.",
    ],
    localContext: {
      heading: "Renovating builder-spec homes across HSR's sectors",
      body: "The typical HSR renovation targets three things. Bathrooms, where the original sanitaryware and tiling were specified to a price and the shower area often has no proper waterproofing upstand. Kitchens, where a basic granite platform with open shelving under it is replaced by proper modular storage. And flooring, where builder-grade vitrified tiles have dulled or where owners want to move to a warmer finish. Most of this is achievable without touching the structure, which keeps both cost and approval friction low. The real project management challenge in HSR is neighbourly: these are dense buildings with shared walls and stairwells, so noise windows, debris handling and stairwell protection matter as much to the outcome as the finishes do.",
    },
    highlights: [
      {
        title: "Bathroom rebuilds done right",
        body: "Full strip to slab, proper waterproofing with upstands at the shower wall, correct falls to the drain, then tiling and sanitaryware — the sequence that stops damp reaching the neighbour below.",
      },
      {
        title: "Kitchen upgrade over existing platform",
        body: "Retaining the RCC platform and plumbing where they are sound, and building proper modular storage around them. Less demolition, less debris, faster handover.",
      },
      {
        title: "Honest advice on flooring",
        body: "Where existing tiles are sound, polishing or overlay is often the better value. Where they are not, we lift and replace — but we will not sell you a floor you do not need.",
      },
      {
        title: "Society and neighbour management",
        body: "Work permits, deposits, agreed noise windows, stairwell and lift protection, and daily debris removal rather than a bag left on the landing.",
      },
    ],
    process: [
      {
        step: "Survey and priorities",
        body: "A walk-through to separate what genuinely needs replacing from what can be refurbished, and a budget frame against both.",
      },
      {
        step: "Approvals and scheduling",
        body: "Society work permit, deposit, working hours and lift booking agreed before the crew is scheduled.",
      },
      {
        step: "Wet work first",
        body: "Bathrooms and any plumbing changes completed and water-tested before dry trades start, so nothing finished has to be reopened.",
      },
      {
        step: "Finishes and handover",
        body: "Kitchen, joinery, flooring and painting, then snag closure and a handover walk with your society deposit reclaim paperwork in order.",
      },
    ],
    faqs: [
      {
        question: "What does renovating an HSR Layout apartment cost?",
        answer:
          "A bathroom rebuild runs ₹1.4 lakh to ₹2.8 lakh each depending on sanitaryware and tiling. A kitchen upgrade over the existing platform is ₹1.6 lakh to ₹3 lakh. Flooring replacement is ₹180 to ₹350 per square foot laid. A whole-flat refresh of a 3BHK covering all three plus painting typically lands between ₹8 lakh and ₹16 lakh.",
      },
      {
        question: "How long will a bathroom take?",
        answer:
          "Twelve to eighteen working days per bathroom done properly. The waterproofing needs a curing and ponding test before tiling, and rushing that is how leaks reach the flat below six months later. If you have only one bathroom, we sequence to keep it usable as long as possible and give you a firm window for when it will not be.",
      },
      {
        question: "Will you deal with our apartment association?",
        answer:
          "Yes. Work permit, worker list, refundable interior deposit, agreed working hours and lift protection are all handled by our supervisor. We also keep to the noise windows, which is the thing that actually determines whether your neighbours complain.",
      },
      {
        question: "Is my ten-year-old flooring worth replacing?",
        answer:
          "Often not. Builder-grade vitrified tile that is dull but sound can frequently be brought back with professional polishing at a fraction of replacement cost and with no demolition debris. Replacement makes sense where tiles are cracked or hollow-sounding, or where you genuinely want a different material. We will give you the honest read after seeing it.",
      },
    ],
    testimonial: {
      quote:
        "We had budgeted to redo all the flooring and they said only two rooms actually needed it. That conversation cost them money and it is exactly why we trusted the rest of the quote.",
      name: "Anand T.",
      project: "3BHK builder floor, HSR Layout Sector 2",
    },
    related: [
      { label: "Interior Designers in HSR Layout", href: "/interior-designers-in-hsr-layout-bangalore" },
      { label: "Home Renovation in JP Nagar", href: "/home-renovation-in-jp-nagar" },
      { label: "Our Project Gallery", href: "/gallery" },
    ],
  },

  // ------------------------------------------------------------ Marathahalli
  {
    slug: "modular-kitchen-in-marathahalli",
    service: "Modular Kitchen",
    location: "Marathahalli",
    title: "Modular Kitchen in Marathahalli, Bangalore | ACIPL",
    description:
      "Modular kitchen design and installation in Marathahalli, Bangalore. Compact apartment layouts, moisture-resistant carcasses and itemised per-cabinet pricing. Free site measurement.",
    h1: "Modular Kitchen in Marathahalli",
    heroSubtitle:
      "Kitchens designed for Marathahalli's compact apartment layouts — maximum storage from a small footprint, priced cabinet by cabinet.",
    image: "/updated-homein.jpg",
    imageAlt: "Modular kitchen installed by ACIPL in an apartment in Marathahalli, Bangalore",
    intro: [
      "Marathahalli's apartment stock is dense, well-connected to the Outer Ring Road employers, and generally efficient rather than spacious. The kitchens in these flats are often genuinely small — six to eight feet of usable run — and the entire design problem is extracting proper storage from that without making the room unworkable.",
      "It is a problem worth solving carefully rather than expensively. A well-planned compact kitchen with the right internal fittings holds more than a larger badly-planned one, and it does not need premium finishes to do it.",
    ],
    localContext: {
      heading: "Getting real storage out of a compact Marathahalli kitchen",
      body: "In a short kitchen run, the wasted space is almost always in three places: the corner, the area under the sink, and the gap between the top of the wall units and the ceiling. Addressing all three is what turns a cramped kitchen into a functional one. A corner carousel or magic corner recovers volume that would otherwise be dead. Under-sink space becomes usable with a proper pull-out that works around the plumbing rather than a fixed shelf that does not. And taking wall units to the ceiling with a lift-up top tier adds a full band of seasonal storage. None of these are expensive additions — they are planning decisions, and they matter far more in Marathahalli's flats than the choice between a laminate and an acrylic shutter.",
    },
    highlights: [
      {
        title: "Storage-first planning",
        body: "Corner solutions, under-sink pull-outs and full-height wall units specified as standard, because in a small kitchen these decide whether it works.",
      },
      {
        title: "Moisture-resistant construction",
        body: "BWP-grade plywood carcasses with sealed edges, particularly under the sink and along the utility wall where failures start.",
      },
      {
        title: "Value-conscious specification",
        body: "Money directed at hardware and internal fittings, which you use every day, rather than at a premium shutter finish that only changes how it looks.",
      },
      {
        title: "Fast, clean installation",
        body: "Prefabricated off site and assembled in three to four days, with society permissions and lift booking handled by our supervisor.",
      },
    ],
    process: [
      {
        step: "Measurement",
        body: "Exact measurement of the run, platform depth, window position and every plumbing and electrical point — in a small kitchen, centimetres decide the layout.",
      },
      {
        step: "Layout and storage audit",
        body: "We plan against what you actually store. Two or three layout options with storage volume compared, plus a 3D view.",
      },
      {
        step: "Workshop build",
        body: "Three to four weeks of off-site fabrication, so there is no cutting or dust inside your flat.",
      },
      {
        step: "Install and snag",
        body: "Three to four days on site, hardware adjusted, snag list walked with you and closed before the balance is invoiced.",
      },
    ],
    faqs: [
      {
        question: "What does a modular kitchen cost in Marathahalli?",
        answer:
          "For a typical compact apartment kitchen, ₹1.3 lakh to ₹2.4 lakh covers a well-specified laminate or membrane kitchen with good hardware. Acrylic and lacquered glass finishes add roughly twenty-five to forty percent. Because we price per cabinet, you can see exactly what each unit costs and adjust rather than negotiating a lump sum.",
      },
      {
        question: "My kitchen is very small. Is modular even worth it?",
        answer:
          "It is worth more in a small kitchen than a large one. A carpenter-built kitchen in a tight space tends to lose volume to fixed shelves and dead corners. Modular internal fittings — carousels, pull-outs, tandem baskets — are specifically designed to recover exactly that space, so the storage gain is proportionally larger.",
      },
      {
        question: "Should I spend more on shutters or on hardware?",
        answer:
          "Hardware, without much hesitation. Soft-close hinges, full-extension channels and good internal fittings are what you interact with every day and what determines whether the kitchen still functions well in five years. Shutter finish changes appearance only. If the budget is tight, take laminate shutters with good hardware over acrylic with basic fittings.",
      },
      {
        question: "How long does installation take?",
        answer:
          "Three to four days on site for a compact kitchen, after three to four weeks of workshop production. If you are replacing an existing kitchen, add a day for removal and debris clearance.",
      },
    ],
    testimonial: {
      quote:
        "Our kitchen is tiny and I assumed we would just have to live with it. The corner unit and the pull-out under the sink alone doubled what we can actually keep in there.",
      name: "Kavitha S.",
      project: "2BHK apartment, Marathahalli",
    },
    related: [
      { label: "Modular Kitchen in Whitefield", href: "/modular-kitchen-in-whitefield" },
      { label: "Home Interior Services", href: "/expertise/interior" },
      { label: "Contact Us", href: "/contact" },
    ],
  },

  // ------------------------------------------------------------ Banashankari
  {
    slug: "interior-designers-in-banashankari",
    service: "Interior Design",
    location: "Banashankari",
    title: "Interior Designers in Banashankari, Bangalore | ACIPL",
    description:
      "Interior designers in Banashankari, Bangalore. Home interiors for BDA layout houses and apartments across Banashankari stages — kitchens, wardrobes, ceilings and full renovation.",
    h1: "Interior Designers in Banashankari, Bangalore",
    heroSubtitle:
      "Interiors for Banashankari's BDA layout homes and newer apartments — designed around what is already there.",
    image: "/updated-homein.jpg",
    imageAlt: "Home interior project completed by ACIPL in Banashankari, Bangalore",
    intro: [
      "Banashankari's BDA stages were laid out generously, and the independent houses built across them through the 1990s reflect that — decent room sizes, proper cross-ventilation, and site dimensions that gave the original builders room to work with. Interiors here are usually about updating rather than compensating.",
      "Alongside those, the newer apartment developments along the Kanakapura Road and Outer Ring Road edges bring a different brief: efficient units where storage planning matters more than anything decorative. We work across both.",
    ],
    localContext: {
      heading: "Two housing types, two different briefs",
      body: "In the older BDA-layout houses across Banashankari's stages, the rooms are generally well-proportioned and naturally lit, so the interiors job is mostly about bringing the services and the finishes up to date — rewiring for modern loads, replacing tired flooring, and reworking a closed kitchen into something that connects to the dining space. In the newer apartments toward Kanakapura Road, the constraint is floor area, and the work is storage planning: full-height wardrobes, loft space used properly, and furniture scaled to the room rather than to a showroom. Metro access along the Green Line has made this a genuinely convenient part of the city to work in, which helps with scheduling deliveries and crew.",
    },
    highlights: [
      {
        title: "Services checked before finishes",
        body: "In houses of this age, electrical load and plumbing condition are assessed first — there is little sense putting new joinery over wiring that needs replacing.",
      },
      {
        title: "Kitchen and dining reconfiguration",
        body: "Opening a closed kitchen toward the dining area is the single most requested change in these homes, and the one that changes daily life most.",
      },
      {
        title: "Storage-led apartment interiors",
        body: "For the newer flats, wardrobes, lofts and utility storage planned against your actual inventory rather than a standard module count.",
      },
      {
        title: "Complete scope under one contract",
        body: "Civil, electrical, ceilings, joinery, flooring and painting handled by one team with one point of accountability.",
      },
    ],
    process: [
      {
        step: "Site visit and survey",
        body: "A walk-through with condition notes on wiring, plumbing and damp, plus measurements of every room in scope.",
      },
      {
        step: "Design and costing",
        body: "Layouts, 3D views and an itemised quote separating remedial work from the interiors you actually came for.",
      },
      {
        step: "Execution",
        body: "Services and civil first, then ceilings, joinery and painting, in a sequence that avoids reopening finished work.",
      },
      {
        step: "Snag and handover",
        body: "A joint snag walk, corrections closed, then handover with finish care notes and applicable warranties.",
      },
    ],
    faqs: [
      {
        question: "What do home interiors cost in Banashankari?",
        answer:
          "For an independent house, expect ₹9 lakh to ₹22 lakh for comprehensive interiors depending on size and how much remedial work is involved. Apartment interiors for a 2BHK typically run ₹6 lakh to ₹11 lakh. We break the quote down room by room so the number is something you can interrogate rather than accept.",
      },
      {
        question: "Can you open up a closed kitchen?",
        answer:
          "Usually yes, and it is the most common request in these houses. Whether the wall can be removed depends on whether it is structural — we have that assessed rather than assumed. Where a wall is load-bearing, a properly designed and supported opening is still often possible; it just needs to be engineered rather than knocked through.",
      },
      {
        question: "Do you handle the electrical work too?",
        answer:
          "Yes, including rewiring where it is needed. Houses in these layouts frequently have wiring sized for a much lighter load than a current household runs, and often no RCCB protection. We test first and tell you what is genuinely required.",
      },
    ],
    testimonial: {
      quote:
        "The house had good bones and they said so — talked us out of half the demolition we had planned and put the money into the kitchen and the wiring instead.",
      name: "Shashank G.",
      project: "Independent house, Banashankari 3rd Stage",
    },
    related: [
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Our Project Gallery", href: "/gallery" },
    ],
  },

  // -------------------------------------------------------------- BTM Layout
  {
    slug: "interior-designers-in-btm-layout",
    service: "Interior Design",
    location: "BTM Layout",
    title: "Interior Designers in BTM Layout, Bangalore | ACIPL",
    description:
      "Interior designers in BTM Layout, Bangalore. Compact flat and builder-floor interiors across 1st to 4th Stage — fast, cost-controlled fit-outs for owners and landlords.",
    h1: "Interior Designers in BTM Layout, Bangalore",
    heroSubtitle:
      "Practical, cost-controlled interiors for BTM Layout's compact flats and builder floors — including quick turnarounds for rental units.",
    image: "/updated-homein.jpg",
    imageAlt: "Compact apartment interior fit-out by ACIPL in BTM Layout, Bangalore",
    intro: [
      "BTM Layout is dense, well-connected and heavily tenanted, and a large share of the interiors work here is on compact units — 1BHK and 2BHK flats and builder floors where the whole job is getting a functional, durable result out of a modest footprint and a controlled budget.",
      "We do a lot of that work, including for owners fitting out units they do not live in. Those projects need speed, a specification that survives tenants, and a schedule that does not leave a flat vacant for a month longer than necessary.",
    ],
    localContext: {
      heading: "Compact units and quick turnarounds",
      body: "Two things define interiors work in BTM. First, the units are small, so every decision is a storage decision — full-height wardrobes rather than standard-height, loft space actually used, and furniture sized to the room. Second, a significant proportion of the housing stock is rented, and fit-outs for rental units are a genuinely different specification: hard-wearing laminate over delicate finishes, standard hardware that can be replaced easily rather than imported fittings with long lead times, and light-coloured neutral schemes that suit any tenant. Proximity to Silk Board also means material delivery timing matters — we schedule loads outside peak hours rather than losing half a day to traffic.",
    },
    highlights: [
      {
        title: "Every centimetre planned",
        body: "Full-height wardrobes, loft storage and under-bed drawers, because in a compact flat unplanned space is wasted space.",
      },
      {
        title: "Specification that lasts",
        body: "Durable laminate finishes and standard replaceable hardware for rental units — chosen because they hold up, not because they are cheap.",
      },
      {
        title: "Fast turnaround",
        body: "Prefabricated joinery and a tight sequence, so a vacant unit is back in use in weeks rather than months.",
      },
      {
        title: "Budget transparency",
        body: "Itemised per-unit pricing so you can see exactly where the money is going and adjust scope without renegotiating the whole quote.",
      },
    ],
    process: [
      {
        step: "Measurement and brief",
        body: "Room measurements plus a clear brief on whether this is your own home or a unit to let — the specification differs meaningfully.",
      },
      {
        step: "Layout and quote",
        body: "Storage-led layouts with a 3D view and an itemised, per-unit quote.",
      },
      {
        step: "Workshop build",
        body: "Joinery prefabricated off site to keep the on-site window short and the flat clean.",
      },
      {
        step: "Install and handover",
        body: "Assembly, painting, snag walk and handover — typically inside three weeks for a compact flat.",
      },
    ],
    faqs: [
      {
        question: "What do interiors cost for a 2BHK in BTM Layout?",
        answer:
          "A practical fit-out covering a modular kitchen, wardrobes in both bedrooms, a TV unit and painting typically runs ₹4.5 lakh to ₹8 lakh. Rental-specification fit-outs sit at the lower end because the finish selection is deliberately hard-wearing rather than premium. We price per unit so scope can be trimmed transparently.",
      },
      {
        question: "How quickly can you finish a flat I need to let out?",
        answer:
          "Three to four weeks from design sign-off for a compact 2BHK, most of which is workshop production. On-site work is usually five to eight days. If the flat is vacant and access is straightforward, that timeline is reliable.",
      },
      {
        question: "Should a rental unit be specified differently from my own home?",
        answer:
          "Yes, meaningfully. For a let unit we use hard-wearing laminates, standard hardware that any technician can replace, and neutral schemes with broad appeal. Delicate finishes and imported fittings look better but cost more to maintain across tenancies, and replacement lead times leave the unit unusable.",
      },
    ],
    testimonial: {
      quote:
        "I own two units here and needed them turned around fast between tenants. They gave me a spec built for that rather than trying to sell me a showroom kitchen. Both were let within a week of handover.",
      name: "Mohan R.",
      project: "Two 2BHK units, BTM Layout 2nd Stage",
    },
    related: [
      { label: "Home Renovation in HSR Layout", href: "/home-renovation-in-hsr-layout" },
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Contact Us", href: "/contact" },
    ],
  },

  // ------------------------------------------------------------ Malleshwaram
  {
    slug: "interior-designers-in-malleshwaram",
    service: "Interior Design",
    location: "Malleshwaram",
    title: "Interior Designers in Malleshwaram, Bangalore | ACIPL",
    description:
      "Interior designers in Malleshwaram, Bangalore. Sensitive interiors and renovation for old Bangalore homes — Madras terrace roofs, teak joinery and period detail, brought up to modern use.",
    h1: "Interior Designers in Malleshwaram, Bangalore",
    heroSubtitle:
      "Interiors for old Bangalore homes — updating Malleshwaram's period houses for modern living without stripping out what makes them worth owning.",
    image: "/updated-homein.jpg",
    imageAlt: "Interior renovation of a period home by ACIPL in Malleshwaram, Bangalore",
    intro: [
      "Malleshwaram has housing stock you cannot replace: Madras terrace roofs, solid teak doors and windows, generous verandahs, red oxide and mosaic floors, and ceiling heights no modern apartment offers. A lot of what passes for renovation in these homes destroys exactly the things that make them valuable.",
      "Our approach here is conservative in the literal sense. Upgrade the services, fix the genuine problems, and restore rather than replace the elements that are still doing their job — which, in well-built houses of this age, is most of them.",
    ],
    localContext: {
      heading: "Renovating old Bangalore houses without stripping them",
      body: "Three things need care in a Malleshwaram period home. Madras terrace roofing is a traditional system of timber joists, brick and lime, and it behaves quite differently from an RCC slab — it can be repaired well, but a modern waterproofing coating applied over it without understanding the construction tends to trap moisture and accelerate the decay it was meant to prevent. Original teak joinery is almost always worth restoring: the timber quality is far beyond what is commercially available now, and a door that has been in service for seventy years will outlast its replacement. Red oxide and mosaic flooring can usually be polished back to a finish that no new tile matches. Against that, the services genuinely do need modernising, and the narrow lanes across the older crosses mean material has to arrive in small loads with debris removed the same day.",
    },
    highlights: [
      {
        title: "Restore before replace",
        body: "Teak joinery, mosaic and red oxide floors and original ironmongery assessed for restoration first. Replacement is the fallback, not the default.",
      },
      {
        title: "Traditional roofs handled correctly",
        body: "Madras terrace repair approached as the lime-and-timber system it is, rather than sealed over with a coating that traps moisture.",
      },
      {
        title: "Discreet services upgrade",
        body: "Rewiring and plumbing brought to modern standards with routes planned to avoid cutting through the features you are trying to keep.",
      },
      {
        title: "Modern function, original character",
        body: "Contemporary kitchens and bathrooms integrated into the plan without flattening the proportions and detail that give the house its character.",
      },
    ],
    process: [
      {
        step: "Condition and heritage survey",
        body: "A detailed assessment of the roof, joinery, floors and structure, identifying what to keep, what to restore and what genuinely needs replacing.",
      },
      {
        step: "Design and scope",
        body: "Proposals that separate essential repair from elective change, so you can see the cost of each and decide deliberately.",
      },
      {
        step: "Repair and services",
        body: "Structural and roof repair, rewiring and plumbing, sequenced so the specialist work happens before any finishing.",
      },
      {
        step: "Restoration and finishing",
        body: "Joinery and floor restoration, new kitchen and bathrooms, painting, then a snag walk and handover.",
      },
    ],
    faqs: [
      {
        question: "Is it cheaper to renovate an old Malleshwaram house or rebuild?",
        answer:
          "Rebuilding is frequently cheaper per square foot, but it is rarely the better decision here. Current setback and FAR rules often mean a new building would be smaller than what stands today, and you cannot buy back the ceiling height, the timber or the proportions. We give you both numbers honestly and let you weigh them — but we will tell you when we think demolition is a mistake.",
      },
      {
        question: "Can a Madras terrace roof be repaired?",
        answer:
          "Usually, yes. Failures are commonly localised to specific joists or an area where water has been getting in for years. Repair means opening up the affected section, replacing damaged timber, and reinstating the brick and lime layers properly. What does not work is coating the whole surface with a modern waterproofing membrane — that traps moisture in a system designed to breathe and makes the decay worse.",
      },
      {
        question: "Is the original teak joinery worth keeping?",
        answer:
          "Almost always. The timber in these doors and windows is old-growth teak that simply is not available commercially now. Restoration — stripping, repairing joints, rehanging and refinishing — typically costs less than a good replacement and gives a far better result. We only recommend replacement where the timber is genuinely beyond repair.",
      },
    ],
    testimonial: {
      quote:
        "Every other quote started with demolishing the roof. ACIPL brought someone who actually understood Madras terrace construction, repaired three joists, and left the rest alone. The house still feels like the house.",
      name: "Lakshmi and Raghavan N.",
      project: "Period home, Malleshwaram 8th Cross",
    },
    related: [
      { label: "Interior Design Expertise", href: "/expertise/interior" },
      { label: "Interior Designers in Rajajinagar", href: "/interior-designers-in-rajajinagar" },
      { label: "Featured Projects", href: "/featured-projects" },
    ],
  },

  // ------------------------------------------------------------- Rajajinagar
  {
    slug: "interior-designers-in-rajajinagar",
    service: "Interior Design",
    location: "Rajajinagar",
    title: "Interior Designers in Rajajinagar, Bangalore | ACIPL",
    description:
      "Interior designers in Rajajinagar, Bangalore. Residential and mixed-use interiors across the blocks — home interiors, shop and office fit-outs, and full renovation under one contract.",
    h1: "Interior Designers in Rajajinagar, Bangalore",
    heroSubtitle:
      "Home and commercial interiors across Rajajinagar's blocks — including the mixed-use buildings where you live above and let below.",
    image: "/updated-homein.jpg",
    imageAlt: "Residential interior project completed by ACIPL in Rajajinagar, Bangalore",
    intro: [
      "Rajajinagar has a building type that is common here and rare in newer parts of the city: the mixed-use property, with commercial space at ground level and the family home above. Those buildings need an approach that handles both, and keeps the commercial tenancy earning while the residential floors are worked on.",
      "Alongside those, the established BDA blocks hold well-built independent houses from the 1980s and 1990s that are now reaching the point of needing a proper services overhaul rather than another round of patching.",
    ],
    localContext: {
      heading: "Mixed-use buildings and established block housing",
      body: "Working on a mixed-use Rajajinagar property means two sets of constraints in one building. The ground-floor commercial unit generates income and its tenant will not welcome a shut-down, so noisy and disruptive work upstairs has to be timed around trading hours, and the shared staircase needs protecting and keeping clear. Separating the electrical supply properly between commercial and residential is also worth doing during a renovation, because these buildings frequently grew organically and the distribution reflects that. For the independent houses in the older blocks, the pattern is familiar: sound structure, dated services, and a kitchen and bathroom layout designed for how households ran thirty years ago. Metro access on the Purple Line has made the area easier to service, which helps keep crews and deliveries on schedule.",
    },
    highlights: [
      {
        title: "Commercial tenancy protected",
        body: "Work sequenced around ground-floor trading hours, with the shared stair protected and kept usable throughout.",
      },
      {
        title: "Electrical separation sorted",
        body: "Proper separation of commercial and residential supply and metering during renovation — untangled once rather than lived with indefinitely.",
      },
      {
        title: "Shop and office fit-outs",
        body: "Retail and small office fit-out for the ground-floor unit, from shopfront and lighting to storage and counters.",
      },
      {
        title: "Full residential renovation",
        body: "Rewiring, plumbing, waterproofing, kitchen, wardrobes and finishes for the home above, under the same contract.",
      },
    ],
    process: [
      {
        step: "Survey and staging plan",
        body: "Condition survey across both floors plus an agreed staging plan that keeps the commercial unit trading.",
      },
      {
        step: "Design and quote",
        body: "Separate itemised scopes for the commercial and residential portions so each stands on its own numbers.",
      },
      {
        step: "Services and civil",
        body: "Rewiring, supply separation, plumbing and waterproofing completed and tested before any finishing work starts.",
      },
      {
        step: "Fit-out and handover",
        body: "Ceilings, joinery, flooring and painting, then a snag walk on each floor and handover with as-built service layouts.",
      },
    ],
    faqs: [
      {
        question: "Can you work on the house while the shop below stays open?",
        answer:
          "Yes, and it is how most of these projects run. Demolition, core drilling and anything else noisy is scheduled around the shop's trading hours, usually early morning or after close. The shared staircase is sheeted and kept clear, and debris is removed daily rather than staged on the landing. It extends the programme somewhat, but far less than losing the rent would cost you.",
      },
      {
        question: "What does a full renovation cost in Rajajinagar?",
        answer:
          "For an independent house of 1,800 to 2,400 square feet, a comprehensive renovation with rewiring, plumbing, waterproofing, kitchen, wardrobes and painting typically runs ₹16 lakh to ₹30 lakh. A ground-floor commercial fit-out is quoted separately and depends entirely on use — retail, office and clinic specifications differ substantially.",
      },
      {
        question: "Our building's wiring is shared between the shop and the house. Can that be fixed?",
        answer:
          "Yes, and a renovation is the right moment to do it. These buildings often grew in stages with the electrical distribution following along informally. Separating supply and metering properly makes billing clean, isolates faults, and means work on one floor no longer means switching off the other.",
      },
    ],
    testimonial: {
      quote:
        "The shop below is our income and we could not afford to close it. They worked early mornings for the noisy parts and the tenant did not lose a single trading day.",
      name: "Suresh B.",
      project: "Mixed-use building, Rajajinagar 4th Block",
    },
    related: [
      { label: "Interior Designers in Malleshwaram", href: "/interior-designers-in-malleshwaram" },
      { label: "Interior Designers in Banashankari", href: "/interior-designers-in-banashankari" },
      { label: "Products & Fittings", href: "/products" },
    ],
  },
]

/**
 * Fast lookup used by the dynamic route. Keyed by plain `string` because the
 * incoming route param is untyped — an unknown slug simply misses and 404s.
 */
export const landingPageBySlug = new Map<string, LandingPage>(
  landingPages.map((page) => [page.slug, page])
)

export const landingPageSlugs = landingPages.map((page) => page.slug)
