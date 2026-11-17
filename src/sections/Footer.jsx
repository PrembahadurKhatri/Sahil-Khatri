import IconTile from "../components/IconTile.jsx";
import { profile } from "../data/content.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-[#050806]">
      <div className="hairline w-full" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgb(46 160 110 / 0.18)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgb(222 186 112 / 0.12)" }}
        aria-hidden="true"
      />

      <div className="container-x relative flex flex-col items-center gap-8 py-12 md:py-14 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p
            className="font-display text-3xl font-medium"
            style={{
              background: "linear-gradient(100deg, #a8803a, #debA70, #f6dea4, #deba70, #a8803a)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </p>
          <p className="mt-2 text-sm text-white/50">{profile.tagline}</p>
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
                className="group"
              >
                <IconTile icon={social.icon} color={social.color} gradient={social.gradient} size="md" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x relative border-t border-white/10 py-6 pb-20 md:pb-6 text-center text-xs text-white/40 md:text-left">
        © {YEAR} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
