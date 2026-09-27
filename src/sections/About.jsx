import { FiMapPin, FiMail, FiCheckCircle, FiClock, FiFolder, FiLayers, FiSmile } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { profile, stats, skillGroups } from "../data/content.js";

const FACTS = [
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiMail, label: "Email", value: profile.email },
  { icon: FiCheckCircle, label: "Status", value: profile.availability },
];

// Per-card icon color + short blurb, matched 1:1 with `stats` by index.
const STAT_META = [
  { icon: FiClock, iconBg: "bg-blue-50", iconColor: "text-blue-600", blurb: "Learning and building something new every day." },
  { icon: FiFolder, iconBg: "bg-violet-50", iconColor: "text-violet-600", blurb: "Real solutions, shipped for real people." },
  { icon: FiLayers, iconBg: "bg-teal-50", iconColor: "text-teal-600", blurb: "From frontend to backend, always exploring." },
  { icon: FiSmile, iconBg: "bg-sky-50", iconColor: "text-sky-600", blurb: "Because good work speaks for itself." },
];

// A handful of core tools for the footer strip, pulled from the same data
// Skills.jsx reads from so the two sections never fall out of sync.
const STACK_NAMES = ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"];
const TECH_STACK = skillGroups
  .flatMap((group) => group.items)
  .filter((skill) => STACK_NAMES.includes(skill.name));

function StatCard({ stat, meta, delay }) {
  const spotlight = useSpotlight();
  const Icon = meta.icon;

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={delay}
      whileHover={{ y: -6 }}
      className="spotlight group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-card"
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${meta.iconBg} ${meta.iconColor} transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={17} />
      </span>
      <div className="mt-4 font-display text-3xl font-medium text-ink">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="mt-1.5 text-sm font-medium text-ink leading-snug">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-faint">{meta.blurb}</p>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-line">
      <div className="container-x">
        <SectionHeading eyebrow="About Me" title="A little about how I work" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-ink text-serif">{profile.bio}</p>
            </Reveal>

            <dl className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {FACTS.map((fact, i) => (
                <Reveal
                  as="div"
                  key={fact.label}
                  delay={0.05 * i}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition-colors duration-300 hover:border-accent/50 hover:bg-accent-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <fact.icon size={15} />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-yellow-600">{fact.label}</dt>
                    <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Reveal delay={0.1} className="sm:col-span-1 sm:row-span-2">
                <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                  <div>
                    <div className="flex items-center gap-1.5 border-b border-line bg-base px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-line" />
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className="ml-1.5 font-mono text-[11px] text-ink-faint">developer.ts</span>
                    </div>
                    <pre className="px-4 py-5 font-mono text-[12.5px] leading-relaxed text-ink-muted sm:text-[13px]">
                      <span className="text-accent">const</span> developer = {"{"}
                      {"\n  "}name: <span className="text-accent">"{profile.name}"</span>,
                      {"\n  "}role: <span className="text-accent">"Full-Stack Developer"</span>,
                      {"\n  "}stack: [<span className="text-accent">"MERN"</span>, <span className="text-accent">"Next.js"</span>],
                      {"\n  "}focus: <span className="text-accent">"Clean code"</span>,
                      {"\n"}{"}"}
                      <span className="text-accent">;</span>
                    </pre>
                  </div>
                  <p className="border-t border-line px-4 py-3 font-serif text-sm italic text-ink-faint">
                    Code → Build → Grow
                  </p>
                </div>
              </Reveal>

              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} meta={STAT_META[i % STAT_META.length]} delay={0.06 * i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Tech Stack</span>
          {TECH_STACK.map((tech) => (
            <span key={tech.name} className="inline-flex items-center gap-2 text-sm text-ink-muted">
              <tech.icon size={16} style={{ color: tech.color }} />
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
