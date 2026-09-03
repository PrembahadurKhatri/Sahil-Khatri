import { useEffect, useState } from "react";

/**
 * Raw viewport mouse coordinates, used by the cursor glow and the hero's
 * mouse-reactive background lighting. Returns null until the first move so
 * consumers can skip rendering anything mouse-driven on touch devices that
 * never fire mousemove.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
}
