"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSupabase } from "@/lib/supabase";

type View = "phone" | "otp";

const APP_STORE_URL  = "https://apps.apple.com/in/app/soult";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.soultdigital.app";

export default function VaultPage() {
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
      setResendTimer(t => { if (t <= 1) { clearInterval(timerRef.current!); return 0; } return t - 1; });
    }, 1000);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault(); setError("");
    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) { setError("Enter a valid 10-digit number."); return; }
    setLoading(true);
    const { error } = await getSupabase().auth.signInWithOtp({ phone: `+91${digits}` });
    setLoading(false);
    if (error) setError(error.message);
    else { setView("otp"); startTimer(); }
  };

  const handleOtpChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[i] = val; setOtp(next);
    if (val && i < 5) otpRefs.current[i + 1]?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length !== 6) { setError("Enter the 6-digit OTP."); return; }
    setError(""); setLoading(true);
    const { error } = await getSupabase().auth.verifyOtp({
      phone: `+91${phone.replace(/\D/g, "")}`, token: code, type: "sms",
    });
    setLoading(false);
    if (error) setError("Invalid or expired OTP. Try again.");
    else window.location.href = "/dashboard";
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    setError(""); setLoading(true);
    await getSupabase().auth.signInWithOtp({ phone: `+91${phone.replace(/\D/g, "")}` });
    setLoading(false);
    setOtp(["", "", "", "", "", ""]); otpRefs.current[0]?.focus(); startTimer();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .vl-page {
          position: fixed; inset: 0; z-index: 9999;
          font-family: 'Outfit', sans-serif;
          background: #EDE6D8;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
        }

        /* Nav */
        .vl-nav {
          position: absolute; top: 0; left: 0; right: 0;
          height: 52px; padding: 0 32px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .vl-nav-back {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 14px; font-weight: 600; color: rgba(43,29,22,0.5);
          text-decoration: none; transition: color 0.18s;
        }
        .vl-nav-back:hover { color: #C89B3C; }

        /* Two-column card */
        .vl-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%; max-width: 780px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(43,29,22,0.2), 0 4px 16px rgba(43,29,22,0.1);
          border: 1px solid rgba(43,29,22,0.1);
        }

        /* LEFT — sign in */
        .vl-left {
          background: #2B1D16;
          padding: 44px 40px;
          display: flex; flex-direction: column; justify-content: center;
        }

        .vl-logo { margin-bottom: 28px; }
        .vl-logo-row { display: flex; align-items: center; gap: 9px; margin-bottom: 4px; }
        .vl-logo-name { font-size: 24px; font-weight: 900; color: #F5EFE3; letter-spacing: -0.03em; }
        .vl-logo-sub { font-size: 13px; color: rgba(245,239,227,0.38); }

        .vl-sep { height: 1px; background: rgba(200,155,60,0.15); margin: 0 0 26px; }

        .vl-h { font-size: 22px; font-weight: 800; color: #F5EFE3; margin: 0 0 6px; letter-spacing: -0.02em; }
        .vl-p { font-size: 18px; color: rgba(245,239,227,0.5); margin: 0 0 20px; line-height: 1.4; }

        .vl-error {
          background: rgba(160,20,20,0.2); border: 1px solid rgba(220,60,60,0.25);
          border-radius: 8px; padding: 10px 13px;
          font-size: 15px; color: #F4A0A0; margin-bottom: 14px; line-height: 1.4;
        }

        .vl-phone-row {
          display: flex; border: 1.5px solid rgba(200,155,60,0.25); border-radius: 12px;
          overflow: hidden; background: rgba(0,0,0,0.22); margin-bottom: 14px;
          transition: border-color 0.2s;
        }
        .vl-phone-row:focus-within { border-color: #C89B3C; }
        .vl-phone-code {
          padding: 13px 12px 13px 16px; font-size: 18px; font-weight: 800; color: #C89B3C;
          border-right: 1px solid rgba(200,155,60,0.18); display: flex; align-items: center;
        }
        .vl-phone-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 18px; color: #F5EFE3; font-family: inherit; padding: 13px 12px;
          letter-spacing: 0.04em;
        }
        .vl-phone-input::placeholder { color: rgba(245,239,227,0.2); }

        .vl-otp-row { display: flex; gap: 7px; margin-bottom: 14px; }
        .vl-otp-box {
          flex: 1; height: 52px; text-align: center;
          background: rgba(0,0,0,0.22); border: 1.5px solid rgba(200,155,60,0.2);
          border-radius: 10px; font-size: 22px; font-weight: 800; color: #F5EFE3;
          outline: none; font-family: inherit; caret-color: #C89B3C;
          transition: border-color 0.18s, background 0.18s;
        }
        .vl-otp-box:focus { border-color: #C89B3C; background: rgba(200,155,60,0.08); }

        .vl-btn {
          width: 100%; padding: 14px; border-radius: 12px; border: none;
          background: #C89B3C; color: #1C0E05;
          font-size: 18px; font-weight: 800; font-family: inherit; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.18s;
        }
        .vl-btn:hover:not(:disabled) { background: #D4A843; }
        .vl-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .vl-resend { text-align: center; margin-top: 12px; font-size: 15px; color: rgba(245,239,227,0.35); }
        .vl-resend-btn {
          background: none; border: none; font-family: inherit; cursor: pointer;
          font-size: 15px; font-weight: 700; color: #C89B3C; padding: 0;
        }
        .vl-resend-btn:disabled { opacity: 0.35; cursor: default; }

        .vl-change {
          background: none; border: none; font-family: inherit; cursor: pointer;
          font-size: 14px; color: rgba(245,239,227,0.35);
          display: inline-flex; align-items: center; gap: 5px;
          padding: 0; margin-bottom: 16px; transition: color 0.18s;
        }
        .vl-change:hover { color: #C89B3C; }

        /* RIGHT — download + plan */
        .vl-right {
          background: #F5F0E8;
          padding: 44px 36px;
          display: flex; flex-direction: column; justify-content: space-between;
        }

        .vl-right-top { flex: 1; }

        .vl-right-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(43,29,22,0.35); margin-bottom: 14px;
        }
        .vl-right-h {
          font-size: 22px; font-weight: 900; color: #2B1D16; letter-spacing: -0.025em;
          line-height: 1.2; margin-bottom: 8px;
        }
        .vl-right-h em { font-style: normal; color: #C89B3C; }
        .vl-right-p {
          font-size: 18px; color: rgba(43,29,22,0.5); line-height: 1.55; margin-bottom: 24px;
        }
        .vl-right-p a { color: #C89B3C; font-weight: 700; text-decoration: none; }

        /* App badges — matching AppStrip exactly */
        .vl-apps { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
        .vl-app {
          display: flex; align-items: center; gap: 16px;
          background: #2B1D16; border-radius: 16px; padding: 16px 20px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(43,29,22,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .vl-app:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(43,29,22,0.28); }
        .vl-app-s { display: block; font-size: 11px; font-weight: 600; color: rgba(237,230,216,0.45); margin-bottom: 3px; }
        .vl-app-n { display: block; font-size: 20px; font-weight: 800; color: #EDE6D8; letter-spacing: -0.015em; line-height: 1; }

        /* Plan note */
        .vl-plan {
          background: rgba(200,155,60,0.08);
          border: 1px solid rgba(200,155,60,0.2);
          border-radius: 12px; padding: 14px 16px;
        }
        .vl-plan-label {
          font-size: 11px; font-weight: 800; letter-spacing: 0.15em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 5px;
        }
        .vl-plan-text { font-size: 18px; color: rgba(43,29,22,0.6); line-height: 1.5; }
        .vl-plan-text a { color: #C89B3C; font-weight: 700; text-decoration: none; }
        .vl-plan-text a:hover { text-decoration: underline; }

        /* Footer */
        .vl-footer {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 18px;
        }
        .vl-footer a { font-size: 12px; color: rgba(43,29,22,0.3); text-decoration: none; transition: color 0.18s; }
        .vl-footer a:hover { color: #C89B3C; }
        .vl-footer span { font-size: 12px; color: rgba(43,29,22,0.18); }

        .vl-spin {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2.5px solid rgba(28,14,5,0.2); border-top-color: #1C0E05;
          animation: sp 0.7s linear infinite;
        }
        @keyframes sp { to { transform: rotate(360deg); } }

        @media (max-width: 680px) {
          .vl-card { grid-template-columns: 1fr; max-width: 420px; }
          .vl-right { border-top: 1px solid rgba(43,29,22,0.08); }
          .vl-page { justify-content: flex-start; overflow-y: auto; padding: 60px 16px 32px; }
        }
      `}</style>

      <div className="vl-page">

        <nav className="vl-nav">
          <Link href="/" className="vl-nav-back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to website
          </Link>
        </nav>

        <div className="vl-card">

          {/* LEFT — Sign in */}
          <div className="vl-left">

            <div className="vl-logo">
              <div className="vl-logo-row">
                <Image src="/soult-logo.png" alt="" width={34} height={34} style={{ borderRadius: 8 }} />
                <span className="vl-logo-name">soult</span>
              </div>
              <div className="vl-logo-sub">Manage Your Soult Subscription Plan</div>
            </div>

            <div className="vl-sep" />

            {view === "phone" && (
              <form onSubmit={handleSendOtp}>
                <h2 className="vl-h">Sign in</h2>
                <p className="vl-p">Enter your registered mobile number.</p>
                {error && <div className="vl-error">{error}</div>}
                <div className="vl-phone-row">
                  <div className="vl-phone-code">+91</div>
                  <input className="vl-phone-input" type="tel" inputMode="numeric" maxLength={10}
                    placeholder="Mobile Number" value={phone} autoFocus autoComplete="tel-national"
                    onChange={e => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} />
                </div>
                <button className="vl-btn" type="submit" disabled={loading}>
                  {loading ? <span className="vl-spin" /> : "Send OTP"}
                </button>
              </form>
            )}

            {view === "otp" && (
              <form onSubmit={handleVerify}>
                <button type="button" className="vl-change"
                  onClick={() => { setView("phone"); setError(""); setOtp(["","","","","",""]); }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                  Change number
                </button>
                <h2 className="vl-h">Enter OTP</h2>
                <p className="vl-p">Sent to <strong style={{ color: "#C89B3C" }}>+91 {phone}</strong></p>
                {error && <div className="vl-error">{error}</div>}
                <div className="vl-otp-row">
                  {otp.map((d, i) => (
                    <input key={i} ref={el => { otpRefs.current[i] = el; }}
                      className="vl-otp-box" type="text" inputMode="numeric" maxLength={1} value={d}
                      onChange={e => handleOtpChange(i, e.target.value)} autoFocus={i === 0}
                      onKeyDown={e => { if (e.key === "Backspace" && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus(); }} />
                  ))}
                </div>
                <button className="vl-btn" type="submit" disabled={loading}>
                  {loading ? <span className="vl-spin" /> : "Verify & Sign In"}
                </button>
                <div className="vl-resend">
                  Didn&apos;t receive it?{" "}
                  <button type="button" className="vl-resend-btn" onClick={handleResend} disabled={resendTimer > 0}>
                    {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Download + Plan */}
          <div className="vl-right">
            <div className="vl-right-top">
              <div className="vl-right-eyebrow">New to Soult?</div>
              <h3 className="vl-right-h">Get the app.<br /><em>Start your vault.</em></h3>
              <p className="vl-right-p">
                Registration is only on the <a href="https://soultdigital.com" target="_blank" rel="noopener noreferrer">Soult mobile app</a>. Download to get started.
              </p>

              <div className="vl-apps">
                <a className="vl-app" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#EDE6D8">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <span className="vl-app-s">Download on the</span>
                    <span className="vl-app-n">App Store</span>
                  </div>
                </a>
                <a className="vl-app" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <svg width="30" height="30" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.37.2.8.2 1.18 0L14.94 12 4.36.24C3.98.04 3.55.04 3.18.24 2.46.64 2 1.4 2 2.24v19.52c0 .84.46 1.6 1.18 2z" fill="#EA4335"/>
                    <path d="M20.82 10.26L17.58 8.4 14.94 12l2.64 3.6 3.24-1.86c.73-.42 1.18-1.18 1.18-2.02s-.45-1.6-1.18-2.02v.56z" fill="#FBBC05"/>
                    <path d="M4.36.24L14.94 12 17.58 8.4 5.54.24C5.17.04 4.73.04 4.36.24z" fill="#4285F4"/>
                    <path d="M4.36 23.76c.37.2.81.2 1.18 0l12.04-8.16L14.94 12 4.36 23.76z" fill="#34A853"/>
                  </svg>
                  <div>
                    <span className="vl-app-s">Get it on</span>
                    <span className="vl-app-n">Google Play</span>
                  </div>
                </a>
              </div>

              <div className="vl-plan">
                <div className="vl-plan-label">Already have a plan?</div>
                <div className="vl-plan-text">
                  Sign in on the left to manage your subscription, renew, or upgrade your Soult vault plan. <Link href="/pricing">View plans →</Link>
                </div>
              </div>
            </div>

            <div className="vl-footer">
              <Link href="/legal/terms">Terms of Use</Link>
              <span>·</span>
              <Link href="/legal/privacy">Privacy Policy</Link>
              <span>·</span>
              <Link href="/">soultdigital.com</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
