# Sahil Khatri — Portfolio

A static, professional personal developer portfolio with a dark/light theme toggle. No backend,
no database — everything ships as plain HTML/CSS/JS.

## Design

A ground-up rebuild with an original, editorial visual language — not a SaaS-tool look, no 3D, no
neon gradients, no cursor/tilt gimmicks:

- **Typography-led.** A serif display face (**Fraunces**) for headings paired with **Inter** for
  body/UI — the kind of pairing you'd see on an editorial site, not another dev-tool dashboard.
- **Clean white / near-black base with one premium emerald-green accent**, in both dark (default)
  and light palettes — see the CSS variables at the top of `src/index.css`.
- **Structure over spectacle.** Hairline dividers, generous whitespace, a subtle grain texture in
  the hero, and simple scroll-fade reveals (`components/Reveal.jsx`) — no floating/rotating
  decorative shapes, no glow shadows, no parallax tilt.

## Sections

Hero → About → Skills → **Education** → Experience → Projects → **Contact (with an embedded map)**
→ Footer. Education and Experience are deliberately separate sections with distinct treatments
(a dotted timeline vs. a role list), not merged into one generic timeline.

- **Hero** — name, typing role text, one-line bio, CTAs.
- **About** — bio, quick facts, animated stat counters.
- **Skills** — grouped by category (Frontend / Backend / Data & Infra / Tools) as clean tag lists.
- **Education** — degree timeline + a certifications list.
- **Experience** — role history with tech tags per role.
- **Projects** — a card grid (first project featured, spans two columns) linking out to live/
  GitHub — no modal, direct links.
- **Contact** — a message form (client-side only, see below), contact info card with socials, and
  a real embedded **OpenStreetMap** iframe (no API key required).
- Scroll progress bar, back-to-top button, keyboard/ARIA coverage on interactive elements, and
  `prefers-reduced-motion` respected everywhere.
- SEO: meta description, Open Graph/Twitter tags, JSON-LD `Person` data, favicon, `robots.txt`,
  `sitemap.xml`.

## Known placeholders — replace before going live

- **All content lives in `src/data/content.js`** — name, bio, stats, skills, education,
  certifications, experience, projects, socials, and the map location. Nothing else needs editing
  to make this "yours."
- **`profile.photo`** points at `/avatar-placeholder.svg`, a generated placeholder — replace with a
  real photo (`public/your-photo.jpg`) and update the path in `content.js`.
- **`profile.resumeUrl`** points at `/resume.pdf`, which doesn't exist yet — add your real resume
  to `public/resume.pdf` (there's currently no nav link to it; add one back in `Navbar.jsx` once
  the file exists, if you want one).
- **Contact form sends through EmailJS** — but the three keys in `src/config/emailjs.js` are still
  placeholders, so submissions will show a "not configured yet" error until you fill them in. Setup
  steps are written out in that file's top comment: create a free account at emailjs.com, connect
  an email service, create a template using the variables `{{from_name}}`, `{{from_email}}`,
  `{{message}}`, `{{budget}}`, then copy the Service ID / Template ID / Public Key in. No backend or
  server-side secret needed — EmailJS's public key is designed to be used client-side like this;
  just set the template's allowed origins in the EmailJS dashboard before going live.
- **Map** currently points at Pokhara, Nepal (`profile.mapEmbedUrl` / `mapLinkUrl`) — update the
  bbox/marker coordinates if your location changes.
- **Project images** (`public/projects/*.svg`) are simple generated placeholders — swap for real
  screenshots.
- **`profile.phone`**, **`profile.whatsapp`** (digits only, used to build the fixed WhatsApp button's
  `wa.me` link), and social links are all placeholders.

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
├─ components/     # Navbar, Reveal, SectionHeading, AnimatedCounter, TypingText, ThemeToggle, ...
├─ sections/       # One file per page section (Hero, About, Skills, Education, ...)
├─ hooks/          # useTheme
├─ data/           # content.js — the single source of truth for all copy
├─ App.jsx
├─ main.jsx
└─ index.css       # theme tokens (dark + light palettes) + base styles
```
