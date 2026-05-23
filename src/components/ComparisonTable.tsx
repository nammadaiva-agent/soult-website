"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

// ── DATA ──────────────────────────────────────────────────────────────────────

const PANELS = [
  {
    id: "access",
    number: "01",
    theme: "Access",
    competitor: "Google Drive",
    image: "/cmp-01.png",
    imagePosition: "center center",
    without: "Passwords. Locked folders.\nNo plan for your family.",
    with:    "Named executors. Unlocks\nwhen it matters most.",
  },
  {
    id: "memories",
    number: "02",
    theme: "Memories",
    competitor: "iCloud Photos",
    image: "/cmp-02.png",
    imagePosition: "center center",
    without: "Random folders. No context.\nEasily lost or forgotten.",
    with:    "Voice notes. Letters. Stories.\nYour voice, preserved forever.",
  },
  {
    id: "emergencies",
    number: "03",
    theme: "Emergencies",
    competitor: "DigiLocker",
    image: "/cmp-03.png",
    imagePosition: "center center",
    without: "Chaos. No plan.\nFamily left guessing.",
    with:    "Structured vault. Guided steps.\nCalm when it counts most.",
  },
  {
    id: "legacy",
    number: "04",
    theme: "Legacy",
    competitor: "Life Vault",
    image: "/cmp-04.png",
    imagePosition: "center 30%",
    without: "Cold storage. No connections.\nForgotten over time.",
    with:    "Wishes documented. Generations\nconnected. Your story continues.",
  },
];

// ── PANEL CARD — shared between desktop and mobile ────────────────────────────

function PanelCard({ panel }: { panel: typeof PANELS[number] }) {
  return (
    <div style={{
      height: "100%", position: "relative",
      background: "#1a110a",
      borderRadius: 22,
      border: "1px solid rgba(120,90,40,0.12)",
      boxShadow: "0 8px 48px rgba(60,35,10,0.12)",
      overflow: "hidden",
    }}>
      <img
        src={panel.image}
        alt={panel.theme}
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          objectPosition: panel.imagePosition,
          display: "block",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(15,8,3,0) 0%, rgba(15,8,3,0.05) 38%, rgba(15,8,3,0.5) 62%, rgba(15,8,3,0.78) 100%)",
        pointerEvents: "none",
      }} />

      {/* Badge */}
      <div style={{
        position: "absolute", top: 20, left: 22,
        display: "flex", alignItems: "center", gap: 7,
        background: "rgba(15,8,3,0.48)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: 100, padding: "5px 13px 5px 9px",
        border: "1px solid rgba(255,255,255,0.1)",
      }}>
        <span style={{ fontSize: 9, fontWeight: 800, color: "#C89B3C", letterSpacing: "0.1em" }}>{panel.number}</span>
        <div style={{ width: 1, height: 9, background: "rgba(255,255,255,0.2)" }} />
        <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.72)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{panel.theme}</span>
      </div>

      {/* Bottom text */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        display: "flex", alignItems: "flex-end",
      }}>
        {/* Competitor */}
        <div style={{ flex: 1, padding: "0 20px 24px 22px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 100, padding: "4px 10px", marginBottom: 9,
          }}>
            <span style={{ fontSize: 10, color: "rgba(255,100,100,0.95)", fontWeight: 900 }}>✕</span>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.58)" }}>{panel.competitor}</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0, letterSpacing: "-0.01em", whiteSpace: "pre-line" }}>{panel.without}</p>
        </div>

        <div style={{ width: 1, background: "rgba(255,255,255,0.14)", height: 80, flexShrink: 0, marginBottom: 24 }} />

        {/* Soult */}
        <div style={{ flex: 1, padding: "0 22px 24px 20px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "rgba(200,155,60,0.22)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            border: "1px solid rgba(200,155,60,0.4)",
            borderRadius: 100, padding: "4px 10px", marginBottom: 9,
          }}>
            <span style={{ fontSize: 10, color: "#e8c96d", fontWeight: 900 }}>✓</span>
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#e8c96d" }}>With Soult</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.65, color: "rgba(255,255,255,0.95)", margin: 0, letterSpacing: "-0.01em", whiteSpace: "pre-line" }}>{panel.with}</p>
        </div>
      </div>

      {/* Gold line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #C89B3C 30%, #e8c96d 50%, #C89B3C 70%, transparent)",
        opacity: 0.5,
      }} />
    </div>
  );
}

// ── DESKTOP — sticky horizontal scroll ────────────────────────────────────────

function DesktopLayout() {
  const [activePanel, setActivePanel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slotRef      = useRef<HTMLDivElement>(null);
  const rawX         = useMotionValue(0);
  // Tight spring for a snappy lock-in feel
  const smoothX      = useSpring(rawX, { stiffness: 140, damping: 30, restDelta: 0.5 });

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // Snap to whole panel — each panel owns an equal 1/4 of the scroll range
      const idx  = Math.min(PANELS.length - 1, Math.floor(v * PANELS.length));
      const slotW = slotRef.current?.offsetWidth ?? 0;
      setActivePanel(idx);
      rawX.set(-idx * slotW);
    });
  }, [scrollYProgress, rawX]);

  return (
    <div ref={containerRef} style={{ height: `${PANELS.length * 100}vh`, position: "relative" }}>
      <div style={{
        position: "sticky", top: 0, height: "100vh",
        background: "#F6F1E7", overflow: "hidden",
        display: "flex", alignItems: "center",
      }}>
        <div style={{
          width: "100%", maxWidth: 1180, margin: "0 auto",
          padding: "0 52px", display: "flex", gap: 64,
          alignItems: "center", height: "100%",
        }}>

          {/* Left */}
          <div style={{ width: 240, flexShrink: 0 }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ marginBottom: 24 }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ marginBottom: 16 }}>
                  <path d="M14 2.5L3.5 7.5v8C3.5 21.5 8.2 27 14 28.5 19.8 27 24.5 21.5 24.5 15.5v-8Z"
                    fill="rgba(200,155,60,0.12)" stroke="#C89B3C" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M9.5 14.5l3.5 3.5 6-6" stroke="#C89B3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C89B3C", display: "flex", alignItems: "center", gap: 8 }}>
                  Why Soult
                  <span style={{ flex: 1, height: 1, background: "rgba(200,155,60,0.3)", display: "block" }} />
                </div>
              </div>

              <div style={{ marginBottom: 40 }}>
                <div style={{ fontSize: "clamp(13px,1.4vw,16px)", fontWeight: 400, color: "rgba(43,29,22,0.38)", lineHeight: 1.4, marginBottom: 4 }}>Not all storage</div>
                <div style={{ fontSize: "clamp(32px,3.4vw,44px)", fontWeight: 900, color: "#2B1D16", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 4 }}>protects</div>
                <div style={{ fontSize: "clamp(32px,3.4vw,44px)", fontWeight: 900, color: "#C89B3C", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 20 }}>your family.</div>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(43,29,22,0.42)", margin: 0, fontWeight: 400 }}>Only Soult is built<br />for family continuity.</p>
              </div>

              <div style={{ position: "relative", paddingLeft: 32 }}>
                <div style={{ position: "absolute", left: 8, top: 6, bottom: 6, width: 1, background: "rgba(200,155,60,0.18)" }} />
                {PANELS.map((p, i) => (
                  <div key={p.id} style={{ position: "relative", padding: "11px 0", transition: "opacity 0.35s ease" }}>
                    <div style={{
                      position: "absolute", left: -28, top: "50%", transform: "translateY(-50%)",
                      width: activePanel === i ? 10 : 5, height: activePanel === i ? 10 : 5,
                      borderRadius: "50%",
                      background: activePanel === i ? "#C89B3C" : "rgba(200,155,60,0.35)",
                      boxShadow: activePanel === i ? "0 0 10px rgba(200,155,60,0.55)" : "none",
                      transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                    }} />
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: activePanel === i ? "#C89B3C" : "rgba(43,29,22,0.38)", transition: "color 0.3s", flexShrink: 0 }}>{p.number}</span>
                      <span style={{ fontSize: 14, fontWeight: activePanel === i ? 700 : 400, color: activePanel === i ? "#2B1D16" : "rgba(43,29,22,0.55)", letterSpacing: "-0.01em", transition: "all 0.3s ease" }}>{p.theme}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 8, opacity: 0.35 }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2v10M3 8l4 4 4-4" stroke="#2B1D16" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#2B1D16" }}>Scroll to explore</span>
              </div>
            </motion.div>
          </div>

          {/* Right — slide track */}
          <div ref={slotRef} style={{ flex: 1, height: "calc(100vh - 140px)", overflow: "hidden", position: "relative" }}>
            <motion.div style={{ display: "flex", width: `${PANELS.length * 100}%`, height: "100%", x: smoothX }}>
              {PANELS.map((panel) => (
                <div key={panel.id} style={{ width: `${100 / PANELS.length}%`, flexShrink: 0, height: "100%", padding: "16px 8px", boxSizing: "border-box" }}>
                  <PanelCard panel={panel} />
                </div>
              ))}
            </motion.div>

            {/* Progress pills */}
            <div style={{ position: "absolute", bottom: 4, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, alignItems: "center" }}>
              {PANELS.map((_, i) => (
                <div key={i} style={{
                  width: activePanel === i ? 24 : 6, height: 6, borderRadius: 3,
                  background: activePanel === i ? "#C89B3C" : "rgba(43,29,22,0.18)",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── MOBILE — simple vertical stack ───────────────────────────────────────────

function MobileLayout() {
  return (
    <section style={{ background: "#F6F1E7", padding: "72px 20px 80px" }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C89B3C", marginBottom: 14 }}>Why Soult</div>
        <div style={{ fontSize: 13, fontWeight: 400, color: "rgba(43,29,22,0.38)", marginBottom: 2 }}>Not all storage</div>
        <div style={{ fontSize: 36, fontWeight: 900, color: "#2B1D16", letterSpacing: "-0.04em", lineHeight: 1.05 }}>protects</div>
        <div style={{ fontSize: 36, fontWeight: 900, color: "#C89B3C", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 14 }}>your family.</div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(43,29,22,0.42)", margin: 0 }}>Only Soult is built for family continuity.</p>
      </div>

      {/* Stacked panels */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PANELS.map((panel) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 380 }}
          >
            <PanelCard panel={panel} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── TABLET — 2-column grid ────────────────────────────────────────────────────

function TabletLayout() {
  return (
    <section style={{ background: "#F6F1E7", padding: "80px 32px 96px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C89B3C", marginBottom: 14 }}>Why Soult</div>
        <div style={{ fontSize: 14, fontWeight: 400, color: "rgba(43,29,22,0.38)", marginBottom: 2 }}>Not all storage</div>
        <div style={{ fontSize: 40, fontWeight: 900, color: "#2B1D16", letterSpacing: "-0.04em", lineHeight: 1.05 }}>protects</div>
        <div style={{ fontSize: 40, fontWeight: 900, color: "#C89B3C", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 16 }}>your family.</div>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(43,29,22,0.42)", margin: 0 }}>Only Soult is built for family continuity.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {PANELS.map((panel) => (
          <motion.div
            key={panel.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 420 }}
          >
            <PanelCard panel={panel} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── ROOT COMPONENT ────────────────────────────────────────────────────────────

export default function ComparisonTable() {
  const [width, setWidth] = useState(1280);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  if (width < 640)  return <MobileLayout />;
  if (width < 1024) return <TabletLayout />;
  return <DesktopLayout />;
}
