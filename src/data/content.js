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
  FaFacebook,
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
  name: "Prem Bahadur Khatri",
  logo: "/logoss.png",
  roles: ["Full-Stack Developer", "Backend-Focused Engineer", "Problem Solver"],
  tagline: "I build fast, reliable web applications from database to interface.",
  bio: "I'm a full-stack developer who enjoys the whole path from a data model to a finished interface. Most of my work lives in React on the front end and Node.js/Express on the back — with a habit of caring about the parts nobody sees, like clean APIs, sane auth, and code the next person can actually read.",
  location: "Pokhara,Nepal",
  email: "sahilkhatrii750@gmail.com",
  phone: "+977 9827169125",
  // Digits only, country code first, no "+" or spaces — used to build the wa.me link.
  whatsapp: "9779827169125",
  photo: "/mee.jpg",
  hours: "24/7 — I respond to every message personally",

  availability: "Open to freelance & full-time opportunities",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3607581706094!2d84.02150931258622!3d28.205470759544855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399597007eef8cbf%3A0xc979e46a6e0c2aa1!2sSahil's%20House!5e0!3m2!1sen!2snp!4v1788688199824!5m2!1sen!2snp",
  mapLinkUrl: "https://www.google.com/maps?q=28.205470759544855,84.02150931258622",
  socials: [
    { label: "GitHub", href: "https://github.com/PrembahadurKhatri", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/saahill-khatri-7499093a8?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: FaLinkedin },
    { label: "Twitter", href: "https://www.facebook.com/saahill.khatri14/", icon: FaFacebook },
    { label: "Instagram", href: "https://www.instagram.com/saahill.khatri_/", icon: FaInstagram },
    { label: "Email", href: "mailto:sahilkhatrii750@gmail.com", icon: FaEnvelope },
  ],
};

export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Delivered", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 25, suffix: "+" },
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
    period: "2021-2022",
    degree: "Higher Secondary Education, Science",
    institution: "Prativa Secondary School",
    description:
      "Physics, chemistry, and mathematics — the last of which turned out to be the most useful thing for a career that's mostly logic puzzles.",
  },
    {
    period: "2023 — ongoing",
    degree: "Bachelor in Computer Science and Information Technology(BSc.CSIT)",
    institution: "Tribhuvan University",
    description:
      "Coursework centered on data structures, algorithms, database systems, and distributed systems, alongside a final-year project on applied machine learning.",
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
    id: "khuma-aryal-foundation",
    title: "Khuma Aryal Foundation",
     tagline: "Official website for the Khuma Aryal Foundation",
  description:
    "A modern, responsive website developed for the Khuma Aryal Foundation. The platform showcases the foundation's mission, ongoing initiatives, events, donation information, and organizational updates with an intuitive content management system and optimized user experience.",
    image: "/khumalogo.jpg",
    tags: ["React", "Node.js", "MongoDB", "Tailwind","Express","TypeScript","JavaScript"],
    github: "https://github.com/PrembahadurKhatri/khuma-aryal-foundation-project",
    live: "https://khuma-aryal-foundation-project.vercel.app/",
    featured: true,
  },
  {
    id: "khilung-kalika-construction",
    title: "Khilung Kalika Construction",
    tagline: "Official website for Khilung Kalika Construction",
    description:
      "A modern, responsive website developed for Khilung Kalika Construction. The platform showcases the company's services, projects, and contact information with an intuitive content management system and optimized user experience.",
    image: "/khilunglogo.jpg",
    tags: ["Node.js", "TypeScript", "MongoDB", "Express","tailwind","React","JavaScript"],
    github: "https://github.com/PrembahadurKhatri/Khuling-project",
    live: "https://khuling-project-k2te.vercel.app/",
  },
  {
    id: "Made-in-Nepal",
    title: "Made in Nepal",
    tagline: "E-commerce platform for Nepali artisans",
    description:
      "A responsive web platform designed to showcase and promote authentic Nepali products. The website features product browsing, category-based filtering, secure user authentication, shopping cart functionality, and a clean, user-friendly interface that highlights local craftsmanship while providing a seamless online shopping experience.",
    image: "/mdeinnepal.png",
    tags: ["Next.js", "MongoDB", "React","TypeScript","JavaScript", "Tailwind"],
    github: "https://github.com/PrembahadurKhatri/madeinnepal",
    live: "https://madeinnepal-khkk.vercel.app/",
  },
  {
    id: "sports-gaming-network",
  title: "Sports Gaming Network    (Ongoing)",
  tagline: "A dynamic platform for sports enthusiasts and gamers",
  description:
    "A modern web application designed for sports fans and gaming communities to stay connected. The platform features news updates, tournament information, team and player profiles, event schedules, and an engaging user interface optimized for performance across all devices.",
    image: "/logo.png",
    tags: ["JavaScript", " MongoDB", "React", "TypeScript", "Tailwind","Next.js"],
    github: "https://github.com/PrembahadurKhatri/sports-gaming-network",
    live: "https://sports-gaming-network-flhu.vercel.app/",
  },
];
