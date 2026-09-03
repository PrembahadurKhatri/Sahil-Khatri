import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import TypingText from "../components/TypingText.jsx";
import { profile } from "../data/content.js";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="hero"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden border-b border-line"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26vw] font-medium leading-none text-ink/[0.035] md:block"
      >
        {profile.initials}
      </span>

      <div className="container-x relative z-10 pt-24 pb-20 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </span>

          <h1 className="font-display text-[13vw] leading-[0.95] font-medium text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {profile.name}
          </h1>

          <div className="mt-6 flex flex-wrap items-baseline gap-2 text-xl md:text-2xl text-ink-muted">
            <span>I'm a</span>
            <TypingText words={profile.roles} className="font-medium text-accent" />
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-muted">{profile.bio}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowUpRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest2 text-ink-faint md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <FiArrowDown size={14} />
        </motion.span>
      </button>
    </section>
  );
}
