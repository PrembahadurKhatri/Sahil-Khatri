import { motion } from "framer-motion";

// Shared eyebrow + heading + optional subheading pattern used by every
// section — kept in one place so the reveal animation and spacing stay
// perfectly consistent across the whole page.
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      className={`mb-14 flex max-w-2xl flex-col gap-4 sm:mb-20 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="text-balance text-base leading-relaxed text-ink-muted sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
