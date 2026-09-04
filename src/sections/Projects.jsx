import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CtaButton from "../components/CtaButton.jsx";
import { projects } from "../data/content.js";

const ONGOING_RE = /\s*\(ongoing\)\s*$/i;

function useTitle(rawTitle) {
  const ongoing = ONGOING_RE.test(rawTitle);
  return { title: rawTitle.replace(ONGOING_RE, "").trim(), ongoing };
}

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base px-2.5 py-1 text-[11px] font-medium text-ink-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      In Progress
    </span>
  );
}

function GithubLink({ project, className = "" }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} source on GitHub`}
      className={`group/gh inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent ${className}`}
    >
      <FiGithub size={14} className="transition-transform duration-300 group-hover/gh:rotate-12" />
      Source
    </a>
  );
}

function FeaturedProject({ project }) {
  const { title, ongoing } = useTitle(project.title);

  return (
    <Reveal
      whileHover={{ y: -4 }}
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover md:grid-cols-2"
    >
      <div className="relative flex items-center justify-center bg-base p-10 md:p-14">
        <span className="absolute left-6 top-6 font-display text-sm text-ink-faint">01</span>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-105 md:h-52 md:w-52"
        />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="eyebrow w-fit">Featured Project</span>
          {ongoing && <StatusBadge />}
        </div>
        <h3 className="font-display text-2xl font-medium text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted">
              {tag.trim()}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          <CtaButton as="a" href={project.live} target="_blank" rel="noreferrer" icon={FiArrowUpRight}>
            View Live
          </CtaButton>
          <GithubLink project={project} className="text-sm font-medium" />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, delay }) {
  const { title, ongoing } = useTitle(project.title);

  return (
    <Reveal
      delay={delay}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-base p-8">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-accent">
            {title}
          </h3>
          {ongoing && <StatusBadge />}
        </div>
        <p className="mt-1 text-xs font-medium text-accent">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

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

        <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm font-medium">
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
          <GithubLink project={project} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built"
          description="A few real, shipped projects — client sites and products, live in production."
        />

        <div className="flex flex-col gap-6">
          {featured && <FeaturedProject project={featured} />}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
