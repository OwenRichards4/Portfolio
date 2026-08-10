import { useRef } from "react";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./TiltCard.css";

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), SPRING);
  const rotateY = useSpring(useTransform(x, [0, 1], [-7, 7]), SPRING);
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, var(--accent-dim), transparent 60%)`
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <Motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Motion.div className="tilt-card__glow" style={{ background: glowBackground }} aria-hidden="true" />
      {children}
    </Motion.div>
  );
}
