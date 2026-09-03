import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTensorflow, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// -----------------------------------------------------------------------
// All content is placeholder — realistic in shape and tone so the site
// reads as a finished, professional portfolio, but every name/number/quote
// here is meant to be replaced with the real thing. This file is the only
// place that needs editing to make the site "yours" — every
// component/section reads from here rather than hardcoding copy.
// -----------------------------------------------------------------------

export const profile = {
  name: "Sahil Khatri",
  roles: ["Creative Developer", "Full Stack Engineer", "AI Enthusiast"],
  tagline: "I design and build fast, polished, production-grade web experiences.",
  bio: "I'm a full stack developer who cares as much about how a product feels as how it's built. Over the last few years I've shipped everything from content-managed marketing sites to real-time dashboards — always chasing the same thing: interfaces that feel instant, intentional, and just a little bit alive.",
  location: "Kathmandu, Nepal",
  email: "hello@sahilkhatri.dev",
  resumeUrl: "/resume.pdf",
  availability: "Open to freelance & full-time opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: FaLinkedin },
    { label: "Twitter", href: "https://twitter.com/", icon: FaTwitter },
    { label: "Instagram", href: "https://instagram.com/", icon: FaInstagram },
    { label: "Email", href: "mailto:hello@sahilkhatri.dev", icon: FaEnvelope },
  ],
};

export const stats = [
  { label: "Years of Experience", value: 4, suffix: "+" },
  { label: "Projects Delivered", value: 38, suffix: "+" },
  { label: "Technologies", value: 22, suffix: "+" },
  { label: "Cups of Coffee", value: 1240, suffix: "+" },
];

export const funFacts = [
  "Ship something new every week, even if it's tiny.",
  "Believe the best UI is the one you don't notice.",
  "Debug best at 1am with lo-fi playing.",
  "Collect keyboards, not that I need more.",
];

// Compact combined timeline for the About section.
export const aboutTimeline = [
  { year: "2025 — Present", title: "Senior Full Stack Developer", org: "Freelance / Contract", type: "work" },
  { year: "2023 — 2025", title: "Full Stack Developer", org: "Product Studio", type: "work" },
  { year: "2021 — 2023", title: "Frontend Developer", org: "Startup", type: "work" },
  { year: "2017 — 2021", title: "B.Sc. Computer Science", org: "Tribhuvan University", type: "education" },
];

// Richer, scroll-driven timeline for the dedicated Experience section.
export const experience = [
  {
    year: "2025 — Present",
    role: "Senior Full Stack Developer",
    company: "Independent / Freelance",
    description:
      "Design and build full-stack products end-to-end for founders and small teams — from data model to deployed UI. Recent focus: admin CMS platforms, auth systems, and performance-first marketing sites.",
    tags: ["React", "Node.js", "MongoDB", "System Design"],
  },
  {
    year: "2023 — 2025",
    role: "Full Stack Developer",
    company: "Product Studio",
    description:
      "Owned the frontend architecture for three shipped SaaS products, and built the shared component library still used across the studio's client work today.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Design Systems"],
  },
  {
    year: "2021 — 2023",
    role: "Frontend Developer",
    company: "Early-Stage Startup",
    description:
      "First engineering hire. Built the product from a Figma file to a live app used by real customers, and set up the CI/CD pipeline the team still relies on.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    year: "2017 — 2021",
    role: "B.Sc. Computer Science",
    company: "Tribhuvan University",
    description:
      "Focused coursework on data structures, distributed systems, and machine learning — and spent most nights outside class building side projects instead of sleeping.",
    tags: ["Algorithms", "Machine Learning", "Systems"],
  },
];

export const skills = [
  { name: "React", icon: FaReact, level: 95, category: "Frontend", projects: 24, experience: "4+ yrs", description: "Component architecture, performance profiling, and state management at scale." },
  { name: "Next.js", icon: SiNextdotjs, level: 88, category: "Frontend", projects: 12, experience: "3 yrs", description: "SSR/SSG apps, App Router, and edge-optimized rendering." },
  { name: "TypeScript", icon: SiTypescript, level: 90, category: "Language", projects: 20, experience: "3+ yrs", description: "Type-safe APIs, generics, and strict-mode codebases." },
  { name: "Node.js", icon: FaNodeJs, level: 90, category: "Backend", projects: 22, experience: "4+ yrs", description: "REST/GraphQL APIs, auth systems, and background job processing." },
  { name: "Python", icon: FaPython, level: 80, category: "Language", projects: 10, experience: "3 yrs", description: "Data pipelines, automation scripts, and lightweight ML tooling." },
  { name: "TensorFlow", icon: SiTensorflow, level: 60, category: "AI/ML", projects: 4, experience: "1 yr", description: "Applied ML for classification and recommendation prototypes." },
  { name: "Docker", icon: FaDocker, level: 78, category: "DevOps", projects: 15, experience: "2+ yrs", description: "Multi-stage builds, compose stacks, and reproducible dev environments." },
  { name: "AWS", icon: FaAws, level: 72, category: "DevOps", projects: 9, experience: "2 yrs", description: "EC2, S3, Lambda, and CloudFront for production deployments." },
  { name: "MongoDB", icon: SiMongodb, level: 88, category: "Database", projects: 18, experience: "4 yrs", description: "Schema design, aggregation pipelines, and index optimization." },
  { name: "PostgreSQL", icon: SiPostgresql, level: 82, category: "Database", projects: 11, experience: "3 yrs", description: "Relational modeling, query tuning, and migrations at scale." },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 96, category: "Frontend", projects: 26, experience: "4 yrs", description: "Design-system-driven UI, responsive layouts, and motion-ready markup." },
  { name: "Java", icon: FaJava, level: 65, category: "Language", projects: 6, experience: "2 yrs", description: "OOP fundamentals, Spring basics, and academic systems projects." },
  { name: "Git", icon: FaGitAlt, level: 92, category: "Tools", projects: 38, experience: "5 yrs", description: "Branching strategies, rebasing, and clean collaborative history." },
  { name: "Linux", icon: FaLinux, level: 80, category: "Tools", projects: 20, experience: "3+ yrs", description: "Server administration, shell scripting, and process management." },
];

export const projects = [
  {
    id: "aurora-cms",
    title: "Aurora CMS",
    tagline: "A headless CMS admin panel built for speed",
    description:
      "A full content-management platform with role-based access, media pipelines, and a live preview editor. Built for a client managing 40+ pages of localized content.",
    image: "/projects/aurora.svg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/",
    live: "https://example.com/",
    features: [
      "Role-based admin access (admin/editor)",
      "Drag-and-drop media library with Cloudinary",
      "Real-time live preview before publish",
      "Bilingual content editing (EN/NE)",
    ],
    architecture:
      "React + Vite frontend, Express + MongoDB backend, JWT auth with refresh-token rotation, Cloudinary for asset storage.",
    gallery: ["/projects/aurora.svg", "/projects/aurora.svg", "/projects/aurora.svg"],
  },
  {
    id: "pulse-dashboard",
    title: "Pulse Analytics",
    tagline: "Real-time analytics dashboard",
    description:
      "A real-time metrics dashboard with live-updating charts, custom alert rules, and a dark-mode-first design system.",
    image: "/projects/pulse.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    github: "https://github.com/",
    live: "https://example.com/",
    features: [
      "Live-updating charts over WebSockets",
      "Custom alert rules with email notifications",
      "Exportable PDF/CSV reports",
      "Multi-tenant workspace support",
    ],
    architecture:
      "Next.js App Router, PostgreSQL with Prisma, a Node.js WebSocket server for live data, deployed on Vercel + Railway.",
    gallery: ["/projects/pulse.svg", "/projects/pulse.svg", "/projects/pulse.svg"],
  },
  {
    id: "orbit-commerce",
    title: "Orbit Commerce",
    tagline: "Headless storefront for a DTC brand",
    description:
      "A performance-obsessed storefront — sub-second page loads, optimistic cart updates, and a checkout flow tuned for conversion.",
    image: "/projects/orbit.svg",
    tags: ["React", "Stripe", "Redis", "Tailwind"],
    github: "https://github.com/",
    live: "https://example.com/",
    features: [
      "Optimistic cart & wishlist updates",
      "Stripe checkout with saved payment methods",
      "Redis-backed inventory caching",
      "A/B tested product page layouts",
    ],
    architecture: "React SPA, Express API, Redis cache layer in front of Postgres, Stripe for payments, deployed on AWS.",
    gallery: ["/projects/orbit.svg", "/projects/orbit.svg", "/projects/orbit.svg"],
  },
  {
    id: "signal-ai",
    title: "Signal",
    tagline: "AI-assisted writing tool",
    description:
      "A lightweight AI writing assistant — tone adjustment, summarization, and inline suggestions — built as a weekend project that grew into a real product.",
    image: "/projects/signal.svg",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    github: "https://github.com/",
    live: "https://example.com/",
    features: [
      "Inline tone & clarity suggestions",
      "One-click summarization",
      "Custom fine-tuned classification model",
      "Chrome extension companion app",
    ],
    architecture: "FastAPI backend serving a fine-tuned TensorFlow model, React frontend, deployed on a GPU-backed instance.",
    gallery: ["/projects/signal.svg", "/projects/signal.svg", "/projects/signal.svg"],
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Full-stack web apps built with modern tooling — fast, accessible, and built to scale with your product.",
    points: ["React / Next.js frontends", "Node.js & database architecture", "API design & integration"],
  },
  {
    title: "UI/UX Design",
    description: "Interfaces that feel intentional — from wireframe to a polished, motion-ready design system.",
    points: ["Design systems & component libraries", "Micro-interactions & motion design", "Accessibility-first design"],
  },
  {
    title: "AI Solutions",
    description: "Practical AI features that solve a real problem — not AI for its own sake.",
    points: ["Custom model fine-tuning", "LLM-powered features", "Data pipeline automation"],
  },
  {
    title: "Automation",
    description: "Scripts and pipelines that remove the busywork from your team's day.",
    points: ["CI/CD pipeline setup", "Workflow automation", "Internal tooling"],
  },
  {
    title: "Consulting",
    description: "An outside technical eye on architecture, performance, or a stuck roadmap decision.",
    points: ["Architecture review", "Performance audits", "Technical roadmap planning"],
  },
];

export const achievements = [
  { label: "Hackathons Won", value: 3 },
  { label: "Certifications", value: 7 },
  { label: "Open Source PRs", value: 56 },
  { label: "GitHub Stars", value: 890 },
];

export const certificates = [
  { title: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2025" },
  { title: "Professional Full-Stack Engineer", issuer: "Meta", year: "2024" },
  { title: "TensorFlow Developer Certificate", issuer: "Google", year: "2024" },
  { title: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2023" },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Aurora Labs",
    quote:
      "Sahil doesn't just implement a spec — he questions it, improves it, and ships something better than what we asked for. The CMS he built is still the backbone of our content team's workflow.",
  },
  {
    name: "Daniel Osei",
    role: "Founder",
    company: "Orbit Commerce",
    quote:
      "We came to Sahil with a rough idea and a tight deadline. He turned it into a storefront that converts better than the platform we migrated away from — and he was calm about the deadline the whole time.",
  },
  {
    name: "Aayusha Rai",
    role: "Engineering Lead",
    company: "Pulse Analytics",
    quote:
      "Rare combination of strong engineering instincts and genuine design taste. Every PR he opened made the codebase a little cleaner than he found it.",
  },
];
