import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion } from "framer-motion";

// Counts up from 0 to `value` once the element scrolls into view — used
// by the About stats strip and the Achievements section.
export default function AnimatedCounter({ value, suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const spanRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      if (spanRef.current) spanRef.current.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (spanRef.current) spanRef.current.textContent = `${Math.round(latest).toLocaleString()}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, value, suffix, duration, prefersReducedMotion, motionValue]);

  return (
    <span ref={ref} className={className}>
      <span ref={spanRef}>0{suffix}</span>
    </span>
  );
}
