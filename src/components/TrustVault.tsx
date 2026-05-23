"use client";
import { useRef, useState, useEffect } from "react";

function useInView(ref: React.RefObject<Element | null>) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return v;
}

const CARDS = [
  {
    id: "lock",
    ghost: "AES-256",
    tag: "Encryption",
    title: "AES-256. Same as your bank.",
    desc: "Every file is encrypted in transit and at rest using military-grade AES-256 — the same standard protecting banking and government systems worldwide.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="tv-icon tv-icon-lock">
        <rect x="10" y="22" width="28" height="20" rx="4" stroke="#c9941a" strokeWidth="2.2"/>
        <path className="tv-lock-shackle" d="M16 22V16a8 8 0 0 1 16 0v6" stroke="#c9941a" strokeWidth="2.2" strokeLinecap="round"/>
        <circle cx="24" cy="33" r="3" fill="#c9941a" fillOpacity="0.3" stroke="#c9941a" strokeWidth="1.5"/>
        <line x1="24" y1="33" x2="24" y2="38" stroke="#c9941a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "shield",
    ghost: "ZERO-KEY",
    tag: "Zero-Knowledge",
    title: "We hold no key. By design.",
    desc: "Your documents are encrypted before they reach our servers. We store only ciphertext. Not even a court order can compel us to hand over readable data. We simply do not have it.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="tv-icon tv-icon-shield">
        <path className="tv-shield-body" d="M24 4L8 11v12c0 10.5 7 19.8 16 22 9-2.2 16-11.5 16-22V11L24 4z" stroke="#c9941a" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M17 24l5 5 9-9" stroke="#c9941a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "audit",
    ghost: "LOGGED",
    tag: "Full Audit Trail",
    title: "Every access. Logged. Always.",
    desc: "Every view, every change, every login — timestamped and attributed to an identity. You always know exactly who accessed your vault, what they saw, and when.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="tv-icon tv-icon-audit">
        <rect x="10" y="6" width="28" height="36" rx="3" stroke="#c9941a" strokeWidth="2.2"/>
        <line x1="16" y1="16" x2="32" y2="16" stroke="#c9941a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="23" x2="32" y2="23" stroke="#c9941a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="30" x2="26" y2="30" stroke="#c9941a" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="36" r="6" fill="#f0e9db" stroke="#c9941a" strokeWidth="2"/>
        <path className="tv-audit-check" d="M31 36l2 2 4-4" stroke="#c9941a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "india",
    ghost: "DPDP",
    tag: "Privacy & Compliance",
    title: "India-hosted. DPDP 2023 compliant.",
    desc: "Your data never leaves the country. AWS Mumbai region, under Indian jurisdiction. Built to comply with India's DPDP Act 2023. No data sold. No data exported. Ever.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="tv-icon tv-icon-india">
        <circle cx="24" cy="24" r="17" stroke="#c9941a" strokeWidth="2.2"/>
        <path d="M7 24h34M24 7c-5 4-8 10-8 17s3 13 8 17M24 7c5 4 8 10 8 17s-3 13-8 17" stroke="#c9941a" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="#c9941a" fillOpacity="0.25" stroke="#c9941a" strokeWidth="1.5"/>
        <circle className="tv-india-pulse" cx="24" cy="24" r="7" stroke="#c9941a" strokeWidth="1" strokeOpacity="0.3"/>
      </svg>
    ),
  },
];

export default function TrustVault() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <>
      <style>{`
        .tv-section {
          background: #f0e9db;
          padding: 80px 48px 88px;
        }
        .tv-inner { max-width: 1160px; margin: 0 auto; }

        /* ── Headline ── */
        .tv-top {
          text-align: center; margin-bottom: 52px;
        }
        .tv-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: #9b7c5c;
          display: block; margin-bottom: 16px;
        }
        .tv-h {
          font-size: clamp(30px, 3.5vw, 46px); font-weight: 900;
          letter-spacing: -0.035em; line-height: 1.05;
          color: #1a0f0e; margin: 0 0 14px;
        }
        .tv-h em { color: #c9941a; font-style: normal; }
        .tv-sub {
          font-size: 18px; line-height: 1.8; color: #6b4f3a;
          margin: 0 auto; max-width: 560px;
        }
        .tv-sub-gold {
          color: #c9941a; font-style: normal; font-weight: 800;
        }

        /* ── 4 cards ── */
        .tv-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }

        .tv-card {
          background: #fff;
          border-radius: 16px;
          border: 1.5px solid rgba(48,28,26,0.08);
          padding: 32px 28px 36px;
          display: flex; flex-direction: column;
          cursor: default; position: relative; overflow: hidden;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .tv-card:hover {
          border-color: rgba(215,181,109,0.7);
          box-shadow:
            0 0 0 1px rgba(215,181,109,0.25),
            0 0 16px rgba(215,181,109,0.22),
            0 0 40px rgba(215,181,109,0.10);
          transform: translateY(-3px);
        }

        /* Ghost keyword */
        .tv-ghost {
          position: absolute; top: 16px; right: 18px;
          font-size: 28px; font-weight: 900; letter-spacing: -0.02em;
          color: #1a0f0e; opacity: 0.045;
          pointer-events: none; user-select: none;
          white-space: nowrap;
          transition: opacity 0.3s ease;
        }
        .tv-card:hover .tv-ghost { opacity: 0.08; }

        /* Icon area */
        .tv-icon-wrap {
          width: 64px; height: 64px;
          background: rgba(201,148,26,0.08);
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          overflow: visible;
        }
        .tv-icon {
          width: 40px; height: 40px;
        }

        /* Lock: shackle lifts on hover */
        .tv-lock-shackle {
          transform-origin: 24px 22px;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .tv-card:hover .tv-lock-shackle {
          transform: translateY(-4px);
        }

        /* Shield: scale up on hover */
        .tv-shield-body {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
          transform-origin: 24px 24px;
        }
        .tv-card:hover .tv-shield-body {
          transform: scale(1.06);
        }

        /* Audit: check mark draws in */
        .tv-audit-check {
          stroke-dasharray: 12;
          stroke-dashoffset: 12;
          transition: stroke-dashoffset 0.4s ease 0.1s;
        }
        .tv-card:hover .tv-audit-check {
          stroke-dashoffset: 0;
        }

        /* Globe: pulse ring expands */
        .tv-india-pulse {
          transform-origin: 24px 24px;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .tv-card:hover .tv-india-pulse {
          transform: scale(1.8);
          opacity: 0;
        }

        .tv-card-tag {
          font-size: 10px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; color: #9b7c5c;
          margin-bottom: 8px; display: block;
        }
        .tv-card-title {
          font-size: 18px; font-weight: 800; color: #1a0f0e;
          letter-spacing: -0.02em; line-height: 1.25;
          margin: 0 0 12px;
        }
        .tv-card-desc {
          font-size: 18px; line-height: 1.7; color: #5a3e2b;
          margin: 0; flex: 1;
        }

        /* ── CTA ── */
        .tv-cta {
          display: flex; justify-content: center; align-items: center; gap: 14px;
        }
        .tv-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #1a0f0e;
          color: #D7B56D; font-size: 15px; font-weight: 800;
          letter-spacing: 0.02em; padding: 15px 36px; border-radius: 100px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
          box-shadow: 0 4px 20px rgba(26,15,14,0.2);
        }
        .tv-btn:hover {
          background: #301C1A;
          box-shadow: 0 8px 36px rgba(26,15,14,0.28);
          transform: translateY(-2px);
        }
        .tv-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #6b4f3a;
          font-size: 15px; font-weight: 600;
          padding: 15px 28px; border-radius: 100px;
          border: 1.5px solid rgba(48,28,26,0.18); cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .tv-btn-ghost:hover { border-color: #301C1A; color: #1a0f0e; }

        /* Scroll fade */
        .tv-fi { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .tv-fi.on { opacity: 1; transform: none; }
        .tv-d1 { transition-delay: 0.05s; }
        .tv-d2 { transition-delay: 0.12s; }
        .tv-d3 { transition-delay: 0.19s; }
        .tv-d4 { transition-delay: 0.26s; }
        .tv-d5 { transition-delay: 0.33s; }
        .tv-d6 { transition-delay: 0.40s; }
      `}</style>

      <section className="tv-section" ref={ref}>
        <div className="tv-inner">

          {/* Headline */}
          <div className={`tv-top tv-fi${visible ? " on" : ""}`}>
            <span className="tv-eyebrow">Built for trust</span>
            <h2 className="tv-h">
              Not even we can<br /><em>see your data.</em>
            </h2>
            <p className="tv-sub">
              Every document encrypted before it reaches us.<br/>
              Not our team, not our engineers, not a court order — <em className="tv-sub-gold">nobody.</em>
            </p>
          </div>

          {/* 4 cards */}
          <div className="tv-cards">
            {CARDS.map((c, i) => (
              <div key={c.id} className={`tv-card tv-fi tv-d${i + 2}${visible ? " on" : ""}`}>
                <span className="tv-ghost">{c.ghost}</span>
                <div className="tv-icon-wrap">{c.icon}</div>
                <span className="tv-card-tag">{c.tag}</span>
                <h3 className="tv-card-title">{c.title}</h3>
                <p className="tv-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`tv-cta tv-fi tv-d6${visible ? " on" : ""}`}>
            <a href="#" className="tv-btn">
              Start protecting your family
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M8.5 4l3.5 3.5L8.5 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="tv-btn-ghost">See how it works</a>
          </div>

        </div>
      </section>
    </>
  );
}
