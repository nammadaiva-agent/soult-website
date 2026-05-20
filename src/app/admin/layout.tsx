import type { Metadata } from "next";
import AdminSidebar from "@/components/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin — Soult Digital",
  robots: { index: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8f7f5", fontFamily: "'Outfit', sans-serif" }}>
      <AdminSidebar />
      <div style={{ flex: 1, overflow: "auto" }}>
        {children}
      </div>
    </div>
  );
}
