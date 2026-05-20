"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    badge: "Your Family's Life Vault",
    headline: "Everything your family\nshould never have\nto search for.",
    sub: "Assets, documents, memories, and final wishes — all in one secure place, ready when your family needs it most.",
    cta: { label: "Start Free — No card required", href: "https://app.soultdigital.com/signup" },
    ghost: { label: "See How It Works", href: "#how-it-works" },
    accent: "rgba(215,181,109,0.10)",
    icon: "🗄️",
  },
  {
    badge: "Financial & Legal Protection",
    headline: "Your wealth,\nyour property,\nyour documents.",
    sub: "Bank accounts, investments, property deeds, insurance policies, your Will and POA — organised and encrypted, passed on with clarity.",
    cta: { label: "Protect Your Assets", href: "https://app.soultdigital.com/signup" },
    ghost: { label: "See What's Included", href: "#features" },
    accent: "rgba(102,45,41,0.18)",
    icon: "💰",
  },
  {
    badge: "Medical & Emergency",
    headline: "Your wishes,\nhonoured exactly\nas you'd want.",
    sub: "Healthcare directives, organ donation preferences, emergency contacts and insurance — accessible to the right people at the right moment.",
    cta: { label: "Secure Your Wishes", href: "https://app.soultdigital.com/signup" },
    ghost: { label: "Learn More", href: "#features" },
    accent: "rgba(0,80,80,0.15)",
    icon: "🏥",
  },
  {
    badge: "Personal Legacy",
    headline: "The stories\nthat make your\nfamily, your family.",
    sub: "Voice notes, handwritten letters, life lessons, family histories — preserve the soul of your legacy, not just the assets.",
    cta: { label: "Start Preserving Memories", href: "https://app.soultdigital.com/signup" },
    ghost: { label: "Explore Memory Vault", href: "#features" },
    accent: "rgba(215,181,109,0.08)",
    icon: "🎙️",
  },
  {
    badge: "Trusted Nominees & Executors",
    headline: "The right people\nget the right access\nat the right time.",
    sub: "Add nominees, define exactly what they can see, and set event-based access triggers. No lawyers required to get started.",
    cta: { label: "Set Up Your Nominees", href: "https://app.soultdigital.com/signup" },
    ghost: { label: "See Pricing", href: "/pricing" },
    accent: "rgba(80,40,20,0.20)",
    icon: "👨‍👩‍👧",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(i => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, paused]);

  const slide = SLIDES[active];

  return (
    <>
      <style>{`
        .hc-wrap {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex; align-items: center;
          padding: 120px 32px 80px;
          position: relative; overflow: hidden;
        }

        /* Animated background accent */
        .hc-bg-accent {
          position: absolute; inset: 0;
          transition: background 0.8s ease;
          pointer-events: none;
        }
        .hc-bg-base {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 60% at 80% 40%, rgba(215,181,109,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 80%, rgba(102,45,41,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .hc-inner {
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
          position: relative; z-index: 1;
        }

        /* Content side */
        .hc-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(215,181,109,0.1);
          border: 1px solid var(--border-strong);
          padding: 6px 14px; margin-bottom: 28px;
          animation: hc-fadein 0.5s ease both;
        }
        .hc-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }

        .hc-headline {
          font-size: clamp(36px, 5vw, 66px);
          font-weight: 900; letter-spacing: -0.03em; line-height: 1.04;
          color: var(--beige); margin-bottom: 24px;
          white-space: pre-line;
          animation: hc-fadein 0.55s ease both;
        }
        .hc-sub {
          font-size: 17px; color: var(--text-muted);
          line-height: 1.75; max-width: 460px; margin-bottom: 40px;
          animation: hc-fadein 0.6s ease both;
        }
        @keyframes hc-fadein {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hc-ctas { display: flex; gap: 14px; flex-wrap: wrap; animation: hc-fadein 0.65s ease both; }
        .hc-btn-gold {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #301C1A;
          background: var(--gold); padding: 14px 28px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .hc-btn-gold:hover { background: var(--gold-light); }
        .hc-btn-ghost {
          font-size: 12px; font-weight: 600;
          color: var(--beige-2); background: transparent;
          padding: 14px 20px; border: 1.5px solid var(--border);
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .hc-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

        /* Trust line */
        .hc-trust {
          display: flex; align-items: center; gap: 20px;
          margin-top: 36px; flex-wrap: wrap;
          animation: hc-fadein 0.7s ease both;
        }
        .hc-trust-item {
          font-size: 12px; font-weight: 500; color: var(--text-muted);
          display: flex; align-items: center; gap: 6px;
        }
        .hc-trust-item::before { content: '✓'; color: var(--gold); font-weight: 800; }

        /* Visual side — slide cards */
        .hc-visual {
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .hc-card {
          width: 100%; max-width: 420px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-strong);
          border-radius: 16px; padding: 36px;
          position: relative; overflow: hidden;
          animation: hc-fadein 0.5s ease both;
          backdrop-filter: blur(4px);
        }
        .hc-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(215,181,109,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .hc-card-icon {
          font-size: 52px; margin-bottom: 20px; display: block;
          filter: drop-shadow(0 4px 16px rgba(215,181,109,0.3));
        }
        .hc-card-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .hc-card-title {
          font-size: 20px; font-weight: 800; color: var(--beige);
          letter-spacing: -0.01em; line-height: 1.2; margin-bottom: 16px;
        }
        .hc-card-items { list-style: none; }
        .hc-card-items li {
          font-size: 13px; color: var(--text-muted); padding: 6px 0;
          border-bottom: 1px solid rgba(215,181,109,0.06);
          display: flex; align-items: center; gap: 8px;
        }
        .hc-card-items li:last-child { border-bottom: none; }
        .hc-card-items li::before { content: '·'; color: var(--gold); font-size: 18px; line-height: 1; }

        /* Slide indicators */
        .hc-indicators {
          display: flex; align-items: center; gap: 8px;
          margin-top: 48px; animation: hc-fadein 0.7s ease both;
        }
        .hc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--border-strong); cursor: pointer;
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
          border: none; padding: 0;
        }
        .hc-dot.active {
          width: 24px; border-radius: 3px;
          background: var(--gold);
        }
        .hc-arrows {
          display: flex; gap: 8px; margin-left: auto;
        }
        .hc-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid var(--border-strong);
          background: transparent; color: var(--beige-2);
          font-size: 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .hc-arrow:hover { border-color: var(--gold); color: var(--gold); background: rgba(215,181,109,0.06); }

        /* Progress bar */
        .hc-progress {
          position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
          background: rgba(215,181,109,0.1);
        }
        .hc-progress-bar {
          height: 100%; background: var(--gold);
          animation: hc-progress 5.5s linear;
        }
        @keyframes hc-progress { from { width: 0% } to { width: 100% } }

        /* Slide number */
        .hc-slide-num {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          color: rgba(245,236,216,0.25); margin-left: 12px;
        }

        @media (max-width: 1024px) {
          .hc-inner { grid-template-columns: 1fr; gap: 48px; }
          .hc-visual { display: none; }
        }
        @media (max-width: 640px) {
          .hc-wrap { padding: 100px 20px 60px; }
          .hc-headline { white-space: normal; }
        }
      `}</style>

      <section
        className="hc-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="hc-bg-accent"
          style={{ background: `radial-gradient(ellipse 70% 70% at 60% 40%, ${slide.accent} 0%, transparent 65%)` }}
        />
        <div className="hc-bg-base" />

        <div className="hc-inner">
          {/* Content */}
          <div key={active}>
            <div className="hc-badge">
              <span className="hc-badge-dot" />
              {slide.badge}
            </div>
            <h1 className="hc-headline">{slide.headline}</h1>
            <p className="hc-sub">{slide.sub}</p>
            <div className="hc-ctas">
              <Link href={slide.cta.href} className="hc-btn-gold">{slide.cta.label}</Link>
              <Link href={slide.ghost.href} className="hc-btn-ghost">{slide.ghost.label}</Link>
            </div>
            <div className="hc-trust">
              <span className="hc-trust-item">Free to start</span>
              <span className="hc-trust-item">AES-256 encrypted</span>
              <span className="hc-trust-item">10,000+ families</span>
            </div>

            {/* Controls */}
            <div className="hc-indicators">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`hc-dot${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <span className="hc-slide-num">{String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
              <div className="hc-arrows">
                <button className="hc-arrow" onClick={prev} aria-label="Previous">‹</button>
                <button className="hc-arrow" onClick={next} aria-label="Next">›</button>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="hc-visual">
            <div className="hc-card" key={active + "-card"}>
              <span className="hc-card-icon">{slide.icon}</span>
              <div className="hc-card-label">
                {["Financial & Legal", "Asset Protection", "Medical Wishes", "Memories", "Nominees"][active]}
              </div>
              <div className="hc-card-title">
                {["Bank accounts, investments,\nproperty & insurance", "Wills, POA &\nlegal documents", "Health directives &\nemergency info", "Voice notes, stories\n& family letters", "Nominees, executors\n& trusted people"][active]}
              </div>
              <ul className="hc-card-items">
                {[
                  ["Savings & current accounts", "Mutual funds & stocks", "Properties & valuables", "Life & health insurance"],
                  ["Last Will & Testament", "Power of Attorney", "Legal records & deeds", "Safe deposit details"],
                  ["Healthcare directives", "Organ donation wishes", "Emergency contacts", "Medical history"],
                  ["Voice messages", "Family stories", "Letters to loved ones", "Life lessons & wisdom"],
                  ["Nominee profiles", "Access permissions", "Event-based triggers", "Executor guidance"],
                ][active].map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="hc-progress">
                <div className="hc-progress-bar" key={active} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
