import { forwardRef } from "react";
import { motion } from "framer-motion";

// Scroll-in animations were removed on purpose: content renders immediately.
// The component is kept so sections can still pass hover props (whileHover).
const SCROLL_PROPS = ["initial", "animate", "whileInView", "viewport", "transition", "exit", "delay", "y", "once"];

const Reveal = forwardRef(function Reveal({ children, as = "div", className = "", ...props }, ref) {
  const Component = motion[as] || motion.div;
  const rest = { ...props };
  SCROLL_PROPS.forEach((k) => delete rest[k]);

  return (
    <Component ref={ref} className={className} {...rest}>
      {children}
    </Component>
  );
});

export default Reveal;
