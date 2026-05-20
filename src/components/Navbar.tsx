"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const PROTECT_ITEMS = {
  financial: [
    { icon: "💰", title: "Money, Property & Valuables", sub: "Bank accounts, investments, property deeds, insurance & more", href: "#features" },
    { icon: "📜", title: "Your Will & Legal Documents", sub: "Last Will, Power of Attorney, POA, legal records & safe deposit info", href: "#features" },
    { icon: "🏥", title: "Medical Wishes & Emergency Info", sub: "Healthcare directives, organ donation, emergency contacts & doctors", href: "#features" },
  ],
  personal: [
    { icon: "🎙️", title: "Memories, Stories & Voice Notes", sub: "Record life lessons, family stories, letters & personal legacies", href: "#features" },
    { icon: "👨‍👩‍👧", title: "Your Nominees & Trusted People", sub: "Add nominees, set permissions, appoint executors — all guided", href: "#features" },
  ],
};

const TOP_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1100) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <>
      <style>{`
        .sd-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 900;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .sd-nav.scrolled {
          background: rgba(48,28,26,0.97);
          backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 rgba(215,181,109,0.15);
        }
        .sd-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 32px; height: 72px;
          display: flex; align-items: center; gap: 0;
        }
        .sd-logo { text-decoration: none; flex-shrink: 0; display: flex; align-items: center; }

        /* Desktop links — centred between logo and CTAs */
        .sd-nav-links {
          display: flex; align-items: center; gap: 2px;
          list-style: none; margin: 0 auto; padding: 0;
        }
        .sd-link {
          font-size: 13px; font-weight: 500; letter-spacing: 0.03em;
          color: var(--text-muted); padding: 6px 14px;
          text-decoration: none; transition: color 0.2s; border-radius: 4px;
          white-space: nowrap;
        }
        .sd-link:hover { color: var(--gold); }

        /* Protect dropdown trigger */
        .sd-drop-wrap { position: relative; }
        .sd-drop-trigger {
          font-size: 13px; font-weight: 500; letter-spacing: 0.03em;
          color: var(--text-muted); padding: 6px 14px;
          background: none; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: color 0.2s; border-radius: 4px; white-space: nowrap;
          font-family: inherit;
        }
        .sd-drop-trigger:hover, .sd-drop-trigger.open { color: var(--gold); }
        .sd-drop-chevron {
          font-size: 10px; transition: transform 0.25s;
          opacity: 0.6; margin-top: 1px;
        }
        .sd-drop-chevron.open { transform: rotate(180deg); opacity: 1; }

        /* Mega dropdown */
        .sd-mega {
          position: absolute; top: calc(100% + 12px); left: 50%;
          transform: translateX(-50%);
          width: 680px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 48px rgba(0,0,0,0.18), 0 1px 0 rgba(215,181,109,0.15);
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
          background: #f9f6f0;
          padding: 20px 24px;
          border-bottom: 1px solid #ede8df;
          display: flex; align-items: center; gap: 14px;
        }
        .sd-mega-head-icon { font-size: 28px; }
        .sd-mega-head-text h3 {
          font-size: 13px; font-weight: 800; color: #301C1A; margin-bottom: 2px;
          letter-spacing: -0.01em;
        }
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
          transition: background 0.2s; cursor: pointer;
          margin-bottom: 2px;
        }
        .sd-mega-item:hover { background: #f9f6f0; }
        .sd-mega-item-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: #f3ede4; display: flex; align-items: center;
          justify-content: center; font-size: 18px; flex-shrink: 0;
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
        .sd-mega-footer-link {
          font-size: 12px; color: #9b7c5c; text-decoration: none;
          transition: color 0.2s;
        }
        .sd-mega-footer-link:hover { color: #301C1A; }

        /* CTAs */
        .sd-ctas { display: flex; gap: 10px; flex-shrink: 0; }
        .sd-btn-outline {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--gold);
          border: 1.5px solid var(--border-strong); padding: 8px 18px;
          background: transparent; cursor: pointer; text-decoration: none;
          transition: background 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .sd-btn-outline:hover { background: rgba(215,181,109,0.1); }
        .sd-btn-gold {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
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
          top: 72px; left: 0; right: 0; bottom: 0;
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

        @media (max-width: 1100px) {
          .sd-nav-links, .sd-ctas, .sd-drop-wrap { display: none; }
          .sd-hamburger { display: flex; }
        }
        @media (max-width: 640px) { .sd-inner { padding: 0 20px; } }
      `}</style>

      <nav className={`sd-nav${scrolled ? " scrolled" : ""}`}>
        <div className="sd-inner">
          <Link href="/" className="sd-logo" aria-label="Soult Digital home">
            <Image src="/soult-logo.png" alt="Soult Digital" width={110} height={38} style={{ objectFit: "contain", display: "block" }} priority />
          </Link>

          {/* Desktop nav */}
          <ul className="sd-nav-links">
            {/* Protect mega-menu */}
            <li>
              <div className="sd-drop-wrap" ref={dropRef}>
                <button
                  className={`sd-drop-trigger${dropOpen ? " open" : ""}`}
                  onClick={() => setDropOpen(d => !d)}
                >
                  What You Can Protect
                  <span className={`sd-drop-chevron${dropOpen ? " open" : ""}`}>▼</span>
                </button>

                <div className={`sd-mega${dropOpen ? " open" : ""}`}>
                  <div className="sd-mega-head">
                    <span className="sd-mega-head-icon">🔐</span>
                    <div className="sd-mega-head-text">
                      <h3>Your Family&apos;s Complete Life Vault</h3>
                      <p>Everything your family should never have to search for — assets, documents, memories and final wishes.</p>
                    </div>
                  </div>

                  <div className="sd-mega-body">
                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Financial & Legal</div>
                      {PROTECT_ITEMS.financial.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setDropOpen(false)}>
                          <div className="sd-mega-item-icon">{item.icon}</div>
                          <div className="sd-mega-item-body">
                            <h4>{item.title}</h4>
                            <p>{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="sd-mega-col">
                      <div className="sd-mega-col-label">Personal Legacy</div>
                      {PROTECT_ITEMS.personal.map((item, i) => (
                        <Link key={i} href={item.href} className="sd-mega-item" onClick={() => setDropOpen(false)}>
                          <div className="sd-mega-item-icon">{item.icon}</div>
                          <div className="sd-mega-item-body">
                            <h4>{item.title}</h4>
                            <p>{item.sub}</p>
                          </div>
                        </Link>
                      ))}
                      <Link href="/pricing" className="sd-mega-item" onClick={() => setDropOpen(false)} style={{ marginTop: 8 }}>
                        <div className="sd-mega-item-icon">📊</div>
                        <div className="sd-mega-item-body">
                          <h4>See All Plans & Pricing</h4>
                          <p>Start free — upgrade when your family grows</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="sd-mega-footer">
                    <Link href="https://app.soultdigital.com/signup" className="sd-mega-footer-cta" onClick={() => setDropOpen(false)}>
                      Start Free Today
                    </Link>
                    <Link href="/pricing" className="sd-mega-footer-link" onClick={() => setDropOpen(false)}>View pricing →</Link>
                    <Link href="/blog" className="sd-mega-footer-link" onClick={() => setDropOpen(false)}>Read guides →</Link>
                  </div>
                </div>
              </div>
            </li>

            {TOP_LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href} className="sd-link">{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="sd-ctas">
            <Link href="https://app.soultdigital.com/login" className="sd-btn-outline">My Vault</Link>
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
            <span>
              {item.icon} {item.title}
              <span className="sd-mob-sub">{item.sub}</span>
            </span>
            <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
          </Link>
        ))}
        <div className="sd-mob-section">More</div>
        {TOP_LINKS.map(l => (
          <Link key={l.href} href={l.href} className="sd-mob-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="sd-mob-btns">
          <Link href="https://app.soultdigital.com/login" className="sd-btn-outline" style={{ textAlign: "center" }}>My Vault</Link>
          <Link href="https://app.soultdigital.com/signup" className="sd-btn-gold" style={{ textAlign: "center" }}>Get Started Free</Link>
        </div>
      </div>
    </>
  );
}
