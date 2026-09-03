import { FiArrowRight, FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
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

const DETAILS = [
  { icon: FiMail, value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FiMapPin, value: profile.location, href: profile.mapLinkUrl },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-6 hidden select-none font-display text-[14rem] font-medium leading-none text-ink/[0.03] md:block"
      >
        {profile.initials}
      </span>

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero");
              }}
              className="font-display text-2xl font-medium text-ink"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{profile.tagline}</p>

            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Let's Talk
              <FiArrowRight size={15} />
            </button>
          </Reveal>

          <Reveal delay={0.06} className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-ink-faint">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-ink-faint">Get in Touch</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {DETAILS.map((detail) => (
                <li key={detail.value}>
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    <detail.icon size={14} className="shrink-0 text-accent" />
                    {detail.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {YEAR} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top
            <FiArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
