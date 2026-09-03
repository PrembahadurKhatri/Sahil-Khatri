import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/content.js";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("hero");
          }}
          className="font-display text-lg font-medium text-ink tracking-tight"
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Let's Talk
            <FiArrowRight size={15} />
          </button>
        </div>
      </nav>
    </header>
  );
}
