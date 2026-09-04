import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working set of languages, frameworks, and infrastructure I use to take a product from idea to production."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal
              key={group.category}
              delay={gi * 0.06}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line bg-base p-7 transition-shadow duration-300 hover:shadow-card"
            >
              <h3 className="font-display text-lg font-medium text-ink mb-5">{group.category}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <motion.li
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-ink-muted transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <skill.icon size={15} className="text-accent transition-colors duration-200 group-hover:text-white" />
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
