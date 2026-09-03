import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { skills } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";

function SkillCard({ skill, index, onSelect }) {
  const Icon = skill.icon;
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(skill)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 7) * 0.04 }}
      className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface/40 p-5 text-center transition-colors hover:border-accent/50 hover:bg-surface/70"
    >
      <Icon className="h-7 w-7 text-ink-muted transition-colors group-hover:text-accent" />
      <span className="font-mono text-xs text-ink-muted transition-colors group-hover:text-ink">{skill.name}</span>
    </motion.button>
  );
}

function SkillModal({ skill, onClose }) {
  if (!skill) return null;
  const Icon = skill.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[180] flex items-center justify-center bg-black/50 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-card-lg"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:text-ink"
          >
            <FiX className="h-4 w-4" />
          </button>

          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface2">
            <Icon className="h-7 w-7 text-accent" />
          </span>

          <h3 className="mt-5 font-display text-2xl font-bold">{skill.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{skill.description}</p>

          <div className="mt-6 flex items-center justify-between font-mono text-xs uppercase tracking-wide text-ink-faint">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-lg border border-border bg-surface2/60 py-3">
              <p className="font-display text-lg font-bold">{skill.projects}</p>
              <p className="font-mono text-[10px] uppercase text-ink-faint">Projects</p>
            </div>
            <div className="rounded-lg border border-border bg-surface2/60 py-3">
              <p className="font-display text-lg font-bold">{skill.experience}</p>
              <p className="font-mono text-[10px] uppercase text-ink-faint">Experience</p>
            </div>
            <div className="rounded-lg border border-border bg-surface2/60 py-3">
              <p className="font-display text-sm font-bold">{skill.category}</p>
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
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Skills" title="Tools I reach for" subtitle="Click any skill for proficiency, project count, and a quick summary." />

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <SkillModal skill={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
