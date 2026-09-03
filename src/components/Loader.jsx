import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Shown once per page load, over the whole app. Progress is simulated
// (there's no real asset-loading queue to track here — fonts/CSS are tiny)
// but easing it non-linearly and finishing with a deliberate hold makes it
// read as a genuine loading sequence rather than an obviously fake timer.
const DURATION_MS = 1800;

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      setVisible(false);
      onDone?.();
      return;
    }

    const start = performance.now();
    let frame;

    const tick = (now) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / DURATION_MS, 1);
      // ease-out-cubic — fast start, gentle settle at 100.
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 350);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Ambient floating particles behind the logo */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-electric/40"
                style={{
                  left: `${(i * 37) % 100}%`,
                  top: `${(i * 53) % 100}%`,
                  animation: `float ${5 + (i % 5)}s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.h1
              className="font-display text-4xl font-bold tracking-tight gradient-text-animated sm:text-5xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SK
            </motion.h1>

            <div className="h-px w-40 overflow-hidden bg-ink/10 sm:w-56">
              <motion.div
                className="h-full bg-gradient-to-r from-electric via-violet to-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="font-mono text-xs tracking-[0.3em] text-ink-muted">{String(progress).padStart(3, "0")}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
