import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];
const DURATION = 2000;
const R = 88; // ring radius in the 200x200 SVG
const CIRC = 2 * Math.PI * R;

// Ease-out so the count races early and settles gently into 100.
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function Loader({ onComplete }) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) {
      setProgress(100);
      const timeout = setTimeout(() => setVisible(false), 150);
      return () => clearTimeout(timeout);
    }

    const start = performance.now();
    let raf;
    let doneTimer;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setProgress(Math.round(easeOutCubic(t) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        doneTimer = setTimeout(() => setVisible(false), 450);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(doneTimer);
    };
  }, [reduceMotion]);

  const letters = profile.name.toUpperCase().split("");

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-base"
        >
          {/* Ambient light pools */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full blur-[110px]"
            style={{ background: "rgb(var(--color-accent) / 0.22)" }}
            animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-y-[90%] translate-x-[10%] rounded-full blur-[100px]"
            style={{ background: "rgb(var(--color-gold) / 0.14)" }}
          />

          <div className="relative flex flex-col items-center">
            {/* Ring + logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="relative flex h-44 w-44 items-center justify-center md:h-56 md:w-56"
            >
              {/* Slowly rotating dashed orbit */}
              <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              >
                <circle
                  cx="100"
                  cy="100"
                  r="98"
                  fill="none"
                  stroke="rgb(var(--color-gold) / 0.35)"
                  strokeWidth="0.75"
                  strokeDasharray="2 6"
                />
              </motion.svg>

              {/* Progress ring */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
                <defs>
                  <linearGradient id="loader-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgb(var(--color-accent-2))" />
                    <stop offset="55%" stopColor="rgb(var(--color-accent))" />
                    <stop offset="100%" stopColor="rgb(var(--color-gold))" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r={R} fill="none" stroke="rgb(var(--color-border))" strokeWidth="2" />
                <circle
                  cx="100"
                  cy="100"
                  r={R}
                  fill="none"
                  stroke="url(#loader-ring)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC * (1 - progress / 100)}
                  style={{ filter: "drop-shadow(0 0 6px rgb(var(--color-gold) / 0.6))" }}
                />
              </svg>

              {/* Logo with a soft breathing glow */}
              <motion.div
                aria-hidden="true"
                className="absolute h-24 w-24 rounded-full blur-2xl md:h-32 md:w-32"
                style={{ background: "rgb(var(--color-accent) / 0.35)" }}
                animate={reduceMotion ? undefined : { scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={profile.logo}
                alt={profile.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="relative h-12 w-auto object-contain md:h-16 dark:brightness-[2.2] dark:saturate-[1.3] dark:drop-shadow-[0_0_14px_rgb(70_186_134_/_0.45)]"
              />
            </motion.div>

            {/* Name, letter by letter */}
            <p
              aria-label={profile.name}
              className="mt-8 flex flex-wrap justify-center px-6 text-center text-[11px] font-semibold tracking-[0.35em] text-ink md:mt-10 md:text-sm"
            >
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.035, ease }}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-2 text-xs text-ink-faint md:text-sm"
            >
              Full-Stack Developer
            </motion.p>

            <div className="mt-6 flex items-baseline gap-0.5 tabular-nums">
              <span className="text-gold text-3xl font-semibold md:text-4xl">{progress}</span>
              <span className="text-sm font-medium text-ink-muted">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
