import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: "Soult Digital — Your Family's Secure Life Vault",
  description: "Secure what matters. Preserve what you cherish. Pass it on with clarity. India's most trusted digital legacy planning platform.",
  openGraph: {
    title: "Soult Digital — Your Family's Secure Life Vault",
    description: "Organize your assets, documents, memories and health wishes in one secure vault.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
