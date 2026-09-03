import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/**
 * Wraps any element (button/link) and pulls it slightly toward the cursor
 * while hovered — the "magnetic button" effect. Falls back to a plain
 * static wrapper under prefers-reduced-motion or on touch devices, where
 * there's no hover to react to anyway.
 */
export default function MagneticButton({ children, className = "", strength = 0.35, as: Component = "div", style, ...props }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className} style={style} {...props}>
        {children}
      </Component>
    );
  }

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, ...style }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
