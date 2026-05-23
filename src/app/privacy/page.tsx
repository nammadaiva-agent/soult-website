import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Soult Digital",
  description: "How Soult Digital protects and handles your personal information.",
};

const SECTIONS = [
  {
    n: "01",
    h: "What Soult Is",
    p: "Soult functions as a secure digital vault where users store personal information. Soult does not access, read, analyse, or interpret any content you store in your vault. The service applies to mobile applications on Android and iOS, not the informational website.",
  },
  {
    n: "02",
    h: "What You Store in Your Vault",
    p: "Users voluntarily add all vault contents. The policy identifies five categories: account identifiers (name, phone, email), authentication data (security credentials), financial records, uploaded documents, and personal memories. All information is self-declared by you and verification does not occur. Users may store information about family members, including minors, under their own responsibility.",
  },
  {
    n: "03",
    h: "How Your Vault Is Protected",
    p: "Encryption forms the foundation: AES-256 at rest, TLS in transit, MPIN/biometric access, role-based infrastructure controls, and complete audit trails. We are building toward a zero-knowledge architecture where even internal systems cannot access vault contents.",
  },
  {
    n: "04",
    h: "Who We Are and Legal Basis",
    p: "Soult Digital Private Limited operates under Indian law. Processing relies on user consent, compliance with the Information Technology Act 2000 and Digital Personal Data Protection Act 2023, and legitimate interests in security and fraud prevention.",
  },
  {
    n: "05",
    h: "Data Storage & Location",
    p: "All data resides on AWS Mumbai infrastructure (ap-south-1). Your data does not leave India and processing occurs entirely within Indian borders, complying with DPDP Act requirements.",
  },
  {
    n: "06",
    h: "Data Retention",
    p: "Data persists while accounts remain active. Deletion is permanent after a 10-second confirmation window. Users are advised to take a manual backup before deletion. Limited security logs may be retained per legal requirements.",
  },
  {
    n: "07",
    h: "Sharing — What We Do Not Do",
    p: "Soult explicitly does not access or analyze vault contents, share with advertisers or brokers, sell personal information, integrate with external systems, verify external data, or use content for AI training. Access occurs only by the account holder, designated nominees or executors under defined conditions, AWS under data processing agreements, or lawful government orders.",
  },
  {
    n: "08",
    h: "Legal Guides & Templates",
    p: "The company provides document templates as self-help tools and informational resources only. These guides and templates do not constitute legal advice. Soult performs no visibility into user content and does not execute legal actions, file documents with authorities, notify banks, or take any action on your behalf.",
  },
  {
    n: "09",
    h: "Your Rights",
    p: "Indian users possess DPDP Act 2023 rights: access, correction, erasure (subject to legal obligations), grievance redressal within prescribed timelines, nomination designation, and consent withdrawal. Data subject requests receive 72-hour acknowledgment with 30-day response targets (up to 90 days for complex requests).",
  },
  {
    n: "10",
    h: "International Users",
    p: "The service operates under Indian law. International users acknowledge data processing and storage in India. Soult does not represent an offer to provide services in any jurisdiction where doing so would be unlawful.",
  },
  {
    n: "11",
    h: "Children's Privacy",
    p: "The app is restricted to users 18 and above. Accounts for underage users are closed and data deleted promptly upon discovery. User-stored information about minors remains user-generated content under parental responsibility.",
  },
  {
    n: "12",
    h: "Changes to This Policy",
    p: "Updates are communicated through the app for significant changes. Continued use implies acceptance of revised terms. Users may delete their accounts if they disagree with changes.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .legal-page { background: #FDFAF6; min-height: 100vh; font-family: 'Outfit', sans-serif; color: #2B1D16; }
        .legal-hero {
          background: #2B1D16; padding: 120px 64px 80px;
          text-align: center;
        }
        .legal-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .legal-hero-h {
          font-size: clamp(36px, 4vw, 56px); font-weight: 900;
          color: #EDE6D8; letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 16px;
        }
        .legal-hero-sub { font-size: 15px; color: rgba(237,230,216,0.45); }
        .legal-body { max-width: 860px; margin: 0 auto; padding: 80px 64px 120px; }
        .legal-section { margin-bottom: 52px; padding-bottom: 52px; border-bottom: 1px solid rgba(43,29,22,0.08); }
        .legal-section:last-child { border-bottom: none; }
        .legal-section-num {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          color: #C89B3C; margin-bottom: 10px;
        }
        .legal-section-h { font-size: 22px; font-weight: 800; color: #2B1D16; margin-bottom: 16px; letter-spacing: -0.01em; }
        .legal-section-p { font-size: 18px; color: rgba(43,29,22,0.65); line-height: 1.8; margin: 0; }
        .legal-contact {
          background: #F5F0E8; border-radius: 20px; padding: 40px;
          margin-top: 64px;
        }
        .legal-contact-h { font-size: 20px; font-weight: 800; color: #2B1D16; margin-bottom: 16px; }
        .legal-contact-p { font-size: 18px; color: rgba(43,29,22,0.65); line-height: 1.8; margin: 0; }
        .legal-contact a { color: #C89B3C; text-decoration: none; }
        @media (max-width: 720px) {
          .legal-hero { padding: 100px 24px 60px; }
          .legal-body { padding: 48px 24px 80px; }
        }
      `}</style>

      <div className="legal-page">
        <div className="legal-hero">
          <div className="legal-eyebrow">Legal</div>
          <h1 className="legal-hero-h">Privacy Policy</h1>
          <p className="legal-hero-sub">Last updated: April 2026</p>
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
            <div className="legal-contact-h">Contact Us</div>
            <p className="legal-contact-p">
              Soult Digital Private Limited<br />
              Door No 4-1-143/1A(2), Vertex Workspace, Gateway Building,<br />
              MG Road, Mangalore 575003, Karnataka, India<br />
              CIN: U62099KA2026PTC215497<br /><br />
              Email: <a href="mailto:support@soultdigital.com">support@soultdigital.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
