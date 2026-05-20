import { supabase } from "@/lib/supabase";
import type { PricingPlan, Promotion } from "@/lib/supabase";
import Link from "next/link";

export const revalidate = 60;

async function getPlans(): Promise<PricingPlan[]> {
  const { data } = await supabase
    .from("pricing_plans")
    .select("*")
    .eq("active", true)
    .order("sort_order");
  return data ?? [];
}

async function getPricingPromo(): Promise<Promotion | null> {
  const { data } = await supabase
    .from("promotions")
    .select("*")
    .eq("active", true)
    .eq("display_position", "pricing")
    .limit(1)
    .maybeSingle();
  return data;
}

const FAQ = [
  { q: "Can I switch plans?", a: "Yes — upgrade or downgrade any time. Changes take effect at the next billing cycle." },
  { q: "What happens to my data if I cancel?", a: "Your data is yours. You have 90 days to export everything after cancellation." },
  { q: "Is there a family plan?", a: "The Family plan covers one vault with up to 5 nominees. For multiple vaults, the Estate plan gives you 3." },
  { q: "How secure is my data?", a: "AES-256 encryption at rest and in transit, AWS infrastructure, zero-knowledge architecture. We cannot read your data." },
  { q: "Do you offer discounts for advisors / CAs?", a: "Yes — we have a professional partner program. Contact us at partners@soultdigital.com." },
];

export default async function PricingPage() {
  const [plans, promo] = await Promise.all([getPlans(), getPricingPromo()]);

  return (
    <>
      <style>{`
        .pr-page { padding-top: 72px; background: var(--bg-primary); }

        /* Hero */
        .pr-hero {
          padding: 80px 32px 64px; text-align: center;
          position: relative; overflow: hidden;
        }
        .pr-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 100%, rgba(215,181,109,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .pr-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
        }
        .pr-h { font-size: clamp(32px,5vw,56px); font-weight: 900; letter-spacing: -0.02em; color: var(--beige); margin-bottom: 14px; }
        .pr-sub { font-size: 16px; color: var(--text-muted); max-width: 480px; margin: 0 auto; line-height: 1.7; }

        /* Promo */
        .pr-promo {
          max-width: 800px; margin: 32px auto 0;
          background: rgba(102,45,41,0.3); border: 1px solid rgba(215,181,109,0.3);
          padding: 16px 24px; display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .pr-promo-badge {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
          color: #301C1A; background: var(--gold); padding: 4px 10px;
        }
        .pr-promo-text { font-size: 14px; font-weight: 600; color: var(--beige); flex: 1; }
        .pr-promo-cta {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gold); border: 1.5px solid var(--gold); padding: 6px 16px;
          text-decoration: none; transition: background 0.2s;
        }
        .pr-promo-cta:hover { background: rgba(215,181,109,0.1); }

        /* Plans */
        .pr-plans { max-width: 1200px; margin: 64px auto 0; padding: 0 32px; }
        .pr-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .pr-card {
          border: 1px solid var(--border); border-radius: 8px; padding: 36px 28px;
          position: relative; background: rgba(255,255,255,0.02);
          transition: border-color 0.3s;
        }
        .pr-card.highlighted { border-color: var(--gold); background: rgba(215,181,109,0.04); }
        .pr-badge {
          position: absolute; top: -13px; left: 28px;
          font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase;
          color: #301C1A; background: var(--gold); padding: 4px 12px;
        }
        .pr-name { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; }
        .pr-tagline { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; }
        .pr-price { margin-bottom: 6px; }
        .pr-price-num { font-size: 44px; font-weight: 900; color: var(--beige); letter-spacing: -0.02em; }
        .pr-price-num sup { font-size: 22px; font-weight: 700; vertical-align: top; margin-top: 8px; }
        .pr-price-num small { font-size: 18px; font-weight: 500; color: var(--text-muted); }
        .pr-price-alt { font-size: 12px; color: var(--text-muted); margin-bottom: 24px; }
        .pr-divider { border: none; border-top: 1px solid var(--border); margin: 20px 0; }
        .pr-features { list-style: none; margin-bottom: 28px; }
        .pr-features li {
          font-size: 13px; color: var(--beige-2);
          padding: 8px 0; border-bottom: 1px solid rgba(215,181,109,0.06);
          display: flex; align-items: flex-start; gap: 10px; line-height: 1.5;
        }
        .pr-features li::before { content: '✓'; color: var(--gold); font-weight: 800; flex-shrink: 0; margin-top: 1px; }
        .pr-cta {
          width: 100%; padding: 13px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none; display: block; text-align: center;
          border-radius: 4px; transition: background 0.2s, color 0.2s; cursor: pointer;
        }
        .pr-cta.gold { background: var(--gold); color: #301C1A; border: none; }
        .pr-cta.gold:hover { background: var(--gold-light); }
        .pr-cta.border { border: 1.5px solid var(--border-strong); color: var(--gold); background: transparent; }
        .pr-cta.border:hover { background: rgba(215,181,109,0.08); }

        /* Compare */
        .pr-compare { max-width: 1200px; margin: 80px auto 0; padding: 0 32px; }
        .pr-compare-h { font-size: 28px; font-weight: 800; color: var(--beige); margin-bottom: 32px; }
        .pr-table { width: 100%; border-collapse: collapse; }
        .pr-table th {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold); padding: 12px 16px; text-align: left;
          border-bottom: 1px solid var(--border);
        }
        .pr-table th:first-child { width: 40%; }
        .pr-table td { font-size: 13px; color: var(--beige-2); padding: 12px 16px; border-bottom: 1px solid rgba(215,181,109,0.06); }
        .pr-table tr:hover td { background: rgba(215,181,109,0.03); }
        .pr-table td:not(:first-child) { text-align: center; }
        .pr-check { color: var(--gold); }
        .pr-dash { color: var(--text-muted); }

        /* FAQ */
        .pr-faq { max-width: 800px; margin: 80px auto; padding: 0 32px; }
        .pr-faq-h { font-size: 28px; font-weight: 800; color: var(--beige); margin-bottom: 32px; }
        .pr-faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; }
        .pr-faq-q { font-size: 15px; font-weight: 700; color: var(--beige); margin-bottom: 8px; }
        .pr-faq-a { font-size: 14px; color: var(--text-muted); line-height: 1.7; }

        /* CTA */
        .pr-cta-band {
          background: var(--bg-secondary); padding: 64px 32px; text-align: center;
          border-top: 1px solid var(--border);
        }
        .pr-cta-h { font-size: 32px; font-weight: 800; color: var(--beige); margin-bottom: 14px; }
        .pr-cta-p { font-size: 15px; color: var(--text-muted); margin-bottom: 28px; }

        @media (max-width: 900px) { .pr-grid { grid-template-columns: 1fr; max-width: 480px; margin: 64px auto 0; } }
        @media (max-width: 640px) {
          .pr-plans, .pr-compare, .pr-faq { padding: 0 20px; }
          .pr-hero { padding: 60px 20px 48px; }
        }
      `}</style>

      <div className="pr-page">

        {/* Hero */}
        <div className="pr-hero">
          <p className="pr-label">Pricing</p>
          <h1 className="pr-h">Simple, honest pricing.</h1>
          <p className="pr-sub">Start free. No credit card required. Upgrade when your family grows.</p>

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

        {/* Plans */}
        <div className="pr-plans">
          <div className="pr-grid">
            {plans.map((plan) => (
              <div key={plan.id} className={`pr-card${plan.highlighted ? " highlighted" : ""}`}>
                {plan.badge && <div className="pr-badge">{plan.badge}</div>}
                <p className="pr-name">{plan.name}</p>
                <p className="pr-tagline">{plan.tagline}</p>
                <div className="pr-price">
                  <span className="pr-price-num">
                    {plan.price_monthly === 0 ? "Free" : (
                      <>{plan.currency === "INR" ? "₹" : "$"}{plan.price_monthly.toLocaleString()}<small>/mo</small></>
                    )}
                  </span>
                </div>
                {plan.price_monthly > 0 && (
                  <p className="pr-price-alt">₹{plan.price_yearly.toLocaleString()}/year — save {Math.round((1 - plan.price_yearly / (plan.price_monthly * 12)) * 100)}%</p>
                )}
                <hr className="pr-divider" />
                <ul className="pr-features">
                  {plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <Link href={plan.cta_url} className={`pr-cta ${plan.highlighted ? "gold" : "border"}`}>
                  {plan.cta_text}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Compare Table */}
        <div className="pr-compare">
          <h2 className="pr-compare-h">Compare all features</h2>
          <table className="pr-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Starter</th>
                <th>Family</th>
                <th>Estate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Life Vaults", "1", "1", "3"],
                ["Document storage", "Up to 10", "Unlimited", "Unlimited"],
                ["Nominees", "1", "Up to 5", "Unlimited"],
                ["Will storage", "✓", "✓", "✓"],
                ["Memory preservation", "—", "✓", "✓"],
                ["Health wishes / emergency binder", "—", "✓", "✓"],
                ["Business succession planning", "—", "—", "✓"],
                ["AES-256 encryption", "✓", "✓", "✓"],
                ["Mobile app (iOS & Android)", "✓", "✓", "✓"],
                ["Priority support", "—", "✓", "✓"],
                ["Dedicated relationship manager", "—", "—", "✓"],
                ["API access", "—", "—", "✓"],
              ].map(([feature, ...vals], i) => (
                <tr key={i}>
                  <td>{feature}</td>
                  {vals.map((v, j) => (
                    <td key={j}>
                      {v === "✓" ? <span className="pr-check">✓</span> :
                       v === "—" ? <span className="pr-dash">—</span> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ */}
        <div className="pr-faq">
          <h2 className="pr-faq-h">Frequently asked</h2>
          {FAQ.map((item, i) => (
            <div key={i} className="pr-faq-item">
              <p className="pr-faq-q">{item.q}</p>
              <p className="pr-faq-a">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA Band */}
        <div className="pr-cta-band">
          <h2 className="pr-cta-h">Start protecting your family today.</h2>
          <p className="pr-cta-p">Free forever. No credit card. Setup in under an hour.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.soultdigital.com/signup" style={{
              fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#301C1A", background: "var(--gold)", padding: "14px 32px", borderRadius: "4px",
              textDecoration: "none", transition: "background 0.2s"
            }}>
              Create Your Life Vault — Free
            </Link>
            <Link href="/blog" style={{
              fontSize: "13px", fontWeight: 600, color: "var(--beige-2)",
              border: "1.5px solid var(--border)", padding: "14px 24px", borderRadius: "4px",
              textDecoration: "none"
            }}>
              Read our guides →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
