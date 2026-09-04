import { useState } from "react";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/content.js";

const ONGOING_RE = /\s*\(ongoing\)\s*$/i;
const READ_MORE_THRESHOLD = 150;

function useCleanTitle(rawTitle) {
  const ongoing = ONGOING_RE.test(rawTitle);
  return { title: rawTitle.replace(ONGOING_RE, "").trim(), ongoing };
}

function StatusBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-base px-2.5 py-1 text-[11px] font-medium text-ink-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      In Progress
    </span>
  );
}

function ProjectCard({ project, delay }) {
  const { title, ongoing } = useCleanTitle(project.title);
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > READ_MORE_THRESHOLD;

  return (
    <Reveal
      delay={delay}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-base p-10">
        {project.featured && <span className="eyebrow absolute left-5 top-5">Featured</span>}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          {ongoing && <StatusBadge />}
        </div>
        <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>

        <p className={`mt-3 text-sm leading-relaxed text-ink-muted ${expanded ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="mt-1.5 inline-flex w-fit items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-ink"
          >
            {expanded ? "Read less" : "Read more"}
            {expanded ? <FiChevronUp size={13} /> : <FiChevronDown size={13} />}
          </button>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] text-ink-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent"
            >
              {tag.trim()}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-4 border-t border-line pt-4 text-sm font-medium">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group/live inline-flex items-center gap-1.5 text-ink link-underline hover:text-accent"
          >
            Live Site
            <FiArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
            />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} source on GitHub`}
            className="group/gh inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
          >
            <FiGithub size={14} className="transition-transform duration-300 group-hover/gh:rotate-12" />
            Source
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-b border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built"
          description="A few real, shipped projects — client sites and products, live in production."
        />

        <div className="grid gap-6 sm:grid-cols-2 sm:items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
