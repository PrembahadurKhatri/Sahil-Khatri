import { useEffect, useState } from "react";
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

  // Close the mobile menu automatically if the viewport is resized/rotated
  // up past the desktop breakpoint while it's open.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    setOpen(false);
    // Let the menu-close render happen before scrolling, so the section's
    // position is measured against the final (closed) layout.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const activeClasses = "bg-accent text-white";
  const idleClasses = "text-ink hover:text-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto max-w-content">
        <nav
          className={`relative z-10 flex h-16 items-center justify-between rounded-2xl border border-line bg-surface/90 px-4 backdrop-blur-md transition-shadow duration-300 md:h-[4.25rem] md:px-6 ${
            scrolled ? "shadow-card-hover" : "shadow-card"
          }`}
        >
          <button type="button" onClick={() => scrollTo("hero")} className="flex shrink-0 items-center gap-2.5">
            <img src={profile.logo} alt={profile.name} className="h-8 w-auto object-contain md:h-9" />
          </button>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-base/60 px-1.5 py-1.5 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(link.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active === link.id ? activeClasses : idleClasses
                  }`}
                >
                  {link.label}
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
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-full border border-line text-ink active:bg-base lg:hidden"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>

        {/* Always mounted -- toggled with plain CSS transitions, not an
            unmount/remount + height:"auto" animation, which is a documented
            source of flaky touch interaction on mobile browsers. */}
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            open ? "mt-2 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-line bg-surface shadow-card">
            <ul className="flex flex-col gap-1 px-4 py-2">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    tabIndex={open ? 0 : -1}
                    className={`w-full touch-manipulation rounded-xl px-3 py-3 text-left text-base font-medium transition-colors ${
                      active === link.id ? activeClasses : idleClasses
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
                  tabIndex={open ? 0 : -1}
                  className="shine inline-flex touch-manipulation items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Let's Talk
                  <FiArrowRight size={15} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
