import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Architecture — Soult Digital | AES-256, AWS Mumbai, DPDP Act 2023",
  description:
    "Soult's complete security architecture: AES-256 encryption, 100% Indian data residency, AWS Mumbai, DPDP Act 2023 compliance. Honest, transparent, no overclaiming.",
  keywords: [
    "Soult security",
    "AES-256 encryption",
    "AWS Mumbai data residency",
    "DPDP Act 2023",
    "digital vault security",
    "life vault encryption",
    "India data sovereignty",
    "KMS key management",
    "zero knowledge vault",
    "executor access control",
    "serverless security",
    "DynamoDB encryption",
    "S3 SSE-KMS",
    "IAM least privilege",
    "TLS 1.2 transit encryption",
    "CloudFront signed URLs",
    "MPIN lockout security",
    "RBAC executor roles",
    "audit log append-only",
    "FIPS 140-2 compliance",
    "digital legacy security",
    "family vault protection",
    "ISO 27001 certified",
    "Razorpay billing security",
    "AWS ap-south-1 Mumbai",
  ],
  openGraph: {
    title: "Security Architecture — Soult Digital | AES-256, AWS Mumbai, DPDP Act 2023",
    description:
      "Soult's complete security architecture: AES-256 encryption, 100% Indian data residency, AWS Mumbai, DPDP Act 2023 compliance. Honest, transparent, no overclaiming.",
    type: "website",
    url: "https://www.soultdigital.com/security",
    siteName: "Soult Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Architecture — Soult Digital | AES-256, AWS Mumbai, DPDP Act 2023",
    description:
      "Soult's complete security architecture: AES-256 encryption, 100% Indian data residency, AWS Mumbai, DPDP Act 2023 compliance. Honest, transparent, no overclaiming.",
  },
};

const NAV = [
  { id: "s01",  badge: "01",  label: "Architecture" },
  { id: "s01a", badge: "01a", label: "Region Silos" },
  { id: "s02",  badge: "02",  label: "Why AWS?" },
  { id: "s03",  badge: "03",  label: "Identity" },
  { id: "s04",  badge: "04",  label: "Shared Devices" },
  { id: "s04a", badge: "04a", label: "Why 4-Digit?" },
  { id: "s05",  badge: "05",  label: "Storage Safety" },
  { id: "s06",  badge: "06",  label: "Key Authority" },
  { id: "s07",  badge: "07",  label: "Double Locks" },
  { id: "s08",  badge: "08",  label: "Transit Tunnel" },
  { id: "s09",  badge: "09",  label: "Staff Boundaries" },
  { id: "s10",  badge: "10",  label: "Executor Roles" },
  { id: "s11",  badge: "11",  label: "Handover Flow" },
  { id: "s11a", badge: "11a", label: "No Sharing Today" },
  { id: "s12",  badge: "12",  label: "Reality Check" },
  { id: "s13",  badge: "13",  label: "Indian Soil" },
  { id: "s13a", badge: "13a", label: "Disaster Tiers" },
  { id: "s14",  badge: "14",  label: "Audit Trail" },
  { id: "s14a", badge: "14a", label: "Data Limits" },
  { id: "s14b", badge: "14b", label: "Secrecy vs Legacy" },
  { id: "s15",  badge: "15",  label: "Future Path" },
  { id: "s16",  badge: "16",  label: "Honest Claims" },
  { id: "s17",  badge: "17",  label: "Questions" },
  { id: "s18",  badge: "18",  label: "Common Myths" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soultdigital.com/security",
      url: "https://www.soultdigital.com/security",
      name: "Security Architecture — Soult Digital",
      description:
        "Soult's complete security architecture: AES-256 encryption, 100% Indian data residency, AWS Mumbai, DPDP Act 2023 compliance.",
      isPartOf: { "@id": "https://www.soultdigital.com" },
      inLanguage: "en-IN",
      dateModified: "2026-05-01",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.soultdigital.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Security Architecture",
          item: "https://www.soultdigital.com/security",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where does my data actually live?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We use Amazon's top-tier data centers in Mumbai, with AWS Hyderabad as our backup fallback. Our system is serverless, meaning no computer stays on for hackers to poke at.",
          },
        },
        {
          "@type": "Question",
          name: "Where does each user's data go?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you sign in, an Identity Directory checks your country and routes you to the right silo. Today only the India + GCC silo is live. Indian users sit there by default. Each future silo stays isolated — data never crosses.",
          },
        },
        {
          "@type": "Question",
          name: "Why AWS Mumbai for local compliance and security?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amazon Mumbai provides the highest standard of security in India. Staying on Indian soil ensures your legacy follows local laws and remains available to your family without complications.",
          },
        },
        {
          "@type": "Question",
          name: "How do I sign up and log in safely?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Registration is verified via Phone OTP and Email OTP. You set a security question and a 4-digit PIN. Daily access requires only your 4-digit PIN. A new device triggers 2-Factor Security: Phone OTP first, then your PIN.",
          },
        },
        {
          "@type": "Question",
          name: "Why can't my family open my vault app on a shared phone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In shared-phone homes, fingerprints allow anyone registered to enter. A private 4-digit PIN keeps your vault private while kids play games or your spouse uses the phone.",
          },
        },
        {
          "@type": "Question",
          name: "Is a 4-digit PIN really secure enough?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — because the protection is the lockout, not the length. Three wrong tries and your vault locks for 24 hours. Even a thief with your phone gets only 3 guesses before the door slams shut. We chose 4 over 6 deliberately — 6 digits cause too many forgotten PINs, lockouts, and resets.",
          },
        },
        {
          "@type": "Question",
          name: "What if someone steals a hard drive from your servers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data is AES-256 encrypted. Stolen hardware only contains meaningless characters. Master keys stay in separate secure hardware safes.",
          },
        },
        {
          "@type": "Question",
          name: "Who holds the encryption keys?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Amazon's hardware holds them. Soult staff never see them. It's like a bank vault where the machine only recognizes your key.",
          },
        },
        {
          "@type": "Question",
          name: "What is the double-lock security for sensitive fields?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For your secrets such as Will or Policy IDs, we add a Double Lock. Inside our database, those specific fields look like scrambled gibberish even to engineers.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data protected on public Wi-Fi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data travels through a secure tunnel. Hackers on public airport Wi-Fi cannot see what you upload or read.",
          },
        },
        {
          "@type": "Question",
          name: "Can Soult staff see my secrets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We built a Restricted Access Mechanism. Staff have no Decrypt button for your vault. Your content is scrambled code to our engineers.",
          },
        },
        {
          "@type": "Question",
          name: "Who can ever see my vault?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two executor types: a Regular Executor can raise a death or medical incapacity flag with OTP verification at every step. An Emergency Executor (spouse only, max one) can log in any time. Every action emails you and all named executors instantly.",
          },
        },
        {
          "@type": "Question",
          name: "How does my family actually get access to my vault after I pass?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The named Regular Executor raises a flag from their dashboard — death or medical incapacity. Each step is OTP-verified. Soult phones the executor to confirm identity, two internal approvers must both sign off, then the executor sees the vault in read-only mode.",
          },
        },
        {
          "@type": "Question",
          name: "Can I share one document with my CA or spouse today?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not today. Your vault works like a bank locker — only you have the key. There is no per-item sharing, no per-folder access for an accountant, no time-limited share link.",
          },
        },
        {
          "@type": "Question",
          name: "What are the security risks I should know about?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We protect against hackers. We cannot stop you from being physically forced to share your PIN. Soult is for organisation and family continuity.",
          },
        },
        {
          "@type": "Question",
          name: "Where exactly does my data live and is it on Indian soil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Today, all user data sits in the India + GCC silo — Mumbai for live traffic, Hyderabad as the disaster recovery mirror. DPDP Act 2023 compliant.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a server or entire region fails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tier 1 — One server fails: invisible to users, AWS replaces in minutes. Tier 2 — Mumbai region down: Hyderabad takes over within an hour, no data loss. Tier 3 — Both regions down: service stops, operational recovery in 7–14 days.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a record of every change made to my vault?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. There is a footprint of every Creation, Update, or Deletion. You and your notifiers will always know exactly what changes have occurred.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data ever used to train AI or sold to advertisers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Your vault content is never used to train AI models or for marketing. Revenue is subscription-only. If we ever consider any new way of earning, we will ask you first — not notify, not announce — ask.",
          },
        },
        {
          "@type": "Question",
          name: "How can Soult hand over my vault if staff cannot see it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We keep staff out but maintain a human-verified path for family. We use a KMS-Managed Key Recovery model for verified death/incapacity events only. Soult is a bridge to your legacy, not a digital dead end.",
          },
        },
        {
          "@type": "Question",
          name: "What security features are coming next?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Near-term: one-click vault export, US silo (N. Virginia), SEA silo (Singapore). Mid-term: dedicated GCC silo, SOC 2 Type II. Always-on: ongoing audits, security hardening, infrastructure reviews.",
          },
        },
        {
          "@type": "Question",
          name: "How do I delete my data permanently?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Deletion is immediate and permanent. After a 10-second confirmation pause, we destroy your encryption key. Old backups become unreadable from that moment. Take a manual backup first if you want to keep anything.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if Soult shuts down?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We open a 90-day sunset window. You download everything in plain readable formats. We will not sell your data, transfer your vault to a buyer without consent, or delete vaults during this window.",
          },
        },
        {
          "@type": "Question",
          name: "How are subscription payments handled?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Managed via Razorpay on the Soult website. No in-app purchases. This keeps billing separate from your vault device.",
          },
        },
        {
          "@type": "Question",
          name: "Why doesn't Soult use blockchain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blockchain is built for public verification on shared ledgers where parties do not trust each other. Soult vaults are private by design. For change tracking, we use audit logs — every Create, Update, Delete is recorded with timestamp and actor. Blockchain would add cost, complexity, and reduce privacy without solving any user problem.",
          },
        },
      ],
    },
  ],
};

export default function SecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        .sc { font-family: 'Outfit', sans-serif; background: #F5ECD8; color: #2B1D16; }

        /* ── HERO ── */
        .sc-hero {
          background: linear-gradient(135deg, #1E1208 0%, #662D29 65%, #4A1F1C 100%);
          padding: 80px 64px 64px;
          border-bottom: 1px solid rgba(215,181,109,0.18);
          position: relative; overflow: hidden;
        }
        .sc-hero::before {
          content: ''; position: absolute;
          top: -180px; right: -180px; width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(215,181,109,0.12) 0%, transparent 60%);
          border-radius: 50%; pointer-events: none;
        }
        .sc-hero::after {
          content: ''; position: absolute;
          bottom: -80px; left: -80px; width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(102,45,41,0.40) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .sc-hero-inner { max-width: 1160px; margin: 0 auto; position: relative; }
        .sc-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #D7B56D; margin-bottom: 20px;
        }
        .sc-hero-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 1.5px; background: #D7B56D;
        }
        .sc-hero-h {
          font-size: clamp(32px, 4vw, 54px); font-weight: 900; color: #FFFFFF;
          letter-spacing: -0.03em; line-height: 1.06; margin: 0 0 18px;
        }
        .sc-hero-sub {
          font-size: 18px; color: rgba(245,236,216,0.78); font-weight: 400;
          margin: 0; line-height: 1.6; max-width: 680px;
        }

        /* ── LAYOUT ── */
        .sc-layout {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 260px 1fr;
          gap: 0; align-items: start;
          padding: 0 24px;
        }

        /* ── SIDEBAR ── */
        .sc-toc {
          position: sticky; top: 80px;
          padding: 32px 20px 40px 0;
          height: calc(100vh - 80px); overflow-y: auto;
        }
        .sc-toc-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(43,29,22,0.35); margin-bottom: 14px;
          padding: 0 4px;
        }
        .sc-toc-inner {
          background: #fff;
          border: 1px solid rgba(43,29,22,0.08);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(43,29,22,0.07);
          padding: 8px;
          overflow: hidden;
        }
        .sc-toc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1px; }
        .sc-toc-item a {
          display: flex; align-items: center; gap: 10px;
          padding: 7px 10px; border-radius: 10px;
          font-size: 12.5px; font-weight: 500; color: rgba(43,29,22,0.50);
          text-decoration: none; letter-spacing: 0.01em;
          transition: color 0.18s, background 0.18s;
          line-height: 1.4;
        }
        .sc-toc-item a:hover {
          color: #58362B; background: rgba(88,54,43,0.06);
        }
        .sc-toc-badge {
          flex-shrink: 0; min-width: 26px; height: 22px; border-radius: 11px;
          background: #F5ECD8; border: 1px solid rgba(102,45,41,0.15);
          display: flex; align-items: center; justify-content: center;
          padding: 0 4px;
          font-size: 9px; font-weight: 800; color: #662D29; letter-spacing: 0;
        }

        /* ── CONTENT ── */
        .sc-content { padding: 52px 0 100px 48px; }

        /* ── SECTION ── */
        .sc-section {
          margin-bottom: 0;
          padding: 48px 0;
          border-bottom: 1px solid rgba(43,29,22,0.09);
          scroll-margin-top: 80px;
        }
        .sc-section:last-child { border-bottom: none; }

        .sc-sec-num {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          color: #D7B56D; margin-bottom: 8px; text-transform: uppercase;
        }
        .sc-sec-h {
          font-size: 22px; font-weight: 800; color: #58362B;
          letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 20px;
        }
        .sc-sec-p {
          font-size: 15px; color: rgba(43,29,22,0.70); line-height: 1.80; margin: 0 0 16px;
        }
        .sc-sec-p:last-child { margin-bottom: 0; }

        /* ── PRACTICAL PERSPECTIVE BLOCK ── */
        .sc-practical {
          background: #FAF5EC;
          border-left: 4px solid #C89B3C;
          border-radius: 0 12px 12px 0;
          padding: 18px 22px;
          margin: 0 0 16px;
        }
        .sc-practical-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 8px;
        }
        .sc-practical-q {
          font-size: 14.5px; font-weight: 700; color: #2B1D16; font-style: italic;
          margin-bottom: 8px;
        }
        .sc-practical-text {
          font-size: 15px; color: rgba(43,29,22,0.72); line-height: 1.75; margin: 0;
        }

        /* ── TECHNICAL BLOCK ── */
        .sc-technical {
          background: #1E1208;
          border-radius: 12px;
          padding: 18px 22px;
          margin: 0;
        }
        .sc-technical-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #E8C060; margin-bottom: 10px;
        }
        .sc-technical-list {
          list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px;
        }
        .sc-technical-list li {
          font-size: 14px; color: rgba(232,192,96,0.82); line-height: 1.65;
          display: flex; align-items: flex-start; gap: 8px;
        }
        .sc-technical-list li::before {
          content: '—'; flex-shrink: 0; color: #E8C060; font-weight: 700;
        }

        /* ── HONEST CLAIMS TABLE ── */
        .sc-claims-wrap {
          overflow-x: auto;
          border-radius: 12px;
          border: 1px solid rgba(43,29,22,0.09);
          margin-top: 8px;
        }
        .sc-claims-table {
          width: 100%; border-collapse: collapse;
          font-size: 14.5px;
        }
        .sc-claims-table thead tr {
          background: #2B1D16;
        }
        .sc-claims-table thead th {
          padding: 13px 16px; text-align: left;
          font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
          text-transform: uppercase; color: #E8C060;
        }
        .sc-claims-table thead th:first-child { border-radius: 10px 0 0 0; }
        .sc-claims-table thead th:last-child  { border-radius: 0 10px 0 0; }
        .sc-claims-table tbody tr {
          border-bottom: 1px solid rgba(43,29,22,0.07);
        }
        .sc-claims-table tbody tr:last-child { border-bottom: none; }
        .sc-claims-table tbody tr:nth-child(even) td { background: rgba(245,236,216,0.55); }
        .sc-claims-table tbody td {
          padding: 13px 16px; vertical-align: top; line-height: 1.55;
          color: rgba(43,29,22,0.68);
        }
        .sc-claims-table tbody td:first-child {
          font-weight: 700; color: #2B1D16; font-size: 14px;
        }
        .sc-status-true {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(22,101,52,0.10); color: #166534;
          border: 1px solid rgba(22,101,52,0.25);
          border-radius: 6px; padding: 3px 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .sc-status-planned {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(146,64,14,0.10); color: #92400E;
          border: 1px solid rgba(146,64,14,0.25);
          border-radius: 6px; padding: 3px 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .sc-status-notbuilt {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(127,29,29,0.08); color: #991B1B;
          border: 1px solid rgba(127,29,29,0.20);
          border-radius: 6px; padding: 3px 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .sc-status-roadmap {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(30,66,159,0.08); color: #1E429F;
          border: 1px solid rgba(30,66,159,0.20);
          border-radius: 6px; padding: 3px 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .sc-status-neutral {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(43,29,22,0.06); color: rgba(43,29,22,0.60);
          border: 1px solid rgba(43,29,22,0.14);
          border-radius: 6px; padding: 3px 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.04em;
          white-space: nowrap;
        }

        /* ── FAQ BLOCK ── */
        .sc-faq-item {
          padding: 22px 0;
          border-bottom: 1px solid rgba(43,29,22,0.08);
        }
        .sc-faq-item:last-of-type { border-bottom: none; }
        .sc-faq-q {
          font-size: 16px; font-weight: 700; color: #2B1D16;
          margin: 0 0 10px; line-height: 1.4;
        }
        .sc-faq-a {
          font-size: 15px; color: rgba(43,29,22,0.68); line-height: 1.78; margin: 0;
        }

        /* ── ERASURE CARD ── */
        .sc-erasure {
          margin-top: 24px;
          background: #fff;
          border: 1px solid rgba(43,29,22,0.09);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(43,29,22,0.06);
        }
        .sc-erasure-header {
          background: linear-gradient(135deg, rgba(102,45,41,0.08) 0%, rgba(43,29,22,0.04) 100%);
          padding: 16px 24px;
          border-bottom: 1px solid rgba(43,29,22,0.07);
          font-size: 12px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #58362B;
        }
        .sc-erasure-body {
          padding: 22px 24px;
          font-size: 15px; color: rgba(43,29,22,0.68); line-height: 1.75;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .sc-layout { grid-template-columns: 1fr; padding: 0; }
          .sc-toc { display: none; }
          .sc-content { padding: 40px 24px 80px; }
          .sc-hero { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 600px) {
          .sc-hero { padding-top: 48px; padding-bottom: 36px; }
        }
      `}</style>

      <div className="sc">

        {/* HERO */}
        <div className="sc-hero">
          <div className="sc-hero-inner">
            <div className="sc-hero-eyebrow">Security Architecture</div>
            <h1 className="sc-hero-h">Architecture Crafted For<br />Life&rsquo;s Continuity</h1>
            <p className="sc-hero-sub">
              A transparent account of the technology behind your digital life vault.
              We move past cold industrial jargon to provide a secure, human-centric bridge for your family.
            </p>
          </div>
        </div>

        {/* LAYOUT */}
        <div className="sc-layout">

          {/* SIDEBAR */}
          <aside className="sc-toc" aria-label="Security sections">
            <div className="sc-toc-label">Contents</div>
            <div className="sc-toc-inner">
              <ul className="sc-toc-list">
                {NAV.map((item) => (
                  <li className="sc-toc-item" key={item.id}>
                    <a href={`#${item.id}`}>
                      <span className="sc-toc-badge">{item.badge}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="sc-content">

            {/* 01 — Architecture */}
            <section className="sc-section" id="s01">
              <div className="sc-sec-num">Section 01 — Crafted Infrastructure</div>
              <h2 className="sc-sec-h">System Design</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Where does my data actually live?&rdquo;</p>
                <p className="sc-practical-text">
                  We use Amazon&rsquo;s top-tier data centers in Mumbai, with AWS Hyderabad as our backup fallback.
                  Our system is &ldquo;serverless,&rdquo; meaning no computer stays on for hackers to poke at.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>100% AWS Lambda</li>
                  <li>Multi-region redundancy (ap-south-1 &amp; ap-south-2)</li>
                  <li>Fresh execution context per request</li>
                </ul>
              </div>
            </section>

            {/* 01a — Region Silos */}
            <section className="sc-section" id="s01a">
              <div className="sc-sec-num">Section 01a — Silo Architecture</div>
              <h2 className="sc-sec-h">Region-Locked Silos</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Where does each user&rsquo;s data go?&rdquo;</p>
                <p className="sc-practical-text">
                  When you sign in, an Identity Directory checks your country and routes you to the right silo.
                  Today only the India + GCC silo is live. Indian users sit there by default.
                  GCC users sit there too, with explicit consent at signup. Each future silo stays isolated — data never crosses.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Edge: CloudFront, Route 53. Identity Directory routes by phone/email to region. No PII stored in directory.</li>
                  <li>Today: India + GCC silo (ap-south-1, ap-south-2)</li>
                  <li>Roadmap: US silo (us-east-1, us-west-2), SEA silo (ap-southeast-1, ap-southeast-3), dedicated GCC (me-central-1 when stable)</li>
                </ul>
              </div>
            </section>

            {/* 02 — Why AWS? */}
            <section className="sc-section" id="s02">
              <div className="sc-sec-num">Section 02 — Partnership</div>
              <h2 className="sc-sec-h">Why AWS Mumbai?</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Local compliance and security.&rdquo;</p>
                <p className="sc-practical-text">
                  Amazon Mumbai provides the highest standard of security in India.
                  Staying on Indian soil ensures your legacy follows local laws and remains available
                  to your family without complications.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Multi-Region DR Strategy</li>
                  <li>Failover endpoints in ap-south-2</li>
                  <li>Native Cognito localized phone support and FIPS 140-2 compliance</li>
                </ul>
              </div>
            </section>

            {/* 03 — Identity */}
            <section className="sc-section" id="s03">
              <div className="sc-sec-num">Section 03 — Identity &amp; Access</div>
              <h2 className="sc-sec-h">Authentication Flow</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Sign up and log in safely.&rdquo;</p>
                <p className="sc-practical-text">
                  <strong>Registration:</strong> Verified via Phone OTP and Email OTP. You set a security question and a 4-digit PIN.
                </p>
                <p className="sc-practical-text" style={{marginTop:'8px'}}>
                  <strong>Trusted Use:</strong> Daily access requires only your 4-digit PIN.
                </p>
                <p className="sc-practical-text" style={{marginTop:'8px'}}>
                  <strong>New Device:</strong> Triggers 2-Factor Security: Phone OTP first, then your PIN.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Multi-channel OTP verification</li>
                  <li>Credentials: salted, slow-hashed Security Answer and MPIN</li>
                  <li>Re-auth triggers 2FA logic</li>
                </ul>
              </div>
            </section>

            {/* 04 — Shared Devices */}
            <section className="sc-section" id="s04">
              <div className="sc-sec-num">Section 04 — Household Privacy</div>
              <h2 className="sc-sec-h">MPIN &amp; Shared Devices</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Why can&rsquo;t my family open this?&rdquo;</p>
                <p className="sc-practical-text">
                  In shared-phone homes, fingerprints allow anyone registered to enter.
                  A private 4-digit PIN keeps your vault private while kids play games
                  or your spouse uses the phone.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>4-digit MPIN stored as a salted, slow hash on the server</li>
                  <li>Server-side validation with a 3-strike lockout counter stored in DynamoDB</li>
                  <li>Lockout duration: 24 hours</li>
                  <li>Reinstall, device wipe, or device change does not reset</li>
                </ul>
              </div>
            </section>

            {/* 04a — Why 4-Digit? */}
            <section className="sc-section" id="s04a">
              <div className="sc-sec-num">Section 04a — The PIN Length Choice</div>
              <h2 className="sc-sec-h">Why a 4-Digit PIN?</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Is 4 digits really secure?&rdquo;</p>
                <p className="sc-practical-text">
                  Yes — because the protection is the lockout, not the length. Three wrong tries and
                  your vault locks for 24 hours. Even a thief with your phone gets only 3 guesses before
                  the door slams shut. We chose 4 over 6 deliberately. ICICI Bank uses 4-digit PINs
                  for the same reason: 6 digits cause too many forgotten PINs, lockouts, and resets.
                  Memory complexity is the real enemy, not entropy.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>4-digit search space: 10^4 = 10,000</li>
                  <li>Brute-force mitigation: server-side counter, 3-strike lockout for 24 hours</li>
                  <li>Practical entropy with lockout exceeds raw entropy of unprotected 6-digit</li>
                  <li>Trade-off accepted: usability gain &gt; marginal entropy gain</li>
                </ul>
              </div>
            </section>

            {/* 05 — Storage Safety */}
            <section className="sc-section" id="s05">
              <div className="sc-sec-num">Section 05 — Storage Safety</div>
              <h2 className="sc-sec-h">Hard Drive Risk</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;What if someone steals a hard drive?&rdquo;</p>
                <p className="sc-practical-text">
                  Data is AES-256 encrypted. Stolen hardware only contains meaningless characters.
                  Master keys stay in separate secure hardware safes.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>S3 SSE-KMS and DynamoDB encryption</li>
                  <li>AES-256-GCM utilized for authenticated encryption</li>
                  <li>Bucket policies enforce encryption</li>
                </ul>
              </div>
            </section>

            {/* 06 — Key Authority */}
            <section className="sc-section" id="s06">
              <div className="sc-sec-num">Section 06 — Authority</div>
              <h2 className="sc-sec-h">Key Management (KMS)</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Who holds the keys?&rdquo;</p>
                <p className="sc-practical-text">
                  Amazon&rsquo;s hardware holds them. Soult staff never see them.
                  It&rsquo;s like a bank vault where the machine only recognizes your key.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Uses Envelope Encryption via AWS KMS</li>
                  <li>Customer Master Key (CMK) stays in HSM</li>
                </ul>
              </div>
            </section>

            {/* 07 — Double Locks */}
            <section className="sc-section" id="s07">
              <div className="sc-sec-num">Section 07 — The Double Lock</div>
              <h2 className="sc-sec-h">Field-Level Security</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Double-lock security.&rdquo;</p>
                <p className="sc-practical-text">
                  Most data is already out there. For your secrets (Will/Policy IDs), we add a Double Lock.
                  Inside our database, those specific fields look like scrambled gibberish.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>KMS Field-Level Encryption</li>
                  <li>Unauthorized table reads cannot expose high-sensitivity content without specific IAM rights</li>
                </ul>
              </div>
            </section>

            {/* 08 — Transit Tunnel */}
            <section className="sc-section" id="s08">
              <div className="sc-sec-num">Section 08 — The Tunnel</div>
              <h2 className="sc-sec-h">Encryption in Transit</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Spy-proof Wi-Fi.&rdquo;</p>
                <p className="sc-practical-text">
                  Data travels through a secure tunnel. Hackers on public airport Wi-Fi
                  cannot see what you upload or read.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>TLS 1.2+ minimum</li>
                  <li>API Gateway HTTPS enforcement</li>
                  <li>CloudFront Signed URLs (15-min expiration)</li>
                </ul>
              </div>
            </section>

            {/* 09 — Staff Boundaries */}
            <section className="sc-section" id="s09">
              <div className="sc-sec-num">Section 09 — Staff Boundaries</div>
              <h2 className="sc-sec-h">The &ldquo;No-Human&rdquo; Principle</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Can Soult staff see my secrets?&rdquo;</p>
                <p className="sc-practical-text">
                  No. We built a Restricted Access Mechanism. Staff have no &ldquo;Decrypt&rdquo; button for your vault.
                  Your content is scrambled code to our engineers.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Zero Human kms:Decrypt permission</li>
                  <li>Least Privilege IAM policies</li>
                  <li>No person holds &ldquo;Full Access&rdquo; credentials</li>
                </ul>
              </div>
            </section>

            {/* 10 — Executor Roles */}
            <section className="sc-section" id="s10">
              <div className="sc-sec-num">Section 10 — Executor Roles</div>
              <h2 className="sc-sec-h">Two Executor Roles</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Who can ever see my vault?&rdquo;</p>
                <p className="sc-practical-text">
                  <strong>Regular Executor</strong> (typically a family member): has their own dashboard listing
                  the users they manage. Can raise a death or medical incapacity flag. OTP verified at every step.
                  Every step emails you AND every executor you named.
                </p>
                <p className="sc-practical-text" style={{marginTop:'10px'}}>
                  <strong>Emergency Executor</strong> (typically the spouse, only one allowed): no flag check needed.
                  Can log in to your vault any time. While they are in, your vault becomes read-only for you.
                  You get an email instantly. The emergency role is for medical emergencies and time-critical situations.
                  The regular role is for handover after death or long-term incapacity.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Strict RBAC. Two role classes: EXECUTOR_REGULAR (multiple allowed) and EXECUTOR_EMERGENCY (max 1, spouse only)</li>
                  <li>Regular role gates on vault_accessible_flag = true; emergency role bypasses flag</li>
                  <li>Every state transition fires Amazon SES notifications to user and all named executors</li>
                  <li>Forced READ_ONLY state on user account when emergency executor is logged in</li>
                </ul>
              </div>
            </section>

            {/* 11 — Handover Flow */}
            <section className="sc-section" id="s11">
              <div className="sc-sec-num">Section 11 — The Legacy Handover</div>
              <h2 className="sc-sec-h">Handover Protocol</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;How does my family actually get access?&rdquo;</p>
                <p className="sc-practical-text">
                  The named Regular Executor raises a flag from their dashboard — death or medical incapacity.
                  Each step is OTP-verified. Every step emails you and all your other executors, so nothing happens
                  behind your back. Soult phones the executor on the registered number to confirm identity.
                  We use government registries (CRS and KRA) as a cross-check, but treat them as supporting
                  evidence only — records often take months to update. Direct phone and email contact with the
                  executor and family is the primary verification. Two internal Soult approvers must both sign off
                  before access is granted. The executor then sees the entire vault in read-only mode.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Multi-step gate: (1) executor flag raise from dashboard with OTP, (2) outbound phone verification, (3) CRS/KRA cross-reference (advisory), (4) two-person internal approval, (5) vault_accessible_flag set to true</li>
                  <li>All transitions logged to append-only audit log</li>
                  <li>Notifications via Amazon SES to user + all executors at every step</li>
                  <li>Read-only enforcement at API layer; no write/delete endpoints exposed to executor session</li>
                </ul>
              </div>
            </section>

            {/* 11a — No Sharing Today */}
            <section className="sc-section" id="s11a">
              <div className="sc-sec-num">Section 11a — Sharing Reality</div>
              <h2 className="sc-sec-h">No Sharing, By Design</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Can I share one document with my CA or spouse?&rdquo;</p>
                <p className="sc-practical-text">
                  Not today. Your vault works like a bank locker — only you have the key.
                  There is no per-item sharing, no per-folder access for an accountant,
                  no time-limited share link. The only way another person ever sees inside your vault
                  is through the executor flow described above — and even then, they see everything
                  in read-only mode. There is no per-item or per-folder granularity yet.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>No collaboration mechanism implemented</li>
                  <li>Sole access paths: (1) authenticated owner session, (2) executor session post-verification</li>
                  <li>No share-link generation, no scoped tokens, no per-resource ACL</li>
                  <li>Roadmap consideration only — not built</li>
                </ul>
              </div>
            </section>

            {/* 12 — Reality Check */}
            <section className="sc-section" id="s12">
              <div className="sc-sec-num">Section 12 — Honesty</div>
              <h2 className="sc-sec-h">Reality Check</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;What are the risks?&rdquo;</p>
                <p className="sc-practical-text">
                  We protect against hackers. We cannot stop you from being physically forced to share your PIN.
                  Soult is for organisation and family continuity.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Threat model excludes physical coercion</li>
                  <li>Mitigates Exfiltration, Account Takeover, and Insider Access</li>
                </ul>
              </div>
            </section>

            {/* 13 — Indian Soil */}
            <section className="sc-section" id="s13">
              <div className="sc-sec-num">Section 13 — Sovereignty</div>
              <h2 className="sc-sec-h">Indian Soil</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Where exactly does my data live?&rdquo;</p>
                <p className="sc-practical-text">
                  Today, all user data sits in the India + GCC silo — Mumbai for live traffic,
                  Hyderabad as the disaster recovery mirror. Indian users by default. GCC users
                  with explicit consent at signup, since they share the same physical location.
                  Future silos for the US, Southeast Asia, and a dedicated UAE region will be deployed
                  as we expand. Each silo stays isolated — data of users from one region never crosses into another.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Active silo: ap-south-1 (Mumbai) primary, ap-south-2 (Hyderabad) DR</li>
                  <li>Live replication; failover automated</li>
                  <li>DPDP Act 2023 compliant</li>
                  <li>GCC users included in this silo with documented consent and SCC on file</li>
                </ul>
              </div>
            </section>

            {/* 13a — Disaster Tiers */}
            <section className="sc-section" id="s13a">
              <div className="sc-sec-num">Section 13a — Disaster Tiers</div>
              <h2 className="sc-sec-h">Disaster Recovery Tiers</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;What happens at each level of failure?&rdquo;</p>
                <p className="sc-practical-text">
                  <strong>Tier 1 — One server fails:</strong> invisible to users, AWS replaces in minutes.
                </p>
                <p className="sc-practical-text" style={{marginTop:'8px'}}>
                  <strong>Tier 2 — Mumbai region down:</strong> Hyderabad takes over within an hour. No data loss.
                </p>
                <p className="sc-practical-text" style={{marginTop:'8px'}}>
                  <strong>Tier 3 — Both regions down at once:</strong> service stops. Operational recovery in 7&ndash;14 days.
                  Full data integrity verified within 60 days.
                </p>
                <p className="sc-practical-text" style={{marginTop:'8px'}}>
                  <strong>Tier 4 — Every Indian region destroyed:</strong> we cannot recover today.
                  Cross-silo backup replication is on the roadmap as we add the US and SEA silos.
                  Until then, manual user backup is the strongest mitigation.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Tier 1: AWS EC2 / Lambda self-healing</li>
                  <li>Tier 2: cross-AZ failover &lt; 1hr</li>
                  <li>Tier 3: RTO 7&ndash;14d (operational), RPO up to 60d (full data integrity verified)</li>
                  <li>Tier 4: not mitigated today; cross-silo replication into us-east-1 / ap-southeast-1 on roadmap</li>
                </ul>
              </div>
            </section>

            {/* 14 — Audit Trail */}
            <section className="sc-section" id="s14">
              <div className="sc-sec-num">Section 14 — Visibility</div>
              <h2 className="sc-sec-h">The Audit Trail</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;Record of changes.&rdquo;</p>
                <p className="sc-practical-text">
                  Footprint of every Creation, Update, or Deletion. You and your notifiers will always
                  know exactly what changes have occurred.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Append-only Audit Log</li>
                  <li>Tracks write operations (CUD)</li>
                  <li>Read events excluded for user privacy performance balance</li>
                </ul>
              </div>
            </section>

            {/* 14a — Data Limits */}
            <section className="sc-section" id="s14a">
              <div className="sc-sec-num">Section 14a — Usage Limits</div>
              <h2 className="sc-sec-h">Data Usage Boundaries</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;No selling, no training, no surprises.&rdquo;</p>
                <p className="sc-practical-text">
                  Your vault content is never used to train AI models or for marketing.
                  When AI features are used in the app, the data for that session is processed
                  in-context only — never retained for model improvement. Revenue is subscription-only.
                  If we ever consider a new way of earning — any change at all — we will ask you first.
                  Not notify, not announce — ask. And we will only ask if we genuinely believe it benefits you.
                  Consent without user benefit is not enough.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Data isolation. No vault content fed into AI/ML training pipelines</li>
                  <li>AI features process data in-context per session only — no retention for model improvement</li>
                  <li>Revenue model independent of vault content</li>
                  <li>Future monetisation changes gated on explicit per-user opt-in — not announce-and-proceed</li>
                </ul>
              </div>
            </section>

            {/* 14b — Secrecy vs Legacy */}
            <section className="sc-section" id="s14b">
              <div className="sc-sec-num">Section 14b — The Handover Tension</div>
              <h2 className="sc-sec-h">Privacy vs Handover</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;The Bridge choice.&rdquo;</p>
                <p className="sc-practical-text">
                  We keep staff out but maintain a human-verified path for family.
                  Soult is a bridge to your legacy, not a digital dead end.
                </p>
                <p className="sc-practical-text" style={{marginTop:'10px', fontStyle:'italic', color:'rgba(43,29,22,0.58)'}}>
                  Chat apps focus on absolute secrecy — if you lose a key, they can&rsquo;t help you.
                  That is a failure for a life vault. We prioritise Verified Handover over total blindness.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Uses a KMS-Managed Key Recovery model for verified death/incapacity events only</li>
                </ul>
              </div>
            </section>

            {/* 15 — Future Path */}
            <section className="sc-section" id="s15">
              <div className="sc-sec-num">Section 15 — Future Path</div>
              <h2 className="sc-sec-h">Roadmap</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;What is shipping next?&rdquo;</p>
                <p className="sc-practical-text">
                  <strong>Near-term:</strong> one-click vault export (today users back up manually);
                  US silo (N. Virginia, DR Oregon); SEA silo (Singapore, DR Jakarta);
                  cross-silo backup replication so something always survives even if a whole region is lost.
                </p>
                <p className="sc-practical-text" style={{marginTop:'10px'}}>
                  <strong>Mid-term:</strong> dedicated GCC silo when AWS UAE region matures; SOC 2 Type II.
                </p>
                <p className="sc-practical-text" style={{marginTop:'10px'}}>
                  <strong>Always-on:</strong> ongoing audits, security hardening, infrastructure reviews.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Phase 1 (active): one-click encrypted export, US silo bring-up</li>
                  <li>Phase 2: SEA silo, cross-silo cold backup replication, WAF, SSL Pinning</li>
                  <li>Phase 3: dedicated me-central-1 silo, SOC 2 Type II, hardened multi-region KMS</li>
                </ul>
              </div>
            </section>

            {/* 16 — Honest Claims */}
            <section className="sc-section" id="s16">
              <div className="sc-sec-num">Section 16 — Veracity</div>
              <h2 className="sc-sec-h">Honest Claims</h2>
              <p className="sc-sec-p">
                We say what we do. We do not say what we have not built yet.
                Every claim below is verified against the actual system as it stands today.
              </p>
              <div className="sc-claims-wrap">
                <table className="sc-claims-table">
                  <thead>
                    <tr>
                      <th>Claim</th>
                      <th>Status</th>
                      <th>The Practical Truth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Staff-Inaccessible Vault</td>
                      <td><span className="sc-status-true">TRUE</span></td>
                      <td>IAM locks prevent humans from seeing content during normal ops.</td>
                    </tr>
                    <tr>
                      <td>Data Residency in India</td>
                      <td><span className="sc-status-true">TRUE</span></td>
                      <td>All data stays strictly within India (Mumbai/Hyderabad).</td>
                    </tr>
                    <tr>
                      <td>ISO 27001 &amp; ISO 9001 Certified</td>
                      <td><span className="sc-status-true">TRUE</span></td>
                      <td>Independently audited security and quality management.</td>
                    </tr>
                    <tr>
                      <td>AES-256 Encryption</td>
                      <td><span className="sc-status-true">TRUE</span></td>
                      <td>All vault contents encrypted with bank-grade AES-256.</td>
                    </tr>
                    <tr>
                      <td>One-Click Vault Export</td>
                      <td><span className="sc-status-planned">PLANNED</span></td>
                      <td>Not built today. Users take manual backups. Coming in upcoming release.</td>
                    </tr>
                    <tr>
                      <td>Per-Item Sharing</td>
                      <td><span className="sc-status-notbuilt">NOT BUILT</span></td>
                      <td>No sharing or collaboration today. Executor flow is the only access path.</td>
                    </tr>
                    <tr>
                      <td>Cross-Silo Backup</td>
                      <td><span className="sc-status-roadmap">ROADMAP</span></td>
                      <td>Backup replication across silos comes when US/SEA silos deploy.</td>
                    </tr>
                    <tr>
                      <td>Recovery if both Indian regions fail</td>
                      <td><span className="sc-status-neutral">7&ndash;14d / 60d</span></td>
                      <td>Operational recovery 7&ndash;14 days. Full data integrity verified within 60 days.</td>
                    </tr>
                    <tr>
                      <td>Account Deletion</td>
                      <td><span className="sc-status-true">IMMEDIATE</span></td>
                      <td>10-second confirmation, then permanent key destruction.</td>
                    </tr>
                    <tr>
                      <td>AI Training on User Data</td>
                      <td><span className="sc-status-true">NEVER</span></td>
                      <td>Vault content is never used for AI model training, even when AI features are used in-session.</td>
                    </tr>
                    <tr>
                      <td>Blockchain</td>
                      <td><span className="sc-status-notbuilt">NOT USED</span></td>
                      <td>Wrong tool for a private vault. We use audit logs instead.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 17 — Questions */}
            <section className="sc-section" id="s17">
              <div className="sc-sec-num">Section 17 — Support &amp; Erasure</div>
              <h2 className="sc-sec-h">Common Questions</h2>

              <div className="sc-faq-item">
                <h3 className="sc-faq-q">How do I delete my data?</h3>
                <p className="sc-faq-a">
                  Deletion is immediate and permanent. After a 10-second confirmation pause, we destroy your
                  encryption key. Old backups become unreadable from that moment. Take a manual backup first
                  if you want to keep anything — the one-click export feature is coming in an upcoming release.
                </p>
              </div>

              <div className="sc-faq-item">
                <h3 className="sc-faq-q">What if Soult shuts down?</h3>
                <p className="sc-faq-a">
                  We open a 90-day sunset window. You download everything in plain readable formats.
                  We will not sell your data, transfer your vault to a buyer without consent, or delete vaults
                  during this window.
                </p>
              </div>

              <div className="sc-faq-item">
                <h3 className="sc-faq-q">Subscription payments?</h3>
                <p className="sc-faq-a">
                  Managed via Razorpay on the Soult website. No in-app purchases.
                  This keeps billing separate from your vault device.
                </p>
              </div>

              <div className="sc-erasure">
                <div className="sc-erasure-header">Erasure Protocol</div>
                <div className="sc-erasure-body">
                  Immediate user-key revocation across primary, replica, and any backup storage.
                  Stored ciphertext rendered globally unreadable. Sunset window: 90 days, mandatory;
                  reminders weekly via SES; sale or transfer of vaults gated on per-user consent.
                </div>
              </div>
            </section>

            {/* 18 — Common Myths */}
            <section className="sc-section" id="s18">
              <div className="sc-sec-num">Section 18 — Common Myths</div>
              <h2 className="sc-sec-h">Why doesn&rsquo;t Soult use blockchain?</h2>
              <div className="sc-practical">
                <div className="sc-practical-label">Practical Perspective</div>
                <p className="sc-practical-q">&ldquo;The wrong tool for a private vault.&rdquo;</p>
                <p className="sc-practical-text">
                  Blockchain is built for public verification on shared ledgers where parties do not trust
                  each other — cryptocurrency, supply chain across rivals, public land records. Its strength
                  is making tampering visible to the world. Soult vaults are the opposite of public — they are
                  private by design. The user is the only party with stake in the data. Tampering intent is low
                  — it is the user&rsquo;s own data, kept for the user&rsquo;s own family.
                </p>
                <p className="sc-practical-text" style={{marginTop:'10px'}}>
                  For change tracking, we use audit logs (see Section 14) — every Create, Update, Delete is
                  recorded with timestamp and actor. Blockchain would add cost, complexity, and reduce privacy
                  by exposing patterns to a public ledger — without solving any user problem.
                </p>
              </div>
              <div className="sc-technical">
                <div className="sc-technical-label">Technical</div>
                <ul className="sc-technical-list">
                  <li>Threat model: low-tampering, high-privacy</li>
                  <li>Append-only audit log delivers required integrity guarantees at constant cost</li>
                  <li>Distributed-ledger overhead (consensus, gas, public exposure of metadata patterns) introduces no marginal benefit for a single-tenant private vault</li>
                  <li>Reconsidered if and when verified-public attestation becomes a user requirement</li>
                </ul>
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}
