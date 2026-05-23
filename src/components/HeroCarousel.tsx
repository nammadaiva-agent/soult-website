"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import type { HeroSlide } from "@/lib/supabase";

// Fallback slides used when DB has no active slides configured
const FALLBACK_SLIDES: Omit<HeroSlide, "id" | "created_at">[] = [
  {
    badge: "Your Family's Life Vault",
    headline: "Everything your family\nshould never have\nto search for.",
    sub_text: "Assets, documents, memories, and final wishes — all in one secure place, ready when your family needs it most.",
    cta_label: "Start Free — No card required",
    cta_url: "/get-started",
    ghost_label: "See How It Works",
    ghost_url: "#how-it-works",
    image_url: null,
    image_position: "center 30%",
    sort_order: 0,
    active: true,
  },
  {
    badge: "Financial & Legal Protection",
    headline: "Your wealth,\nyour property,\nyour documents.",
    sub_text: "Bank accounts, investments, property deeds, insurance policies, your Will and POA — organised and encrypted, passed on with clarity.",
    cta_label: "Protect Your Assets",
    cta_url: "/get-started",
    ghost_label: "See What's Included",
    ghost_url: "#features",
    image_url: null,
    image_position: "center 30%",
    sort_order: 1,
    active: true,
  },
  {
    badge: "Medical & Emergency",
    headline: "Your wishes,\nhonoured exactly\nas you'd want.",
    sub_text: "Healthcare directives, organ donation preferences, emergency contacts and insurance — accessible to the right people at the right moment.",
    cta_label: "Secure Your Wishes",
    cta_url: "/get-started",
    ghost_label: "Learn More",
    ghost_url: "#features",
    image_url: null,
    image_position: "center 30%",
    sort_order: 2,
    active: true,
  },
  {
    badge: "Personal Legacy",
    headline: "The stories\nthat make your\nfamily, your family.",
    sub_text: "Voice notes, handwritten letters, life lessons, family histories — preserve the soul of your legacy, not just the assets.",
    cta_label: "Start Preserving Memories",
    cta_url: "/get-started",
    ghost_label: "Explore Memory Vault",
    ghost_url: "#features",
    image_url: null,
    image_position: "center 30%",
    sort_order: 3,
    active: true,
  },
  {
    badge: "Trusted Nominees & Executors",
    headline: "The right people\nget the right access\nat the right time.",
    sub_text: "Add nominees, define exactly what they can see, and set event-based access triggers. No lawyers required to get started.",
    cta_label: "Set Up Your Nominees",
    cta_url: "/get-started",
    ghost_label: "See Pricing",
    ghost_url: "/pricing",
    image_url: null,
    image_position: "center 30%",
    sort_order: 4,
    active: true,
  },
];

// Accent colours per slide position (cycles)
const ACCENTS = [
  "rgba(215,181,109,0.10)",
  "rgba(102,45,41,0.18)",
  "rgba(0,80,80,0.15)",
  "rgba(215,181,109,0.08)",
  "rgba(80,40,20,0.20)",
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState<typeof FALLBACK_SLIDES>(FALLBACK_SLIDES);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Fetch live slides from DB
  useEffect(() => {
    fetch("/api/admin/hero-slides")
      .then(r => r.json())
      .then((data: HeroSlide[]) => {
        const active = data.filter(s => s.active).sort((a, b) => a.sort_order - b.sort_order);
        if (active.length > 0) setSlides(active);
      })
      .catch(() => {}) // silently fall back
      .finally(() => setLoaded(true));
  }, []);

  const next = useCallback(() => setActive(i => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setActive(i => (i - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || !loaded) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, paused, loaded]);

  // Reset to slide 0 if slides change
  useEffect(() => { setActive(0); }, [slides.length]);

  const slide = slides[active] ?? slides[0];
  const accent = ACCENTS[active % ACCENTS.length];

  return (
    <>
      <style>{`
        .hc-wrap {
          height: 100vh;
          display: flex; align-items: center;
          padding: 110px 80px 60px;
          position: relative; overflow: hidden;
          background: var(--bg-primary);
        }
        /* Full-bleed background image */
        .hc-bg-img {
          position: absolute; top: 72px; left: 0; right: 0; bottom: 0;
          background-size: cover;
          transition: opacity 0.8s ease;
        }
        .hc-bg-img::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(48,28,26,0.82) 0%,
            rgba(48,28,26,0.55) 40%,
            rgba(48,28,26,0.15) 70%,
            rgba(48,28,26,0.05) 100%
          );
        }
        .hc-bg-accent {
          position: absolute; top: 72px; left: 0; right: 0; bottom: 0;
          transition: background 0.8s ease;
          pointer-events: none; z-index: 1;
        }
        .hc-bg-base {
          position: absolute; top: 72px; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 50% 60% at 80% 40%, rgba(215,181,109,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 1;
        }
        .hc-inner {
          max-width: 1280px; margin: 0 auto; width: 100%;
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: flex-start;
        }
        .hc-text-block { max-width: 640px; }
        .hc-anchor { max-width: 640px; margin-top: 32px; }

        /* Content */
        .hc-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(215,181,109,0.12);
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
          font-size: clamp(32px, 4.5vw, 58px);
          font-weight: 700; letter-spacing: -0.02em; line-height: 1.1;
          color: var(--beige); margin-bottom: 16px;
          white-space: pre-line;
          animation: hc-fadein 0.55s ease both;
        }
        .hc-sub {
          font-size: 16px; color: rgba(245,236,216,0.72);
          line-height: 1.7; max-width: 520px; margin-bottom: 0;
          animation: hc-fadein 0.6s ease both;
        }
        @keyframes hc-fadein {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hc-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
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
          font-size: 12px; font-weight: 600; color: var(--beige-2);
          background: transparent; padding: 14px 20px;
          border: 1.5px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .hc-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }

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

        /* Controls */
        .hc-controls {
          display: flex; align-items: center; gap: 8px;
          margin-top: 24px;
        }
        .hc-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(215,181,109,0.3); cursor: pointer;
          transition: background 0.3s, width 0.3s, border-radius 0.3s;
          border: none; padding: 0; flex-shrink: 0;
        }
        .hc-dot.active { width: 24px; border-radius: 3px; background: var(--gold); }
        .hc-arrows { display: flex; gap: 8px; margin-left: 16px; }
        .hc-arrow {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1.5px solid var(--border-strong);
          background: transparent; color: var(--beige-2);
          font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          line-height: 1;
        }
        .hc-arrow:hover { border-color: var(--gold); color: var(--gold); background: rgba(215,181,109,0.06); }

        @media (max-width: 640px) {
          .hc-wrap { padding: 100px 24px 48px; height: 100vh; }
          .hc-headline { white-space: normal; }
        }
      `}</style>

      <section
        className="hc-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background image (when set from dashboard) */}
        {slide.image_url && (
          <div
            key={active + "-bg"}
            className="hc-bg-img"
            style={{ backgroundImage: `url(${slide.image_url})`, backgroundPosition: slide.image_position ?? 'center 30%' }}
          />
        )}
        <div
          className="hc-bg-accent"
          style={{ background: `radial-gradient(ellipse 70% 70% at 60% 40%, ${accent} 0%, transparent 65%)` }}
        />
        {!slide.image_url && <div className="hc-bg-base" />}

        <div className="hc-inner">
          {/* Animated text — re-mounts per slide */}
          <div key={active + "-content"} className="hc-text-block">
            {slide.badge && (
              <div className="hc-badge">
                <span className="hc-badge-dot" />
                {slide.badge}
              </div>
            )}
            <h1 className="hc-headline">{slide.headline}</h1>
            {slide.sub_text && <p className="hc-sub">{slide.sub_text}</p>}
          </div>

          {/* Anchored — never re-mounts, CTAs + controls stay put */}
          <div className="hc-anchor">
            <div className="hc-ctas">
              {slide.cta_label && slide.cta_url && (
                <Link href={slide.cta_url} className="hc-btn-gold">{slide.cta_label}</Link>
              )}
              {slide.ghost_label && slide.ghost_url && (
                <Link href={slide.ghost_url} className="hc-btn-ghost">{slide.ghost_label}</Link>
              )}
            </div>
            <div className="hc-controls">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hc-dot${i === active ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <div className="hc-arrows">
                <button className="hc-arrow" onClick={prev} aria-label="Previous">‹</button>
                <button className="hc-arrow" onClick={next} aria-label="Next">›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
