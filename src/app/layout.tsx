import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import AppStrip from "@/components/AppStrip";

const BASE = "https://www.soultdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Soult Digital — Your Family's Secure Life Vault",
    template: "%s | Soult Digital",
  },
  description:
    "Soult is India's secure digital legacy vault. Organise your assets, documents, health wishes, and memories — and pass them on to family with clarity and zero stress.",
  keywords: [
    "digital legacy vault India",
    "estate planning India",
    "family legacy planning",
    "AES-256 secure vault",
    "DPDP compliant",
    "will storage India",
    "nominee management",
    "executor workflow",
  ],
  authors: [{ name: "Soult Digital", url: BASE }],
  creator: "Soult Digital",
  publisher: "Soult Digital",
  alternates: {
    canonical: BASE,
    languages: { "en-IN": BASE, "en": BASE },
  },
  openGraph: {
    title: "Soult Digital — Your Family's Secure Life Vault",
    description:
      "Organise your assets, documents, memories and health wishes in one AES-256 encrypted vault. Built for Indian families. DPDP 2023 compliant.",
    type: "website",
    url: BASE,
    siteName: "Soult Digital",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soult Digital — Your Family's Secure Life Vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soult Digital — Your Family's Secure Life Vault",
    description:
      "India's secure digital legacy vault. Organise assets, documents & memories. Pass them on with clarity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Soult Digital",
  url: BASE,
  logo: `${BASE}/logo.png`,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@soultdigital.com",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Soult Digital",
  description: "India's secure digital legacy vault for organising assets, documents, health wishes, and family memories.",
  url: BASE,
  email: "support@soultdigital.com",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "Digital Legacy Vault",
  priceRange: "Free – ₹1,999/year",
  knowsAbout: [
    "Digital legacy planning",
    "Estate planning India",
    "Will storage",
    "Nominee management",
    "DPDP Act 2023 compliance",
    "AES-256 encryption",
    "Family succession planning",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Soult Digital",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Soult Digital Life Vault",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free forever tier available. Best plan at ₹1,999/year.",
  },
  description:
    "India's secure digital legacy vault for organising assets, documents, health wishes, and memories for your family.",
  url: BASE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <AppStrip />
        <Footer />
      </body>
    </html>
  );
}
