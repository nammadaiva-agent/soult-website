"use client";
import { useState } from "react";

export default function B2BContact() {
  const [type, setType] = useState<"enterprise" | "partner">("enterprise");
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", size: "", message: "",
  });

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = type === "enterprise"
      ? `Enterprise Enquiry — ${form.company}`
      : `Channel Partner Enquiry — ${form.company}`;
    const body = [
      `Type: ${type === "enterprise" ? "Enterprise" : "Channel Partner"}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      type === "enterprise" ? `Team size: ${form.size}` : `Network size: ${form.size}`,
      ``,
      `Message:`,
      form.message,
    ].join("\n");
    window.location.href = `mailto:sk@soultdigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const isEnterprise = type === "enterprise";

  return (
    <>
      <style>{`
        .b2b-wrap {
          padding: 24px 64px 80px;
          max-width: 1164px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .b2b-card {
          max-width: 1100px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(43,29,22,0.13);
          border: 1px solid rgba(43,29,22,0.1);
          display: grid;
          grid-template-columns: 380px 1fr;
        }

        /* Left panel */
        .b2b-left {
          background: linear-gradient(160deg, #1C0E05 0%, #2B1D16 100%);
          padding: 56px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }
        .b2b-left-glow {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(200,155,60,0.12) 0%, transparent 68%);
          top: -120px; right: -100px;
          pointer-events: none;
        }
        .b2b-left-content { position: relative; z-index: 1; }
        .b2b-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(200,155,60,0.55);
          margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .b2b-eyebrow-line { width: 18px; height: 1px; background: rgba(200,155,60,0.4); display: inline-block; }
        .b2b-left-h {
          font-size: 36px; font-weight: 900; color: #F5EFE3;
          letter-spacing: -0.03em; line-height: 1.1;
          margin: 0 0 16px;
        }
        .b2b-left-h em { font-style: normal; color: #D4A843; }
        .b2b-left-p {
          font-size: 15px; color: rgba(245,239,227,0.45);
          line-height: 1.72; margin: 0 0 40px;
        }

        /* Type toggle */
        .b2b-type-toggle {
          display: flex; flex-direction: column; gap: 10px;
          position: relative; z-index: 1;
        }
        .b2b-type-btn {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 16px 18px; border-radius: 12px;
          border: 1px solid rgba(200,155,60,0.15);
          background: rgba(200,155,60,0.04);
          cursor: pointer; transition: all 0.2s; text-align: left;
        }
        .b2b-type-btn.active {
          background: rgba(200,155,60,0.12);
          border-color: rgba(200,155,60,0.35);
        }
        .b2b-type-dot {
          width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
          border: 1.5px solid rgba(200,155,60,0.4);
          display: flex; align-items: center; justify-content: center;
          margin-top: 2px;
        }
        .b2b-type-dot.active { border-color: #C89B3C; background: rgba(200,155,60,0.15); }
        .b2b-type-dot.active::after {
          content: ''; display: block; width: 6px; height: 6px;
          border-radius: 50%; background: #C89B3C;
        }
        .b2b-type-title { font-size: 14px; font-weight: 700; color: #F5EFE3; margin-bottom: 2px; }
        .b2b-type-sub { font-size: 12px; color: rgba(245,239,227,0.38); line-height: 1.4; }

        /* Right panel — form */
        .b2b-right {
          background: #fff;
          padding: 56px 56px;
        }
        .b2b-form-h {
          font-size: 24px; font-weight: 900; color: #2B1D16;
          letter-spacing: -0.02em; margin: 0 0 6px;
        }
        .b2b-form-sub {
          font-size: 15px; color: rgba(43,29,22,0.45); margin: 0 0 36px;
          line-height: 1.6;
        }
        .b2b-form-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
          margin-bottom: 16px;
        }
        .b2b-field { display: flex; flex-direction: column; gap: 6px; }
        .b2b-field.full { grid-column: 1 / -1; }
        .b2b-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(43,29,22,0.45);
        }
        .b2b-input, .b2b-textarea, .b2b-select {
          padding: 13px 16px;
          border: 1.5px solid rgba(43,29,22,0.12);
          border-radius: 10px;
          font-size: 15px; color: #2B1D16;
          background: #FAFAF8;
          outline: none;
          transition: border-color 0.18s;
          font-family: inherit;
          width: 100%; box-sizing: border-box;
        }
        .b2b-input:focus, .b2b-textarea:focus, .b2b-select:focus {
          border-color: #C89B3C;
          background: #fff;
        }
        .b2b-input::placeholder, .b2b-textarea::placeholder { color: rgba(43,29,22,0.28); }
        .b2b-textarea { resize: vertical; min-height: 110px; }
        .b2b-submit {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px; border-radius: 10px; border: none;
          background: #2B1D16; color: #F5EFE3;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer;
          transition: background 0.2s;
          margin-top: 8px;
        }
        .b2b-submit:hover { background: #C89B3C; }
        .b2b-note {
          font-size: 12px; color: rgba(43,29,22,0.35);
          margin-top: 12px; line-height: 1.6;
        }

        @media (max-width: 860px) {
          .b2b-wrap { padding: 24px 20px 60px; }
          .b2b-card { grid-template-columns: 1fr; }
          .b2b-left { padding: 40px 28px; }
          .b2b-right { padding: 40px 28px; }
          .b2b-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="b2b-wrap">
        <div className="b2b-card">

          {/* Left — context + type selector */}
          <div className="b2b-left">
            <div className="b2b-left-glow" />
            <div className="b2b-left-content">
              <div className="b2b-eyebrow">
                <span className="b2b-eyebrow-line" />
                Get in touch
              </div>
              <h2 className="b2b-left-h">
                Let&apos;s make it<br /><em>simple for you.</em>
              </h2>
              <p className="b2b-left-p">
                Whether you&apos;re exploring a wellbeing benefit for your workforce or looking to introduce Soult through your network — we&apos;ll keep it straightforward.
              </p>
            </div>

            <div className="b2b-type-toggle">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,239,227,0.3)", margin: "0 0 6px" }}>I am reaching out as</p>
              {([
                { key: "enterprise", title: "An Employer / Institution", sub: "HR, benefits, or workforce wellbeing" },
                { key: "partner", title: "A Channel Partner", sub: "Advisor, distributor, or institution" },
              ] as const).map(opt => (
                <button
                  key={opt.key}
                  className={`b2b-type-btn${type === opt.key ? " active" : ""}`}
                  onClick={() => setType(opt.key)}
                  type="button"
                >
                  <div className={`b2b-type-dot${type === opt.key ? " active" : ""}`} />
                  <div>
                    <div className="b2b-type-title">{opt.title}</div>
                    <div className="b2b-type-sub">{opt.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="b2b-right">
            <h3 className="b2b-form-h">
              {isEnterprise ? "Enterprise enquiry" : "Partner enquiry"}
            </h3>
            <p className="b2b-form-sub">
              {isEnterprise
                ? "Tell us about your organisation and we'll get back to you within one business day."
                : "Share your details and we'll reach out to discuss structure, access, and commercial terms."}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="b2b-form-grid">
                <div className="b2b-field">
                  <label className="b2b-label">Your name</label>
                  <input className="b2b-input" placeholder="Full name" required value={form.name} onChange={e => set("name", e.target.value)} />
                </div>
                <div className="b2b-field">
                  <label className="b2b-label">{isEnterprise ? "Company / Organisation" : "Firm / Institution"}</label>
                  <input className="b2b-input" placeholder={isEnterprise ? "Company name" : "Firm name"} required value={form.company} onChange={e => set("company", e.target.value)} />
                </div>
                <div className="b2b-field">
                  <label className="b2b-label">Work email</label>
                  <input className="b2b-input" type="email" placeholder="you@company.com" required value={form.email} onChange={e => set("email", e.target.value)} />
                </div>
                <div className="b2b-field">
                  <label className="b2b-label">Phone number</label>
                  <input className="b2b-input" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => set("phone", e.target.value)} />
                </div>
                <div className="b2b-field full">
                  <label className="b2b-label">{isEnterprise ? "Number of employees" : "Network / client size"}</label>
                  <select className="b2b-select" value={form.size} onChange={e => set("size", e.target.value)}>
                    <option value="">Select a range</option>
                    {isEnterprise ? (
                      <>
                        <option>Under 50</option>
                        <option>50–200</option>
                        <option>200–1,000</option>
                        <option>1,000–5,000</option>
                        <option>5,000+</option>
                      </>
                    ) : (
                      <>
                        <option>Under 50 clients</option>
                        <option>50–200 clients</option>
                        <option>200–500 clients</option>
                        <option>500+ clients</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="b2b-field full">
                  <label className="b2b-label">Anything specific you&apos;d like us to know?</label>
                  <textarea
                    className="b2b-textarea"
                    placeholder={isEnterprise
                      ? "e.g. timeline, existing benefits stack, specific requirements..."
                      : "e.g. your client profile, distribution model, commercial expectations..."}
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="b2b-submit">
                {isEnterprise ? "Send Enterprise Enquiry" : "Send Partner Enquiry"}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <p className="b2b-note">
                We respond within one business day. Your details are never shared with third parties.
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
