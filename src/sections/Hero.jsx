import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data/content.js";
import MagneticButton from "../components/MagneticButton.jsx";
import TypingText from "../components/TypingText.jsx";
import AuroraBackground from "../components/AuroraBackground.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <AuroraBackground />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex h-7 items-center font-mono text-base text-accent sm:text-lg"
        >
          <TypingText words={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-6 max-w-lg text-balance text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton as="a" href="#projects">
            <span className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-base transition-colors hover:bg-accent hover:text-ink">
              Explore Portfolio
            </span>
          </MagneticButton>
          <MagneticButton as="a" href={profile.resumeUrl} download>
            <span className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent/60">
              <FiDownload className="h-3.5 w-3.5" />
              Resume
            </span>
          </MagneticButton>
          <MagneticButton as="a" href="#contact">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-accent/60">
              Contact Me
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <FiArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
