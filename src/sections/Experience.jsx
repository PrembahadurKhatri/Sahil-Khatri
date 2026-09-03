import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading eyebrow="Experience" title="Where the last few years went" align="center" />

        <div ref={containerRef} className="relative">
          {/* Track + animated fill, scroll-linked */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
          <motion.div
            className="absolute left-[27px] top-2 w-px bg-gradient-to-b from-electric via-violet to-cyan sm:left-1/2 sm:-translate-x-1/2"
            style={{ height: lineHeight }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex gap-6 sm:gap-0 ${isRight ? "sm:flex-row-reverse sm:text-right" : ""}`}
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface shadow-glow sm:absolute sm:left-1/2 sm:top-0 sm:-translate-x-1/2">
                    <FiBriefcase className="h-5 w-5 text-electric" />
                  </span>

                  <div className={`flex-1 sm:w-1/2 ${isRight ? "sm:pr-14" : "sm:pl-14"}`}>
                    <div className="rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur-xl transition-colors hover:border-electric/40">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">{item.year}</span>
                      <h3 className="mt-2 font-display text-lg font-bold">{item.role}</h3>
                      <p className="font-mono text-xs text-ink-faint">{item.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                      <div className={`mt-4 flex flex-wrap gap-2 ${isRight ? "sm:justify-end" : ""}`}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-border bg-surface2/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
