"use client";
import { useState, useEffect, useRef } from "react";

const STEPS = [
  {
    num: "01",
    title: "Create your vault",
    desc: "Sign up and define your legacy goals in under a minute.",
    detail: "No legal jargon. Just you, your family, and what matters most.",
  },
  {
    num: "02",
    title: "Document your assets",
    desc: "Log bank accounts, properties, and important records at your own pace.",
    detail: "Encrypted end-to-end. Add a little now, add more anytime.",
  },
  {
    num: "03",
    title: "Assign your executor",
    desc: "Choose a trusted person. They get guided access only when needed.",
    detail: "Granular permissions. Your executor sees only what you allow.",
  },
];

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const inc = target / (1200 / 16);
    const t = setInterval(() => {
      v += inc;
      if (v >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [active, target]);
  return <>{n}</>;
}

export default function QuickSetup() {
  const [active, setActive] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef as React.RefObject<Element>);

  useEffect(() => {
    if (!inView) return;
    setActive(0);
    setLineProgress(0);

    const animLine = (from: number, to: number) => {
      const t0 = Date.now();
      const dur = 520;
      const tick = () => {
        const p = Math.min(1, (Date.now() - t0) / dur);
        const e = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
        setLineProgress(from + (to - from) * e);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const run = () => {
      setActive(0); setLineProgress(0);
      const a = setTimeout(() => { setActive(1); animLine(0, 50); }, 2400);
      const b = setTimeout(() => { setActive(2); animLine(50, 100); }, 5000);
      const c = setTimeout(() => { setActive(0); animLine(100, 0); }, 7600);
      return [a, b, c];
    };

    const timers = run();
    const loop = setInterval(() => run(), 8300);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, [inView]);

  return (
    <>
      <style>{`
        .qs-section {
          background: #1c0d0b;
          padding: 88px 48px 100px;
          overflow: hidden;
          position: relative;
        }
        .qs-ambient {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse at 50% 0%, rgba(215,181,109,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .qs-inner { max-width: 1160px; margin: 0 auto; position: relative; }

        /* ── Header ── */
        .qs-header {
          display: flex; align-items: flex-end; justify-content: flex-start;
          gap: 72px; margin-bottom: 64px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(215,181,109,0.10);
        }
        .qs-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(215,181,109,0.5);
          margin-bottom: 14px; display: block;
        }
        .qs-h {
          font-size: clamp(30px, 3.5vw, 44px); font-weight: 800;
          letter-spacing: -0.03em; line-height: 1.1; color: #F5ECD8;
          margin: 0;
        }
        .qs-h em { color: #D7B56D; font-style: normal; }

        /* Stats */
        .qs-stats { display: flex; align-items: flex-end; gap: 0; flex-shrink: 0; }
        .qs-stat { text-align: center; padding: 0 28px; }
        .qs-stat:first-child { padding-left: 0; }
        .qs-stat:last-child { padding-right: 0; }
        .qs-stat-val {
          font-size: 44px; font-weight: 900; letter-spacing: -0.04em;
          color: #D7B56D; line-height: 1; display: block; margin-bottom: 8px;
          font-variant-numeric: tabular-nums;
        }
        .qs-stat-inf {
          /* ∞ sits lower — nudge up to match digit baseline */
          font-size: 38px; display: block; margin-bottom: 12px;
          font-weight: 900; color: #D7B56D; line-height: 1;
        }
        .qs-stat-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(245,236,216,0.3);
          white-space: nowrap; display: block;
        }
        .qs-divider { width: 1px; height: 40px; background: rgba(215,181,109,0.12); align-self: center; flex-shrink: 0; }

        /* ── Steps ── */
        .qs-steps-wrap {
          position: relative;
        }

        /*
          Track: runs from center of circle-1 to center of circle-3.
          Circles are centred in each 1/3 column.
          Col 1 centre: 16.667% from left
          Col 3 centre: 83.333% from left → right: 16.667%
        */
        .qs-track {
          position: absolute;
          top: 28px;
          left: 16.667%;
          right: 16.667%;
          height: 1px;
          background: rgba(215,181,109,0.12);
          z-index: 0;
          overflow: hidden;
        }
        .qs-track-fill {
          position: absolute; top: 0; left: 0; bottom: 0;
          background: linear-gradient(90deg, #c9a84c, #D7B56D);
          box-shadow: 0 0 6px rgba(215,181,109,0.4);
          transition: width 0.04s linear;
        }

        /* 3-col grid — z-index above track */
        .qs-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          position: relative;
          z-index: 1;
        }

        .qs-card { padding-right: 52px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .qs-card:last-child { padding-right: 0; }

        /* Circle — SOLID background so track fill stays hidden beneath */
        .qs-circle {
          width: 56px; height: 56px; border-radius: 50%;
          background: #1c0d0b;              /* solid — matches section bg */
          border: 1.5px solid rgba(215,181,109,0.18);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          position: relative;
          transition: border-color 0.45s ease, box-shadow 0.45s ease;
          /* Ensure circle paints above the track fill */
          z-index: 2;
        }
        .qs-circle.active {
          border-color: #D7B56D;
          box-shadow: 0 0 0 5px rgba(215,181,109,0.07), 0 0 18px rgba(215,181,109,0.2);
        }
        .qs-circle.done {
          border-color: rgba(215,181,109,0.4);
        }
        .qs-circle-num {
          font-size: 17px; font-weight: 800; line-height: 1;
          color: rgba(215,181,109,0.22);
          transition: color 0.4s ease;
        }
        .qs-circle.active .qs-circle-num,
        .qs-circle.done  .qs-circle-num { color: #D7B56D; }

        /* Pulse ring */
        .qs-circle.active::before {
          content: '';
          position: absolute; inset: -7px; border-radius: 50%;
          border: 1px solid rgba(215,181,109,0.18);
          animation: qs-pulse 2s ease-out infinite;
        }
        @keyframes qs-pulse {
          0%   { transform: scale(1);    opacity: 1; }
          100% { transform: scale(1.6);  opacity: 0; }
        }

        /* Step text — sits directly under the circle in the same card */
        .qs-step-num-label {
          font-size: 11px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(215,181,109,0.28);
          margin-bottom: 6px; display: block;
          transition: color 0.4s ease;
        }
        .qs-card.active .qs-step-num-label { color: rgba(215,181,109,0.55); }

        .qs-step-title {
          font-size: 20px; font-weight: 700; letter-spacing: -0.01em;
          color: rgba(245,236,216,0.35);
          margin: 0 0 10px; line-height: 1.2;
          transition: color 0.4s ease;
        }
        .qs-card.active .qs-step-title { color: #F5ECD8; }
        .qs-card.done  .qs-step-title  { color: rgba(245,236,216,0.6); }

        .qs-step-desc {
          font-size: 18px; line-height: 1.7;
          color: rgba(245,236,216,0.25);
          margin: 0 0 0;
          transition: color 0.4s ease;
        }
        .qs-card.active .qs-step-desc { color: rgba(245,236,216,0.55); }
        .qs-card.done  .qs-step-desc  { color: rgba(245,236,216,0.38); }

        .qs-step-detail {
          font-size: 14px; line-height: 1.6;
          color: rgba(215,181,109,0.4);
          margin: 0; padding-top: 12px;
          border-top: 1px solid rgba(215,181,109,0.08);
          /* opacity-only — no height change, no jerk */
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .qs-card.active .qs-step-detail { opacity: 1; }


        /* Fade-in on scroll */
        .qs-fi { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .qs-fi.on { opacity: 1; transform: none; }
        .qs-fi-d1 { transition-delay: 0.05s; }
        .qs-fi-d2 { transition-delay: 0.15s; }
        .qs-fi-d3 { transition-delay: 0.25s; }
        .qs-fi-d4 { transition-delay: 0.35s; }
        .qs-fi-d5 { transition-delay: 0.42s; }
      `}</style>

      <section className="qs-section" ref={sectionRef}>
        <div className="qs-ambient" />
        <div className="qs-inner">

          {/* Header */}
          <div className={`qs-header qs-fi${inView ? " on" : ""}`}>
            <div>
              <span className="qs-eyebrow">Quick Setup</span>
              <h2 className="qs-h">Ready in Minutes.<br /><em>Active for a Lifetime.</em></h2>
            </div>
            <div className="qs-stats">
              <div className="qs-stat">
                <span className="qs-stat-val"><CountUp target={60} active={inView} />s</span>
                <span className="qs-stat-label">To get started</span>
              </div>
              <div className="qs-divider" />
              <div className="qs-stat">
                <span className="qs-stat-val"><CountUp target={100} active={inView} />%</span>
                <span className="qs-stat-label">Secure protection</span>
              </div>
              <div className="qs-divider" />
              <div className="qs-stat">
                <span className="qs-stat-inf">∞</span>
                <span className="qs-stat-label">Peace of mind</span>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="qs-steps-wrap">
            {/* Track behind circles */}
            <div className="qs-track">
              <div className="qs-track-fill" style={{ width: `${lineProgress}%` }} />
            </div>

            <div className="qs-cards">
              {STEPS.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                const cls = isActive ? " active" : isDone ? " done" : "";
                return (
                  <div key={i} className={`qs-card qs-fi qs-fi-d${i + 2}${inView ? " on" : ""}${cls}`}>
                    {/* Circle directly above its own text */}
                    <div className={`qs-circle${cls}`}>
                      <span className="qs-circle-num">{step.num}</span>
                    </div>
                    <span className="qs-step-num-label">Step {step.num}</span>
                    <h3 className="qs-step-title">{step.title}</h3>
                    <p className="qs-step-desc">{step.desc}</p>
                    <p className="qs-step-detail">{step.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
