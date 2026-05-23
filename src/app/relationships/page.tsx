"use client";
import { useState } from "react";
import Link from "next/link";

const CAPABILITIES = [
  {
    h: "Nominate to Assets",
    p: "Link any loved one as a nominee to specific financial assets — bank accounts, mutual funds, insurance policies, property. They receive what's theirs. Cleanly, legally, without dispute.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    h: "Appoint as Executor",
    p: "Give one trusted person structured access to your estate and Will. Your executor receives step-by-step instructions through Soult's handover process — not a chaotic folder of documents.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
      </svg>
    ),
  },
  {
    h: "Leave Memories for Them",
    p: "Tag any memory, life lesson, final wish, apology, or letter directly to a loved one. They receive it privately — at the right moment, in your voice, in your words.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    h: "Emergency & Medical Contact",
    p: "Designate who can act on your behalf in a medical emergency. Your trusted contact gets access to your medical directives, organ donation wishes, and living will — when you cannot speak for yourself.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    h: "Birthday & Anniversary Reminders",
    p: "Add a date of birth or anniversary and Soult sends you automatic reminders. Never miss what matters. Schedule a message now for delivery on a future birthday — even years from now.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    h: "Store Their Documents",
    p: "Each loved one has their own attachment section. Store ID cards, medical records, school certificates, insurance documents — everything related to that person, in one place.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

const ROLES = [
  {
    label: "Nominee",
    sub: "The Beneficiary",
    p: "The person who receives the financial value of a specific asset upon your death. Nominees are formally linked to each instrument — bank accounts, mutual funds, insurance, property — with the documentation needed for a clean, dispute-free transfer. In India, a nominee is the immediate recipient; Soult helps you align this with your Will so there's no ambiguity.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    label: "Executor",
    sub: "The Administrator",
    p: "The trusted person who administers your estate and carries out your Will. Your executor receives structured, step-by-step access through Soult's Digital Handshake — not a chaotic folder of documents. One person. Full clarity. Zero guesswork for your family during the hardest week of their lives.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Emergency Contact",
    sub: "The Emergency Voice",
    p: "Designated for non-financial emergencies. When you can't speak for yourself — in a medical emergency, a sudden incapacitation — your emergency contact can access your health directives, organ donation intent, and living will on your behalf. The person who knows what you would want, armed with the documentation to prove it.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

const REL_TABS = [
  {
    label: "Immediate Family",
    items: ["Brother", "Daughter", "Father", "Mother", "Sister", "Son", "Spouse (Husband/Wife)"],
  },
  {
    label: "Romantic & Partners",
    items: ["Boyfriend", "Fiancé/Fiancée", "Girlfriend", "Life Partner"],
  },
  {
    label: "Extended Family",
    items: ["Aunt", "Brother-in-law", "Cousin", "Daughter-in-law", "Father-in-law", "Granddaughter", "Grandfather", "Grandmother", "Grandson", "Mother-in-law", "Nephew", "Niece", "Sister-in-law", "Son-in-law", "Stepchild", "Stepfather", "Stepmother", "Uncle"],
  },
  {
    label: "Friends & Social",
    items: ["Best Friend", "Colleague", "Friend", "Neighbor", "Roommate"],
  },
  {
    label: "Household & Support",
    items: ["Cook", "Driver", "House Help / Maid", "Nanny / Caretaker", "Pet"],
  },
  {
    label: "Professional & Critical",
    items: ["Emergency Contact", "Family Doctor", "Financial Advisor", "Insurance Agent", "Lawyer / Legal Advisor", "Specialist Doctor", "Stock Broker", "Tax Consultant / C.A."],
  },
];

const STEPS = [
  {
    n: "01",
    h: "Add the people who matter",
    p: "Name, relationship type, dates of birth, anniversary. Soult supports every relationship category — from your spouse to your CA to your pet.",
  },
  {
    n: "02",
    h: "Connect them to what they need",
    p: "Nominate them to assets. Tag memories to them. Assign your executor. Set your emergency contact. Everything links from one profile.",
  },
  {
    n: "03",
    h: "Control what they see and when",
    p: "Granular access controls. Private by default. You decide what each person can view — immediately, on a date, or only when the executor flow is triggered.",
  },
  {
    n: "04",
    h: "Notify now or keep private until needed",
    p: "Tell them they're assigned, or keep it confidential. Either way, they'll receive clear guidance when their role activates.",
  },
];

const TESTIMONIALS = [
  {
    initials: "RK",
    name: "R.K.",
    role: "IT Professional, Bengaluru",
    q: "I had three FDs and two insurance policies with no nominee. I kept putting it off. Added Meera in Soult and linked everything to her in one evening. It took 20 minutes. I don't know why I waited years.",
  },
  {
    initials: "SM",
    name: "S.M.",
    role: "Business Owner, Pune",
    q: "My brother didn't even know I had a Will. I added him as executor in Soult and sent him the link. He called me that evening and said, 'I finally know what to do if something happens to you.' That conversation was worth everything.",
  },
  {
    initials: "PV",
    name: "P.V.",
    role: "Retired Teacher, Chennai",
    q: "I had a cardiac episode last year. Nobody in the hospital knew my organ donation preference or who to call. After that, I added my sister as emergency contact and uploaded my living will to her profile. At least now someone knows.",
  },
  {
    initials: "AN",
    name: "A.N.",
    role: "Software Engineer, Hyderabad",
    q: "I keep all my mother's medical records and her Aadhaar in her profile on Soult. When she had a fall last month and we rushed to the hospital, I had everything on my phone in 10 seconds. The doctor said she had never seen a family so prepared.",
  },
  {
    initials: "DR",
    name: "D.R.",
    role: "Entrepreneur, Mumbai",
    q: "I wrote a letter to my daughter for her 21st birthday. She is 9 now. I tagged it to her in Soult and scheduled it. Whatever happens between now and then, she will hear from me on that day. That is the most important thing I have ever done on any app.",
  },
];

const FAQS = [
  {
    q: "Can one person hold more than one role?",
    a: "Yes. A spouse can be both a nominee on your financial assets and your emergency contact. Your executor can also be a nominee. Each role is tracked separately so access rights are always clear — even when the same person holds multiple roles.",
  },
  {
    q: "Do my nominees and executor know they've been assigned?",
    a: "That is entirely your choice. You can notify them now — which we recommend, so they know where to find the vault when needed. Or you can keep the assignment confidential and let the executor trigger process handle it at the right time. Either way, they will receive clear, step-by-step guidance when their role activates.",
  },
  {
    q: "What is the difference between a nominee and a legal heir?",
    a: "A nominee is the person designated to receive an asset after your death — they are the immediate recipient. A legal heir is determined by your Will or by succession law. In India, a nominee on a bank account is a trustee, not automatically the legal owner. Soult's Will management and executor features help you align both so there is no ambiguity.",
  },
  {
    q: "Can I update my executor or nominee later?",
    a: "Yes, at any time from your vault dashboard. Changes take effect immediately and previous assignments are versioned in your audit trail. Soult will prompt you to review your relationship assignments after major life events — marriage, a new child, a bereavement — automatically.",
  },
  {
    q: "What happens if a nominated person passes away before me?",
    a: "You can add contingent nominees — backup recipients if a primary nominee predeceases you. Soult will prompt you to set these up and will flag any relationship assignments that may need reviewing based on changes you record in your vault.",
  },
  {
    q: "How many loved ones can I add?",
    a: "The number of loved ones you can add depends on your plan. The Foundation plan supports 5 loved ones. The Family plan supports 20. Legacy supports 30. The Dynasty plan supports unlimited loved ones. See our pricing page for the full breakdown.",
  },
];

export default function RelationshipsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .rp { font-family: 'Outfit', sans-serif; background: #F5ECD8; color: #2B1D16; }

        /* ── HERO ── */
        .rp-hero {
          background: linear-gradient(135deg, #1E1208 0%, #2B1D16 60%, #3A2010 100%);
          padding: 110px 64px 80px; position: relative; overflow: hidden;
        }
        .rp-hero::before {
          content: ''; position: absolute; top: -160px; right: -160px;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(200,155,60,0.10) 0%, transparent 65%);
          border-radius: 50%; pointer-events: none;
        }
        .rp-hero-inner { max-width: 1140px; margin: 0 auto; display: grid; grid-template-columns: 1fr 420px; gap: 60px; align-items: center; position: relative; }
        .rp-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .rp-hero-eyebrow::before { content: ''; width: 28px; height: 1.5px; background: #C89B3C; display: inline-block; }
        .rp-hero-h {
          font-size: clamp(34px, 4.5vw, 58px); font-weight: 900; color: #FFFFFF;
          letter-spacing: -0.03em; line-height: 1.06; margin: 0 0 20px;
        }
        .rp-hero-h span { color: #E8C060; display: block; }
        .rp-hero-p { font-size: 17px; color: rgba(237,230,216,0.72); line-height: 1.78; margin: 0 0 32px; }
        .rp-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .rp-cta-gold {
          background: #C89B3C; color: #1A1A1A; font-size: 14px; font-weight: 700;
          padding: 14px 28px; border-radius: 100px; text-decoration: none; letter-spacing: 0.03em;
          transition: background 0.2s;
        }
        .rp-cta-gold:hover { background: #E8C060; }
        .rp-cta-ghost {
          border: 1.5px solid rgba(200,155,60,0.38); color: #E8C060;
          font-size: 14px; font-weight: 600; padding: 14px 28px;
          border-radius: 100px; text-decoration: none;
          transition: border-color 0.2s;
        }
        .rp-cta-ghost:hover { border-color: #C89B3C; }

        /* Hero vault card */
        .rp-vault-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(200,155,60,0.20);
          border-radius: 24px; padding: 24px; backdrop-filter: blur(10px);
        }
        .rp-vault-card-h { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(200,155,60,0.70); margin-bottom: 16px; }
        .rp-vault-person {
          display: flex; align-items: center; gap: 12px; padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .rp-vault-person:last-child { border-bottom: none; }
        .rp-vault-avatar {
          width: 36px; height: 36px; border-radius: 50%;
          background: linear-gradient(135deg, #C89B3C, #8B6914);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; color: #fff; flex-shrink: 0;
        }
        .rp-vault-name { font-size: 14px; font-weight: 700; color: #fff; }
        .rp-vault-role { font-size: 11px; color: rgba(237,230,216,0.50); }
        .rp-vault-tag {
          margin-left: auto; font-size: 10px; font-weight: 700;
          background: rgba(200,155,60,0.15); border: 1px solid rgba(200,155,60,0.28);
          border-radius: 100px; padding: 3px 10px; color: #E8C060; letter-spacing: 0.05em;
        }

        /* ── SECTION SCAFFOLDING ── */
        .rp-section { padding: 80px 64px; }
        .rp-section-dark { padding: 80px 64px; background: #2B1D16; }
        .rp-section-mid { padding: 80px 64px; background: #EDE6D8; }
        .rp-inner { max-width: 1140px; margin: 0 auto; }
        .rp-eyebrow { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: #C89B3C; margin-bottom: 10px; }
        .rp-eyebrow-light { font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(200,155,60,0.80); margin-bottom: 10px; }
        .rp-section-h { font-size: clamp(26px, 3vw, 40px); font-weight: 900; color: #2B1D16; letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 8px; }
        .rp-section-h-light { font-size: clamp(26px, 3vw, 40px); font-weight: 900; color: #EDE6D8; letter-spacing: -0.02em; line-height: 1.15; margin: 0 0 8px; }
        .rp-section-sub { font-size: 16px; color: rgba(43,29,22,0.60); line-height: 1.70; margin: 0 0 48px; }
        .rp-section-sub-light { font-size: 16px; color: rgba(237,230,216,0.60); line-height: 1.70; margin: 0 0 48px; }

        /* ── CAPABILITIES GRID ── */
        .rp-cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .rp-cap-card {
          background: #fff; border-radius: 20px; padding: 28px;
          border: 1px solid rgba(43,29,22,0.08);
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .rp-cap-card:hover {
          box-shadow: 0 0 28px rgba(200,155,60,0.18), 0 0 56px rgba(200,155,60,0.08);
          transform: translateY(-3px);
        }
        .rp-cap-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: rgba(200,155,60,0.08); border: 1px solid rgba(200,155,60,0.20);
          display: flex; align-items: center; justify-content: center;
          color: #C89B3C; margin-bottom: 16px;
        }
        .rp-cap-h { font-size: 17px; font-weight: 800; color: #2B1D16; margin-bottom: 10px; letter-spacing: -0.01em; }
        .rp-cap-p { font-size: 14.5px; color: rgba(43,29,22,0.62); line-height: 1.75; margin: 0; }

        /* ── ROLES ── */
        .rp-roles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .rp-role-card {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(200,155,60,0.18);
          border-radius: 24px; padding: 32px;
          transition: background 0.2s, border-color 0.2s;
        }
        .rp-role-card:hover { background: rgba(200,155,60,0.06); border-color: rgba(200,155,60,0.35); }
        .rp-role-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(200,155,60,0.10); border: 1px solid rgba(200,155,60,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
        .rp-role-label { font-size: 20px; font-weight: 900; color: #EDE6D8; letter-spacing: -0.02em; margin-bottom: 4px; }
        .rp-role-sub { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #C89B3C; margin-bottom: 16px; }
        .rp-role-p { font-size: 14.5px; color: rgba(237,230,216,0.65); line-height: 1.78; margin: 0; }

        /* ── RELATIONSHIP TABS ── */
        .rp-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .rp-tab {
          padding: 8px 18px; border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; border: 1.5px solid rgba(43,29,22,0.12);
          color: rgba(43,29,22,0.55); background: transparent;
          transition: all 0.18s; font-family: inherit; letter-spacing: 0.01em;
        }
        .rp-tab.active { background: #C89B3C; border-color: #C89B3C; color: #1A1A1A; font-weight: 700; }
        .rp-tab:hover:not(.active) { border-color: rgba(200,155,60,0.40); color: #C89B3C; }
        .rp-rel-grid { display: flex; flex-wrap: wrap; gap: 10px; }
        .rp-rel-pill {
          padding: 8px 16px; border-radius: 100px; font-size: 14px; font-weight: 500;
          background: #fff; border: 1px solid rgba(43,29,22,0.10);
          color: #2B1D16; letter-spacing: 0.01em;
        }

        /* ── STEPS ── */
        .rp-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
        .rp-steps::before {
          content: ''; position: absolute;
          top: 32px; left: calc(12.5% + 16px); right: calc(12.5% + 16px); height: 1.5px;
          background: linear-gradient(90deg, rgba(200,155,60,0.30), rgba(200,155,60,0.60), rgba(200,155,60,0.30));
        }
        .rp-step { padding: 0 20px; text-align: center; }
        .rp-step-num {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(200,155,60,0.10); border: 2px solid rgba(200,155,60,0.35);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px; font-weight: 900; color: #C89B3C;
          margin: 0 auto 20px; letter-spacing: 0.05em; position: relative; z-index: 1;
          background: #EDE6D8;
        }
        .rp-step-h { font-size: 15px; font-weight: 800; color: #2B1D16; margin-bottom: 10px; letter-spacing: -0.01em; }
        .rp-step-p { font-size: 13.5px; color: rgba(43,29,22,0.60); line-height: 1.70; }

        /* ── TESTIMONIALS ── */
        .rp-testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .rp-testi-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(200,155,60,0.15);
          border-radius: 20px; padding: 28px;
          transition: border-color 0.2s;
        }
        .rp-testi-card:last-child { grid-column: 1 / -1; max-width: 580px; margin: 0 auto; width: 100%; }
        .rp-testi-card:hover { border-color: rgba(200,155,60,0.32); }
        .rp-testi-quote {
          font-size: 15px; color: rgba(237,230,216,0.78); line-height: 1.80;
          margin: 0 0 20px; font-style: italic;
        }
        .rp-testi-quote::before { content: '"'; color: #C89B3C; font-size: 28px; line-height: 0; vertical-align: -10px; margin-right: 4px; font-style: normal; }
        .rp-testi-foot { display: flex; align-items: center; gap: 12px; }
        .rp-testi-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #C89B3C 0%, #7A5A1A 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 13px; font-weight: 800; color: #fff; flex-shrink: 0;
        }
        .rp-testi-name { font-size: 14px; font-weight: 700; color: #EDE6D8; }
        .rp-testi-role { font-size: 12px; color: rgba(237,230,216,0.45); }
        .rp-testi-disclaimer {
          margin-top: 32px; font-size: 12px; color: rgba(237,230,216,0.35);
          line-height: 1.65; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;
        }

        /* ── FAQ ── */
        .rp-faq-list { display: flex; flex-direction: column; gap: 8px; }
        .rp-faq-item { background: #fff; border-radius: 16px; border: 1px solid rgba(43,29,22,0.08); overflow: hidden; }
        .rp-faq-q {
          width: 100%; text-align: left; padding: 20px 24px;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          font-size: 16px; font-weight: 700; color: #2B1D16;
          background: none; border: none; cursor: pointer; font-family: inherit;
          letter-spacing: -0.01em; line-height: 1.4;
        }
        .rp-faq-q:hover { color: #C89B3C; }
        .rp-faq-chevron {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
          background: rgba(200,155,60,0.10); border: 1px solid rgba(200,155,60,0.25);
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s, background 0.2s;
        }
        .rp-faq-chevron.open { transform: rotate(180deg); background: rgba(200,155,60,0.18); }
        .rp-faq-a {
          padding: 0 24px 20px; font-size: 15px; color: rgba(43,29,22,0.65); line-height: 1.78;
        }

        /* ── CLOSING CTA ── */
        .rp-cta-bar {
          background: linear-gradient(135deg, #1E1208 0%, #2B1D16 100%);
          padding: 80px 64px; text-align: center;
        }
        .rp-cta-bar-inner { max-width: 640px; margin: 0 auto; }
        .rp-cta-h { font-size: clamp(28px, 3.5vw, 44px); font-weight: 900; color: #fff; letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 8px; }
        .rp-cta-h span { color: #E8C060; display: block; }
        .rp-cta-sub { font-size: 16px; color: rgba(237,230,216,0.65); line-height: 1.72; margin: 0 0 32px; }
        .rp-cta-btn {
          display: inline-block; background: #C89B3C; color: #1A1A1A;
          font-size: 15px; font-weight: 700; padding: 16px 36px;
          border-radius: 100px; text-decoration: none; letter-spacing: 0.03em;
          transition: background 0.2s;
        }
        .rp-cta-btn:hover { background: #E8C060; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .rp-hero-inner { grid-template-columns: 1fr; }
          .rp-vault-card { display: none; }
          .rp-cap-grid { grid-template-columns: 1fr 1fr; }
          .rp-roles-grid { grid-template-columns: 1fr; }
          .rp-steps { grid-template-columns: 1fr 1fr; gap: 32px; }
          .rp-steps::before { display: none; }
          .rp-testi-grid { grid-template-columns: 1fr; }
          .rp-testi-card:last-child { grid-column: 1; max-width: 100%; }
        }
        @media (max-width: 768px) {
          .rp-hero, .rp-section, .rp-section-dark, .rp-section-mid, .rp-cta-bar { padding-left: 24px; padding-right: 24px; }
          .rp-cap-grid { grid-template-columns: 1fr; }
          .rp-steps { grid-template-columns: 1fr; }
          .rp-hero { padding-top: 80px; }
        }
      `}</style>

      <div className="rp">

        {/* ── HERO ── */}
        <div className="rp-hero">
          <div className="rp-hero-inner">
            <div>
              <div className="rp-hero-eyebrow">Loved Ones &amp; Relationships</div>
              <h1 className="rp-hero-h">
                The people you love.
                <span>Protected by design.</span>
              </h1>
              <p className="rp-hero-p">
                Your vault is only as complete as the people in it. Add the people who matter — and Soult connects them to your assets, your memories, your wishes, and your most critical decisions. No guessing. No confusion. Just clarity.
              </p>
              <div className="rp-hero-ctas">
                <Link href="/login" className="rp-cta-gold">Add Your Loved Ones</Link>
                <a href="#how-it-works" className="rp-cta-ghost">See How It Works</a>
              </div>
            </div>
            <div className="rp-vault-card">
              <div className="rp-vault-card-h">Your people · 6 added</div>
              {[
                { i: "PR", name: "Priya", role: "Spouse", tag: "Nominee" },
                { i: "AR", name: "Arjun", role: "Son", tag: "Memory" },
                { i: "RJ", name: "Rajan", role: "Brother", tag: "Executor" },
                { i: "DS", name: "Dr. Sharma", role: "Doctor", tag: "Emergency" },
                { i: "SK", name: "Suresh", role: "Financial Advisor", tag: "Professional" },
                { i: "LK", name: "Lakshmi", role: "Mother", tag: "Nominee" },
              ].map((p) => (
                <div className="rp-vault-person" key={p.i}>
                  <div className="rp-vault-avatar">{p.i}</div>
                  <div>
                    <div className="rp-vault-name">{p.name}</div>
                    <div className="rp-vault-role">{p.role}</div>
                  </div>
                  <div className="rp-vault-tag">{p.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES ── */}
        <div className="rp-section">
          <div className="rp-inner">
            <div className="rp-eyebrow">What Relationships Unlock</div>
            <h2 className="rp-section-h">One person added. Six powerful connections.</h2>
            <p className="rp-section-sub" style={{marginBottom:"40px"}}>&nbsp;</p>
            <div className="rp-cap-grid">
              {CAPABILITIES.map((c) => (
                <div className="rp-cap-card" key={c.h}>
                  <div className="rp-cap-icon">{c.icon}</div>
                  <div className="rp-cap-h">{c.h}</div>
                  <p className="rp-cap-p">{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── THREE ROLES ── */}
        <div className="rp-section-dark">
          <div className="rp-inner">
            <div className="rp-eyebrow-light">The Three Roles</div>
            <h2 className="rp-section-h-light">Every person has a purpose.</h2>
            <p className="rp-section-sub-light" style={{marginBottom:"40px"}}>&nbsp;</p>
            <div className="rp-roles-grid">
              {ROLES.map((r) => (
                <div className="rp-role-card" key={r.label}>
                  <div className="rp-role-icon">{r.icon}</div>
                  <div className="rp-role-label">{r.label}</div>
                  <div className="rp-role-sub">{r.sub}</div>
                  <p className="rp-role-p">{r.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RELATIONSHIP TYPES ── */}
        <div className="rp-section-mid">
          <div className="rp-inner">
            <div className="rp-eyebrow">Every Kind of Relationship</div>
            <h2 className="rp-section-h">Not just family. Everyone who matters.</h2>
            <p className="rp-section-sub" style={{marginBottom:"32px"}}>&nbsp;</p>
            <div className="rp-tabs">
              {REL_TABS.map((tab, i) => (
                <button key={i} className={`rp-tab${activeTab === i ? " active" : ""}`} onClick={() => setActiveTab(i)}>
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="rp-rel-grid">
              {REL_TABS[activeTab].items.map((item) => (
                <div className="rp-rel-pill" key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div className="rp-section" id="how-it-works">
          <div className="rp-inner">
            <div className="rp-eyebrow">How It Works</div>
            <h2 className="rp-section-h">Simple to set up. Critical when it counts.</h2>
            <p className="rp-section-sub">15 minutes to set up. Prevents years of confusion for your family.</p>
            <div className="rp-steps">
              {STEPS.map((s) => (
                <div className="rp-step" key={s.n}>
                  <div className="rp-step-num">{s.n}</div>
                  <div className="rp-step-h">{s.h}</div>
                  <p className="rp-step-p">{s.p}</p>
                </div>
              ))}
            </div>

            {/* Additional features strip */}
            <div style={{marginTop:"48px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px"}}>
              {[
                {h:"Birthday & Anniversary Reminders", p:"Never miss what matters."},
                {h:"Document Attachments per Person", p:"Every file in one place."},
                {h:"Review After Life Events", p:"Prompted automatically."},
                {h:"Relationship Graph Coming Soon", p:"A visual map of everyone."},
              ].map((f) => (
                <div key={f.h} style={{padding:"20px", background:"#fff", borderRadius:"16px", border:"1px solid rgba(43,29,22,0.08)"}}>
                  <div style={{fontSize:"14px", fontWeight:800, color:"#2B1D16", marginBottom:"6px"}}>{f.h}</div>
                  <div style={{fontSize:"13px", color:"rgba(43,29,22,0.55)"}}>{f.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="rp-section-dark">
          <div className="rp-inner">
            <div className="rp-eyebrow-light">What People Said</div>
            <h2 className="rp-section-h-light">Five families. Real stories.</h2>
            <p className="rp-section-sub-light" style={{marginBottom:"40px"}}>&nbsp;</p>
            <div className="rp-testi-grid">
              {TESTIMONIALS.map((t) => (
                <div className="rp-testi-card" key={t.name}>
                  <p className="rp-testi-quote">{t.q}</p>
                  <div className="rp-testi-foot">
                    <div className="rp-testi-avatar">{t.initials}</div>
                    <div>
                      <div className="rp-testi-name">{t.name}</div>
                      <div className="rp-testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="rp-testi-disclaimer">
              Testimonials are shared by users. As per our architecture, Soult staff cannot access vault content — these stories were voluntarily submitted through our feedback programme.
            </p>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="rp-section">
          <div className="rp-inner">
            <div className="rp-eyebrow">Common Questions</div>
            <h2 className="rp-section-h">Things people ask before they begin.</h2>
            <p className="rp-section-sub" style={{marginBottom:"32px"}}>&nbsp;</p>
            <div className="rp-faq-list">
              {FAQS.map((f, i) => (
                <div className="rp-faq-item" key={i}>
                  <button className="rp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{f.q}</span>
                    <span className={`rp-faq-chevron${openFaq === i ? " open" : ""}`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#C89B3C" strokeWidth="2" strokeLinecap="round">
                        <polyline points="2,4 5,7 8,4"/>
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && <div className="rp-faq-a">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CLOSING CTA ── */}
        <div className="rp-cta-bar">
          <div className="rp-cta-bar-inner">
            <h2 className="rp-cta-h">
              Give them clarity
              <span>The right people. The right access. Set up today.</span>
            </h2>
            <p className="rp-cta-sub">15 minutes to add your loved ones. A lifetime of clarity for your family when it matters most.</p>
            <Link href="/login" className="rp-cta-btn">Set Up Your Relationships</Link>
          </div>
        </div>

      </div>
    </>
  );
}
