import { useMemo, useRef } from "react";

const randBetween = (min, max) => Math.random() * (max - min) + min;

export default function ClickForEffect({
  className,
  containerRef,
  handleMouseMove,
  handleMouseLeave,
  ballsRef,
}) {
  // Anzahl Kugeln
  const COUNT = 36;

  const balls = useMemo(() => {
    const centerX = 40;
    const centerY = 40;

    // Ring-Form (wie Orbit)
    const ringRadius = 45; // % (größer = weiter außen)
    const radiusJitter = 9; // % (kleine Abweichung)
    const angleJitter = 0.38; // rad (kleine Winkelabweichung)

    return Array.from({ length: COUNT }).map((_, i) => {
      // Gleichmäßig verteilter Winkel -> kein Clustering
      const baseAngle = (i / COUNT) * Math.PI * 2;
      const angle = baseAngle + (Math.random() - 0.5) * angleJitter;
      const radius = ringRadius + (Math.random() - 0.5) * radiusJitter;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Kugel-Eigenschaften
      const size = randBetween(6, 18); // px
      const glow = randBetween(10, 24); // px blur
      const opacity = randBetween(0.45, 0.85);

      // Parallax-Stärke (gemischt +/-)
      const dataValue = randBetween(-8, 8);

      // Farb-Gradient
      const hue = Math.floor(randBetween(0, 360));
      const colorA = `hsla(${hue}, 90%, 65%, ${opacity})`;
      const colorB = `hsla(${(hue + 40) % 360}, 90%, 55%, ${opacity})`;

      // Basis-Transform fürs Zentrieren
      const baseTransform = `translate(-50%, -50%)`;

      return { x, y, size, glow, dataValue, colorA, colorB, baseTransform };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 -z-10 ${className}`}
      aria-hidden="true"
    >
      {" "}
      {/* Kugeln */}
      {balls.map((b, i) => (
        <span
          key={i}
          ref={(el) => (ballsRef.current[i] = el)}
          data-value={b.dataValue}
          data-base={b.baseTransform}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            transform: b.baseTransform,

            // schöner „Ball“-Look:
            background: `radial-gradient(circle at 30% 30%, ${b.colorA}, ${b.colorB})`,
            boxShadow: `0 0 ${b.glow}px ${b.colorA}`,
            opacity: 1,
          }}
        />
      ))}
    </div>
  );
}
