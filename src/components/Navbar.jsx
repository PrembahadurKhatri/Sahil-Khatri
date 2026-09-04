import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";
import { profile } from "../data/content.js";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },

];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto max-w-content">
        <nav
          className={`flex h-16 items-center justify-between rounded-2xl border border-line bg-surface/90 px-4 backdrop-blur-md transition-shadow duration-300 md:h-[4.25rem] md:px-6 ${
            scrolled ? "shadow-card-hover" : "shadow-card"
          }`}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="flex shrink-0 items-center gap-2.5"
          >
            <img src={profile.logo} alt={profile.name} className="h-8 w-auto object-contain md:h-9" />
          </a>

          <ul className="hidden lg:flex items-center gap-1 rounded-full border border-line bg-base/60 px-1.5 py-1.5">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id ? "text-base" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="shine hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Let's Talk
              <FiArrowRight size={15} />
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-card lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-4 py-2">
                {LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.id)}
                      className={`w-full rounded-xl px-3 py-3 text-left text-base font-medium transition-colors ${
                        active === link.id ? "bg-accent-soft text-accent" : "text-ink hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="py-3 sm:hidden">
                  <button
                    type="button"
                    onClick={() => scrollTo("contact")}
                    className="shine inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Let's Talk
                    <FiArrowRight size={15} />
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
