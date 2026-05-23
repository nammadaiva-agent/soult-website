import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Soult Digital",
  description:
    "New to Soult? Download the app and create your vault. Already a member? Manage your plan via our secure web portal.",
  alternates: { canonical: "https://www.soultdigital.com/get-started" },
  openGraph: {
    title: "Get Started — Soult Digital",
    description: "Choose your path — new vault or existing account.",
    url: "https://www.soultdigital.com/get-started",
    type: "website",
  },
};

export default function GetStartedPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap');

        .gs-page {
          padding-top: 72px;
          min-height: 100vh;
          background: #F5F0E6;
        }

        /* ── Hero ── */
        .gs-hero {
          background: linear-gradient(150deg, #1E1208 0%, #301C1A 55%, #2B1D16 100%);
          padding: 80px 32px 72px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .gs-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 110%, rgba(200,155,60,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .gs-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.24em;
          text-transform: uppercase; color: #C89B3C;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          margin-bottom: 20px;
        }
        .gs-eyebrow-line { width: 28px; height: 1px; background: #C89B3C; }
        .gs-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 62px); font-weight: 700;
          color: #F5ECD8; letter-spacing: -0.02em; line-height: 1.1;
          margin-bottom: 8px;
        }
        .gs-h1 span { color: #D4A843; }
        .gs-h1-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 44px); font-weight: 600;
          color: rgba(245,236,216,0.72); letter-spacing: -0.01em; line-height: 1.2;
          margin-bottom: 24px;
        }
        .gs-lead {
          font-size: 16px; color: rgba(245,236,216,0.6);
          max-width: 520px; margin: 0 auto; line-height: 1.75;
        }

        /* ── Cards wrapper ── */
        .gs-cards {
          max-width: 1080px; margin: -52px auto 0;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          position: relative; z-index: 2;
        }

        /* ── Card base ── */
        .gs-card {
          background: #fff;
          border: 1.5px solid rgba(43,29,22,0.1);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(43,29,22,0.08);
          display: flex; flex-direction: column;
        }

        /* ── Card header band ── */
        .gs-card-head {
          padding: 32px 36px 28px;
          border-bottom: 1px solid rgba(43,29,22,0.07);
        }
        .gs-card-head.new { background: linear-gradient(135deg, #1E1208 0%, #2B1D16 100%); }
        .gs-card-head.existing { background: linear-gradient(135deg, #F5ECD8 0%, #EDE6D8 100%); }

        .gs-card-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px; margin-bottom: 16px;
        }
        .gs-card-tag.new { background: rgba(200,155,60,0.15); color: #C89B3C; border: 1px solid rgba(200,155,60,0.25); }
        .gs-card-tag.existing { background: rgba(102,45,41,0.1); color: #662D29; border: 1px solid rgba(102,45,41,0.18); }

        .gs-card-title {
          font-size: 28px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;
          margin-bottom: 8px;
        }
        .gs-card-title.new { color: #F5ECD8; }
        .gs-card-title.existing { color: #2B1D16; }

        .gs-card-desc {
          font-size: 14px; line-height: 1.65;
        }
        .gs-card-desc.new { color: rgba(245,236,216,0.62); }
        .gs-card-desc.existing { color: rgba(43,29,22,0.55); }

        /* ── Security notice ── */
        .gs-notice {
          display: flex; align-items: flex-start; gap: 12px;
          margin-top: 20px; padding: 14px 16px;
          border-radius: 10px;
          font-size: 12px; line-height: 1.6;
        }
        .gs-notice.new {
          background: rgba(200,155,60,0.1); border: 1px solid rgba(200,155,60,0.2);
          color: rgba(245,236,216,0.65);
        }
        .gs-notice.existing {
          background: rgba(102,45,41,0.06); border: 1px solid rgba(102,45,41,0.12);
          color: rgba(43,29,22,0.58);
        }
        .gs-notice-icon { flex-shrink: 0; margin-top: 1px; }

        /* ── Card body (steps) ── */
        .gs-card-body { padding: 32px 36px 36px; flex: 1; display: flex; flex-direction: column; }

        .gs-steps { list-style: none; padding: 0; margin: 0 0 32px; display: flex; flex-direction: column; gap: 22px; }
        .gs-step { display: flex; align-items: flex-start; gap: 16px; }
        .gs-step-num {
          width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 900;
          background: linear-gradient(135deg, #C89B3C, #D4A843);
          color: #1A0C04;
          box-shadow: 0 2px 10px rgba(200,155,60,0.3);
        }
        .gs-step-content { flex: 1; padding-top: 4px; }
        .gs-step-title { font-size: 14px; font-weight: 800; color: #2B1D16; margin-bottom: 3px; }
        .gs-step-desc { font-size: 13px; color: rgba(43,29,22,0.55); line-height: 1.6; }

        /* ── App store buttons ── */
        .gs-app-btns {
          display: flex; flex-direction: column; gap: 12px;
          margin-top: auto;
        }
        .gs-app-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 20px; border-radius: 12px;
          text-decoration: none;
          border: 1.5px solid rgba(43,29,22,0.12);
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .gs-app-btn:hover {
          border-color: rgba(200,155,60,0.4);
          box-shadow: 0 4px 20px rgba(200,155,60,0.12);
        }
        .gs-app-btn-label { display: flex; flex-direction: column; }
        .gs-app-btn-pre { font-size: 9px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(43,29,22,0.45); }
        .gs-app-btn-name { font-size: 16px; font-weight: 800; color: #2B1D16; letter-spacing: -0.01em; }

        /* ── Portal CTA ── */
        .gs-portal-btns {
          display: flex; flex-direction: column; gap: 12px;
          margin-top: auto;
        }
        .gs-portal-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 28px; border-radius: 12px;
          text-decoration: none; font-size: 12px; font-weight: 800;
          letter-spacing: 0.08em; text-transform: uppercase;
          transition: all 0.2s;
        }
        .gs-portal-btn.primary {
          background: linear-gradient(135deg, #2B1D16 0%, #1E1208 100%);
          color: #F5ECD8;
          box-shadow: 0 4px 20px rgba(43,29,22,0.2);
        }
        .gs-portal-btn.primary:hover { box-shadow: 0 6px 28px rgba(43,29,22,0.3); filter: brightness(1.1); }
        .gs-portal-btn.outline {
          border: 1.5px solid rgba(43,29,22,0.18); color: #2B1D16; background: transparent;
        }
        .gs-portal-btn.outline:hover { border-color: #C89B3C; color: #9B7340; background: rgba(200,155,60,0.05); }

        /* ── Stories band ── */
        .gs-stories {
          background: linear-gradient(135deg, #1E1208 0%, #2B1D16 100%);
          margin: 0; padding: 72px 32px;
          text-align: center;
        }
        .gs-stories-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.24em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 16px;
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .gs-stories-h {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 46px); font-weight: 700;
          color: #F5ECD8; letter-spacing: -0.02em; margin-bottom: 16px; line-height: 1.2;
        }
        .gs-stories-sub {
          font-size: 15px; color: rgba(245,236,216,0.58);
          max-width: 480px; margin: 0 auto 36px; line-height: 1.7;
        }
        .gs-stories-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 36px; border-radius: 100px;
          background: linear-gradient(135deg, #C89B3C, #D4A843);
          color: #1A0C04; font-size: 12px; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(200,155,60,0.35);
          transition: filter 0.2s, box-shadow 0.2s;
        }
        .gs-stories-cta:hover {
          filter: brightness(1.08);
          box-shadow: 0 6px 32px rgba(200,155,60,0.5);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .gs-cards { grid-template-columns: 1fr; margin-top: -32px; padding: 0 20px 60px; }
          .gs-card-head, .gs-card-body { padding-left: 24px; padding-right: 24px; }
          .gs-hero { padding: 64px 20px 80px; }
          .gs-app-btns, .gs-portal-btns { flex-direction: row; flex-wrap: wrap; }
          .gs-app-btn, .gs-portal-btn { flex: 1; min-width: 140px; }
          .gs-stories { padding: 56px 20px; }
        }
      `}</style>

      <div className="gs-page">

        {/* ── Hero ── */}
        <div className="gs-hero">
          <div className="gs-eyebrow">
            <span className="gs-eyebrow-line" />
            Welcome to Soult
            <span className="gs-eyebrow-line" />
          </div>
          <h1 className="gs-h1">Start protecting</h1>
          <div className="gs-h1-sub">what matters most.</div>
          <p className="gs-lead">
            Whether you&apos;re new to Soult or already have a vault — you&apos;re in the right place. Choose your path below to continue securing your legacy.
          </p>
        </div>

        {/* ── Two-path cards ── */}
        <div className="gs-cards">

          {/* ── Card 1: New User ── */}
          <div className="gs-card">
            <div className="gs-card-head new">
              <div className="gs-card-tag new">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                First time here
              </div>
              <div className="gs-card-title new">New to Soult</div>
              <p className="gs-card-desc new">
                Soult is a mobile-first vault for your most important assets, documents, and memories. Registration happens exclusively in our secure app.
              </p>
              <div className="gs-notice new">
                <span className="gs-notice-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                For strict security reasons, we do not offer web-based registration. Every vault is irreversibly tied to your verified phone number to ensure your digital legacy remains completely private to you.
              </div>
            </div>
            <div className="gs-card-body">
              <ol className="gs-steps">
                <li className="gs-step">
                  <span className="gs-step-num">1</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Download the app</div>
                    <div className="gs-step-desc">Available on Android and iOS. Free to download.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">2</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Verify phone + email</div>
                    <div className="gs-step-desc">You&apos;ll receive an OTP on your mobile number, then a second OTP on your email for two-step identity confirmation.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">3</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Set your MPIN and you&apos;re in</div>
                    <div className="gs-step-desc">Add a 4-digit MPIN and a security question. Your vault is ready. Start adding what matters.</div>
                  </div>
                </li>
              </ol>

              <div className="gs-app-btns">
                <a href="https://play.google.com/store/apps/details?id=com.soultdigital.app" target="_blank" rel="noopener noreferrer" className="gs-app-btn">
                  <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
                    <path d="M48 432V80a32 32 0 0 1 49.5-26.8l352 176a32 32 0 0 1 0 53.6l-352 176A32 32 0 0 1 48 432z" fill="#34A853"/>
                    <path d="M48 80l192 176L48 432V80z" fill="#4285F4"/>
                    <path d="M48 432l192-176 80 73.5L48 432z" fill="#FBBC05"/>
                    <path d="M48 80l192 176 80-73.5L48 80z" fill="#EA4335"/>
                  </svg>
                  <div className="gs-app-btn-label">
                    <span className="gs-app-btn-pre">Get it on</span>
                    <span className="gs-app-btn-name">Google Play</span>
                  </div>
                </a>
                <a href="https://apps.apple.com/app/soult-digital/id0000000000" target="_blank" rel="noopener noreferrer" className="gs-app-btn">
                  <svg width="26" height="26" viewBox="0 0 814 1000" fill="#2B1D16">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2C74.5 740 28.9 653.3 28.9 570.6c0-148.4 96.9-226.9 192.9-226.9 51 0 93.5 34.1 125.6 34.1 30.4 0 77.9-36 135.2-36 21.7 0 108.2 1.9 165.5 83.4zm-234.3-158.2c23.4-25.4 40.8-60.5 40.8-95.6 0-4.5-.3-9.1-.9-13.6-38.8 1.5-85.5 25.9-113.1 55.7-21 23.1-40.8 58.2-40.8 93.9 0 4.8.6 9.7 1.3 11.9 2.3.4 6.1.9 9.7.9 34.8 0 78.5-23.1 103-53.2z"/>
                  </svg>
                  <div className="gs-app-btn-label">
                    <span className="gs-app-btn-pre">Download on the</span>
                    <span className="gs-app-btn-name">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── Card 2: Existing User ── */}
          <div className="gs-card">
            <div className="gs-card-head existing">
              <div className="gs-card-tag existing">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Already have a vault
              </div>
              <div className="gs-card-title existing">Existing Soult User</div>
              <p className="gs-card-desc existing">
                Access your subscription, manage your plan, or update billing seamlessly through our secure web portal.
              </p>
              <div className="gs-notice existing">
                <span className="gs-notice-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#662D29" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                For your security, the web portal is for subscription and billing management only. Your actual assets and documents are strictly protected and accessible solely through the mobile app.
              </div>
            </div>
            <div className="gs-card-body">
              <ol className="gs-steps">
                <li className="gs-step">
                  <span className="gs-step-num">1</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Go to account.soultdigital.com</div>
                    <div className="gs-step-desc">Access the web portal for plan management. No password required — we use your phone for identity.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">2</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Enter your registered phone number</div>
                    <div className="gs-step-desc">You&apos;ll receive a secure OTP on the number linked to your Soult account.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">3</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title">Enter your MPIN</div>
                    <div className="gs-step-desc">Input the same 4-digit MPIN you set in the app to view or change your plan securely from here.</div>
                  </div>
                </li>
              </ol>

              <div className="gs-portal-btns">
                <a href="https://account.soultdigital.com" target="_blank" rel="noopener noreferrer" className="gs-portal-btn primary">
                  My Account
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <Link href="/pricing" className="gs-portal-btn outline">
                  View plans
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Stories band ── */}
        <div className="gs-stories">
          <div className="gs-stories-eyebrow">
            <span className="gs-eyebrow-line" />
            Real stories
            <span className="gs-eyebrow-line" />
          </div>
          <h2 className="gs-stories-h">See why families<br />choose Soult.</h2>
          <p className="gs-stories-sub">
            Thousands of Indian families have already secured their vault. Read their stories — the moments that made protecting their legacy real for them.
          </p>
          <Link href="/blog" className="gs-stories-cta">
            Read Stories
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </>
  );
}
