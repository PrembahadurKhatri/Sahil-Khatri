import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/** A soft gold/emerald light that trails the cursor on pointer devices. */
export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 22 });
  const sy = useSpring(y, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgb(var(--color-gold) / 0.10) 0%, rgb(var(--color-accent) / 0.06) 35%, transparent 65%)",
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full md:block"
    />
  );
}
