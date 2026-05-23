import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Living Will India, Organ Donation & Medical Directives — Soult",
  description: "Two distinct, profound decisions. Define your end-of-life medical care and register as an organ donor — clarity in the most difficult moments.",
  alternates: { canonical: "https://www.soultdigital.com/physical-health" },
  openGraph: {
    title: "Living Will & Organ Donation — Soult Digital",
    description: "Define your end-of-life medical care and register as an organ donor. Store medical directives securely in your Soult vault.",
    url: "https://www.soultdigital.com/physical-health",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soultdigital.com/physical-health",
      url: "https://www.soultdigital.com/physical-health",
      name: "Living Will, Organ Donation & Medical Directives — Soult Digital",
      description: "Store your living will, organ donation preferences, and medical directives securely in your Soult digital vault.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
          { "@type": "ListItem", position: 2, name: "Medical Wishes", item: "https://www.soultdigital.com/physical-health" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I store a living will in Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Soult allows you to document your end-of-life medical care preferences, including life-sustaining treatment decisions, pain management wishes, and DNR (Do Not Resuscitate) instructions." },
        },
        {
          "@type": "Question",
          name: "How do I register as an organ donor in India using Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Soult lets you record your organ donation intent and preferences so your family and medical team have clear guidance in emergency situations." },
        },
        {
          "@type": "Question",
          name: "Is my medical information private in Soult?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. All medical data is AES-256 encrypted and visible only to you and people you explicitly grant access to, such as executors or emergency contacts." },
        },
      ],
    },
  ],
};

const LIVING_WILL_FEATURES = [
  {
    h: "Life-Sustaining Treatment",
    p: "Your clear stance on CPR, ventilators, and emergency resuscitation. Every intervention — your call.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    h: "Comfort vs. Curative Care",
    p: "Define when you want medical teams to shift from curing to purely comfort and pain relief. Your terms, documented.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    h: "Emergency Decision-Maker",
    p: "Officially designate who speaks for you. Remove all ambiguity — and all guilt — from the hardest moments.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

const ORGAN_FEATURES = [
  {
    h: "Heart",
    sub: "Gives the gift of a new heartbeat",
    p: "One heart can give a second chance to someone with terminal cardiac failure.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    h: "Kidneys",
    sub: "Restores freedom from dialysis",
    p: "Two kidneys, two lives. Kidney disease affects millions of Indians waiting for a transplant.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5.5 5 9c0 5 3.5 8 5 11h4c1.5-3 5-6 5-11 0-3.5-3-7-7-7z"/>
      </svg>
    ),
  },
  {
    h: "Cornea",
    sub: "Restores sight and vision",
    p: "Cornea donation can return vision to someone living in permanent darkness.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    h: "Whole Body",
    sub: "For medical science and education",
    p: "A choice that trains the next generation of healers. Your greatest contribution to medicine.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
];

const STATS = [
  { n: "5L+", label: "Indians waiting for an organ transplant", src: "NOTTO Data" },
  { n: "~80%", label: "Potential donations blocked due to family uncertainty", src: "Transplant Society of India" },
  { n: "8", label: "Lives one organ donor can save", src: "Medical Guidelines" },
  { n: "Zero", label: "Guilt carried by families who know your exact wishes", src: "Family Testimonials" },
];

const STEPS = [
  {
    n: "01", h: "Select Your Module",
    p: "Choose which important document you want to create first — Life Preference (Living Will) or Organ Donation. Both are independent.",
  },
  {
    n: "02", h: "Follow the Guided Flow",
    p: "Answer simple, respectful questions to build your legal directive or donation profile. CPR preferences, ventilator use, organ selection — one step at a time.",
  },
  {
    n: "03", h: "Generate Your QR Code",
    p: "Upon confirmation, a static QR code securely encodes your distinct preferences. No internet connection needed to read the core data.",
  },
  {
    n: "04", h: "Share With Who Matters",
    p: "Share your QR privately via WhatsApp or print it. Your family, doctor, and legal representative can all have a copy.",
  },
  {
    n: "05", h: "Instant Family Access",
    p: "They scan the code. A secure web page opens instantly on any device showing your exact wishes. No app login needed.",
  },
];

const GUIDANCE = [
  {
    h: "For You",
    p: "Explore educational guidance inside the app. Talk to your family. We recommend consulting your primary care doctor if you need help understanding specific medical terminology.",
    note: "Take your time. This is your legacy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    h: "For Families",
    p: "Respect the person's declared wishes. In times of crisis, use the shared Soult QR code to gain clarity and present their legal preferences to hospital staff.",
    note: "Let their voice guide your decisions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    h: "For Doctors",
    p: "Use documented Soult preferences as a formal guide. The QR code provides immediate, legible insight into patient wishes, supporting informed, ethical care alongside family input.",
    note: "Clarity supports better patient care.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

const TESTIMONIALS = [
  {
    type: "Life Preference · Used in ICU",
    typeIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
    short: "My father suffered a massive stroke. The doctors asked if we should put him on a ventilator. We opened his Soult vault.",
    full: "My mother and I were frozen in the ICU when the doctor asked about life support. It felt like an impossible betrayal to make that choice. But we remembered his Soult QR code. He had explicitly chosen comfort care over artificial life support. It was the hardest day of our lives, but we carry zero guilt today. We didn't have to guess; we just honored his exact words. He saved us from a lifetime of 'what ifs'.",
    name: "Anjali M.",
    role: "Architect · New Delhi · 38 yrs",
    initials: "A",
    stars: 5,
  },
  {
    type: "Organ Donation · QR shared with family",
    typeIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    short: "I registered my organ donation wish on a Tuesday evening. My daughter called me. She said she was proud of me.",
    full: "I had thought about this for years but never got around to the paperwork. When I finally recorded it in Soult — five minutes, clear, done — I did not expect to feel this way. I felt lighter. Like I had done something truly meaningful without waiting for a special moment. The QR code went to my family that evening. They finally know exactly what I want.",
    name: "Rajesh P.",
    role: "Retired Teacher · Chennai · 61 yrs",
    initials: "R",
    stars: 5,
  },
  {
    type: "Whole Body Donation · QR printed and shared",
    typeIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    short: "I chose whole body donation because I believe in medical education. My son recorded his own that same evening.",
    full: "I have been a medical educator for 35 years. When I saw the whole body donation option in Soult — with clear guidance on what it means and what it excludes — I registered immediately. I printed the QR code and pinned it next to my ID card. My family knows. My colleagues know. I feel complete.",
    name: "Dr. Meenakshi S.",
    role: "Medical Professor · Pune · 67 yrs",
    initials: "M",
    stars: 5,
  },
  {
    type: "Both modules · Shared with parents",
    typeIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    short: "I am 29. My friends think I am being morbid. The conversation with my parents took two hours — and it was the best one we ever had.",
    full: "My friends thought I was being morbid. I felt like I was stepping up. Recording my Organ Donation preferences and Emergency contacts took 8 minutes. Sharing the QR with my parents took 30 seconds. It brought us closer because it proved I trust them completely with my life.",
    name: "Karthik V.",
    role: "Product Designer · Hyderabad · 29 yrs",
    initials: "K",
    stars: 5,
  },
];

export default function PhysicalHealthPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        .ph { font-family: 'Outfit', sans-serif; }

        /* ── SHARED ── */
        .ph-inner { max-width: 1200px; margin: 0 auto; }

        .ph-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .ph-eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 1.5px; background: #C89B3C;
        }

        /* ══ SECTIONS ══ */
        .ph-light  { background: #FDFAF6; padding: 88px 64px; }
        .ph-sand   { background: #F5F0E8; padding: 88px 64px; }
        .ph-brown  { background: #2B1D16; padding: 88px 64px; }
        .ph-dark   { background: #1E1208; padding: 88px 64px; }

        .ph-h-lgt  { font-size: clamp(28px, 3.5vw, 46px); font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 20px; }
        .ph-h-drk  { font-size: clamp(28px, 3.5vw, 46px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.03em; line-height: 1.08; margin: 0 0 20px; }
        .ph-sub-lgt { font-size: 17px; color: rgba(43,29,22,0.60); line-height: 1.72; margin: 0 0 48px; max-width: 580px; }
        .ph-sub-drk { font-size: 17px; color: #B8A898; line-height: 1.72; margin: 0 0 48px; max-width: 580px; }

        /* ── BUTTONS ── */
        .ph-btn-gold {
          display: inline-block; background: #C89B3C; color: #2B1D16;
          font-size: 15px; font-weight: 700; letter-spacing: 0.02em;
          padding: 16px 36px; border-radius: 100px; text-decoration: none;
          transition: background 0.2s;
        }
        .ph-btn-gold:hover { background: #D8AA48; }
        .ph-btn-dark {
          display: inline-block; background: #2B1D16; color: #EDE6D8;
          font-size: 15px; font-weight: 700; padding: 16px 36px;
          border-radius: 100px; text-decoration: none; transition: background 0.2s;
        }
        .ph-btn-dark:hover { background: #3D2A20; }
        .ph-btn-ol-drk {
          display: inline-block; border: 1.5px solid rgba(43,29,22,0.18);
          color: #2B1D16; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ph-btn-ol-drk:hover { border-color: #C89B3C; color: #8B6914; }
        .ph-btn-ol-lgt {
          display: inline-block; border: 1.5px solid rgba(237,230,216,0.22);
          color: #EDE6D8; font-size: 15px; font-weight: 600;
          padding: 15px 32px; border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .ph-btn-ol-lgt:hover { border-color: rgba(200,155,60,0.55); color: #E8C060; }

        /* ══ 1. HERO ══ */
        .ph-hero {
          background: #FDFAF6; padding: 96px 64px 80px;
          position: relative; overflow: hidden;
        }
        .ph-hero::before {
          content: ''; position: absolute;
          top: -200px; right: -200px; width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(200,155,60,0.07) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .ph-hero-grid {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 420px; gap: 72px; align-items: center;
          position: relative;
        }
        .ph-hero-h {
          font-size: clamp(36px, 4.5vw, 60px); font-weight: 900; color: #2B1D16;
          letter-spacing: -0.035em; line-height: 1.05; margin: 0 0 22px;
        }
        .ph-hero-h em { font-style: normal; color: #C89B3C; }
        .ph-hero-sub {
          font-size: 18px; color: rgba(43,29,22,0.58); line-height: 1.72;
          margin: 0 0 36px; max-width: 480px;
        }
        .ph-hero-btns { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
        .ph-hero-trust { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .ph-hero-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; color: rgba(43,29,22,0.40); font-weight: 500;
        }
        .ph-hero-trust-item svg { width: 13px; height: 13px; stroke: rgba(43,29,22,0.30); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

        /* Hero right — two module cards stacked */
        .ph-hero-modules { display: flex; flex-direction: column; gap: 14px; }
        .ph-module-card {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(43,29,22,0.08);
          box-shadow: 0 4px 24px rgba(43,29,22,0.07);
          padding: 28px 28px 24px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .ph-module-card:hover {
          border-color: rgba(200,155,60,0.32);
          box-shadow: 0 0 24px rgba(200,155,60,0.18), 0 8px 32px rgba(43,29,22,0.08);
          transform: translateY(-2px);
        }
        .ph-module-card-top {
          display: flex; align-items: center; gap: 12px; margin-bottom: 10px;
        }
        .ph-module-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: rgba(200,155,60,0.09); border: 1px solid rgba(200,155,60,0.2);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ph-module-card-tag {
          font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #C89B3C;
        }
        .ph-module-card-h { font-size: 18px; font-weight: 800; color: #2B1D16; letter-spacing: -0.01em; margin-bottom: 6px; }
        .ph-module-card-p { font-size: 15px; color: rgba(43,29,22,0.55); line-height: 1.6; margin: 0; }

        /* ══ 2. WHY / EDITORIAL (BROWN) ══ */
        .ph-editorial-pull {
          font-size: clamp(32px, 4vw, 54px); font-weight: 900; color: #EDE6D8;
          letter-spacing: -0.035em; line-height: 1.08; margin: 0 0 12px;
        }
        .ph-editorial-pull em { font-style: normal; color: #C89B3C; }
        .ph-editorial-tagline {
          font-size: clamp(18px, 2vw, 24px); font-weight: 700; color: #C89B3C;
          letter-spacing: -0.02em; margin: 0 0 52px;
        }
        .ph-editorial-cols {
          display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: start;
        }
        .ph-blockquote {
          border-left: 3px solid #C89B3C; padding-left: 24px;
          font-size: 20px; color: #C8B898; font-style: italic;
          line-height: 1.65; margin: 0 0 28px;
        }

        /* ══ 3. LIFE PREFERENCE (SAND) ══ */
        .ph-lw-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
          margin-bottom: 40px;
        }
        .ph-lw-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 34px 28px;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ph-lw-card:hover {
          border-color: rgba(200,155,60,0.32);
          box-shadow: 0 0 24px rgba(200,155,60,0.18), 0 6px 28px rgba(43,29,22,0.06);
          transform: translateY(-2px);
        }
        .ph-lw-icon {
          width: 46px; height: 46px; border-radius: 12px;
          background: rgba(200,155,60,0.09); border: 1px solid rgba(200,155,60,0.2);
          display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
        }
        .ph-lw-h { font-size: 19px; font-weight: 800; color: #2B1D16; letter-spacing: -0.015em; margin-bottom: 10px; }
        .ph-lw-p { font-size: 16px; color: rgba(43,29,22,0.56); line-height: 1.70; margin: 0; }

        /* ICU quote bar */
        .ph-icu-bar {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.08);
          border-left: 4px solid #C89B3C;
          padding: 32px 36px;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
        }
        .ph-icu-quote { font-size: 18px; color: #2B1D16; font-style: italic; line-height: 1.7; margin: 0 0 16px; }
        .ph-icu-meta { font-size: 13px; font-weight: 700; color: #C89B3C; letter-spacing: 0.04em; }
        .ph-lw-cta-row {
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
          gap: 16px; margin-top: 40px; padding-top: 36px;
          border-top: 1px solid rgba(43,29,22,0.08);
        }
        .ph-lw-cta-text { font-size: 18px; font-weight: 700; color: #2B1D16; letter-spacing: -0.01em; }

        /* ══ 4. ORGAN DONATION (LIGHT) ══ */
        .ph-organ-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
          margin-bottom: 44px;
        }
        .ph-organ-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 32px 24px 28px;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ph-organ-card:hover {
          border-color: rgba(200,155,60,0.32);
          box-shadow: 0 0 24px rgba(200,155,60,0.18), 0 6px 28px rgba(43,29,22,0.06);
          transform: translateY(-2px);
        }
        .ph-organ-icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.18);
          display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
        }
        .ph-organ-name { font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #C89B3C; margin-bottom: 8px; }
        .ph-organ-sub { font-size: 16px; font-weight: 700; color: #2B1D16; letter-spacing: -0.01em; margin-bottom: 10px; line-height: 1.3; }
        .ph-organ-p { font-size: 15px; color: rgba(43,29,22,0.55); line-height: 1.65; margin: 0; }

        /* NOTTO link */
        .ph-notto-bar {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 24px; background: #fff;
          border: 1px solid rgba(43,29,22,0.08); border-radius: 14px;
          margin-bottom: 40px;
          transition: border-color 0.2s;
        }
        .ph-notto-bar:hover { border-color: rgba(200,155,60,0.28); }
        .ph-notto-dot { width: 8px; height: 8px; border-radius: 50%; background: #C89B3C; flex-shrink: 0; }
        .ph-notto-text { font-size: 15px; font-weight: 700; color: #2B1D16; }
        .ph-notto-sub { font-size: 13px; color: rgba(43,29,22,0.45); font-weight: 400; }
        .ph-organ-cta-row {
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap;
          gap: 16px; padding-top: 36px;
          border-top: 1px solid rgba(43,29,22,0.08);
        }
        .ph-organ-cta-text { font-size: 18px; font-weight: 700; color: #2B1D16; letter-spacing: -0.01em; }

        /* ══ 5. STATS (BROWN) ══ */
        .ph-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
        }
        .ph-stat-cell {
          padding: 44px 28px; text-align: center;
          border-right: 1px solid rgba(237,230,216,0.08);
        }
        .ph-stat-cell:last-child { border-right: none; }
        .ph-stat-num {
          font-size: clamp(44px, 5vw, 66px); font-weight: 900; color: #EDE6D8;
          letter-spacing: -0.05em; line-height: 1; margin-bottom: 12px;
        }
        .ph-stat-num span { color: #C89B3C; }
        .ph-stat-label { font-size: 15px; color: #B8A898; line-height: 1.55; margin-bottom: 8px; }
        .ph-stat-src { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #5A4E42; }

        /* ══ 6. HOW IT WORKS (SAND) ══ */
        .ph-steps { display: flex; flex-direction: column; gap: 0; }
        .ph-step-row {
          display: grid; grid-template-columns: 80px 1fr; gap: 32px;
          align-items: start; position: relative;
        }
        /* Connector line between steps */
        .ph-step-row:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 39px; top: 52px; bottom: -32px;
          width: 2px;
          background: linear-gradient(to bottom, rgba(200,155,60,0.3), rgba(200,155,60,0.08));
        }
        .ph-step-num-wrap {
          display: flex; flex-direction: column; align-items: center; padding-top: 4px;
        }
        .ph-step-num-circle {
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(200,155,60,0.1); border: 2px solid rgba(200,155,60,0.35);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; color: #C89B3C; letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .ph-step-content {
          background: #fff; border-radius: 20px;
          border: 1px solid rgba(43,29,22,0.07); padding: 28px 32px;
          box-shadow: 0 2px 10px rgba(43,29,22,0.04);
          margin-bottom: 20px;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .ph-step-content:hover {
          border-color: rgba(200,155,60,0.28);
          box-shadow: 0 0 20px rgba(200,155,60,0.12), 0 4px 20px rgba(43,29,22,0.05);
        }
        .ph-step-h { font-size: 19px; font-weight: 800; color: #2B1D16; letter-spacing: -0.015em; margin-bottom: 8px; }
        .ph-step-p { font-size: 16px; color: rgba(43,29,22,0.56); line-height: 1.70; margin: 0; }

        /* QR note */
        .ph-qr-note {
          background: #fff; border-radius: 16px;
          border: 1px solid rgba(43,29,22,0.07); padding: 22px 28px;
          margin-top: 8px;
          display: flex; align-items: flex-start; gap: 14px;
          box-shadow: 0 2px 8px rgba(43,29,22,0.04);
        }
        .ph-qr-note svg { flex-shrink: 0; margin-top: 2px; }
        .ph-qr-note-text { font-size: 15px; color: rgba(43,29,22,0.50); line-height: 1.6; }
        .ph-qr-note-text strong { color: #2B1D16; font-weight: 700; }

        /* ══ 7. GUIDANCE (LIGHT) ══ */
        .ph-guidance-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ph-guidance-card {
          background: #fff; border-radius: 22px;
          border: 1px solid rgba(43,29,22,0.07); padding: 36px 30px;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ph-guidance-card:hover {
          border-color: rgba(200,155,60,0.28);
          box-shadow: 0 0 24px rgba(200,155,60,0.14), 0 6px 28px rgba(43,29,22,0.06);
          transform: translateY(-2px);
        }
        .ph-guidance-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(200,155,60,0.09); border: 1px solid rgba(200,155,60,0.2);
          display: flex; align-items: center; justify-content: center; margin-bottom: 22px;
        }
        .ph-guidance-h { font-size: 21px; font-weight: 800; color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 12px; }
        .ph-guidance-p { font-size: 16px; color: rgba(43,29,22,0.56); line-height: 1.72; margin: 0 0 18px; }
        .ph-guidance-note {
          font-size: 14px; font-weight: 700; color: #C89B3C; font-style: italic;
          padding-top: 16px; border-top: 1px solid rgba(43,29,22,0.07);
        }

        /* ══ 8. TESTIMONIALS (BROWN) ══ */
        .ph-testi-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ph-testi-card {
          background: rgba(237,230,216,0.04); border-radius: 24px;
          border: 1px solid rgba(237,230,216,0.09); padding: 36px 32px;
          transition: border-color 0.25s, box-shadow 0.25s;
          display: flex; flex-direction: column;
        }
        .ph-testi-card:hover {
          border-color: rgba(200,155,60,0.28);
          box-shadow: 0 0 28px rgba(200,155,60,0.15), 0 6px 24px rgba(0,0,0,0.2);
        }
        .ph-testi-type {
          display: flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .ph-testi-short {
          font-size: 17px; color: #EDE6D8; font-style: italic;
          line-height: 1.65; font-weight: 500; margin-bottom: 16px;
        }
        .ph-testi-full {
          font-size: 15px; color: #B8A898; line-height: 1.72;
          margin-bottom: 28px; flex: 1;
          padding: 20px; background: rgba(237,230,216,0.03);
          border-radius: 12px; border-left: 3px solid rgba(200,155,60,0.25);
        }
        .ph-testi-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 20px; border-top: 1px solid rgba(237,230,216,0.07);
        }
        .ph-testi-author { display: flex; align-items: center; gap: 12px; }
        .ph-testi-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(200,155,60,0.15); border: 1.5px solid rgba(200,155,60,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; font-weight: 800; color: #C89B3C; flex-shrink: 0;
        }
        .ph-testi-name { font-size: 15px; font-weight: 700; color: #EDE6D8; margin-bottom: 2px; }
        .ph-testi-role { font-size: 12px; color: #7A6A58; }
        .ph-testi-stars { display: flex; gap: 3px; }
        .ph-testi-star { color: #C89B3C; font-size: 13px; }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .ph-hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .ph-editorial-cols { grid-template-columns: 1fr; gap: 32px; }
          .ph-organ-grid { grid-template-columns: repeat(2, 1fr); }
          .ph-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .ph-stat-cell:nth-child(2) { border-right: none; }
          .ph-testi-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 900px) {
          .ph-light, .ph-sand, .ph-brown, .ph-dark, .ph-hero { padding: 64px 24px; }
          .ph-lw-grid { grid-template-columns: 1fr; }
          .ph-organ-grid { grid-template-columns: 1fr 1fr; }
          .ph-guidance-grid { grid-template-columns: 1fr; }
          .ph-steps { gap: 0; }
          .ph-step-row { grid-template-columns: 60px 1fr; gap: 16px; }
        }
        @media (max-width: 600px) {
          .ph-organ-grid { grid-template-columns: 1fr; }
          .ph-stats-grid { grid-template-columns: 1fr; }
          .ph-stat-cell { border-right: none; border-bottom: 1px solid rgba(237,230,216,0.08); }
          .ph-stat-cell:last-child { border-bottom: none; }
        }
      `}</style>

      <div className="ph">

        {/* ══ 1. HERO — LIGHT ══ */}
        <section className="ph-hero">
          <div className="ph-hero-grid">
            <div>
              <div className="ph-eyebrow">Physical Health &amp; Legacy</div>
              <h1 className="ph-hero-h">Medical Directives<br />&amp; Organ Donation.<br /><em>Clarity in the most<br />difficult moments.</em></h1>
              <p className="ph-hero-sub">Two distinct, profound decisions. Define your end-of-life medical care to protect your family from guilt, and register as an organ donor to give the gift of life.</p>
              <div className="ph-hero-btns">
                <a href="/login" className="ph-btn-dark">Make Your Wishes Known</a>
                <a href="#how-it-works" className="ph-btn-ol-drk">See how it works</a>
              </div>
              <div className="ph-hero-trust">
                <div className="ph-hero-trust-item">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                  Free to start
                </div>
                <div className="ph-hero-trust-item">
                  <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Encrypted &amp; private
                </div>
                <div className="ph-hero-trust-item">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Takes 5 minutes
                </div>
              </div>
            </div>

            {/* Module preview cards */}
            <div className="ph-hero-modules">
              <div className="ph-module-card">
                <div className="ph-module-card-top">
                  <div className="ph-module-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div className="ph-module-card-tag">Module 01</div>
                </div>
                <div className="ph-module-card-h">Life Preference (Living Will)</div>
                <p className="ph-module-card-p">Protect your family from the guilt of impossible choices.</p>
              </div>
              <div className="ph-module-card">
                <div className="ph-module-card-top">
                  <div className="ph-module-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className="ph-module-card-tag">Module 02</div>
                </div>
                <div className="ph-module-card-h">Organ Donation</div>
                <p className="ph-module-card-p">Leave a legacy of life. Register your wishes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. EDITORIAL WHY — BROWN ══ */}
        <section className="ph-brown">
          <div className="ph-inner">
            <div className="ph-eyebrow">Why this matters</div>
            <div className="ph-editorial-pull">This isn&apos;t about<br />preparing for <em>death.</em></div>
            <div className="ph-editorial-tagline">It&apos;s about love and legacy.</div>
            <div className="ph-editorial-cols">
              <div>
                <blockquote className="ph-blockquote">
                  &ldquo;Some people leave behind wealth. Some leave behind stories. Some leave behind life itself.&rdquo;
                </blockquote>
                <p className="ph-sub-drk">Most people never record their medical wishes or organ donation preferences. Not because they don&apos;t have them — but because nobody made it simple.</p>
              </div>
              <div>
                <p className="ph-sub-drk" style={{marginBottom:'24px'}}>Soult separates these two distinct decisions and makes them completely secure and accessible. It takes five minutes, and the people who have done it tell us they instantly feel lighter.</p>
                <p style={{fontSize:'18px', fontWeight:700, color:'#EDE6D8', lineHeight:1.5, borderTop:'2px solid #C89B3C', paddingTop:'22px', letterSpacing:'-0.015em'}}>
                  Five minutes today.<br />Peace of mind forever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. LIFE PREFERENCE — SAND ══ */}
        <section className="ph-sand">
          <div className="ph-inner">
            <div className="ph-eyebrow">Life Preference · Living Will</div>
            <h2 className="ph-h-lgt">Protect your family from<br />the guilt of impossible choices.</h2>
            <p className="ph-sub-lgt">A Life Preference (or Living Will) is your voice when you cannot speak. Without it, spouses and children are forced to make agonizing decisions in the ICU. When you record your wishes, you remove this devastating burden.</p>

            <div className="ph-lw-grid">
              {LIVING_WILL_FEATURES.map((f) => (
                <div className="ph-lw-card" key={f.h}>
                  <div className="ph-lw-icon">{f.icon}</div>
                  <div className="ph-lw-h">{f.h}</div>
                  <p className="ph-lw-p">{f.p}</p>
                </div>
              ))}
            </div>

            <div className="ph-icu-bar">
              <p className="ph-icu-quote">&ldquo;Clarity is the greatest kindness you can offer your family.&rdquo;</p>
              <div className="ph-icu-meta">The moment you record your wishes, your family is free from the impossible burden of guessing.</div>
            </div>

            <div className="ph-lw-cta-row">
              <div className="ph-lw-cta-text">Ready to record your Living Will?</div>
              <a href="/login" className="ph-btn-dark">Record Your Living Will</a>
            </div>
          </div>
        </section>

        {/* ══ 4. ORGAN DONATION — LIGHT ══ */}
        <section className="ph-light">
          <div className="ph-inner">
            <div className="ph-eyebrow">Organ Donation</div>
            <h2 className="ph-h-lgt">Leave behind life itself.<br />A legacy of giving.</h2>
            <p className="ph-sub-lgt">Organ donation is a separate, profoundly generous act. It is choosing to say: "Even when my journey ends, I can still help others begin again." One organ donor can save up to eight lives. In India, thousands of potential donations never happen simply because families didn&apos;t know their loved one&apos;s wishes.</p>

            <div className="ph-organ-grid">
              {ORGAN_FEATURES.map((f) => (
                <div className="ph-organ-card" key={f.h}>
                  <div className="ph-organ-icon">{f.icon}</div>
                  <div className="ph-organ-name">{f.h}</div>
                  <div className="ph-organ-sub">{f.sub}</div>
                  <p className="ph-organ-p">{f.p}</p>
                </div>
              ))}
            </div>

            <div className="ph-notto-bar">
              <div className="ph-notto-dot" />
              <div>
                <div className="ph-notto-text">NOTTO — National Organ &amp; Tissue Transplant Organisation</div>
                <div className="ph-notto-sub">To learn more about the national registry, visit the government portal at notto.abdm.gov.in</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0, marginLeft:'auto'}}>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>

            <div className="ph-organ-cta-row">
              <div className="ph-organ-cta-text">Register your donation wishes today.</div>
              <a href="/login" className="ph-btn-gold">Register Your Wishes</a>
            </div>
          </div>
        </section>

        {/* ══ 5. STATS — BROWN ══ */}
        <section className="ph-brown" style={{padding:'72px 64px'}}>
          <div className="ph-inner">
            <div className="ph-stats-grid">
              {STATS.map((s) => (
                <div className="ph-stat-cell" key={s.n}>
                  <div className="ph-stat-num">{s.n}</div>
                  <div className="ph-stat-label">{s.label}</div>
                  <div className="ph-stat-src">{s.src}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. HOW IT WORKS — SAND ══ */}
        <section className="ph-sand" id="how-it-works">
          <div className="ph-inner">
            <div className="ph-eyebrow">Two Distinct Workflows</div>
            <h2 className="ph-h-lgt">Five minutes in the app.<br />A decision that lasts forever.</h2>
            <p className="ph-sub-lgt">Whether you are setting up a Life Preference or registering for Organ Donation, Soult handles them as secure, independent modules. You can do one, or both.</p>

            <div className="ph-steps">
              {STEPS.map((s) => (
                <div className="ph-step-row" key={s.n}>
                  <div className="ph-step-num-wrap">
                    <div className="ph-step-num-circle">{s.n}</div>
                  </div>
                  <div>
                    <div className="ph-step-content">
                      <div className="ph-step-h">{s.h}</div>
                      <p className="ph-step-p">{s.p}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="ph-qr-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="ph-qr-note-text">
                <strong>About QR codes:</strong> These are static and standalone. Your preferences are securely encoded directly into the image the moment you confirm. No active internet connection is required to read the core data. If you change your mind, update your profile, generate a new QR, and distribute it.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 7. GUIDANCE — LIGHT ══ */}
        <section className="ph-light">
          <div className="ph-inner">
            <div className="ph-eyebrow">Guidance &amp; Support</div>
            <h2 className="ph-h-lgt">Not sure how to decide?<br />You don&apos;t have to do it alone.</h2>
            <div className="ph-guidance-grid">
              {GUIDANCE.map((g) => (
                <div className="ph-guidance-card" key={g.h}>
                  <div className="ph-guidance-icon">{g.icon}</div>
                  <div className="ph-guidance-h">{g.h}</div>
                  <p className="ph-guidance-p">{g.p}</p>
                  <div className="ph-guidance-note">{g.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. TESTIMONIALS — BROWN ══ */}
        <section className="ph-brown">
          <div className="ph-inner">
            <div className="ph-eyebrow">Real voices</div>
            <h2 className="ph-h-drk">The weight of the decision,<br />lifted off their shoulders.</h2>
            <p className="ph-sub-drk">Read how having clearly documented Life Preferences and Organ Donation wishes changed the hardest days into moments of clarity and peace.</p>
            <div className="ph-testi-grid">
              {TESTIMONIALS.map((t) => (
                <div className="ph-testi-card" key={t.name}>
                  <div className="ph-testi-type">
                    {t.typeIcon}
                    {t.type}
                  </div>
                  <p className="ph-testi-short">&ldquo;{t.short}&rdquo;</p>
                  <p className="ph-testi-full">{t.full}</p>
                  <div className="ph-testi-footer">
                    <div className="ph-testi-author">
                      <div className="ph-testi-avatar">{t.initials}</div>
                      <div>
                        <div className="ph-testi-name">{t.name}</div>
                        <div className="ph-testi-role">{t.role}</div>
                      </div>
                    </div>
                    <div className="ph-testi-stars">
                      {Array.from({length: t.stars}).map((_, i) => (
                        <span key={i} className="ph-testi-star">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 9. CTA — DARK ══ */}
        <section className="ph-dark" style={{textAlign:'center'}}>
          <div className="ph-inner" style={{maxWidth:'660px'}}>
            <div className="ph-eyebrow" style={{justifyContent:'center'}}>Start today</div>
            <h2 className="ph-h-drk" style={{marginBottom:'16px'}}>Five minutes.<br />A decision that lasts forever.</h2>
            <p className="ph-sub-drk" style={{marginBottom:'14px', maxWidth:'520px', margin:'0 auto 14px'}}>Make your wishes known today. Not for you — for the people who love you and will have to make the hardest decisions of their lives.</p>
            <p style={{fontSize:'16px', color:'#5A4E42', marginBottom:'40px'}}>Some things feel small now, but won&apos;t be later.</p>
            <div style={{display:'flex', gap:'14px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="/login" className="ph-btn-gold">Make Your Wishes Known Free</a>
              <a href="/pricing" className="ph-btn-ol-lgt">See pricing</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
