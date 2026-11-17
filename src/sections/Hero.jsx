import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { FaLaptopCode, FaCheckCircle } from "react-icons/fa";
import TypingText from "../components/TypingText.jsx";
import PulseDot from "../components/PulseDot.jsx";
import IconTile from "../components/IconTile.jsx";
import { profile, stats, skillGroups } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];
const TECH = skillGroups.flatMap((g) => g.items);

function TechMarquee() {
  const row = [...TECH, ...TECH];
  return (
    <div className="marquee-mask relative overflow-hidden py-5">
      <div className="marquee-track flex w-max gap-4">
        {row.map((t, i) => (
          <span
            key={t.name + i}
            className="card-premium group inline-flex items-center gap-3 rounded-2xl py-2 pl-2 pr-5 text-sm font-medium text-ink-muted"
          >
            <IconTile icon={t.icon} color={t.color} size="sm" />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const experienceStat = stats[0];
  const projectStat = stats[1];

  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 800], [0, 120]);
  const textY = useTransform(scrollY, [0, 800], [0, -60]);

  const float = (d) => (reduceMotion ? undefined : { y: [0, -10, 0], transition: { duration: d, repeat: Infinity, ease: "easeInOut" } });

  return (
    <section id="hero" className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      {/* Layered backdrop: architectural grid + emerald and gold light pools */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] h-[42rem] w-[42rem] rounded-full blur-[140px]"
        style={{ background: "rgb(var(--color-accent) / 0.22)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-32 h-[34rem] w-[34rem] rounded-full blur-[140px]"
        style={{ background: "rgb(var(--color-gold) / 0.14)" }}
      />

      <div className="container-x relative z-10 grid gap-16 pt-36 pb-10 md:grid-cols-12 md:items-center md:pt-32">
        <motion.div style={{ y: textY }} className="md:col-span-7">
          <motion.span
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow !normal-case !tracking-normal !text-xs !font-medium"
          >
            <PulseDot className="bg-accent" />
            <span className="text-ink-muted">{profile.availability}</span>
          </motion.span>

          <div className="mt-7 overflow-hidden pb-2">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="text-gold font-display text-[12.5vw] font-medium leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.75rem]"
            >
              {profile.name}
            </motion.h1>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="hairline mt-6"
            aria-hidden="true"
          />

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-6 flex flex-wrap items-baseline gap-2 font-display text-2xl text-ink md:text-3xl"
          >
            <span className="italic text-ink-muted">I'm a</span>
            <TypingText words={profile.roles} className="text-emerald font-medium" />
          </motion.div>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ink-muted md:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button type="button" onClick={() => scrollTo("projects")} className="btn-primary shine px-7 py-3.5">
              View Projects
              <FiArrowUpRight size={16} />
            </button>
            <button type="button" onClick={() => scrollTo("contact")} className="btn-ghost px-7 py-3.5">
              Get in Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {profile.socials.slice(0, 4).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group rounded-[11px] ring-2 ring-base transition-transform hover:z-10 hover:-translate-y-1"
                >
                  <IconTile icon={s.icon} color={s.color} gradient={s.gradient} size="sm" />
                </a>
              ))}
            </div>
            <span className="text-sm text-ink-faint">Find me online</span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: photoY }} className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative"
        >
          {/* Rotating gold/emerald ring framing the portrait */}
          <div className="relative rounded-[2.4rem] p-[2px]">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[2.4rem]">
              <div
                className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgb(var(--color-gold)), transparent 25%, rgb(var(--color-accent)) 50%, transparent 75%, rgb(var(--color-gold)))",
                  animation: reduceMotion ? undefined : "spin-slow 8s linear infinite",
                }}
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2.4rem-2px)] bg-surface">
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 55%, rgb(var(--color-base) / 0.55))" }}
              />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] blur-3xl"
            style={{ background: "radial-gradient(circle, rgb(var(--color-accent) / 0.35), transparent 70%)" }}
          />

          <motion.div
            animate={float(7)}
            className="card-premium group absolute -bottom-7 -left-4 z-10 flex items-center gap-3 rounded-2xl px-4 py-3.5 sm:-left-8"
          >
            <IconTile icon={FaLaptopCode} color="accent" size="md" />
            <div>
              <p className="font-display text-2xl font-medium leading-none text-ink">
                {experienceStat.value}
                <span className="text-gold">{experienceStat.suffix}</span>
              </p>
              <p className="mt-1 text-xs text-ink-muted">{experienceStat.label}</p>
            </div>
          </motion.div>

          <motion.div
            animate={float(6)}
            className="card-premium group absolute -right-3 top-10 z-10 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-right-8"
          >
            <IconTile icon={FaCheckCircle} color="gold" size="sm" />
            <div>
              <p className="font-display text-lg font-medium leading-none text-ink">
                {projectStat.value}
                {projectStat.suffix}
              </p>
              <p className="mt-0.5 text-[11px] text-ink-muted">{projectStat.label}</p>
            </div>
          </motion.div>

          <motion.div
            animate={float(8)}
            className="card-premium absolute -right-2 bottom-24 z-10 hidden w-52 overflow-hidden rounded-xl sm:block md:-right-10"
          >
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-1.5 font-mono text-[10px] text-ink-faint">developer.ts</span>
            </div>
            <pre className="px-3.5 py-3 font-mono text-[10.5px] leading-relaxed text-ink-muted">
              <span className="text-gold">const</span> developer = {"{"}
              {"\n  "}stack: [<span className="text-accent">"MERN"</span>, <span className="text-accent">"Next.js"</span>],
              {"\n  "}focus: <span className="text-accent">"Clean code"</span>,
              {"\n"}{"}"};
            </pre>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-8">
        <TechMarquee />
      </div>

      <button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About"
        className="relative z-10 mx-auto mb-6 mt-2 hidden h-11 w-7 items-start justify-center rounded-full border border-gold/50 p-1.5 md:flex"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 14, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-1 rounded-full bg-gold"
        />
        <FiArrowDown className="sr-only" />
      </button>
    </section>
  );
}
