"use client";
import Link from "next/link";

const B2C_PLANS = [
  {
    id: "foundation",
    name: "Foundation",
    label: "Secure your foundation",
    tagline: "First-time setup and essential protection",
    priceAnnual: 0,
    originalPrice: 599,
    storage: "100 MB",
    cta: "Begin with Foundation",
    ctaUrl: "/get-started",
    highlighted: false,
    note: "Limited-time introductory access",
    features: [
      "3 assets", "5 memories", "5 loved ones", "3 wallet items",
      "Password keeper", "1 executor", "Wills & POAs", "Emergency Binder", "Journaling",
    ],
  },
  {
    id: "family",
    name: "Family",
    label: "Protect your family",
    tagline: "Households getting organised and protected",
    priceAnnual: 1999,
    originalPrice: 2999,
    storage: "2 GB",
    cta: "Choose Family",
    ctaUrl: "/get-started",
    highlighted: false,
    note: "A strong starting point for most homes",
    features: [
      "20 assets", "20 memories", "20 loved ones", "10 wallet items",
      "20 passwords", "3 executors", "2 Wills & POAs", "Emergency Binder", "Journaling",
    ],
  },
  {
    id: "legacy",
    name: "Legacy",
    label: "Carry your legacy forward",
    tagline: "Families who want the full Soult experience",
    priceAnnual: 2999,
    originalPrice: 3999,
    storage: "5 GB",
    badge: "Most popular",
    cta: "Build My Legacy",
    ctaUrl: "/get-started",
    highlighted: true,
    note: "Best balance of protection and clarity",
    features: [
      "30 assets", "30 memories", "30 loved ones", "18 wallet items",
      "50 passwords", "5 executors", "10 Wills & POAs", "Emergency Binder",
      "Advanced Journaling", "Priority support",
    ],
  },
  {
    id: "dynasty",
    name: "Dynasty",
    label: "Preserve for generations",
    tagline: "Complex estates and family continuity",
    priceAnnual: 4999,
    originalPrice: 7999,
    storage: "10 GB",
    cta: "Choose Dynasty",
    ctaUrl: "/get-started",
    highlighted: false,
    note: "Built for longer horizons",
    features: [
      "Unlimited assets", "Unlimited memories", "Unlimited loved ones", "18 wallet items",
      "100 passwords", "7 executors", "Unlimited Wills & POAs", "Emergency Binder",
      "Advanced Journaling", "Dedicated support",
    ],
  },
];

const B2B_PLANS = [
  {
    id: "enterprise",
    name: "Enterprise",
    label: "A meaningful employee wellbeing benefit",
    tagline: "For organisations that want to offer employees a practical, thoughtful benefit they will genuinely value",
    price: "Custom",
    priceSub: "corp",
    cta: "Talk to Our Team",
    ctaUrl: "mailto:sk@soultdigital.com",
    context: "For employers, institutions, and workforce programs",
    features: [
      "Employee access at scale",
      "A distinctive wellbeing benefit for HR teams",
      "Simple rollout and guided onboarding",
      "Supports employee peace of mind",
      "Organ donation intent, blood group, medical directives and key records",
      "Flexible commercial and billing options",
    ],
  },
  {
    id: "partner",
    name: "Channel Partner",
    label: "Extend more value to your clients",
    tagline: "For advisors, relationship managers, and institutions who want to introduce Soult in a structured way",
    price: "Partner",
    priceSub: "access",
    cta: "Become a Partner",
    ctaUrl: "mailto:sk@soultdigital.com",
    context: "For trusted professional and distribution networks",
    features: [
      "Partner access on approval",
      "Referral and relationship-led distribution",
      "Useful for advisors serving family, legacy, and continuity needs",
      "Simple onboarding for your network",
      "Commercial structure discussed directly",
    ],
  },
];

// Legacy highlight — deep forest green, distinct from gold
const LEGACY_ACCENT = "#2C5F4A";

interface PricingTabsProps {
  tab: "b2c" | "b2b";
  setTab: (t: "b2c" | "b2b") => void;
  dark?: boolean;
}

export default function PricingTabs({ tab, setTab, dark = false }: PricingTabsProps) {

  return (
    <div>
      <style>{`
        .pt-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease !important;
        }
        .pt-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(43,29,22,0.13), 0 0 0 1.5px rgba(200,155,60,0.28) !important;
          border-color: rgba(200,155,60,0.4) !important;
        }
        .pt-card-legacy:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 0 1px rgba(212,168,67,0.4), 0 24px 64px rgba(43,29,22,0.5) !important;
        }
        .pt-card-dynasty:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 0 1px rgba(212,168,67,0.55), 0 24px 64px rgba(212,168,67,0.38) !important;
        }
        .pt-cta-outline {
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease !important;
        }
        .pt-cta-outline:hover {
          background: rgba(200,155,60,0.08) !important;
          border-color: #C89B3C !important;
          color: #9B7340 !important;
        }
        .pt-cta-legacy {
          transition: filter 0.2s ease, box-shadow 0.2s ease !important;
        }
        .pt-cta-legacy:hover {
          filter: brightness(1.08) !important;
          box-shadow: 0 6px 28px rgba(212,168,67,0.55) !important;
        }
        .pt-cta-dynasty {
          transition: background 0.2s ease, box-shadow 0.2s ease !important;
        }
        .pt-cta-dynasty:hover {
          background: #2B1D16 !important;
          box-shadow: 0 6px 24px rgba(20,10,2,0.5) !important;
        }
        .pt-b2b-cta {
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease !important;
        }
        .pt-b2b-cta:hover {
          background: rgba(200,155,60,0.07) !important;
          border-color: rgba(200,155,60,0.45) !important;
          color: #9B7340 !important;
        }
        .pt-b2b-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease !important;
        }
        .pt-b2b-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 36px rgba(43,29,22,0.11), 0 0 0 1.5px rgba(200,155,60,0.28) !important;
          border-color: rgba(200,155,60,0.38) !important;
        }
      `}</style>
      {/* ── Toggle ──────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", justifyContent: "center", margin: "48px 0 40px",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          background: dark ? "rgba(255,255,255,0.07)" : "#EDE6D8",
          borderRadius: 100,
          padding: 4, gap: 2,
          border: dark ? "1px solid rgba(245,236,216,0.14)" : "1px solid rgba(43,29,22,0.1)",
        }}>
          {([
            { key: "b2c", label: "Individual & Families" },
            { key: "b2b", label: "Enterprise & Partners" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: "10px 24px",
                borderRadius: 100, border: "none",
                fontSize: 12, fontWeight: 700, letterSpacing: "0.06em",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: tab === key
                  ? "linear-gradient(135deg, #B8860B 0%, #D4A843 50%, #E8C77A 100%)"
                  : "transparent",
                color: tab === key
                  ? "#1A0C04"
                  : dark
                  ? "rgba(245,236,216,0.52)"
                  : "rgba(43,29,22,0.5)",
                boxShadow: tab === key ? "0 2px 12px rgba(200,155,60,0.35)" : "none",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── B2C Plans ───────────────────────────────────────────────────── */}
      {tab === "b2c" && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
          alignItems: "stretch",
        }}>
          {B2C_PLANS.map((plan) => {
            const isLegacy  = plan.id === "legacy";
            const isDynasty = plan.id === "dynasty";

            // Legacy  = dark rich brown + bright gold text
            // Dynasty = warm gold gradient + dark text (premium unlimited tier)
            // Others  = clean white
            const cardBg = isLegacy
              ? "linear-gradient(150deg, #1C0E05 0%, #2B1D16 55%, #1A0C04 100%)"
              : isDynasty
              ? "#EDD878"
              : "#fff";

            const textPrimary   = isLegacy ? "#D4A843"               : "#2B1D16";
            const textSecondary = isLegacy ? "rgba(212,168,67,0.78)"  : isDynasty ? "rgba(43,29,22,0.62)" : "rgba(43,29,22,0.52)";
            const textMuted     = isLegacy ? "rgba(212,168,67,0.5)"   : isDynasty ? "rgba(43,29,22,0.42)" : "rgba(43,29,22,0.36)";
            const eyebrowColor  = isLegacy ? "rgba(212,168,67,0.6)"   : "#C89B3C";
            const dividerColor  = isLegacy ? "rgba(212,168,67,0.18)"  : isDynasty ? "rgba(43,29,22,0.14)" : "rgba(43,29,22,0.07)";
            const checkColor    = isLegacy ? "#D4A843"                : isDynasty ? "#2B1D16" : "#C89B3C";
            const pillBg        = isLegacy ? "rgba(212,168,67,0.12)"  : isDynasty ? "rgba(43,29,22,0.12)" : "rgba(200,155,60,0.1)";
            const pillBorder    = isLegacy ? "rgba(212,168,67,0.28)"  : isDynasty ? "rgba(43,29,22,0.22)" : "rgba(200,155,60,0.22)";
            const pillColor     = isLegacy ? "#D4A843"                : isDynasty ? "#2B1D16" : "#9B7340";

            const cardClass = isLegacy ? "pt-card-legacy" : isDynasty ? "pt-card-dynasty" : "pt-card";
            const cardBorder = isLegacy
              ? "1.5px solid rgba(212,168,67,0.22)"
              : isDynasty
              ? "1.5px solid rgba(212,168,67,0.5)"
              : "1.5px solid rgba(43,29,22,0.1)";
            const cardShadow = isLegacy
              ? "0 0 0 1px rgba(212,168,67,0.15), 0 20px 56px rgba(20,10,2,0.45)"
              : isDynasty
              ? "0 0 0 1px rgba(212,168,67,0.35), 0 16px 48px rgba(212,168,67,0.24)"
              : "0 2px 16px rgba(43,29,22,0.06)";

            return (
              <div key={plan.id} className={cardClass} style={{
                border: cardBorder,
                borderRadius: 16,
                position: "relative",
                background: cardBg,
                display: "flex", flexDirection: "column",
                boxShadow: cardShadow,
              }}>

                {/* Badge — on the rim, zero flow impact */}
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -13, left: 20,
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#1A0C04",
                    background: "linear-gradient(90deg, #D4A843, #E8C87A)",
                    padding: "5px 14px", borderRadius: 100,
                    boxShadow: "0 2px 12px rgba(212,168,67,0.45)",
                    whiteSpace: "nowrap",
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ padding: "28px 22px 24px", display: "flex", flexDirection: "column", flex: 1 }}>

                  {/* ── Header block ── */}
                  <div>
                    <div style={{
                      fontSize: 10, fontWeight: 800, letterSpacing: "0.2em",
                      textTransform: "uppercase", color: eyebrowColor, marginBottom: 6,
                    }}>
                      {plan.label}
                    </div>
                    <div style={{
                      fontSize: 26, fontWeight: 900, color: textPrimary,
                      letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 8,
                    }}>
                      {plan.name}
                    </div>
                    <div style={{
                      fontSize: 13, color: textSecondary,
                      lineHeight: 1.6, minHeight: 42,
                    }}>
                      {plan.tagline}
                    </div>
                  </div>

                  {/* ── Pricing block — fixed height across all cards ── */}
                  <div style={{ margin: "24px 0 0", paddingBottom: 20, borderBottom: `1px solid ${dividerColor}` }}>

                    {/* Main price line */}
                    {plan.priceAnnual === 0 ? (
                      <div style={{
                        fontSize: 48, fontWeight: 900, letterSpacing: "-0.04em",
                        color: textPrimary, lineHeight: 1, marginBottom: 8,
                      }}>
                        Free
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "baseline", gap: 1, marginBottom: 8 }}>
                        <span style={{ fontSize: 20, fontWeight: 700, color: textPrimary, alignSelf: "flex-start", marginTop: 6 }}>₹</span>
                        <span style={{ fontSize: 48, fontWeight: 900, color: textPrimary, letterSpacing: "-0.04em", lineHeight: 1 }}>
                          {plan.priceAnnual.toLocaleString("en-IN")}
                        </span>
                        <span style={{ fontSize: 14, color: textSecondary, marginLeft: 4, fontWeight: 500 }}>/yr</span>
                      </div>
                    )}

                    {/* Strikethrough — fixed height row */}
                    <div style={{ height: 20, display: "flex", alignItems: "center" }}>
                      {plan.originalPrice > 0 && (
                        <span style={{ fontSize: 13, color: textMuted, textDecoration: "line-through", fontWeight: 500 }}>
                          was ₹{plan.originalPrice.toLocaleString("en-IN")}/yr
                        </span>
                      )}
                    </div>

                    {/* GST note — fixed height row */}
                    <div style={{ height: 18, display: "flex", alignItems: "center", marginTop: 2 }}>
                      {plan.priceAnnual > 0 && (
                        <span style={{ fontSize: 11, color: textMuted, fontWeight: 500 }}>
                          +18% GST applicable
                        </span>
                      )}
                    </div>

                    {/* Storage pill */}
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      marginTop: 14, fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: pillColor, background: pillBg,
                      border: `1px solid ${pillBorder}`,
                      borderRadius: 100, padding: "4px 12px",
                    }}>
                      {plan.storage} storage
                    </div>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: "none", margin: "18px 0 24px", padding: 0, flex: 1 }}>
                    {plan.features.map((f, i) => (
                      <li key={i} style={{
                        fontSize: 13, color: textSecondary, padding: "7px 0",
                        borderBottom: `1px solid ${dividerColor}`,
                        display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.5,
                      }}>
                        <span style={{ color: checkColor, fontWeight: 900, fontSize: 12, marginTop: 1, flexShrink: 0 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={plan.ctaUrl}
                    className={isLegacy ? "pt-cta-legacy" : isDynasty ? "pt-cta-dynasty" : "pt-cta-outline"}
                    style={{
                      width: "100%", padding: "14px 0", fontSize: 12, fontWeight: 800,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      textDecoration: "none", display: "block", textAlign: "center",
                      borderRadius: 10, marginTop: "auto", boxSizing: "border-box",
                      background: isLegacy
                        ? "linear-gradient(135deg, #D4A843 0%, #E8C87A 50%, #D4A843 100%)"
                        : isDynasty
                        ? "#1A0C04"
                        : "transparent",
                      color: isLegacy ? "#1A0C04" : isDynasty ? "#D4A843" : "#2B1D16",
                      border: (isLegacy || isDynasty) ? "none" : "1.5px solid rgba(43,29,22,0.2)",
                      boxShadow: isLegacy
                        ? "0 4px 20px rgba(212,168,67,0.4)"
                        : isDynasty
                        ? "0 4px 20px rgba(20,10,2,0.35)"
                        : "none",
                    }}
                  >
                    {plan.cta}
                  </Link>
                  <div style={{
                    fontSize: 11, color: textMuted,
                    textAlign: "center", marginTop: 10, fontWeight: 500,
                  }}>
                    {plan.note}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── B2B Plans ───────────────────────────────────────────────────── */}
      {tab === "b2b" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 1100, margin: "0 auto" }}>

          {/* ── Enterprise ── */}
          <div style={{
            backgroundImage: "url('/enterprise-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 20,
            border: "1px solid rgba(200,155,60,0.2)",
            boxShadow: "0 20px 56px rgba(20,10,2,0.4)",
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Dark overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(20, 10, 4, 0.78)",
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* Left */}
            <div style={{ padding: "52px 44px 52px 52px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid rgba(200,155,60,0.1)", position: "relative", zIndex: 1 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(200,155,60,0.55)", marginBottom: 20 }}>
                  For employers, institutions &amp; workforce programs
                </div>
                <div style={{ fontSize: 52, fontWeight: 900, color: "#D4A843", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}>
                  Enterprise
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#F5EFE3", lineHeight: 1.6, marginBottom: 8 }}>
                  A meaningful employee wellbeing benefit
                </div>
                <div style={{ fontSize: 15, color: "rgba(245,239,227,0.45)", lineHeight: 1.7 }}>
                  For organisations that want to offer employees a practical, thoughtful benefit they will genuinely value.
                </div>
              </div>
              <Link href="mailto:sk@soultdigital.com" className="pt-b2b-cta" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginTop: 40, padding: "16px 32px",
                fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: 10, alignSelf: "flex-start",
                background: "linear-gradient(135deg, #C89B3C, #D4A843)",
                color: "#1A0C04", border: "none",
                boxShadow: "0 4px 20px rgba(200,155,60,0.35)",
              }}>
                Talk to Our Team
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            {/* Right — features grid */}
            <div style={{ padding: "52px 52px 52px 44px", position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,155,60,0.5)", marginBottom: 28 }}>
                What&apos;s included
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
                {B2B_PLANS[0].features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(200,155,60,0.08)",
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(200,155,60,0.12)", border: "1px solid rgba(200,155,60,0.28)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 1,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <span style={{ fontSize: 18, color: "rgba(245,239,227,0.75)", lineHeight: 1.55, fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Channel Partner ── */}
          <div style={{
            backgroundImage: "url('/partner-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 20,
            border: "1px solid rgba(200,155,60,0.2)",
            boxShadow: "0 20px 56px rgba(20,10,2,0.4)",
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Light overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(245, 239, 227, 0.82)",
              pointerEvents: "none", zIndex: 0,
            }} />
            {/* Left */}
            <div style={{ padding: "52px 44px 52px 52px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: "1px solid rgba(43,29,22,0.1)", position: "relative", zIndex: 1, background: "transparent" }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A5C1E", marginBottom: 20 }}>
                  For trusted professional &amp; distribution networks
                </div>
                <div style={{ fontSize: 52, fontWeight: 900, color: "#2B1D16", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}>
                  Channel<br />Partner
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, color: "#2B1D16", lineHeight: 1.6, marginBottom: 8 }}>
                  Extend more value to your clients
                </div>
                <div style={{ fontSize: 15, color: "rgba(43,29,22,0.55)", lineHeight: 1.7 }}>
                  For advisors, relationship managers, and institutions who want to introduce Soult in a structured way.
                </div>
              </div>
              <Link href="mailto:sk@soultdigital.com" className="pt-b2b-cta" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginTop: 40, padding: "16px 32px",
                fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                textDecoration: "none", borderRadius: 10, alignSelf: "flex-start",
                background: "#2B1D16", color: "#F5EFE3", border: "none",
              }}>
                Become a Partner
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

            {/* Right — features grid */}
            <div style={{ padding: "52px 52px 52px 44px", position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C89B3C", marginBottom: 28 }}>
                What&apos;s included
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
                {B2B_PLANS[1].features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(43,29,22,0.08)",
                  }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.28)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginTop: 1,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </span>
                    <span style={{ fontSize: 18, color: "rgba(43,29,22,0.75)", lineHeight: 1.55, fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
