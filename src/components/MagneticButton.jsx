/**
 * Plain wrapper around any element (button/link) — kept as its own
 * component (rather than inlining `as` everywhere) so every call site
 * stays consistent, but deliberately does nothing fancy: no cursor-
 * tracking, no spring physics. Hover feedback comes from each usage's own
 * Tailwind hover: classes instead.
 */
export default function MagneticButton({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
