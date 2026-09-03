import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Cycles through `words`, typing and deleting each one — the hero's
// "Creative Developer / Full Stack Engineer / AI Enthusiast" line. Under
// prefers-reduced-motion it just shows the first word, static.
export default function TypingText({ words, typingSpeed = 70, deletingSpeed = 40, pause = 1600, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(words[0] || "");
      return;
    }

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pause, prefersReducedMotion]);

  return (
    <span className={className}>
      {text}
      {!prefersReducedMotion && <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle" style={{ height: "1em" }} />}
    </span>
  );
}
