import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCode, FiCpu, FiLayers, FiPenTool, FiPlus, FiZap } from "react-icons/fi";
import { services } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";

const ICONS = [FiCode, FiPenTool, FiCpu, FiZap, FiLayers];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading eyebrow="Services" title="How I can help" align="center" />

        <div className="flex flex-col gap-4">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border bg-surface/40 backdrop-blur-xl transition-colors ${
                  isOpen ? "border-electric/50" : "border-border"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-5 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${isOpen ? "bg-electric/15 text-electric" : "bg-surface2/60 text-ink-muted"}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold sm:text-xl">{service.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{service.description}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-ink-faint">
                    <FiPlus className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ul className="flex flex-col gap-2 px-6 pb-6 pl-[4.75rem]">
                        {service.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
