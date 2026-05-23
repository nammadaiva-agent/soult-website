import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
        /* ── TRUST STRIP ── */
        .sd-trust-strip {
          background: #2B1D16;
          border-top: 1px solid rgba(200,155,60,0.12);
          border-bottom: 1px solid rgba(200,155,60,0.12);
          padding: 40px 32px;
        }
        .sd-trust-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
          align-items: center;
        }
        .sd-trust-item {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 0 32px; justify-content: center; text-align: center;
          border-right: 1px solid rgba(200,155,60,0.15);
        }
        .sd-trust-item:last-child { border-right: none; }
        .sd-trust-icon {
          width: 44px; height: 44px; flex-shrink: 0;
          background: rgba(200,155,60,0.10);
          border: 1px solid rgba(200,155,60,0.25);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #C89B3C;
        }
        .sd-trust-text { display: flex; flex-direction: column; gap: 2px; }
        .sd-trust-label {
          font-size: 18px; font-weight: 800; color: #EDE6D8;
          letter-spacing: -0.01em; line-height: 1.2;
        }
        .sd-trust-sub {
          font-size: 12px; color: rgba(237,230,216,0.4);
          letter-spacing: 0.04em; font-weight: 500;
        }
        .sd-trust-badge-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.18em;
          color: rgba(200,155,60,0.7); text-transform: uppercase;
          text-align: center; margin-top: 6px;
        }
        @media (max-width: 900px) {
          .sd-trust-item { padding: 16px 28px; border-right: none; border-bottom: 1px solid rgba(200,155,60,0.12); width: 100%; }
          .sd-trust-item:last-child { border-bottom: none; }
        }

        .sd-footer {
          background: #220f0e;
          border-top: 1px solid var(--border);
          padding: 64px 32px 40px;
        }
        .sd-footer-inner {
          max-width: 1280px; margin: 0 auto;
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px;
        }
        .sd-footer-brand { }
        .sd-footer-logo {
          font-size: 20px; font-weight: 800; letter-spacing: -0.02em;
          color: var(--gold); margin-bottom: 12px;
        }
        .sd-footer-logo span { color: var(--beige); }
        .sd-footer-tagline {
          font-size: 13px; color: var(--text-muted); line-height: 1.7;
          max-width: 260px; margin-bottom: 20px;
        }
        .sd-footer-legal {
          font-size: 11px; color: rgba(245,236,216,0.3);
          letter-spacing: 0.04em; margin-bottom: 20px;
        }
        .sd-footer-badges {
          display: flex; gap: 10px; flex-wrap: wrap;
        }
        .sd-footer-badge {
          display: inline-flex; align-items: center; gap: 7px;
          border: 1px solid rgba(200,155,60,0.35);
          border-radius: 8px; padding: 7px 12px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          color: rgba(200,155,60,0.75);
          background: rgba(200,155,60,0.06);
        }
        .sd-footer-col h4 {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 16px;
        }
        .sd-footer-col a {
          display: block; font-size: 13px; color: var(--text-muted);
          text-decoration: none; margin-bottom: 10px;
          transition: color 0.2s;
        }
        .sd-footer-col a:hover { color: var(--beige); }
        .sd-footer-socials {
          display: flex; gap: 10px; margin-top: 20px;
        }
        .sd-footer-social-link {
          width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(200,155,60,0.25);
          background: rgba(200,155,60,0.06);
          color: rgba(200,155,60,0.7);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .sd-footer-social-link:hover {
          border-color: rgba(200,155,60,0.6);
          background: rgba(200,155,60,0.14);
          color: #C89B3C;
        }
        .sd-footer-bottom {
          max-width: 1280px; margin: 40px auto 0;
          padding-top: 24px; border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
          font-size: 12px; color: rgba(245,236,216,0.3);
          flex-wrap: wrap; gap: 12px;
        }
        @media (max-width: 900px) {
          .sd-footer-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .sd-footer { padding: 48px 20px 32px; }
          .sd-footer-inner { grid-template-columns: 1fr; gap: 32px; }
          .sd-footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="sd-trust-strip">
        <div className="sd-trust-inner">

          {/* ISO 27001 */}
          <div className="sd-trust-item">
            <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="64" y2="72" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C89B3C"/>
                </linearGradient>
                <linearGradient id="f1" x1="32" y1="0" x2="32" y2="72" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(212,175,55,0.18)"/><stop offset="100%" stopColor="rgba(200,155,60,0.06)"/>
                </linearGradient>
              </defs>
              <path d="M32 2L6 12V34C6 50 18 63 32 70C46 63 58 50 58 34V12L32 2Z" fill="url(#f1)" stroke="url(#g1)" strokeWidth="1.5"/>
              <path d="M32 8L11 16.5V34C11 47 21 58 32 64C43 58 53 47 53 34V16.5L32 8Z" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="1"/>
              <text x="32" y="27" textAnchor="middle" fill="#C89B3C" fontSize="7" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1.5">ISO/IEC</text>
              <text x="32" y="41" textAnchor="middle" fill="#EDE6D8" fontSize="14" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="-0.5">27001</text>
              <text x="32" y="52" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="5" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1.8">CERTIFIED</text>
            </svg>
            <span className="sd-trust-label">ISO 27001</span>
            <span className="sd-trust-sub">Information Security Management</span>
          </div>

          {/* ISO 9001 */}
          <div className="sd-trust-item">
            <svg width="64" height="72" viewBox="0 0 64 72" fill="none">
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="64" y2="72" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C89B3C"/>
                </linearGradient>
                <linearGradient id="f2" x1="32" y1="0" x2="32" y2="72" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(212,175,55,0.18)"/><stop offset="100%" stopColor="rgba(200,155,60,0.06)"/>
                </linearGradient>
              </defs>
              <path d="M32 2L6 12V34C6 50 18 63 32 70C46 63 58 50 58 34V12L32 2Z" fill="url(#f2)" stroke="url(#g2)" strokeWidth="1.5"/>
              <path d="M32 8L11 16.5V34C11 47 21 58 32 64C43 58 53 47 53 34V16.5L32 8Z" fill="none" stroke="rgba(212,175,55,0.25)" strokeWidth="1"/>
              <text x="32" y="27" textAnchor="middle" fill="#C89B3C" fontSize="7" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1.5">ISO</text>
              <text x="32" y="41" textAnchor="middle" fill="#EDE6D8" fontSize="14" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="-0.5">9001</text>
              <text x="32" y="52" textAnchor="middle" fill="rgba(212,175,55,0.6)" fontSize="5" fontWeight="700" fontFamily="Arial,sans-serif" letterSpacing="1.8">CERTIFIED</text>
            </svg>
            <span className="sd-trust-label">ISO 9001</span>
            <span className="sd-trust-sub">Quality Management System</span>
          </div>

          {/* AES-256 */}
          <div className="sd-trust-item">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C89B3C"/>
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="rgba(212,175,55,0.10)" stroke="url(#g3)" strokeWidth="1.5"/>
              <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="1"/>
              <circle cx="24" cy="32" r="9" fill="none" stroke="#C89B3C" strokeWidth="2"/>
              <line x1="32" y1="32" x2="48" y2="32" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="44" y1="32" x2="44" y2="37" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="48" y1="32" x2="48" y2="37" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="sd-trust-label">AES-256</span>
            <span className="sd-trust-sub">Encryption</span>
          </div>

          {/* AWS */}
          <div className="sd-trust-item">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <linearGradient id="g4" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37"/><stop offset="100%" stopColor="#C89B3C"/>
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="rgba(212,175,55,0.10)" stroke="url(#g4)" strokeWidth="1.5"/>
              <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth="1"/>
              <text x="32" y="28" textAnchor="middle" fill="#EDE6D8" fontSize="18" fontWeight="900" fontFamily="Arial,sans-serif" letterSpacing="2">AWS</text>
              <path d="M20 36 Q32 46 44 36" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M41.5 34 L44 36 L41.5 38" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="sd-trust-label">AWS</span>
            <span className="sd-trust-sub">Infrastructure</span>
          </div>

        </div>
      </div>

      <footer className="sd-footer">
        <div className="sd-footer-inner">
          <div className="sd-footer-brand">
            <div className="sd-footer-logo">
              <Image src="/soult-logo.png" alt="Soult" width={100} height={36} style={{ objectFit: "contain" }} />
            </div>
            <p className="sd-footer-tagline">
              India&apos;s first digital legacy vault. Organise assets, preserve family memories, and ensure life continuity — born in Mangaluru, built for every Indian family.
            </p>
            <div className="sd-footer-socials">
              {/* Instagram */}
              <a href="https://www.instagram.com/soultdigital" target="_blank" rel="noopener noreferrer" className="sd-footer-social-link" aria-label="Soult on Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/soultdigital" target="_blank" rel="noopener noreferrer" className="sd-footer-social-link" aria-label="Soult on Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/soultdigital" target="_blank" rel="noopener noreferrer" className="sd-footer-social-link" aria-label="Soult on LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="sd-footer-col">
            <h4>Vault</h4>
            <Link href="/financial">Financial</Link>
            <Link href="/wisdom-spiritual">Wisdom &amp; Spiritual</Link>
            <Link href="/physical-health">Physical Health</Link>
          </div>

          <div className="sd-footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="sd-footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/security">Security</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </div>

        <div className="sd-footer-bottom">
          <span>© 2026 Soult Digital Private Limited · CIN: U62099KA2026PTC215497 · Made with ♥ in Mangaluru, India</span>
          <span style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>ISO 27001</span>
            <span>ISO 9001</span>
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
