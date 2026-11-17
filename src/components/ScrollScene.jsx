import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const SPRING = { stiffness: 120, damping: 26, mass: 0.4 };

/**
 * Wraps a page section so it rises out of the page in 3D as it scrolls in
 * (scale, tilt, rounded corners) and sinks back slightly as it scrolls away.
 */
export default function ScrollScene({ children, enter = true, exit = true }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress: inP } = useScroll({ target: ref, offset: ["start end", "start 0.25"] });
  const { scrollYProgress: outP } = useScroll({ target: ref, offset: ["end 0.75", "end start"] });
  const inS = useSpring(inP, SPRING);
  const outSpring = useSpring(outP, SPRING);
  const outS = useTransform(outSpring, (v) => (exit ? v : 0));

  const enterScale = useTransform(inS, [0, 1], enter ? [0.88, 1] : [1, 1]);
  const exitScale = useTransform(outS, [0, 1], [1, 0.94]);
  const scale = useTransform([enterScale, exitScale], ([a, b]) => a * b);
  const rotateX = useTransform(inS, [0, 1], enter ? [14, 0] : [0, 0]);
  const radius = useTransform([inS, outS], ([a, b]) => (enter ? (1 - a) * 56 : 0) + b * 40);
  const opacity = useTransform([inS, outS], ([a, b]) => (enter ? 0.35 + a * 0.65 : 1) * (1 - b * 0.45));
  const y = useTransform(outS, [0, 1], [0, -60]);

  if (reduceMotion) return <div ref={ref}>{children}</div>;

  return (
    <div ref={ref} style={{ perspective: 1400 }}>
      <motion.div
        style={{ scale, rotateX, opacity, y, borderRadius: radius, transformOrigin: "50% 0%" }}
        className="relative overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
