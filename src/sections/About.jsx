import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { profile, stats, aboutTimeline, funFacts } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="About Me" title="The person behind the code" />

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-border bg-surface2/60">
              <span className="font-display text-5xl font-bold text-ink-faint/30">SK</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-ink-muted lg:justify-start">
              <FiMapPin className="h-3.5 w-3.5 text-accent" />
              {profile.location}
            </div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-balance text-lg leading-relaxed text-ink-muted"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-xl border border-border bg-surface/40 p-5"
                >
                  <span className="block font-display text-3xl font-bold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-1 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col gap-1">
              {aboutTimeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex gap-4 border-l border-border py-4 pl-6"
                >
                  <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-display text-base font-semibold">{item.title}</h3>
                      <p className="font-mono text-xs text-ink-faint">{item.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-ink-muted">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {funFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3 rounded-lg border border-border bg-surface/30 p-4 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {fact}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
