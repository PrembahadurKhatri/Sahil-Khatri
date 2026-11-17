import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PulseDot from "../components/PulseDot.jsx";
import IconTile from "../components/IconTile.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { projects, skillGroups } from "../data/content.js";
import { SiPrisma, SiZod, SiJavascript, SiCss } from "react-icons/si";

// Tag -> logo lookup: every skill from the Skills section plus a few
// project-only technologies. Matching ignores case and a trailing " CSS".
const norm = (s) => s.trim().toLowerCase().replace(/\s+css$/, "");
const TECH_BY_TAG = new Map(
  [
    ...skillGroups.flatMap((g) => g.items).map((t) => ({ ...t, label: t.name })),
    { name: "Prisma", label: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Zod", label: "Zod", icon: SiZod, color: "#3068B7" },
    { name: "JavaScript", label: "JavaScript", icon: SiJavascript, color: "#E4B400" },
    { name: "CSS", label: "CSS", icon: SiCss, color: "#663399" },
  ].map((t) => [norm(t.name), t])
);
const techFor = (tag) => TECH_BY_TAG.get(norm(tag));

const ONGOING_RE = /\s*\(ongoing\)\s*$/i;
const READ_MORE_THRESHOLD = 150;

function useCleanTitle(rawTitle) {
  const ongoing = ONGOING_RE.test(rawTitle);
  return { title: rawTitle.replace(ONGOING_RE, "").trim(), ongoing };
}

function StatusBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold/40 bg-base/60 px-2.5 py-1 text-[11px] font-medium text-gold">
      <PulseDot />
      In Progress
    </span>
  );
}

function ProjectCard({ project, index }) {
  const { title, ongoing } = useCleanTitle(project.title);
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > READ_MORE_THRESHOLD;
  const spotlight = useSpotlight();

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      whileHover={{ y: -6 }}
      className="card-premium spotlight group flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative m-2 flex h-48 items-center justify-center overflow-hidden rounded-[1.35rem] bg-base/70 px-6 pb-5 pt-14 sm:h-52 sm:p-8">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
          style={{ background: "radial-gradient(circle, rgb(var(--color-gold) / 0.35), rgb(var(--color-accent) / 0.2) 50%, transparent 70%)" }}
        />
        {project.featured && (
          <span className="eyebrow absolute left-4 top-4 z-10">
            <PulseDot />
            Featured
          </span>
        )}
        <div className="flex h-full w-full items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="relative h-full w-full max-w-[11rem] object-contain drop-shadow-[0_18px_24px_rgb(0_0_0_/_0.35)] transition-transform duration-500 group-hover:scale-110 sm:max-w-[12rem]"
        />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-medium text-ink transition-colors sm:text-2xl duration-300 group-hover:text-gold">
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

        <ul className="mb-6 mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((tag) => {
            const tech = techFor(tag);
            return (
              <motion.li
                key={tag}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-line bg-base/50 py-1 pl-1 pr-3 text-[11px] font-medium text-ink-muted"
              >
                {tech ? (
                  <IconTile icon={tech.icon} color={tech.color} size="2xs" />
                ) : (
                  <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                )}
                {tech?.label || tag.trim()}
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-5">
          <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary shine px-5 py-2.5 text-xs">
            Live Site
            <FiArrowUpRight size={14} />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="btn-ghost px-5 py-2.5 text-xs"
            >
              <FiGithub size={14} />
              Source
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built"
          description="A few real, shipped projects — client sites and products, live in production."
        />

        <div className="grid gap-5 md:grid-cols-2 md:items-start md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
