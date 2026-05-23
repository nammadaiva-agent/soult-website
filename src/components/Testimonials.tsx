"use client";
import { useEffect, useRef, useState } from "react";

const STORIES = [
  {
    initials: "RN",
    name: "Ravi Nair",
    role: "Software Engineer",
    quote: "After my father passed, it took us 18 months to track down his insurance policies and retirement accounts. I set up Soult the very same week. No family should go through that.",
  },
  {
    initials: "DS",
    name: "Deepak Sharma",
    role: "School Principal",
    quote: "My parents were lifelong civil servants. When they passed, we found multiple bank books and keys with no labels. Three years later we are still sorting it. I added everything I own into Soult the same week.",
  },
  {
    initials: "HG",
    name: "Harpreet Gill",
    role: "NRI · Toronto",
    quote: "I am settled abroad but all my property and assets are back in my home country. My parents are getting older. Soult is the one place where everything is — so my family can act immediately if they ever need to.",
  },
  {
    initials: "SA",
    name: "Suresh Agarwal",
    role: "Business Owner",
    quote: "My wife handled all the paperwork in our house. After her accident I realised I did not know a single account number, not one policy name, nothing. I set up Soult so my sons will never be in that position because of me.",
  },
  {
    initials: "NB",
    name: "Nandita Bose",
    role: "Homemaker",
    quote: "I recorded a ten-minute voice note for my daughter inside Soult. Just things I want her to know — about her family history, about the sacrifices we made, about what kind of woman I hope she becomes.",
  },
  {
    initials: "VD",
    name: "Vikram Desai",
    role: "Pharma Distributor",
    quote: "I had a mild cardiac episode last year. The first thing I did when I got home was not rest — it was open Soult and finish documenting my insurance and my will. My wife did not ask me to. I just knew.",
  },
];

// Duplicate for seamless infinite loop
const LOOPED = [...STORIES, ...STORIES];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const offsetRef = useRef(0);

  useEffect(() => {
    const CARD_WIDTH = 400; // px — matches card width + gap
    const INTERVAL = 3000;  // ms between steps
    const STEP = 1;         // cards to advance each tick

    const tick = setInterval(() => {
      offsetRef.current += STEP;

      // When we've scrolled through the first set, silently reset to start
      if (offsetRef.current >= STORIES.length) {
        setTransitioning(false);
        offsetRef.current = 0;
        setOffset(0);
        // Re-enable transition on next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setTransitioning(true));
        });
      } else {
        setTransitioning(true);
        setOffset(offsetRef.current);
      }
    }, INTERVAL);

    return () => clearInterval(tick);
  }, []);

  return (
    <>
      <style>{`
        .tm-wrap {
          background: #160B08;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        .tm-glow {
          position: absolute;
          width: 800px; height: 800px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(200,155,60,0.05) 0%, transparent 70%);
          left: 50%; top: 50%; transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .tm-header {
          max-width: 1200px; margin: 0 auto 56px;
          padding: 0 64px;
        }
        .tm-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .tm-eyebrow-line { width: 28px; height: 1px; background: #C89B3C; display: inline-block; }
        .tm-heading {
          font-size: clamp(28px, 3vw, 42px); font-weight: 900;
          color: #F5EFE3; letter-spacing: -0.03em; line-height: 1.1; margin: 0;
        }
        .tm-heading em { font-style: normal; color: #C89B3C; }

        /* Carousel viewport — clips overflow */
        .tm-viewport {
          overflow: hidden;
          padding: 12px 0 24px;
        }

        /* Sliding track */
        .tm-track {
          display: flex;
          gap: 20px;
          padding: 0 64px;
          will-change: transform;
        }

        /* Individual card */
        .tm-card {
          background: #241208;
          border: 1px solid rgba(200,155,60,0.12);
          border-radius: 20px;
          padding: 36px 32px 32px;
          display: flex; flex-direction: column; gap: 24px;
          min-width: 380px; max-width: 380px;
          transition: border-color 0.25s, box-shadow 0.25s;
          flex-shrink: 0;
        }
        .tm-card:hover {
          border-color: rgba(200,155,60,0.35);
          box-shadow: 0 12px 48px rgba(0,0,0,0.35);
        }
        .tm-quote-mark {
          font-size: 56px; line-height: 0.6;
          color: rgba(200,155,60,0.22); font-weight: 900;
          user-select: none; font-family: Georgia, serif;
        }
        .tm-quote {
          font-size: 18px; font-weight: 400;
          line-height: 1.75; color: rgba(245,239,227,0.75);
          letter-spacing: -0.01em; margin: 0; flex: 1;
        }
        .tm-divider { height: 1px; background: rgba(200,155,60,0.10); }
        .tm-author { display: flex; align-items: center; gap: 14px; }
        .tm-avatar {
          width: 46px; height: 46px; border-radius: 50%;
          background: rgba(200,155,60,0.10);
          border: 1.5px solid rgba(200,155,60,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; color: #C89B3C;
          letter-spacing: 0.04em; flex-shrink: 0;
        }
        .tm-name { font-size: 15px; font-weight: 700; color: #F5EFE3; margin-bottom: 3px; }
        .tm-role { font-size: 12px; color: rgba(245,239,227,0.35); }

        /* Edge fades */
        .tm-viewport { position: relative; }
        .tm-fade-left, .tm-fade-right {
          position: absolute; top: 0; bottom: 0; width: 120px;
          pointer-events: none; z-index: 2;
        }
        .tm-fade-left  { left: 0;  background: linear-gradient(to right, #160B08, transparent); }
        .tm-fade-right { right: 0; background: linear-gradient(to left,  #160B08, transparent); }

        @media (max-width: 720px) {
          .tm-wrap { padding: 72px 0; }
          .tm-header { padding: 0 24px; }
          .tm-track { padding: 0 24px; }
          .tm-card { min-width: 300px; max-width: 300px; }
        }
      `}</style>

      <section className="tm-wrap">
        <div className="tm-glow" />

        <div className="tm-header">
          <div className="tm-eyebrow">
            <span className="tm-eyebrow-line" />
            Real Families · Real Stories
          </div>
          <h2 className="tm-heading">
            Stories that remind us<br /><em>why this matters.</em>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <div className="tm-fade-left" />
          <div className="tm-fade-right" />
          <div className="tm-viewport">
            <div
              ref={trackRef}
              className="tm-track"
              style={{
                transform: `translateX(calc(-${offset} * (380px + 20px)))`,
                transition: transitioning ? "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              }}
            >
              {LOOPED.map((s, i) => (
                <div className="tm-card" key={i}>
                  <div className="tm-quote-mark">&ldquo;</div>
                  <p className="tm-quote">{s.quote}</p>
                  <div className="tm-divider" />
                  <div className="tm-author">
                    <div className="tm-avatar">{s.initials}</div>
                    <div>
                      <div className="tm-name">{s.name}</div>
                      <div className="tm-role">{s.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
