import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-10">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          className="font-display text-base font-bold tracking-tight"
        >
          Sahil<span className="">.dev</span>
        </motion.a>

        <div className="flex items-center gap-5">
          {profile.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="text-ink-faint transition-colors hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-ink-faint">
          <span>&copy; {year} {profile.name}. All rights reserved.</span>
          <a href="#top" aria-label="Back to top" className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-accent/50 hover:text-accent">
            <FiArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
