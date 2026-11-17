import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, toggleTheme, className = "" }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={`btn-ghost relative !h-10 !w-10 overflow-hidden !p-0 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -14, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: "rgb(var(--color-gold))" }}
          className="inline-flex"
        >
          {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
