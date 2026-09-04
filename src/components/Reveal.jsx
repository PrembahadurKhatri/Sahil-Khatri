import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const Reveal = forwardRef(function Reveal(
  { children, as = "div", delay = 0, y = 22, className = "", once = true, ...props },
  ref
) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain ref={ref} className={className} {...props}>
        {children}
      </Plain>
    );
  }

  return (
    <Component
      ref={ref}
      initial={{ y }}
      whileInView={{ y: 0 }}
      viewport={{ once, margin: "-40px", amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Reveal;
