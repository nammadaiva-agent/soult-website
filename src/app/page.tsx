import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import { supabase } from "@/lib/supabase";
import type { PricingPlan, Promotion } from "@/lib/supabase";

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

const FEATURES = [
  { icon: "🗄️", title: "Asset & Financial Vault", body: "Bank accounts, properties, investments, insurance — documented and organized in one secure place." },
  { icon: "📜", title: "Will & Legal Documents", body: "Store your will, power of attorney, and legal papers with version history and executor access." },
  { icon: "🏥", title: "Medical Wishes", body: "Healthcare directives, emergency contacts, allergies and insurance — accessible when it matters most." },
  { icon: "🎙️", title: "Memory Preservation", body: "Voice notes, stories, letters and family narratives — preserve the soul of your legacy, not just the assets." },
  { icon: "👨‍👩‍👧", title: "Nominee Management", body: "Define exactly who gets access to what, and when. Guided executor workflows included." },
  { icon: "🔒", title: "AES-256 Encryption", body: "Military-grade encryption, AWS infrastructure, zero-knowledge architecture. Your data is yours alone." },
];

const HOW = [
  { step: "01", title: "Create your vault", body: "Sign up and set up your Life Vault in minutes. Add documents, wishes, and memories at your own pace." },
  { step: "02", title: "Add nominees", body: "Invite family members or executors with granular permission controls. They only see what you choose, when you choose." },
  { step: "03", title: "Live with confidence", body: "Your family is protected. Everything is organized. No guesswork, no panic, no lost paperwork." },
];

const TESTIMONIALS = [
  { name: "Priya Nair", role: "NRI, Dubai", body: "\"As an NRI, I always worried about what would happen to my India assets if something happened to me. Soult gave me complete peace of mind.\"" },
  { name: "Rajesh Menon", role: "Chartered Accountant", body: "\"I now recommend Soult to every client. It's the missing piece in most families' financial planning — and the setup takes under an hour.\"" },
  { name: "Anita Sharma", role: "Business Owner, Mumbai", body: "\"We lost three weeks of work after my father passed because nothing was documented. I made sure my family will never face that.\"" },
];

export default async function HomePage() {
  const [promo, plans] = await Promise.all([getHeroPromotion(), getPricingPreview()]);

  return (
    <>
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

      {/* ── Features ── */}
      <section className="sd-section" id="features">
        <div className="sd-section-inner">
          <p className="sd-section-label">What&apos;s Inside Your Vault</p>
          <h2 className="sd-section-h">Everything your family<br />will ever need to find</h2>
          <p className="sd-section-sub">
            Most families spend weeks — sometimes months — piecing things together after a loss.
            Soult eliminates that entirely.
          </p>
          <div className="sd-features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="sd-feature-card">
                <div className="sd-feature-icon">{f.icon}</div>
                <h3 className="sd-feature-h">{f.title}</h3>
                <p className="sd-feature-p">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="sd-section sd-how-bg" id="how-it-works">
        <div className="sd-section-inner">
          <p className="sd-section-label">How It Works</p>
          <h2 className="sd-section-h">Up and running<br />in under an hour</h2>
          <p className="sd-section-sub">
            No financial expertise needed. No lengthy consultations. Just a guided setup
            that protects your family from day one.
          </p>
          <div className="sd-how-grid">
            {HOW.map((h, i) => (
              <div key={i} className="sd-how-item">
                <p className="sd-how-step">Step {h.step}</p>
                <div className="sd-how-line" />
                <h3 className="sd-how-h">{h.title}</h3>
                <p className="sd-how-p">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ── */}
      <section className="sd-section" id="pricing-preview">
        <div className="sd-section-inner">
          <p className="sd-section-label">Simple Pricing</p>
          <h2 className="sd-section-h">Start free.<br />Grow with your family.</h2>
          <p className="sd-section-sub">No hidden fees. Cancel anytime. Your data is always yours.</p>

          {plans.length > 0 ? (
            <div className="sd-plans-grid">
              {plans.map((plan) => (
                <div key={plan.id} className={`sd-plan-card${plan.highlighted ? " highlighted" : ""}`}>
                  {plan.badge && <div className="sd-plan-badge">{plan.badge}</div>}
                  <p className="sd-plan-name">{plan.name}</p>
                  <p className="sd-plan-tagline">{plan.tagline}</p>
                  <div className="sd-plan-price">
                    <div className="sd-plan-price-num">
                      {plan.price_monthly === 0 ? "Free" : (
                        <>{plan.currency === "INR" ? "₹" : "$"}{plan.price_monthly}<span>/mo</span></>
                      )}
                    </div>
                    {plan.price_monthly > 0 && (
                      <p className="sd-plan-price-note">or ₹{plan.price_yearly}/year — save 2 months</p>
                    )}
                  </div>
                  <ul className="sd-plan-features">
                    {plan.features.slice(0, 4).map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <Link href={plan.cta_url} className={`sd-plan-cta ${plan.highlighted ? "primary" : "outline"}`}>
                    {plan.cta_text}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="sd-plans-grid">
              <div className="sd-plan-card"><p className="sd-plan-name">Starter</p><div className="sd-plan-price-num">Free</div></div>
              <div className="sd-plan-card highlighted"><div className="sd-plan-badge">Most Popular</div><p className="sd-plan-name">Family</p><div className="sd-plan-price-num">₹499<span>/mo</span></div></div>
              <div className="sd-plan-card"><p className="sd-plan-name">Estate</p><div className="sd-plan-price-num">₹1,499<span>/mo</span></div></div>
            </div>
          )}

          <div style={{ textAlign: "center" }}>
            <Link href="/pricing" className="sd-btn-ghost">View full pricing & compare plans →</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="sd-section sd-testi-bg">
        <div className="sd-section-inner">
          <p className="sd-section-label">What Families Say</p>
          <h2 className="sd-section-h">Peace of mind.<br />Finally.</h2>
          <div className="sd-testi-grid" style={{ marginTop: "0" }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="sd-testi-card">
                <p className="sd-testi-body">{t.body}</p>
                <p className="sd-testi-name">{t.name}</p>
                <p className="sd-testi-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sd-cta-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="sd-section-label" style={{ textAlign: "center", marginBottom: "14px" }}>Start Today</p>
          <h2 className="sd-cta-h">Your family deserves<br />this clarity.</h2>
          <p className="sd-cta-p">
            Join 10,000+ Indian families who&apos;ve already secured their legacy.
            It takes less than an hour to set up. Start free — no credit card required.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.soultdigital.com/signup" className="sd-btn-primary">
              Create Your Life Vault — Free
            </Link>
            <Link href="/pricing" className="sd-btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
