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
              className="rounded-2xl border border-line bg-base p-7"
            >
              <h3 className="font-display text-lg font-medium text-ink mb-5">{group.category}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-ink-muted transition-colors hover:border-accent/50 hover:text-ink"
                  >
                    <skill.icon size={15} className="text-accent" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
