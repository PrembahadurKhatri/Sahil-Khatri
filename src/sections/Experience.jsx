import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Roughly chronological, most recent first — the throughline is always shipping things that work."
        />

        <div className="flex flex-col">
          {experience.map((job, i) => (
            <Reveal
              key={job.role + job.period}
              delay={i * 0.08}
              className="group relative grid gap-3 rounded-xl border-t border-line px-4 py-9 -mx-4 transition-colors duration-300 first:border-t-0 hover:bg-base md:grid-cols-[10rem,1fr] md:gap-10"
            >
              <span
                className="absolute left-0 top-9 h-6 w-[3px] scale-y-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-y-100"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-ink-faint">{job.period}</span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {job.role}
                  </h3>
                  <span className="text-sm text-accent">{job.company}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">
                  <span className="text-ink-muted dark:text-white">{job.description}</span>
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <motion.li
                      key={tag}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded-full border border-line bg-base px-3 py-1 text-xs text-ink-muted transition-colors duration-200 group-hover:bg-surface hover:!border-accent hover:!bg-accent hover:!text-white"
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
