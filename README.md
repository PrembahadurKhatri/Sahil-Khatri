# Sahil Khatri — Portfolio

A simple, professional, dark/light-toggle personal portfolio. Fully static, frontend-only — no
backend, no database.

## Tech stack

Built with **Vite + React + Tailwind CSS + Framer Motion** — not the Next.js/Three.js/GSAP/Lenis
stack a fully literal "Awwwards 3D portfolio" brief originally called for (see git history for that
first pass). Two design decisions, both deliberate:

- **No real 3D.** No WebGL scene, no perspective-tilt cards, no floating/rotating decorative
  elements. Everything reads through plain, flat components and Framer Motion fades/slides.
- **One accent color, not a gradient system.** The palette is near-black + off-white + a single
  muted gold accent (`src/index.css`'s `--color-accent`), used sparingly — small labels, one CTA,
  active states — never as a rainbow gradient splashed across headings or a neon glow shadow. A
  three-color electric-blue/violet/cyan gradient look was the specific thing asked not to repeat;
  if you want to retheme it, that one CSS variable (plus its light-mode counterpart) is the only
  thing to touch.

## What's included

- **Dark/day theme toggle** (`hooks/useTheme.js`) — persisted, defaults to dark, no flash-of-
  wrong-theme on load (see the inline script in `index.html`).
- **Loader** — logo, progress percentage, clean fade out.
- **Hero** — name, typing role text, CTA buttons, subtle scroll indicator.
- **About** — bio, animated stat counters, timeline, fun facts.
- **Skills** — a flat grid of skill cards; click any for a detail card (proficiency bar, project
  count, experience, description).
- **Projects** — horizontal scroll shelf of flat cards with a hover border/shadow change; click for
  a full case-study modal (features, architecture, tech stack, links).
- **Experience** — scroll-driven animated timeline (a simple growing line, not a 3D effect).
- **Services** — expandable service cards.
- **Achievements** — animated numbers + certifications list.
- **Testimonials** — auto-advancing cards with a plain fade/slide transition.
- **Contact** — form (client-side only — see below), social icon links.
- **Footer** — minimal, with a back-to-top link (there's also a floating back-to-top button
  site-wide).
- Scroll progress bar, full keyboard/ARIA coverage on interactive elements, and
  `prefers-reduced-motion` respected everywhere animation appears.
- SEO: meta description, Open Graph + Twitter cards, JSON-LD `Person` structured data, favicon,
  `robots.txt`, `sitemap.xml`.

## Known placeholders — replace before going live

- **All content** lives in one file: **`src/data/content.js`** — name, bio, stats, skills,
  projects, experience, services, achievements, certificates, testimonials, social links. Nothing
  else needs editing to make this "yours."
- **`profile.resumeUrl`** points at `/resume.pdf`, which doesn't exist yet — drop your real resume
  into `public/resume.pdf`.
- **Contact form** doesn't send anywhere — it simulates a successful submission (see
  `sections/Contact.jsx`). Wire it up to a form service (Formspree, Resend, EmailJS, your own API)
  when you're ready to actually receive messages.
- **Project images** (`public/projects/*.svg`) are generated placeholder graphics, not real
  screenshots — swap them for actual project screenshots.
- **`og-image`** meta tags point at the favicon as a safe placeholder — add a real 1200×630
  image before sharing links on social platforms.
- The brief's "interactive map" in Contact wasn't built — there's no real address to embed yet;
  add a Google Maps/Mapbox embed once you have one.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build -> dist/
npm run preview     # preview the production build locally
npm run lint
```

## Structure

```
src/
├─ components/     # Reusable UI: Navbar, Loader, ThemeToggle, MagneticButton, TiltCard, ...
├─ sections/       # One file per page section (Hero, About, Skills, Projects, ...)
├─ hooks/          # useTheme, useMousePosition
├─ data/           # content.js — the single source of truth for all copy
├─ App.jsx
├─ main.jsx
└─ index.css       # theme tokens (dark + light palettes) + base styles
```
