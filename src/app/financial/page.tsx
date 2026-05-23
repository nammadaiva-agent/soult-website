import type { Metadata } from "next";
import StoriesCarousel from "@/components/StoriesCarousel";
import AssetCategories from "@/components/AssetCategories";

export const metadata: Metadata = {
  title: "Financial Legacy Vault — Track Assets, Will & Estate Planning | Soult India",
  description: "Your SIP for Europe. Your FD for your son's tournament. The property for your daughter's future. One place, privately held.",
};

const STEPS = [
  { n: "01", h: "Select an asset type", p: "Choose from 60+ predefined categories — bank accounts, mutual funds, property, heirlooms, and more. Or create your own." },
  { n: "02", h: "Record the number and the story", p: "Add the details you know. Then write why this asset matters. Numbers tell the balance. Stories tell the meaning." },
  { n: "03", h: "Secured the moment you save", p: "AES-256 encryption activates instantly. Visible only to you, accessible only through your MPIN. No exceptions." },
];

const PILLARS = [
  {
    h: "Start with just a name",
    p: "One word is enough to begin. Add details when you have them. Nothing here is ever required.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="18" height="16" rx="3" stroke="#C89B3C" strokeWidth="1.8"/>
        <path d="M22 13l7 5-7 5" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="18" r="1.8" fill="#C89B3C"/>
        <line x1="14" y1="15" x2="20" y2="15" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="18" x2="20" y2="18" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="21" x2="18" y2="21" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    h: "We don't connect to anything",
    p: "No bank connections. No verification. A photo of your passbook page is enough for handover.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
        <path d="M18 3L6 8v10c0 7 5.4 13.5 12 15.5C24.6 31.5 30 25 30 18V8L18 3Z" stroke="#C89B3C" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="13" y="17" width="10" height="8" rx="2" stroke="#C89B3C" strokeWidth="1.7"/>
        <path d="M15 17v-2.5a3 3 0 016 0V17" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="18" cy="21" r="1.2" fill="#C89B3C"/>
      </svg>
    ),
  },
  {
    h: "For them, when it matters",
    p: "You know where things are today. They know what it means tomorrow.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
        <circle cx="11" cy="9" r="3.5" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="25" cy="9" r="3" stroke="#C89B3C" strokeWidth="1.8"/>
        <circle cx="18" cy="11" r="2" stroke="#C89B3C" strokeWidth="1.7"/>
        <path d="M5 28v-4.5C5 20.4 7.7 18 11 18s6 2.4 6 5.5V28" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M21 28v-3.5c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5V28" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M17 28v-2c0-1.7 1.3-3 2.5-3" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const SECURITY = [
  { h: "AES-256 Encryption", p: "Every field, every note, every photo — encrypted the moment you save. Unreadable without your MPIN." },
  { h: "No Bank Connections", p: "No API access. No verification flow. A photograph of your passbook is enough for handover to family." },
  { h: "MPIN Access Only", p: "Your vault opens only to your MPIN. No other method. No backdoor. No exceptions." },
  { h: "Story Alongside Numbers", p: "Record the value and the meaning behind it — so your family understands both the balance and the intention." },
  { h: "Private by Default", p: "Nothing is shared, synced to third parties, or analysed. What's in your vault stays in your vault." },
  { h: "Transfer-Ready Export", p: "Download a structured summary anytime. Lawyer-ready, heir-ready, notary-ready." },
];

const PREVIEW_CATS = ["Bank Accounts", "Gold & Jewellery", "Real Estate", "Insurance", "Mutual Funds", "Govt Schemes", "Documents", "Digital Assets"];

export default function FinancialPage() {
  return (
    <>
      <style>{`
        .fp { font-family: 'Outfit', sans-serif; }

        /* ── SHARED SECTION STYLES ── */
        .fp-inner      { max-width: 1200px; margin: 0 auto; }
        .fp-inner-md   { max-width: 1100px; margin: 0 auto; }

        .fp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .fp-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 1.5px; background: #C89B3C;
        }

        /* ══ LIGHT SECTIONS ══ */
        .fp-section-light { background: #FDFAF6; padding: 88px 64px; color: #2B1D16; }
        .fp-section-sand  { background: #F5F0E8; padding: 80px 64px; color: #2B1D16; }
        .fp-h-light { font-size: clamp(28px, 3.5vw, 48px); font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 56px; }
        .fp-body-light { font-size: 17px; color: rgba(43,29,22,0.60); line-height: 1.78; }

        /* ══ DARK SECTIONS ══ */
        .fp-section-dark  { background: #1E1208; padding: 88px 64px; color: #EDE6D8; }
        .fp-section-brown { background: #2B1D16; padding: 88px 64px; color: #EDE6D8; }
        .fp-h-dark  { font-size: clamp(28px, 3.5vw, 48px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 56px; }
        .fp-body-dark { font-size: 17px; color: #B8A898; line-height: 1.78; }

        /* ── HERO ── */
        .fp-hero {
          background: #FDFAF6; padding: 96px 64px 72px;
          position: relative; overflow: hidden; color: #2B1D16;
        }
        .fp-hero::before {
          content: ''; position: absolute;
          top: -220px; right: -220px; width: 720px; height: 720px;
          background: radial-gradient(circle, rgba(200,155,60,0.08) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .fp-hero-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 400px; gap: 80px; align-items: center;
          position: relative;
        }
        .fp-hero-h {
          font-size: clamp(36px, 4.5vw, 62px); font-weight: 900; color: #2B1D16;
          letter-spacing: -0.035em; line-height: 1.07; margin: 0 0 22px;
        }
        .fp-hero-sub {
          font-size: 18px; font-weight: 400; color: rgba(43,29,22,0.60);
          line-height: 1.72; margin: 0 0 38px; max-width: 520px;
        }
        .fp-hero-btns { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .fp-hero-trust {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .fp-hero-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; color: rgba(43,29,22,0.40); font-weight: 500;
        }
        .fp-hero-trust-item svg { width: 13px; height: 13px; stroke: rgba(43,29,22,0.30); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

        .fp-btn-primary {
          display: inline-block; background: #2B1D16; color: #EDE6D8;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          padding: 16px 36px; border-radius: 100px; text-decoration: none;
          transition: background 0.2s;
        }
        .fp-btn-primary:hover { background: #3D2A20; }
        .fp-btn-gold {
          display: inline-block; background: #C89B3C; color: #2B1D16;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          padding: 16px 36px; border-radius: 100px; text-decoration: none;
          transition: background 0.2s;
        }
        .fp-btn-gold:hover { background: #D8AA48; }
        .fp-btn-outline {
          display: inline-block; border: 1.5px solid rgba(43,29,22,0.20);
          color: #2B1D16; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .fp-btn-outline:hover { border-color: #C89B3C; color: #8B6914; }
        .fp-btn-outline-light {
          display: inline-block; border: 1.5px solid rgba(237,230,216,0.22);
          color: #EDE6D8; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .fp-btn-outline-light:hover { border-color: rgba(200,155,60,0.6); color: #E8C060; }

        /* Trust card */
        .fp-trust-card {
          background: #fff; border-radius: 24px;
          border: 1px solid rgba(43,29,22,0.07);
          box-shadow: 0 6px 40px rgba(43,29,22,0.08); padding: 34px 30px 30px;
          position: relative; overflow: hidden;
        }
        .fp-trust-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(to right, #C89B3C, #E8C060, rgba(200,155,60,0.2));
          border-radius: 24px 24px 0 0;
        }
        .fp-trust-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px; margin-bottom: 24px;
        }
        .fp-trust-stat {
          padding: 20px 16px; background: #FDFAF6; border-radius: 8px;
        }
        .fp-trust-num {
          font-size: 28px; font-weight: 900; color: #2B1D16;
          letter-spacing: -0.04em; line-height: 1; margin-bottom: 6px;
        }
        .fp-trust-num span { color: #C89B3C; }
        .fp-trust-label { font-size: 12px; font-weight: 600; color: rgba(43,29,22,0.42); line-height: 1.4; }
        .fp-trust-quote {
          font-size: 15px; font-weight: 500; color: #2B1D16; line-height: 1.6;
          border-top: 1px solid rgba(43,29,22,0.07); padding-top: 20px;
          letter-spacing: -0.01em;
        }
        .fp-trust-quote em { font-style: normal; color: #C89B3C; }

        /* Category preview */
        .fp-preview-strip {
          max-width: 1200px; margin: 52px auto 0;
          padding-top: 36px; border-top: 1px solid rgba(43,29,22,0.07);
        }
        .fp-preview-label {
          font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(43,29,22,0.30); margin-bottom: 14px;
        }
        .fp-preview-pills { display: flex; flex-wrap: wrap; gap: 9px; }
        .fp-preview-pill {
          font-size: 13px; font-weight: 600; color: rgba(43,29,22,0.50);
          border: 1.5px solid rgba(43,29,22,0.10); border-radius: 100px;
          padding: 7px 18px; letter-spacing: 0.01em; transition: border-color 0.2s, color 0.2s;
        }
        .fp-preview-pill:hover { border-color: #C89B3C; color: #8B6914; }
        .fp-preview-more {
          font-size: 13px; font-weight: 700; color: #C89B3C;
          border: 1.5px dashed rgba(200,155,60,0.4);
          border-radius: 100px; padding: 7px 18px;
        }

        /* ── DARK PILLARS ── */
        .fp-pillars-intro {
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
          align-items: end; margin-bottom: 52px;
        }
        .fp-pillars-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
        }
        .fp-pillar {
          padding: 40px 36px;
          background: rgba(237,230,216,0.05);
          border: 1px solid rgba(237,230,216,0.10);
          border-radius: 22px;
          transition: background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .fp-pillar:hover {
          background: rgba(200,155,60,0.07);
          border-color: rgba(200,155,60,0.35);
          box-shadow: 0 0 28px rgba(200,155,60,0.28), 0 0 56px rgba(200,155,60,0.12);
          transform: translateY(-3px);
        }
        .fp-pillar-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(200,155,60,0.10); border: 1px solid rgba(200,155,60,0.22);
          display: flex; align-items: center; justify-content: center; margin-bottom: 22px;
          transition: background 0.25s, border-color 0.25s;
        }
        .fp-pillar:hover .fp-pillar-icon {
          background: rgba(200,155,60,0.16);
          border-color: rgba(200,155,60,0.4);
        }
        .fp-pillar-h {
          font-size: 20px; font-weight: 800; color: #EDE6D8;
          letter-spacing: -0.02em; margin-bottom: 12px; line-height: 1.25;
        }
        .fp-pillar-p { font-size: 16px; color: #B8A898; line-height: 1.72; margin: 0; }

        /* ── STEP SECTION CTA ── */
        .fp-steps-cta {
          margin-top: 48px; padding-top: 40px;
          border-top: 1px solid rgba(43,29,22,0.08);
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
        }
        .fp-steps-cta-text { font-size: 18px; font-weight: 700; color: #2B1D16; letter-spacing: -0.01em; }
        .fp-steps-cta-text span { color: #C89B3C; }

        /* ── SECURITY CTA BAR ── */
        .fp-sec-cta-bar {
          margin-top: 52px; padding: 32px 40px;
          background: rgba(237,230,216,0.04); border: 1px solid rgba(200,155,60,0.2);
          border-radius: 20px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
        }
        .fp-sec-cta-text { font-size: 18px; font-weight: 700; color: #EDE6D8; letter-spacing: -0.01em; }
        .fp-sec-cta-sub { font-size: 14px; color: #7A6A58; margin-top: 4px; }

        /* ── LIGHT STEPS ── */
        .fp-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .fp-step-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07);
          padding: 36px 30px; position: relative; overflow: hidden;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .fp-step-card:hover {
          box-shadow: 0 8px 36px rgba(200,155,60,0.10);
          transform: translateY(-2px);
        }
        .fp-step-ghost {
          position: absolute; top: -12px; right: 14px;
          font-size: 110px; font-weight: 900;
          color: rgba(200,155,60,0.055); letter-spacing: -0.04em;
          line-height: 1; pointer-events: none; user-select: none;
        }
        .fp-step-dot {
          width: 13px; height: 13px; border-radius: 50%;
          border: 2px solid #C89B3C; background: #F5F0E8;
          box-shadow: 0 0 0 4px rgba(200,155,60,0.12); margin-bottom: 22px;
        }
        .fp-step-num { font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #C89B3C; margin-bottom: 12px; }
        .fp-step-h { font-size: 21px; font-weight: 800; color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 12px; line-height: 1.2; }
        .fp-step-p { font-size: 16px; color: rgba(43,29,22,0.55); line-height: 1.75; margin: 0; }

        /* ── DARK EDITORIAL ── */
        .fp-editorial-pull {
          font-size: clamp(38px, 5vw, 66px); font-weight: 900; color: #EDE6D8;
          letter-spacing: -0.04em; line-height: 1.05; margin: 0 0 52px;
        }
        .fp-editorial-pull em { font-style: normal; color: #C89B3C; }
        .fp-editorial-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: end; }
        .fp-editorial-tagline {
          font-size: 20px; font-weight: 800; color: #EDE6D8; line-height: 1.5;
          letter-spacing: -0.02em; border-top: 2px solid #C89B3C; padding-top: 24px;
        }

        /* ── DARK SECURITY ── */
        .fp-security-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .fp-sec-card {
          background: rgba(237,230,216,0.04); border-radius: 20px;
          border: 1px solid rgba(237,230,216,0.08); padding: 34px 28px;
          transition: border-color 0.25s, background 0.25s;
        }
        .fp-sec-card:hover {
          border-color: rgba(200,155,60,0.30);
          background: rgba(200,155,60,0.05);
        }
        .fp-sec-dot { width: 8px; height: 8px; border-radius: 50%; background: #C89B3C; margin-bottom: 18px; }
        .fp-sec-h { font-size: 19px; font-weight: 800; color: #EDE6D8; margin-bottom: 12px; letter-spacing: -0.02em; }
        .fp-sec-p { font-size: 16px; color: #B8A898; line-height: 1.72; margin: 0; }

        /* ── DARK CTA ── */
        .fp-cta-eyebrow { font-size: 12px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #C89B3C; margin-bottom: 18px; }
        .fp-cta-h { font-size: clamp(30px, 3.5vw, 52px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; margin: 0 0 16px; line-height: 1.1; }
        .fp-cta-p { font-size: 18px; color: #B8A898; margin: 0 0 42px; line-height: 1.65; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .fp-hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .fp-security-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .fp-hero, .fp-section-light, .fp-section-sand,
          .fp-section-dark, .fp-section-brown { padding: 64px 24px; }
          .fp-pillars-grid { grid-template-columns: 1fr; gap: 0; }
          .fp-pillar { border-right: none; border-bottom: 1px solid rgba(237,230,216,0.07); padding: 36px 0; }
          .fp-pillar:last-child { border-bottom: none; }
          .fp-steps-grid { grid-template-columns: 1fr; }
          .fp-editorial-cols { grid-template-columns: 1fr; gap: 32px; }
          .fp-security-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="fp">

        {/* ══ 1. HERO — LIGHT ══ */}
        <section className="fp-hero">
          <div className="fp-hero-grid">
            <div>
              <div className="fp-eyebrow">Financial &amp; Asset Vault</div>
              <h1 className="fp-hero-h">Know where everything is.<br />Make sure they know<br />what it meant.</h1>
              <p className="fp-hero-sub">Your SIP for Europe. Your FD for your son&apos;s tournament. The property for your daughter&apos;s future. One place, privately held.</p>
              <div className="fp-hero-btns">
                <a href="/login" className="fp-btn-primary">Create Your Asset Vault Free</a>
                <a href="#how-it-works" className="fp-btn-outline">See how it works</a>
              </div>
              <div className="fp-hero-trust">
                <div className="fp-hero-trust-item">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                  Free to start
                </div>
                <div className="fp-hero-trust-item">
                  <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  No bank connections
                </div>
                <div className="fp-hero-trust-item">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Start in 30 seconds
                </div>
              </div>
            </div>
            <div className="fp-trust-card">
              <div className="fp-trust-grid">
                <div className="fp-trust-stat">
                  <div className="fp-trust-num">60<span>+</span></div>
                  <div className="fp-trust-label">Asset types to record</div>
                </div>
                <div className="fp-trust-stat">
                  <div className="fp-trust-num" style={{fontSize:'20px',paddingTop:'4px'}}>AES-256</div>
                  <div className="fp-trust-label">Always encrypted</div>
                </div>
                <div className="fp-trust-stat">
                  <div className="fp-trust-num">Zero</div>
                  <div className="fp-trust-label">Bank connections</div>
                </div>
                <div className="fp-trust-stat">
                  <div className="fp-trust-num">MPIN</div>
                  <div className="fp-trust-label">Only you can open it</div>
                </div>
              </div>
              <div className="fp-trust-quote">
                A bank statement tells your family the balance.<br />It never tells them <em>why you started.</em>
              </div>
            </div>
          </div>
          <div className="fp-preview-strip">
            <div className="fp-preview-label">What you can record</div>
            <div className="fp-preview-pills">
              {PREVIEW_CATS.map((c) => <a href="#asset-categories" className="fp-preview-pill" key={c} style={{textDecoration:'none'}}>{c}</a>)}
              <a href="#asset-categories" className="fp-preview-more" style={{textDecoration:'none'}}>+ 3 more categories</a>
            </div>
          </div>
        </section>

        {/* ══ 2. PILLARS — DARK ══ */}
        <section className="fp-section-dark">
          <div className="fp-inner">
            <div className="fp-pillars-intro">
              <div>
                <div className="fp-eyebrow">Why Soult</div>
                <h2 className="fp-h-dark" style={{margin:0}}>Built different.<br />For good reason.</h2>
              </div>
              <p className="fp-body-dark" style={{marginBottom:0}}>
                Most asset records fail the family — not because the money was hidden, but because the meaning was never written down. Soult fixes both.
              </p>
            </div>
            <div className="fp-pillars-grid">
              {PILLARS.map((p) => (
                <div className="fp-pillar" key={p.h}>
                  <div className="fp-pillar-icon">{p.icon}</div>
                  <div className="fp-pillar-h">{p.h}</div>
                  <p className="fp-pillar-p">{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. HOW IT WORKS — LIGHT ══ */}
        <section className="fp-section-sand" id="how-it-works">
          <div className="fp-inner">
            <div className="fp-eyebrow">How it works</div>
            <h2 className="fp-h-light">Three steps.<br />A lifetime of clarity.</h2>
            <div className="fp-steps-grid">
              {STEPS.map((s) => (
                <div className="fp-step-card" key={s.n}>
                  <div className="fp-step-ghost">{s.n}</div>
                  <div className="fp-step-dot" />
                  <div className="fp-step-num">{s.n}</div>
                  <div className="fp-step-h">{s.h}</div>
                  <p className="fp-step-p">{s.p}</p>
                </div>
              ))}
            </div>
            <div className="fp-steps-cta">
              <div className="fp-steps-cta-text">Ready to record your first asset? <span>Takes under a minute.</span></div>
              <a href="/login" className="fp-btn-primary">Start for free</a>
            </div>
          </div>
        </section>

        {/* ══ 4. EDITORIAL — DARK ══ */}
        <section className="fp-section-brown">
          <div className="fp-inner">
            <div className="fp-eyebrow">The Soult difference</div>
            <h2 className="fp-editorial-pull">Most people start<br />with <em>one thing.</em></h2>
            <div className="fp-editorial-cols">
              <div>
                <p className="fp-body-dark" style={{marginBottom:'22px'}}>Not everything. Just the one asset that keeps crossing their mind — the bracelet, the old LIC policy, the SIP they started before a dream vacation. They add a name, a note, maybe a photo. That is enough to begin.</p>
                <p className="fp-body-dark">A bank statement tells your family the balance. It never tells them why you started that FD, who gave you that gold, or that the property was always meant for your daughter&apos;s wedding.</p>
              </div>
              <div>
                <p className="fp-body-dark" style={{marginBottom:'32px'}}>Some start with just a name. Details come later. Soult holds both — the number and the meaning behind it.</p>
                <p className="fp-editorial-tagline">Know where everything is today.<br />Make sure they know what it means tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. ASSET CATEGORIES — LIGHT (own component) ══ */}
        <div id="asset-categories">
          <AssetCategories />
        </div>

        {/* ══ 6. SECURITY — DARK ══ */}
        <section className="fp-section-dark">
          <div className="fp-inner">
            <div className="fp-eyebrow">Built for privacy</div>
            <h2 className="fp-h-dark">Security that<br />never asks permission.</h2>
            <div className="fp-security-grid">
              {SECURITY.map((f) => (
                <div className="fp-sec-card" key={f.h}>
                  <div className="fp-sec-dot" />
                  <div className="fp-sec-h">{f.h}</div>
                  <p className="fp-sec-p">{f.p}</p>
                </div>
              ))}
            </div>
            <div className="fp-sec-cta-bar">
              <div>
                <div className="fp-sec-cta-text">Your vault. Your encryption. Your rules.</div>
                <div className="fp-sec-cta-sub">Read how we protect your data — no jargon.</div>
              </div>
              <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <a href="/security" className="fp-btn-outline-light">Security details</a>
                <a href="/login" className="fp-btn-gold">Create Your Vault</a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. STORIES — LIGHT (own component) ══ */}
        <StoriesCarousel />

        {/* ══ 8. CTA — DARK ══ */}
        <section className="fp-section-brown" style={{textAlign:'center'}}>
          <div className="fp-inner" style={{maxWidth:'680px'}}>
            <div className="fp-cta-eyebrow">Start today</div>
            <h2 className="fp-cta-h">Start with just a name.</h2>
            <p className="fp-cta-p">Add one asset today. The rest will follow.<br />Your family will thank you for it.</p>
            <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/login" className="fp-btn-gold">Create Your Asset Vault Free</a>
              <a href="/pricing" className="fp-btn-outline-light">See pricing</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
