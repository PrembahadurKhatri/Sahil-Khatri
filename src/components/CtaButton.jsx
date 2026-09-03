import { FiArrowRight } from "react-icons/fi";

export default function CtaButton({ as = "button", icon: Icon = FiArrowRight, children, className = "", ...props }) {
  const Component = as;

  return (
    <Component
      className={`shine group inline-flex items-center gap-4 rounded-full bg-accent py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${className}`}
      {...props}
    >
      {children}
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
        <Icon size={16} />
      </span>
    </Component>
  );
}
