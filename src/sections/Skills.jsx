import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import PulseDot from "../components/PulseDot.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { skillGroups } from "../data/content.js";

function SkillGroupCard({ group, delay }) {
  const spotlight = useSpotlight();
  const CategoryIcon = group.icon;

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={delay}
      whileHover={{ y: -4 }}
      className="spotlight group relative overflow-hidden rounded-2xl border border-line bg-base p-7 transition-shadow duration-300 hover:shadow-card"
    >
      {/* Folded-corner accent, bottom-right — purely decorative, echoes the
          reference design's corner fold without needing a second asset. */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-9 w-9 bg-accent/25"
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
        aria-hidden="true"
      />

      <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-card">
        <CategoryIcon size={22} />
      </span>

      <h3 className="font-display text-xl font-medium text-ink">{group.category}</h3>
      {/* Hidden until the card is hovered, then grows in from the left --
          per request, rather than always sitting there. */}
      <span
        className="mb-4 mt-2 block h-0.5 w-10 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden="true"
      />
      <p className="mb-5 text-sm leading-relaxed text-ink-muted">{group.description}</p>

      <ul className="flex flex-wrap gap-2.5">
        {group.items.map((skill) => (
          <motion.li
            key={skill.name}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-ink-muted"
          >
            <skill.icon size={15} style={{ color: skill.color }} />
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-b border-line bg-surface">
      <div className="container-x">
        <div className="max-w-2xl mb-10 md:mb-14">
          <Reveal>
            <span className="eyebrow mb-3">
              <PulseDot />
              Skills
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-ink">
              Tools I <span className="text-accent">reach for</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
              A working set of languages, frameworks, and infrastructure I use to take a product from idea to
              production.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <SkillGroupCard key={group.category} group={group} delay={gi * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
