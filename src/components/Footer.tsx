import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
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
          letter-spacing: 0.04em;
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

      <footer className="sd-footer">
        <div className="sd-footer-inner">
          <div className="sd-footer-brand">
            <div className="sd-footer-logo">
              <Image src="/soult-logo.png" alt="Soult" width={100} height={36} style={{ objectFit: "contain" }} />
            </div>
            <p className="sd-footer-tagline">
              Your Family's Secure Life Vault. Organize assets, documents, memories, and health wishes — all in one place.
            </p>
            <p className="sd-footer-legal">Soult Digital Private Limited<br />CIN: U72900KA2024PTC000000</p>
          </div>

          <div className="sd-footer-col">
            <h4>Product</h4>
            <Link href="/pricing">Pricing</Link>
            <Link href="/#features">Features</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="https://app.soultdigital.com/signup">Get Started</Link>
          </div>

          <div className="sd-footer-col">
            <h4>Company</h4>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
          </div>

          <div className="sd-footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/security">Security</Link>
            <Link href="/gdpr">GDPR</Link>
          </div>
        </div>

        <div className="sd-footer-bottom">
          <span>© {new Date().getFullYear()} Soult Digital Private Limited. All rights reserved.</span>
          <span>AES-256 encrypted · AWS infrastructure · SOC 2 compliant</span>
        </div>
      </footer>
    </>
  );
}
