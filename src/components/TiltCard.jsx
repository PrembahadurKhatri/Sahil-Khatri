import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * A card that tilts in 3D toward the cursor on hover (pure CSS perspective
 * transform, no WebGL) and carries a soft radial glow that follows the
 * pointer across its surface. Used by project and skill cards.
 */
export default function TiltCard({ children, className = "", glow = true, maxTilt = 10 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 });
  const glowBackground = useMotionTemplate`radial-gradient(400px circle at ${glowX}% ${glowY}%, rgb(var(--color-electric) / 0.16), transparent 70%)`;

  const handleMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX: springRX, rotateY: springRY, transformPerspective: 900 }
      }
      className={`group relative ${className}`}
    >
      {glow && !prefersReducedMotion && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      {children}
    </motion.div>
  );
}
