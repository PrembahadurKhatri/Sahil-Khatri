import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { testimonials } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeading eyebrow="Testimonials" title="What people say" align="center" />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ perspective: 1200 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 35, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -35, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-border bg-surface/50 p-10 text-center shadow-card backdrop-blur-xl sm:p-14"
            >
              <p className="mb-3 font-display text-5xl text-electric/30">"</p>
              <p className="text-balance font-display text-xl font-medium leading-relaxed sm:text-2xl">{current.quote}</p>
              <div className="mt-8 flex flex-col items-center gap-1">
                <span className="font-display text-base font-bold">{current.name}</span>
                <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {current.role} · {current.company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-electric/50 hover:text-electric"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-electric" : "w-1.5 bg-ink-faint/40 hover:bg-ink-faint"}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-electric/50 hover:text-electric"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
