"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const PROTECT_ITEMS = {
  financial: [
    { title: "Money, property & valuables", sub: "Assets, investments, insurance, property", href: "/financial" },
    { title: "Important documents & Will", sub: "Will, POA, legal records", href: "/wisdom-spiritual" },
    { title: "Medical wishes & emergency info", sub: "Directives, organ donation, health contacts", href: "/physical-health" },
  ],
  personal: [
    { title: "Memories, stories & voice notes", sub: "Personal legacy, family stories, life lessons", href: "/wisdom-spiritual" },
    { title: "Relationships & trusted people", sub: "Nominees, executors, loved ones", href: "/relationships" },
  ],
};

const WHY_ITEMS = {
  understand: [
    { title: "How Soult works", sub: "The vault, executor flow, and access", href: "/#how-it-works" },
    { title: "Security & privacy", sub: "Encryption, data residency, zero-trust", href: "/security" },
    { title: "Executor & handover flow", sub: "How your family gets access when it matters", href: "/security#under-the-hood" },
    { title: "Legal validity", sub: "What Soult can and cannot do legally", href: "/terms" },
  ],
  learn: [
    { title: "Security Whitepaper", sub: "Human-centric bridge for your family", href: "/security" },
    { title: "Blog & life guides", sub: "Planning guides and insights", href: "/blog" },
    { title: "Help centre", sub: "Common questions answered", href: "/faq" },
    { title: "About Soult", sub: "Who we are and why we built this", href: "/about" },
  ],
};

const BUSINESS_ITEMS = [
  { title: "Corporate Employee Wellness", sub: "Life continuity as a benefit. Bulk plans, HR dashboard, 4-week rollout. 60-day pilot free.", href: "/pricing" },
  { title: "Channel Partners", sub: "Referral codes and commission for advisors, Wealth managers, CAs, agents, and lawyers", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<null | "protect" | "why" | "business">(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1150) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDrop(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const toggle = (drop: "protect" | "why" | "business") =>
    setOpenDrop(p => p === drop ? null : drop);

  return (
    <>
      <style>{`
        .sd-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 900;
          background: rgba(48,28,26,0.92);
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(215,181,109,0.15);
          transition: background 0.3s, box-shadow 0.3s;
        }
        .sd-nav.scrolled {
          background: rgba(48,28,26,0.98);
          box-shadow: 0 1px 0 rgba(215,181,109,0.25);
        }
        .sd-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 32px; height: 76px;
          display: flex; align-items: center; gap: 0;
        }
        .sd-logo { text-decoration: none; flex-shrink: 0; display: flex; align-items: center; }

        .sd-nav-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none; margin: 0 auto; padding: 0;
        }
        .sd-link {
          font-size: 15px; font-weight: 500; letter-spacing: 0.01em;
          color: rgba(245,236,216,0.75); padding: 6px 16px;
          text-decoration: none; transition: color 0.2s; border-radius: 4px;
          white-space: nowrap;
        }
        .sd-link:hover { color: var(--gold); }

        /* Dropdown trigger */
        .sd-drop-wrap { position: relative; }
        .sd-drop-trigger {
          font-size: 15px; font-weight: 500; letter-spacing: 0.01em;
          color: rgba(245,236,216,0.75); padding: 6px 16px;
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: color 0.2s; border-radius: 4px; white-space: nowrap;
          font-family: inherit;
        }
        .sd-drop-trigger:hover, .sd-drop-trigger.open { color: var(--gold); }
        .sd-drop-chevron { font-size: 9px; transition: transform 0.25s; opacity: 0.6; margin-top: 1px; }
        .sd-drop-chevron.open { transform: rotate(180deg); opacity: 1; }

        /* Mega dropdown */
        .sd-mega {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%);
          min-width: 680px;
          background: #fff; border-radius: 12px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.18);
          overflow: hidden;
          opacity: 0; transform: translateX(-50%) translateY(-6px);
          pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          z-index: 1000;
        }
        .sd-mega.open {
          opacity: 1; transform: translateX(-50%) translateY(0);
          pointer-events: all;
        }
        .sd-mega-head {
          background: #f9f6f0; padding: 20px 24px;
          border-bottom: 1px solid #ede8df;
          display: flex; align-items: center; gap: 14px;
        }
        .sd-mega-head-icon { font-size: 26px; }
        .sd-mega-head-text h3 { font-size: 13px; font-weight: 800; color: #301C1A; margin-bottom: 2px; letter-spacing: -0.01em; }
        .sd-mega-head-text p { font-size: 12px; color: #9b7c5c; line-height: 1.5; }
        .sd-mega-body { display: grid; grid-template-columns: 1fr 1fr; }
        .sd-mega-col { padding: 20px; }
        .sd-mega-col:first-child { border-right: 1px solid #f0ebe3; }
        .sd-mega-col-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #D7B56D; margin-bottom: 12px;
          padding-bottom: 8px; border-bottom: 1px solid #f0ebe3;
        }
        .sd-mega-item {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 10px; border-radius: 8px; text-decoration: none;
          transition: background 0.2s; margin-bottom: 2px;
        }
        .sd-mega-item:hover { background: #f9f6f0; }
        .sd-mega-item-icon {
          width: 34px; height: 34px; border-radius: 8px;
          background: #f3ede4; display: flex; align-items: center;
          justify-content: center; font-size: 16px; flex-shrink: 0;
        }
        .sd-mega-item-body h4 { font-size: 13px; font-weight: 700; color: #1a1a1a; margin-bottom: 2px; }
        .sd-mega-item-body p { font-size: 11px; color: #7c6b5c; line-height: 1.5; }
        .sd-mega-footer {
          background: #f9f6f0; border-top: 1px solid #ede8df;
          padding: 12px 24px; display: flex; gap: 16px; align-items: center;
        }
        .sd-mega-footer-cta {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #301C1A;
          background: #D7B56D; padding: 8px 20px; border-radius: 4px;
          text-decoration: none; transition: background 0.2s;
        }
        .sd-mega-footer-cta:hover { background: #e8cb8a; }
        .sd-mega-footer-link { font-size: 12px; color: #9b7c5c; text-decoration: none; transition: color 0.2s; }
        .sd-mega-footer-link:hover { color: #301C1A; }

        /* For Business — smaller dropdown */
        .sd-drop-small {
          position: absolute; top: calc(100% + 12px); right: 0;
          width: 320px; background: #fff; border-radius: 12px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.18);
          overflow: hidden;
          opacity: 0; transform: translateY(-6px);
          pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          z-index: 1000;
        }
        .sd-drop-small.open { opacity: 1; transform: translateY(0); pointer-events: all; }
        .sd-drop-small-inner { padding: 12px; }

        /* For Business trigger button */
        .sd-btn-business {
          font-size: 13px; font-weight: 600; letter-spacing: 0.02em;
          color: rgba(245,236,216,0.75);
          border: 1.5px solid rgba(215,181,109,0.30); padding: 7px 14px;
          background: transparent; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: border-color 0.2s, color 0.2s; border-radius: 4px;
          font-family: inherit; white-space: nowrap;
        }
        .sd-btn-business:hover, .sd-btn-business.open { border-color: var(--gold); color: var(--gold); }

        /* CTAs */
        .sd-ctas { display: flex; gap: 10px; flex-shrink: 0; align-items: center; }
        .sd-btn-outline {
          font-size: 13px; font-weight: 600; letter-spacing: 0.04em;
          color: var(--beige-2);
          border: 1.5px solid rgba(215,181,109,0.28); padding: 8px 18px;
          background: transparent; cursor: pointer; text-decoration: none;
          transition: background 0.2s, border-color 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .sd-btn-outline:hover { background: rgba(215,181,109,0.08); border-color: var(--gold); }
        .sd-btn-gold {
          font-size: 13px; font-weight: 700; letter-spacing: 0.04em;
          text-transform: uppercase; color: #301C1A;
          background: var(--gold); padding: 8px 18px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .sd-btn-gold:hover { background: var(--gold-light); }

        /* Hamburger */
        .sd-hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 4px; margin-left: auto;
          background: none; border: none;
        }
        .sd-hamburger span {
          width: 22px; height: 2px; background: var(--beige);
          border-radius: 2px; display: block; transition: all 0.25s;
        }

        /* Mobile menu */
        .sd-mobile {
          display: none; position: fixed;
          top: 76px; left: 0; right: 0; bottom: 0;
          background: rgba(48,28,26,0.99);
          backdrop-filter: blur(16px); z-index: 899;
          flex-direction: column; padding: 24px;
          overflow-y: auto;
        }
        .sd-mobile.open { display: flex; }
        .sd-mob-section { font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold); margin: 20px 0 8px; }
        .sd-mob-link {
          font-size: 15px; font-weight: 600; color: rgba(245,236,216,0.85);
          padding: 12px 0; border-bottom: 1px solid var(--border);
          text-decoration: none; display: flex; align-items: center;
          justify-content: space-between; transition: color 0.2s;
        }
        .sd-mob-link:hover { color: var(--gold); }
        .sd-mob-sub { font-size: 12px; color: var(--text-muted); display: block; margin-top: 2px; font-weight: 400; }
        .sd-mob-btns { margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }

        @media (max-width: 1150px) {
          .sd-nav-links, .sd-ctas, .sd-drop-wrap { display: none; }
          .sd-hamburger { display: flex; }
        }
        @media (max-width: 640px) { .sd-inner { padding: 0 20px; } }
      `}</style>

      <nav className={`sd-nav${scrolled ? " scrolled" : ""}`} ref={navRef}>
        <div className="sd-inner">
          <Link href="/" className="sd-logo" aria-label="Soult Digital home">
            <Image src="/soult-logo.png" alt="Soult Digital" width={110} height={38} style={{ objectFit: "contain", display: "block" }} priority />
          </Link>

          {/* Desktop nav */}
          <ul className="sd-nav-links">
            {/* What You Can Protect */}
            <li>
              <div className="sd-drop-wrap">
                <button className={`sd-drop-trigger${openDrop === "protect" ? " open" : ""}`} onClick={() => toggle("protect")}>
                  What you can protect
                  <span className={`sd-drop-chevron${openDrop === "protect" ? " open" : ""}`}>▼</span>
                </button>
                <div className={`sd-mega${openDrop === "protect" ? " open" : ""}`}>
                  <div className="sd-mega-head">
                    <div className="sd-mega-head-text" style={{gridColumn:"1/-1"}}>
                      <h3>Everything your family should never have to search for.</h3>
                      <p>Bring together the practical and the personal — assets, documents, memories, and final wishes.</p>
                    </div>
                  </div>
                  <div className="sd-mega-body">
                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Financial &amp; legal</div>
                      {PROTECT_ITEMS.financial.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setOpenDrop(null)}>
                          <div className="sd-mega-item-body"><h4>{item.title}</h4><p>{item.sub}</p></div>
                        </Link>
                      ))}
                    </div>
                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Personal legacy</div>
                      {PROTECT_ITEMS.personal.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setOpenDrop(null)}>
                          <div className="sd-mega-item-body"><h4>{item.title}</h4><p>{item.sub}</p></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="sd-mega-footer">
                    <Link href="https://app.soultdigital.com/signup" className="sd-mega-footer-cta" onClick={() => setOpenDrop(null)}>Get Started Free</Link>
                    <Link href="/pricing" className="sd-mega-footer-link" onClick={() => setOpenDrop(null)}>View pricing →</Link>
                    <Link href="/blog" className="sd-mega-footer-link" onClick={() => setOpenDrop(null)}>Read guides →</Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Why Families Choose Soult */}
            <li>
              <div className="sd-drop-wrap">
                <button className={`sd-drop-trigger${openDrop === "why" ? " open" : ""}`} onClick={() => toggle("why")}>
                  Why families choose Soult
                  <span className={`sd-drop-chevron${openDrop === "why" ? " open" : ""}`}>▼</span>
                </button>
                <div className={`sd-mega${openDrop === "why" ? " open" : ""}`}>
                  <div className="sd-mega-body">
                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Understand Soult</div>
                      {WHY_ITEMS.understand.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setOpenDrop(null)}>
                          <div className="sd-mega-item-body"><h4>{item.title}</h4><p>{item.sub}</p></div>
                        </Link>
                      ))}
                    </div>
                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Learn more</div>
                      {WHY_ITEMS.learn.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setOpenDrop(null)}>
                          <div className="sd-mega-item-body"><h4>{item.title}</h4><p>{item.sub}</p></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="sd-mega-footer">
                    <Link href="https://app.soultdigital.com/signup" className="sd-mega-footer-cta" onClick={() => setOpenDrop(null)}>Get Started Free</Link>
                    <Link href="/blog" className="sd-mega-footer-link" onClick={() => setOpenDrop(null)}>Read our blog →</Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Pricing */}
            <li>
              <Link href="/pricing" className="sd-link">Pricing</Link>
            </li>
          </ul>

          {/* Right side CTAs */}
          <div className="sd-ctas">
            {/* For Business dropdown */}
            <div className="sd-drop-wrap">
              <button className={`sd-btn-business${openDrop === "business" ? " open" : ""}`} onClick={() => toggle("business")}>
                For Business
                <span className={`sd-drop-chevron${openDrop === "business" ? " open" : ""}`}>▼</span>
              </button>
              <div className={`sd-drop-small${openDrop === "business" ? " open" : ""}`}>
                <div className="sd-drop-small-inner">
                  {BUSINESS_ITEMS.map((item, i) => (
                    <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setOpenDrop(null)}>
                      <div className="sd-mega-item-body"><h4>{item.title}</h4><p>{item.sub}</p></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/vault" className="sd-btn-outline">My Vault</Link>
            <Link href="https://app.soultdigital.com/signup" className="sd-btn-gold">Get Started Free</Link>
          </div>

          <button className="sd-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`sd-mobile${menuOpen ? " open" : ""}`}>
        <div className="sd-mob-section">What You Can Protect</div>
        {[...PROTECT_ITEMS.financial, ...PROTECT_ITEMS.personal].map((item, i) => (
          <Link key={i} href={item.href} className="sd-mob-link" onClick={() => setMenuOpen(false)}>
            <span>{item.title}<span className="sd-mob-sub">{item.sub}</span></span>
            <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
          </Link>
        ))}
        <div className="sd-mob-section">Why Families Choose Soult</div>
        {WHY_ITEMS.understand.map((item, i) => (
          <Link key={i} href={item.href} className="sd-mob-link" onClick={() => setMenuOpen(false)}>
            <span>{item.title}<span className="sd-mob-sub">{item.sub}</span></span>
            <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
          </Link>
        ))}
        {WHY_ITEMS.learn.map((item, i) => (
          <Link key={i} href={item.href} className="sd-mob-link" onClick={() => setMenuOpen(false)}>
            <span>{item.title}<span className="sd-mob-sub">{item.sub}</span></span>
            <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
          </Link>
        ))}
        <div className="sd-mob-section">More</div>
        <Link href="/pricing" className="sd-mob-link" onClick={() => setMenuOpen(false)}>
          <span>Pricing</span>
          <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
        </Link>
        <Link href="/pricing" className="sd-mob-link" onClick={() => setMenuOpen(false)}>
          <span>Corporate Employee Wellness<span className="sd-mob-sub">Life continuity as a benefit. Bulk plans, HR dashboard, 4-week rollout. 60-day pilot free.</span></span>
          <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
        </Link>
        <Link href="/pricing" className="sd-mob-link" onClick={() => setMenuOpen(false)}>
          <span>Channel Partners<span className="sd-mob-sub">Referral codes and commission for advisors, Wealth managers, CAs, agents, and lawyers</span></span>
          <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
        </Link>
        <div className="sd-mob-btns">
          <Link href="/vault" className="sd-btn-outline" style={{ textAlign: "center" }}>My Vault</Link>
          <Link href="https://app.soultdigital.com/signup" className="sd-btn-gold" style={{ textAlign: "center" }}>Get Started Free</Link>
        </div>
      </div>
    </>
  );
}
