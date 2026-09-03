import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ isDark, onToggle, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to day theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={`group relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/60 transition-colors hover:border-accent/50 ${className}`}
    >
      <motion.span
        key={isDark ? "moon" : "sun"}
        initial={{ y: 12, opacity: 0, rotate: -60 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center text-ink"
      >
        {isDark ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
      </motion.span>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}
