# Sahil Khatri — Portfolio

A cinematic, dark/light-toggle personal portfolio. Fully static, frontend-only — no backend,
no database.

## Tech stack

Built with **Vite + React + Tailwind CSS + Framer Motion** — not the Next.js/Three.js/GSAP/Lenis
stack a fully literal "Awwwards 3D portfolio" brief calls for. That was a deliberate choice: a
real WebGL scene (React Three Fiber, floating orbs, particle systems) is a much larger, higher-risk
build — GPU/mobile compatibility, bundle size, and 60fps aren't free — for a payoff that's mostly
"it's real 3D," not different from what's here. Every interaction in the original brief has an
equivalent built with CSS transforms + Framer Motion instead: 3D tilt cards use real
`perspective`/`rotateX`/`rotateY` (no canvas), the "skills galaxy" is a floating orb grid, the
hero's ambient lighting is blurred gradient blobs reacting to the cursor, and the contact section's
"animated Earth" is a rotating CSS ring. Lighter, faster to load, works everywhere, and still reads
as premium.

## What's included

- **Dark/day theme toggle** (`hooks/useTheme.js`) — persisted, defaults to dark, no flash-of-
  wrong-theme on load (see the inline script in `index.html`).
- **Loader** — animated logo, progress percentage, ambient particles.
- **Hero** — huge animated gradient name, typing role text, magnetic CTA buttons, cursor-reactive
  background glow, scroll indicator.
- **About** — bio, animated stat counters, timeline, fun facts.
- **Skills** — floating orb grid; click any skill for a detail card (proficiency bar, project
  count, experience, description).
- **Projects** — horizontal scroll shelf of 3D-tilt glass cards; click for a full case-study modal
  (features, architecture, tech stack, links).
- **Experience** — scroll-driven animated timeline.
- **Services** — expandable service cards.
- **Achievements** — animated numbers + certifications list.
- **Testimonials** — auto-advancing 3D-rotation glass cards.
- **Contact** — glass form (client-side only — see below), floating social icons.
- **Footer** — minimal, with a back-to-top link (there's also a floating back-to-top button
  site-wide).
- Custom cursor glow, scroll progress bar, magnetic buttons throughout, full keyboard/ARIA
  coverage on interactive elements, and `prefers-reduced-motion` respected everywhere animation
  appears.
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
