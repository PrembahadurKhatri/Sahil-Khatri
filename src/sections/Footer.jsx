import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-gradient-to-br from-[#081a11] via-[#123524] to-[#1f6b48]">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden="true" />

      <div className="container-x relative flex flex-col items-center gap-6 py-10 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:gap-4 sm:pb-8 sm:text-left">
        <p>
          © {YEAR} {profile.name}. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="text-xs font-semibold uppercase tracking-wide text-yellow-500">Follow on:</span>
          <div className="flex gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                style={{ "--social-color": social.color }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[var(--social-color)] hover:text-[var(--social-color)]"
              >
                <social.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
