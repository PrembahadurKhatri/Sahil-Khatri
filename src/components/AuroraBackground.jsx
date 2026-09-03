// Three large, slow-drifting blurred gradient blobs — the "alive"
// background used across sections instead of a real WebGL scene. Cheap
// (pure CSS blur + transform animation), themeable via the color tokens,
// and never interferes with content since it's absolutely positioned,
// clipped, and non-interactive.
export default function AuroraBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute left-1/4 top-0 h-[36rem] w-[36rem] -translate-x-1/2 animate-blob rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/3 h-[30rem] w-[30rem] translate-x-1/2 animate-blob rounded-full bg-violet/20 blur-[120px] [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 animate-blob rounded-full bg-cyan/15 blur-[120px] [animation-delay:-8s]" />
    </div>
  );
}
