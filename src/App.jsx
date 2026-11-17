import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme.js";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative isolate min-h-screen bg-base text-ink">
      <CursorGlow />
      <ScrollProgressBar />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
