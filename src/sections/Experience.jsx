import { motion } from "framer-motion";
import { FaBriefcase, FaRocket, FaLaptopCode } from "react-icons/fa";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import IconTile from "../components/IconTile.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { experience } from "../data/content.js";

const JOB_ICONS = [
  { icon: FaBriefcase, color: "gold" },
  { icon: FaLaptopCode, color: "accent" },
  { icon: FaRocket, color: "#8B5CF6" },
];

function JobCard({ job, index }) {
  const spotlight = useSpotlight();
  const meta = JOB_ICONS[index % JOB_ICONS.length];

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={index * 0.06}
      whileHover={{ y: -4 }}
      className="card-premium spotlight group grid gap-5 rounded-3xl p-6 md:grid-cols-[13rem,1fr] md:gap-10 md:p-8"
    >
      <div className="flex items-start gap-4 md:flex-col">
        <IconTile icon={meta.icon} color={meta.color} size="lg" />
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:mt-0">{job.period}</span>
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-display text-xl font-medium text-ink md:text-2xl">{job.role}</h3>
          <span className="text-sm font-medium text-accent">@ {job.company}</span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-[1rem]">{job.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <motion.li
              key={tag}
              whileHover={{ y: -2 }}
              className="cursor-default rounded-full border border-line bg-base/50 px-3 py-1 text-xs font-medium text-ink-muted transition-colors duration-200 hover:border-gold/60 hover:text-gold"
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-surface/40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Roughly chronological, most recent first. The throughline is always shipping things that work."
        />

        <div className="flex flex-col gap-5">
          {experience.map((job, i) => (
            <JobCard key={job.role + job.period} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
