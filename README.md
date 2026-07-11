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

## 🖼️ Using your own photos (free, no image hosting)

All project, hero, studio, CTA and team images are **self-hosted** from the `public/images/`
folder. They ship with the site and are served free by your static host's CDN — no
Cloudinary/Imgur/etc. needed. **To use your own photo, just overwrite the file of the same name**
— no code changes.

| Where it shows | File to replace |
| --- | --- |
| Project card + gallery (per project) | `public/images/projects/<project-id>/cover.jpg`, `02.jpg`, `03.jpg` |
| Hero cards (main + small) | reuse `monolith-house/cover.jpg` and `02.jpg` |
| About / Studio section | `public/images/studio.jpg` |
| CTA band background | `public/images/cta.jpg` |
| Team headshots | `public/images/team/imran-khan.jpg`, `mohammed-kajali.jpg`, `ridwan.jpg`, `rasith.jpg` |

Project IDs are `monolith-house`, `atrium-offices`, `linen-loft`, `coastal-pavilion`,
`foundry-market`, `terracotta-studio` (see `src/data/projects.ts`). `cover.jpg` is the grid
thumbnail **and** the first gallery image.

**Recommended before uploading** (keeps the site fast and free):
- Format **JPG** (or **WebP** for smaller files), **~1600px** wide, portrait/landscape as-is.
- Compress for free at [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com) —
  aim for **under ~300 KB** each.
- Keep the **exact same filename** so no code edit is needed. (If you switch to `.webp`, update
  the extension in the `cover`/`shot` helpers at the top of `src/data/projects.ts`.)

**To add or remove a project:** edit the array in `src/data/projects.ts` and add a matching
`public/images/projects/<new-id>/` folder with `cover.jpg`, `02.jpg`, `03.jpg`.

**One image stays remote by design:** the **social-share preview** (`og:image` / `twitter:image`
in `index.html`) — social platforms require an absolute `https://…` URL, so point that at
`https://yourdomain/images/og.jpg` once your domain is live.

## 📬 Contact form

The form works out of the box in **mailto fallback** mode (opens the visitor's email client).
To collect submissions properly, create a free [EmailJS](https://www.emailjs.com) account and add
your keys:

```bash
cp .env.example .env
# then set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
```

## ☁️ Deployment (free)

Any static host works. Build command `npm run build`, output directory `dist`.

- **Cloudflare Pages** (recommended) — connect the repo, set build `npm run build`, output `dist`.
- **Netlify** — same settings, or drag-and-drop the `dist/` folder.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch.

Remember to add the `VITE_EMAILJS_*` keys as environment variables in your host's dashboard.

---

© Instyle Architect. Placeholder content for demonstration — replace before going live.
