"use client";
import { useState } from "react";
import PricingTabs from "@/components/PricingTabs";
import GiftSection from "@/components/GiftSection";
import ReferSection from "@/components/ReferSection";
import B2BContact from "@/components/B2BContact";

interface Props {
  universalFeatures: React.ReactNode;
}

export default function PricingShell({ universalFeatures }: Props) {
  const [tab, setTab] = useState<"b2c" | "b2b">("b2c");

  return (
    <>
      {/* Dark header zone — continues from the hero gradient */}
      <div style={{
        background: "linear-gradient(150deg, #1E1208 0%, #301C1A 55%, #2B1D16 100%)",
        padding: "40px 0 52px",
        position: "relative",
      }}>
        {/* Subtle bottom fade into light */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 52,
          background: "linear-gradient(to bottom, transparent, #F5F0E6)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>
          <PricingTabs tab={tab} setTab={setTab} dark />
        </div>
      </div>

      {tab === "b2c" && (
        <>
          <GiftSection />
          <ReferSection />
          {universalFeatures}
        </>
      )}

      {tab === "b2b" && (
        <B2BContact />
      )}
    </>
  );
}
