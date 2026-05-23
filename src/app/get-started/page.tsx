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
          padding: 80px 32px 100px;
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
          font-size: clamp(34px, 5vw, 60px); font-weight: 700;
          color: #F5ECD8; letter-spacing: -0.02em; line-height: 1.1;
          margin-bottom: 20px;
        }
        .gs-h1 em { color: #D4A843; font-style: italic; }
        .gs-lead {
          font-size: 16px; color: rgba(245,236,216,0.6);
          max-width: 540px; margin: 0 auto; line-height: 1.75;
        }

        /* ── Cards wrapper — overlaps hero bottom ── */
        .gs-cards {
          max-width: 1100px; margin: -56px auto 0;
          padding: 0 32px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          position: relative; z-index: 2;
        }

        /* ── Card base ── */
        .gs-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex; flex-direction: column;
        }

        /* ── LIGHT card (New to Soult) ── */
        .gs-card.light {
          background: #fff;
          border: 1.5px solid rgba(43,29,22,0.1);
          box-shadow: 0 4px 40px rgba(43,29,22,0.09);
        }
        .gs-card-head.light {
          background: linear-gradient(135deg, #F5ECD8 0%, #EDE6D8 100%);
          padding: 32px 36px 28px;
          border-bottom: 1px solid rgba(43,29,22,0.07);
        }
        .gs-card-tag.light {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px; margin-bottom: 16px;
          background: rgba(102,45,41,0.08); color: #662D29; border: 1px solid rgba(102,45,41,0.16);
        }
        .gs-card-title.light {
          font-size: 30px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;
          margin-bottom: 10px; color: #2B1D16;
        }
        .gs-card-desc.light {
          font-size: 14px; line-height: 1.65; color: rgba(43,29,22,0.58);
        }
        .gs-notice.light {
          display: flex; align-items: flex-start; gap: 12px;
          margin-top: 20px; padding: 14px 16px; border-radius: 10px;
          font-size: 12px; line-height: 1.65;
          background: rgba(102,45,41,0.06); border: 1px solid rgba(102,45,41,0.12);
          color: rgba(43,29,22,0.6);
        }

        /* ── DARK card (Existing User) ── */
        .gs-card.dark {
          background: linear-gradient(150deg, #1E1208 0%, #2B1D16 60%, #1A0C04 100%);
          border: 1.5px solid rgba(200,155,60,0.18);
          box-shadow: 0 4px 40px rgba(20,10,2,0.45);
        }
        .gs-card-head.dark {
          background: linear-gradient(135deg, rgba(102,45,41,0.35) 0%, rgba(48,28,26,0.2) 100%);
          padding: 32px 36px 28px;
          border-bottom: 1px solid rgba(200,155,60,0.1);
        }
        .gs-card-tag.dark {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px; margin-bottom: 16px;
          background: rgba(200,155,60,0.12); color: #C89B3C; border: 1px solid rgba(200,155,60,0.22);
        }
        .gs-card-title.dark {
          font-size: 30px; font-weight: 900; letter-spacing: -0.03em; line-height: 1.1;
          margin-bottom: 10px; color: #F5ECD8;
        }
        .gs-card-desc.dark {
          font-size: 14px; line-height: 1.65; color: rgba(245,236,216,0.6);
        }
        .gs-notice.dark {
          display: flex; align-items: flex-start; gap: 12px;
          margin-top: 20px; padding: 14px 16px; border-radius: 10px;
          font-size: 12px; line-height: 1.65;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.18);
          color: rgba(245,236,216,0.55);
        }
        .gs-notice-icon { flex-shrink: 0; margin-top: 1px; }

        /* ── Card body ── */
        .gs-card-body {
          padding: 32px 36px 36px; flex: 1; display: flex; flex-direction: column;
        }

        /* ── Steps ── */
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
        .gs-step-title.light { font-size: 14px; font-weight: 800; color: #2B1D16; margin-bottom: 3px; }
        .gs-step-title.dark  { font-size: 14px; font-weight: 800; color: #F5ECD8; margin-bottom: 3px; }
        .gs-step-desc.light  { font-size: 13px; color: rgba(43,29,22,0.55); line-height: 1.6; }
        .gs-step-desc.dark   { font-size: 13px; color: rgba(245,236,216,0.5); line-height: 1.6; }

        /* ── App store buttons (light card) ── */
        .gs-app-btns { display: flex; flex-direction: column; gap: 12px; margin-top: auto; }
        .gs-app-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 20px; border-radius: 12px; text-decoration: none;
          border: 1.5px solid rgba(43,29,22,0.12); background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .gs-app-btn:hover { border-color: rgba(200,155,60,0.4); box-shadow: 0 4px 20px rgba(200,155,60,0.12); }
        .gs-app-btn-label { display: flex; flex-direction: column; }
        .gs-app-btn-pre { font-size: 9px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(43,29,22,0.4); }
        .gs-app-btn-name { font-size: 16px; font-weight: 800; color: #2B1D16; letter-spacing: -0.01em; }

        /* ── Portal buttons (dark card) ── */
        .gs-portal-btns { display: flex; flex-direction: column; gap: 12px; margin-top: auto; }
        .gs-portal-btn {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 15px 28px; border-radius: 12px; text-decoration: none;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;
          transition: all 0.2s;
        }
        .gs-portal-btn.gold {
          background: linear-gradient(135deg, #C89B3C, #D4A843);
          color: #1A0C04; border: none;
          box-shadow: 0 4px 20px rgba(200,155,60,0.35);
        }
        .gs-portal-btn.gold:hover { filter: brightness(1.08); box-shadow: 0 6px 28px rgba(200,155,60,0.5); }
        .gs-portal-btn.ghost {
          border: 1.5px solid rgba(245,236,216,0.18); color: rgba(245,236,216,0.7); background: transparent;
        }
        .gs-portal-btn.ghost:hover { border-color: rgba(200,155,60,0.4); color: #C89B3C; }

        /* ── Stories / testimonial band ── */
        .gs-stories {
          background: linear-gradient(135deg, #F5ECD8 0%, #EDE6D8 50%, #D9C9A8 100%);
          padding: 72px 32px;
          text-align: center;
          border-top: 1px solid rgba(43,29,22,0.07);
        }
        .gs-stories-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.24em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 16px;
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .gs-stories-h {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 46px); font-weight: 700;
          color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 16px; line-height: 1.2;
        }
        .gs-stories-sub {
          font-size: 15px; color: rgba(43,29,22,0.55);
          max-width: 500px; margin: 0 auto 36px; line-height: 1.7;
        }
        .gs-stories-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 36px; border-radius: 100px;
          background: #2B1D16; color: #F5ECD8;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(43,29,22,0.2);
          transition: all 0.2s;
        }
        .gs-stories-cta:hover { background: #1E1208; box-shadow: 0 6px 28px rgba(43,29,22,0.3); }

        /* ── Bottom app CTA ── */
        .gs-app-cta {
          background: linear-gradient(150deg, #1E1208 0%, #2B1D16 60%, #301C1A 100%);
          padding: 72px 32px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .gs-app-cta::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 50% 60% at 50% 0%, rgba(200,155,60,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .gs-app-cta-h {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.8vw, 44px); font-weight: 700;
          color: #F5ECD8; letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .gs-app-cta-sub {
          font-size: 15px; color: rgba(245,236,216,0.55);
          max-width: 460px; margin: 0 auto 36px; line-height: 1.7;
        }
        .gs-app-cta-btns {
          display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap;
        }
        .gs-app-cta-btn {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 24px; border-radius: 12px; text-decoration: none;
          background: rgba(255,255,255,0.07); border: 1.5px solid rgba(245,236,216,0.15);
          transition: border-color 0.2s, background 0.2s;
        }
        .gs-app-cta-btn:hover { background: rgba(255,255,255,0.11); border-color: rgba(200,155,60,0.35); }
        .gs-app-cta-btn-pre { font-size: 9px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(245,236,216,0.45); }
        .gs-app-cta-btn-name { font-size: 16px; font-weight: 800; color: #F5ECD8; letter-spacing: -0.01em; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .gs-cards { grid-template-columns: 1fr; margin-top: -32px; padding: 0 20px 60px; }
          .gs-card-head.light, .gs-card-head.dark,
          .gs-card-body { padding-left: 24px; padding-right: 24px; }
          .gs-hero { padding: 64px 20px 90px; }
          .gs-stories, .gs-app-cta { padding: 56px 20px; }
          .gs-app-btns { flex-direction: row; flex-wrap: wrap; }
          .gs-app-btn { flex: 1; min-width: 140px; }
        }
      `}</style>

      <div className="gs-page">

        {/* ── Hero ── */}
        <div className="gs-hero">
          <div className="gs-eyebrow">
            <span className="gs-eyebrow-line" />
            Get Started
            <span className="gs-eyebrow-line" />
          </div>
          <h1 className="gs-h1">
            Welcome to Soult — Start protecting what <em>matters most</em>.
          </h1>
          <p className="gs-lead">
            Whether you&apos;re new to Soult or already have a vault — you&apos;re in the right place. Choose your path below to continue securing your legacy.
          </p>
        </div>

        {/* ── Two-path cards ── */}
        <div className="gs-cards">

          {/* ── Card 1: New to Soult — LIGHT ── */}
          <div className="gs-card light">
            <div className="gs-card-head light">
              <div className="gs-card-tag light">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                First time here
              </div>
              <div className="gs-card-title light">New to Soult</div>
              <p className="gs-card-desc light">
                Soult is a mobile-first vault for your most important assets, documents, and memories. Registration happens exclusively in our secure app.
              </p>
              <div className="gs-notice light">
                <span className="gs-notice-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#662D29" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                For strict security reasons, we do not offer web-based registration. Every vault is irreversibly tied to your verified phone number to ensure your digital legacy remains completely private to you.
              </div>
            </div>
            <div className="gs-card-body">
              <ol className="gs-steps">
                <li className="gs-step">
                  <span className="gs-step-num">1</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title light">Download the app</div>
                    <div className="gs-step-desc light">Available on Android and iOS. Free to download.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">2</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title light">Verify phone + email</div>
                    <div className="gs-step-desc light">You&apos;ll receive an OTP on your mobile number, then a second OTP on your email for two-step identity confirmation.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">3</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title light">Set your MPIN and you&apos;re in</div>
                    <div className="gs-step-desc light">Add a 4-digit MPIN and a security question. Your vault is ready. Start adding what matters.</div>
                  </div>
                </li>
              </ol>

              <div className="gs-app-btns">
                <a href="https://play.google.com/store/apps/details?id=com.soultdigital.app" target="_blank" rel="noopener noreferrer" className="gs-app-btn">
                  {/* Google Play icon */}
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
                <a href="https://apps.apple.com/in/app/soult/id6743461682" target="_blank" rel="noopener noreferrer" className="gs-app-btn">
                  {/* Apple icon */}
                  <svg width="24" height="24" viewBox="0 0 814 1000" fill="#2B1D16">
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

          {/* ── Card 2: Existing User — DARK ── */}
          <div className="gs-card dark">
            <div className="gs-card-head dark">
              <div className="gs-card-tag dark">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Already have a vault
              </div>
              <div className="gs-card-title dark">Existing Soult User</div>
              <p className="gs-card-desc dark">
                Access your subscription, manage your plan, or update billing seamlessly through our secure web portal.
              </p>
              <div className="gs-notice dark">
                <span className="gs-notice-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                For your security, the web portal is for subscription and billing management only. Your actual assets and documents are strictly protected and accessible solely through the mobile app.
              </div>
            </div>
            <div className="gs-card-body">
              <ol className="gs-steps">
                <li className="gs-step">
                  <span className="gs-step-num">1</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title dark">Go to account.soultdigital.com</div>
                    <div className="gs-step-desc dark">Access the web portal for plan management. No password required — we use your phone for identity.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">2</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title dark">Enter your registered phone number</div>
                    <div className="gs-step-desc dark">You&apos;ll receive a secure OTP on the number linked to your Soult account.</div>
                  </div>
                </li>
                <li className="gs-step">
                  <span className="gs-step-num">3</span>
                  <div className="gs-step-content">
                    <div className="gs-step-title dark">Enter your MPIN</div>
                    <div className="gs-step-desc dark">Input the same 4-digit MPIN you set in the app to view or change your plan securely from here.</div>
                  </div>
                </li>
              </ol>

              <div className="gs-portal-btns">
                <a href="https://account.soultdigital.com" target="_blank" rel="noopener noreferrer" className="gs-portal-btn gold">
                  My Account
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <Link href="/pricing" className="gs-portal-btn ghost">
                  View plans
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* ── Stories / testimonial band ── */}
        <div className="gs-stories">
          <div className="gs-stories-eyebrow">
            <span className="gs-eyebrow-line" style={{ background: "#C89B3C" }} />
            Real stories
            <span className="gs-eyebrow-line" style={{ background: "#C89B3C" }} />
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

        {/* ── Bottom app CTA ── */}
        <div className="gs-app-cta">
          <h2 className="gs-app-cta-h">Your vault. Always in your pocket.</h2>
          <p className="gs-app-cta-sub">
            Everything you have built, preserved, and passed on — secured in the Soult app. Download in under a minute.
          </p>
          <div className="gs-app-cta-btns">
            <a href="https://play.google.com/store/apps/details?id=com.soultdigital.app" target="_blank" rel="noopener noreferrer" className="gs-app-cta-btn">
              <svg width="28" height="28" viewBox="0 0 512 512" fill="none">
                <path d="M48 432V80a32 32 0 0 1 49.5-26.8l352 176a32 32 0 0 1 0 53.6l-352 176A32 32 0 0 1 48 432z" fill="#34A853"/>
                <path d="M48 80l192 176L48 432V80z" fill="#4285F4"/>
                <path d="M48 432l192-176 80 73.5L48 432z" fill="#FBBC05"/>
                <path d="M48 80l192 176 80-73.5L48 80z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="gs-app-cta-btn-pre">Get it on</div>
                <div className="gs-app-cta-btn-name">Google Play</div>
              </div>
            </a>
            <a href="https://apps.apple.com/in/app/soult/id6743461682" target="_blank" rel="noopener noreferrer" className="gs-app-cta-btn">
              <svg width="24" height="24" viewBox="0 0 814 1000" fill="#F5ECD8">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.2C74.5 740 28.9 653.3 28.9 570.6c0-148.4 96.9-226.9 192.9-226.9 51 0 93.5 34.1 125.6 34.1 30.4 0 77.9-36 135.2-36 21.7 0 108.2 1.9 165.5 83.4zm-234.3-158.2c23.4-25.4 40.8-60.5 40.8-95.6 0-4.5-.3-9.1-.9-13.6-38.8 1.5-85.5 25.9-113.1 55.7-21 23.1-40.8 58.2-40.8 93.9 0 4.8.6 9.7 1.3 11.9 2.3.4 6.1.9 9.7.9 34.8 0 78.5-23.1 103-53.2z"/>
              </svg>
              <div>
                <div className="gs-app-cta-btn-pre">Download on the</div>
                <div className="gs-app-cta-btn-name">App Store</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
