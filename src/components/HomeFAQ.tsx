"use client";
import { useState, useRef, useEffect } from "react";

const FAQS = [
  {
    cat: "Getting Started",
    q: "What is Soult Digital?",
    a: "Soult is India's secure digital legacy vault. It helps families organise their assets, documents, health wishes, and memories in one encrypted place — and pass them on with clarity when it matters most.",
  },
  {
    cat: "Getting Started",
    q: "How long does it take to set up?",
    a: "Most people complete their initial setup in under 60 minutes. You can add documents, nominees, and memories at your own pace — there's no deadline and no minimum requirement.",
  },
  {
    cat: "Getting Started",
    q: "Do I need a lawyer to use Soult?",
    a: "No. Soult is designed for anyone to use without legal expertise. However, we recommend pairing your vault with a professionally drafted will. Soult stores and organises everything — it doesn't replace legal advice.",
  },
  {
    cat: "Security",
    q: "How secure is my data on Soult?",
    a: "Your data is encrypted with AES-256 — the same standard used by banks and governments worldwide — both in transit and at rest. We use a zero-knowledge architecture, meaning even Soult's own engineers cannot read your files.",
  },
  {
    cat: "Security",
    q: "Is Soult compliant with India's DPDP Act 2023?",
    a: "Yes. All data is stored on AWS infrastructure in the Mumbai region. Your data never leaves India. Soult is built from the ground up to comply with India's Digital Personal Data Protection Act 2023.",
  },
  {
    cat: "Security",
    q: "What happens if Soult shuts down?",
    a: "You always own your data. You can export everything at any time in standard formats. If Soult were ever to cease operations, you would receive ample notice and tools to export your complete vault.",
  },
  {
    cat: "Family Access",
    q: "Who can access my vault?",
    a: "Only you — until you explicitly grant access to a nominee or executor. You control what each person sees and define exactly when access is granted, such as after a specific life event.",
  },
  {
    cat: "Family Access",
    q: "What is an executor on Soult?",
    a: "An executor is a trusted person you designate to manage your vault on behalf of your family when needed. They receive a guided workflow that walks them through every step — no guesswork, no panic.",
  },
  {
    cat: "Family Access",
    q: "Can I assign different access levels to different family members?",
    a: "Yes. Soult has granular permission controls. You can give one person access to financial documents only, another to health directives, and another to family memories — all with independent access triggers.",
  },
  {
    cat: "Pricing",
    q: "Is there a free plan?",
    a: "Yes. Soult has a free forever tier with no credit card required. You can store documents, add one nominee, and access the full vault experience at no cost.",
  },
  {
    cat: "Pricing",
    q: "What does the best plan cost?",
    a: "The most popular plan starts at ₹1,999 per year — less than ₹6 a day. It includes unlimited documents, up to 5 nominees, health directive storage, memory preservation, and priority support.",
  },
  {
    cat: "Pricing",
    q: "Can I cancel at any time?",
    a: "Yes. Cancel any time with no penalty. Your data is retained for 90 days after cancellation, giving you ample time to export everything.",
  },
];

function useInView(ref: React.RefObject<Element | null>) {
  const [v, setV] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.05 });
    o.observe(ref.current);
    return () => o.disconnect();
  }, [ref]);
  return v;
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref as React.RefObject<Element>);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <style>{`
        .hfaq-section {
          background: #F5F0E6;
          padding: 96px 48px 104px;
          position: relative;
          overflow: hidden;
        }
        .hfaq-ambient { display: none; }
        .hfaq-inner { max-width: 1160px; margin: 0 auto; position: relative; }

        /* Header */
        .hfaq-top { text-align: center; margin-bottom: 64px; }
        .hfaq-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: #C89B3C;
          display: block; margin-bottom: 16px;
        }
        .hfaq-h {
          font-size: clamp(30px, 3.5vw, 46px); font-weight: 900;
          letter-spacing: -0.035em; line-height: 1.06;
          color: #2B1D16; margin: 0 0 14px;
        }
        .hfaq-h em { color: #C89B3C; font-style: normal; }
        .hfaq-sub {
          font-size: 18px; line-height: 1.75; color: rgba(43,29,22,0.48);
          margin: 0 auto; max-width: 500px;
        }

        /* Two-col layout */
        .hfaq-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 48px;
          align-items: start;
        }

        /* Single FAQ item */
        .hfaq-item {
          border-bottom: 1px solid rgba(43,29,22,0.09);
        }
        .hfaq-btn {
          width: 100%; background: none; border: none;
          padding: 20px 0;
          display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
          cursor: pointer; text-align: left;
        }
        .hfaq-cat {
          font-size: 10px; font-weight: 800; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(200,155,60,0.65);
          display: block; margin-bottom: 5px;
        }
        .hfaq-q {
          font-size: 18px; font-weight: 700; color: rgba(43,29,22,0.68);
          line-height: 1.35; letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .hfaq-item.open .hfaq-q { color: #2B1D16; }
        .hfaq-icon {
          width: 22px; height: 22px; flex-shrink: 0; margin-top: 2px;
          border-radius: 50%;
          border: 1.5px solid rgba(43,29,22,0.15);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.25s, background 0.25s;
          color: rgba(43,29,22,0.35);
        }
        .hfaq-item.open .hfaq-icon {
          border-color: #C89B3C;
          background: rgba(200,155,60,0.1);
          color: #C89B3C;
        }
        .hfaq-icon svg { transition: transform 0.25s ease; }
        .hfaq-item.open .hfaq-icon svg { transform: rotate(45deg); }

        .hfaq-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }
        .hfaq-body-inner {
          padding: 0 0 20px;
          font-size: 18px; line-height: 1.75;
          color: rgba(43,29,22,0.52);
        }

        /* Bottom CTA */
        .hfaq-bottom {
          text-align: center; margin-top: 56px;
        }
        .hfaq-bottom-text {
          font-size: 18px; color: rgba(43,29,22,0.4);
          margin-bottom: 20px;
        }
        .hfaq-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 15px; font-weight: 700; color: #C89B3C;
          text-decoration: none; border-bottom: 1px solid rgba(200,155,60,0.35);
          padding-bottom: 2px;
          transition: border-color 0.2s;
        }
        .hfaq-link:hover { border-color: #C89B3C; }

        /* Fade */
        .hfaq-fi { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .hfaq-fi.on { opacity: 1; transform: none; }
        .hfaq-d1 { transition-delay: 0.05s; }
        .hfaq-d2 { transition-delay: 0.15s; }
        .hfaq-d3 { transition-delay: 0.25s; }

        @media (max-width: 860px) {
          .hfaq-cols { grid-template-columns: 1fr; gap: 0; }
          .hfaq-section { padding: 72px 24px 80px; }
        }
      `}</style>

      <section className="hfaq-section" ref={ref}>
        <div className="hfaq-ambient" />
        <div className="hfaq-inner">

          <div className={`hfaq-top hfaq-fi${visible ? " on" : ""}`}>
            <span className="hfaq-eyebrow">Got questions</span>
            <h2 className="hfaq-h">Everything you want to know.<br /><em>Answered honestly.</em></h2>
            <p className="hfaq-sub">
              No jargon. No sales speak. Just clear answers to what families actually ask us.
            </p>
          </div>

          <div className={`hfaq-cols hfaq-fi hfaq-d2${visible ? " on" : ""}`}>
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`hfaq-item${isOpen ? " open" : ""}`}>
                  <button
                    className="hfaq-btn"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="hfaq-cat">{faq.cat}</span>
                      <span className="hfaq-q">{faq.q}</span>
                    </div>
                    <span className="hfaq-icon">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  <div className="hfaq-body" style={{ maxHeight: isOpen ? "300px" : "0" }}>
                    <p className="hfaq-body-inner">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`hfaq-bottom hfaq-fi hfaq-d3${visible ? " on" : ""}`}>
            <p className="hfaq-bottom-text">Still have questions? We have 50+ answers on our full FAQ page.</p>
            <a href="/faq" className="hfaq-link">
              Browse all FAQs
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
