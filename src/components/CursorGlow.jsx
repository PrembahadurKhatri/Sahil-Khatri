import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

// A soft glow that trails the pointer, plus a tight core dot on top —
// disabled entirely on touch devices (no real pointer to follow) and under
// prefers-reduced-motion. Purely decorative (pointer-events-none), sits
// above content but never blocks clicks.
export default function CursorGlow() {
  const prefersReducedMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(true);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 250, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 250, mass: 0.4 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch || prefersReducedMotion) return;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isTouch, prefersReducedMotion, x, y]);

  if (isTouch || prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[150] hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-plus-lighter md:block"
      style={{
        x: springX,
        y: springY,
        background: "radial-gradient(circle, rgb(var(--color-electric) / 0.35), transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
