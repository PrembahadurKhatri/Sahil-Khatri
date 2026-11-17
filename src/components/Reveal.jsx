import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const MOTION_PROPS = ["initial", "animate", "whileInView", "whileHover", "whileTap", "viewport", "transition", "exit"];

const Reveal = forwardRef(function Reveal(
  { children, as = "div", delay = 0, y = 40, className = "", once = true, ...props },
  ref
) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    const plainProps = { ...props };
    MOTION_PROPS.forEach((k) => delete plainProps[k]);
    return (
      <Plain ref={ref} className={className} {...plainProps}>
        {children}
      </Plain>
    );
  }

  return (
    <Component
      ref={ref}
      initial={{ y, opacity: 0, scale: 0.96, filter: "blur(10px)" }}
      whileInView={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, margin: "-40px", amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Reveal;
