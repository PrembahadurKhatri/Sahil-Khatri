import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { profile, stats, aboutTimeline, funFacts } from "../data/content.js";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="About Me" title="The person behind the code" />

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Photo + rotating decorative ring, standing in for the brief's
              "interactive 3D object beside content" without a real WebGL
              dependency. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-square w-full max-w-sm"
          >
            <motion.div
              className="absolute inset-0 rounded-[2rem] border border-dashed border-electric/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-6 rounded-[1.5rem] border border-dashed border-violet/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-10 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-electric/20 via-violet/15 to-cyan/20 shadow-glow">
              <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-ink/20">SK</div>
            </div>
            <span className="absolute -bottom-4 -right-2 flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 font-mono text-xs text-ink-muted backdrop-blur-xl">
              <FiMapPin className="h-3.5 w-3.5 text-cyan" />
              {profile.location}
            </span>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="text-balance text-lg leading-relaxed text-ink-muted"
            >
              {profile.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  className="flex flex-col gap-1 rounded-2xl border border-border bg-surface/40 p-5"
                >
                  <span className="font-display text-3xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <div className="flex flex-col gap-1">
              {aboutTimeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex gap-4 border-l border-border py-4 pl-6"
                >
                  <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-electric shadow-glow transition-transform group-hover:scale-125" />
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                      <p className="font-mono text-xs text-ink-faint">{item.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-ink-muted">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun facts */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {funFacts.map((fact) => (
                <div key={fact} className="flex items-start gap-3 rounded-xl border border-border bg-surface/30 p-4 text-sm text-ink-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
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
