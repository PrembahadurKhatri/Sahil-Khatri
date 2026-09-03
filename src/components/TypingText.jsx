import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function TypingText({ words, className = "", typingSpeed = 55, pause = 1800 }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduceMotion ? words[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? typingSpeed / 2 : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, pause, reduceMotion]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-1 animate-pulse" aria-hidden="true" />
    </span>
  );
}
