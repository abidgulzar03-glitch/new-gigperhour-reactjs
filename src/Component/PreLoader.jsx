import { useEffect, useRef, useState } from "react";
import "./Preloader.css";

/**
 * Preloader — a full-page assembly-style loading sequence.
 *
 * Six nodes fly in from off-stage and lock into a rotating hexagon, ringed
 * by a faint orbit and a soft radial glow. A tabular-numeral counter tracks
 * progress and a single status line reports state. On completion the stage
 * contracts and fades, unmounting to reveal the app underneath. While
 * mounted it covers the full viewport and locks page scroll.
 *
 * Props:
 *  - duration: ms for the full 0→100 sweep (default 3200)
 *  - autoStart: begin immediately on mount (default true)
 *  - loop: restart automatically after completing (default false)
 *  - label: status text shown beneath the counter (default "Loading")
 *  - onComplete: called once progress reaches 100 and the exit finishes
 */
export default function Preloader({
  duration = 3200,
  autoStart = true,
  loop = false,
  label = "Loading",
  onComplete,
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("run"); // 'run' | 'exit' | 'done'
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Lock page scroll while the preloader covers the viewport.
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (!autoStart) return;
    const step = (t) => {
      if (startRef.current === null) startRef.current = t;
      const elapsed = t - startRef.current;
      const raw = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - raw, 3); // ease-out cubic
      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPhase("exit");
        window.setTimeout(() => {
          setPhase("done");
          onComplete && onComplete();
          if (loop) {
            startRef.current = null;
            setProgress(0);
            setPhase("run");
            rafRef.current = requestAnimationFrame(step);
          }
        }, 700);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [autoStart, duration, loop, onComplete]);

  const t = progress / 100;
  const rotation = t * 220; // degrees of hexagon spin across the sweep
  const orbitRotation = t * -70; // outer ring drifts the opposite way
  const radius = 52;
  const center = 70;

  const nodes = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const targetX = center + radius * Math.cos(angle);
    const targetY = center + radius * Math.sin(angle);

    // Each node starts flung out along its own angle, well past the stage.
    const startX = center + radius * 4.6 * Math.cos(angle + 0.6);
    const startY = center + radius * 4.6 * Math.sin(angle + 0.6);

    const delay = i * 0.06;
    const local = Math.min(Math.max((t - delay) / (1 - delay), 0), 1);
    const eased = 1 - Math.pow(1 - local, 4);

    const x = startX + (targetX - startX) * eased;
    const y = startY + (targetY - startY) * eased;

    return { x, y, opacity: 0.2 + 0.8 * eased, key: i };
  });

  const points = nodes.map((n) => `${n.x},${n.y}`).join(" ");
  const statusText =
    phase === "exit" || progress >= 100 ? "Ready" : `${label}…`;

  if (phase === "done" && !loop) return null;

  return (
    <div
      className={`pl-stage ${phase === "exit" ? "pl-exit" : ""}`}
      style={{
        "--pl-rotation": `${rotation}deg`,
        "--pl-orbit-rotation": `${orbitRotation}deg`,
        "--pl-progress": `${progress}%`,
      }}
      role="status"
      aria-live="polite"
      aria-label={statusText}
    >
      <div className="pl-glow" />
      <div className="pl-grid" />

      <div className="pl-center">
        <div className="pl-hex-wrap">
          <svg className="pl-orbit-svg" viewBox="0 0 140 140">
            <circle
              className="pl-orbit-ring"
              cx={center}
              cy={center}
              r={radius + 18}
              strokeDasharray="1 10"
            />
          </svg>

          <svg className="pl-hex-svg" viewBox="0 0 140 140">
            <circle className="pl-ring" cx={center} cy={center} r={radius} />
            <polygon className="pl-poly" points={points} />
            {nodes.map((n) => (
              <circle
                key={n.key}
                className="pl-node"
                cx={n.x}
                cy={n.y}
                r="3.8"
                opacity={n.opacity}
              />
            ))}
          </svg>
        </div>

        <div className="pl-count">{Math.min(progress, 100)}%</div>
        <div className="pl-track">
          <div className="pl-track-fill" />
        </div>
        <div className="pl-status">{statusText}</div>
      </div>
    </div>
  );
}