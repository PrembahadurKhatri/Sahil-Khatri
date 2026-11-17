import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import IconTile from "../components/IconTile.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { skillGroups } from "../data/content.js";

const CATEGORY_COLORS = ["accent", "#6366F1", "#0EA5E9", "gold"];

function SkillGroupCard({ group, delay, index }) {
  const spotlight = useSpotlight();

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={delay}
      whileHover={{ y: -6 }}
      className="card-premium spotlight group relative overflow-hidden rounded-3xl p-7 md:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none !absolute -top-6 right-4 font-display text-[7rem] font-medium leading-none text-ink/[0.05]"
      >
        0{index + 1}
      </span>

      <div className="flex items-center gap-4">
        <IconTile icon={group.icon} color={CATEGORY_COLORS[index % CATEGORY_COLORS.length]} size="lg" />
        <div>
          <h3 className="font-display text-2xl font-medium text-ink">{group.category}</h3>
          <span
            className="mt-1.5 block h-px w-10 origin-left bg-gold transition-all duration-500 group-hover:w-20"
            aria-hidden="true"
          />
        </div>
      </div>

      <p className="mb-6 mt-5 text-sm leading-relaxed text-ink-muted">{group.description}</p>

      <ul className="grid grid-cols-2 gap-3">
        {group.items.map((skill) => (
          <motion.li
            key={skill.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group/chip flex cursor-default items-center gap-3 rounded-2xl border border-line/70 bg-base/40 p-2 pr-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-gold/40"
          >
            <span className="group">
              <IconTile icon={skill.icon} color={skill.color} size="sm" />
            </span>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-surface/40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working set of languages, frameworks, and infrastructure I use to take a product from idea to production."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <SkillGroupCard key={group.category} group={group} index={gi} delay={(gi % 2) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
