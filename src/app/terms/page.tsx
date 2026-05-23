import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use & EULA — Soult Digital Private Limited",
  description: "Terms of Use including End User License Agreement for Soult Digital Private Limited, Mangalore, Karnataka, India.",
};

const TOC = [
  { n: "1", h: "General" },
  { n: "2", h: "Definitions" },
  { n: "3", h: "Eligibility" },
  { n: "4", h: "Amendments" },
  { n: "5", h: "Subscription & Payments" },
  { n: "6", h: "User Account & Security" },
  { n: "7", h: "User Obligations" },
  { n: "8", h: "Organ Donation Preferences" },
  { n: "9", h: "Will Management" },
  { n: "10", h: "Executor Nomination" },
  { n: "11", h: "Indemnification & Liability" },
  { n: "12", h: "Violation of Terms" },
  { n: "13", h: "Termination" },
  { n: "14", h: "Mobile Platform Operators" },
  { n: "15", h: "Disclaimers" },
  { n: "16", h: "Intellectual Property" },
  { n: "17", h: "Third Party Content" },
  { n: "18", h: "Governing Law" },
  { n: "19", h: "Grievance Redressal" },
  { n: "20", h: "Communications" },
];

const DEFINITIONS = [
  { t: "Account", d: "The registered profile created by a User on the Platform." },
  { t: "Digital Assets", d: "All information, documents, images, videos, preferences, and data uploaded by a User." },
  { t: "Nominee", d: "A person designated by the User for conditional access to the Platform or specific Content." },
  { t: "Will Preferences", d: "Non-binding testamentary intentions recorded digitally on the Platform." },
  { t: "Organ Donation Preferences", d: "Non-binding declarations of intent regarding organ and tissue donation." },
  { t: "Content", d: "Any material uploaded, stored, transmitted, or recorded on the Platform by a User." },
  { t: "Platform", d: "The Soult mobile application and the website www.soultdigital.com collectively." },
  { t: "Trigger Event", d: "A defined occurrence (such as submission of a death certificate) that activates access for nominated persons." },
];

export default function TermsPage() {
  return (
    <>
      <style>{`
        .tc { font-family: 'Outfit', sans-serif; background: #FDFAF6; color: #2B1D16; }

        /* ── HERO ── */
        .tc-hero {
          background: #FDFAF6; padding: 72px 64px 56px;
          border-bottom: 1px solid rgba(43,29,22,0.08);
          position: relative; overflow: hidden;
        }
        .tc-hero::before {
          content: ''; position: absolute;
          top: -160px; right: -160px; width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(200,155,60,0.07) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .tc-hero-inner { max-width: 1160px; margin: 0 auto; position: relative; }
        .tc-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 18px;
        }
        .tc-hero-eyebrow::before {
          content: ''; display: inline-block;
          width: 20px; height: 1.5px; background: #C89B3C;
        }
        .tc-hero-h {
          font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #2B1D16;
          letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 8px;
        }
        .tc-hero-sub {
          font-size: 17px; color: rgba(43,29,22,0.50); font-weight: 400; margin: 0 0 28px;
        }
        .tc-hero-meta {
          display: flex; align-items: center; gap: 24px; flex-wrap: wrap;
        }
        .tc-hero-meta-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: rgba(43,29,22,0.45); font-weight: 500;
        }
        .tc-hero-meta-item svg { width: 13px; height: 13px; stroke: rgba(43,29,22,0.30); fill: none; stroke-width: 2; stroke-linecap: round; }
        .tc-hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(200,155,60,0.09); border: 1px solid rgba(200,155,60,0.22);
          border-radius: 100px; padding: 6px 14px;
          font-size: 12px; font-weight: 700; color: #8B6914; letter-spacing: 0.04em;
        }
        .tc-hero-badge svg { width: 12px; height: 12px; stroke: #C89B3C; fill: none; stroke-width: 2; stroke-linecap: round; }

        /* ── NOTICE BAR ── */
        .tc-notice {
          background: #FFF8EC; border-bottom: 1px solid rgba(200,155,60,0.18);
          padding: 14px 64px;
        }
        .tc-notice-inner {
          max-width: 1160px; margin: 0 auto;
          font-size: 13px; color: rgba(43,29,22,0.60); line-height: 1.55;
        }
        .tc-notice-inner strong { color: #2B1D16; font-weight: 700; }

        /* ── LAYOUT ── */
        .tc-layout {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 240px 1fr;
          gap: 0; align-items: start;
        }

        /* ── TOC SIDEBAR ── */
        .tc-toc {
          position: sticky; top: 24px;
          padding: 40px 24px 40px 0;
          border-right: 1px solid rgba(43,29,22,0.07);
          height: calc(100vh - 48px); overflow-y: auto;
        }
        .tc-toc-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(43,29,22,0.30); margin-bottom: 16px;
          padding: 0 4px;
        }
        .tc-toc-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1px; }
        .tc-toc-item a {
          display: flex; align-items: baseline; gap: 8px;
          padding: 8px 10px; border-radius: 8px;
          font-size: 13px; font-weight: 500; color: rgba(43,29,22,0.45);
          text-decoration: none; letter-spacing: 0.01em;
          transition: color 0.18s, background 0.18s;
          line-height: 1.4;
        }
        .tc-toc-item a:hover {
          color: #C89B3C; background: rgba(200,155,60,0.07);
        }
        .tc-toc-num {
          font-size: 10px; font-weight: 800; color: rgba(200,155,60,0.45);
          letter-spacing: 0.08em; flex-shrink: 0; padding-top: 1px;
        }

        /* ── CONTENT ── */
        .tc-content { padding: 52px 0 100px 56px; }

        /* ── SECTION ── */
        .tc-section {
          margin-bottom: 0;
          padding: 48px 0;
          border-bottom: 1px solid rgba(43,29,22,0.07);
          scroll-margin-top: 24px;
        }
        .tc-section:last-child { border-bottom: none; }

        .tc-sec-num {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          color: #C89B3C; margin-bottom: 8px; text-transform: uppercase;
        }
        .tc-sec-h {
          font-size: 22px; font-weight: 800; color: #2B1D16;
          letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 20px;
        }
        .tc-sec-p {
          font-size: 16px; color: rgba(43,29,22,0.65); line-height: 1.80; margin: 0 0 16px;
        }
        .tc-sec-p:last-child { margin-bottom: 0; }

        /* ── SUB SECTION (within 8, 9, 10) ── */
        .tc-sub {
          margin: 24px 0;
          padding: 22px 24px;
          background: #F5F0E8;
          border-radius: 14px;
          border-left: 3px solid rgba(200,155,60,0.40);
        }
        .tc-sub-h {
          font-size: 14px; font-weight: 800; color: #2B1D16;
          letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 12px;
        }
        .tc-sub-list {
          list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;
        }
        .tc-sub-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 15px; color: rgba(43,29,22,0.65); line-height: 1.65;
        }
        .tc-sub-list li::before {
          content: ''; display: inline-block; flex-shrink: 0;
          width: 6px; height: 6px; border-radius: 50%;
          background: #C89B3C; margin-top: 7px;
        }

        /* ── DEFINITION TABLE ── */
        .tc-def-table {
          width: 100%; border-collapse: collapse; margin: 8px 0;
          font-size: 15px;
        }
        .tc-def-table tr { border-bottom: 1px solid rgba(43,29,22,0.07); }
        .tc-def-table tr:last-child { border-bottom: none; }
        .tc-def-table td { padding: 14px 12px; vertical-align: top; line-height: 1.65; }
        .tc-def-table td:first-child {
          font-weight: 700; color: #2B1D16; width: 200px;
          white-space: nowrap; font-size: 14px;
        }
        .tc-def-table td:last-child { color: rgba(43,29,22,0.62); }
        .tc-def-table tr:nth-child(odd) td { background: #F5F0E8; }
        .tc-def-table tr:nth-child(odd) td:first-child { border-radius: 8px 0 0 8px; }
        .tc-def-table tr:nth-child(odd) td:last-child { border-radius: 0 8px 8px 0; }

        /* ── ALLCAPS LEGAL BOX ── */
        .tc-allcaps {
          background: #F5F0E8; border-radius: 14px;
          border: 1px solid rgba(43,29,22,0.09);
          padding: 24px 28px; margin: 20px 0;
          font-size: 13px; color: rgba(43,29,22,0.55);
          line-height: 1.70; letter-spacing: 0.01em;
          font-weight: 500;
        }

        /* ── PLAIN UL LIST ── */
        .tc-list {
          list-style: none; padding: 0; margin: 16px 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .tc-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 16px; color: rgba(43,29,22,0.65); line-height: 1.65;
        }
        .tc-list li::before {
          content: ''; display: inline-block; flex-shrink: 0;
          width: 6px; height: 6px; border-radius: 50%;
          background: #C89B3C; margin-top: 8px;
        }

        /* ── CONTACT CARD ── */
        .tc-contact-card {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(43,29,22,0.09);
          box-shadow: 0 4px 24px rgba(43,29,22,0.06);
          overflow: hidden; margin-top: 8px;
        }
        .tc-contact-header {
          background: #F5F0E8; padding: 18px 28px;
          border-bottom: 1px solid rgba(43,29,22,0.07);
          font-size: 13px; font-weight: 700; color: rgba(43,29,22,0.40);
          letter-spacing: 0.12em; text-transform: uppercase;
        }
        .tc-contact-body { padding: 24px 28px; display: flex; flex-direction: column; gap: 14px; }
        .tc-contact-row {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 15px; line-height: 1.55;
        }
        .tc-contact-row svg { flex-shrink: 0; margin-top: 2px; stroke: #C89B3C; fill: none; stroke-width: 1.7; stroke-linecap: round; }
        .tc-contact-label { font-size: 11px; font-weight: 700; color: rgba(43,29,22,0.35); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 3px; }
        .tc-contact-val { color: #2B1D16; font-weight: 500; }
        .tc-contact-val a { color: #C89B3C; text-decoration: none; }
        .tc-contact-val a:hover { text-decoration: underline; }
        .tc-contact-ids {
          display: flex; gap: 16px; flex-wrap: wrap;
          padding-top: 16px; border-top: 1px solid rgba(43,29,22,0.07);
        }
        .tc-id-pill {
          font-size: 12px; font-weight: 700; color: rgba(43,29,22,0.50);
          background: #F5F0E8; border: 1px solid rgba(43,29,22,0.09);
          border-radius: 8px; padding: 6px 12px; letter-spacing: 0.04em;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .tc-layout { grid-template-columns: 1fr; }
          .tc-toc { display: none; }
          .tc-content { padding: 40px 24px 80px; }
          .tc-hero, .tc-notice { padding-left: 24px; padding-right: 24px; }
        }
        @media (max-width: 600px) {
          .tc-hero { padding-top: 48px; padding-bottom: 36px; }
          .tc-def-table td:first-child { width: 140px; }
        }
      `}</style>

      <div className="tc">

        {/* ── HERO ── */}
        <div className="tc-hero">
          <div className="tc-hero-inner">
            <div className="tc-hero-eyebrow">Legal Document</div>
            <h1 className="tc-hero-h">Terms of Use</h1>
            <p className="tc-hero-sub">Including End User License Agreement (EULA)</p>
            <div className="tc-hero-meta">
              <div className="tc-hero-meta-item">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Last Updated: April 2026
              </div>
              <div className="tc-hero-meta-item">
                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Soult Digital Private Limited, Mangalore, Karnataka, India
              </div>
              <div className="tc-hero-badge">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Electronic Record under IT Act, 2000
              </div>
            </div>
          </div>
        </div>

        {/* ── NOTICE ── */}
        <div className="tc-notice">
          <div className="tc-notice-inner">
            <strong>Important:</strong> By downloading, installing, registering for, or using the Platform, you agree to be bound by these Terms and all policies referenced herein. These Terms are published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines and Digital Media Ethics Code) Rules, 2021. If you do not agree, please discontinue use and uninstall the application.
          </div>
        </div>

        {/* ── LAYOUT ── */}
        <div className="tc-layout">

          {/* TOC */}
          <aside className="tc-toc">
            <div className="tc-toc-label">Contents</div>
            <ul className="tc-toc-list">
              {TOC.map((item) => (
                <li className="tc-toc-item" key={item.n}>
                  <a href={`#section-${item.n}`}>
                    <span className="tc-toc-num">{item.n}</span>
                    {item.h}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENT */}
          <main className="tc-content">

            {/* 1 — General */}
            <section className="tc-section" id="section-1">
              <div className="tc-sec-num">Section 01</div>
              <h2 className="tc-sec-h">General</h2>
              <p className="tc-sec-p">The Platform is made available by <strong>SOULT DIGITAL PRIVATE LIMITED</strong> ("Soult", "Company", "we", "us", "our"), a company established under the laws of India, having its registered office at Door No 4-1-143/1A(2), Vertex Workspace, Gateway Building, Above Kalyan Jewellers, MG Road, Mangalore – 575003, Karnataka, India.</p>
              <p className="tc-sec-p">The term "Services" refers to any services offered by Soult, including but not limited to:</p>
              <ul className="tc-list">
                <li>Recording asset details (movable and immovable)</li>
                <li>Uploading insurance policies and financial instruments</li>
                <li>Storing family memories, videos, and digital letters</li>
                <li>Recording testamentary intentions</li>
                <li>Recording organ donation preferences</li>
                <li>Assigning nominees for conditional access</li>
                <li>Organising personal and financial documentation</li>
              </ul>
              <p className="tc-sec-p">The Platform is operated and Services are provided in compliance with Indian laws. The Company shall not be liable to provide Services to users outside India unless otherwise provided. If you access our Services from outside India, you do so at your own risk and are solely responsible for complying with applicable local laws.</p>
            </section>

            {/* 2 — Definitions */}
            <section className="tc-section" id="section-2">
              <div className="tc-sec-num">Section 02</div>
              <h2 className="tc-sec-h">Definitions</h2>
              <p className="tc-sec-p">Unless defined here, all capitalised terms carry the meaning ascribed to them in the Privacy Policy.</p>
              <table className="tc-def-table">
                <tbody>
                  {DEFINITIONS.map((d) => (
                    <tr key={d.t}>
                      <td>{d.t}</td>
                      <td>{d.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            {/* 3 — Eligibility */}
            <section className="tc-section" id="section-3">
              <div className="tc-sec-num">Section 03</div>
              <h2 className="tc-sec-h">Eligibility</h2>
              <p className="tc-sec-p">Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 — including minors and un-discharged insolvents — are not eligible to use the Platform.</p>
              <p className="tc-sec-p">Only individuals aged 18 or older may use the Platform. If you are under 18 and wish to use the Platform, your parent or legal guardian must acknowledge and agree to these Terms. If they do not, you must immediately discontinue use.</p>
              <p className="tc-sec-p">The Company reserves the right to terminate your Account or deny access if it is established that you are under 18 years of age.</p>
            </section>

            {/* 4 — Amendments */}
            <section className="tc-section" id="section-4">
              <div className="tc-sec-num">Section 04</div>
              <h2 className="tc-sec-h">Amendments</h2>
              <p className="tc-sec-p">The Company reserves the right to change or modify these Terms, or any policy or guideline of the Platform (including the Privacy Policy), at any time and in its sole discretion. Changes take effect immediately upon posting.</p>
              <p className="tc-sec-p">While the Company will periodically inform you of material changes, you are responsible for checking this page regularly. Your continued use of the Platform constitutes acceptance of the updated Terms.</p>
            </section>

            {/* 5 — Subscription */}
            <section className="tc-section" id="section-5">
              <div className="tc-sec-num">Section 05</div>
              <h2 className="tc-sec-h">Subscription & Payments</h2>
              <p className="tc-sec-p">Certain features on the Platform may require subscription payments. Fees are displayed transparently within the Platform. Payments are processed through third-party payment gateways. Soult shall not be responsible for payment failures but will attempt to resolve them in good faith.</p>
              <p className="tc-sec-p">Soult reserves the right to modify pricing at any time. Updated pricing will be displayed on the Platform prior to any change taking effect on your account.</p>
              <p className="tc-sec-p">Users will not be entitled to refunds for non-usage or cancellation of any subscription. However, Soult may, at its sole discretion and on a case-by-case basis, offer refunds where it deems appropriate.</p>
            </section>

            {/* 6 — User Account */}
            <section className="tc-section" id="section-6">
              <div className="tc-sec-num">Section 06</div>
              <h2 className="tc-sec-h">User Account, Password and Security</h2>
              <p className="tc-sec-p">You may access the Platform by registering directly or through a third-party social media account ("Third Party Account"). By granting us access to a Third Party Account, you confirm you are entitled to do so and that it does not breach the terms of that platform.</p>
              <p className="tc-sec-p">You agree to provide accurate, current, and complete information during registration and to keep it updated. You are fully responsible for:</p>
              <ul className="tc-list">
                <li>Maintaining the confidentiality of your Account credentials, MPIN, and recovery information</li>
                <li>All activities that occur under your Account</li>
                <li>Notifying Soult immediately of any unauthorised use or security breach</li>
              </ul>
              <p className="tc-sec-p">Loss of Account credentials or recovery mechanisms may result in permanent, irrecoverable loss of access to your Data Assets. Soult cannot recover encrypted content if access credentials are lost.</p>
              <p className="tc-sec-p">Soult reserves the right to suspend or terminate your Account if any information provided is inaccurate, if your actions create legal liability, or if you are found to be non-compliant with these Terms.</p>
            </section>

            {/* 7 — User Obligations */}
            <section className="tc-section" id="section-7">
              <div className="tc-sec-num">Section 07</div>
              <h2 className="tc-sec-h">User Obligations</h2>
              <p className="tc-sec-p">Subject to compliance with these Terms, Soult grants you a personal, non-exclusive, non-transferable, limited licence to access and use the Platform. You agree to use the Platform only for lawful purposes and in accordance with applicable law.</p>
              <p className="tc-sec-p">You agree and acknowledge that you will not:</p>
              <ul className="tc-list">
                <li>Access the Platform by any means other than through the interface provided by Soult</li>
                <li>Use automated tools such as scrapers, bots, spiders, or similar processes to access or copy any part of the Platform</li>
                <li>Attempt to gain unauthorised access to any portion of the Platform or its connected systems</li>
                <li>Probe, scan, or test the vulnerability of the Platform or any connected network without prior written consent</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to extract the source code of the App</li>
                <li>Use the Platform as a substitute for financial advice, legal services, banking, a payment operator, or a financial custodian — Soult is a record-keeping platform only</li>
                <li>Delete or modify any legal notices, disclaimers, or proprietary notices on the Platform</li>
                <li>Make any defamatory or denigrating statements about Soult or its brand</li>
              </ul>
              <p className="tc-sec-p" style={{marginTop:'16px'}}>You further agree not to upload, transmit, or store Content that:</p>
              <ul className="tc-list">
                <li>Is illegal, misleading, fraudulent, threatening, abusive, obscene, defamatory, or violates applicable law</li>
                <li>Infringes any intellectual property rights of any person or entity</li>
                <li>Contains software viruses or malicious code of any kind</li>
                <li>Is harmful to minors</li>
                <li>Threatens the unity, integrity, or sovereignty of India or public order</li>
                <li>Impersonates any person, including Soult employees, partners, or other users</li>
              </ul>
              <p className="tc-sec-p" style={{marginTop:'16px'}}>You grant Soult a non-exclusive, worldwide, perpetual, royalty-free licence to store and serve your Content solely for the purposes of providing the Services to you. You retain all ownership rights in your Content. You may delete your Content at any time through your Account. You remain solely responsible for the accuracy of all Content you store on the Platform.</p>
            </section>

            {/* 8 — Organ Donation */}
            <section className="tc-section" id="section-8">
              <div className="tc-sec-num">Section 08</div>
              <h2 className="tc-sec-h">Specific Terms for Organ Donation Preferences</h2>
              <p className="tc-sec-p">Soult is a preference-recording platform only. Recording your organ donation preferences on the Platform does not constitute statutory or legal consent under any applicable law, including the Transplantation of Human Organs and Tissues Act. Final consent must be provided by next-of-kin or through official government documentation at the time of passing.</p>

              <div className="tc-sub">
                <div className="tc-sub-h">What Soult Does</div>
                <ul className="tc-sub-list">
                  <li>Records your personal sentiments and preferences regarding organ and tissue donation</li>
                  <li>Stores the contact details of your chosen nominee(s)</li>
                  <li>Facilitates communication of these preferences to your nominee(s) upon a Trigger Event or at your request</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">What Soult Does Not Do</div>
                <ul className="tc-sub-list">
                  <li>Register users with hospitals, transplant centres, or medical facilities</li>
                  <li>Liaise with governmental authorities or national organ procurement organisations</li>
                  <li>Ensure that your name appears on any official organ donor database</li>
                  <li>Act as a legal registry of any kind</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Nominee Notification</div>
                <ul className="tc-sub-list">
                  <li>You are solely responsible for ensuring your nominee's contact information is accurate and up to date</li>
                  <li>Soult's role is limited to the attempted delivery of your recorded preferences — we cannot guarantee that a nominee will receive, read, or act upon a notification</li>
                  <li>By providing a nominee's details, you confirm you have their permission to share their contact information with Soult</li>
                  <li>Soult may require documentary evidence (identity proof, death certificate, legal heir certificate) before granting access</li>
                  <li>Soult may deny or suspend access in case of dispute, suspected fraud, or legal challenge</li>
                </ul>
              </div>
            </section>

            {/* 9 — Will Management */}
            <section className="tc-section" id="section-9">
              <div className="tc-sec-num">Section 09</div>
              <h2 className="tc-sec-h">Specific Terms for Will Management</h2>
              <p className="tc-sec-p">Soult is a technology platform, not a law firm. Use of the Platform does not create an attorney-client relationship. Guided templates are automated tools and do not constitute legal advice or a legal opinion. A Will drafted on Soult is not legally binding until it is physically executed, signed, and witnessed in accordance with applicable law.</p>

              <div className="tc-sub">
                <div className="tc-sub-h">Services Provided</div>
                <ul className="tc-sub-list">
                  <li><strong>Self-service drafting</strong> — guided templates for Will creation</li>
                  <li><strong>Procedural guidance</strong> — information on execution and registration process</li>
                  <li><strong>Digital repository</strong> — secure storage for scanned copies of executed documents</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">User Acknowledgements</div>
                <ul className="tc-sub-list">
                  <li>You are solely responsible for the accuracy of asset descriptions, beneficiary identities, and executor appointments</li>
                  <li>You represent that you are of sound mind and legal age to execute a Will</li>
                  <li>Where Soult provides options aligned with specific religious laws (e.g., Hindu Succession Act, Sharia principles), you must verify that the output accurately reflects your specific sect, school of thought, or local customs</li>
                  <li>Legal validity depends on applicable laws, jurisdiction, execution, witnesses, and registration — digital copies stored on Soult may serve only as records or supporting evidence</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Physical Execution Required</div>
                <ul className="tc-sub-list">
                  <li>As per applicable law, you must print the Will and sign it in the presence of at least two (2) witnesses who must also sign the document</li>
                  <li>Registration is the sole responsibility of the User. Soult does not attend registration hearings or verify whether a Will has been successfully registered</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Digital Storage</div>
                <ul className="tc-sub-list">
                  <li>Storing a scanned copy of a Will on Soult is for convenience only. In many jurisdictions, the original paper document is required for Probate</li>
                  <li>Soult is not responsible if a court rejects a digital copy</li>
                  <li>Soult shall not be liable for disputes, invalidity, revocation conflicts, or inconsistencies between digital preferences and executed legal instruments</li>
                </ul>
              </div>
            </section>

            {/* 10 — Executor */}
            <section className="tc-section" id="section-10">
              <div className="tc-sec-num">Section 10</div>
              <h2 className="tc-sec-h">Executor Nomination</h2>

              <div className="tc-sub">
                <div className="tc-sub-h">Nature of Nomination</div>
                <ul className="tc-sub-list">
                  <li>The User has obtained the explicit consent of the nominee to act as an Executor and to have their personal contact information stored on Soult</li>
                  <li>The nomination within the App is a digital record of intent only — the legal appointment of an Executor occurs through the physically executed and witnessed Will, subject to the laws of the relevant jurisdiction</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Trigger Events for Access</div>
                <ul className="tc-sub-list">
                  <li><strong>Death Verification</strong> — submission of a valid, government-issued Death Certificate by the Executor or a verified Trusted Contact</li>
                  <li><strong>Incapacitation (if selected)</strong> — submission of medical certification of the User's permanent legal incapacity</li>
                </ul>
                <p style={{fontSize:'14px', color:'rgba(43,29,22,0.50)', marginTop:'12px', lineHeight:'1.6'}}>Soult reserves the right to withhold access if documentation is deemed insufficient, fraudulent, or inconsistent with local legal standards.</p>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Executor Obligations</div>
                <ul className="tc-sub-list">
                  <li>Treat all accessed documents as strictly confidential</li>
                  <li>Acknowledge that Soult provides access to documents but does not initiate or manage Probate or Letters of Administration — the Executor is solely responsible for those legal steps</li>
                  <li>Submit to Soult's identity verification process before documents are released</li>
                </ul>
              </div>

              <div className="tc-sub">
                <div className="tc-sub-h">Soult's Limitations</div>
                <ul className="tc-sub-list">
                  <li>Executor misconduct, misappropriation of assets, or failure to follow the User's instructions</li>
                  <li>Refusal by a nominated Executor to perform their duties</li>
                  <li>Technical failures that prevent the Executor from receiving notifications</li>
                  <li>Disputes between multiple parties claiming to be the Executor — Soult will withhold access until a court order or official legal direction is provided</li>
                </ul>
                <p style={{fontSize:'14px', color:'rgba(43,29,22,0.50)', marginTop:'12px', lineHeight:'1.6'}}>Nomination on Soult is a data access mechanism only. It does not constitute a legal Will and does not supersede any Probate order.</p>
              </div>
            </section>

            {/* 11 — Indemnification */}
            <section className="tc-section" id="section-11">
              <div className="tc-sec-num">Section 11</div>
              <h2 className="tc-sec-h">Indemnification and Limitation of Liability</h2>
              <p className="tc-sec-p">You agree to indemnify, defend, and hold harmless the Company — including its affiliates, vendors, representatives, directors, agents, and employees — against all losses, liabilities, claims, damages, costs, and expenses (including legal fees) arising from any breach of these Terms, your use of the Platform, or your violation of the rights of any third party.</p>
              <p className="tc-sec-p">Notwithstanding anything to the contrary, the Company's entire liability to you shall not exceed 10% of the total fees charged to you for the Services under which the liability arises.</p>
              <div className="tc-allcaps">
                IN NO EVENT SHALL THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, PARTNERS, OR SUPPLIERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY SPECIAL, INCIDENTAL, INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING THOSE RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER OR NOT FORESEEABLE OR ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, OR BASED ON ANY THEORY OF LIABILITY, INCLUDING BREACH OF CONTRACT OR WARRANTY, NEGLIGENCE, OR OTHER TORTIOUS ACTION.
              </div>
            </section>

            {/* 12 — Violation */}
            <section className="tc-section" id="section-12">
              <div className="tc-sec-num">Section 12</div>
              <h2 className="tc-sec-h">Violation of Terms</h2>
              <p className="tc-sec-p">The Company may, in its sole discretion and without prior notice, terminate your access to the Platform and block future access if you have violated these Terms. Violations may result in injunctive or equitable relief being sought by the Company, in addition to any remedies available at law.</p>
              <p className="tc-sec-p">The Company may also terminate access if: (1) required by law enforcement or government agencies; (2) you self-initiate account deletion; (3) the Platform is discontinued or materially modified; or (4) unexpected technical issues arise.</p>
            </section>

            {/* 13 — Termination */}
            <section className="tc-section" id="section-13">
              <div className="tc-sec-num">Section 13</div>
              <h2 className="tc-sec-h">Termination</h2>
              <p className="tc-sec-p">These Terms will continue to apply until terminated by either you or the Company. You may terminate your agreement by not accessing the Platform or by closing your Account.</p>
              <p className="tc-sec-p">The Company may terminate or suspend your Account at any time, with or without notice, for any breach of these Terms, if required by law, if Services are discontinued, or if the commercial viability of Services is no longer maintained.</p>
              <p className="tc-sec-p">Termination may include removal of access to all Platform offerings, deletion of your Account and associated Content, and permanent barring from future use. Notwithstanding termination, provisions that by their nature survive will remain in force.</p>
            </section>

            {/* 14 — Mobile */}
            <section className="tc-section" id="section-14">
              <div className="tc-sec-num">Section 14</div>
              <h2 className="tc-sec-h">Relationship with Mobile Platform Operators</h2>
              <p className="tc-sec-p">The Platform is not associated with, affiliated to, sponsored, or endorsed by Apple, Google, or Android (each an "Operator"). Your download and use of the Platform is also bound by the relevant Operator's terms.</p>
              <p className="tc-sec-p">These Terms are concluded between you and Soult only. Soult — not the Operator — is solely responsible for the Platform and its content. The licence granted is a limited, non-transferable right to use the Platform on a device you own or control.</p>
              <p className="tc-sec-p">The Operator has no obligation to provide maintenance or support for the Platform. In the event of any third-party intellectual property claim relating to the Platform, Soult — not the Operator — will be responsible for investigation, defence, settlement, and discharge of such claim.</p>
            </section>

            {/* 15 — Disclaimers */}
            <section className="tc-section" id="section-15">
              <div className="tc-sec-num">Section 15</div>
              <h2 className="tc-sec-h">Disclaimers</h2>
              <div className="tc-allcaps">
                THE PLATFORM IS PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTY OF ANY KIND. THE COMPANY MAKES NO WARRANTY THAT: (I) THE PLATFORM WILL MEET YOUR REQUIREMENTS OR OPERATE WITHOUT INTERRUPTION, ERRORS, OR SECURITY BREACHES; (II) RESULTS OBTAINED FROM USE OF THE PLATFORM WILL BE ACCURATE OR RELIABLE; OR (III) ERRORS OR DEFECTS WILL BE CORRECTED. SOULT SHALL NOT BE LIABLE FOR ANY UNAUTHORISED DISCLOSURE OF DATA ASSETS OR DATA BREACHES RESULTING FROM FORCE MAJEURE, CYBERATTACKS BEYOND REASONABLE SAFEGUARDS, INFRASTRUCTURE FAILURES, OR GOVERNMENTAL ACTIONS. IN NO EVENT WILL SOULT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM USE OF OR INABILITY TO USE THE PLATFORM, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </div>
            </section>

            {/* 16 — IP */}
            <section className="tc-section" id="section-16">
              <div className="tc-sec-num">Section 16</div>
              <h2 className="tc-sec-h">Intellectual Property Rights</h2>
              <p className="tc-sec-p">Soult owns or holds the rights to all intellectual property in the Platform, including its user interface, layout, branding, and published content. The name "Soult" and all associated logos and marks are proprietary to Soult Digital Private Limited.</p>
              <p className="tc-sec-p">You shall not directly or indirectly attack, challenge, or assist others in attacking the validity of Soult's intellectual property rights. You must not use any part of the Platform's materials for commercial purposes without obtaining a licence from us.</p>
              <p className="tc-sec-p">If you become aware of any infringement of Soult's intellectual property, please report it to: <a href="mailto:support@soultdigital.com" style={{color:'#C89B3C', textDecoration:'none'}}>support@soultdigital.com</a></p>
            </section>

            {/* 17 — Third Party */}
            <section className="tc-section" id="section-17">
              <div className="tc-sec-num">Section 17</div>
              <h2 className="tc-sec-h">Third Party Content</h2>
              <p className="tc-sec-p">When you access a link that leaves the Platform, the site you enter is not controlled by Soult. Different terms and privacy policies apply. Soult is not responsible for third-party sites and reserves the right to disable links to or from them.</p>
              <p className="tc-sec-p">Soult may partner with third parties to facilitate provision of certain Services. Soult makes no representation or warranty regarding any third-party service and accepts no liability for consequences arising from your use of such services.</p>
            </section>

            {/* 18 — Governing Law */}
            <section className="tc-section" id="section-18">
              <div className="tc-sec-num">Section 18</div>
              <h2 className="tc-sec-h">Governing Law and Jurisdiction</h2>
              <p className="tc-sec-p">These Terms are governed by the laws of India. Any action, suit, or legal proceeding arising under or relating to the Platform or Services shall be subject to the exclusive jurisdiction of the courts at Mangalore, Karnataka, India.</p>
              <p className="tc-sec-p">If any provision of these Terms is determined to be illegal, invalid, or unenforceable under the laws of any jurisdiction, that provision shall be severed to the extent required. All remaining provisions shall remain in full force and effect.</p>
            </section>

            {/* 19 — Grievance */}
            <section className="tc-section" id="section-19">
              <div className="tc-sec-num">Section 19</div>
              <h2 className="tc-sec-h">Grievance Redressal</h2>
              <p className="tc-sec-p">For any questions, concerns, or grievances regarding these Terms or the Platform, please contact our Grievance Officer. We shall endeavour to resolve your grievance within 15 (fifteen) days from the date of receipt.</p>

              <div className="tc-contact-card">
                <div className="tc-contact-header">Soult Digital Private Limited — Grievance Officer</div>
                <div className="tc-contact-body">
                  <div className="tc-contact-row">
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <div className="tc-contact-label">Registered Address</div>
                      <div className="tc-contact-val">Door No 4-1-143/1A(2), Vertex Workspace, Gateway Building,<br />Above Kalyan Jewellers, MG Road, Mangalore – 575003,<br />Karnataka, India</div>
                    </div>
                  </div>
                  <div className="tc-contact-row">
                    <svg width="16" height="16" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div>
                      <div className="tc-contact-label">Email</div>
                      <div className="tc-contact-val"><a href="mailto:support@soultdigital.com">support@soultdigital.com</a></div>
                    </div>
                  </div>
                  <div className="tc-contact-ids">
                    <div className="tc-id-pill">CIN: U62099KA2026PTC215497</div>
                    <div className="tc-id-pill">PAN: ABSCS6774M</div>
                    <div className="tc-id-pill">TAN: HYDS90594A</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 20 — Communications */}
            <section className="tc-section" id="section-20">
              <div className="tc-sec-num">Section 20</div>
              <h2 className="tc-sec-h">Communications</h2>
              <p className="tc-sec-p">You agree to permit Soult to send you service-related communications including OTPs, security alerts, support responses, and account notifications via SMS, email, or any electronic means.</p>
              <p className="tc-sec-p">You also agree that Soult may send you promotional communications from Soult or allied partners. If you wish to opt out of promotional SMS or email, please send a request to: <a href="mailto:support@soultdigital.com" style={{color:'#C89B3C', textDecoration:'none'}}>support@soultdigital.com</a></p>
              <p className="tc-sec-p">Any failure by the Company to enforce or exercise any provision of these Terms shall not constitute a waiver of that provision or right.</p>
            </section>

          </main>
        </div>
      </div>
    </>
  );
}
