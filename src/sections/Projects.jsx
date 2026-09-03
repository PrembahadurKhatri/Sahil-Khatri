import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { projects } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import TiltCard from "../components/TiltCard.jsx";

function ProjectCard({ project, onOpen }) {
  return (
    <TiltCard className="w-[85vw] shrink-0 snap-center sm:w-[420px]">
      <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/60 shadow-card backdrop-blur-xl">
        <button type="button" onClick={() => onOpen(project)} className="relative aspect-[16/10] w-full overflow-hidden text-left">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-bold">{project.title}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-cyan">{project.tagline}</p>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-surface2/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="font-mono text-xs font-semibold uppercase tracking-wide text-electric transition-transform hover:translate-x-1"
            >
              View Details →
            </button>
            <div className="flex items-center gap-3 text-ink-faint">
              <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="transition-colors hover:text-ink">
                <FiGithub className="h-4 w-4" />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`} className="transition-colors hover:text-ink">
                <FiExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[180] overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface shadow-card"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-ink backdrop-blur-xl transition-colors hover:text-electric"
          >
            <FiX className="h-4 w-4" />
          </button>

          <div className="aspect-[16/9] w-full overflow-hidden">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col gap-6 p-8">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{project.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-cyan">{project.tagline}</p>
            </div>

            <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{project.description}</p>

            <div>
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Key Features</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">Architecture</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{project.architecture}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-surface2/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 border-t border-border pt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-base transition-transform hover:scale-105"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2/60 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-electric/50"
              >
                <FiGithub className="h-3.5 w-3.5" />
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 sm:mb-20">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects worth a second look"
            subtitle="A horizontal shelf — drag, scroll, or use the arrows. Click any card to open the full case study."
          />
          <div className="mb-20 hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-electric/50 hover:text-electric"
            >
              <FiArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-electric/50 hover:text-electric"
            >
              <FiArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollerRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:px-10 [&::-webkit-scrollbar]:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
        <div className="shrink-0 basis-2" aria-hidden="true" />
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
