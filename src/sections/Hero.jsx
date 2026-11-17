import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
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

  const float = (d) => (reduceMotion ? undefined : { y: [0, -10, 0], transition: { duration: d, repeat: Infinity, ease: "easeInOut" } });

  return (
    <section id="hero" className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      {/* Layered backdrop: architectural grid + emerald and gold light pools */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] h-[26rem] w-[26rem] rounded-full blur-[100px] md:h-[42rem] md:w-[42rem] md:blur-[140px]"
        style={{ background: "rgb(var(--color-accent) / 0.22)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-32 h-[22rem] w-[22rem] rounded-full blur-[100px] md:h-[34rem] md:w-[34rem] md:blur-[140px]"
        style={{ background: "rgb(var(--color-gold) / 0.14)" }}
      />

      <div className="container-x relative z-10 grid gap-14 pt-28 pb-6 md:grid-cols-12 md:items-center md:gap-16 md:pt-32 md:pb-10">
        <div className="md:col-span-7">
          <motion.span
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow !normal-case !tracking-normal !text-xs !font-medium"
          >
            <PulseDot className="bg-accent" />
            <span className="text-ink-muted">{profile.availability}</span>
          </motion.span>

          <div className="mt-6 overflow-hidden pb-2 md:mt-7">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.12, ease }}
              className="text-gold font-display text-[clamp(2.4rem,11vw,3.5rem)] font-medium leading-[1] sm:text-6xl md:text-7xl lg:text-[5.75rem]"
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
            className="mt-5 flex min-h-[2.25rem] flex-wrap items-baseline gap-2 font-display text-xl text-ink sm:text-2xl md:mt-6 md:text-3xl"
          >
            <span className="italic text-ink-muted">I'm a</span>
            <TypingText words={profile.roles} className="text-emerald font-medium" />
          </motion.div>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-muted md:mt-6 md:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4 md:mt-10"
          >
            <button type="button" onClick={() => scrollTo("projects")} className="btn-primary shine whitespace-nowrap px-4 py-3.5 sm:px-7">
              View Projects
              <FiArrowUpRight size={16} />
            </button>
            <button type="button" onClick={() => scrollTo("contact")} className="btn-ghost whitespace-nowrap px-4 py-3.5 sm:px-7">
              Get in Touch
            </button>
          </motion.div>

        </div>

        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm md:col-span-5 md:max-w-none">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative"
        >
          {/* Solid panel, offset and slightly rotated behind the photo. */}
          <motion.div
            animate={float(7)}
            className="absolute -bottom-5 -right-5 h-full w-full rotate-3 rounded-[2rem] bg-accent-soft"
            aria-hidden="true"
          />

          {/* Corner brackets: a viewfinder / crop-mark motif around the photo. */}
          <span
            aria-hidden="true"
            className="absolute -left-2.5 -top-2.5 z-10 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 -right-2.5 z-10 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-accent"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-card">
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-4 z-10 flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card-hover sm:-left-6 sm:px-5 sm:py-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent sm:h-11 sm:w-11">
              <FaLaptopCode size={18} />
            </span>
            <div>
              <p className="text-xl font-semibold leading-none text-ink">
                {experienceStat.value}
                {experienceStat.suffix}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{experienceStat.label}</p>
            </div>
          </div>

          {/* developer.ts code card sitting on the top corner of the photo. */}
          <motion.div
            animate={float(6)}
            className="absolute -right-2 -top-5 z-10 w-44 overflow-hidden rounded-xl border border-line bg-surface shadow-card-hover sm:-right-4 sm:-top-6 sm:w-52"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-base px-2.5 py-1.5 sm:px-3 sm:py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-line sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-line sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              <span className="ml-1.5 font-mono text-[9px] text-ink-faint sm:text-[10px]">developer.ts</span>
            </div>
            <pre className="px-2.5 py-2.5 font-mono text-[9.5px] leading-relaxed text-ink-muted sm:px-3.5 sm:py-3 sm:text-[11px]">
              <span className="text-accent">const</span> developer = {"{"}
              {"\n  "}stack: [<span className="text-accent">"MERN"</span>, <span className="text-accent">"Next.js"</span>],
              {"\n  "}focus: <span className="text-accent">"Clean code"</span>,
              {"\n"}{"}"}
              <span className="text-accent">;</span>
            </pre>
          </motion.div>
        </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-10 md:mt-8">
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
