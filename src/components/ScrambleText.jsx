import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_/[]{}=+*^?#";

export default function ScrambleText({ text, className, duration = 600, speed = 28 }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const chars = text.split("");
    const totalFrames = Math.ceil(duration / speed);
    let frame = 0;

    const id = setInterval(() => {
      frame += 1;
      const revealCount = Math.floor((frame / totalFrames) * chars.length);

      setDisplay(
        chars
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealCount) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        setDisplay(text);
        clearInterval(id);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, duration, speed]);

  return (
    <span className={className} aria-label={text}>
      {display}
    </span>
  );
}
