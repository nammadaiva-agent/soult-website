"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
          display: flex; align-items: center; gap: 40px;
        }
        .sd-logo {
          font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          color: var(--gold); text-decoration: none; flex-shrink: 0;
        }
        .sd-logo span { color: var(--beige); }
        .sd-links {
          display: flex; align-items: center; gap: 4px;
          list-style: none; margin: 0; padding: 0;
        }
        .sd-link {
          font-size: 13px; font-weight: 500; letter-spacing: 0.04em;
          color: var(--text-muted); padding: 6px 14px;
          text-decoration: none; transition: color 0.2s;
          border-radius: 4px;
        }
        .sd-link:hover { color: var(--gold); }
        .sd-ctas { display: flex; gap: 10px; margin-left: auto; }
        .sd-btn-outline {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--gold);
          border: 1.5px solid var(--border-strong); padding: 8px 20px;
          background: transparent; cursor: pointer; text-decoration: none;
          transition: background 0.2s, color 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .sd-btn-outline:hover { background: rgba(215,181,109,0.1); }
        .sd-btn-gold {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #301C1A;
          background: var(--gold); padding: 8px 20px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center;
        }
        .sd-btn-gold:hover { background: var(--gold-light); }
        .sd-hamburger {
          display: none; background: none; border: none;
          cursor: pointer; padding: 4px; margin-left: auto;
          flex-direction: column; gap: 5px;
        }
        .sd-hamburger span {
          width: 22px; height: 2px; background: var(--beige);
          border-radius: 2px; display: block; transition: all 0.25s;
        }
        .sd-mobile {
          display: none; position: fixed;
          top: 72px; left: 0; right: 0; bottom: 0;
          background: rgba(48,28,26,0.99);
          backdrop-filter: blur(16px); z-index: 899;
          flex-direction: column; padding: 24px;
          overflow-y: auto;
        }
        .sd-mobile.open { display: flex; }
        .sd-mob-link {
          font-size: 18px; font-weight: 600;
          color: var(--beige); padding: 14px 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none; transition: color 0.2s;
        }
        .sd-mob-link:hover { color: var(--gold); }
        .sd-mob-btns { margin-top: 24px; display: flex; flex-direction: column; gap: 12px; }
        @media (max-width: 900px) {
          .sd-links, .sd-ctas { display: none; }
          .sd-hamburger { display: flex; }
        }
        @media (max-width: 640px) { .sd-inner { padding: 0 20px; } }
      `}</style>

      <nav className={`sd-nav${scrolled ? " scrolled" : ""}`}>
        <div className="sd-inner">
          <Link href="/" className="sd-logo">Soult<span>Digital</span></Link>
          <ul className="sd-links">
            {LINKS.map(l => (
              <li key={l.href}><Link href={l.href} className="sd-link">{l.label}</Link></li>
            ))}
          </ul>
          <div className="sd-ctas">
            <Link href="https://app.soultdigital.com/login" className="sd-btn-outline">Sign In</Link>
            <Link href="https://app.soultdigital.com/signup" className="sd-btn-gold">Get Started Free</Link>
          </div>
          <button className="sd-hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`sd-mobile${open ? " open" : ""}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className="sd-mob-link" onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <div className="sd-mob-btns">
          <Link href="https://app.soultdigital.com/login" className="sd-btn-outline" style={{ textAlign: "center" }}>Sign In</Link>
          <Link href="https://app.soultdigital.com/signup" className="sd-btn-gold" style={{ textAlign: "center" }}>Get Started Free</Link>
        </div>
      </div>
    </>
  );
}
