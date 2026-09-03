import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Shown once per page load. Progress is simulated (no real asset-loading
// queue to track — fonts/CSS are tiny) but eased non-linearly so it reads
// as genuine rather than an obviously fake timer.
const DURATION_MS = 1100;

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisible(false);
      onDone?.();
      return;
    }

    const start = performance.now();
    let frame;

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          onDone?.();
        }, 250);
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
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-2xl font-bold tracking-tight">Sahil Khatri</span>
          <div className="h-px w-48 overflow-hidden bg-ink/10">
            <div className="h-full bg-accent transition-[width] duration-75" style={{ width: `${progress}%` }} />
          </div>
          <span className="font-mono text-xs tracking-[0.2em] text-ink-faint">{String(progress).padStart(3, "0")}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
