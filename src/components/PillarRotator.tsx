"use client";
import { useState, useEffect } from "react";

const PILLARS = [
  {
    variant: "light" as const,
    name: "The Vault",
    tag: "Financial & Legal",
    desc: "Bank accounts, property deeds, investments, insurance policies, and your Will — all documented and encrypted in one place. Your family finds everything without a single panicked phone call.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="14" rx="2"/>
        <path d="M3 10h18M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>
      </svg>
    ),
  },
  {
    variant: "dark" as const,
    name: "The Soul",
    tag: "Memory & Legacy",
    desc: "Voice recordings, handwritten letters, family stories, and the life lessons only you can pass on. The memories that define who you are — preserved and delivered exactly as you intend.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    variant: "dark" as const,
    name: "The Connection",
    tag: "Nominees & Executors",
    desc: "Assign nominees and trusted executors with granular access controls. Choose exactly what each person sees and when — with guided workflows included. No lawyers needed to get started.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    variant: "light" as const,
    name: "The Dignity",
    tag: "Health & Care",
    desc: "Healthcare directives, organ donation preferences, and end-of-life wishes — documented clearly so your choices are honoured exactly as you would want, without placing the burden on your family.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

export default function PillarRotator() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [key, setKey] = useState(0);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setKey(k => k + 1);
      setAnimating(false);
    }, 240);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive(i => (i + 1) % PILLARS.length);
        setKey(k => k + 1);
        setAnimating(false);
      }, 240);
    }, 4800);
    return () => clearInterval(t);
  }, []);

  const p = PILLARS[active];

  return (
    <>
      <style>{`
        .pr-wrap { width: 100%; display: flex; flex-direction: column; }

        /* ── Credit / benefit card ── */
        .pr-card {
          position: relative; overflow: hidden;
          border-radius: 20px;
          padding: 36px 32px 32px;
          height: 280px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: opacity 0.24s ease, transform 0.24s ease;
        }
        .pr-card.fade { opacity: 0; transform: translateY(10px); }

        /* Light card — white / cream */
        .pr-card.light {
          background: #fff;
          box-shadow: 0 2px 0 0 rgba(215,181,109,0.3), 0 12px 40px rgba(48,28,26,0.10);
        }
        /* Decorative circles light */
        .pr-card.light::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(215,181,109,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .pr-card.light::after {
          content: '';
          position: absolute; top: -20px; right: -20px;
          width: 120px; height: 120px; border-radius: 50%;
          border: 1px solid rgba(215,181,109,0.18);
          pointer-events: none;
        }

        /* Dark card — deep brown */
        .pr-card.dark {
          background: linear-gradient(135deg, #3d1f1b 0%, #2a1410 50%, #1e0e0b 100%);
          box-shadow: 0 2px 0 0 rgba(215,181,109,0.25), 0 12px 40px rgba(0,0,0,0.25);
        }
        .pr-card.dark::before {
          content: '';
          position: absolute; top: -60px; right: -60px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(215,181,109,0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .pr-card.dark::after {
          content: '';
          position: absolute; top: -20px; right: -20px;
          width: 120px; height: 120px; border-radius: 50%;
          border: 1px solid rgba(215,181,109,0.15);
          pointer-events: none;
        }

        /* Card top row */
        .pr-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          position: relative; z-index: 1;
        }
        .pr-icon-box {
          width: 56px; height: 56px; border-radius: 14px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .pr-card.light .pr-icon-box { background: #f5efe6; color: #301C1A; }
        .pr-card.dark  .pr-icon-box { background: rgba(215,181,109,0.14); color: #D7B56D; }

        /* Card number dots (decorative — like a credit card) */
        .pr-card-dots {
          display: flex; gap: 5px; align-items: center; padding-top: 6px;
        }
        .pr-card-dot {
          width: 7px; height: 7px; border-radius: 50%;
        }
        .pr-card.light .pr-card-dot { background: rgba(48,28,26,0.12); }
        .pr-card.dark  .pr-card-dot { background: rgba(215,181,109,0.18); }

        /* Ghosted Soult logo watermark */
        .pr-logo-ghost {
          position: absolute; top: 18px; right: 20px;
          pointer-events: none; z-index: 0;
          display: block;
        }
        .pr-card.light .pr-logo-ghost { opacity: 0.18; filter: grayscale(1); }
        .pr-card.dark  .pr-logo-ghost { opacity: 0.22; filter: grayscale(1) invert(1); }

        /* Card bottom content */
        .pr-card-body { position: relative; z-index: 1; }
        .pr-tag {
          font-size: 10px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; margin-bottom: 6px; display: block;
        }
        .pr-card.light .pr-tag { color: #9b7c5c; }
        .pr-card.dark  .pr-tag { color: rgba(215,181,109,0.5); }

        .pr-name {
          font-size: 26px; font-weight: 800; letter-spacing: -0.02em;
          line-height: 1.1; margin-bottom: 12px;
        }
        .pr-card.light .pr-name { color: #1a0f0e; }
        .pr-card.dark  .pr-name { color: #D7B56D; }

        .pr-desc {
          font-size: 15px; line-height: 1.75;
        }
        .pr-card.light .pr-desc { color: #5a4a3a; }
        .pr-card.dark  .pr-desc { color: rgba(215,181,109,0.60); }

        /* ── Tab indicators ── */
        .pr-tabs { display: flex; gap: 8px; margin-top: 20px; }
        .pr-tab {
          flex: 1; height: 3px; border-radius: 2px; border: none; cursor: pointer;
          padding: 0; background: rgba(48,28,26,0.12);
          position: relative; overflow: hidden;
        }
        .pr-tab.active { background: rgba(48,28,26,0.15); }
        .pr-tab.active::after {
          content: '';
          position: absolute; top: 0; left: 0; height: 100%;
          background: #D7B56D;
          animation: pr-fill 4.8s linear forwards;
        }
        @keyframes pr-fill { from { width: 0% } to { width: 100% } }

        /* Pillar name labels */
        .pr-names { display: flex; margin-top: 10px; }
        .pr-name-btn {
          flex: 1; font-size: 10px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(48,28,26,0.30); background: transparent;
          border: none; cursor: pointer; padding: 6px 0;
          text-align: center; transition: color 0.2s;
          white-space: nowrap;
        }
        .pr-name-btn.active { color: #301C1A; }

      `}</style>

      <div className="pr-wrap">
        {/* Benefit card */}
        <div className={`pr-card ${p.variant}${animating ? " fade" : ""}`}>
          {/* Top row: icon left, decorative dots right */}
          <div className="pr-card-top">
            <div className="pr-icon-box">{p.icon}</div>
            <div className="pr-card-dots">
              <span className="pr-card-dot" />
              <span className="pr-card-dot" />
              <span className="pr-card-dot" />
              <span className="pr-card-dot" />
            </div>
          </div>

          {/* Bottom: tag + name + description */}
          <div className="pr-card-body">
            <span className="pr-tag">{p.tag}</span>
            <div className="pr-name">{p.name}</div>
            <p className="pr-desc">{p.desc}</p>
          </div>

          {/* Ghosted Soult logo watermark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/soult-logo.png"
            alt=""
            aria-hidden="true"
            className="pr-logo-ghost"
            style={{ width: 200, height: "auto" }}
          />
        </div>

        {/* Progress bars */}
        <div className="pr-tabs">
          {PILLARS.map((_, i) => (
            <button
              key={`${key}-${i}`}
              className={`pr-tab${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={PILLARS[i].name}
            />
          ))}
        </div>

        {/* Name labels */}
        <div className="pr-names">
          {PILLARS.map((pl, i) => (
            <button
              key={i}
              className={`pr-name-btn${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
            >
              {pl.name.replace("The ", "")}
            </button>
          ))}
        </div>

      </div>
    </>
  );
}
