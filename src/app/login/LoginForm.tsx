"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";

type View = "phone" | "otp";

export default function LoginForm() {
  const [view, setView] = useState<View>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    setResendTimer(30);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer(t => {
        if (t <= 1) { clearInterval(timerRef.current!); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) { setError("Please enter a valid 10-digit mobile number."); return; }
    setLoading(true);
    const { error } = await getSupabase().auth.signInWithOtp({ phone: `+91${digits}` });
    setLoading(false);
    if (error) { setError(error.message); }
    else { setView("otp"); startTimer(); }
  };

  const handleOtpChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) otpRefs.current[i + 1]?.focus();
    if (!val && i > 0) otpRefs.current[i - 1]?.focus();
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (text.length === 6) {
      setOtp(text.split(""));
      otpRefs.current[5]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) { setError("Please enter the 6-digit OTP."); return; }
    setError("");
    setLoading(true);
    const digits = phone.replace(/\D/g, "");
    const { error } = await getSupabase().auth.verifyOtp({
      phone: `+91${digits}`,
      token: code,
      type: "sms",
    });
    setLoading(false);
    if (error) { setError("Invalid or expired OTP. Please try again."); }
    else { window.location.href = "/vault"; }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    setError("");
    const digits = phone.replace(/\D/g, "");
    setLoading(true);
    await getSupabase().auth.signInWithOtp({ phone: `+91${digits}` });
    setLoading(false);
    setOtp(["", "", "", "", "", ""]);
    otpRefs.current[0]?.focus();
    startTimer();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .sl-page {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1A0D07;
          font-family: 'Outfit', sans-serif;
          padding: 24px 16px;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glows */
        .sl-glow {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
        }
        .sl-glow-1 {
          width: 700px; height: 700px;
          background: radial-gradient(ellipse, rgba(200,155,60,0.07) 0%, transparent 65%);
          top: -200px; right: -200px;
        }
        .sl-glow-2 {
          width: 500px; height: 500px;
          background: radial-gradient(ellipse, rgba(200,155,60,0.05) 0%, transparent 65%);
          bottom: -150px; left: -150px;
        }

        /* Card */
        .sl-card {
          position: relative; z-index: 1;
          width: 100%; max-width: 440px;
          background: linear-gradient(180deg, #2B1D16 0%, #221409 100%);
          border: 1px solid rgba(200,155,60,0.18);
          border-radius: 28px;
          padding: 48px 44px 40px;
          box-shadow: 0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(200,155,60,0.08) inset;
        }

        /* Logo */
        .sl-logo {
          display: flex; flex-direction: column;
          align-items: center; gap: 10px;
          margin-bottom: 36px;
        }
        .sl-logo-img {
          width: 52px; height: 52px; border-radius: 14px;
          border: 1px solid rgba(200,155,60,0.2);
          overflow: hidden;
          background: rgba(200,155,60,0.06);
          display: flex; align-items: center; justify-content: center;
        }
        .sl-logo-name {
          font-size: 26px; font-weight: 900; color: #F5EFE3;
          letter-spacing: -0.03em;
        }
        .sl-logo-name em { font-style: normal; color: #D4A843; }
        .sl-logo-sub {
          font-size: 13px; color: rgba(245,239,227,0.35);
          letter-spacing: 0.01em; text-align: center; line-height: 1.4;
        }

        /* Divider */
        .sl-divider {
          height: 1px; background: rgba(200,155,60,0.12); margin: 0 0 32px;
        }

        /* Headings */
        .sl-h { font-size: 22px; font-weight: 800; color: #F5EFE3; letter-spacing: -0.02em; margin: 0 0 6px; }
        .sl-sub { font-size: 14px; color: rgba(245,239,227,0.38); margin: 0 0 28px; line-height: 1.55; }

        /* Phone input */
        .sl-phone-wrap {
          display: flex; border: 1.5px solid rgba(200,155,60,0.2); border-radius: 12px;
          overflow: hidden; margin-bottom: 20px; background: rgba(0,0,0,0.22);
          transition: border-color 0.18s;
        }
        .sl-phone-wrap:focus-within { border-color: rgba(200,155,60,0.55); }
        .sl-phone-prefix {
          padding: 14px 14px 14px 18px;
          font-size: 16px; font-weight: 700; color: #C89B3C;
          border-right: 1px solid rgba(200,155,60,0.15);
          white-space: nowrap; user-select: none;
          display: flex; align-items: center;
        }
        .sl-phone-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 16px; color: #F5EFE3; font-family: inherit;
          padding: 14px 16px; letter-spacing: 0.04em;
        }
        .sl-phone-input::placeholder { color: rgba(245,239,227,0.22); }

        /* OTP boxes */
        .sl-otp-row {
          display: flex; gap: 10px; justify-content: center; margin-bottom: 24px;
        }
        .sl-otp-box {
          width: 52px; height: 56px; text-align: center;
          background: rgba(0,0,0,0.22); border: 1.5px solid rgba(200,155,60,0.18);
          border-radius: 10px; font-size: 22px; font-weight: 800;
          color: #F5EFE3; outline: none; font-family: inherit;
          transition: border-color 0.18s, background 0.18s;
          caret-color: #C89B3C;
        }
        .sl-otp-box:focus {
          border-color: #C89B3C; background: rgba(200,155,60,0.06);
        }

        /* Error */
        .sl-error {
          background: rgba(180,30,30,0.12); border: 1px solid rgba(220,60,60,0.22);
          border-radius: 8px; padding: 11px 14px;
          font-size: 13px; color: #F08080; margin-bottom: 16px; line-height: 1.45;
        }

        /* Button */
        .sl-btn {
          width: 100%; padding: 15px; border-radius: 12px; border: none;
          background: linear-gradient(135deg, #C89B3C 0%, #D4A843 100%);
          color: #1C0E05; font-size: 14px; font-weight: 800;
          letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; font-family: inherit;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: opacity 0.2s, transform 0.15s;
          box-shadow: 0 4px 20px rgba(200,155,60,0.22);
        }
        .sl-btn:hover:not(:disabled) { opacity: 0.92; transform: translateY(-1px); }
        .sl-btn:active:not(:disabled) { transform: translateY(0); }
        .sl-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Resend */
        .sl-resend {
          text-align: center; margin-top: 16px;
          font-size: 13px; color: rgba(245,239,227,0.3);
        }
        .sl-resend-btn {
          background: none; border: none; font-family: inherit;
          font-size: 13px; font-weight: 700; color: #C89B3C;
          cursor: pointer; padding: 0; transition: opacity 0.18s;
        }
        .sl-resend-btn:disabled { opacity: 0.35; cursor: default; }

        /* Back */
        .sl-back {
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; font-family: inherit;
          font-size: 13px; color: rgba(245,239,227,0.3); cursor: pointer;
          padding: 0; margin-bottom: 24px; transition: color 0.18s;
        }
        .sl-back:hover { color: #C89B3C; }

        /* New to Soult */
        .sl-new {
          margin-top: 32px; padding-top: 28px;
          border-top: 1px solid rgba(200,155,60,0.1);
        }
        .sl-new-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: rgba(245,239,227,0.25);
          text-align: center; margin-bottom: 10px;
        }
        .sl-new-body {
          font-size: 13px; color: rgba(245,239,227,0.32);
          text-align: center; line-height: 1.6; margin-bottom: 18px;
        }
        .sl-new-body a { color: #C89B3C; text-decoration: none; font-weight: 600; }
        .sl-app-row { display: flex; gap: 10px; }
        .sl-app-btn {
          flex: 1; display: flex; align-items: center; gap: 10px;
          background: rgba(200,155,60,0.06);
          border: 1px solid rgba(200,155,60,0.18);
          border-radius: 10px; padding: 11px 14px;
          cursor: pointer; text-decoration: none;
          transition: background 0.18s, border-color 0.18s;
        }
        .sl-app-btn:hover {
          background: rgba(200,155,60,0.11); border-color: rgba(200,155,60,0.32);
        }
        .sl-app-icon { color: #C89B3C; flex-shrink: 0; }
        .sl-app-small { font-size: 10px; color: rgba(245,239,227,0.35); line-height: 1; margin-bottom: 2px; }
        .sl-app-store { font-size: 13px; font-weight: 700; color: #F5EFE3; line-height: 1; }

        /* Footer */
        .sl-footer {
          margin-top: 28px; text-align: center;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          flex-wrap: wrap;
        }
        .sl-footer a {
          font-size: 12px; color: rgba(245,239,227,0.22); text-decoration: none;
          transition: color 0.18s;
        }
        .sl-footer a:hover { color: #C89B3C; }
        .sl-footer-dot { color: rgba(245,239,227,0.15); font-size: 12px; }

        /* Spinner */
        .sl-spinner {
          width: 16px; height: 16px; border-radius: 50%;
          border: 2px solid rgba(28,14,5,0.2); border-top-color: #1C0E05;
          animation: sl-spin 0.7s linear infinite;
        }
        @keyframes sl-spin { to { transform: rotate(360deg); } }

        @media (max-width: 480px) {
          .sl-card { padding: 36px 24px 32px; border-radius: 20px; }
          .sl-otp-box { width: 44px; height: 50px; font-size: 20px; }
          .sl-otp-row { gap: 7px; }
        }
      `}</style>

      <div className="sl-page">
        <div className="sl-glow sl-glow-1" />
        <div className="sl-glow sl-glow-2" />

        <div className="sl-card">

          {/* Logo */}
          <div className="sl-logo">
            <div className="sl-logo-img">
              <Image src="/soult-logo.png" alt="Soult" width={40} height={40} />
            </div>
            <div>
              <div className="sl-logo-name">soult</div>
            </div>
            <div className="sl-logo-sub">Manage Your Soult Subscription Plan</div>
          </div>

          <div className="sl-divider" />

          {/* ── Phone step ── */}
          {view === "phone" && (
            <form onSubmit={handleSendOtp}>
              <h2 className="sl-h">Sign in</h2>
              <p className="sl-sub">Enter your registered mobile number.</p>

              {error && <div className="sl-error">{error}</div>}

              <div className="sl-phone-wrap">
                <div className="sl-phone-prefix">+91</div>
                <input
                  className="sl-phone-input"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  autoComplete="tel-national"
                  autoFocus
                />
              </div>

              <button className="sl-btn" type="submit" disabled={loading}>
                {loading ? <span className="sl-spinner" /> : "Send OTP"}
              </button>
            </form>
          )}

          {/* ── OTP step ── */}
          {view === "otp" && (
            <form onSubmit={handleVerify}>
              <button type="button" className="sl-back" onClick={() => { setView("phone"); setError(""); setOtp(["","","","","",""]); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                Back
              </button>

              <h2 className="sl-h">Enter OTP</h2>
              <p className="sl-sub">
                Sent to <span style={{ color: "#C89B3C", fontWeight: 700 }}>+91 {phone}</span>
              </p>

              {error && <div className="sl-error">{error}</div>}

              <div className="sl-otp-row" onPaste={handleOtpPaste}>
                {otp.map((d, i) => (
                  <input
                    key={i}
                    ref={el => { otpRefs.current[i] = el; }}
                    className="sl-otp-box"
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => { if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus(); }}
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              <button className="sl-btn" type="submit" disabled={loading}>
                {loading ? <span className="sl-spinner" /> : "Verify & Sign In"}
              </button>

              <div className="sl-resend">
                Didn&apos;t receive it?{" "}
                <button className="sl-resend-btn" type="button" onClick={handleResend} disabled={resendTimer > 0}>
                  {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                </button>
              </div>
            </form>
          )}

          {/* New to Soult */}
          <div className="sl-new">
            <div className="sl-new-label">New to Soult?</div>
            <p className="sl-new-body">
              Registration is available only on the{" "}
              <a href="https://soultdigital.com" target="_blank" rel="noopener noreferrer">Soult mobile app</a>.
              {" "}Download the app to get started.
            </p>
            <div className="sl-app-row">
              <a className="sl-app-btn" href="#" target="_blank" rel="noopener noreferrer">
                <svg className="sl-app-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div className="sl-app-small">Download on the</div>
                  <div className="sl-app-store">App Store</div>
                </div>
              </a>
              <a className="sl-app-btn" href="#" target="_blank" rel="noopener noreferrer">
                <svg className="sl-app-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.22.99.13l.06-.04 11.62-6.7-2.52-2.52-10.15 9.13zM.54 1.28C.2 1.6 0 2.1 0 2.73v18.54c0 .63.2 1.13.54 1.45l.08.07 10.39-10.38v-.25L.62 1.21l-.08.07zM20.3 10.43l-2.95-1.71-2.83 2.83 2.83 2.84 2.97-1.72c.85-.49.85-1.29-.02-1.24zM3.18.24l10.14 9.14 2.52-2.53L4.23.11C3.88.01 3.54.07 3.18.24z"/>
                </svg>
                <div>
                  <div className="sl-app-small">Get it on</div>
                  <div className="sl-app-store">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="sl-footer">
            <Link href="/legal/terms">Terms of Use</Link>
            <span className="sl-footer-dot">·</span>
            <Link href="/legal/privacy">Privacy Policy</Link>
            <span className="sl-footer-dot">·</span>
            <Link href="/">soultdigital.com</Link>
          </div>

        </div>
      </div>
    </>
  );
}
