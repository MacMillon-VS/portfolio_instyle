# Instyle Architect — Portfolio Website

A modern, luxury, parallax-animated portfolio for **Instyle Architect**, a design-led
architecture & construction studio. Built as a fast, static **React + Vite + Tailwind** site that
deploys for free on any static host.

## ✨ Features

- **Rich motion** — GSAP ScrollTrigger parallax, Lenis smooth scroll, Framer Motion reveals,
  animated counters, and a scroll-driven process timeline.
- **Sections** — parallax Hero, Stats, filterable Projects grid with slide-in case-study modal,
  Studio/About, Services, Process timeline, tiered **Pricing**, Team, awards marquee, a bold
  pre-footer CTA band, and a validated Contact form.
- **Strong CTAs everywhere** — nav "Start a project", per-pricing "Get a quote" (prefills the
  contact form), CTA band, and direct email / phone / WhatsApp links.
- **Production-ready** — SEO meta + Open Graph + JSON-LD `GeneralContractor` schema, favicon,
  `robots.txt`, lazy-loaded imagery, and full `prefers-reduced-motion` support.

## 🧱 Tech stack

React 18 · TypeScript · Vite 5 · Tailwind CSS 3 · Framer Motion · GSAP (ScrollTrigger) ·
Lenis · lucide-react.

## 🚀 Getting started

> Requires Node 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

Build & preview production output:

```bash
npm run build      # outputs to dist/
npm run preview
```

## ✏️ Editing content

All copy, projects, services, team, pricing and process steps live in **`src/data/`** — edit
those files to update the site without touching components:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Firm name, tagline, nav, contact details, socials |
| `src/data/projects.ts` | Portfolio projects + galleries |
| `src/data/services.ts` | Services grid |
| `src/data/pricing.ts` | Pricing tiers & features |
| `src/data/process.ts` | Process timeline steps |
| `src/data/team.ts` | Team members + headline stats |

Placeholder photography is served from Unsplash CDN URLs — swap the URLs in the data files (or
drop images in `public/` and reference them by path) with the firm's real project photos.

## 📬 Contact form

The form works out of the box in **mailto fallback** mode (opens the visitor's email client).
To collect submissions properly, create a free [Formspree](https://formspree.io) form and add its
ID:

```bash
cp .env.example .env
# then set VITE_FORMSPREE_ID=your_form_id
```

## ☁️ Deployment (free)

Any static host works. Build command `npm run build`, output directory `dist`.

- **Cloudflare Pages** (recommended) — connect the repo, set build `npm run build`, output `dist`.
- **Netlify** — same settings, or drag-and-drop the `dist/` folder.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch.

Remember to add `VITE_FORMSPREE_ID` as an environment variable in your host's dashboard.

---

© Instyle Architect. Placeholder content for demonstration — replace before going live.
