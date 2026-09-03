import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} max-w-2xl mb-14 md:mb-20`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink leading-[1.1]">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="text-ink-muted text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
