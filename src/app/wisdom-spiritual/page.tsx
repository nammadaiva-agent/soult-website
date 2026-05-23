import type { Metadata } from "next";
import MemoryCatalog from "@/components/MemoryCatalog";

export const metadata: Metadata = {
  title: "Life Legacy & Journaling Vault — Wisdom & Spiritual | Soult",
  description: "Before this moment fades — write one line. Capture memories, voice notes, and wisdom for the people you love.",
  alternates: { canonical: "https://www.soultdigital.com/wisdom-spiritual" },
  openGraph: {
    title: "Life Legacy & Journaling — Soult Digital",
    description: "Capture memories, personal wisdom, spiritual beliefs, and life lessons for the people you love. A vault that preserves more than assets.",
    url: "https://www.soultdigital.com/wisdom-spiritual",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soultdigital.com/wisdom-spiritual",
      url: "https://www.soultdigital.com/wisdom-spiritual",
      name: "Life Legacy, Journaling & Wisdom Vault — Soult Digital",
      description: "Capture memories, voice notes, personal wisdom, and spiritual beliefs for the people you love — stored privately in your Soult vault.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
          { "@type": "ListItem", position: 2, name: "Wisdom & Legacy", item: "https://www.soultdigital.com/wisdom-spiritual" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kind of memories can I store in Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Soult lets you store written memories, voice notes, life lessons, personal wisdom, spiritual beliefs, family stories, and journals — anything you want to preserve for the people you love." },
        },
        {
          "@type": "Question",
          name: "Can I record voice messages for my family in Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Soult supports voice notes so you can leave personal messages, stories, or guidance in your own voice for your loved ones." },
        },
        {
          "@type": "Question",
          name: "Who can see my memories and journals in Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Only you can see your memories and journals. They are AES-256 encrypted and only accessible by people you explicitly designate — such as executors — at the appropriate time." },
        },
      ],
    },
  ],
};

const CAPTURE_TYPES = [
  {
    h: "Things I never said",
    p: "Say it here, even if you never send it. Some conversations are meant to stay private. Write what you couldn't say out loud.",
  },
  {
    h: "Thoughts not to lose",
    p: "That thought you just had — don't lose it. The midnight clarity that vanishes by morning if you don't anchor it.",
  },
  {
    h: "Freeze a moment",
    p: "You'll remember this moment differently a year from now. You don't need the full story. Write it the way you would say it.",
  },
  {
    h: "For future you",
    p: "What feels obvious now won't always feel that way. Your future self will thank you for capturing this exact version of you.",
  },
];

const STEPS = [
  {
    n: "01", h: "Choose Memory Type",
    p: "Select from over 50 types — from fleeting thoughts and unsent messages to business secrets and family traditions.",
  },
  {
    n: "02", h: "Add Media & Story",
    p: "Write your thoughts or record a voice note. Your tone and expressions matter as much as the words themselves.",
  },
  {
    n: "03", h: "Assign Nominee",
    p: "Define who sees this memory and when — on a birthday, a graduation, or a time of transition. Your words, on your terms.",
  },
];

const STORIES = [
  {
    tag: "Business Legacy",
    quote: "I recorded every vendor contact and the real reason we made certain deals. My son says it's like having me in the room with him.",
    meta: [{ l: "Format", v: "Audio · 14 mins" }, { l: "Visibility", v: "Nominee Only" }],
  },
  {
    tag: "Final Wish · Love Letter",
    quote: "I record birthday messages for my kids for the next 10 years. Whether I am here or not, they will hear their dad's voice.",
    meta: [{ l: "Recipient", v: "Priya (Daughter)" }, { l: "Type", v: "Video Messages" }],
  },
  {
    tag: "Family Recipe · Roots",
    quote: "I recorded my mother's Onam sadya recipes in her own voice before her memory started going. My children will make that sadya forever.",
    meta: [{ l: "Title", v: "Amma's Sambhar Secret" }, { l: "Format", v: "Voice + PDF" }],
  },
  {
    tag: "Asset Context · Secret",
    quote: "Meera found the farmhouse in the vault. Along with a note explaining that I'd been saving for it since our second anniversary.",
    meta: [{ l: "Asset", v: "Sakleshpur Property" }, { l: "Context", v: "Retirement Surprise" }],
  },
  {
    tag: "Unsent Message · Healing",
    quote: "There were things I was ashamed of. Writing them privately — not to send yet, just to record — was the most honest I'd ever been.",
    meta: [{ l: "Type", v: "Private Confession" }, { l: "Status", v: "Locked · Private" }],
  },
  {
    tag: "Wisdom · Career",
    quote: "I signed a contract without reading it at 32. It cost me 3 years. I want my kids to learn from my mistakes, not repeat them.",
    meta: [{ l: "Lesson", v: "The Mistake at 32" }, { l: "Tag", v: "Parenthood / Career" }],
  },
];

const PRIVACY = [
  {
    h: "Masked by default",
    p: "Journaling and emotional entries are hidden behind a blur until you choose to reveal them. Only you see what's inside.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
  },
  {
    h: "MPIN Decryption",
    p: "Only entering your MPIN triggers the decryption process. Your data remains encrypted at the device level at all times.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="#C89B3C"/>
      </svg>
    ),
  },
  {
    h: "Zero-Knowledge Architecture",
    p: "We use end-to-end AES-256 encryption. We cannot see your stories, and neither can our support staff. Ever.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    h: "No AI Training",
    p: "Your life stories are never used to train AI models. Your thoughts remain your own property, permanently.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
];

export default function WisdomSpiritualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        .ws { font-family: 'Outfit', sans-serif; }

        /* ── SHARED ── */
        .ws-inner    { max-width: 1200px; margin: 0 auto; }
        .ws-inner-md { max-width: 1100px; margin: 0 auto; }

        .ws-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .ws-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 1.5px; background: #C89B3C;
        }

        /* ══ LIGHT ══ */
        .ws-light  { background: #FDFAF6; padding: 88px 64px; color: #2B1D16; }
        .ws-sand   { background: #F5F0E8; padding: 88px 64px; color: #2B1D16; }
        .ws-h-lgt  { font-size: clamp(28px, 3.5vw, 48px); font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 52px; }
        .ws-body-l { font-size: 17px; color: rgba(43,29,22,0.60); line-height: 1.78; }

        /* ══ DARK ══ */
        .ws-dark   { background: #1E1208; padding: 88px 64px; color: #EDE6D8; }
        .ws-brown  { background: #2B1D16; padding: 88px 64px; color: #EDE6D8; }
        .ws-h-drk  { font-size: clamp(28px, 3.5vw, 48px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 52px; }
        .ws-body-d { font-size: 17px; color: #B8A898; line-height: 1.78; }

        /* ── BUTTONS ── */
        .ws-btn-gold {
          display: inline-block; background: #C89B3C; color: #2B1D16;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          padding: 16px 36px; border-radius: 100px; text-decoration: none;
          transition: background 0.2s;
        }
        .ws-btn-gold:hover { background: #D8AA48; }
        .ws-btn-dark {
          display: inline-block; background: #2B1D16; color: #EDE6D8;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          padding: 16px 36px; border-radius: 100px; text-decoration: none;
          transition: background 0.2s;
        }
        .ws-btn-dark:hover { background: #3D2A20; }
        .ws-btn-ol-lgt {
          display: inline-block; border: 1.5px solid rgba(237,230,216,0.22);
          color: #EDE6D8; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ws-btn-ol-lgt:hover { border-color: rgba(200,155,60,0.55); color: #E8C060; }
        .ws-btn-ol-drk {
          display: inline-block; border: 1.5px solid rgba(43,29,22,0.20);
          color: #2B1D16; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ws-btn-ol-drk:hover { border-color: #C89B3C; color: #8B6914; }

        /* ══ 1. HERO ══ */
        .ws-hero {
          background: #FDFAF6; padding: 96px 64px 80px;
          position: relative; overflow: hidden;
        }
        .ws-hero::before {
          content: ''; position: absolute;
          top: -200px; right: -180px; width: 680px; height: 680px;
          background: radial-gradient(circle, rgba(200,155,60,0.07) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .ws-hero-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 380px; gap: 72px; align-items: center;
          position: relative;
        }
        .ws-hero-kicker {
          font-size: 14px; font-weight: 700; color: rgba(43,29,22,0.35);
          letter-spacing: 0.04em; margin-bottom: 10px;
        }
        .ws-hero-h {
          font-size: clamp(36px, 4.5vw, 62px); font-weight: 900; color: #2B1D16;
          letter-spacing: -0.035em; line-height: 1.05; margin: 0 0 8px;
        }
        .ws-hero-tagline {
          font-size: clamp(22px, 2.5vw, 34px); font-weight: 900;
          color: #C89B3C; letter-spacing: -0.03em; margin: 0 0 24px;
        }
        .ws-hero-sub {
          font-size: 18px; font-weight: 400; color: rgba(43,29,22,0.58);
          line-height: 1.72; margin: 0 0 38px; max-width: 480px;
        }
        .ws-hero-btns { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .ws-hero-trust {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .ws-hero-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; color: rgba(43,29,22,0.40); font-weight: 500;
        }
        .ws-hero-trust-item svg { width: 13px; height: 13px; stroke: rgba(43,29,22,0.30); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

        /* Entry preview card */
        .ws-entry-card {
          background: #fff; border-radius: 24px;
          border: 1px solid rgba(43,29,22,0.08);
          box-shadow: 0 6px 40px rgba(43,29,22,0.08);
          overflow: hidden;
        }
        .ws-entry-header {
          background: #2B1D16; padding: 14px 22px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ws-entry-header-left { display: flex; align-items: center; gap: 8px; }
        .ws-entry-dot { width: 8px; height: 8px; border-radius: 50%; background: #C89B3C; }
        .ws-entry-header-title { font-size: 12px; font-weight: 700; color: rgba(237,230,216,0.6); letter-spacing: 0.12em; text-transform: uppercase; }
        .ws-entry-lock svg { stroke: rgba(237,230,216,0.35); fill: none; width: 14px; height: 14px; }
        .ws-entry-body { padding: 22px; }
        .ws-entry-time { font-size: 11px; font-weight: 700; color: rgba(43,29,22,0.28); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
        .ws-entry-time svg { width: 12px; height: 12px; stroke: rgba(43,29,22,0.28); fill: none; stroke-width: 2; stroke-linecap: round; }
        .ws-entry-empty { font-size: 14px; color: rgba(43,29,22,0.25); margin-bottom: 6px; }
        .ws-entry-prompt { font-size: 13px; color: rgba(43,29,22,0.35); font-style: italic; margin-bottom: 20px; line-height: 1.5; }
        .ws-entry-input {
          background: #FDFAF6; border: 1.5px solid rgba(200,155,60,0.2);
          border-radius: 12px; padding: 14px 16px;
          font-size: 14px; color: rgba(43,29,22,0.35); font-family: 'Outfit', sans-serif;
          font-style: italic; margin-bottom: 16px;
        }
        .ws-entry-types { display: flex; flex-wrap: wrap; gap: 7px; }
        .ws-entry-type-tag {
          font-size: 12px; font-weight: 600; border-radius: 100px;
          padding: 5px 13px; background: rgba(200,155,60,0.07);
          border: 1px solid rgba(200,155,60,0.18); color: rgba(43,29,22,0.55);
        }

        /* ══ 2. FEATURES (DARK 3-col) ══ */
        .ws-feat-intro {
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
          align-items: end; margin-bottom: 52px;
        }
        .ws-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .ws-feat-col {
          padding: 44px 36px;
          border-right: 1px solid rgba(237,230,216,0.07);
        }
        .ws-feat-col:last-child { border-right: none; }
        .ws-feat-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(200,155,60,0.10); border: 1px solid rgba(200,155,60,0.22);
          display: flex; align-items: center; justify-content: center; margin-bottom: 22px;
        }
        .ws-feat-h { font-size: 21px; font-weight: 800; color: #EDE6D8; letter-spacing: -0.02em; margin-bottom: 12px; }
        .ws-feat-p { font-size: 16px; color: #B8A898; line-height: 1.72; margin: 0; }

        /* ══ 3. BEYOND LEGACY (SAND 4-col) ══ */
        .ws-beyond-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ws-beyond-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 36px 30px;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .ws-beyond-card:hover {
          box-shadow: 0 8px 36px rgba(200,155,60,0.10);
          transform: translateY(-2px);
        }
        .ws-beyond-card-num { font-size: 12px; font-weight: 800; letter-spacing: 0.16em; color: rgba(43,29,22,0.22); margin-bottom: 14px; }
        .ws-beyond-card-h { font-size: 21px; font-weight: 800; color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 12px; }
        .ws-beyond-card-p { font-size: 16px; color: rgba(43,29,22,0.56); line-height: 1.72; margin: 0; }

        /* ══ 4. HOW IT WORKS (BROWN 3 steps) ══ */
        .ws-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ws-step-card {
          background: rgba(237,230,216,0.04); border-radius: 22px;
          border: 1px solid rgba(237,230,216,0.08); padding: 36px 30px;
          position: relative; overflow: hidden;
          transition: border-color 0.25s, background 0.25s;
        }
        .ws-step-card:hover {
          border-color: rgba(200,155,60,0.28);
          background: rgba(200,155,60,0.04);
        }
        .ws-step-ghost {
          position: absolute; top: -12px; right: 12px;
          font-size: 110px; font-weight: 900;
          color: rgba(200,155,60,0.06); letter-spacing: -0.04em;
          line-height: 1; pointer-events: none; user-select: none;
        }
        .ws-step-dot {
          width: 13px; height: 13px; border-radius: 50%;
          border: 2px solid #C89B3C; background: #2B1D16;
          box-shadow: 0 0 0 4px rgba(200,155,60,0.12); margin-bottom: 22px;
        }
        .ws-step-num { font-size: 12px; font-weight: 800; letter-spacing: 0.2em; color: #C89B3C; margin-bottom: 12px; }
        .ws-step-h { font-size: 21px; font-weight: 800; color: #EDE6D8; letter-spacing: -0.02em; margin-bottom: 12px; }
        .ws-step-p { font-size: 16px; color: #B8A898; line-height: 1.75; margin: 0; }

        /* ══ 6. STORIES (SAND) ══ */
        .ws-stories-note { font-size: 13px; color: rgba(43,29,22,0.38); margin-bottom: 44px; line-height: 1.6; padding: 16px 20px; background: #fff; border-radius: 12px; border: 1px solid rgba(43,29,22,0.07); display: flex; align-items: flex-start; gap: 10px; }
        .ws-stories-note svg { width: 16px; height: 16px; stroke: rgba(43,29,22,0.30); fill: none; stroke-width: 1.7; stroke-linecap: round; flex-shrink: 0; margin-top: 1px; }
        .ws-stories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ws-story-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 30px 26px;
          box-shadow: 0 2px 10px rgba(43,29,22,0.04);
          display: flex; flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .ws-story-card:hover {
          box-shadow: 0 8px 36px rgba(200,155,60,0.10);
          transform: translateY(-2px);
        }
        .ws-story-tag { font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C89B3C; margin-bottom: 16px; }
        .ws-story-quote { font-size: 16px; color: #2B1D16; line-height: 1.68; font-style: italic; margin-bottom: 22px; flex: 1; }
        .ws-story-meta { border-top: 1px solid rgba(43,29,22,0.07); padding-top: 16px; display: flex; flex-direction: column; gap: 7px; }
        .ws-story-meta-row { display: flex; justify-content: space-between; }
        .ws-story-meta-l { font-size: 11px; font-weight: 700; color: rgba(43,29,22,0.30); letter-spacing: 0.1em; text-transform: uppercase; }
        .ws-story-meta-v { font-size: 12px; font-weight: 600; color: rgba(43,29,22,0.55); }

        /* ══ 7. LOW EFFORT ENTRY (LIGHT) ══ */
        .ws-effort-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .ws-checklist { list-style: none; padding: 0; margin: 0 0 36px; display: flex; flex-direction: column; gap: 14px; }
        .ws-checklist li {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 17px; color: #2B1D16; line-height: 1.5; font-weight: 500;
        }
        .ws-check-icon {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(200,155,60,0.12); border: 1.5px solid rgba(200,155,60,0.3);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }
        .ws-check-icon svg { width: 11px; height: 11px; stroke: #C89B3C; fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }

        /* Filled entry preview — shows a real completed memory */
        .ws-filled-card {
          background: #fff; border-radius: 24px;
          border: 1px solid rgba(43,29,22,0.08);
          box-shadow: 0 6px 40px rgba(43,29,22,0.07); overflow: hidden;
        }
        .ws-filled-header {
          background: #2B1D16; padding: 14px 22px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .ws-filled-type { font-size: 12px; font-weight: 700; color: #C89B3C; letter-spacing: 0.12em; text-transform: uppercase; }
        .ws-filled-status {
          font-size: 11px; font-weight: 600; color: rgba(237,230,216,0.35);
          display: flex; align-items: center; gap: 5px;
        }
        .ws-filled-status-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(200,155,60,0.5); }
        .ws-filled-body { padding: 24px; }
        .ws-filled-meta { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .ws-filled-date { font-size: 11px; font-weight: 700; color: rgba(43,29,22,0.28); letter-spacing: 0.16em; text-transform: uppercase; }
        .ws-filled-nominee {
          font-size: 11px; font-weight: 700; color: #C89B3C;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.2);
          padding: 3px 10px; border-radius: 100px;
        }
        .ws-filled-text {
          font-size: 15px; color: #2B1D16; line-height: 1.72;
          font-style: italic; margin-bottom: 20px;
          padding: 18px; background: #FDFAF6;
          border-radius: 12px; border-left: 3px solid rgba(200,155,60,0.35);
        }
        .ws-filled-footer { display: flex; align-items: center; justify-content: space-between; }
        .ws-filled-locked {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: rgba(43,29,22,0.35); font-weight: 600;
        }
        .ws-filled-locked svg { width: 13px; height: 13px; stroke: rgba(43,29,22,0.3); fill: none; stroke-width: 1.8; stroke-linecap: round; }
        .ws-filled-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(43,29,22,0.30);
        }

        /* ══ 8. DYNASTY (DARK) ══ */
        .ws-dynasty-badge {
          display: inline-block; background: rgba(200,155,60,0.12);
          border: 1px solid rgba(200,155,60,0.32); border-radius: 100px;
          padding: 5px 16px; font-size: 11px; font-weight: 800;
          letter-spacing: 0.2em; text-transform: uppercase; color: #E8C060;
          margin-bottom: 24px;
        }
        .ws-dynasty-top {
          display: grid; grid-template-columns: 1fr auto; gap: 48px;
          align-items: end; margin-bottom: 20px;
        }
        .ws-dynasty-h { font-size: clamp(28px, 3.5vw, 46px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; margin: 0; line-height: 1.08; }
        .ws-dynasty-stats-pair { display: flex; gap: 0; flex-shrink: 0; }
        .ws-dynasty-stat-inline {
          padding: 0 36px; text-align: center;
          border-left: 1px solid rgba(237,230,216,0.10);
        }
        .ws-dynasty-stat-inline:first-child { border-left: none; padding-left: 0; }
        .ws-dynasty-stat-num { font-size: 52px; font-weight: 900; color: #EDE6D8; letter-spacing: -0.05em; line-height: 1; }
        .ws-dynasty-stat-num span { color: #C89B3C; }
        .ws-dynasty-stat-label { font-size: 13px; color: #7A6A58; font-weight: 500; margin-top: 6px; letter-spacing: 0.02em; }
        .ws-dynasty-sub { font-size: 17px; color: #B8A898; line-height: 1.72; max-width: 640px; margin-bottom: 44px; }
        .ws-dynasty-sep {
          width: 100%; height: 1px;
          background: linear-gradient(to right, rgba(200,155,60,0.3), rgba(200,155,60,0.08), transparent);
          margin-bottom: 44px;
        }
        .ws-dynasty-card {
          position: relative; overflow: hidden;
          background: rgba(237,230,216,0.03);
          border: 1px solid rgba(200,155,60,0.22);
          border-radius: 28px; padding: 52px 56px;
        }
        .ws-dynasty-card::before {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, #C89B3C, #E8C060, rgba(200,155,60,0.1));
        }
        .ws-dynasty-card-ghost {
          position: absolute; right: 48px; top: 32px;
          font-size: 140px; font-weight: 900; line-height: 1;
          color: rgba(200,155,60,0.055); letter-spacing: -0.06em;
          pointer-events: none; user-select: none;
        }
        .ws-dynasty-card-inner {
          display: grid; grid-template-columns: 1fr 320px; gap: 56px;
          align-items: center; position: relative;
        }
        .ws-dynasty-card-tag {
          font-size: 12px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 18px;
          display: flex; align-items: center; gap: 10px;
        }
        .ws-dynasty-card-tag::before {
          content: ''; display: inline-block;
          width: 20px; height: 1.5px; background: #C89B3C;
        }
        .ws-dynasty-card-h {
          font-size: clamp(26px, 3vw, 38px); font-weight: 900; color: #EDE6D8;
          letter-spacing: -0.03em; margin-bottom: 28px; line-height: 1.1;
        }
        .ws-dynasty-card-divider {
          width: 100%; height: 1px;
          background: rgba(237,230,216,0.08); margin-bottom: 24px;
        }
        .ws-dynasty-card-quote {
          font-size: 19px; color: #C8B898; line-height: 1.68;
          font-style: italic; margin-bottom: 8px;
        }
        .ws-dynasty-card-question {
          font-size: 17px; color: #8A7A68; line-height: 1.65;
          font-style: italic; margin-bottom: 0;
        }
        .ws-dynasty-card-right {
          display: flex; flex-direction: column; gap: 28px;
          border-left: 1px solid rgba(237,230,216,0.08);
          padding-left: 48px;
        }
        .ws-dynasty-card-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .ws-dynasty-card-chip {
          font-size: 12px; font-weight: 600; color: rgba(237,230,216,0.45);
          border: 1px solid rgba(237,230,216,0.10); border-radius: 100px;
          padding: 5px 14px;
        }
        .ws-dynasty-card-actions { display: flex; flex-direction: column; gap: 12px; }
        .ws-dynasty-reflect {
          display: block; text-align: center;
          background: #C89B3C; color: #2B1D16; font-size: 15px; font-weight: 700;
          border-radius: 100px; padding: 14px 28px; text-decoration: none;
          letter-spacing: 0.02em; transition: background 0.2s;
        }
        .ws-dynasty-reflect:hover { background: #D8AA48; }
        .ws-dynasty-explore {
          display: block; text-align: center;
          font-size: 13px; color: rgba(200,155,60,0.55); font-weight: 700;
          letter-spacing: 0.08em; text-decoration: none; text-transform: uppercase;
          transition: color 0.2s;
        }
        .ws-dynasty-explore:hover { color: #C89B3C; }
        .ws-dynasty-card-note {
          font-size: 13px; color: #5A4E42; line-height: 1.55;
          border-top: 1px solid rgba(237,230,216,0.06); padding-top: 16px;
        }

        /* ══ 9. PRIVACY PROTOCOL (LIGHT) ══ */
        .ws-privacy-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ws-privacy-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 34px 30px;
          display: flex; gap: 22px; align-items: flex-start;
          box-shadow: 0 2px 10px rgba(43,29,22,0.04);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ws-privacy-card:hover {
          border-color: rgba(200,155,60,0.28);
          box-shadow: 0 6px 30px rgba(200,155,60,0.08);
        }
        .ws-privacy-icon {
          width: 46px; height: 46px; border-radius: 12px; flex-shrink: 0;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.18);
          display: flex; align-items: center; justify-content: center;
        }
        .ws-privacy-h { font-size: 19px; font-weight: 800; color: #2B1D16; margin-bottom: 10px; letter-spacing: -0.01em; }
        .ws-privacy-p { font-size: 16px; color: rgba(43,29,22,0.56); line-height: 1.72; margin: 0; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .ws-hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .ws-feat-intro { grid-template-columns: 1fr; gap: 24px; }
          .ws-dynasty-top { grid-template-columns: 1fr; gap: 28px; }
          .ws-dynasty-stats-pair { justify-content: flex-start; }
          .ws-dynasty-card-inner { grid-template-columns: 1fr; }
          .ws-dynasty-card-right { border-left: none; padding-left: 0; border-top: 1px solid rgba(237,230,216,0.08); padding-top: 32px; }
          .ws-stories-grid { grid-template-columns: repeat(2, 1fr); }
          .ws-effort-grid { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 900px) {
          .ws-light, .ws-sand, .ws-dark, .ws-brown, .ws-hero { padding: 64px 24px; }
          .ws-feat-grid { grid-template-columns: 1fr; }
          .ws-feat-col { border-right: none; border-bottom: 1px solid rgba(237,230,216,0.07); padding: 36px 0; }
          .ws-feat-col:last-child { border-bottom: none; }
          .ws-beyond-grid { grid-template-columns: 1fr; }
          .ws-steps-grid { grid-template-columns: 1fr; }
          .ws-stories-grid { grid-template-columns: 1fr; }
          .ws-privacy-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="ws">

        {/* ══ 1. HERO — LIGHT ══ */}
        <section className="ws-hero">
          <div className="ws-hero-grid">
            <div>
              <div className="ws-eyebrow">Wisdom &amp; Spiritual · Legacy Vault</div>
              <div className="ws-hero-kicker">Life Legacy &amp; Journaling Vault</div>
              <h1 className="ws-hero-h">Before this moment fades —</h1>
              <div className="ws-hero-tagline">write one line.</div>
              <p className="ws-hero-sub">The thought you just had. The thing you almost said today. The exact way this evening feels. Clarity fades faster than we expect. Capture it before life moves on.</p>
              <div className="ws-hero-btns">
                <a href="/login" className="ws-btn-gold">Create Your Vault Free</a>
                <a href="#memory-catalog" className="ws-btn-ol-drk">See what you can capture</a>
              </div>
              <div className="ws-hero-trust">
                <div className="ws-hero-trust-item">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                  Free to start
                </div>
                <div className="ws-hero-trust-item">
                  <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Private by default
                </div>
                <div className="ws-hero-trust-item">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Takes 30 seconds
                </div>
              </div>
            </div>
            <div className="ws-entry-card">
              <div className="ws-entry-header">
                <div className="ws-entry-header-left">
                  <div className="ws-entry-dot" />
                  <div className="ws-entry-header-title">New Memory</div>
                </div>
                <div className="ws-entry-lock">
                  <svg viewBox="0 0 24 24" strokeWidth="1.7" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
              </div>
              <div className="ws-entry-body">
                <div className="ws-entry-time">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  Tonight · Private
                </div>
                <div className="ws-entry-empty">Nothing here yet...</div>
                <div className="ws-entry-prompt">Before life moves on — save this.</div>
                <div className="ws-entry-input">Start typing...</div>
                <div className="ws-entry-types">
                  {["Things I never said", "Thoughts not to lose", "Freeze a moment", "For future you"].map((t) => (
                    <span className="ws-entry-type-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. WHAT MAKES SOULT DIFFERENT — DARK ══ */}
        <section className="ws-dark">
          <div className="ws-inner">
            <div className="ws-feat-intro">
              <div>
                <div className="ws-eyebrow">Why Soult</div>
                <h2 className="ws-h-drk" style={{margin:0}}>A vault built for<br />the full human life.</h2>
              </div>
              <p className="ws-body-d" style={{marginBottom:0}}>
                Not just photos and documents. Soult holds what actually matters — the emotions, the lessons, the last words. Private by design. Permanent by intent.
              </p>
            </div>
            <div className="ws-feat-grid">
              <div className="ws-feat-col">
                <div className="ws-feat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    <circle cx="12" cy="16" r="1" fill="#C89B3C"/>
                  </svg>
                </div>
                <div className="ws-feat-h">Private by default</div>
                <p className="ws-feat-p">Nothing is shared unless you set a nominee. No Soult staff or AI can read your reflections. Ever.</p>
              </div>
              <div className="ws-feat-col">
                <div className="ws-feat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </div>
                <div className="ws-feat-h">Voice, video &amp; text</div>
                <p className="ws-feat-p">Record your voice, upload a video, or type a letter. A memory is more than just text — capture it in any form.</p>
              </div>
              <div className="ws-feat-col">
                <div className="ws-feat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="ws-feat-h">Handover on your terms</div>
                <p className="ws-feat-p">Set who receives the memory and when. On a birthday, a graduation, or a time of transition. Your words, your timing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. YOU RECOGNIZE YOURSELF HERE — SAND ══ */}
        <section className="ws-sand">
          <div className="ws-inner">
            <div className="ws-eyebrow">Why people start</div>
            <h2 className="ws-h-lgt">You won&apos;t remember this<br />exactly later. Capture it now.</h2>
            <p className="ws-body-l" style={{marginBottom:'48px',maxWidth:'560px'}}>Some thoughts don&apos;t come back the same way twice. While it&apos;s still fresh in your mind — save it.</p>
            <div className="ws-beyond-grid">
              {CAPTURE_TYPES.map((c, i) => (
                <div className="ws-beyond-card" key={c.h}>
                  <div className="ws-beyond-card-num">0{i+1}</div>
                  <div className="ws-beyond-card-h">{c.h}</div>
                  <p className="ws-beyond-card-p">{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. HOW TO CAPTURE — BROWN ══ */}
        <section className="ws-brown">
          <div className="ws-inner">
            <div className="ws-eyebrow">How to capture a moment</div>
            <h2 className="ws-h-drk">Three steps.<br />A memory secured.</h2>
            <div className="ws-steps-grid">
              {STEPS.map((s) => (
                <div className="ws-step-card" key={s.n}>
                  <div className="ws-step-ghost">{s.n}</div>
                  <div className="ws-step-dot" />
                  <div className="ws-step-num">{s.n}</div>
                  <div className="ws-step-h">{s.h}</div>
                  <p className="ws-step-p">{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. MEMORY CATALOG — interactive component ══ */}
        <div id="memory-catalog">
          <MemoryCatalog />
        </div>

        {/* ══ 6. REAL VOICES — SAND ══ */}
        <section className="ws-sand">
          <div className="ws-inner">
            <div className="ws-eyebrow">Real voices</div>
            <h2 className="ws-h-lgt">How people are using<br />the Memories vault.</h2>
            <div className="ws-stories-note">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              Privacy note: Soult uses zero-knowledge encryption. We cannot read your vault. These scenarios are reconstructed from testimonials voluntarily shared by our users.
            </div>
            <div className="ws-stories-grid">
              {STORIES.map((s) => (
                <div className="ws-story-card" key={s.tag}>
                  <div className="ws-story-tag">{s.tag}</div>
                  <div className="ws-story-quote">&ldquo;{s.quote}&rdquo;</div>
                  <div className="ws-story-meta">
                    {s.meta.map((m) => (
                      <div className="ws-story-meta-row" key={m.l}>
                        <span className="ws-story-meta-l">{m.l}</span>
                        <span className="ws-story-meta-v">{m.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. LOW EFFORT ENTRY — LIGHT ══ */}
        <section className="ws-light">
          <div className="ws-inner">
            <div className="ws-effort-grid">
              <div>
                <div className="ws-eyebrow">No pressure, no format</div>
                <h2 className="ws-h-lgt" style={{marginBottom:'32px'}}>Some messages aren&apos;t meant to be sent.<br />But they still need to be written.</h2>
                <ul className="ws-checklist">
                  {[
                    "Write one line. That's enough to start.",
                    "Don't organize it. Just capture it. Come back later.",
                    "This is your space. No judgment. Locked securely.",
                    "A voice note works just as well as a paragraph.",
                  ].map((item) => (
                    <li key={item}>
                      <div className="ws-check-icon">
                        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="ws-btn-dark">Write one thought now</a>
              </div>

              {/* Filled entry preview — shows a real completed memory */}
              <div className="ws-filled-card">
                <div className="ws-filled-header">
                  <div className="ws-filled-type">Life Lesson</div>
                  <div className="ws-filled-status">
                    <div className="ws-filled-status-dot" />
                    Saved · Private
                  </div>
                </div>
                <div className="ws-filled-body">
                  <div className="ws-filled-meta">
                    <div className="ws-filled-date">March 14, 2024 · 11:42 pm</div>
                    <div className="ws-filled-nominee">For: Arjun (Son)</div>
                  </div>
                  <div className="ws-filled-text">
                    &ldquo;I signed a contract without reading it at 32. It cost me three years and more than I want to admit. Don&apos;t let anyone rush you through the fine print. Slow down when it matters most.&rdquo;
                  </div>
                  <div className="ws-filled-footer">
                    <div className="ws-filled-locked">
                      <svg viewBox="0 0 24 24" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      MPIN protected
                    </div>
                    <div className="ws-filled-tag">Wisdom &amp; Value</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. DYNASTY EXCLUSIVE — DARK ══ */}
        <section className="ws-dark">
          <div className="ws-inner">
            <div className="ws-dynasty-badge">Dynasty Exclusive</div>
            <div className="ws-dynasty-top">
              <h2 className="ws-dynasty-h">Soult Notes:<br />Guided Wisdom</h2>
              <div className="ws-dynasty-stats-pair">
                <div className="ws-dynasty-stat-inline">
                  <div className="ws-dynasty-stat-num">300<span>+</span></div>
                  <div className="ws-dynasty-stat-label">Life guides</div>
                </div>
                <div className="ws-dynasty-stat-inline">
                  <div className="ws-dynasty-stat-num">50<span>+</span></div>
                  <div className="ws-dynasty-stat-label">Memory types</div>
                </div>
              </div>
            </div>
            <p className="ws-dynasty-sub">
              Life guides designed to prompt deep reflection. From parenthood and aging to career and faith — these are catalysts for your own legacy. Read a guide, let it land, then reflect privately in your vault.
            </p>
            <div className="ws-dynasty-sep" />
            <div className="ws-dynasty-card">
              <div className="ws-dynasty-card-ghost">07</div>
              <div className="ws-dynasty-card-inner">
                <div>
                  <div className="ws-dynasty-card-tag">Parenthood · Guide 7</div>
                  <div className="ws-dynasty-card-h">The First Child</div>
                  <div className="ws-dynasty-card-divider" />
                  <p className="ws-dynasty-card-quote">&ldquo;Your heart walking outside your body.&rdquo;</p>
                  <p className="ws-dynasty-card-question">
                    How did your world change the day they arrived?<br />
                    What is the one thing you want them to know about that day?
                  </p>
                </div>
                <div className="ws-dynasty-card-right">
                  <div>
                    <div className="ws-dynasty-card-chips">
                      {["Identity Expansion", "Ego Surrender", "Legacy"].map((t) => (
                        <span className="ws-dynasty-card-chip" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ws-dynasty-card-actions">
                    <a href="#" className="ws-dynasty-reflect">Reflect Privately</a>
                    <a href="#" className="ws-dynasty-explore">Explore Dynasty Plan</a>
                  </div>
                  <div className="ws-dynasty-card-note">
                    Your reflection is saved directly to your private vault. Only you can read it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 9. PRIVACY PROTOCOL — LIGHT ══ */}
        <section className="ws-light">
          <div className="ws-inner">
            <div className="ws-eyebrow">Privacy Protocol</div>
            <h2 className="ws-h-lgt">Visible only to you.<br />Secured by your MPIN.</h2>
            <div className="ws-privacy-grid">
              {PRIVACY.map((p) => (
                <div className="ws-privacy-card" key={p.h}>
                  <div className="ws-privacy-icon">{p.icon}</div>
                  <div>
                    <div className="ws-privacy-h">{p.h}</div>
                    <p className="ws-privacy-p">{p.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 10. CTA — DARK ══ */}
        <section className="ws-dark" style={{textAlign:'center'}}>
          <div className="ws-inner" style={{maxWidth:'660px'}}>
            <div className="ws-eyebrow" style={{justifyContent:'center'}}>Start now</div>
            <h2 className="ws-h-drk" style={{marginBottom:'18px'}}>It takes 10 seconds.</h2>
            <p className="ws-body-d" style={{marginBottom:'16px', fontSize:'18px'}}>Even if no one reads this today — it still matters.<br />One day, someone will look for your words.</p>
            <p className="ws-body-d" style={{marginBottom:'44px'}}>Some things feel small now, but won&apos;t be later.</p>
            <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/login" className="ws-btn-gold">Create Your Vault Free</a>
              <a href="/pricing" className="ws-btn-ol-lgt">See pricing</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
