import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgb(var(--color-accent) / 0.35), rgb(var(--color-accent)), rgb(var(--color-accent) / 0.35))",
        boxShadow: "0 0 12px rgb(var(--color-accent) / 0.8), 0 0 2px rgb(var(--color-accent))",
      }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      aria-hidden="true"
    />
  );
}
