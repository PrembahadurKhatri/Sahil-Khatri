import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />

      <div className="container-x relative flex flex-col items-center gap-6 py-10 text-center text-xs text-ink-faint sm:flex-row sm:justify-between sm:gap-4 sm:pb-8 sm:text-left">
        <p>
          © {YEAR} {profile.name}. All rights reserved.
        </p>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <span className="text-xs font-semibold uppercase tracking-wide text-yellow-600">Follow on:</span>
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
      </div>
    </footer>
  );
}
