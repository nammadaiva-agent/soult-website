import Link from "next/link";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import type { Promotion } from "@/lib/supabase";
import PricingShell from "@/components/PricingShell";

export const metadata: Metadata = {
  title: "Pricing — Soult Digital",
  description:
    "Start free with Foundation. Protect your family from ₹1,999/year. Full legacy vault — assets, documents, memories, nominees. All prices exclusive of 18% GST.",
  alternates: { canonical: "https://www.soultdigital.com/pricing" },
  openGraph: {
    title: "Soult Digital Pricing — Foundation, Family, Legacy, Dynasty",
    description: "From ₹0 to ₹4,999/year. Launch offer ends 31 Aug 2026.",
    url: "https://www.soultdigital.com/pricing",
    type: "website",
  },
};

export const revalidate = 60;

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soultdigital.com/pricing",
      url: "https://www.soultdigital.com/pricing",
      name: "Pricing — Soult Digital",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
          { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.soultdigital.com/pricing" },
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Soult Digital Life Vault",
      applicationCategory: "LifestyleApplication",
      offers: [
        {
          "@type": "Offer",
          name: "Foundation",
          price: "0",
          priceCurrency: "INR",
          description: "Free plan — 3 assets, 5 memories, 5 loved ones, 1 executor, 100 MB storage.",
          url: "https://www.soultdigital.com/pricing",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Family",
          price: "1999",
          priceCurrency: "INR",
          description: "₹1,999/year — 20 assets, 20 memories, 20 loved ones, 3 executors, 2 GB storage.",
          url: "https://www.soultdigital.com/pricing",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-08-31",
        },
        {
          "@type": "Offer",
          name: "Legacy",
          price: "2999",
          priceCurrency: "INR",
          description: "₹2,999/year — 30 assets, 30 memories, 5 executors, 5 GB storage. Most popular plan.",
          url: "https://www.soultdigital.com/pricing",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-08-31",
        },
        {
          "@type": "Offer",
          name: "Dynasty",
          price: "4999",
          priceCurrency: "INR",
          description: "₹4,999/year — Unlimited assets, memories, loved ones, 7 executors, 10 GB storage.",
          url: "https://www.soultdigital.com/pricing",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-08-31",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Soult free to use?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. The Foundation plan is free and includes 3 assets, 5 memories, 5 loved ones, 1 executor, and 100 MB storage." },
        },
        {
          "@type": "Question",
          name: "What is included in the Soult Legacy plan?",
          acceptedAnswer: { "@type": "Answer", text: "The Legacy plan is ₹2,999/year and includes 30 assets, 30 memories, 30 loved ones, 18 wallet items, 50 passwords, 5 executors, 10 Wills & POAs, 5 GB storage, and priority support." },
        },
        {
          "@type": "Question",
          name: "Are Soult prices inclusive of GST?",
          acceptedAnswer: { "@type": "Answer", text: "No. All Soult prices are exclusive of 18% GST. GST is added at checkout." },
        },
        {
          "@type": "Question",
          name: "Does Soult offer enterprise plans?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Soult offers Enterprise plans for organisations wanting to provide digital life vault access as an employee wellbeing benefit, and Channel Partner plans for advisors, wealth managers, and CAs." },
        },
      ],
    },
  ],
};

const UNIVERSAL_FEATURES = [
  {
    ghost: "VITALS",
    title: "Medical & Dignity Preferences",
    body: "Organ donation intent, medical directives, blood group, and care preferences — all in one place your family can find when it matters most.",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        <line x1="12" y1="9" x2="12" y2="15"/>
        <line x1="9" y1="12" x2="15" y2="12"/>
      </svg>
    ),
  },
  {
    ghost: "SHIELD",
    title: "Privacy by Design",
    body: "AES-256 encryption, controlled access, and zero-knowledge architecture. Your data is readable only by you and those you choose.",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <rect x="9" y="11" width="6" height="5" rx="1"/>
        <path d="M10 11V9a2 2 0 1 1 4 0v2"/>
      </svg>
    ),
  },
  {
    ghost: "VAULT",
    title: "Essential Records",
    body: "Key documents, IDs, financial records, and critical information stored together — so your family never has to search when time is short.",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
      </svg>
    ),
  },
  {
    ghost: "ENDURE",
    title: "Legacy Beyond Assets",
    body: "Preserve not just what you own — but your memories, guidance, values, and the story you want to leave behind for the people you love.",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12c0 0-5-2-5-6a5 5 0 0 1 10 0c0 4-5 6-5 6z"/>
        <path d="M12 17c-2-1-4-3-4-5"/>
        <path d="M12 17c2-1 4-3 4-5"/>
      </svg>
    ),
  },
];



async function getPricingPromo(): Promise<Promotion | null> {
  try {
    const { data } = await supabase
      .from("promotions")
      .select("*")
      .eq("active", true)
      .eq("display_position", "pricing")
      .limit(1)
      .maybeSingle();
    return data;
  } catch { return null; }
}

export default async function PricingPage() {
  const promo = await getPricingPromo();

  return (
    <>
      <style>{`
        /* ── Page base ── */
        .pr-page { padding-top: 72px; background: #F5F0E6; }

        /* ── Hero — dark brand zone ── */
        .pr-hero {
          padding: 80px 32px 52px; text-align: center;
          position: relative; overflow: hidden;
          background: linear-gradient(150deg, #1E1208 0%, #301C1A 55%, #2B1D16 100%);
        }
        .pr-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 45% at 50% 110%, rgba(200,155,60,0.1) 0%, transparent 65%);
          pointer-events: none;
        }
        .pr-eyebrow {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 16px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .pr-eyebrow-line { width: 28px; height: 1px; background: #C89B3C; display: inline-block; }
        .pr-h {
          font-size: clamp(34px, 5vw, 58px); font-weight: 900;
          letter-spacing: -0.03em; color: #F5ECD8;
          margin-bottom: 14px; line-height: 1.05;
        }
        .pr-sub {
          font-size: 16px; color: rgba(245,236,216,0.65);
          max-width: 440px; margin: 0 auto 28px; line-height: 1.7;
        }
        .pr-billing-strip {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(200,155,60,0.12); border: 1px solid rgba(200,155,60,0.28);
          border-radius: 100px; padding: 8px 18px;
        }
        .pr-billing-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #C89B3C;
          animation: pr-pulse 2s ease-in-out infinite;
        }
        @keyframes pr-pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .pr-billing-text { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; color: rgba(245,236,216,0.72); }

        /* ── Promo ── */
        .pr-promo {
          max-width: 760px; margin: 28px auto 0;
          background: rgba(200,155,60,0.1); border: 1px solid rgba(200,155,60,0.22);
          padding: 14px 22px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          border-radius: 8px;
        }
        .pr-promo-badge {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
          color: #1A0C04; background: #C89B3C; padding: 4px 10px; border-radius: 4px;
        }
        .pr-promo-text { font-size: 13px; font-weight: 600; color: #F5ECD8; flex: 1; }
        .pr-promo-cta {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          color: #C89B3C; border: 1.5px solid rgba(200,155,60,0.55); padding: 5px 14px;
          text-decoration: none; border-radius: 4px; transition: background 0.2s;
        }
        .pr-promo-cta:hover { background: rgba(200,155,60,0.12); }

        /* ── Section labels ── */
        .pr-section-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.22em;
          text-transform: uppercase; color: #C89B3C;
          text-align: center; margin-bottom: 10px;
        }
        .pr-section-h {
          font-size: clamp(22px, 2.8vw, 32px); font-weight: 800;
          letter-spacing: -0.02em; color: #2B1D16;
          text-align: center; margin-bottom: 8px;
        }
        .pr-section-sub {
          font-size: 14px; color: rgba(43,29,22,0.52); text-align: center;
          margin: 0 auto 48px; max-width: 440px; line-height: 1.65;
        }

        /* ── B2C Plan cards ── */
        .pr-b2c { max-width: 1200px; margin: 64px auto 0; padding: 0 32px; }
        .pr-b2c-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .pr-card {
          border: 1px solid rgba(43,29,22,0.1); border-radius: 14px; padding: 28px 22px;
          position: relative; background: #FFFFFF;
          display: flex; flex-direction: column;
          box-shadow: 0 2px 12px rgba(43,29,22,0.05);
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .pr-card:hover { box-shadow: 0 6px 28px rgba(43,29,22,0.1); border-color: rgba(200,155,60,0.3); }
        .pr-card.highlighted {
          border-color: #C89B3C;
          box-shadow: 0 0 0 1px rgba(200,155,60,0.2), 0 8px 40px rgba(200,155,60,0.12);
        }
        .pr-badge {
          position: absolute; top: -12px; left: 20px;
          font-size: 9px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
          color: #fff; background: #C89B3C; padding: 4px 12px; border-radius: 100px;
        }
        .pr-plan-eyebrow {
          font-size: 9px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 5px;
        }
        .pr-plan-name { font-size: 22px; font-weight: 900; color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 4px; }
        .pr-plan-tagline { font-size: 12px; color: rgba(43,29,22,0.48); margin-bottom: 20px; line-height: 1.5; }
        .pr-price-row { margin-bottom: 2px; display: flex; align-items: baseline; gap: 2px; }
        .pr-rupee { font-size: 17px; font-weight: 700; color: #2B1D16; margin-top: 2px; }
        .pr-price-num { font-size: 40px; font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; line-height: 1; }
        .pr-price-zero { font-size: 40px; font-weight: 900; color: #2B1D16; letter-spacing: -0.03em; }
        .pr-price-period { font-size: 13px; color: rgba(43,29,22,0.45); font-weight: 500; margin-left: 2px; }
        .pr-original-price { font-size: 12px; color: rgba(43,29,22,0.35); margin-bottom: 3px; text-decoration: line-through; }
        .pr-gst-note { font-size: 10px; color: rgba(43,29,22,0.4); margin-bottom: 18px; }
        .pr-storage {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #9B7340; background: rgba(200,155,60,0.1); border: 1px solid rgba(200,155,60,0.2);
          border-radius: 100px; padding: 3px 10px; margin-bottom: 18px;
        }
        .pr-divider { border: none; border-top: 1px solid rgba(43,29,22,0.07); margin: 0 0 16px; }
        .pr-features { list-style: none; margin: 0 0 22px; padding: 0; flex: 1; }
        .pr-features li {
          font-size: 12px; color: rgba(43,29,22,0.7); padding: 7px 0;
          border-bottom: 1px solid rgba(43,29,22,0.05);
          display: flex; align-items: flex-start; gap: 9px; line-height: 1.45;
        }
        .pr-features li:last-child { border-bottom: none; }
        .pr-check-icon { color: #C89B3C; font-weight: 900; flex-shrink: 0; font-size: 11px; margin-top: 1px; }
        .pr-cta-btn {
          width: 100%; padding: 12px; font-size: 11px; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; display: block; text-align: center;
          border-radius: 8px; transition: all 0.2s; margin-top: auto;
        }
        .pr-cta-btn.gold { background: #C89B3C; color: #fff; border: none; }
        .pr-cta-btn.gold:hover { background: #b8892e; }
        .pr-cta-btn.outline { border: 1.5px solid rgba(43,29,22,0.2); color: #2B1D16; background: transparent; }
        .pr-cta-btn.outline:hover { border-color: #C89B3C; color: #C89B3C; background: rgba(200,155,60,0.05); }
        .pr-plan-note { font-size: 10px; color: rgba(43,29,22,0.38); text-align: center; margin-top: 10px; }

        /* ── B2B Plans ── */
        .pr-b2b { max-width: 1200px; margin: 56px auto 0; padding: 0 32px; }
        .pr-b2b-header {
          text-align: center; padding: 40px 0 36px;
          border-top: 1px solid rgba(43,29,22,0.08);
        }
        .pr-b2b-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pr-b2b-card {
          border: 1px solid rgba(43,29,22,0.1); border-radius: 14px; padding: 32px 28px;
          background: #FFFFFF; display: flex; flex-direction: column;
          box-shadow: 0 2px 12px rgba(43,29,22,0.04);
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .pr-b2b-card:hover { box-shadow: 0 6px 28px rgba(43,29,22,0.09); border-color: rgba(200,155,60,0.3); }
        .pr-b2b-context { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(43,29,22,0.38); margin-bottom: 8px; }
        .pr-b2b-name { font-size: 22px; font-weight: 900; color: #2B1D16; letter-spacing: -0.02em; margin-bottom: 4px; }
        .pr-b2b-label { font-size: 14px; font-weight: 700; color: #C89B3C; margin-bottom: 8px; }
        .pr-b2b-tagline { font-size: 13px; color: rgba(43,29,22,0.55); line-height: 1.65; margin-bottom: 22px; }
        .pr-b2b-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: 20px; }
        .pr-b2b-price-main { font-size: 28px; font-weight: 900; color: #2B1D16; letter-spacing: -0.02em; }
        .pr-b2b-price-sub { font-size: 13px; color: rgba(43,29,22,0.45); }
        .pr-b2b-features { list-style: none; margin: 0 0 28px; padding: 0; flex: 1; }
        .pr-b2b-features li {
          font-size: 13px; color: rgba(43,29,22,0.65); padding: 8px 0;
          border-bottom: 1px solid rgba(43,29,22,0.06);
          display: flex; align-items: flex-start; gap: 10px; line-height: 1.5;
        }
        .pr-b2b-features li:last-child { border-bottom: none; }
        .pr-b2b-cta {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 13px 28px; font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          border: 1.5px solid rgba(43,29,22,0.2); color: #2B1D16;
          border-radius: 8px; transition: all 0.2s; margin-top: auto;
        }
        .pr-b2b-cta:hover { border-color: #C89B3C; color: #C89B3C; background: rgba(200,155,60,0.05); }

        /* ── Universal features ── */
        .pr-universal { max-width: 1200px; margin: 96px auto 0; padding: 0 32px; }
        .pr-universal-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .pr-universal-card {
          background: #fff; border: 1.5px solid rgba(43,29,22,0.08);
          border-radius: 16px; padding: 32px 26px 28px;
          box-shadow: 0 2px 16px rgba(43,29,22,0.05);
          position: relative; overflow: hidden;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }
        .pr-universal-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(43,29,22,0.1), 0 0 0 1.5px rgba(200,155,60,0.3);
          border-color: rgba(200,155,60,0.35);
        }
        .pr-universal-ghost {
          position: absolute; top: 16px; right: 18px;
          font-size: 52px; font-weight: 900; letter-spacing: -0.04em;
          color: rgba(43,29,22,0.045); pointer-events: none; user-select: none;
          line-height: 1; white-space: nowrap;
        }
        .pr-universal-icon { margin-bottom: 22px; }
        .pr-universal-title { font-size: 18px; font-weight: 800; color: #2B1D16; margin-bottom: 10px; letter-spacing: -0.01em; line-height: 1.25; }
        .pr-universal-body { font-size: 14px; color: rgba(43,29,22,0.55); line-height: 1.7; }

        /* ── Compare table ── */
        .pr-compare { max-width: 1200px; margin: 80px auto 0; padding: 0 32px; }
        .pr-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 16px rgba(43,29,22,0.06); }
        .pr-table thead th {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          color: #C89B3C; padding: 16px 16px; text-align: center;
          background: rgba(200,155,60,0.05); border-bottom: 1px solid rgba(43,29,22,0.08);
        }
        .pr-table thead th:first-child { text-align: left; width: 32%; }
        .pr-table td {
          font-size: 13px; color: rgba(43,29,22,0.7); padding: 13px 16px;
          border-bottom: 1px solid rgba(43,29,22,0.05); text-align: center;
        }
        .pr-table td:first-child { text-align: left; color: rgba(43,29,22,0.55); font-size: 12px; }
        .pr-table tr:last-child td { border-bottom: none; }
        .pr-table tr:hover td { background: rgba(200,155,60,0.03); }
        .pr-chk { color: #C89B3C; font-weight: 900; }
        .pr-dsh { color: rgba(43,29,22,0.2); }

        /* ── FAQ ── */
        .pr-faq { max-width: 760px; margin: 80px auto 0; padding: 0 32px; }
        .pr-faq-item { border-bottom: 1px solid rgba(43,29,22,0.08); padding: 22px 0; }
        .pr-faq-q { font-size: 15px; font-weight: 700; color: #2B1D16; margin-bottom: 8px; }
        .pr-faq-a { font-size: 14px; color: rgba(43,29,22,0.55); line-height: 1.7; }

        /* ── App strip ── */
        .pr-app { max-width: 1200px; margin: 80px auto 0; padding: 0 32px; }
        .pr-app-inner {
          border: 1px solid rgba(43,29,22,0.1); border-radius: 16px;
          padding: 36px 40px; display: flex; align-items: center;
          justify-content: space-between; gap: 32px; flex-wrap: wrap;
          background: #fff; box-shadow: 0 2px 16px rgba(43,29,22,0.05);
        }
        .pr-app-h { font-size: 20px; font-weight: 800; color: #2B1D16; margin-bottom: 6px; letter-spacing: -0.02em; }
        .pr-app-sub { font-size: 13px; color: rgba(43,29,22,0.5); }
        .pr-app-links { display: flex; gap: 12px; }
        .pr-app-link {
          display: inline-flex; align-items: center; gap: 8px; padding: 11px 20px;
          border-radius: 8px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-decoration: none; border: 1.5px solid rgba(43,29,22,0.18); color: #2B1D16;
          transition: all 0.2s;
        }
        .pr-app-link:hover { border-color: #C89B3C; color: #C89B3C; }

        /* ── CTA band ── */
        .pr-cta-band {
          margin-top: 80px; padding: 72px 32px; text-align: center;
          border-top: 1px solid rgba(43,29,22,0.08);
          background: #EDE6D8;
        }
        .pr-cta-h { font-size: clamp(26px,3.5vw,40px); font-weight: 900; letter-spacing: -0.02em; color: #2B1D16; margin-bottom: 12px; }
        .pr-cta-p { font-size: 15px; color: rgba(43,29,22,0.55); margin-bottom: 32px; line-height: 1.65; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pr-b2c-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-universal-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .pr-b2c-grid, .pr-b2b-grid { grid-template-columns: 1fr; }
          .pr-universal-grid { grid-template-columns: 1fr 1fr; }
          .pr-b2c, .pr-b2b, .pr-universal, .pr-compare, .pr-faq, .pr-app { padding: 0 20px; }
          .pr-hero { padding: 56px 20px 40px; }
          .pr-app-inner { flex-direction: column; text-align: center; }
          .pr-app-links { justify-content: center; }
        }
        @media (max-width: 480px) {
          .pr-universal-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <div className="pr-page">

        {/* ── Hero ── */}
        <div className="pr-hero">
          <div className="pr-eyebrow">
            <span className="pr-eyebrow-line" />
            Pricing
            <span className="pr-eyebrow-line" />
          </div>
          <h1 className="pr-h">One vault. Every plan.</h1>
          <p className="pr-sub">Start free. Protect more as your family grows. No hidden fees.</p>

          <div className="pr-billing-strip">
            <span className="pr-billing-dot" />
            <span className="pr-billing-text">
              Annual billing · Launch offer · All prices exclusive of 18% GST · Offer expires 31 Aug 2026
            </span>
          </div>

          {promo && (
            <div className="pr-promo">
              {promo.badge && <span className="pr-promo-badge">{promo.badge}</span>}
              {promo.body && <span className="pr-promo-text">{promo.body}</span>}
              {promo.cta_text && promo.cta_url && (
                <Link href={promo.cta_url} className="pr-promo-cta">{promo.cta_text} →</Link>
              )}
            </div>
          )}
        </div>

        <PricingShell
          universalFeatures={
            <div className="pr-universal">
              <p className="pr-section-label" style={{ marginBottom: 10 }}>Included in every vault</p>
              <h2 className="pr-section-h" style={{ marginBottom: 8 }}>Every plan. Every family.</h2>
              <p className="pr-section-sub">Regardless of which plan you choose, these protections come standard.</p>
              <div className="pr-universal-grid">
                {UNIVERSAL_FEATURES.map((f, i) => (
                  <div key={i} className="pr-universal-card">
                    <div aria-hidden className="pr-universal-ghost">{f.ghost}</div>
                    <div className="pr-universal-icon">{f.svg}</div>
                    <div className="pr-universal-title">{f.title}</div>
                    <div className="pr-universal-body">{f.body}</div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

      </div>
    </>
  );
}
