import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="font-display text-lg font-medium text-ink"
          >
            {profile.name}
          </button>
          <p className="mt-2 text-sm text-ink-faint">{profile.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => scrollTo(link.id)} className="hover:text-accent">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted hover:border-accent hover:text-accent transition-colors"
            >
              <social.icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="container-x border-t border-line py-6 text-center text-xs text-ink-faint">
        © {YEAR} {profile.name}. Built from scratch with React, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  );
}
