import { FaAward, FaGraduationCap } from "react-icons/fa";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import IconTile from "../components/IconTile.jsx";
import { education, certifications } from "../data/content.js";

const CERT_COLORS = ["#FF9900", "#0866FF", "#FF6F00", "#47A248"];

export default function Education() {
  return (
    <section id="education" className="relative py-16 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <ol className="relative pl-12">
              <span
                className="absolute left-[19px] top-0 h-full w-px"
                style={{ background: "linear-gradient(rgb(var(--color-gold)), rgb(var(--color-accent)))" }}
                aria-hidden="true"
              />

              {education.map((item, i) => (
                <Reveal as="li" key={item.degree} delay={i * 0.08} className="group relative pb-10 last:pb-0">
                  <span className="absolute -left-12 top-1">
                    <IconTile icon={FaGraduationCap} color={i % 2 ? "gold" : "accent"} size="md" className="!h-10 !w-10" />
                  </span>
                  <div className="card-premium rounded-3xl p-5 md:p-7">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">{item.period}</span>
                    <h3 className="mt-2 font-display text-xl font-medium text-ink md:text-2xl">{item.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{item.institution}</p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted md:text-[1rem]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="md:col-span-5">
            <Reveal>
              <h3 className="mb-5 font-display text-xl font-medium text-ink">
                Certifications
              </h3>
            </Reveal>
            <ul className="flex flex-col gap-3">
              {certifications.map((cert, i) => (
                <Reveal
                  as="li"
                  key={cert.title}
                  delay={0.05 * i}
                  whileHover={{ x: 4 }}
                  className="card-premium group flex items-center gap-3 rounded-2xl px-4 py-4 sm:gap-4"
                >
                  <IconTile icon={FaAward} color={CERT_COLORS[i % CERT_COLORS.length]} size="md" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-ink">{cert.title}</p>
                    <p className="mt-0.5 text-xs text-ink-faint">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/40 px-2.5 py-1 text-xs font-semibold text-gold">
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
