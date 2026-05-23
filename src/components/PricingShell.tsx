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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <PricingTabs tab={tab} setTab={setTab} />
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
