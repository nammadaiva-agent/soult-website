"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const INTERVAL = 4500;

const CATALOG = [
  {
    tab: "Daily & Core",
    full: "Daily & Core",
    desc: "Everyday thoughts, intentions and moments worth anchoring.",
    items: ["Diary", "Goal", "Gratitude", "Journaling", "Random Thought", "Midnight Clarity", "Moments to Freeze"],
    gradient: "linear-gradient(145deg, #1C0E06 0%, #2D1A0A 55%, #160A04 100%)",
    accent: "#C89B3C",
  },
  {
    tab: "Emotional",
    full: "Emotional & Healing",
    desc: "The things you feel but rarely say out loud.",
    items: ["Challenge", "Emotional Struggle", "Failure", "Grief & Loss", "Reflection", "Unsent Message", "Things I Never Said"],
    gradient: "linear-gradient(145deg, #200C06 0%, #361608 55%, #180804 100%)",
    accent: "#D4A06A",
  },
  {
    tab: "Celebratory",
    full: "Celebratory & Life Highlights",
    desc: "Your wins, milestones, and memories of pure joy.",
    items: ["Achievement", "Milestone", "Travel Memory", "First Times", "Celebration", "Proud Moment"],
    gradient: "linear-gradient(145deg, #1E1206 0%, #341E08 55%, #160E04 100%)",
    accent: "#E8C060",
  },
  {
    tab: "Wisdom",
    full: "Wisdom & Value",
    desc: "Lessons and truths earned through living. Passed down with intention.",
    items: ["Advice to Future", "Decision Making", "Life Lesson", "Motivational Nugget", "Philosophy", "Quote", "For My Future Self"],
    gradient: "linear-gradient(145deg, #221408 0%, #382010 55%, #180E06 100%)",
    accent: "#C89B3C",
  },
  {
    tab: "Family & Roots",
    full: "Family & Roots",
    desc: "Stories, traditions, and bonds that define where you come from.",
    items: ["Family Story", "Ancestral Memory", "Childhood Memory", "Relationship Lesson", "Family Tradition", "Heritage"],
    gradient: "linear-gradient(145deg, #1A0E08 0%, #2E1A0E 55%, #120A06 100%)",
    accent: "#B8822A",
  },
  {
    tab: "Spiritual",
    full: "Spiritual & Introspective",
    desc: "Your inner life — faith, reflection, and what you believe.",
    items: ["Faith", "Spiritual Insight", "Meditation Note", "Inner Voice", "Dream Record", "Belief", "Prayer"],
    gradient: "linear-gradient(145deg, #18100A 0%, #2A1C10 55%, #100C06 100%)",
    accent: "#D4B870",
  },
  {
    tab: "Critical Legacy",
    full: "Critical Legacy & Final Wish",
    desc: "The most important messages you will ever record.",
    items: ["Final Wish", "Last Message", "Business Secret", "Family Secret", "Apology", "Confession", "Last Rites"],
    gradient: "linear-gradient(145deg, #1A0804 0%, #2E1006 55%, #120604 100%)",
    accent: "#C07830",
  },
];

export default function MemoryCatalog() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const current = CATALOG[active];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setActive(prev => (prev + 1) % CATALOG.length);
    }, INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused]);

  useEffect(() => { setActiveItem(null); }, [active]);

  // 3D tilt on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg) scale(1.02)`;
    card.style.setProperty("--gloss-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--gloss-y", `${(y + 0.5) * 100}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
  }, []);

  return (
    <>
      <style>{`
        .mc-section {
          background: #2B1D16;
          padding: 88px 64px;
          font-family: 'Outfit', sans-serif;
        }
        .mc-inner { max-width: 1200px; margin: 0 auto; }

        .mc-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .mc-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 1.5px; background: #C89B3C;
        }
        .mc-h {
          font-size: clamp(28px, 3.5vw, 48px); font-weight: 900; color: #EDE6D8;
          letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 16px;
        }
        .mc-sub {
          font-size: 17px; color: #B8A898; line-height: 1.65;
          margin: 0 0 52px; max-width: 520px;
        }

        /* ── BODY ── */
        .mc-body {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 48px;
          align-items: center;
        }

        /* ── LEFT NAV ── */
        .mc-nav { display: flex; flex-direction: column; gap: 2px; }

        .mc-nav-item {
          display: flex; align-items: center; gap: 0;
          padding: 12px 16px 12px 20px;
          border: none; background: transparent;
          font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 600;
          color: #7A6A58; cursor: pointer; text-align: left;
          border-radius: 8px; position: relative; overflow: hidden;
          transition: color 0.2s, background 0.2s; letter-spacing: 0.015em;
          white-space: nowrap;
        }
        .mc-nav-item:hover { color: #C8B898; background: rgba(237,230,216,0.04); }
        .mc-nav-item--active { color: #C89B3C; }
        .mc-nav-item--active:hover { color: #C89B3C; }

        .mc-nav-item::before {
          content: '';
          position: absolute; left: 0; top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 2px; height: 50%; border-radius: 0 2px 2px 0;
          transition: transform 0.2s ease, background 0.2s;
        }
        .mc-nav-item--active::before {
          transform: translateY(-50%) scaleY(1);
          background: var(--mc-accent, #C89B3C);
        }

        /* fill sweep */
        .mc-nav-fill {
          position: absolute; inset: 0; border-radius: 8px;
          background: rgba(200,155,60,0.05);
          transform: scaleX(0); transform-origin: left center;
          animation: mc-fill linear forwards;
          animation-duration: var(--mc-dur, 4500ms);
          animation-play-state: var(--mc-play, running);
          pointer-events: none;
        }
        @keyframes mc-fill { from { transform: scaleX(0); } to { transform: scaleX(1); } }

        /* ── CARD WRAPPER ── */
        .mc-card-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* ── THE CARD ── */
        .mc-card {
          position: relative;
          width: 100%;
          max-width: 560px;
          aspect-ratio: 1.586;
          border-radius: 22px;
          padding: 30px 32px 26px;
          overflow: hidden;
          transition: transform 0.15s ease, box-shadow 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
          box-shadow:
            0 30px 80px rgba(0,0,0,0.6),
            0 8px 24px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.08);
          animation: mc-cardin 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes mc-cardin {
          from { opacity: 0; transform: perspective(900px) rotateY(-15deg) scale(0.92); }
          to   { opacity: 1; transform: perspective(900px) rotateY(0deg) scale(1); }
        }

        /* Gloss overlay — follows mouse */
        .mc-card::after {
          content: '';
          position: absolute; inset: 0; border-radius: 22px;
          background: radial-gradient(
            circle at var(--gloss-x, 50%) var(--gloss-y, 30%),
            rgba(255,255,255,0.07) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        /* Shimmer sweep */
        .mc-card::before {
          content: '';
          position: absolute; inset: 0; border-radius: 22px;
          background: linear-gradient(
            105deg,
            transparent 30%,
            rgba(255,255,255,0.025) 48%,
            rgba(255,255,255,0.06) 50%,
            rgba(255,255,255,0.025) 52%,
            transparent 70%
          );
          animation: mc-shimmer 4s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes mc-shimmer {
          0%   { transform: translateX(-120%); }
          40%, 100% { transform: translateX(120%); }
        }

        /* Edge glow matching accent */
        .mc-card-edge {
          position: absolute; inset: 0; border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: inset 0 0 0 1px var(--mc-accent-muted, rgba(200,155,60,0.25));
          pointer-events: none;
        }

        /* ── CARD TOP ROW ── */
        .mc-card-top {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: 20px;
          position: relative; z-index: 2;
        }

        /* EMV Chip */
        .mc-chip {
          width: 44px; height: 34px; border-radius: 6px;
          background: linear-gradient(135deg, #C8A84A 0%, #F0D878 30%, #B8922A 60%, #D4AA50 100%);
          position: relative; overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        /* Chip contact lines */
        .mc-chip::before {
          content: '';
          position: absolute; inset: 0;
          background:
            linear-gradient(#0000 30%, rgba(180,140,30,0.6) 30%, rgba(180,140,30,0.6) 34%, #0000 34%,
                            #0000 66%, rgba(180,140,30,0.6) 66%, rgba(180,140,30,0.6) 70%, #0000 70%),
            linear-gradient(90deg, #0000 30%, rgba(180,140,30,0.6) 30%, rgba(180,140,30,0.6) 34%, #0000 34%,
                            #0000 66%, rgba(180,140,30,0.6) 66%, rgba(180,140,30,0.6) 70%, #0000 70%);
        }
        .mc-chip-center {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 16px; height: 12px; border-radius: 2px;
          background: linear-gradient(135deg, #D4AA40 0%, #F0D060 50%, #B89020 100%);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
        }

        /* Card type badge */
        .mc-card-badge {
          font-size: 10px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4px 10px; border-radius: 100px;
        }

        /* ── CARD MIDDLE ── */
        .mc-card-mid {
          position: relative; z-index: 2; margin-bottom: 16px;
        }
        .mc-card-title {
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 900; color: #fff;
          letter-spacing: -0.02em; line-height: 1.1;
          margin: 0 0 6px;
          text-shadow: 0 2px 12px rgba(0,0,0,0.5);
        }
        .mc-card-desc {
          font-size: 13px; color: rgba(255,255,255,0.4);
          line-height: 1.5; margin: 0;
          max-width: 360px;
        }

        /* ── ITEMS STRIP ── */
        .mc-card-items {
          position: relative; z-index: 2;
          display: flex; flex-wrap: wrap; gap: 6px;
          margin-bottom: 20px;
        }
        .mc-card-item {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer; border: none;
          font-family: 'Outfit', sans-serif;
          padding: 6px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.45);
          transition: all 0.18s ease;
        }
        .mc-card-item:hover {
          background: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-1px);
        }
        .mc-card-item--active {
          background: var(--mc-accent-bg, rgba(200,155,60,0.25)) !important;
          border-color: var(--mc-accent, #C89B3C) !important;
          color: #fff !important;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }

        /* ── CARD BOTTOM ROW ── */
        .mc-card-bottom {
          position: relative; z-index: 2;
          display: flex; align-items: flex-end; justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 14px;
        }
        .mc-card-holder { }
        .mc-card-holder-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(255,255,255,0.25);
          margin-bottom: 3px;
        }
        .mc-card-holder-name {
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.7);
        }
        .mc-card-num {
          font-size: 13px; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25); font-variant-numeric: tabular-nums;
        }
        .mc-card-logo {
          display: flex; align-items: center;
        }
        .mc-card-logo img {
          height: 28px; width: auto;
          object-fit: contain;
          opacity: 0.85;
          filter: brightness(1.1);
        }

        /* ── NAV DOTS ── */
        .mc-dots {
          display: flex; gap: 6px; justify-content: center;
          margin-top: 28px;
        }
        .mc-dot {
          width: 6px; height: 6px; border-radius: 50%; border: none; padding: 0;
          background: rgba(237,230,216,0.12); cursor: pointer;
          transition: background 0.2s, transform 0.2s, width 0.2s;
        }
        .mc-dot--active {
          background: #C89B3C; width: 20px; border-radius: 3px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .mc-body { grid-template-columns: 1fr; gap: 32px; }
          .mc-nav { flex-direction: row; flex-wrap: wrap; gap: 4px; }
          .mc-nav-item { font-size: 12px; padding: 8px 12px; }
          .mc-nav-item::before { display: none; }
          .mc-card-wrap { justify-content: center; }
        }
        @media (max-width: 560px) {
          .mc-section { padding: 56px 20px; }
          .mc-card { padding: 22px 22px 20px; border-radius: 18px; }
          .mc-card-title { font-size: 18px; }
        }
      `}</style>

      <section
        className="mc-section"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mc-inner">
          <div className="mc-eyebrow">Memory Catalog</div>
          <h2 className="mc-h">Everything you value.<br />Every story you own.</h2>
          <p className="mc-sub">From critical legacy to passing thoughts. There is a place for everything.</p>

          <div className="mc-body">

            {/* LEFT NAV */}
            <nav className="mc-nav" aria-label="Memory categories">
              {CATALOG.map((cat, i) => (
                <button
                  key={cat.tab}
                  className={`mc-nav-item${active === i ? " mc-nav-item--active" : ""}`}
                  style={{ "--mc-accent": cat.accent } as React.CSSProperties}
                  onClick={() => { setActive(i); setPaused(true); }}
                  aria-pressed={active === i}
                >
                  {cat.tab}
                  {active === i && (
                    <span
                      key={active}
                      className="mc-nav-fill"
                      style={{
                        "--mc-dur": `${INTERVAL}ms`,
                        "--mc-play": paused ? "paused" : "running",
                      } as React.CSSProperties}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CARD */}
            <div className="mc-card-wrap">
              <div
                ref={cardRef}
                className="mc-card"
                key={active}
                style={{
                  background: current.gradient,
                  "--mc-accent": current.accent,
                  "--mc-accent-bg": `${current.accent}33`,
                  "--mc-accent-muted": `${current.accent}44`,
                } as React.CSSProperties}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mc-card-edge" />

                {/* Top row */}
                <div className="mc-card-top">
                  <div className="mc-chip">
                    <div className="mc-chip-center" />
                  </div>
                  <div className="mc-card-badge">Memory Vault</div>
                </div>

                {/* Title + desc */}
                <div className="mc-card-mid">
                  <div className="mc-card-title">{current.full}</div>
                  <p className="mc-card-desc">{current.desc}</p>
                </div>

                {/* Items */}
                <div className="mc-card-items">
                  {current.items.map((item, idx) => (
                    <button
                      key={item}
                      className={`mc-card-item${activeItem === idx ? " mc-card-item--active" : ""}`}
                      onClick={() => setActiveItem(activeItem === idx ? null : idx)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Bottom row */}
                <div className="mc-card-bottom">
                  <div className="mc-card-holder">
                    <div className="mc-card-holder-label">Cardholder</div>
                    <div className="mc-card-holder-name">Memory Keeper</div>
                  </div>
                  <div className="mc-card-num">0{active + 1} / 07</div>
                  <div className="mc-card-logo">
                    <img src="/soult-logo.png" alt="Soult" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dot navigation */}
          <div className="mc-dots">
            {CATALOG.map((cat, i) => (
              <button
                key={i}
                className={`mc-dot${active === i ? " mc-dot--active" : ""}`}
                onClick={() => { setActive(i); setPaused(true); }}
                aria-label={cat.tab}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
