import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiCode } from "react-icons/fi";
import TypingText from "../components/TypingText.jsx";
import { profile, stats } from "../data/content.js";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const experienceStat = stats[0];

  return (
    <section
      id="hero"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden border-b border-line"
    >
      <div className="container-x relative z-10 grid gap-16 pt-32 pb-20 md:grid-cols-12 md:items-center md:pt-28">
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <span className="inline-block rounded-full bg-accent-soft px-4 py-1 text-sm font-medium text-accent">
            {profile.availability}
          </span>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-yellow-600 text-[13vw] leading-[0.95] font-medium text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {profile.name}
            </motion.h1>
          </div>

          <div className="mt-6 flex flex-wrap items-baseline gap-2 text-xl md:text-2xl text-ink-muted">
            <span>I'm a</span>
            <TypingText words={profile.roles} className="font-medium text-accent" />
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-muted">{profile.bio}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="shine inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
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

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none"
        >
          <div className="absolute -top-4 -left-4 h-full w-full rounded-[2rem] bg-accent-soft" aria-hidden="true" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-card">
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card sm:-left-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <FiCode size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-medium leading-none text-ink">
                {experienceStat.value}
                {experienceStat.suffix}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{experienceStat.label}</p>
            </div>
          </div>
        </motion.div>
      </div>

  
    </section>
  );
}
