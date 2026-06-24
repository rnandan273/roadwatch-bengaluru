# Bengaluru Road Works Transparency Dashboard — Design Storyline

> A design brief to hand off to Claude (design) for building the UI.

---

## 1. The Storyline (the "why")

**Headline:** *₹5,500 crore later, Bengaluru deserves answers.*

Every taxpayer in Bengaluru is tracked for every rupee they owe the government.
Yet citizens have no way to see where ₹5,500 crore of road money has gone, who
spent it, who is accountable, and whether the work was actually delivered.

This dashboard flips that relationship. It makes **public money publicly
visible**. A citizen standing on a broken road should be able to pull out their
phone, find that exact road, and see: how much it cost, who built it, which
officer signed off, when it was promised, and whether it is still under defect
liability — meaning the contractor must fix it *for free*.

**The product is an act of accountability.** The design must feel like a trusted
public utility, not a flashy startup app and not a dull government portal. Think
*"election commission results page meets a modern civic data product"*: credible,
fast, legible, neutral, and impossible to misread.

### Emotional arc the design should support
1. **Recognition** — "This is my road / my ward."
2. **Clarity** — "I now understand where the money went."
3. **Accountability** — "I know exactly who is responsible and what they owe."
4. **Empowerment** — "I can share this, question this, and act on this."

---

## 2. Who it's for (audiences & their jobs)

| Audience | What they want in 10 seconds |
| --- | --- |
| **Everyday citizen** | "Find my road. Is it done? Is it overdue? Who do I blame/thank?" |
| **RWA / activist** | "Show all works in my ward, total spend, and what's delayed." |
| **Journalist** | "Biggest projects, biggest delays, top contractors by value." |
| **Elected representative / officer** | "Status of works under my jurisdiction." |

Design for the **everyday citizen first** — low-data phones, bright sunlight,
mixed digital literacy, Kannada + English readers. Everyone else is served by
the same screens with filters and depth.

---

## 3. Design principles (non-negotiables)

1. **Numbers you can trust at a glance.** Money, dates, and status are the heroes.
   Never bury the rupee figure.
2. **Mobile-first.** Most citizens arrive on a phone. Every screen must be
   thumb-usable and readable in sunlight (high contrast).
3. **Plain language, bilingual-ready.** Avoid jargon. "Defect Liability Period"
   gets a one-line plain explanation ("Contractor must repair defects free until
   this date"). Layout must tolerate Kannada strings ~30% longer.
4. **Status is colour-coded and consistent everywhere.**
5. **Nothing hidden.** Every field the MP demanded is always shown, never behind
   a paywall, login, or "request access".
6. **Fast & light.** Works on a slow 3G connection. No heavy hero videos.
7. **Neutral & credible.** No party colours, no spin. Data, plainly presented.

---

## 4. The status system (core visual language)

A single, consistent status vocabulary used on cards, map pins, and detail pages:

| Status | Meaning | Colour intent |
| --- | --- | --- |
| **Not Started** | Awarded, work not begun | Slate / grey |
| **In Progress** | Active construction | Blue |
| **Delayed** | Past promised date, incomplete | Amber/Orange |
| **Completed** | Work finished | Green |
| **Under Maintenance / DLP** | Done but contractor still liable for defects | Teal |
| **Stalled** | No activity for a long time | Red |

Use colour **plus** a label/icon (never colour alone — accessibility).

---

## 5. Information architecture (screens to design)

### A. Dashboard Home — "The State of Bengaluru's Roads"
The landing page and the emotional hook.
- **Hero band:** the headline + the big number: **₹5,500 cr tracked**, with
  sub-stats: total projects, % completed, % delayed, km of road.
- **Live counters / KPI cards:** Total Sanctioned Cost · Projects · Completed ·
  In Progress · Delayed · Total Road Length.
- **Status breakdown bar** (stacked, colour-coded) — instant sense of health.
- **Map preview** with a "Explore the map" call to action.
- **"Find your road" search** front and centre.
- **Spotlight strips:** "Most delayed projects", "Largest projects by cost",
  "Recently updated".
- Trust footer: data source, last-updated timestamp.

### B. Map View — "Where the money is"
- Full-bleed Leaflet + OpenStreetMap of Bengaluru.
- Road works as **colour-coded pins/segments** by status.
- Click a pin → compact popup card (road name, cost, contractor, status, link).
- Side panel: filters (status, ward/zone, work type, cost range) + result list
  that stays in sync with the map.
- Mobile: map on top, draggable list sheet below.

### C. Projects List — "Browse & hold accountable"
- Searchable, filterable, sortable list/grid of **Project Cards**.
- Filters: status, ward/zone, work type, contractor, cost range, overdue-only.
- Sort: cost (high→low), most delayed, recently updated, % complete.
- Each card: road name, area/ward, status badge, cost, contractor, progress bar,
  promised completion date (with "X days overdue" if late).

### D. Project Detail — "Every rupee, every name"
The accountability page. Everything the MP demanded, fully exposed:
- Road name, area, ward/zone, work type, length, map locator.
- **Cost** (sanctioned vs spent), **funding source**.
- **Contractor** (name, work order no.).
- **Officer responsible** (name + designation) — accountability front and centre.
- **Timeline:** sanctioned → start → promised completion → actual (visual stepper).
- **Maintenance period** & **Defect Liability Period** with plain-language note
  and a clear "free-repair-until" date.
- **Real-time status** + progress %, last updated.
- Citizen actions: "Report an issue with this road", "Share", "Download details".

### E. About / Accountability
The story behind the dashboard: the demand, the ₹5,500 cr, the data sources,
the methodology, how citizens and volunteer technologists can contribute.

---

## 6. Key components to design (a kit)

- **KPI / Stat card** (big number, label, small trend or sub-text).
- **Status badge** (6 states, with icon + label).
- **Project card** (list/grid) with progress bar + overdue flag.
- **Stacked status bar** (portfolio health).
- **Timeline stepper** (sanction → start → promised → actual).
- **Map pin + popup card.**
- **Filter bar / filter sheet** (desktop sidebar, mobile bottom sheet).
- **Search field** ("Find your road by name or area").
- **"Officer responsible" / "Contractor" identity block** (name, role, accountable label).
- **Plain-language tooltip** (for DLP, maintenance period, etc.).
- **Overdue / delay indicator** ("142 days overdue").

---

## 7. Visual direction

- **Tone:** trustworthy public-service utility. Clean, generous whitespace,
  strong typographic hierarchy. Data-forward, not decorative.
- **Colour:** neutral base (white / very light grey surfaces, near-black text),
  a calm civic **blue** as the primary brand accent, and the fixed status palette
  for all state. Deliberately **non-partisan** — avoid party-associated colour schemes.
- **Typography:** highly legible sans-serif; large, confident numbers for money
  and dates. Must support Latin + Kannada gracefully.
- **Iconography:** simple, universal (road, rupee, calendar, person/officer,
  contractor/hardhat, wrench for maintenance).
- **Imagery:** minimal; let data and the map carry the page. Optional subtle
  Bengaluru skyline/road motif in the hero only.
- **Density:** comfortable on mobile, information-rich on desktop.

---

## 8. Accessibility & inclusion

- WCAG AA contrast minimum; never convey status by colour alone.
- Large tap targets (≥44px), readable base font (≥16px).
- Bilingual-ready layouts (English/Kannada), no truncation of critical numbers.
- Works without JavaScript-heavy interactions for core reading of data.
- Designed to be readable on a cheap phone in bright outdoor light.

---

## 9. One-line brief (for the top of the design file)

> Design a fast, mobile-first, non-partisan public dashboard that lets any
> Bengaluru citizen find a road and instantly see its cost, contractor,
> responsible officer, timeline, maintenance & defect-liability period, and
> live status — turning ₹5,500 crore of road spending into something every
> taxpayer can see and hold accountable.
