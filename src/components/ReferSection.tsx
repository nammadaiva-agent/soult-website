"use client";
import { useState } from "react";

export default function ReferSection() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://app.soultdigital.com/signup?ref=YOURCODE";

  const copy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .ref-wrap {
          background: #F5F0E6;
          padding: 0 64px 80px;
        }
        .ref-card {
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 24px;
          border: 1px solid rgba(200,155,60,0.15);
          box-shadow: 0 20px 60px rgba(43,29,22,0.28);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          overflow: hidden;
          position: relative;
          background: url('/refer-bg.png') center center / cover no-repeat;
        }
        .ref-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(22, 11, 6, 0.78);
          pointer-events: none;
          z-index: 0;
        }


        /* Left */
        .ref-left {
          padding: 48px 40px 48px 52px;
          position: relative; z-index: 1;
          background: transparent;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ref-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C89B3C;
          margin-bottom: 16px;
        }
        .ref-eyebrow-line { width: 20px; height: 1px; background: #C89B3C; display: inline-block; }
        .ref-h {
          font-size: clamp(24px, 2.4vw, 32px);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.12;
          color: #F5EFE3;
          margin: 0 0 24px;
        }
        .ref-h em { font-style: normal; color: #C89B3C; }

        .ref-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .ref-step {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }
        .ref-step-num {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: rgba(200,155,60,0.1);
          border: 1px solid rgba(200,155,60,0.28);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800;
          color: #C89B3C;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .ref-step-title {
          font-size: 14px;
          font-weight: 700;
          color: #F5EFE3;
          margin-bottom: 2px;
          line-height: 1.3;
        }
        .ref-step-body {
          font-size: 13px;
          color: rgba(245,239,227,0.38);
          line-height: 1.5;
        }

        /* Right */
        .ref-right {
          padding: 48px 48px 48px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative; z-index: 1;
          border-left: 1px solid rgba(200,155,60,0.12);
          background: transparent;
        }
        .ref-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(200,155,60,0.1);
          border: 1px solid rgba(200,155,60,0.28);
          border-radius: 99px;
          padding: 7px 14px;
          font-size: 12px;
          font-weight: 700;
          color: #C89B3C;
          margin-bottom: 22px;
          align-self: flex-start;
        }
        .ref-right-h {
          font-size: 17px;
          font-weight: 800;
          color: #F5EFE3;
          letter-spacing: -0.01em;
          margin-bottom: 5px;
        }
        .ref-right-sub {
          font-size: 13px;
          color: rgba(245,239,227,0.36);
          margin-bottom: 18px;
          line-height: 1.55;
        }
        .ref-link-box {
          display: flex;
          border: 1px solid rgba(200,155,60,0.22);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 14px;
          background: rgba(0,0,0,0.22);
        }
        .ref-link-text {
          flex: 1;
          padding: 12px 14px;
          font-size: 11px;
          color: rgba(245,239,227,0.32);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ref-copy-btn {
          padding: 12px 18px;
          background: #C89B3C;
          border: none;
          cursor: pointer;
          font-size: 11px;
          font-weight: 800;
          color: #fff;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .ref-copy-btn:hover { background: #D4A843; }
        .ref-copy-btn.done { background: #4a7c59; }

        .ref-share-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: rgba(245,239,227,0.25);
        }
        .ref-share-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 700;
          color: rgba(245,239,227,0.48);
          background: rgba(200,155,60,0.07);
          border: 1px solid rgba(200,155,60,0.16);
          border-radius: 6px;
          padding: 6px 12px;
          cursor: pointer;
          transition: all 0.18s;
          text-decoration: none;
        }
        .ref-share-btn:hover {
          background: rgba(200,155,60,0.14);
          border-color: rgba(200,155,60,0.32);
          color: #C89B3C;
        }

        @media (max-width: 760px) {
          .ref-wrap { padding: 0 20px 60px; }
          .ref-card { grid-template-columns: 1fr; }
          .ref-deco-big { font-size: 120px; }
          .ref-left { padding: 36px 28px 24px; }
          .ref-right { padding: 24px 28px 36px; border-left: none; border-top: 1px solid rgba(200,155,60,0.1); }
        }
      `}</style>

      <div className="ref-wrap">
        <div className="ref-card">

          {/* Left */}
          <div className="ref-left">
            <div className="ref-eyebrow">
              <span className="ref-eyebrow-line" />
              Referrals
            </div>
            <h2 className="ref-h">
              Refer a friend.<br />
              <em>Both of you benefit.</em>
            </h2>
            <div className="ref-steps">
              {[
                { n: "01", title: "Share your link", body: "Send your unique referral link to a friend or family member." },
                { n: "02", title: "They sign up", body: "They get their first month free when they join using your link." },
                { n: "03", title: "You both earn", body: "One free month credited to your account the moment they join." },
              ].map(s => (
                <div className="ref-step" key={s.n}>
                  <div className="ref-step-num">{s.n}</div>
                  <div>
                    <div className="ref-step-title">{s.title}</div>
                    <div className="ref-step-body">{s.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="ref-right">
            <div className="ref-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              1 free month · you + your friend
            </div>
            <div className="ref-right-h">Your referral link</div>
            <div className="ref-right-sub">Share anywhere — WhatsApp, email, or copy below.</div>
            <div className="ref-link-box">
              <span className="ref-link-text">{referralLink}</span>
              <button className={`ref-copy-btn${copied ? " done" : ""}`} onClick={copy}>
                {copied ? "✓ Copied" : "Copy link"}
              </button>
            </div>
            <div className="ref-share-row">
              Share via:
              <a className="ref-share-btn" href={`https://wa.me/?text=Protect%20your%20family%27s%20legacy%20with%20Soult%20—%20India%27s%20secure%20digital%20vault.%20${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.54 4.064 1.487 5.777L.057 23.999l6.336-1.407A11.958 11.958 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.306-1.555l-.38-.225-3.938.875.881-3.832-.245-.393A9.794 9.794 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
                WhatsApp
              </a>
              <a className="ref-share-btn" href={`mailto:?subject=Protect your family legacy with Soult&body=I use Soult to organise my family's assets and documents. You should too — here's a free month on me: ${referralLink}`}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Email
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
