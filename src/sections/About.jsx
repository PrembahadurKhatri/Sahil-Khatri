import { FiMapPin, FiMail, FiCheckCircle, FiClock, FiFolder, FiLayers, FiSmile } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import IconTile from "../components/IconTile.jsx";
import { useSpotlight } from "../hooks/useSpotlight.js";
import { profile, stats, skillGroups } from "../data/content.js";

const FACTS = [
  { icon: FiMapPin, label: "Location", value: profile.location, color: "#E5484D" },
  { icon: FiMail, label: "Email", value: profile.email, color: "#3E63DD" },
  { icon: FiCheckCircle, label: "Status", value: profile.availability, color: "accent" },
];

// Per-card icon colour + short blurb, matched 1:1 with `stats` by index.
const STAT_META = [
  { icon: FiClock, color: "#3B82F6", blurb: "Learning and building something new every day." },
  { icon: FiFolder, color: "#8B5CF6", blurb: "Real solutions, shipped for real people." },
  { icon: FiLayers, color: "#14B8A6", blurb: "From frontend to backend, always exploring." },
  { icon: FiSmile, color: "gold", blurb: "Because good work speaks for itself." },
];

const STACK_NAMES = ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker", "AWS"];
const TECH_STACK = skillGroups
  .flatMap((group) => group.items)
  .filter((skill) => STACK_NAMES.includes(skill.name));

function StatCard({ stat, meta, delay }) {
  const spotlight = useSpotlight();

  return (
    <Reveal
      ref={spotlight.ref}
      onMouseMove={spotlight.onMouseMove}
      delay={delay}
      whileHover={{ y: -6 }}
      className="card-premium spotlight group rounded-3xl p-6"
    >
      <IconTile icon={meta.icon} color={meta.color} size="md" />
      <div className="mt-5 font-display text-4xl font-medium text-ink">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-faint">{meta.blurb}</p>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="About Me" title="A little about how I work" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <Reveal>
              <p className="border-l-2 border-gold/60 pl-6 font-display text-xl leading-relaxed text-ink md:text-2xl">
                {profile.bio}
              </p>
            </Reveal>

            <dl className="mt-10 flex flex-col gap-3">
              {FACTS.map((fact, i) => (
                <Reveal
                  as="div"
                  key={fact.label}
                  delay={0.05 * i}
                  whileHover={{ x: 4 }}
                  className="card-premium group flex items-center gap-4 rounded-2xl px-4 py-3"
                >
                  <IconTile icon={fact.icon} color={fact.color} size="sm" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{fact.label}</dt>
                    <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6 md:pl-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} meta={STAT_META[i % STAT_META.length]} delay={0.06 * i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="hairline mb-8" aria-hidden="true" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Core Stack</span>
            {TECH_STACK.map((tech) => (
              <span key={tech.name} className="group inline-flex items-center gap-2.5 text-sm font-medium text-ink-muted">
                <IconTile icon={tech.icon} color={tech.color} size="xs" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
