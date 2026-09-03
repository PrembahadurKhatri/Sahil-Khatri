import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "../data/content.js";
import MagneticButton from "../components/MagneticButton.jsx";
import TypingText from "../components/TypingText.jsx";
import AuroraBackground from "../components/AuroraBackground.jsx";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}% ${mouseY}%, rgb(var(--color-electric) / 0.14), transparent 65%)`;

  const handleMove = (e) => {
    if (prefersReducedMotion) return;
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth) * 100);
    mouseY.set((e.clientY / innerHeight) * 100);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <AuroraBackground />
      {!prefersReducedMotion && (
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} aria-hidden="true" />
      )}

      {/* Faint dot grid — reinforces depth without competing with the blobs */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:28px_28px] opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          {profile.availability}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block">{profile.name.split(" ")[0]}</span>
          <span className="gradient-text-animated block">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex h-8 items-center font-mono text-lg text-ink-muted sm:text-xl"
        >
          <TypingText words={profile.roles} className="text-cyan" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton as="a" href="#projects">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-base shadow-glow transition-transform hover:scale-105">
              Explore Portfolio
            </span>
          </MagneticButton>
          <MagneticButton as="a" href={profile.resumeUrl} download>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur-xl transition-colors hover:border-electric/50">
              <FiDownload className="h-3.5 w-3.5" />
              Resume
            </span>
          </MagneticButton>
          <MagneticButton as="a" href="#contact">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur-xl transition-colors hover:border-electric/50">
              Contact Me
            </span>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          <FiArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
