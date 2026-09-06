import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import TypingText from "../components/TypingText.jsx";
import { profile, stats } from "../data/content.js";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const experienceStat = stats[0];

  return (
    <section
      id="hero"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-accent/[0.05] blur-[120px]"
      />

      <div className="container-x relative z-10 grid gap-16 pt-32 pb-20 md:grid-cols-12 md:items-center md:pt-28">
        <div className="md:col-span-7">
          <motion.span
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1 text-sm font-medium text-accent"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.span>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="font-serif text-yellow-600 text-[13vw] leading-[0.95] font-medium text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {profile.name}
            </motion.h1>
          </div>

          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="mt-6 flex flex-wrap items-baseline gap-2 text-xl md:text-2xl text-ink-muted"
          >
            <span>I'm a</span>
            <TypingText words={profile.roles} className="font-medium text-accent" />
          </motion.div>

          <motion.p
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-ink-muted"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.button
              type="button"
              onClick={() => scrollTo("projects")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="shine inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              View Projects
              <FiArrowUpRight size={16} />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollTo("contact")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none"
        >
          {/* Hollow accent frame, offset behind the photo -- a gallery-frame
              reveal instead of a solid color block. */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] border-2 border-accent/50"
            aria-hidden="true"
          />

          {/* Corner brackets -- a viewfinder/crop-mark motif around the photo. */}
          <span
            aria-hidden="true"
            className="absolute -top-2.5 -left-2.5 z-10 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-2.5 -right-2.5 z-10 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-accent"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-card">
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />

            <div className="absolute bottom-4 left-4 flex w-fit max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 shadow-card-hover">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <FaLaptopCode size={18} />
              </span>
              <div>
                <p className="font-display text-xl font-medium leading-none text-ink">
                  {experienceStat.value}
                  {experienceStat.suffix}
                </p>
                <p className="mt-1 text-xs text-ink-muted">{experienceStat.label}</p>
              </div>
            </div>
          </div>

          {/* A small styled code snippet in place of scattered logo chips --
              one deliberate, coherent decorative element. */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-4 z-10 hidden w-52 overflow-hidden rounded-xl border border-line bg-surface shadow-card-hover sm:block"
          >
            <div className="flex items-center gap-1.5 border-b border-line bg-base px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="ml-1.5 font-mono text-[10px] text-ink-faint">developer.ts</span>
            </div>
            <pre className="px-3.5 py-3 font-mono text-[11px] leading-relaxed text-ink-muted">
              <span className="text-accent">const</span> dev = {"{"}
              {"\n  "}stack: [<span className="text-accent">"React"</span>, <span className="text-accent">"Node"</span>],
              {"\n  "}focus: <span className="text-accent">"clean code"</span>,
              {"\n"}{"}"}
              <span className="text-accent">;</span>
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
