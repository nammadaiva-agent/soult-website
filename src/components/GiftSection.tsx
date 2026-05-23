"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const OCCASIONS = [
  {
    label: "Birthday",
    color: "#C89B3C", bg: "rgba(200,155,60,0.1)", border: "rgba(200,155,60,0.25)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><path d="M12 3c0 0-3 2-3 4s1.5 2 3 2 3-1 3-2-3-4-3-4z"/><rect x="3" y="11" width="18" height="4" rx="1"/></svg>,
  },
  {
    label: "Anniversary",
    color: "#A0522D", bg: "rgba(160,82,45,0.1)", border: "rgba(160,82,45,0.22)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  },
  {
    label: "Retirement",
    color: "#8B6914", bg: "rgba(139,105,20,0.1)", border: "rgba(139,105,20,0.22)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  },
  {
    label: "New Baby",
    color: "#7D5A3C", bg: "rgba(125,90,60,0.1)", border: "rgba(125,90,60,0.22)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  },
  {
    label: "Diwali",
    color: "#C17A2A", bg: "rgba(193,122,42,0.1)", border: "rgba(193,122,42,0.25)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    label: "Wedding",
    color: "#5C3317", bg: "rgba(92,51,23,0.1)", border: "rgba(92,51,23,0.22)",
    svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M6 9c0 3.314 2.686 6 6 6s6-2.686 6-6"/><path d="M12 15v6"/></svg>,
  },
];

const CARDS = [
  {
    id: "family",
    planLabel: "Family Vault",
    duration: "1 Year",
    tagline: "Unlimited memories · 20 assets · 3 nominees",
    price: "₹2,999",
    bg: "linear-gradient(150deg, #2B1D16 0%, #3D2A1E 50%, #231710 100%)",
    accent: "#C89B3C",
    accentDim: "rgba(200,155,60,0.15)",
    accentBorder: "rgba(200,155,60,0.28)",
    brandColor: "#D4A843",
    textColor: "#F5EFE3",
    subColor: "rgba(245,239,227,0.48)",
  },
  {
    id: "legacy",
    planLabel: "Legacy Vault",
    duration: "1 Year",
    tagline: "30 assets · 5 nominees · Priority support",
    price: "₹4,999",
    bg: "linear-gradient(150deg, #160B08 0%, #1E1009 50%, #100705 100%)",
    accent: "#D4A843",
    accentDim: "rgba(212,168,67,0.15)",
    accentBorder: "rgba(212,168,67,0.32)",
    brandColor: "#E8C97A",
    textColor: "#F5EFE3",
    subColor: "rgba(245,239,227,0.45)",
  },
];

export default function GiftSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % CARDS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const card = CARDS[active];

  return (
    <>
      <style>{`
        .gift-wrap {
          background: #fff;
          padding: 80px 64px;
        }

        /* Outer container */
        .gift-card-outer {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(43,29,22,0.16);
          border: 1px solid rgba(43,29,22,0.12);
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          background: url('/gift-bg.png') center center / cover no-repeat;
          position: relative;
        }
        .gift-card-outer::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(253, 250, 245, 0.55);
          pointer-events: none;
          z-index: 0;
        }

        /* Left */
        .gift-left {
          padding: 52px 48px 52px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .gift-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C89B3C;
          margin-bottom: 16px;
        }
        .gift-eyebrow-line { width: 22px; height: 1px; background: #C89B3C; display: inline-block; }
        .gift-h {
          font-size: clamp(26px, 2.6vw, 36px);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #2B1D16;
          margin: 0 0 14px;
        }
        .gift-h em { font-style: normal; color: #C89B3C; }
        .gift-p {
          font-size: 15px;
          line-height: 1.72;
          color: rgba(43,29,22,0.75);
          margin: 0 0 24px;
        }
        .gift-occasions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 32px;
        }
        .gift-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 12px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 800;
          transition: opacity 0.18s, transform 0.18s;
          cursor: default;
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .gift-chip:hover { opacity: 0.82; transform: translateY(-1px); }
        .gift-chip svg { flex-shrink: 0; }
        .gift-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          align-self: flex-start;
          background: #2B1D16;
          color: #F5EFE3;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .gift-cta:hover { background: #C89B3C; }

        /* Right */
        .gift-right {
          padding: 44px 44px 36px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .gift-right-glow { display: none; }

        /* Gift card (the mock vault card) */
        .gift-card {
          border-radius: 16px;
          padding: 28px 32px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
          min-height: 210px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          margin-bottom: 20px;
        }
        .gift-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          pointer-events: none;
          z-index: 0;
        }
        .gift-card > * { position: relative; z-index: 1; }
        .gift-card-deco1 {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          top: -60px; right: -60px;
          pointer-events: none;
        }
        .gift-card-deco2 {
          position: absolute;
          width: 130px; height: 130px;
          border-radius: 50%;
          bottom: -40px; left: -30px;
          pointer-events: none;
        }
        .gift-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative; z-index: 1;
          margin-bottom: 20px;
        }
        .gift-card-brand { font-size: 18px; font-weight: 900; letter-spacing: -0.02em; }
        .gift-card-badge {
          border-radius: 5px;
          padding: 4px 9px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .gift-card-mid { position: relative; z-index: 1; margin-bottom: 20px; }
        .gift-card-label { font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 6px; }
        .gift-card-plan { font-size: 22px; font-weight: 900; letter-spacing: -0.025em; line-height: 1.1; margin-bottom: 6px; }
        .gift-card-tagline { font-size: 12px; line-height: 1.5; }
        .gift-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative; z-index: 1;
          padding-top: 16px;
        }
        .gift-card-to-label { font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 3px; }
        .gift-card-to-name { font-size: 14px; font-weight: 700; font-style: italic; }
        .gift-card-price { font-size: 22px; font-weight: 900; letter-spacing: -0.02em; }

        /* Dots */
        .gift-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          position: relative; z-index: 1;
        }
        .gift-dot {
          border: none;
          cursor: pointer;
          padding: 0;
          border-radius: 99px;
          height: 4px;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (max-width: 820px) {
          .gift-wrap { padding: 40px 20px; }
          .gift-card-outer { grid-template-columns: 1fr; }
          .gift-left { padding: 36px 28px; }
          .gift-right { padding: 32px 28px; }
        }
      `}</style>

      <section className="gift-wrap">
        <div className="gift-card-outer">

          {/* Left — cream */}
          <div className="gift-left">
            <div className="gift-eyebrow">
              <span className="gift-eyebrow-line" />
              Gift a Soult
            </div>
            <h2 className="gift-h">
              Give the gift<br />of <em>clarity &amp; peace.</em>
            </h2>
            <div className="gift-occasions">
              {OCCASIONS.map(o => (
                <span
                  key={o.label}
                  className="gift-chip"
                  style={{ background: o.bg, border: `1px solid ${o.border}`, color: o.color }}
                >
                  {o.svg}
                  {o.label}
                </span>
              ))}
            </div>
            <Link href="mailto:sk@soultdigital.com?subject=Gift a Soult Vault" className="gift-cta">
              Gift a Soult vault
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

          {/* Right — dark with gift card */}
          <div className="gift-right">
            <div className="gift-right-glow" />

            <div className="gift-card" style={{ background: card.bg }}>
              <div className="gift-card-deco1" style={{ background: card.accentDim }} />
              <div className="gift-card-deco2" style={{ background: card.accentDim.replace("0.15", "0.06") }} />

              <div className="gift-card-top">
                <span className="gift-card-brand" style={{ color: card.brandColor }}>SOULT</span>
                <span className="gift-card-badge" style={{ background: card.accentDim, border: `1px solid ${card.accentBorder}`, color: card.accent }}>
                  Gift Vault
                </span>
              </div>

              <div className="gift-card-mid">
                <div className="gift-card-label" style={{ color: card.subColor }}>Plan included</div>
                <div className="gift-card-plan" style={{ color: card.textColor }}>{card.planLabel} · {card.duration}</div>
                <div className="gift-card-tagline" style={{ color: card.subColor }}>{card.tagline}</div>
              </div>

              <div className="gift-card-bottom" style={{ borderTop: `1px solid ${card.accentBorder}` }}>
                <div>
                  <div className="gift-card-to-label" style={{ color: card.subColor }}>To</div>
                  <div className="gift-card-to-name" style={{ color: card.textColor, opacity: 0.75 }}>Someone you love</div>
                </div>
                <div className="gift-card-price" style={{ color: card.accent }}>{card.price}</div>
              </div>
            </div>

            <div className="gift-dots">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  className="gift-dot"
                  onClick={() => setActive(i)}
                  aria-label={`Card ${i + 1}`}
                  style={{
                    width: active === i ? 22 : 5,
                    background: active === i ? "#C89B3C" : "rgba(43,29,22,0.15)",
                  }}
                />
              ))}
            </div>

            <p style={{ margin: "16px 0 0", fontSize: "13px", lineHeight: 1.65, color: "#2B1D16", textAlign: "center", fontWeight: 600, background: "rgba(253,250,245,0.7)", borderRadius: 10, padding: "10px 16px", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
              A Soult vault is the most thoughtful gift you can give a loved one — on birthdays, anniversaries, or any moment that matters.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
