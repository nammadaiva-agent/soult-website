import Link from "next/link";

const APP_STORE_URL  = "https://apps.apple.com/in/app/soult";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.soultdigital.app";

export default function AppStrip() {
  return (
    <>
      <style>{`
        .as-wrap {
          background: #EDE6D8;
          border-top: 1px solid rgba(43,29,22,0.08);
          padding: 96px 64px;
          position: relative;
          overflow: hidden;
        }

        /* Decorative circles */
        .as-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(43,29,22,0.06);
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);
        }
        .as-ring-1 { width: 520px; height: 520px; right: -120px; }
        .as-ring-2 { width: 340px; height: 340px; right: -20px; }
        .as-ring-3 { width: 180px; height: 180px; right: 80px; }

        .as-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: center;
          position: relative;
        }

        /* Left — text */
        .as-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C89B3C;
          margin-bottom: 24px;
        }
        .as-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #C89B3C;
          flex-shrink: 0;
        }

        .as-h {
          font-size: clamp(30px, 3.4vw, 50px);
          font-weight: 900;
          letter-spacing: -0.035em;
          line-height: 1.05;
          color: #2B1D16;
          margin: 0 0 20px;
        }
        .as-h em {
          font-style: normal;
          color: #C89B3C;
        }

        .as-p {
          font-size: 18px;
          line-height: 1.75;
          color: rgba(43,29,22,0.5);
          max-width: 400px;
          margin: 0 0 36px;
        }

        /* Stars */
        .as-proof {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(43,29,22,0.38);
          letter-spacing: 0.01em;
        }
        .as-stars {
          display: flex;
          gap: 3px;
          color: #C89B3C;
        }

        /* Right — badges column */
        .as-badges {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 264px;
        }

        .as-badge {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #2B1D16;
          border-radius: 18px;
          padding: 20px 30px;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(43,29,22,0.22);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .as-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(43,29,22,0.3);
        }
        .as-badge:active { transform: translateY(-1px); }

        .as-badge-icon { flex-shrink: 0; }

        .as-badge-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: rgba(237,230,216,0.5);
          margin-bottom: 5px;
          line-height: 1;
        }
        .as-badge-name {
          display: block;
          font-size: 22px;
          font-weight: 800;
          color: #EDE6D8;
          line-height: 1;
          letter-spacing: -0.015em;
        }

        @media (max-width: 900px) {
          .as-wrap { padding: 72px 32px 80px; }
          .as-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .as-badges {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .as-badge { flex: 1; min-width: 200px; }
          .as-ring-1 { display: none; }
          .as-ring-2 { display: none; }
          .as-ring-3 { display: none; }
        }

        @media (max-width: 520px) {
          .as-wrap { padding: 64px 20px 72px; }
          .as-badges { flex-direction: column; }
        }
      `}</style>

      <section className="as-wrap">
        <div className="as-ring as-ring-1" />
        <div className="as-ring as-ring-2" />
        <div className="as-ring as-ring-3" />

        <div className="as-inner">

          {/* ── Left ── */}
          <div>
            <div className="as-eyebrow">
              <span className="as-eyebrow-dot" />
              Available on iOS &amp; Android
            </div>

            <h2 className="as-h">
              Your vault.<br />
              <em>Always in your pocket.</em>
            </h2>

            <p className="as-p">
              Documents, assets, memories, and wishes — secured and instantly accessible whenever your family needs them.
            </p>

            <div className="as-proof">
              <span className="as-stars">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 .5l1.55 3.15 3.47.5-2.51 2.45.59 3.45L6 8.27l-3.1 1.78.59-3.45L1 4.15l3.47-.5L6 .5z"/>
                  </svg>
                ))}
              </span>
              4.9 &nbsp;·&nbsp; Rated by early users
            </div>
          </div>

          {/* ── Right — store badges ── */}
          <div className="as-badges">

            {/* App Store */}
            <Link href={APP_STORE_URL} className="as-badge">
              <span className="as-badge-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="#EDE6D8">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </span>
              <div>
                <span className="as-badge-label">Download on the</span>
                <span className="as-badge-name">App Store</span>
              </div>
            </Link>

            {/* Google Play */}
            <Link href={PLAY_STORE_URL} className="as-badge">
              <span className="as-badge-icon">
                <svg width="34" height="34" viewBox="0 0 24 24">
                  <path d="M3.18 23.76c.37.2.8.2 1.18 0L14.94 12 4.36.24C3.98.04 3.55.04 3.18.24 2.46.64 2 1.4 2 2.24v19.52c0 .84.46 1.6 1.18 2z" fill="#EA4335"/>
                  <path d="M20.82 10.26L17.58 8.4 14.94 12l2.64 3.6 3.24-1.86c.73-.42 1.18-1.18 1.18-2.02s-.45-1.6-1.18-2.02v.56z" fill="#FBBC05"/>
                  <path d="M4.36.24L14.94 12 17.58 8.4 5.54.24C5.17.04 4.73.04 4.36.24z" fill="#4285F4"/>
                  <path d="M4.36 23.76c.37.2.81.2 1.18 0l12.04-8.16L14.94 12 4.36 23.76z" fill="#34A853"/>
                </svg>
              </span>
              <div>
                <span className="as-badge-label">Get it on</span>
                <span className="as-badge-name">Google Play</span>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}
