import { FiMapPin, FiMail, FiCheckCircle } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { profile, stats } from "../data/content.js";

const FACTS = [
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiMail, label: "Email", value: profile.email },
  { icon: FiCheckCircle, label: "Status", value: profile.availability },
];

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

            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {FACTS.map((fact, i) => (
                <Reveal key={fact.label} delay={0.05 * i} className="flex flex-col gap-2">
                  <dt className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink-faint">
                    <fact.icon size={14} className="text-accent" />
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink break-words">{fact.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={0.06 * i}
                  className="rounded-2xl border border-line bg-surface p-6"
                >
                  <div className="font-display text-4xl font-medium text-ink">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-ink-muted leading-snug">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
