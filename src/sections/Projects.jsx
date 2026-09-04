import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/content.js";

function ProjectCard({ project, delay, featured }) {
  return (
    <Reveal
      delay={delay}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={`overflow-hidden bg-surface2 ${featured ? "md:w-1/2" : "aspect-[16/10]"}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>

      <div className={`flex flex-1 flex-col p-7 ${featured ? "md:w-1/2 md:justify-center" : ""}`}>
        {featured && <span className="eyebrow mb-4 w-fit">Featured</span>}
        <h3 className="font-display text-xl font-medium text-ink transition-colors duration-300 group-hover:text-accent md:text-2xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4 text-sm font-medium">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="group/live inline-flex items-center gap-1.5 text-ink link-underline hover:text-accent"
          >
            Live Site
            <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group/gh inline-flex items-center gap-1.5 text-ink-muted transition-colors hover:text-accent"
            aria-label={`${project.title} source on GitHub`}
          >
            <FiGithub size={14} className="transition-transform duration-300 group-hover/gh:rotate-12" /> Source
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
          description="A few projects that show how I think about product, performance, and detail."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
