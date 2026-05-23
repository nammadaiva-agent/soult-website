"use client";
import { useState } from "react";
import Link from "next/link";

const ITEMS = [
  {
    id: 0,  label: "Written Will or Testament",       category: "Financial & Legal", pts: 15,
    reason: "Your children never fight over property in court. Everything passes to exactly who you intended.",
  },
  {
    id: 1,  label: "Power of Attorney document",      category: "Financial & Legal", pts: 12,
    reason: "Someone trusted acts on your behalf if you're incapacitated — no court delays, no confusion.",
  },
  {
    id: 2,  label: "Bank account details documented", category: "Financial & Legal", pts: 8,
    reason: "Your family accesses savings immediately — no frozen accounts, no weeks of waiting.",
  },
  {
    id: 3,  label: "Property & investment records",   category: "Financial & Legal", pts: 10,
    reason: "Your property passes cleanly to your heirs. No missing papers, no disputes.",
  },
  {
    id: 4,  label: "Insurance policies listed",       category: "Financial & Legal", pts: 8,
    reason: "Your family knows every policy and every claim they're entitled to — and how to get it.",
  },
  {
    id: 5,  label: "Locker & safe access details",   category: "Financial & Legal", pts: 5,
    reason: "Nothing is lost. Every document and asset your family needs is findable.",
  },
  {
    id: 6,  label: "Healthcare directives written",  category: "Health & Care", pts: 8,
    reason: "Your medical wishes are honoured exactly — no impossible decisions placed on your family.",
  },
  {
    id: 7,  label: "Organ donation preference noted", category: "Health & Care", pts: 5,
    reason: "Your final decision is documented and honoured. No family conflict, no guesswork.",
  },
  {
    id: 8,  label: "Emergency contacts documented",  category: "Health & Care", pts: 4,
    reason: "In a crisis, the right people are reached in minutes — not hours of panic.",
  },
  {
    id: 9,  label: "Voice recordings for loved ones", category: "Memory & Legacy", pts: 8,
    reason: "Your voice lives on. Your children hear your love and wisdom long after you're gone.",
  },
  {
    id: 10, label: "Family stories & life lessons",  category: "Memory & Legacy", pts: 5,
    reason: "Your grandchildren will know who you were. Your legacy is more than assets.",
  },
  {
    id: 11, label: "Named nominees & executor rules", category: "Nominees", pts: 12,
    reason: "The right people get the right access at the right time — no conflict, no court.",
  },
];

const MILESTONES = [
  { min: 0,   max: 0,   level: "Not Started",      color: "#b07060" },
  { min: 1,   max: 24,  level: "Just Beginning",   color: "#c99060" },
  { min: 25,  max: 44,  level: "Building",         color: "#c9a84c" },
  { min: 45,  max: 64,  level: "Family Secured",   color: "#D7B56D" },
  { min: 65,  max: 84,  level: "Legacy Protected",  color: "#b8a040" },
  { min: 85,  max: 99,  level: "Almost Complete",  color: "#9a8830" },
  { min: 100, max: 100, level: "Fully Protected",  color: "#7a6e20" },
];

const MILESTONE_MSGS: Record<string, string> = {
  "Not Started":     "Tick an item to see what your family gains.",
  "Just Beginning":  "A start. Your family can trace the basics — critical gaps remain.",
  "Building":        "Your children's inheritance is taking shape. Keep going.",
  "Family Secured":  "Your daughter's wedding fund, your son's education — documented and safe.",
  "Legacy Protected": "Your spouse is shielded from court delays and property disputes.",
  "Almost Complete": "You are in the top 5% of Indian families. One final push.",
  "Fully Protected": "Every asset, every wish, every memory — documented and safe forever.",
};

function getMilestone(score: number) {
  return MILESTONES.find(m => score >= m.min && score <= m.max) ?? MILESTONES[0];
}

function ProgressRing({ score, color }: { score: number; color: string }) {
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <svg width="108" height="108" viewBox="0 0 108 108">
      <circle cx="54" cy="54" r={r} fill="none" stroke="rgba(48,28,26,0.10)" strokeWidth="7" />
      <circle
        cx="54" cy="54" r={r} fill="none"
        stroke={color} strokeWidth="7" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset}
        transform="rotate(-90 54 54)"
        style={{ transition: "stroke-dashoffset 0.45s ease, stroke 0.45s ease" }}
      />
      <text x="54" y="50" textAnchor="middle" fill="#1a0f0e" fontSize="22" fontWeight="800" fontFamily="inherit">{score}</text>
      <text x="54" y="65" textAnchor="middle" fill="#9b7c5c" fontSize="9" fontWeight="700" fontFamily="inherit" letterSpacing="1">OUT OF 100</text>
    </svg>
  );
}

export default function LegacyChecklist() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [lastChecked, setLastChecked] = useState<number | null>(null);

  const toggle = (id: number) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        // find highest remaining checked id for message
        const remaining = Array.from(next);
        setLastChecked(remaining.length > 0 ? remaining[remaining.length - 1] : null);
      } else {
        next.add(id);
        setLastChecked(id);
      }
      return next;
    });
  };

  const score = Array.from(checked).reduce((sum, id) => sum + (ITEMS[id]?.pts ?? 0), 0);
  const milestone = getMilestone(score);
  const activeItem = lastChecked !== null ? ITEMS[lastChecked] : null;

  return (
    <>
      <style>{`
        .lc-wrap {
          display: grid; grid-template-columns: 1fr 420px; gap: 52px; align-items: stretch;
        }

        /* ── Left panel ── */
        .lc-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #9b7c5c; margin-bottom: 10px;
        }
        .lc-h {
          font-size: clamp(22px, 2.2vw, 28px); font-weight: 800;
          letter-spacing: -0.02em; line-height: 1.2; color: #1a0f0e; margin-bottom: 10px;
        }
        .lc-h em { color: #c9941a; font-style: normal; }
        .lc-sub {
          font-size: 18px; color: #6b5c4c; line-height: 1.7; margin-bottom: 20px;
        }

        /* Score ring card */
        .lc-score-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid rgba(48,28,26,0.08);
          padding: 22px 20px 18px;
          margin-bottom: 12px;
          box-shadow: 0 4px 24px rgba(48,28,26,0.08);
        }
        .lc-score-top { display: flex; align-items: center; gap: 16px; margin-bottom: 14px; }
        .lc-score-meta { flex: 1; }
        .lc-score-level {
          font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; margin-bottom: 6px; transition: color 0.45s;
        }
        .lc-score-general { font-size: 18px; color: #4a3a2a; line-height: 1.55; }
        .lc-bar-wrap {
          width: 100%; height: 4px; background: rgba(48,28,26,0.07); border-radius: 2px; overflow: hidden;
        }
        .lc-bar { height: 100%; border-radius: 2px; transition: width 0.45s ease, background 0.45s ease; }

        /* Per-item reason */
        .lc-reason {
          background: #fff;
          border: 1px solid rgba(48,28,26,0.08);
          border-left: 3px solid #D7B56D;
          border-radius: 10px; padding: 14px 16px;
          margin-bottom: 18px; min-height: 88px;
          display: flex; align-items: flex-start; gap: 10px;
          box-shadow: 0 2px 12px rgba(48,28,26,0.06);
        }
        .lc-reason-icon {
          width: 30px; height: 30px; border-radius: 8px; flex-shrink: 0;
          background: rgba(215,181,109,0.15);
          display: flex; align-items: center; justify-content: center; margin-top: 1px;
        }
        .lc-reason-content { flex: 1; }
        .lc-reason-item-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #c9941a; margin-bottom: 5px;
        }
        .lc-reason-text { font-size: 18px; color: #2a1a14; line-height: 1.6; }
        .lc-reason-empty { font-size: 18px; color: #b0967c; font-style: italic; line-height: 1.6; }

        .lc-cta {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #fff;
          background: #301C1A; padding: 15px 22px;
          text-decoration: none; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          width: 100%; transition: background 0.2s;
          box-sizing: border-box;
        }
        .lc-cta:hover { background: #4a2820; }

        /* ── Left: checklist grid ── */
        .lc-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 7px;
          height: 100%; align-content: stretch;
        }

        .lc-item {
          display: flex; align-items: flex-start; gap: 10px;
          background: #fff;
          border-radius: 8px;
          border: 1px solid rgba(48,28,26,0.07);
          border-left: 3px solid transparent;
          padding: 10px 12px; cursor: pointer;
          box-shadow: 0 1px 4px rgba(48,28,26,0.05);
          transition: border-color 0.2s, background 0.15s, transform 0.15s, box-shadow 0.2s;
          user-select: none;
        }
        .lc-item:hover {
          border-color: rgba(201,148,26,0.3);
          border-left-color: rgba(201,148,26,0.5);
          box-shadow: 0 4px 16px rgba(48,28,26,0.09);
          transform: translateY(-1px);
        }
        .lc-item.checked {
          background: #fffbf3;
          border-color: rgba(201,148,26,0.2);
          border-left-color: #c9941a;
        }
        .lc-item.active-item {
          background: #fffbf3;
          border-color: rgba(201,148,26,0.35);
          border-left-color: #c9941a;
          box-shadow: 0 0 0 3px rgba(201,148,26,0.12), 0 4px 16px rgba(48,28,26,0.08);
        }

        .lc-box {
          width: 18px; height: 18px; border-radius: 4px; flex-shrink: 0; margin-top: 2px;
          border: 1.5px solid rgba(48,28,26,0.2);
          display: flex; align-items: center; justify-content: center;
          background: #f9f6f1;
          transition: background 0.2s, border-color 0.2s;
        }
        .lc-item.checked .lc-box { background: #c9941a; border-color: #c9941a; }

        .lc-item-meta { flex: 1; min-width: 0; }
        .lc-item-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; margin-bottom: 2px; }
        .lc-item-label { font-size: 15px; font-weight: 700; color: #1a0f0e; line-height: 1.3; }
        .lc-item.checked .lc-item-label { color: #7a6b5a; }
        .lc-item-pts {
          flex-shrink: 0; font-size: 10px; font-weight: 800; letter-spacing: 0.06em;
          color: #c9941a; background: rgba(201,148,26,0.1);
          border: 1px solid rgba(201,148,26,0.2);
          border-radius: 4px; padding: 2px 6px; margin-top: 2px; white-space: nowrap;
        }
        .lc-item.checked .lc-item-pts { color: #a07828; opacity: 0.7; }
        .lc-item-cat {
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #9b7c5c;
        }
        .lc-item.checked .lc-item-cat { color: #c9941a; }

        @media (max-width: 1100px) { .lc-wrap { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 640px)  { .lc-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="lc-wrap">

        {/* ── Left: checklist ── */}
        <div className="lc-grid">
          {ITEMS.map(item => {
            const isChecked = checked.has(item.id);
            const isActive  = lastChecked === item.id;
            return (
              <div
                key={item.id}
                className={`lc-item${isChecked ? " checked" : ""}${isActive ? " active-item" : ""}`}
                onClick={() => toggle(item.id)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={e => e.key === " " && toggle(item.id)}
              >
                <div className="lc-box">
                  {isChecked && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#301C1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <div className="lc-item-meta">
                  <div className="lc-item-top">
                    <div className="lc-item-label">{item.label}</div>
                    <span className="lc-item-pts">+{item.pts}</span>
                  </div>
                  <span className="lc-item-cat">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Right: score panel ── */}
        <div>
          <p className="lc-eyebrow">Legacy Readiness Score</p>
          <h2 className="lc-h">Is your family truly <em>protected?</em></h2>
          <p className="lc-sub">Tick what you have. See exactly what your family gains — item by item.</p>

          <div className="lc-score-card">
            <div className="lc-score-top">
              <ProgressRing score={score} color={milestone.color} />
              <div className="lc-score-meta">
                <p className="lc-score-level" style={{ color: milestone.color }}>{milestone.level}</p>
                <p className="lc-score-general">{MILESTONE_MSGS[milestone.level]}</p>
              </div>
            </div>
            <div className="lc-bar-wrap">
              <div className="lc-bar" style={{ width: `${score}%`, background: milestone.color }} />
            </div>
          </div>

          {/* Per-item reason */}
          <div className="lc-reason">
            <div className="lc-reason-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="lc-reason-content">
              {activeItem ? (
                <>
                  <p className="lc-reason-item-label">{activeItem.label}</p>
                  <p className="lc-reason-text">{activeItem.reason}</p>
                </>
              ) : (
                <p className="lc-reason-empty">Tick any item to see what your family gains.</p>
              )}
            </div>
          </div>

          <Link href="/get-started" className="lc-cta">
            Secure Everything in Soult — Free
          </Link>
        </div>

      </div>
    </>
  );
}
