import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/** Soft accent-coloured orbs behind the page that drift, spin and morph as you scroll. */
export default function ScrollAurora() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  const y1 = useTransform(p, [0, 1], ["-10vh", "70vh"]);
  const x1 = useTransform(p, [0, 0.5, 1], ["-10vw", "40vw", "-5vw"]);
  const y2 = useTransform(p, [0, 1], ["80vh", "-10vh"]);
  const x2 = useTransform(p, [0, 0.5, 1], ["60vw", "5vw", "55vw"]);
  const rotate = useTransform(p, [0, 1], [0, 540]);
  const scale = useTransform(p, [0, 0.5, 1], [1, 1.5, 0.9]);
  const rotateBack = useTransform(rotate, (r) => -r);

  if (reduceMotion) return null;

  const orb = "absolute h-[45vmax] w-[45vmax] rounded-[42%_58%_63%_37%/45%_40%_60%_55%] blur-3xl";

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: x1, y: y1, rotate, scale, background: "rgb(var(--color-accent) / 0.16)" }}
        className={orb}
      />
      <motion.div
        style={{ x: x2, y: y2, rotate: rotateBack, background: "rgb(var(--color-accent) / 0.10)" }}
        className={orb}
      />
    </div>
  );
}
