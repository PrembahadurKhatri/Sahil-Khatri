import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { skills } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";

function SkillOrb({ skill, index, onSelect }) {
  const Icon = skill.icon;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 7) * 0.06 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex flex-col items-center gap-3 focus:outline-none"
    >
      <span
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface/60 shadow-card backdrop-blur-xl transition-all duration-300 group-hover:border-electric/60 group-hover:shadow-glow sm:h-24 sm:w-24"
        style={{ animation: `float ${5 + (index % 4)}s ease-in-out ${index * 0.2}s infinite` }}
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/0 via-violet/0 to-cyan/0 opacity-0 transition-opacity duration-300 group-hover:from-electric/10 group-hover:via-violet/10 group-hover:to-cyan/10 group-hover:opacity-100" />
        <Icon className="relative h-8 w-8 text-ink-muted transition-colors duration-300 group-hover:text-electric sm:h-9 sm:w-9" />
      </span>
      <span className="font-mono text-xs text-ink-muted transition-colors group-hover:text-ink">{skill.name}</span>

      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-semibold text-base opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {skill.level}% proficiency
      </span>
    </motion.button>
  );
}

function SkillModal({ skill, onClose }) {
  if (!skill) return null;
  const Icon = skill.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[180] flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-sm rounded-3xl border border-border bg-surface p-8 shadow-card"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:text-ink"
          >
            <FiX className="h-4 w-4" />
          </button>

          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-electric/15 via-violet/15 to-cyan/15">
            <Icon className="h-8 w-8 text-electric" />
          </span>

          <h3 className="mt-5 font-display text-2xl font-bold">{skill.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{skill.description}</p>

          <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-ink-faint">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-electric via-violet to-cyan"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-border bg-surface2/60 py-3">
              <p className="font-display text-lg font-bold">{skill.projects}</p>
              <p className="font-mono text-[10px] uppercase text-ink-faint">Projects</p>
            </div>
            <div className="rounded-xl border border-border bg-surface2/60 py-3">
              <p className="font-display text-lg font-bold">{skill.experience}</p>
              <p className="font-mono text-[10px] uppercase text-ink-faint">Experience</p>
            </div>
            <div className="rounded-xl border border-border bg-surface2/60 py-3">
              <p className="font-display text-lg font-bold">{skill.category}</p>
              <p className="font-mono text-[10px] uppercase text-ink-faint">Category</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="A galaxy of tools I reach for"
          subtitle="Click any orb for proficiency, project count, and a quick summary — hover for a fast read."
        />

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 sm:gap-x-12">
          {skills.map((skill, i) => (
            <SkillOrb key={skill.name} skill={skill} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <SkillModal skill={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
