import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Soult Digital | India's Digital Life Vault",
  description: "Born in Hyderabad, built in Mangaluru. The story behind India's first digital life vault — protecting family assets, memories, and legacy.",
  alternates: { canonical: "https://www.soultdigital.com/about" },
  openGraph: {
    title: "About Soult Digital — India's First Digital Life Vault",
    description: "The story behind Soult — why we built India's first digital life vault and the team protecting your family's legacy.",
    url: "https://www.soultdigital.com/about",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.soultdigital.com/about",
      url: "https://www.soultdigital.com/about",
      name: "About Soult Digital — India's First Digital Life Vault",
      description: "The founding story, team, and mission behind Soult Digital — India's first digital life vault.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.soultdigital.com/about" },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.soultdigital.com/#organization",
      name: "Soult Digital Private Limited",
      url: "https://www.soultdigital.com",
      logo: "https://www.soultdigital.com/logo.png",
      foundingDate: "2024",
      foundingLocation: {
        "@type": "Place",
        name: "Mangaluru, Karnataka, India",
      },
      description: "India's first digital life vault — organise assets, preserve family memories, and ensure life continuity.",
      areaServed: "IN",
      knowsAbout: ["Digital legacy", "Estate planning India", "Life vault", "Family continuity", "Asset management"],
      founder: [
        { "@type": "Person", name: "Sanketh", jobTitle: "Co-Founder", worksFor: { "@id": "https://www.soultdigital.com/#organization" } },
        { "@type": "Person", name: "Mohammed", jobTitle: "Co-Founder", worksFor: { "@id": "https://www.soultdigital.com/#organization" } },
        { "@type": "Person", name: "Durga Charan", jobTitle: "Co-Founder", worksFor: { "@id": "https://www.soultdigital.com/#organization" } },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        .ab-page { font-family: 'Outfit', sans-serif; background: #FDFAF6; color: #2B1D16; }

        /* ── HERO ─────────────────────────────────────── */
        .ab-hero {
          background: #2B1D16;
          padding: 120px 64px 96px;
          text-align: center;
          position: relative; overflow: hidden;
          border-bottom: 1px solid rgba(200,155,60,0.12);
        }
        .ab-hero-origin {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: #C89B3C;
          margin-bottom: 28px;
        }
        .ab-hero-origin-dot { width: 5px; height: 5px; border-radius: 50%; background: #C89B3C; }
        .ab-hero-h {
          font-size: clamp(40px, 5.5vw, 72px); font-weight: 900;
          color: #EDE6D8; letter-spacing: -0.04em; line-height: 1.04;
          margin: 0 0 24px; max-width: 820px; margin-left: auto; margin-right: auto;
        }
        .ab-hero-h em { font-style: normal; color: #C89B3C; }
        .ab-hero-sub {
          font-size: 20px; color: rgba(43,29,22,0.55); line-height: 1.7;
          max-width: 600px; margin: 0 auto 56px;
        }
        .ab-hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 36px; border-radius: 12px;
          background: #2B1D16; color: #F5EFE3;
          font-size: 16px; font-weight: 800; letter-spacing: 0.04em;
          text-decoration: none; transition: background 0.2s;
        }
        .ab-hero-cta:hover { background: #C89B3C; }

        /* Stats strip */
        .ab-stats {
          display: flex; justify-content: center; gap: 0;
          margin-top: 72px; border-top: 1px solid rgba(43,29,22,0.08);
          padding-top: 0;
        }
        .ab-stat {
          flex: 1; max-width: 220px; text-align: center;
          padding: 32px 24px;
          border-right: 1px solid rgba(43,29,22,0.08);
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-n {
          font-size: 28px; font-weight: 900; color: #2B1D16;
          letter-spacing: -0.03em; line-height: 1; margin-bottom: 6px;
        }
        .ab-stat-l { font-size: 14px; color: rgba(43,29,22,0.45); font-weight: 600; }

        /* ── SHARED LAYOUT ────────────────────────────── */
        .ab-section { padding: 96px 64px; max-width: 1100px; margin: 0 auto; }
        .ab-section-full { padding: 96px 64px; }
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: #C89B3C; margin-bottom: 20px;
        }
        .ab-eyebrow-line { width: 20px; height: 1.5px; background: #C89B3C; }

        /* ── ORIGIN STORY ─────────────────────────────── */
        .ab-origin { background: #FDFAF6; }
        .ab-origin-grid {
          display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start;
        }
        .ab-origin-h {
          font-size: clamp(32px, 3.5vw, 48px); font-weight: 900;
          color: #2B1D16; letter-spacing: -0.04em; line-height: 1.08;
          margin: 0 0 32px;
        }
        .ab-origin-h em { font-style: normal; color: #C89B3C; }
        .ab-origin-body p {
          font-size: 18px; color: rgba(43,29,22,0.65); line-height: 1.8;
          margin: 0 0 20px;
        }
        .ab-origin-body p:last-child { margin: 0; }

        /* Letter card */
        .ab-letter {
          background: #F5F0E8;
          border: 1px solid rgba(43,29,22,0.08);
          border-radius: 24px;
          padding: 36px 36px 32px;
          position: sticky; top: 100px;
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
        }
        .ab-letter-photo-wrap {
          width: 220px; height: 220px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #C89B3C;
          box-shadow: 0 8px 40px rgba(43,29,22,0.15), 0 0 0 8px rgba(200,155,60,0.12);
          margin-bottom: 28px;
          flex-shrink: 0;
          background: #EDE6D8;
          display: flex; align-items: center; justify-content: center;
        }
        .ab-letter-photo {
          width: 100%; height: 100%;
          object-fit: cover; object-position: 50% 30%;
          display: block;
        }
        .ab-letter-body {
          width: 100%;
        }
        .ab-letter-quote {
          font-size: 36px; color: #C89B3C; font-weight: 900; line-height: 1;
          margin-bottom: 12px; font-family: Georgia, serif;
        }
        .ab-letter-text {
          font-size: 18px; color: rgba(43,29,22,0.7); line-height: 1.8;
          margin: 0 0 24px; font-style: italic;
        }
        .ab-letter-sig {
          padding-top: 20px; border-top: 1px solid rgba(43,29,22,0.1);
        }
        .ab-letter-name { font-size: 17px; font-weight: 800; color: #2B1D16; }
        .ab-letter-role { font-size: 13px; color: rgba(43,29,22,0.45); margin-top: 4px; }

        /* ── VISION ───────────────────────────────────── */
        .ab-vision { background: #2B1D16; }
        .ab-vision-inner { max-width: 1100px; margin: 0 auto; padding: 96px 64px; }
        .ab-vision-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(200,155,60,0.6); margin-bottom: 20px;
        }
        .ab-vision-eyebrow-line { width: 20px; height: 1.5px; background: rgba(200,155,60,0.4); }
        .ab-vision-h {
          font-size: clamp(30px, 3vw, 44px); font-weight: 900;
          color: #F5EFE3; letter-spacing: -0.04em; line-height: 1.1;
          margin: 0 0 14px; max-width: 680px;
        }
        .ab-vision-h em { font-style: normal; color: #C89B3C; }
        .ab-vision-sub {
          font-size: 18px; color: rgba(245,239,227,0.45); line-height: 1.7;
          max-width: 600px; margin: 0 0 56px;
        }
        .ab-vision-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .ab-vision-card {
          background: rgba(245,239,227,0.05);
          border: 1px solid rgba(200,155,60,0.30);
          border-radius: 18px; padding: 32px 28px;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
          cursor: default;
        }
        .ab-vision-card:hover {
          border-color: rgba(200,155,60,0.75);
          background: rgba(200,155,60,0.07);
          box-shadow: 0 0 32px rgba(200,155,60,0.22), 0 0 80px rgba(200,155,60,0.08), inset 0 0 24px rgba(200,155,60,0.05);
        }
        .ab-vision-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(200,155,60,0.1); border: 1px solid rgba(200,155,60,0.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px; color: #C89B3C;
        }
        .ab-vision-card-h { font-size: 20px; font-weight: 800; color: #F5EFE3; margin-bottom: 10px; }
        .ab-vision-card-p { font-size: 18px; color: rgba(245,239,227,0.45); line-height: 1.65; }

        /* ── VALUES ───────────────────────────────────── */
        .ab-values { background: #F5F0E8; }
        .ab-values-inner { max-width: 1200px; margin: 0 auto; padding: 96px 64px; }
        .ab-values-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 52px; }
        .ab-value-card {
          background: #FDFAF6;
          border: 1px solid rgba(43,29,22,0.09);
          border-radius: 20px; padding: 32px 28px 28px;
          display: flex; flex-direction: column; gap: 14px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ab-value-card:hover {
          border-color: rgba(200,155,60,0.45);
          box-shadow: 0 12px 40px rgba(43,29,22,0.09), 0 0 0 1px rgba(200,155,60,0.2);
          transform: translateY(-4px);
        }
        .ab-value-num {
          font-size: 13px; font-weight: 900; letter-spacing: 0.16em;
          color: #C89B3C; width: 36px; height: 36px; border-radius: 10px;
          background: rgba(200,155,60,0.12); display: flex; align-items: center; justify-content: center;
        }
        .ab-value-h { font-size: 18px; font-weight: 800; color: #2B1D16; letter-spacing: -0.01em; line-height: 1.3; }
        .ab-value-p { font-size: 15px; color: rgba(43,29,22,0.55); line-height: 1.7; margin: 0; flex: 1; }
        .ab-value-note {
          border-top: 1px solid rgba(43,29,22,0.08);
          padding-top: 14px;
          font-size: 13px; color: #C89B3C; font-style: italic; line-height: 1.5;
        }

        /* ── MILESTONES ───────────────────────────────── */
        .ab-timeline { background: #FDFAF6; }
        .ab-timeline-inner { max-width: 1100px; margin: 0 auto; padding: 96px 64px; }
        .ab-timeline-track {
          display: flex; flex-direction: column; gap: 0;
          margin-top: 56px; position: relative;
        }
        .ab-timeline-track::before {
          content: ''; position: absolute;
          left: 22px; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, #C89B3C 0%, rgba(200,155,60,0.15) 100%);
        }
        .ab-milestone {
          display: grid; grid-template-columns: 48px 1fr;
          gap: 28px; padding-bottom: 52px; position: relative;
        }
        .ab-milestone:last-child { padding-bottom: 0; }
        .ab-milestone-dot {
          width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
          background: #F5F0E8; border: 2px solid #C89B3C;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 900; color: #C89B3C;
          position: relative; z-index: 1;
        }
        .ab-milestone-year {
          font-size: 13px; font-weight: 800; color: #C89B3C;
          letter-spacing: 0.05em; margin-bottom: 8px;
        }
        .ab-milestone-h { font-size: 22px; font-weight: 800; color: #2B1D16; margin-bottom: 10px; }
        .ab-milestone-p { font-size: 18px; color: rgba(43,29,22,0.55); line-height: 1.7; max-width: 600px; }

        /* ── FOUNDERS ─────────────────────────────────── */
        .ab-founders { background: #F5F0E8; }
        .ab-founders-inner { max-width: 1100px; margin: 0 auto; padding: 96px 64px; }
        .ab-founders-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 52px; }
        .ab-founder-card {
          background: #FDFAF6;
          border: 1px solid rgba(43,29,22,0.08);
          border-radius: 20px; padding: 36px 32px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .ab-founder-card:hover { box-shadow: 0 12px 40px rgba(43,29,22,0.1); border-color: rgba(200,155,60,0.25); }
        .ab-founder-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          background: #2B1D16; display: flex; align-items: center; justify-content: center;
          font-size: 20px; font-weight: 900; color: #C89B3C; margin-bottom: 20px;
        }
        .ab-founder-name { font-size: 20px; font-weight: 900; color: #2B1D16; margin-bottom: 5px; }
        .ab-founder-role { font-size: 14px; font-weight: 700; color: #C89B3C; margin-bottom: 14px; }
        .ab-founder-p { font-size: 18px; color: rgba(43,29,22,0.55); line-height: 1.65; margin-bottom: 20px; }
        .ab-founder-loc {
          display: flex; align-items: center; gap: 6px;
          font-size: 13px; color: rgba(43,29,22,0.38); margin-bottom: 14px;
        }
        .ab-founder-li {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 13px; font-weight: 700; color: rgba(43,29,22,0.45);
          text-decoration: none; transition: color 0.18s;
        }
        .ab-founder-li:hover { color: #C89B3C; }

        /* ── CONTACT ──────────────────────────────────── */
        .ab-contact { background: #FDFAF6; }
        .ab-contact-inner { max-width: 1100px; margin: 0 auto; padding: 96px 64px; }
        .ab-contact-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 52px; }
        .ab-contact-card {
          background: #F5F0E8;
          border: 1px solid rgba(43,29,22,0.08);
          border-radius: 18px; padding: 32px;
          display: flex; flex-direction: column;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .ab-contact-card:hover { box-shadow: 0 8px 32px rgba(43,29,22,0.08); border-color: rgba(200,155,60,0.25); }
        .ab-contact-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(200,155,60,0.1); border: 1px solid rgba(200,155,60,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #C89B3C; margin-bottom: 20px;
        }
        .ab-contact-h { font-size: 20px; font-weight: 800; color: #2B1D16; margin-bottom: 8px; }
        .ab-contact-p { font-size: 18px; color: rgba(43,29,22,0.55); line-height: 1.65; flex: 1; margin-bottom: 20px; }
        .ab-contact-email {
          font-size: 15px; font-weight: 700; color: #C89B3C; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; transition: color 0.18s;
        }
        .ab-contact-email:hover { color: #2B1D16; }

        /* Responsive */
        @media (max-width: 900px) {
          .ab-hero { padding: 80px 28px 64px; }
          .ab-section { padding: 64px 28px; }
          .ab-section-full { padding: 64px 28px; }
          .ab-vision-inner, .ab-values-inner, .ab-timeline-inner, .ab-founders-inner, .ab-contact-inner { padding: 64px 28px; }
          .ab-origin-grid { grid-template-columns: 1fr; gap: 40px; }
          .ab-letter { position: static; }
          .ab-vision-grid { grid-template-columns: 1fr; }
          .ab-values-grid { grid-template-columns: repeat(2,1fr); }
          .ab-founders-grid { grid-template-columns: 1fr; }
          .ab-contact-grid { grid-template-columns: 1fr; }
          .ab-stats { flex-wrap: wrap; }
          .ab-stat { min-width: 140px; }
        }
      `}</style>

      <div className="ab-page">

        {/* ── HERO ── */}
        <section className="ab-hero">
          <div className="ab-hero-origin">
            <span className="ab-hero-origin-dot" />
            Born in Hyderabad · Built in Mangaluru
            <span className="ab-hero-origin-dot" />
          </div>
          <h1 className="ab-hero-h">
            Preserving the essence<br />of <em>every human being.</em>
          </h1>
        </section>

        {/* ── ORIGIN STORY ── */}
        <section className="ab-origin">
          <div className="ab-section">
            <div className="ab-origin-grid">
              <div>
                <div className="ab-eyebrow">
                  <span className="ab-eyebrow-line" /> Our Origin
                </div>
                <h2 className="ab-origin-h">
                  A personal journey<br />from <em>Sanketh Kandlikar</em>
                </h2>
                <div className="ab-origin-body">
                  <p>I&apos;m Sanketh. I live in Hyderabad, but my roots — and much of this story — lead back to Mangaluru. I grew up in a big Indian family where traditions, values, and memories weren&apos;t things you wrote down. They were things you lived. Grandma&apos;s recipes. My father&apos;s lessons. The way my uncle handled difficult news. The small wisdoms that shaped me, quietly, over years.</p>
                  <p>Then the pandemic came. I watched friends and families lose loved ones, and struggle with everything that came after — missing documents, forgotten passwords, unfinished conversations, unclaimed assets. The grief was hard enough. The chaos that followed made it unbearable.</p>
                  <p>I realised something simple: every person who has ever lived is a whole universe — their voice, their values, their way of seeing the world. And when they go, that universe deserves to be preserved. Not as a document. As an essence.</p>
                  <p>The idea took shape in Hyderabad. But Soult only became a company when I met Mohammed Saleem and Durga Charan — both originally from Mangaluru, now based in Dubai. We incorporated in Mangaluru — because it felt right for a product about legacy to be built from a place where legacy is still lived.</p>
                </div>
              </div>

              <div className="ab-letter">
                <div className="ab-letter-photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/sanketh.png" alt="Sanketh Kandlikar" className="ab-letter-photo" />
                </div>
                <div className="ab-letter-body">
                  <div className="ab-letter-quote">&ldquo;</div>
                  <p className="ab-letter-text">
                    Soult is a combination of Soul and Vault — a place to preserve the full essence of a human being. Their assets, yes. But also their memory, their guidance, their love. So that nothing of who they were is ever truly lost to the people who loved them.
                  </p>
                  <div className="ab-letter-sig">
                    <div>
                      <div className="ab-letter-name">Sanketh Kandlikar</div>
                      <div className="ab-letter-role">Founder · Soult Digital Pvt Ltd</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDERS ── */}
        <section className="ab-founders">
          <div className="ab-founders-inner">
            <div className="ab-founders-eyebrow">
              <span className="ab-vision-eyebrow-line" /> The Founders
            </div>
            <h2 className="ab-origin-h">Driven by<br /><em>Empathy &amp; Excellence.</em></h2>
            <div className="ab-founders-grid">
              {[
                { init: "SK", name: "Sanketh Kandlikar", role: "TBD", p: "Product. Strategy. Vision. Dedicated to ensuring every person's stories, assets, and life's work are preserved — securely and completely — for those who matter most.", loc: "Hyderabad, India" },
                { init: "MS", name: "Mohammed Saleem", role: "TBD", p: "Serial entrepreneur focused on scale and long-term sustainability. Originally from Mangaluru — bringing decades of business building experience to the mission from Dubai.", loc: "Dubai, UAE · Originally Mangaluru" },
                { init: "DC", name: "Durga Charan", role: "TBD", p: "Driving brand, growth, and storytelling for Soult. Originally from Mangaluru, based in Dubai — ensuring the right families discover a better way to preserve what matters most.", loc: "Dubai, UAE · Originally Mangaluru" },
                { init: "M", name: "TBD", role: "Marketing", p: "Leading Soult's brand presence, campaigns, and growth initiatives — building awareness and trust with families across India and beyond.", loc: "TBD" },
                { init: "B", name: "TBD", role: "B2B & Channel Partnerships", p: "Building Soult's network of institutional and channel partners — bringing the platform to families through trusted organisations, advisors, and communities.", loc: "TBD" },
                { init: "T", name: "TBD", role: "Tech Lead", p: "Architecting the secure, scalable infrastructure behind Soult — ensuring the platform is reliable, private, and built to last for generations.", loc: "TBD" },
              ].map(f => (
                <div className="ab-founder-card" key={f.init}>
                  <div className="ab-founder-avatar">{f.init}</div>
                  <div className="ab-founder-name">{f.name}</div>
                  <div className="ab-founder-role">{f.role}</div>
                  <p className="ab-founder-p">{f.p}</p>
                  <div className="ab-founder-loc">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {f.loc}
                  </div>
                  <a href="#" className="ab-founder-li">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISION ── */}
        <section className="ab-vision">
          <div className="ab-vision-inner">
            <div className="ab-vision-eyebrow">
              <span className="ab-vision-eyebrow-line" /> The Soult Vision
            </div>
            <h2 className="ab-vision-h">
              A future where your voice stays<br />with your loved ones, <em>across time.</em>
            </h2>
            <p className="ab-vision-sub">
              Soult isn&apos;t about the end. It&apos;s about continuity — making sure the things you know, the wisdom you carry, and the love you&apos;ve built keep moving forward.
            </p>
            <div className="ab-vision-grid">
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>,
                  title: "Voice",
                  body: "Record the messages you want your family to hear, at the moments that matter most.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  title: "Values",
                  body: "Pass on the principles that shaped your life — not just the assets you leave behind.",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                  title: "Guidance",
                  body: "Leave instructions, context, and clarity — so no one has to guess what you would have wanted.",
                },
              ].map(v => (
                <div className="ab-vision-card" key={v.title}>
                  <div className="ab-vision-icon">{v.icon}</div>
                  <div className="ab-vision-card-h">{v.title}</div>
                  <p className="ab-vision-card-p">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="ab-values">
          <div className="ab-values-inner">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" /> Core Values
            </div>
            <h2 className="ab-origin-h">The principles<br />we <em>live by.</em></h2>
            <div className="ab-values-grid">
              {[
                { n: "01", h: "Custodians of Trust", p: "We are not just building an app — we are building a vault. Trust is our currency. If we lose trust, we lose everything.", note: "Security over convenience. Every single time." },
                { n: "02", h: "Judgement Over Instructions", p: "We hire smart people to make decisions, not just follow tickets. If a process puts a user at risk, break the process and fix the risk.", note: "Respect the insight, not the hierarchy." },
                { n: "03", h: "Silence is Failure", p: "Bad news must travel fast. Hiding a bug, a delay, or a security risk is a fireable offence. Escalate risks immediately.", note: "\"I thought someone else saw it\" is not a defence." },
                { n: "04", h: "Titles Define Scope, Not Importance", p: "The best idea wins — whether it comes from an intern or the Founder. We respect the insight, not the hierarchy.", note: "The best idea always wins." },
              ].map(v => (
                <div className="ab-value-card" key={v.n}>
                  <div className="ab-value-num">{v.n}</div>
                  <div className="ab-value-h">{v.h}</div>
                  <p className="ab-value-p">{v.p}</p>
                  <div className="ab-value-note">{v.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MILESTONES ── */}
        <section className="ab-timeline">
          <div className="ab-timeline-inner">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" /> Milestones
            </div>
            <h2 className="ab-origin-h">Building the<br /><em>next 100 years.</em></h2>
            <div className="ab-timeline-track">
              {[
                { year: "2021", icon: "💡", h: "The Inspiration", p: "Witnessing the challenges families faced during the pandemic, Sanketh begins conceptualising Soult in Hyderabad — a secure, comprehensive digital vault that keeps everything a family may need in one trusted place." },
                { year: "2022", icon: "🤝", h: "Founding Partnerships", p: "Mohammed Saleem and Durga Charan — both originally from Mangaluru and based in Dubai — join the mission, bringing deep expertise in business scale, marketing, and execution." },
                { year: "2026", icon: "🚀", h: "Launch & Certification", p: "Soult Digital Private Limited is incorporated in Mangaluru. ISO 27001 (Information Security) and ISO 9001 (Quality Management) certifications are secured. India's first comprehensive digital life vault goes live." },
              ].map(m => (
                <div className="ab-milestone" key={m.year}>
                  <div className="ab-milestone-dot">{m.icon}</div>
                  <div>
                    <div className="ab-milestone-year">{m.year}</div>
                    <div className="ab-milestone-h">{m.h}</div>
                    <p className="ab-milestone-p">{m.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="ab-contact">
          <div className="ab-contact-inner">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" /> Get in Touch
            </div>
            <h2 className="ab-origin-h">We&apos;re here<br />to <em>help.</em></h2>
            <div className="ab-contact-grid">
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
                  h: "Tech Support",
                  p: "App issues, login trouble, upload errors, or anything that needs a fix — our support team responds within one business day.",
                  email: "support@soultdigital.com",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                  h: "General Queries",
                  p: "Ideas for the website, product feedback, general questions, or partnership enquiries — we read every message.",
                  email: "info@soultdigital.com",
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>,
                  h: "Careers",
                  p: "Open roles are listed below. Even if you don&apos;t see a fit, write to us with your story — we&apos;re always looking for the right people.",
                  email: "careers@soultdigital.com",
                },
              ].map(c => (
                <div className="ab-contact-card" key={c.h}>
                  <div className="ab-contact-icon">{c.icon}</div>
                  <div className="ab-contact-h">{c.h}</div>
                  <p className="ab-contact-p">{c.p}</p>
                  <a href={`mailto:${c.email}`} className="ab-contact-email">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
