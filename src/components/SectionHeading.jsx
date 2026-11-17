import Reveal from "./Reveal.jsx";
import PulseDot from "./PulseDot.jsx";
import { motion, useReducedMotion } from "framer-motion";

const titleClass = "font-display text-4xl md:text-5xl font-medium text-ink leading-[1.1]";

/** Title whose words flip up one by one out of a mask, in 3D, when scrolled into view. */
function SplitTitle({ text }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion || typeof text !== "string") return <h2 className={titleClass}>{text}</h2>;

  const words = text.split(" ");
  return (
    <motion.h2
      className={titleClass}
      aria-label={text}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ staggerChildren: 0.07 }}
      style={{ perspective: 600 }}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block origin-bottom ${i === words.length - 1 ? "text-gold italic pr-[0.08em]" : ""}`}
            variants={{
              hidden: { y: "110%", rotateX: -80, opacity: 0, filter: "blur(6px)" },
              show: { y: "0%", rotateX: 0, opacity: 1, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.h2>
  );
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} max-w-2xl mb-10 md:mb-14`}>
      <Reveal>
        <span className="eyebrow">
          <PulseDot />
          {eyebrow}
        </span>
      </Reveal>

      <SplitTitle text={title} />

      {description && (
        <Reveal delay={0.1}>
          <p className="text-ink-muted text-[1rem] md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
