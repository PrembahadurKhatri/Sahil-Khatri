/**
 * A glossy, app-icon style tile: a lit gradient body in the brand colour,
 * a glass highlight across the top, an inner bevel and a coloured drop
 * shadow, so flat icon glyphs read as physical, realistic objects.
 *
 * `color` is any CSS colour (brand hex) or one of the theme presets
 * "accent" / "gold". `gradient` overrides the body (e.g. Instagram).
 */
const PRESETS = {
  accent: "rgb(var(--color-accent))",
  gold: "rgb(var(--color-gold))",
};

// Monochrome brand marks (Next.js, Express, Linux…) render as polished graphite.
const NEUTRALS = new Set(["#71717A", "#71717a", "#000000", "#24292f"]);

const SIZES = {
  "2xs": { box: "h-5 w-5 rounded-full", icon: 10 },
  xs: { box: "h-7 w-7 rounded-[9px]", icon: 13 },
  sm: { box: "h-9 w-9 rounded-[11px]", icon: 15 },
  md: { box: "h-11 w-11 rounded-[13px]", icon: 18 },
  lg: { box: "h-14 w-14 rounded-[17px]", icon: 24 },
  xl: { box: "h-16 w-16 rounded-[20px]", icon: 28 },
};

export default function IconTile({ icon: Icon, color = "accent", gradient, size = "md", className = "" }) {
  const base = NEUTRALS.has(color) ? "#2b2d31" : PRESETS[color] || color;
  const s = SIZES[size] || SIZES.md;

  const body =
    gradient ||
    `linear-gradient(150deg, color-mix(in srgb, ${base} 62%, white) 0%, ${base} 48%, color-mix(in srgb, ${base} 68%, black) 100%)`;

  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.06] ${s.box} ${className}`}
      style={{
        background: body,
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / 0.5), inset 0 -2px 3px rgb(0 0 0 / 0.28), 0 1px 1px rgb(0 0 0 / 0.15), 0 8px 18px -6px color-mix(in srgb, ${base} 70%, transparent)`,
      }}
    >
      {/* glass highlight */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
        style={{
          background: "linear-gradient(180deg, rgb(255 255 255 / 0.38), rgb(255 255 255 / 0.04))",
          borderRadius: "inherit",
          borderBottomLeftRadius: "50% 20%",
          borderBottomRightRadius: "50% 20%",
        }}
      />
      <Icon size={s.icon} className="relative" style={{ filter: "drop-shadow(0 1px 1.5px rgb(0 0 0 / 0.35))" }} />
    </span>
  );
}
