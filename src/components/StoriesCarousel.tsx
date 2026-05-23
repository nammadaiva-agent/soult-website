"use client";
import { useState } from "react";

const TABS = ["Essential Details", "The Journey", "Records & Photos", "Wishes & Nominees"] as const;
type Tab = typeof TABS[number];

type Field = { label: string; value: string; locked?: boolean; copyable?: boolean; warn?: boolean };

type Story = {
  bg: string;
  category: string;
  categoryIcon: React.ReactNode;
  quote: string;
  quoteSource: string;
  assetName: string;
  assetType: string;
  description: string;
  essential: Field[];
  journey: string;
  records: string;
  wishes: string;
  note: string;
  executorStory?: boolean;
};

const STORIES: Story[] = [
  {
    bg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Stocks & Mutual Funds · SIP",
    quote: "We had been talking about Europe for ten years. Every month, ₹5,000 went in quietly. This SIP was never just an investment. It was a promise we made to ourselves.",
    quoteSource: "The Journey, written in the vault",
    assetName: "Europe Vacation SIP",
    assetType: "SIP — Europe Dream Fund",
    description: "Started 2019. ₹5,000 per month. A goal that was always bigger than the money.",
    essential: [
      { label: "Fund", value: "Parag Parikh Flexi Cap", copyable: true },
      { label: "Monthly SIP", value: "₹5,000", copyable: true },
      { label: "Folio No.", value: "●●●● ●●●●", locked: true },
    ],
    journey: "We started talking about Europe on our second anniversary. Amsterdam, Rome, the Swiss Alps. We never had the money, then we had the excuses. In 2019 I quietly opened this SIP. ₹5,000 every month. By 2027, it should be enough. She doesn't know yet.",
    records: "Kuvera statement screenshot uploaded (Oct 2024). Fund fact sheet saved under Records. Nothing printed — everything is here.",
    wishes: "This SIP is for our Europe trip — both of us, no one else. If I am no longer here, she should use the full corpus for the trip. She should still go.",
    note: "A screenshot of your Kuvera or Groww dashboard is enough. Upload it under Records & Photos.",
  },
  {
    bg: "https://images.unsplash.com/photo-1540747913346-19212a4cf528?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="14" width="20" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 14V9a1 1 0 011-1h2a1 1 0 011 1v5M10 14V7a1 1 0 011-1h2a1 1 0 011 1v7M15 14V9a1 1 0 011-1h2a1 1 0 011 1v5" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 10l10-7 10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    category: "Bank Accounts · Fixed Deposit",
    quote: "Arjun plays district-level cricket. I opened this FD the year he was selected. Every rupee in it is for his game — tournaments, coaching, the national camp if he gets there.",
    quoteSource: "The Journey, written in the vault",
    assetName: "Arjun's Cricket FD",
    assetType: "Fixed Deposit — Tournament Fund",
    description: "₹2,00,000 locked for five years. For the boy who has been practising since he was seven.",
    essential: [
      { label: "Bank", value: "SBI, Koramangala", copyable: true },
      { label: "Amount", value: "₹2,00,000", copyable: true },
      { label: "Maturity", value: "12 Aug 2028", warn: true },
      { label: "FD No.", value: "●●●●●●●", locked: true },
    ],
    journey: "Arjun was selected for the district U-17 team in August 2023. I didn't tell anyone I opened this FD that same week. It is his — for kit, travel, coaching, whatever he needs to get further than I ever did.",
    records: "FD certificate photo uploaded. Bank passbook first page scanned. Physical FD receipt kept in the blue folder in the bedroom almirah, top shelf.",
    wishes: "This FD is entirely for Arjun's cricket career. If he stops playing cricket, the decision of how to use it is still his. No conditions. It was always his.",
    note: "Soult will remind you 60 days before this FD matures so you can renew, withdraw, or redirect in time.",
  },
  {
    bg: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Real Estate & Property · Plot",
    quote: "I bought this plot in 2018 when Ananya was twelve. I was thinking about her wedding, her future, her choice — whatever she decides.",
    quoteSource: "The Journey, written in the vault",
    assetName: "Ananya's Future — Plot",
    assetType: "Residential Plot — Anekal, Bengaluru",
    description: "1,200 sq ft. Registered in my name. Intended entirely for Ananya.",
    essential: [
      { label: "Location", value: "Anekal, Bengaluru", copyable: true },
      { label: "Area", value: "1,200 sq ft" },
      { label: "Survey No.", value: "87/4A", copyable: true },
    ],
    journey: "I had just gotten a bonus that year. I did not want to spend it. I wanted to give Ananya something that I could not take back. Land felt permanent. Whatever she does with it — sell it, build on it, keep it — is entirely her decision. I only wanted her to have the choice.",
    records: "Sale deed PDF uploaded (registered 2018). Encumbrance certificate uploaded. Sketch map and survey document saved. Physical originals in bank locker, City Union Bank, Jayanagar.",
    wishes: "This plot belongs to Ananya completely. She may sell, build, or hold as she chooses. No family member has any claim. Executor is instructed to transfer in her name as first priority.",
    note: "Sale deed PDF uploaded. Your executor and Ananya can access the document directly — no searching through paper files.",
  },
  {
    bg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 6.4H21l-5.4 4 2.1 6.4L12 15l-5.7 3.8 2.1-6.4L3 8.4h6.6L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Personal Assets · Gold Bracelet",
    quote: "My wife saved for three months to buy me this bracelet on our 10th anniversary. I want my son to wear it on his wedding day.",
    quoteSource: "The Journey, written in the vault",
    assetName: "Bracelet — 22K Gold",
    assetType: "Gold Bracelet — 10th Anniversary",
    description: "Three months of savings. One morning in a jewellery store. A gift that meant everything.",
    essential: [
      { label: "Metal", value: "22K Gold", copyable: true },
      { label: "Weight", value: "28g" },
      { label: "Engraving", value: "Our initials, inside" },
    ],
    journey: "She never told me she was saving for it. I only found out later. We walked into the store on a Saturday morning and she just said — pick the one you like. I still don't know how she managed three months of savings without me noticing. That is who she is.",
    records: "Photo of bracelet uploaded (front and back). Engraving close-up saved. No purchase receipt — bought in 2011, receipt lost. The story and the photo are enough.",
    wishes: "To be given to my son Arjun on his wedding day. He should wear it. If he chooses not to, he may keep it safely. Under no circumstances should it be sold.",
    note: "No receipt needed. A photo, the weight, and the story are all your executor needs.",
  },
  {
    bg: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 6.4H21l-5.4 4 2.1 6.4L12 15l-5.7 3.8 2.1-6.4L3 8.4h6.6L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Personal Assets · Gold Necklace",
    quote: "My mother put this necklace around my neck the evening I got my degree. She said — \"You earned this. Both of us did.\"",
    quoteSource: "The Journey, written in the vault",
    assetName: "Necklace — From Amma",
    assetType: "Gold Chain — Graduation Gift",
    description: "18g gold. Given by a mother on a daughter's graduation evening. Kept waiting for Ananya.",
    essential: [
      { label: "Metal", value: "18K Gold, 18g" },
      { label: "Occasion", value: "Graduation, 2006" },
      { label: "Gifted by", value: "My mother (Amma)" },
    ],
    journey: "We were standing in the corridor outside the auditorium. She had kept it hidden in her handbag the whole ceremony. She put it around my neck and said those words. I have never forgotten them. It has been in my jewellery box since 2006, waiting for the right moment to pass it on.",
    records: "Photo of necklace uploaded. No hallmark certificate — purchased in 2006 from local jeweller in Mangalore. Weight confirmed by jeweller in 2022 when cleaned.",
    wishes: "To be given to Ananya on her graduation day, or on whatever day she achieves something that makes her feel the way I felt that evening. Amma would have wanted it this way.",
    note: "A photo and the story are enough. The memory is the receipt.",
  },
  {
    bg: "https://images.unsplash.com/photo-1603974372037-adc3f72f8f27?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 6.4H21l-5.4 4 2.1 6.4L12 15l-5.7 3.8 2.1-6.4L3 8.4h6.6L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Personal Assets · Gold Ring",
    quote: "My grandfather wore this ring for forty years. \"This is ours, not mine.\" I want Arjun and Ananya to each take 50% for their engagement rings.",
    quoteSource: "Wishes & Nominees, written in the vault",
    assetName: "Ring — Heirlooms",
    assetType: "Gold Ring — Grandfather's Legacy",
    description: "Family history that keeps going. One ring becomes two for the next generation.",
    essential: [
      { label: "Origin", value: "Family heirloom, ~1960s" },
      { label: "Metal", value: "22K Gold, ~12g" },
      { label: "Last worn by", value: "My grandfather" },
    ],
    journey: "He wore it every day for forty years. When he passed it to me he said — this is not mine to keep, it is ours to carry. I have worn it for twenty years now. It is time to think about what comes next and how to honour what he meant.",
    records: "Photo uploaded — ring on its own, and photo of grandfather wearing it (1987, black and white scan). No hallmark certificate. Family record of ownership documented here.",
    wishes: "The gold from this ring should be melted and split equally between Arjun and Ananya to be used for their respective engagement rings. This was the wish I carried from my grandfather. I am passing it forward.",
    note: "Wishes recorded: gold to be split 50/50 between Arjun and Ananya for their engagement rings.",
  },
  {
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    category: "Real Estate · Farm House · Executor Access",
    quote: "After he passed, I opened Soult. Under property — there it was. A farmhouse. He had been saving for it since our second anniversary.",
    quoteSource: "Wife, executor, opening the vault",
    assetName: "The Farmhouse",
    assetType: "Retirement Dream — Sakleshpur",
    description: "A surprise gift revealed through the vault. Every document and sketch in one place.",
    essential: [
      { label: "Location", value: "Sakleshpur, Karnataka" },
      { label: "Area", value: "2.5 acres" },
      { label: "Registered", value: "March 2013" },
    ],
    journey: "I had been thinking about it since our second anniversary when we drove through Sakleshpur. She said — one day, somewhere like this. I never told her I was saving for it. I bought it in 2013. I was going to tell her on our 25th anniversary. This vault is how she will find out.",
    records: "Sale deed uploaded. Sketch and survey map saved. Contact details of local caretaker (Ramu, 9845XXXXXX) noted. Key kept with my brother in Bengaluru.",
    wishes: "This property is entirely for my wife. She should visit it first before deciding anything. It was always meant to be our retirement home. Whatever she chooses, I wanted her to see it with her own eyes first.",
    note: "All documents uploaded. The executor found everything without a single phone call.",
    executorStory: true,
  },
  {
    bg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&fit=crop",
    categoryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: "Stocks & Mutual Funds · Executor Access",
    quote: "Thatha never mentioned shares. In the vault, I found 24 years of SBI and HDFC stock. He had thought of everything.",
    quoteSource: "Grandson, executor, opening the vault",
    assetName: "Thatha's Shares",
    assetType: "Quiet Investing Legacy — 24 Years",
    description: "24 years of compounding. Clear instructions left for the transmission process.",
    essential: [
      { label: "Broker", value: "Zerodha, Chennai" },
      { label: "Holdings", value: "SBI · HDFC Bank · IOC" },
      { label: "Invested since", value: "2001" },
    ],
    journey: "I started buying SBI shares in 2001 after my first salary as an engineer. ₹500 a month into whatever I could afford. I never sold a single share in 24 years. I just kept buying. I never told anyone because I was afraid they would ask me to stop or spend it.",
    records: "Zerodha account statement downloaded (2024). Demat account details noted with DP ID. Nomination registered in Zerodha — grandson named. Physical share certificates (pre-demat era, 2001–2005) kept in bank locker.",
    wishes: "The entire portfolio is to be transmitted to my grandson. He should not sell in a panic. He should hold the way I held. The companies are good companies. Time is the only strategy that worked for me.",
    note: "Transmission instructions written clearly in the vault. The grandson knew exactly what to do.",
    executorStory: true,
  },
];

export default function StoriesCarousel() {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("Essential Details");
  const story = STORIES[index];

  function handleStoryChange(i: number) {
    setIndex(i);
    setActiveTab("Essential Details");
  }

  return (
    <>
      <style>{`
        .sc-wrap { background: #FDFAF6; padding: 88px 64px; }
        .sc-inner { max-width: 1100px; margin: 0 auto; }
        .sc-label { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #C89B3C; margin-bottom: 12px; }
        .sc-heading { font-size: clamp(26px, 3vw, 38px); font-weight: 900; color: #2B1D16; letter-spacing: -0.02em; margin: 0 0 40px; }

        /* Card shell */
        .sc-card {
          display: grid; grid-template-columns: 42% 58%;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(48,28,26,0.10), 0 24px 64px rgba(48,28,26,0.07);
          min-height: 520px;
        }

        /* LEFT — photo panel */
        .sc-left {
          position: relative; padding: 36px 32px;
          display: flex; flex-direction: column; justify-content: flex-end;
          background-size: cover; background-position: center; background-repeat: no-repeat;
        }
        /* Strong gradient so text is always readable, image visible at top */
        .sc-left::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.92) 0%,
            rgba(0,0,0,0.68) 40%,
            rgba(0,0,0,0.22) 75%,
            rgba(0,0,0,0.05) 100%
          );
        }
        .sc-left-content { position: relative; z-index: 1; }

        .sc-cat-chip {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.20);
          backdrop-filter: blur(6px);
          border-radius: 100px; padding: 7px 14px;
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.88);
          letter-spacing: 0.04em; margin-bottom: 20px;
        }
        .sc-executor-chip {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(200,155,60,0.22); border: 1px solid rgba(200,155,60,0.45);
          border-radius: 6px; padding: 5px 10px;
          font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
          color: #F0D080; margin-bottom: 12px;
        }
        .sc-quote-mark { font-size: 52px; line-height: 1; color: rgba(200,155,60,0.55); font-family: Georgia, serif; }
        .sc-quote-text {
          font-size: 16px; font-style: italic; font-weight: 400;
          color: rgba(255,255,255,0.92); line-height: 1.7;
          margin: 8px 0 16px; letter-spacing: -0.01em;
        }
        .sc-quote-source { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.38); letter-spacing: 0.08em; text-transform: uppercase; }

        /* RIGHT — content panel */
        .sc-right { background: #fff; display: flex; flex-direction: column; }

        .sc-right-header { padding: 28px 28px 20px; border-bottom: 1px solid rgba(43,29,22,0.07); }
        .sc-right-cat {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.18);
          border-radius: 100px; padding: 6px 14px;
          font-size: 11px; font-weight: 700; color: #C89B3C;
          letter-spacing: 0.04em; margin-bottom: 14px;
        }
        .sc-asset-name { font-size: 20px; font-weight: 900; color: #2B1D16; margin-bottom: 3px; letter-spacing: -0.02em; }
        .sc-asset-type { font-size: 13px; color: rgba(43,29,22,0.4); margin-bottom: 10px; }
        .sc-asset-desc { font-size: 14px; color: rgba(43,29,22,0.58); line-height: 1.6; }

        /* Tabs */
        .sc-tabs { display: flex; border-bottom: 1px solid rgba(43,29,22,0.07); overflow-x: auto; flex-shrink: 0; }
        .sc-tab {
          font-size: 11px; font-weight: 700; letter-spacing: 0.05em;
          padding: 12px 16px; white-space: nowrap;
          color: rgba(43,29,22,0.32); border-bottom: 2px solid transparent;
          cursor: pointer; flex-shrink: 0;
          transition: color 0.2s;
        }
        .sc-tab:hover { color: rgba(43,29,22,0.6); }
        .sc-tab.active { color: #C89B3C; border-bottom-color: #C89B3C; }

        /* Tab content area */
        .sc-tab-body { flex: 1; overflow: auto; }

        /* Essential Details */
        .sc-fields { padding: 20px 28px; display: flex; flex-direction: column; gap: 10px; }
        .sc-field { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-bottom: 10px; border-bottom: 1px solid rgba(43,29,22,0.05); }
        .sc-field:last-child { border-bottom: none; }
        .sc-field-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: rgba(43,29,22,0.35); text-transform: uppercase; flex-shrink: 0; }
        .sc-field-val { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #2B1D16; text-align: right; }
        .sc-field-warn { color: #B8770A; }
        .sc-field-icon { color: rgba(43,29,22,0.28); display: flex; }
        .sc-field-icon.gold { color: rgba(200,155,60,0.65); }

        /* Journey / Records / Wishes — prose tabs */
        .sc-prose { padding: 24px 28px; font-size: 15px; color: rgba(43,29,22,0.68); line-height: 1.8; font-style: italic; }
        .sc-prose-plain { font-style: normal; color: rgba(43,29,22,0.62); }

        /* Note */
        .sc-note { background: #FDFAF6; border-top: 1px solid rgba(43,29,22,0.07); padding: 14px 28px; font-size: 12px; color: rgba(43,29,22,0.48); line-height: 1.65; flex-shrink: 0; }

        /* Navigation */
        .sc-nav { display: flex; align-items: center; justify-content: space-between; margin-top: 28px; }
        .sc-dots { display: flex; gap: 7px; align-items: center; }
        .sc-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(43,29,22,0.15); transition: all 0.25s; cursor: pointer; }
        .sc-dot.active { background: #C89B3C; width: 22px; border-radius: 3px; }
        .sc-arrows { display: flex; gap: 10px; }
        .sc-arrow {
          width: 44px; height: 44px; border-radius: 50%;
          border: 1.5px solid rgba(43,29,22,0.15); background: #fff;
          display: flex; align-items: center; justify-content: center;
          color: #2B1D16; cursor: pointer;
          transition: all 0.2s; box-shadow: 0 2px 8px rgba(43,29,22,0.06);
        }
        .sc-arrow:hover:not(:disabled) { background: #2B1D16; color: #EDE6D8; border-color: #2B1D16; }
        .sc-arrow:disabled { opacity: 0.3; cursor: default; }
        .sc-counter { font-size: 12px; color: rgba(43,29,22,0.35); font-weight: 600; }

        @media (max-width: 900px) {
          .sc-wrap { padding: 60px 24px; }
          .sc-card { grid-template-columns: 1fr; }
          .sc-left { min-height: 280px; }
        }
      `}</style>

      <div className="sc-wrap">
        <div className="sc-inner">
          <div className="sc-label">Real Vaults · Real Stories</div>
          <h2 className="sc-heading">Four sections. Eight real stories.</h2>

          <div className="sc-card">
            {/* LEFT — photo + quote */}
            <div className="sc-left" style={{ backgroundImage: `url(${story.bg})` }}>
              <div className="sc-left-content">
                {story.executorStory && (
                  <div className="sc-executor-chip">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Executor Story
                  </div>
                )}
                <div className="sc-cat-chip">{story.categoryIcon}{story.category}</div>
                <div className="sc-quote-mark">&ldquo;</div>
                <p className="sc-quote-text">{story.quote}</p>
                <div className="sc-quote-source">— {story.quoteSource}</div>
              </div>
            </div>

            {/* RIGHT — vault card */}
            <div className="sc-right">
              <div className="sc-right-header">
                <div className="sc-right-cat">{story.categoryIcon}{story.category}</div>
                <div className="sc-asset-name">{story.assetName}</div>
                <div className="sc-asset-type">{story.assetType}</div>
                <div className="sc-asset-desc">{story.description}</div>
              </div>

              <div className="sc-tabs">
                {TABS.map((t) => (
                  <div key={t} className={`sc-tab${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>{t}</div>
                ))}
              </div>

              <div className="sc-tab-body">
                {activeTab === "Essential Details" && (
                  <div className="sc-fields">
                    {story.essential.map((f) => (
                      <div className="sc-field" key={f.label}>
                        <span className="sc-field-label">{f.label}</span>
                        <span className="sc-field-val">
                          {f.value}
                          {f.warn && <span className="sc-field-warn">⚠</span>}
                          {f.locked && (
                            <span className="sc-field-icon gold">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                                <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                          )}
                          {f.copyable && (
                            <span className="sc-field-icon">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "The Journey" && (
                  <p className="sc-prose">{story.journey}</p>
                )}

                {activeTab === "Records & Photos" && (
                  <p className="sc-prose sc-prose-plain">{story.records}</p>
                )}

                {activeTab === "Wishes & Nominees" && (
                  <p className="sc-prose sc-prose-plain">{story.wishes}</p>
                )}
              </div>

              <div className="sc-note">{story.note}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="sc-nav">
            <div className="sc-dots">
              {STORIES.map((_, i) => (
                <div key={i} className={`sc-dot${i === index ? " active" : ""}`} onClick={() => handleStoryChange(i)} />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span className="sc-counter">{index + 1} / {STORIES.length}</span>
              <div className="sc-arrows">
                <button className="sc-arrow" onClick={() => handleStoryChange(Math.max(0, index - 1))} disabled={index === 0} aria-label="Previous">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button className="sc-arrow" onClick={() => handleStoryChange(Math.min(STORIES.length - 1, index + 1))} disabled={index === STORIES.length - 1} aria-label="Next">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
