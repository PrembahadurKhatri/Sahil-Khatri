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
              className="grid gap-3 border-t border-line py-9 first:border-t-0 md:grid-cols-[10rem,1fr] md:gap-10"
            >
              <span className="text-sm font-medium text-ink-faint">{job.period}</span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ink">{job.role}</h3>
                  <span className="text-sm text-accent">{job.company}</span>
                </div>
                <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-ink-muted">
                  {job.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-base px-3 py-1 text-xs text-ink-muted"
                    >
                      {tag}
                    </li>
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
