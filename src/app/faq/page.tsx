import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "50+ answers about Soult Digital — security, pricing, family access, estate planning, and how the vault works. India's most comprehensive digital legacy FAQ.",
  alternates: { canonical: "https://www.soultdigital.com/faq" },
  openGraph: {
    title: "Soult Digital FAQ — Everything You Want to Know",
    description: "Clear answers about security, pricing, family access, and digital legacy planning in India.",
    url: "https://www.soultdigital.com/faq",
    type: "website",
  },
};

const CATEGORIES = [
  {
    name: "Getting Started",
    faqs: [
      { q: "What is Soult Digital?", a: "Soult is India's secure digital legacy vault. It helps families organise their assets, documents, health wishes, and memories in one encrypted place — and pass them on with clarity when it matters most." },
      { q: "Who is Soult built for?", a: "Soult is built for Indian families — people who want to organise their financial life, protect their loved ones, and ensure nothing is left in confusion when they're no longer around." },
      { q: "How long does setup take?", a: "Most people complete their initial vault setup in under 60 minutes. You can add documents, nominees, and memories at your own pace — there's no deadline and no minimum requirement." },
      { q: "Do I need a lawyer to use Soult?", a: "No. Soult is designed for anyone to use without legal expertise. We recommend pairing your vault with a professionally drafted will, but Soult stores and organises everything — it doesn't replace legal advice." },
      { q: "Can I use Soult on my phone?", a: "Yes. Soult is available as a web app and mobile app on iOS and Android. Your vault is accessible from any device, anywhere." },
      { q: "What languages does Soult support?", a: "Soult currently supports English and Hindi. More Indian languages are on the roadmap." },
      { q: "Is Soult only for wealthy families?", a: "Not at all. Soult is for any family that wants to avoid chaos and confusion after a loss. Whether you have one bank account or twenty, the need to organise and pass on information is the same." },
      { q: "What happens if I stop using Soult for a while?", a: "Your vault stays exactly as you left it. There's no inactivity penalty. Your data is preserved until you choose to delete it." },
    ],
  },
  {
    name: "Security & Privacy",
    faqs: [
      { q: "How secure is my data on Soult?", a: "Your data is encrypted with AES-256 — the same standard used by banks and governments worldwide — both in transit and at rest. Even Soult's own engineers cannot read your files." },
      { q: "What is zero-knowledge architecture?", a: "It means Soult stores only encrypted data. We hold no decryption key. Even if compelled by a court order, we cannot hand over readable data — because we simply do not have it." },
      { q: "Is Soult compliant with India's DPDP Act 2023?", a: "Yes. All data is stored on AWS infrastructure in the Mumbai region. Your data never leaves India. Soult is built from the ground up to comply with India's Digital Personal Data Protection Act 2023." },
      { q: "Where is my data physically stored?", a: "Your data is stored on AWS servers in the Mumbai, India region. It never leaves Indian jurisdiction." },
      { q: "Does Soult sell my data?", a: "Never. Your data is not sold, shared, or used for advertising. It is used only to deliver the Soult service to you." },
      { q: "Is Soult audited for security?", a: "Yes. Soult undergoes regular third-party security audits and penetration testing. Every access to your vault is logged with a full audit trail." },
      { q: "What happens if Soult is hacked?", a: "Because of our zero-knowledge architecture, a breach of Soult's servers would yield only encrypted ciphertext — completely unreadable without your key. Your data would remain safe." },
      { q: "What happens if Soult shuts down?", a: "You always own your data. You can export everything at any time in standard formats. If Soult were ever to cease operations, you would receive ample notice and tools to export your complete vault." },
    ],
  },
  {
    name: "What You Can Store",
    faqs: [
      { q: "What can I store in my Soult vault?", a: "You can store financial assets (bank accounts, investments, insurance policies), property records, a Will and legal documents, health directives, emergency binder information, voice notes, family stories, photos, and personal letters." },
      { q: "Can I store my Will on Soult?", a: "Yes. You can upload a scanned copy or PDF of your Will. Soult stores it securely and makes it available to your designated executor when access is granted." },
      { q: "Can I record voice notes or video messages?", a: "Yes. Soult supports voice note recordings and file uploads. You can record messages for specific family members to be delivered at the right moment." },
      { q: "What file formats are supported?", a: "Soult supports PDF, JPEG, PNG, MP4, MP3, and most common document formats. Maximum file size per upload is 50MB on the Family plan and 200MB on the Estate plan." },
      { q: "Can I store cryptocurrency or digital assets?", a: "You can store information about your digital assets — wallet addresses, exchange accounts, recovery instructions — but Soult does not hold the assets themselves." },
      { q: "Can I store health directives and medical wishes?", a: "Yes. You can store your DNR (Do Not Resuscitate) orders, organ donation preferences, healthcare proxy details, allergies, blood type, and emergency contacts — all accessible to the right people at the right time." },
    ],
  },
  {
    name: "Family Access & Nominees",
    faqs: [
      { q: "Who can access my vault?", a: "Only you — until you explicitly grant access to a nominee or executor. You control what each person sees and define exactly when access is granted." },
      { q: "What is an executor on Soult?", a: "An executor is a trusted person you designate to manage your vault on behalf of your family when needed. They receive a guided workflow that walks them step by step — no guesswork, no panic." },
      { q: "What is a nominee on Soult?", a: "A nominee is a family member or trusted person who will receive access to specific portions of your vault, as defined by you, at a time you specify or after a trigger event." },
      { q: "What is the difference between a nominee and an executor?", a: "A nominee receives access to specific assets or documents. An executor manages the overall handover process — guiding the family through the steps after you're gone. You can have multiple nominees and one executor." },
      { q: "Can I give different people access to different things?", a: "Yes. Soult has granular permission controls. One person can access financial documents only, another can access health directives, another can access family memories — all with independent access triggers." },
      { q: "How does event-based access work?", a: "You define trigger conditions — for example, 'grant executor access after my death is verified.' Until that condition is met, no one can access the vault. Soult guides the executor through a verification process." },
      { q: "Can a family member access my vault without my knowledge?", a: "No. Access is only granted when you explicitly set it up, or when the access trigger you've defined is activated. All access events are logged and attributed." },
    ],
  },
  {
    name: "Pricing & Plans",
    faqs: [
      { q: "Is there a free plan?", a: "Yes. Soult has a free forever tier with no credit card required. You can store documents, add one nominee, and access the full vault experience at no cost." },
      { q: "What does the best plan cost?", a: "The most popular plan starts at ₹1,999 per year — less than ₹6 a day. It includes unlimited documents, up to 5 nominees, health directive storage, memory preservation, and priority support." },
      { q: "Is there a monthly payment option?", a: "Yes. Plans are available on monthly and annual billing. Annual billing saves you the equivalent of two months." },
      { q: "Can I switch plans?", a: "Yes — upgrade or downgrade any time. Changes take effect at the next billing cycle." },
      { q: "Is there a family plan?", a: "The Family plan covers one vault with up to 5 nominees. For multiple vaults, the Estate plan gives you 3 vaults." },
      { q: "Do you offer discounts for CAs, lawyers, or advisors?", a: "Yes. We have a professional partner program for chartered accountants, estate lawyers, and financial advisors. Contact us at partners@soultdigital.com." },
      { q: "What happens to my data if I cancel?", a: "Your data is yours. You have 90 days to export everything after cancellation. After 90 days, all data is permanently deleted from our servers." },
      { q: "Is GST included in the pricing?", a: "Prices shown on the website are exclusive of GST. 18% GST is applied at checkout as per Indian tax law." },
    ],
  },
  {
    name: "Legal & Estate Planning",
    faqs: [
      { q: "Does Soult replace a Will?", a: "No. A Will is a legal document that must be drafted and executed properly. Soult stores your Will and makes it accessible — it does not create a legally binding Will on your behalf." },
      { q: "Is information stored on Soult legally admissible in India?", a: "The information stored on Soult can be used as evidence or reference during estate administration. However, official legal documents like a Will must still follow Indian succession law requirements." },
      { q: "Does Soult work for NRIs?", a: "Yes. Soult is designed for Indian families including NRIs. You can manage Indian assets, nominees, and documents from anywhere in the world." },
      { q: "Can I store a joint Will or a nomination for EPF/PPF?", a: "Yes. You can upload and store any document — joint Wills, EPF nominations, insurance nominations, property papers — as reference files in your vault." },
      { q: "What Indian laws govern Soult's operations?", a: "Soult operates under the Information Technology Act 2000, the Digital Personal Data Protection Act 2023, and Indian contract law. All disputes are subject to Indian jurisdiction." },
    ],
  },
];

const allFaqs = CATEGORIES.flatMap((c) => c.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.soultdigital.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .faq-page { padding-top: 72px; background: #1c0d0b; min-height: 100vh; }

        /* Hero */
        .faq-hero { padding: 80px 48px 64px; max-width: 1160px; margin: 0 auto; }
        .faq-breadcrumb {
          font-size: 13px; color: rgba(215,181,109,0.4); margin-bottom: 32px;
          display: flex; align-items: center; gap: 8px;
        }
        .faq-breadcrumb a { color: rgba(215,181,109,0.4); text-decoration: none; }
        .faq-breadcrumb a:hover { color: #D7B56D; }
        .faq-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(215,181,109,0.5);
          display: block; margin-bottom: 16px;
        }
        .faq-h {
          font-size: clamp(32px, 4vw, 54px); font-weight: 900;
          letter-spacing: -0.035em; line-height: 1.06;
          color: #F5ECD8; margin: 0 0 16px;
        }
        .faq-h em { color: #D7B56D; font-style: normal; }
        .faq-sub {
          font-size: 18px; line-height: 1.75; color: rgba(245,236,216,0.4);
          max-width: 540px;
        }

        /* Nav tabs */
        .faq-nav {
          display: flex; gap: 8px; flex-wrap: wrap;
          padding: 0 48px; max-width: 1160px; margin: 0 auto 56px;
        }
        .faq-nav-btn {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(215,181,109,0.45);
          background: rgba(215,181,109,0.06);
          border: 1px solid rgba(215,181,109,0.12);
          padding: 8px 18px; border-radius: 100px;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .faq-nav-btn:hover {
          color: #D7B56D;
          border-color: rgba(215,181,109,0.35);
          background: rgba(215,181,109,0.10);
        }

        /* Category sections */
        .faq-body { max-width: 1160px; margin: 0 auto; padding: 0 48px 96px; }
        .faq-cat { margin-bottom: 56px; }
        .faq-cat-title {
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(215,181,109,0.45);
          margin-bottom: 24px; padding-bottom: 12px;
          border-bottom: 1px solid rgba(215,181,109,0.10);
        }

        /* FAQ grid — 2 col */
        .faq-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px;
        }
        .faq-item {
          border-bottom: 1px solid rgba(215,181,109,0.08);
          padding: 22px 0;
        }
        .faq-q {
          font-size: 18px; font-weight: 700; color: #F5ECD8;
          letter-spacing: -0.01em; line-height: 1.35; margin-bottom: 10px;
        }
        .faq-a {
          font-size: 18px; line-height: 1.75; color: rgba(245,236,216,0.45);
        }

        /* CTA */
        .faq-cta {
          background: rgba(215,181,109,0.06);
          border: 1px solid rgba(215,181,109,0.15);
          border-radius: 16px;
          padding: 40px 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px;
          margin-top: 24px;
        }
        .faq-cta-h {
          font-size: 22px; font-weight: 800; color: #F5ECD8;
          letter-spacing: -0.02em; margin-bottom: 6px;
        }
        .faq-cta-p { font-size: 18px; color: rgba(245,236,216,0.4); }
        .faq-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: #D7B56D; color: #1a0f0e;
          font-size: 15px; font-weight: 800; padding: 15px 32px;
          border-radius: 100px; text-decoration: none; white-space: nowrap;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 18px rgba(215,181,109,0.2);
        }
        .faq-cta-btn:hover { background: #e8ca87; transform: translateY(-2px); }

        @media (max-width: 860px) {
          .faq-grid { grid-template-columns: 1fr; }
          .faq-hero, .faq-nav, .faq-body { padding-left: 24px; padding-right: 24px; }
          .faq-cta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="faq-page">

        {/* Hero */}
        <div className="faq-hero">
          <nav className="faq-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>FAQ</span>
          </nav>
          <span className="faq-eyebrow">Got questions</span>
          <h1 className="faq-h">Every answer you<br /><em>need, right here.</em></h1>
          <p className="faq-sub">
            Clear, honest answers to everything families ask us about Soult — from security to pricing to how the vault actually works.
          </p>
        </div>

        {/* Category nav */}
        <nav className="faq-nav" aria-label="FAQ categories">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href={`#${cat.name.toLowerCase().replace(/\s+&?\s*/g, "-")}`} className="faq-nav-btn">
              {cat.name}
            </a>
          ))}
        </nav>

        {/* FAQ body */}
        <div className="faq-body">
          {CATEGORIES.map((cat) => (
            <section
              key={cat.name}
              id={cat.name.toLowerCase().replace(/\s+&?\s*/g, "-")}
              className="faq-cat"
            >
              <h2 className="faq-cat-title">{cat.name}</h2>
              <div className="faq-grid">
                {cat.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <h3 className="faq-q">{faq.q}</h3>
                    <p className="faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <div className="faq-cta">
            <div>
              <h2 className="faq-cta-h">Still have a question?</h2>
              <p className="faq-cta-p">Email us at support@soultdigital.com — we reply within 24 hours.</p>
            </div>
            <Link href="https://app.soultdigital.com/signup" className="faq-cta-btn">
              Start for free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
