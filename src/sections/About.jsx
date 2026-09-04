import { FiMapPin, FiMail, FiCheckCircle, FiClock, FiFolder, FiLayers, FiSmile } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { profile, stats } from "../data/content.js";

const FACTS = [
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiMail, label: "Email", value: profile.email },
  { icon: FiCheckCircle, label: "Status", value: profile.availability },
];

const STAT_ICONS = [FiClock, FiFolder, FiLayers, FiSmile];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-line">
      <div className="container-x">
        <SectionHeading eyebrow="About Me" title="A little about how I work" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-lg md:text-xl leading-relaxed text-ink">{profile.bio}</p>
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
                    <dt className="text-xs uppercase tracking-wide text-ink-faint">{fact.label}</dt>
                    <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length];
                return (
                  <Reveal
                    key={stat.label}
                    delay={0.06 * i}
                    whileHover={{ y: -6 }}
                    className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-card"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon size={16} />
                    </span>
                    <div className="mt-4 font-display text-4xl font-medium text-ink">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-ink-muted leading-snug">{stat.label}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
