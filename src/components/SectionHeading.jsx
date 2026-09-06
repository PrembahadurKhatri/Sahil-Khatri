import Reveal from "./Reveal.jsx";
import PulseDot from "./PulseDot.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} max-w-2xl mb-10 md:mb-14`}>
      <Reveal>
        <span className="eyebrow">
          <PulseDot />
          {eyebrow}
        </span>
      </Reveal>

      <h2 className="font-display text-4xl md:text-5xl font-medium text-ink leading-[1.1]">{title}</h2>

      {description && (
        <Reveal delay={0.1}>
          <p className="text-ink-muted text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
