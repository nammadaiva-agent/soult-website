import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relationships & Trusted People — Nominees, Executors | Soult Digital",
  description: "Organise your loved ones, nominees, and executors in one place. Soult ensures the right people have access to what matters when it matters most.",
  alternates: { canonical: "https://www.soultdigital.com/relationships" },
  openGraph: {
    title: "Relationships & Trusted People — Soult Digital",
    description: "Nominees, executors, emergency contacts — all organised and protected in your Soult vault.",
    url: "https://www.soultdigital.com/relationships",
    type: "website",
  },
};

export default function RelationshipsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.soultdigital.com/relationships",
                url: "https://www.soultdigital.com/relationships",
                name: "Relationships & Trusted People — Soult Digital",
                description: "Organise nominees, executors, and trusted people in your Soult digital life vault.",
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
                    { "@type": "ListItem", position: 2, name: "Relationships", item: "https://www.soultdigital.com/relationships" },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a nominee in Soult?",
                    acceptedAnswer: { "@type": "Answer", text: "A nominee in Soult is a trusted person you designate to receive access to your vault and its contents after your passing or incapacitation." },
                  },
                  {
                    "@type": "Question",
                    name: "What is an executor in Soult?",
                    acceptedAnswer: { "@type": "Answer", text: "An executor in Soult is responsible for carrying out your final wishes — distributing assets, notifying contacts, and ensuring your legacy is handled according to your instructions." },
                  },
                  {
                    "@type": "Question",
                    name: "How many trusted people can I add to my Soult vault?",
                    acceptedAnswer: { "@type": "Answer", text: "Depending on your plan, you can add between 5 and unlimited loved ones, and up to 7 executors to your Soult vault." },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
