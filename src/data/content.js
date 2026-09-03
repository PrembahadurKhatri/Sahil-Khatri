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
import {
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFigma,
} from "react-icons/si";

// -----------------------------------------------------------------------
// All content is placeholder — realistic in shape and tone so the site
// reads as a finished, professional portfolio, but every name/number/quote
// here is meant to be replaced with the real thing. This file is the only
// place that needs editing to make the site "yours" — every
// component/section reads from here rather than hardcoding copy.
// -----------------------------------------------------------------------

export const profile = {
  name: "Sahil Khatri",
  initials: "SK",
  roles: ["Full-Stack Developer", "Backend-Focused Engineer", "Problem Solver"],
  tagline: "I build fast, reliable web applications from database to interface.",
  bio: "I'm a full-stack developer who enjoys the whole path from a data model to a finished interface. Most of my work lives in React on the front end and Node.js/Express on the back — with a habit of caring about the parts nobody sees, like clean APIs, sane auth, and code the next person can actually read.",
  location: "Kathmandu, Nepal",
  email: "hello@sahilkhatri.dev",
  phone: "+977 98XXXXXXXX",
  resumeUrl: "/resume.pdf",
  availability: "Open to freelance & full-time opportunities",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=85.2794%2C27.6644%2C85.3794%2C27.7444&layer=mapnik&marker=27.7044%2C85.3294",
  mapLinkUrl: "https://www.openstreetmap.org/?mlat=27.7044&mlon=85.3294#map=12/27.7044/85.3294",
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
  { label: "Technologies Used", value: 22, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    category: "Tools & Other",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
      { name: "Figma", icon: SiFigma },
      { name: "TensorFlow", icon: SiTensorflow },
    ],
  },
];

export const education = [
  {
    period: "2017 — 2021",
    degree: "B.Sc. (Hons) Computer Science",
    institution: "Tribhuvan University",
    description:
      "Coursework centered on data structures, algorithms, database systems, and distributed systems, alongside a final-year project on applied machine learning.",
  },
  {
    period: "2015 — 2017",
    degree: "Higher Secondary Education, Science",
    institution: "Kathmandu Model College",
    description:
      "Physics, chemistry, and mathematics — the last of which turned out to be the most useful thing for a career that's mostly logic puzzles.",
  },
];

export const certifications = [
  { title: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2025" },
  { title: "Professional Full-Stack Engineer", issuer: "Meta", year: "2024" },
  { title: "TensorFlow Developer Certificate", issuer: "Google", year: "2024" },
  { title: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2023" },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Senior Full-Stack Developer",
    company: "Independent / Freelance",
    description:
      "Design and build full-stack products end-to-end for founders and small teams — from data model to deployed UI. Recent focus: admin CMS platforms, authentication systems, and performance-first marketing sites.",
    tags: ["React", "Node.js", "MongoDB", "System Design"],
  },
  {
    period: "2023 — 2025",
    role: "Full-Stack Developer",
    company: "Product Studio",
    description:
      "Owned the frontend architecture for three shipped SaaS products, and built the shared component library still used across the studio's client work today.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Design Systems"],
  },
  {
    period: "2021 — 2023",
    role: "Frontend Developer",
    company: "Early-Stage Startup",
    description:
      "First engineering hire. Built the product from a Figma file to a live app used by real customers, and set up the CI/CD pipeline the team still relies on.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
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
    featured: true,
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
  },
];
