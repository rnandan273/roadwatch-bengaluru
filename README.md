# RoadWatch Bengaluru

A public, bilingual transparency dashboard for Bengaluru's road infrastructure works.

> _If every taxpayer can be tracked for every rupee they owe the government, why can't the government show taxpayers where every rupee spent on roads has gone?_

RoadWatch puts every road work online. For any road, citizens can see exactly what it cost, who built it, which officer signed off, when it was promised — and whether it was actually delivered.

## Features

- **Home dashboard** — portfolio health, KPIs, a live map preview, and spotlights (most delayed, largest, recently updated).
- **Map view** — full-screen [Leaflet](https://leafletjs.com/) + OpenStreetMap map with a status-coded marker per work and a synced, searchable sidebar list.
- **Projects** — filter by status, zone, and work type; toggle overdue-only; search; and sort by cost, delay, recency, or progress.
- **Project detail** — sanctioned vs. spent cost, full timeline, maintenance / defect-liability period (DLP), and accountability (responsible officer + contractor).
- **About** — the civic rationale behind the project.
- **Bilingual** — English / ಕನ್ನಡ (Kannada), toggled in the header and persisted in `localStorage`.
- **Responsive** — mobile-first layouts across every screen.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + React 18 + TypeScript
- [Leaflet](https://leafletjs.com/) / [react-leaflet](https://react-leaflet.js.org/) with OpenStreetMap tiles (no API key required)
- Tailwind CSS (base) with design-faithful inline styling
- `next/font` (Public Sans, Spectral, Noto Sans Kannada)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/                 # Routes (Home, Map, Projects, Projects/[id], About) + layout & globals
components/          # Header, Footer, ProjectCard, StatusBadge, RoadMap (Leaflet)
lib/
  data.ts            # Typed seed data: PROJECTS, STATUS_META, PORTFOLIO, map config
  strings.ts         # Bilingual EN/KN string sets
  helpers.ts         # Formatting, filtering, sorting, view-model builders
  i18n.tsx           # Language context + persistence
```

## Data & disclaimer

The dataset is **illustrative sample data** for a fictional ₹5,500 crore program. All
contractor and officer names are anonymized placeholders (`Contractor A`, `Officer A`, …)
and do **not** refer to any real person or firm. Figures, dates, and locations are
representative and intended to demonstrate the dashboard, not to report actual works.

## License

Built as a non-partisan civic utility. No logins, no paywalls — every field, always public.
