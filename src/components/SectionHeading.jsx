import PulseDot from "./PulseDot.jsx";

const titleClass = "font-display text-[2rem] sm:text-4xl md:text-5xl font-medium text-ink leading-[1.12]";

/** Section title with the last word in gold italic. */
function Title({ text }) {
  if (typeof text !== "string") return <h2 className={titleClass}>{text}</h2>;
  const words = text.split(" ");
  const last = words.pop();
  return (
    <h2 className={titleClass}>
      {words.join(" ")} <span className="text-gold italic pr-[0.08em]">{last}</span>
    </h2>
  );
}

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} max-w-2xl mb-8 md:mb-14`}>
      <span className="eyebrow">
        <PulseDot />
        {eyebrow}
      </span>

      <Title text={title} />

      {description && <p className="text-ink-muted text-[0.95rem] md:text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
