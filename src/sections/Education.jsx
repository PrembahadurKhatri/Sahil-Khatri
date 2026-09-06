import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FiAward } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { education, certifications } from "../data/content.js";

export default function Education() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });

  return (
    <section id="education" className="py-24 md:py-32 border-b border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ol ref={timelineRef} className="relative pl-8">
              <span className="absolute left-0 top-0 h-full w-px bg-line" aria-hidden="true" />
              <motion.span
                style={{ scaleY: scrollYProgress }}
                className="absolute left-0 top-0 h-full w-px origin-top bg-accent"
                aria-hidden="true"
              />

              {education.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.degree}
                  delay={i * 0.08}
                  className="group relative pb-12 last:pb-0"
                >
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-base transition-transform duration-300 group-hover:scale-125 group-hover:bg-accent" />
                  <span className="text-xs uppercase tracking-widest2 text-accent">{item.period}</span>
                  <h3 className="mt-2 font-display text-xl md:text-2xl font-medium text-yellow-600">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-muted">{item.institution}</p>
                  <p className="mt-3 text-sm md:text-base leading-relaxed  dark:text-white max-w-lg ">
                    <span className="text-ink-muted dark:text-white">
                    {item.description}
                  </span>
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="md:col-span-5">
            <Reveal>
              <h3 className="font-display text-lg font-medium text-ink mb-5">Certifications</h3>
            </Reveal>
            <ul className="flex flex-col divide-y divide-line rounded-2xl border border-line overflow-hidden">
              {certifications.map((cert, i) => (
                <Reveal
                  as="li"
                  key={cert.title}
                  delay={0.05 * i}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 bg-surface px-5 py-4 transition-colors duration-300 hover:bg-accent-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <FiAward size={15} />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-ink">{cert.title}</p>
                    <p className="text-xs text-ink-faint mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-base px-2.5 py-1 text-xs font-semibold text-accent">
                    {cert.year}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
