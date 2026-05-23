import Link from "next/link";
import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import PillarRotator from "@/components/PillarRotator";
import LegacyChecklist from "@/components/LegacyChecklist";
import QuickSetup from "@/components/QuickSetup";
import TrustVault from "@/components/TrustVault";
import ComparisonTable from "@/components/ComparisonTable";
import HomeFAQ from "@/components/HomeFAQ";
import Testimonials from "@/components/Testimonials";
import { supabase } from "@/lib/supabase";
import type { PricingPlan, Promotion } from "@/lib/supabase";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.soultdigital.com",
    languages: { "en-IN": "https://www.soultdigital.com", "en": "https://www.soultdigital.com" },
  },
};

async function getHeroPromotion(): Promise<Promotion | null> {
  try {
    const { data } = await supabase
      .from("promotions")
      .select("*")
      .eq("active", true)
      .eq("display_position", "hero")
      .limit(1)
      .maybeSingle();
    return data;
  } catch { return null; }
}

async function getPricingPreview(): Promise<PricingPlan[]> {
  try {
    const { data } = await supabase
      .from("pricing_plans")
      .select("*")
      .eq("active", true)
      .order("sort_order");
    return data ?? [];
  } catch { return []; }
}


const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to set up your Soult Digital Life Vault",
  description: "Create your secure digital legacy vault in under 60 seconds. Protect your family's future in three simple steps.",
  totalTime: "PT1H",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create your vault",
      text: "Sign up and define your legacy goals in under a minute. No legal jargon — just you, your family, and what matters most.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Document your assets",
      text: "Log bank accounts, properties, and important records at your own pace. Encrypted end-to-end. Add a little now, add more anytime.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Assign your executor",
      text: "Choose a trusted person. They get guided access only when needed. Granular permissions — your executor sees only what you allow.",
    },
  ],
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Soult Digital — Your Family's Secure Life Vault",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".sd-hero-sub", ".sd-cta-p"],
  },
  url: "https://www.soultdigital.com",
};

export default async function HomePage() {
  const [promo] = await Promise.all([getHeroPromotion()]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <style>{`
        /* ── Hero ── */
        .sd-hero {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex; align-items: center;
          padding: 120px 32px 80px;
          position: relative; overflow: hidden;
        }
        .sd-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 60% at 70% 50%, rgba(215,181,109,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(102,45,41,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .sd-hero-inner {
          max-width: 1280px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        .sd-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold);
          background: rgba(215,181,109,0.1);
          border: 1px solid var(--border-strong);
          padding: 6px 14px; margin-bottom: 24px;
        }
        .sd-hero-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.7)} }
        .sd-hero h1 {
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; letter-spacing: -0.03em;
          line-height: 1.05; color: var(--beige);
          margin-bottom: 24px;
        }
        .sd-hero h1 em { color: var(--gold); font-style: normal; }
        .sd-hero-sub {
          font-size: 17px; color: var(--text-muted);
          line-height: 1.75; max-width: 480px; margin-bottom: 40px;
        }
        .sd-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .sd-btn-primary {
          font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #301C1A;
          background: var(--gold); padding: 14px 32px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .sd-btn-primary:hover { background: var(--gold-light); }
        .sd-btn-ghost {
          font-size: 13px; font-weight: 600; letter-spacing: 0.06em;
          color: var(--beige-2); background: transparent;
          padding: 14px 24px; border: 1.5px solid var(--border);
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s; border-radius: 4px;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .sd-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
        .sd-hero-trust {
          display: flex; align-items: center; gap: 20px;
          margin-top: 40px; flex-wrap: wrap;
        }
        .sd-hero-trust-item {
          font-size: 12px; font-weight: 600; color: var(--text-muted);
          display: flex; align-items: center; gap: 6px;
        }
        .sd-hero-trust-item::before {
          content: '✓'; color: var(--gold); font-weight: 800;
        }

        /* ── Vault visual ── */
        .sd-vault-wrap {
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .sd-vault {
          width: 320px; height: 320px;
          display: grid; grid-template-columns: repeat(3,1fr);
          grid-template-rows: repeat(3,1fr);
          gap: 8px; transform: perspective(600px) rotateX(8deg) rotateY(-10deg);
          filter: drop-shadow(0 40px 80px rgba(215,181,109,0.15));
        }
        .sd-vault-cell {
          background: rgba(215,181,109,0.06);
          border: 1px solid rgba(215,181,109,0.2);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
          transition: background 0.3s;
          position: relative; overflow: hidden;
        }
        .sd-vault-cell::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(215,181,109,0.08) 0%, transparent 60%);
        }
        .sd-vault-cell.highlight {
          background: rgba(215,181,109,0.14);
          border-color: rgba(215,181,109,0.4);
          box-shadow: 0 0 20px rgba(215,181,109,0.1);
        }
        .sd-vault-glow {
          position: absolute; inset: -40px;
          background: radial-gradient(ellipse at center, rgba(215,181,109,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Life OS ── */
        .sd-lifeos {
          background: #f5f0e8; padding: 0; overflow: hidden;
        }
        .sd-lifeos-inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
          align-items: stretch; min-height: 780px;
        }
        .sd-lifeos-left {
          padding: 80px 64px 80px 8vw;
          display: flex; flex-direction: column; justify-content: center;
          max-width: 680px;
        }
        .sd-lifeos-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #9b7c5c; margin-bottom: 14px;
        }
        .sd-lifeos-h {
          font-size: clamp(26px, 2.8vw, 40px); font-weight: 800;
          letter-spacing: -0.03em; line-height: 1.12;
          color: #1a0f0e; margin-bottom: 14px;
        }
        .sd-lifeos-h em { color: #D7B56D; font-style: normal; }
        .sd-lifeos-sub {
          font-size: 14px; color: #6b5c4c; line-height: 1.75;
          margin-bottom: 28px;
        }

        /* App info — left portion of right column */
        .sd-app-info {
          flex-shrink: 0; width: 260px;
          display: flex; flex-direction: column; justify-content: center;
          padding: 48px 20px 48px 32px;
          border-left: 1px solid rgba(48,28,26,0.10);
        }
        .sd-app-info-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.18em;
          text-transform: uppercase; color: #9b7c5c; margin-bottom: 10px;
          text-align: center;
        }
        .sd-app-info-h {
          font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          color: #1a0f0e; line-height: 1.2; margin-bottom: 22px;
          text-align: center;
        }
        .sd-app-info-h em { color: #D7B56D; font-style: normal; }
        /* Stacked feature boxes */
        .sd-app-features { display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px; }
        .sd-app-feature {
          background: #fff; border-radius: 10px;
          padding: 16px 18px;
          border: 1px solid rgba(48,28,26,0.07);
        }
        .sd-app-feature-title {
          font-size: 15px; font-weight: 700; color: #1a0f0e;
          margin-bottom: 5px; letter-spacing: -0.01em;
        }
        .sd-app-feature-sub {
          font-size: 14px; color: #7c6b5c; line-height: 1.6;
        }
        /* Platforms — centered under the third box */
        .sd-app-platforms {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #9b7c5c;
          margin-top: 4px;
        }
        .sd-app-platforms-dot { width: 3px; height: 3px; border-radius: 50%; background: #c4a882; }

        /* Right column — flex row: text left, phone right */
        .sd-phone-wrap {
          display: flex; flex-direction: row; align-items: stretch;
          overflow: hidden;
        }
        /* Phone image container — takes remaining space */
        .sd-phone-img-wrap {
          flex: 1; position: relative; overflow: hidden; min-width: 0;
        }
        .sd-phone-screenshot {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: 51% 50%;
          transform: scale(0.72) translateX(-20px);
          transform-origin: center center;
        }

        @media (max-width: 960px) {
          .sd-lifeos-inner { grid-template-columns: 1fr; min-height: auto; }
          .sd-lifeos-left { padding: 56px 24px; max-width: 100%; }
          .sd-phone-wrap { display: none; }
        }

        /* ── Sections ── */
        .sd-section { padding: 96px 32px; }
        .sd-section-inner { max-width: 1280px; margin: 0 auto; }
        .sd-section-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 14px;
        }
        .sd-section-h {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800; letter-spacing: -0.02em; line-height: 1.1;
          color: var(--beige); margin-bottom: 16px;
        }
        .sd-section-sub {
          font-size: 16px; color: var(--text-muted); line-height: 1.7;
          max-width: 600px; margin-bottom: 60px;
        }

        /* Features */
        .sd-features-grid {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;
        }
        .sd-feature-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border); border-radius: 8px;
          padding: 28px; transition: border-color 0.3s, background 0.3s;
        }
        .sd-feature-card:hover {
          border-color: var(--border-strong);
          background: rgba(215,181,109,0.04);
        }
        .sd-feature-icon { font-size: 28px; margin-bottom: 14px; }
        .sd-feature-h { font-size: 16px; font-weight: 700; color: var(--beige); margin-bottom: 8px; }
        .sd-feature-p { font-size: 14px; color: var(--text-muted); line-height: 1.7; }

        /* How it works */
        .sd-how-bg { background: var(--bg-secondary); }
        .sd-how-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 40px; }
        .sd-how-item { }
        .sd-how-step {
          font-size: 11px; font-weight: 800; letter-spacing: 0.16em;
          color: var(--gold); margin-bottom: 12px;
        }
        .sd-how-line {
          width: 48px; height: 2px; background: var(--border-strong); margin-bottom: 20px;
        }
        .sd-how-h { font-size: 20px; font-weight: 700; color: var(--beige); margin-bottom: 10px; }
        .sd-how-p { font-size: 14px; color: var(--text-muted); line-height: 1.7; }

        /* Pricing preview */
        .sd-plans-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-bottom: 40px; }
        .sd-plan-card {
          border: 1px solid var(--border); border-radius: 8px;
          padding: 32px 28px; position: relative;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.3s;
        }
        .sd-plan-card.highlighted {
          border-color: var(--gold);
          background: rgba(215,181,109,0.05);
        }
        .sd-plan-badge {
          position: absolute; top: -12px; left: 28px;
          font-size: 10px; font-weight: 800; letter-spacing: 0.12em;
          text-transform: uppercase; color: #301C1A;
          background: var(--gold); padding: 4px 12px; border-radius: 2px;
        }
        .sd-plan-name { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
        .sd-plan-tagline { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; }
        .sd-plan-price { margin-bottom: 24px; }
        .sd-plan-price-num { font-size: 40px; font-weight: 800; color: var(--beige); letter-spacing: -0.02em; }
        .sd-plan-price-num span { font-size: 20px; font-weight: 600; color: var(--text-muted); }
        .sd-plan-price-note { font-size: 12px; color: var(--text-muted); margin-top: 4px; }
        .sd-plan-features { list-style: none; margin-bottom: 28px; }
        .sd-plan-features li {
          font-size: 13px; color: var(--text-muted);
          padding: 6px 0; border-bottom: 1px solid rgba(215,181,109,0.06);
          display: flex; align-items: flex-start; gap: 8px;
        }
        .sd-plan-features li::before { content: '✓'; color: var(--gold); font-weight: 800; flex-shrink: 0; }
        .sd-plan-cta {
          width: 100%; padding: 12px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; display: block; text-align: center;
          border-radius: 4px; transition: background 0.2s, color 0.2s;
        }
        .sd-plan-cta.primary { background: var(--gold); color: #301C1A; border: none; }
        .sd-plan-cta.primary:hover { background: var(--gold-light); }
        .sd-plan-cta.outline { border: 1.5px solid var(--border-strong); color: var(--gold); background: transparent; }
        .sd-plan-cta.outline:hover { background: rgba(215,181,109,0.08); }

        /* Testimonials */
        .sd-testi-bg { background: #220f0e; }
        .sd-testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .sd-testi-card {
          border: 1px solid var(--border); border-radius: 8px;
          padding: 28px; background: rgba(255,255,255,0.02);
        }
        .sd-testi-body { font-size: 15px; color: var(--beige-2); line-height: 1.75; margin-bottom: 20px; font-style: italic; }
        .sd-testi-name { font-size: 14px; font-weight: 700; color: var(--beige); }
        .sd-testi-role { font-size: 12px; color: var(--text-muted); }

        /* CTA section */
        .sd-cta-section {
          background: var(--bg-primary);
          padding: 96px 32px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .sd-cta-section::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 100%, rgba(215,181,109,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .sd-cta-h { font-size: clamp(28px,4vw,52px); font-weight: 900; letter-spacing: -0.02em; color: var(--beige); margin-bottom: 16px; }
        .sd-cta-p { font-size: 17px; color: var(--text-muted); margin-bottom: 36px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.7; }

        /* Mid-page CTA card */
        /* Mid-page CTA card */
        .sd-midcta {
          background: var(--bg-primary);
          padding: 56px 48px;
        }
        .sd-midcta-card {
          max-width: 1200px; margin: 0 auto;
          border-radius: 16px;
          background: linear-gradient(135deg, #c9a84c 0%, #D7B56D 40%, #e8ca87 70%, #c9a84c 100%);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 32px 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 40px;
          position: relative; overflow: hidden;
          box-shadow: 0 8px 48px rgba(215,181,109,0.35), 0 2px 0 rgba(255,255,255,0.15) inset;
        }
        .sd-midcta-card::before {
          content: '';
          position: absolute; top: -40px; right: -40px;
          width: 200px; height: 200px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .sd-midcta-left { display: flex; align-items: center; gap: 20px; position: relative; z-index: 1; }
        .sd-midcta-dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
          background: #301C1A;
          animation: pulse 2s ease-in-out infinite;
        }
        .sd-midcta-h {
          font-size: 20px; font-weight: 800; letter-spacing: -0.02em;
          color: #1a0f0e; margin-bottom: 6px; line-height: 1.2;
        }
        .sd-midcta-p {
          font-size: 18px; color: rgba(48,28,26,0.65); line-height: 1.5;
        }
        .sd-midcta-ctas {
          display: flex; gap: 12px; flex-shrink: 0;
          position: relative; z-index: 1;
        }
        .sd-midcta-btn-primary {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #F5ECD8;
          background: #301C1A; padding: 13px 28px;
          text-decoration: none; border-radius: 6px;
          transition: background 0.2s; display: inline-flex; align-items: center; white-space: nowrap;
        }
        .sd-midcta-btn-primary:hover { background: #4a2820; }
        .sd-midcta-btn-ghost {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #301C1A;
          background: rgba(255,255,255,0.25); padding: 13px 24px;
          border: 1.5px solid rgba(48,28,26,0.2); text-decoration: none;
          border-radius: 6px; transition: background 0.2s;
          display: inline-flex; align-items: center; white-space: nowrap;
        }
        .sd-midcta-btn-ghost:hover { background: rgba(255,255,255,0.4); }

        /* Legacy Readiness Checklist */
        .sd-checklist { background: #ede6d8; padding: 60px 48px; }
        .sd-checklist-inner { max-width: 1200px; margin: 0 auto; }

        /* Promo strip */
        .sd-promo {
          background: var(--crimson); padding: 20px 32px;
          display: flex; align-items: center; justify-content: center; gap: 20px;
          flex-wrap: wrap;
        }
        .sd-promo-badge {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; background: var(--gold); color: #301C1A;
          padding: 4px 10px;
        }
        .sd-promo-text { font-size: 14px; font-weight: 600; color: var(--beige); }
        .sd-promo-cta {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold);
          border: 1.5px solid var(--gold); padding: 6px 16px;
          text-decoration: none; transition: background 0.2s;
        }
        .sd-promo-cta:hover { background: rgba(215,181,109,0.1); }

        /* Responsive */
        @media (max-width: 1024px) {
          .sd-features-grid, .sd-how-grid, .sd-plans-grid, .sd-testi-grid {
            grid-template-columns: repeat(2,1fr);
          }
          .sd-hero-inner { grid-template-columns: 1fr; }
          .sd-vault-wrap { display: none; }
        }
        @media (max-width: 640px) {
          .sd-hero { padding: 100px 20px 60px; }
          .sd-section { padding: 64px 20px; }
          .sd-features-grid, .sd-how-grid, .sd-plans-grid, .sd-testi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── The Life OS ── */}
      <section className="sd-lifeos">
        <div className="sd-lifeos-inner">
          {/* Left */}
          <div className="sd-lifeos-left">
            <p className="sd-lifeos-eyebrow">The Life OS</p>
            <h2 className="sd-lifeos-h">Four pillars. One complete <em>digital legacy.</em></h2>
            <p className="sd-lifeos-sub">
              Everything your family needs — assets, documents, medical wishes, and memories — organised, encrypted, and ready to pass on when it matters most.
            </p>
            <PillarRotator />
          </div>

          {/* Right col: app text left, phone right */}
          <div className="sd-phone-wrap">
            {/* App info — left portion */}
            <div className="sd-app-info">
              <p className="sd-app-info-eyebrow">The Soult App</p>
              <h3 className="sd-app-info-h">Your legacy,<br /><em>in your pocket.</em></h3>
              <div className="sd-app-features">
                <div className="sd-app-feature">
                  <div className="sd-app-feature-title">Vault at a glance</div>
                  <div className="sd-app-feature-sub">Assets, loved ones, memories — visible the moment you open the app.</div>
                </div>
                <div className="sd-app-feature">
                  <div className="sd-app-feature-title">Private by design</div>
                  <div className="sd-app-feature-sub">AES-256 encryption and zero-knowledge architecture. Your data belongs only to you.</div>
                </div>
                <div className="sd-app-feature">
                  <div className="sd-app-feature-title">Nominee controls</div>
                  <div className="sd-app-feature-sub">Set what each person sees and define exactly when access is granted.</div>
                </div>
              </div>
              <div className="sd-app-platforms">
                <span>iOS</span>
                <span className="sd-app-platforms-dot" />
                <span>Android</span>
                <span className="sd-app-platforms-dot" />
                <span>Web</span>
              </div>
            </div>
            {/* Phone image — right portion, right-anchored */}
            <div className="sd-phone-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/app-screenshot.png"
                alt="Soult app home screen"
                className="sd-phone-screenshot"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA strip ── */}
      <div className="sd-midcta">
        <div className="sd-midcta-card">
          <div className="sd-midcta-left">
            <span className="sd-midcta-dot" />
            <div className="sd-midcta-text">
              <h2 className="sd-midcta-h">Your vault takes under an hour to set up.</h2>
              <p className="sd-midcta-p">Start free. Add documents, nominees, and memories at your own pace.</p>
            </div>
          </div>
          <div className="sd-midcta-ctas">
            <Link href="/get-started" className="sd-midcta-btn-primary">
              Create My Vault — Free
            </Link>
            <Link href="/pricing" className="sd-midcta-btn-ghost">
              See Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* ── Legacy Readiness Checklist ── */}
      <section className="sd-checklist">
        <div className="sd-checklist-inner">
          <LegacyChecklist />
        </div>
      </section>

      {/* ── Quick Setup ── */}
      <QuickSetup />
      <TrustVault />
      <ComparisonTable />

      {/* ── Promo strip ── */}
      {promo && (
        <div className="sd-promo">
          {promo.badge && <span className="sd-promo-badge">{promo.badge}</span>}
          {promo.body && <span className="sd-promo-text">{promo.body}</span>}
          {promo.cta_text && promo.cta_url && (
            <Link href={promo.cta_url} className="sd-promo-cta">{promo.cta_text} →</Link>
          )}
        </div>
      )}

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <HomeFAQ />

    </>
  );
}
