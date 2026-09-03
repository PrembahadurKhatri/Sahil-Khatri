// A single, quiet, static radial fade behind the hero — not an animated
// multi-color blob field. Cheap, unobtrusive, and reads as intentional
// lighting rather than a decorative effect competing with the content.
export default function AuroraBackground({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgb(var(--color-accent) / 0.08), transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
