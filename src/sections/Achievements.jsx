import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { achievements, certificates } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

export default function Achievements() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Achievements" title="Numbers, badges, and proof of work" align="center" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface/40 p-8 text-center"
            >
              <span className="font-display text-4xl font-bold sm:text-5xl">
                <AnimatedCounter value={item.value} />
              </span>
              <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h3 className="mb-6 text-center font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ink-faint">Certifications</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface/30 p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface2">
                  <FiAward className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold leading-snug">{cert.title}</p>
                  <p className="font-mono text-xs text-ink-faint">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
