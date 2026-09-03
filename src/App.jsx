import { useState } from "react";
import useTheme from "./hooks/useTheme.js";
import Loader from "./components/Loader.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Services from "./sections/Services.jsx";
import Achievements from "./sections/Achievements.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader onDone={() => setLoading(false)} />
      {!loading && (
        <>
          <ScrollProgressBar />
          <CursorGlow />
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Achievements />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}
