import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />

      <img
        src={profile.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -right-10 hidden w-[22rem] select-none opacity-[0.04] grayscale md:block"
      />

      <div className="container-x relative flex flex-col items-center justify-between gap-4 py-8 text-xs text-ink-faint sm:flex-row">
        <p>
          © {YEAR} {profile.name}. All rights reserved.
        </p>

        <div className="flex gap-3">
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
      </div>
    </footer>
  );
}
