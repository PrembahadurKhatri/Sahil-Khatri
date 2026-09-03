/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens backed by CSS variables (see src/index.css) so
        // both the dark ("cinematic") and light ("day") themes can be
        // authored once here and swapped by toggling the `dark` class on
        // <html>, instead of sprinkling dark: variants through every file.
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surface2: "rgb(var(--color-surface-2) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          faint: "rgb(var(--color-ink-faint) / <alpha-value>)",
        },
        electric: "rgb(var(--color-electric) / <alpha-value>)",
        violet: "rgb(var(--color-violet) / <alpha-value>)",
        cyan: "rgb(var(--color-cyan) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgb(var(--color-electric) / 0.45)",
        "glow-violet": "0 0 40px -8px rgb(var(--color-violet) / 0.45)",
        "glow-cyan": "0 0 40px -8px rgb(var(--color-cyan) / 0.45)",
        card: "0 8px 40px -12px rgb(0 0 0 / 0.35)",
      },
      backgroundImage: {
        "grid-fade": "radial-gradient(circle at center, rgb(var(--color-ink) / 0.08) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        marquee: "marquee 28s linear infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};
