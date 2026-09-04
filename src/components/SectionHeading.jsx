import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const reduceMotion = useReducedMotion();
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} max-w-2xl mb-14 md:mb-20`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>

      <div className="overflow-hidden py-1">
        <motion.h2
          initial={reduceMotion ? false : { y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-80px", amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl md:text-5xl font-medium text-ink leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {description && (
        <Reveal delay={0.14}>
          <p className="text-ink-muted text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
