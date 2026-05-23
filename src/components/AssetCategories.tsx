import type { ReactNode } from "react";

type Sub = { label: string; secured: boolean };
type Cat = { id: string; n: string; label: string; count: string; subs: Sub[] };

const CATS: Cat[] = [
  {
    id: "bank", n: "01", label: "Bank Accounts & Deposits", count: "8 types",
    subs: [
      { label: "Savings", secured: true }, { label: "Fixed Deposit", secured: true },
      { label: "Salary Account", secured: true }, { label: "PF", secured: true },
      { label: "Current", secured: false }, { label: "Recurring", secured: false },
      { label: "Post Office", secured: false }, { label: "Pension", secured: false },
    ],
  },
  {
    id: "gold", n: "03", label: "Gold & Precious Metals", count: "3 types",
    subs: [
      { label: "Jewellery", secured: true }, { label: "Digital Gold", secured: true },
      { label: "Sovereign Gold Bond", secured: false },
    ],
  },
  {
    id: "insurance", n: "04", label: "Insurance", count: "6 types",
    subs: [
      { label: "Health", secured: true }, { label: "Term Life", secured: true },
      { label: "Vehicle", secured: true }, { label: "Home", secured: false },
      { label: "Travel", secured: false }, { label: "ULIP", secured: false },
    ],
  },
  {
    id: "govt", n: "02", label: "Govt & Post Office Schemes", count: "9 types",
    subs: [
      { label: "EPF", secured: true }, { label: "PPF", secured: true }, { label: "NPS", secured: false },
      { label: "NSC", secured: false }, { label: "POMIS", secured: false }, { label: "SGB", secured: false },
      { label: "SCSS", secured: false }, { label: "SSY", secured: false }, { label: "KVP", secured: false },
    ],
  },
  {
    id: "stocks", n: "05", label: "Stocks & Mutual Funds", count: "4 types",
    subs: [
      { label: "Stocks", secured: true }, { label: "Mutual Funds", secured: true },
      { label: "ETFs", secured: false }, { label: "Chit Funds", secured: false },
    ],
  },
  {
    id: "realestate", n: "06", label: "Real Estate", count: "2 types",
    subs: [
      { label: "Residential", secured: true }, { label: "Commercial", secured: false },
    ],
  },
  {
    id: "loans", n: "07", label: "Loans & Liabilities", count: "6 types",
    subs: [
      { label: "Home Loan", secured: true }, { label: "Vehicle Loan", secured: true },
      { label: "Credit Card", secured: false }, { label: "Personal Loan", secured: false },
      { label: "Business Loan", secured: false }, { label: "Informal Loans", secured: false },
    ],
  },
  {
    id: "digital", n: "08", label: "Digital Assets", count: "3 types",
    subs: [
      { label: "Cryptocurrency", secured: false }, { label: "NFTs", secured: false },
      { label: "Foreign Currency", secured: false },
    ],
  },
  {
    id: "docs", n: "09", label: "Documents", count: "6 types",
    subs: [
      { label: "Land Records", secured: true }, { label: "Identity Docs", secured: true },
      { label: "Tax & ITR", secured: false }, { label: "Certificates", secured: false },
      { label: "Agreements", secured: false }, { label: "Legal Papers", secured: false },
    ],
  },
  {
    id: "devices", n: "10", label: "Accounts & Devices", count: "9 types",
    subs: [
      { label: "Email", secured: true }, { label: "Social Media", secured: false },
      { label: "Phone & Laptop", secured: false }, { label: "Cloud Storage", secured: false },
      { label: "Subscriptions", secured: false }, { label: "Domain Names", secured: false },
      { label: "App Accounts", secured: false }, { label: "Password Manager", secured: false },
      { label: "Work Accounts", secured: false },
    ],
  },
];

const ICONS: Record<string, ReactNode> = {
  bank: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="14" width="20" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/><path d="M5 14V9h3v5M10 14V7h4v7M16 14V9h3v5" stroke="currentColor" strokeWidth="1.8"/><path d="M2 10l10-7 10 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  gold: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.4 6.4H21l-5.4 4 2.1 6.4L12 15l-5.7 3.8 2.1-6.4L3 8.4h6.6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  insurance: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v6c0 5 3.6 9.7 8 11 4.4-1.3 8-6 8-11V7L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  govt: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 21h18M3 10h18M5 6l7-3 7 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><path d="M5 10v11M9 10v11M15 10v11M19 10v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  stocks: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  realestate: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  loans: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 10h20M6 15h3M15 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  digital: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 3c0 0-4 3.5-4 9s4 9 4 9M12 3c0 0 4 3.5 4 9s-4 9-4 9M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  docs: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  devices: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
};

function Card({ cat, className = "" }: { cat: Cat; className?: string }) {
  const secured = cat.subs.filter((s) => s.secured).length;
  const total = cat.subs.length;
  const pct = Math.round((secured / total) * 100);

  return (
    <div className={`ac-card ${className}`}>
      {/* Decorative arc top-right */}
      <svg className="ac-card-arc" width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="72" cy="0" r="56" stroke="rgba(200,155,60,0.12)" strokeWidth="1.5" fill="none"/>
        <circle cx="72" cy="0" r="38" stroke="rgba(200,155,60,0.08)" strokeWidth="1" fill="none"/>
      </svg>

      {/* Top row */}
      <div className="ac-card-top">
        <span className="ac-card-num">{cat.n}</span>
        <div className="ac-card-icon" style={{ color: "#C89B3C" }}>{ICONS[cat.id]}</div>
      </div>

      {/* Title */}
      <div className="ac-card-title">{cat.label}</div>
      <div className="ac-card-meta">
        <span className="ac-card-count">{cat.count}</span>
        <span className="ac-card-secured">{secured} secured</span>
      </div>

      {/* Progress bar */}
      <div className="ac-card-bar-wrap">
        <div className="ac-card-bar" style={{ width: `${pct}%` }} />
      </div>

      {/* Sub-type pills */}
      <div className="ac-card-pills">
        {cat.subs.map((s) => (
          <span key={s.label} className={`ac-pill ${s.secured ? "ac-pill--secured" : "ac-pill--pending"}`}>
            {s.secured && <span className="ac-pill-dot" />}
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AssetCategories() {
  return (
    <>
      <style>{`
        .ac-wrap {
          background: #FDFAF6;
          padding: 88px 64px;
          font-family: 'Outfit', sans-serif;
        }
        .ac-inner { max-width: 1160px; margin: 0 auto; }

        /* Header */
        .ac-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 56px; gap: 32px; }
        .ac-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #C89B3C; margin-bottom: 12px; }
        .ac-heading { font-size: clamp(34px, 4vw, 54px); font-weight: 900; color: #2B1D16; letter-spacing: -0.04em; line-height: 1.0; margin: 0; }
        .ac-heading em { font-style: normal; color: #C89B3C; }
        .ac-header-note { font-size: 18px; color: rgba(43,29,22,0.5); line-height: 1.7; max-width: 300px; padding-bottom: 8px; }

        /* Bento grid */
        .ac-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto;
          gap: 14px;
        }

        /* Grid placement */
        .ac-span2 { grid-column: span 2; }
        .ac-span1 { grid-column: span 1; }
        .ac-personal-wrap { grid-column: span 4; }

        /* Card */
        .ac-card {
          background: #fff;
          border-radius: 24px;
          padding: 26px 26px 22px;
          border: 1px solid rgba(43,29,22,0.07);
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          position: relative; overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          display: flex; flex-direction: column; gap: 0;
        }
        .ac-card:hover {
          box-shadow: 0 8px 40px rgba(200,155,60,0.12), 0 2px 8px rgba(43,29,22,0.06);
          transform: translateY(-2px);
          border-color: rgba(200,155,60,0.3);
        }

        /* Decorative arc */
        .ac-card-arc { position: absolute; top: 0; right: 0; pointer-events: none; }

        /* Card internals */
        .ac-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .ac-card-num { font-size: 11px; font-weight: 800; letter-spacing: 0.14em; color: rgba(43,29,22,0.22); }
        .ac-card-icon { width: 38px; height: 38px; border-radius: 10px; background: rgba(200,155,60,0.09); display: flex; align-items: center; justify-content: center; }

        .ac-card-title { font-size: 17px; font-weight: 800; color: #2B1D16; letter-spacing: -0.02em; line-height: 1.25; margin-bottom: 8px; }
        .ac-card-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .ac-card-count { font-size: 12px; font-weight: 700; color: rgba(43,29,22,0.35); letter-spacing: 0.04em; }
        .ac-card-secured { font-size: 11px; font-weight: 700; color: #B8922A; letter-spacing: 0.04em; }

        /* Progress bar */
        .ac-card-bar-wrap { height: 3px; background: rgba(43,29,22,0.07); border-radius: 100px; margin-bottom: 18px; overflow: hidden; }
        .ac-card-bar { height: 100%; background: linear-gradient(to right, #C89B3C, #E8C060); border-radius: 100px; transition: width 0.6s ease; }

        /* Pills */
        .ac-card-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .ac-pill {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 600; border-radius: 100px;
          padding: 5px 12px; white-space: nowrap;
          transition: all 0.18s;
        }
        .ac-pill--secured {
          background: rgba(200,155,60,0.10);
          border: 1.5px solid rgba(200,155,60,0.28);
          color: #8B6914;
        }
        .ac-pill--pending {
          background: transparent;
          border: 1.5px dashed rgba(43,29,22,0.18);
          color: rgba(43,29,22,0.38);
        }
        .ac-pill-dot { width: 5px; height: 5px; border-radius: 50%; background: #C89B3C; flex-shrink: 0; }

        /* Personal Assets — special full-width card */
        .ac-personal {
          background: linear-gradient(135deg, #FFF9F0 0%, #FDF6EC 50%, #FFF9F0 100%);
          border-radius: 24px;
          border: 1.5px solid rgba(200,155,60,0.18);
          padding: 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          box-shadow: 0 2px 20px rgba(200,155,60,0.06);
          position: relative; overflow: hidden;
        }
        .ac-personal-left {}
        .ac-personal-num { font-size: 11px; font-weight: 800; letter-spacing: 0.14em; color: rgba(43,29,22,0.22); margin-bottom: 16px; }
        .ac-personal-title { font-size: 26px; font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; line-height: 1.15; margin-bottom: 12px; }
        .ac-personal-sub { font-size: 18px; color: rgba(43,29,22,0.55); line-height: 1.65; }

        /* Dashed upload zone */
        .ac-personal-zone {
          border: 2px dashed rgba(200,155,60,0.35);
          border-radius: 20px;
          padding: 36px 28px;
          text-align: center;
          background: rgba(255,255,255,0.6);
          transition: border-color 0.2s, background 0.2s;
          cursor: pointer;
        }
        .ac-personal-zone:hover { border-color: rgba(200,155,60,0.65); background: rgba(255,255,255,0.9); }
        .ac-personal-zone-icon { font-size: 32px; margin-bottom: 12px; }
        .ac-personal-zone-title { font-size: 16px; font-weight: 800; color: #2B1D16; margin-bottom: 8px; }
        .ac-personal-zone-hint { font-size: 13px; color: rgba(43,29,22,0.45); line-height: 1.6; margin-bottom: 20px; }
        .ac-personal-tags { display: flex; flex-wrap: wrap; gap: 7px; justify-content: center; }
        .ac-personal-tag {
          font-size: 12px; font-weight: 600; padding: 5px 14px;
          border-radius: 100px; border: 1.5px dashed rgba(200,155,60,0.35);
          color: rgba(43,29,22,0.45); background: transparent;
        }

        /* Decorative gold orb personal */
        .ac-personal-orb {
          position: absolute; width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(200,155,60,0.08) 0%, transparent 70%);
          right: -60px; top: -60px; pointer-events: none;
        }

        @media (max-width: 1024px) {
          .ac-grid { grid-template-columns: repeat(2, 1fr); }
          .ac-span2 { grid-column: span 2; }
          .ac-span1 { grid-column: span 1; }
          .ac-personal-wrap { grid-column: span 2; }
        }
        @media (max-width: 720px) {
          .ac-wrap { padding: 60px 20px; }
          .ac-header { flex-direction: column; align-items: flex-start; }
          .ac-grid { grid-template-columns: 1fr; }
          .ac-span2, .ac-span1, .ac-personal-wrap { grid-column: span 1; }
          .ac-personal { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

      <div className="ac-wrap">
        <div className="ac-inner">

          {/* Header */}
          <div className="ac-header">
            <div>
              <div className="ac-eyebrow">Everything you own</div>
              <h2 className="ac-heading">All of it<br /><em>recordable.</em></h2>
            </div>
            <p className="ac-header-note">From savings accounts to ancestral gold. From LIC policies to Instagram accounts. If it matters to you, it belongs here.</p>
          </div>

          {/* Bento grid */}
          <div className="ac-grid">

            {/* Row 1: Bank (wide) · Gold · Insurance */}
            <div className="ac-span2"><Card cat={CATS[0]} /></div>
            <div className="ac-span1"><Card cat={CATS[1]} /></div>
            <div className="ac-span1"><Card cat={CATS[2]} /></div>

            {/* Row 2: Govt (wide) · Stocks · Real Estate */}
            <div className="ac-span2"><Card cat={CATS[3]} /></div>
            <div className="ac-span1"><Card cat={CATS[4]} /></div>
            <div className="ac-span1"><Card cat={CATS[5]} /></div>

            {/* Row 3: Loans · Digital · Docs (wide) */}
            <div className="ac-span1"><Card cat={CATS[6]} /></div>
            <div className="ac-span1"><Card cat={CATS[7]} /></div>
            <div className="ac-span2"><Card cat={CATS[8]} /></div>

            {/* Row 4: Accounts & Devices — full width */}
            <div className="ac-personal-wrap"><Card cat={CATS[9]} /></div>

            {/* Personal Assets — special */}
            <div className="ac-personal-wrap">
              <div className="ac-personal">
                <div className="ac-personal-orb" />
                <div className="ac-personal-left">
                  <div className="ac-personal-num">11</div>
                  <div className="ac-personal-title">Personal Assets</div>
                  <p className="ac-personal-sub">Art. Heirlooms. A grandfather&apos;s ring. Your grandmother&apos;s saree. Anything of sentimental or ancestral value — record it here, in your own words.</p>
                </div>
                <div className="ac-personal-zone">
                  <div className="ac-personal-zone-icon">✦</div>
                  <div className="ac-personal-zone-title">Record anything that matters</div>
                  <p className="ac-personal-zone-hint">A name is enough to begin. Add a photo, a story, a weight, a value — or just the memory.</p>
                  <div className="ac-personal-tags">
                    {["Art & Paintings", "Antiques", "Instruments", "Watches", "Vintage Items", "Jewellery", "Books", "Family Heirlooms"].map((s) => (
                      <span className="ac-personal-tag" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
