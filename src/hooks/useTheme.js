import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "sahilkhatri-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  // No stored preference yet — default to dark (the site's primary,
  // cinematic identity) rather than following the OS setting, so a first
  // visit always shows the intended design instead of a coin flip.
  return "dark";
}

/**
 * Drives the dark/day toggle. Applies the `dark` class to <html> (read by
 * every color token in index.css / tailwind.config.js) and persists the
 * choice across visits.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme, isDark: theme === "dark" };
}
