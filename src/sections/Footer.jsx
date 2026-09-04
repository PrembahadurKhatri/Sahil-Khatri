import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

const DETAILS = [
  { icon: FiMail, value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: FiMapPin, value: profile.location, href: profile.mapLinkUrl },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />

      <img
        src={profile.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 hidden w-[26rem] select-none opacity-[0.04] grayscale md:block"
      />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <span className="eyebrow mb-5">Available for work</span>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("hero");
              }}
              className="block font-display text-3xl font-medium text-ink"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">{profile.tagline}</p>

            <div className="mt-7">
              <CtaButton onClick={() => scrollTo("contact")} icon={FiArrowRight}>
                Let's Talk
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-6 md:pl-6 lg:pl-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-yellow-600">Get in Touch</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {DETAILS.map((detail) => (
                <li key={detail.value}>
                  <a
                    href={detail.href}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform group-hover:scale-105">
                      <detail.icon size={14} />
                    </span>
                    {detail.value}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest2 text-yellow-600">Follow</span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="mt-4 flex gap-3">
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
        <div className="container-x flex flex-col items-center justify-center gap-3 py-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {YEAR} {profile.name}. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
}
