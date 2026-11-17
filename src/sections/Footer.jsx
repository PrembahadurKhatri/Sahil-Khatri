import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-gradient-to-br from-[#081a11] via-[#123524] to-[#1f6b48]">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden="true" />

      <div className="container-x relative flex flex-col items-center gap-8 py-12 text-center md:flex-row md:justify-between md:py-14 md:text-left">
        <div>
          <img
            src={profile.logo}
            alt={profile.name}
            className="mx-auto h-12 w-auto object-contain brightness-[2.2] saturate-[1.3] drop-shadow-[0_0_12px_rgb(70_186_134_/_0.45)] md:mx-0 md:h-14"
          />
          <p className="mt-2 text-sm text-white/60">{profile.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#deba70]">Follow on</span>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[#deba70] hover:text-[#deba70]"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6 pb-20 text-center text-xs text-white/50 md:pb-6 md:text-left">
        © {YEAR} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
