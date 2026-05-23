import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Soult Digital",
  description: "How Soult Digital protects your vault with enterprise-grade security infrastructure.",
};

const SECTIONS = [
  { n: "01", h: "Crafted Infrastructure", p: "Soult is built on Amazon's Mumbai data centers (ap-south-1) with AWS Hyderabad as backup. We use a serverless approach via AWS Lambda with multi-region redundancy to eliminate persistent attack surfaces." },
  { n: "02", h: "Silo Architecture", p: "User data routes by country to isolated regional silos. The India + GCC silo operates in ap-south-1 and ap-south-2. Future silos are planned for the US, Southeast Asia, and dedicated GCC regions with strict isolation — no cross-silo data movement." },
  { n: "03", h: "Identity & Access", p: "Registration requires phone and email OTP verification plus a security question and 4-digit PIN. Daily access uses the PIN. New devices trigger 2-factor authentication — phone OTP first, then PIN." },
  { n: "04", h: "MPIN & Shared Devices", p: "The 4-digit PIN keeps vaults private on shared phones. Server-side validation enforces a 3-strike lockout lasting 24 hours, persisting across reinstalls and device changes. The 3-strike lockout is the real protection." },
  { n: "05", h: "AES-256 Encryption", p: "Data is encrypted with AES-256 at rest. Master keys are stored in separate secure hardware safes. Stolen hardware yields only meaningless encrypted text — completely unreadable without the corresponding keys." },
  { n: "06", h: "Key Management (KMS)", p: "We use envelope encryption via AWS KMS with Customer Master Keys held in hardware security modules. Staff never access decryption keys directly. Even our engineers cannot read your vault contents." },
  { n: "07", h: "Field-Level Security", p: "High-sensitivity fields such as Will and Policy IDs receive additional KMS field-level encryption, rendering them as scrambled gibberish at the database level even to unauthorised table reads." },
  { n: "08", h: "Encryption in Transit", p: "All data in transit is protected by TLS 1.2+, API Gateway HTTPS enforcement, and CloudFront signed URLs with 15-minute expiration. Your data is protected at every step of its journey." },
  { n: "09", h: "The No-Human Principle", p: "IAM policies prevent Soult staff from holding decrypt permissions. Zero human access to vault contents under normal operations — content appears as scrambled code to engineers. Your privacy is structural, not just policy." },
  { n: "10", h: "Executor Access Roles", p: "Regular Executor: Multiple allowed, requires death or incapacity flag plus OTP verification at each step. Emergency Executor: One allowed (typically spouse), can log in anytime but forces the vault to read-only while active. Every action triggers instant notifications." },
  { n: "11", h: "Legacy Handover Protocol", p: "Regular executor raises a flag from the dashboard. Multi-step verification includes OTP, phone call confirmation, two-person internal approval before access is granted. Executor sees the vault in read-only mode — nothing can be deleted or exported." },
  { n: "12", h: "The Audit Trail", p: "An append-only log tracks every creation, update, and deletion with timestamp and actor. Read events are excluded for privacy-performance balance. This provides a complete footprint of all vault changes." },
  { n: "13", h: "Data Usage Boundaries", p: "Vault content never trains AI models. Any in-session AI features process data contextually only and are not retained for model improvement. Revenue is subscription-only. Any future monetisation changes require explicit per-user opt-in." },
  { n: "14", h: "Disaster Recovery", p: "Tier 1 — Single server failure: invisible, AWS recovers in minutes. Tier 2 — Mumbai region down: Hyderabad takes over within one hour, no data loss. Tier 3 — Both Indian regions down: service halts, 7–14 days operational recovery. Tier 4 — Cross-silo backup replication is on our roadmap." },
  { n: "15", h: "Honest Claims", p: "Staff-inaccessible vault, data residency in India, AES-256 encryption, ISO 27001 and ISO 9001 certification: TRUE. One-click vault export and cross-silo backup: PLANNED. Per-item sharing and blockchain usage: NOT BUILT. AI training on user data: NEVER." },
  { n: "16", h: "Roadmap", p: "Near-term: One-click encrypted export, US silo (N. Virginia + Oregon DR), SEA silo (Singapore + Jakarta DR), cross-silo backup replication. Mid-term: Dedicated GCC silo, SOC 2 Type II. Ongoing: Security audits, infrastructure hardening, and independent reviews." },
];

const TRUST = [
  { label: "ISO 27001", sub: "Information Security" },
  { label: "ISO 9001", sub: "Quality Management" },
  { label: "AES-256", sub: "Encryption at Rest" },
  { label: "TLS 1.2+", sub: "Encryption in Transit" },
  { label: "AWS Mumbai", sub: "ap-south-1 Primary" },
  { label: "Zero Human Access", sub: "By Architecture" },
];

export default function SecurityPage() {
  return (
    <>
      <style>{`
        .legal-page { background: #FDFAF6; min-height: 100vh; font-family: 'Outfit', sans-serif; color: #2B1D16; }
        .legal-hero { background: #2B1D16; padding: 120px 64px 80px; text-align: center; }
        .legal-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #C89B3C; margin-bottom: 20px; }
        .legal-hero-h { font-size: clamp(36px, 4vw, 56px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 16px; }
        .legal-hero-sub { font-size: 15px; color: rgba(237,230,216,0.45); }

        .sec-trust-strip { background: #1A1009; padding: 48px 64px; }
        .sec-trust-grid {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(6,1fr); gap: 16px;
        }
        .sec-trust-item {
          text-align: center; padding: 24px 16px;
          border: 1px solid rgba(200,155,60,0.15); border-radius: 14px;
          background: rgba(200,155,60,0.05);
        }
        .sec-trust-label { font-size: 15px; font-weight: 800; color: #EDE6D8; margin-bottom: 6px; }
        .sec-trust-sub { font-size: 11px; color: rgba(200,155,60,0.6); letter-spacing: 0.06em; }

        .legal-body { max-width: 860px; margin: 0 auto; padding: 80px 64px 120px; }
        .legal-section { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid rgba(43,29,22,0.08); }
        .legal-section:last-child { border-bottom: none; }
        .legal-section-num { font-size: 11px; font-weight: 800; letter-spacing: 0.2em; color: #C89B3C; margin-bottom: 10px; }
        .legal-section-h { font-size: 22px; font-weight: 800; color: #2B1D16; margin-bottom: 16px; letter-spacing: -0.01em; }
        .legal-section-p { font-size: 18px; color: rgba(43,29,22,0.65); line-height: 1.8; margin: 0; }
        .legal-contact { background: #F5F0E8; border-radius: 20px; padding: 40px; margin-top: 64px; }
        .legal-contact-h { font-size: 20px; font-weight: 800; color: #2B1D16; margin-bottom: 16px; }
        .legal-contact-p { font-size: 18px; color: rgba(43,29,22,0.65); line-height: 1.8; margin: 0; }
        .legal-contact a { color: #C89B3C; text-decoration: none; }
        @media (max-width: 900px) {
          .sec-trust-grid { grid-template-columns: repeat(3,1fr); }
          .legal-hero { padding: 100px 24px 60px; }
          .legal-body { padding: 48px 24px 80px; }
          .sec-trust-strip { padding: 40px 24px; }
        }
        @media (max-width: 600px) {
          .sec-trust-grid { grid-template-columns: repeat(2,1fr); }
        }
      `}</style>

      <div className="legal-page">
        <div className="legal-hero">
          <div className="legal-eyebrow">Security</div>
          <h1 className="legal-hero-h">Built to protect<br />what matters most.</h1>
          <p className="legal-hero-sub">How we keep your vault safe — every layer, honestly explained.</p>
        </div>

        <div className="sec-trust-strip">
          <div className="sec-trust-grid">
            {TRUST.map((t) => (
              <div className="sec-trust-item" key={t.label}>
                <div className="sec-trust-label">{t.label}</div>
                <div className="sec-trust-sub">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="legal-body">
          {SECTIONS.map((s) => (
            <div className="legal-section" key={s.n}>
              <div className="legal-section-num">{s.n}</div>
              <div className="legal-section-h">{s.h}</div>
              <p className="legal-section-p">{s.p}</p>
            </div>
          ))}

          <div className="legal-contact">
            <div className="legal-contact-h">Security Queries</div>
            <p className="legal-contact-p">
              For security concerns, vulnerability disclosures, or questions about our infrastructure,<br />
              please reach us at <a href="mailto:support@soultdigital.com">support@soultdigital.com</a><br /><br />
              Soult Digital Private Limited<br />
              Door No 4-1-143/1A(2), Vertex Workspace, Gateway Building,<br />
              MG Road, Mangalore 575003, Karnataka, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
