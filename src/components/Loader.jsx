import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/content.js";

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

    const duration = 1800;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 350);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-base"
        >
          <motion.img
            src={profile.logo}
            alt={profile.name}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-14 w-auto object-contain md:h-20"
          />

          <div className="flex flex-col items-center gap-3">
            <span className="font-display text-2xl font-medium tabular-nums text-ink">{progress}%</span>
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-line md:w-56">
              <div className="h-full rounded-full bg-accent transition-[width] duration-150 ease-linear" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
