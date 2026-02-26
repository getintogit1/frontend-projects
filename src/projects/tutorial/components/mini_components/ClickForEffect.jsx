import { useMemo, useRef } from "react";

const randBetween = (min, max) => Math.random() * (max - min) + min;

export default function ClickForEffect() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  // Anzahl Kugeln
  const COUNT = 56;

  const balls = useMemo(() => {
    const centerX = 50;
    const centerY = 50;

    // Ring-Form (wie Orbit)
    const ringRadius = 38; // % (größer = weiter außen)
    const radiusJitter = 7; // % (kleine Abweichung)
    const angleJitter = 0.38; // rad (kleine Winkelabweichung)

    return Array.from({ length: COUNT }).map((_, i) => {
      // Gleichmäßig verteilter Winkel -> kein Clustering
      const baseAngle = (i / COUNT) * Math.PI * 2;
      const angle = baseAngle + (Math.random() - 0.5) * angleJitter;
      const radius = ringRadius + (Math.random() - 0.5) * radiusJitter;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Kugel-Eigenschaften
      const size = randBetween(4, 14); // px
      const glow = randBetween(8, 22); // px blur
      const opacity = randBetween(0.55, 0.95);

      // Parallax-Stärke (gemischt +/-)
      const dataValue = randBetween(-8, 8);

      // Farb-Gradient (keine Tailwind-Farbwerte hardcoden nötig)
      const hue = Math.floor(randBetween(0, 360));
      const colorA = `hsla(${hue}, 90%, 65%, ${opacity})`;
      const colorB = `hsla(${(hue + 40) % 360}, 90%, 55%, ${opacity})`;

      // Basis-Transform fürs Zentrieren
      const baseTransform = `translate(-50%, -50%)`;

      return { x, y, size, glow, dataValue, colorA, colorB, baseTransform };
    });
  }, []);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.querySelectorAll("[data-value]").forEach((node) => {
        const v = Number(node.getAttribute("data-value")) || 0;
        const base = node.getAttribute("data-base") || "";

        const px = relX * v * 12; // Stärke
        const py = relY * v * 12;

        node.style.transform = `${base} translate3d(${px}px, ${py}px, 0)`;
      });
    });
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;

    el.querySelectorAll("[data-value]").forEach((node) => {
      const base = node.getAttribute("data-base") || "";
      node.style.transform = base;
    });
  };

  return (
    <div className="card">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-96 overflow-hidden rounded-2xl bg-zinc-950"
      >
        <h3 className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-white/80 pointer-events-none">
          Hover with mouse
        </h3>

        {/* Kugeln */}
        {balls.map((b, i) => (
          <span
            key={i}
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
    </div>
  );
}
