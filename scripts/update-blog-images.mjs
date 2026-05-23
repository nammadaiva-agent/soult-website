import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vdhjjxznjbbnawtrajfw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkaGpqeHpuamJibmF3dHJhamZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTI5MDQ4NCwiZXhwIjoyMDk0ODY2NDg0fQ.8BnnUu3FL9CDw8lKzMA6PphN0dBifUbqeSYe_ek9dGQ",
  { auth: { autoRefreshToken: false, persistSession: false } }
);

function pexels(id) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1`;
}

const IMAGES = [
  // Indian family in traditional colorful attire — clearly Indian portrait
  { slug: "how-to-organise-assets-for-family-india",               cover_image: pexels(33763276) },
  // Elderly couple with documents and smartphone at table
  { slug: "what-happens-bank-accounts-after-death-india",           cover_image: pexels(7477702)  },
  // Agent showing documents to elderly man
  { slug: "how-to-write-will-india-complete-guide",                 cover_image: pexels(8441811)  },
  // Couple signing documents with advisor
  { slug: "nominee-vs-executor-difference-india",                   cover_image: pexels(8962686)  },
  // Loving Indian family portrait with newborn — clearly Indian
  { slug: "estate-planning-checklist-indian-families",              cover_image: pexels(30012187) },
  // Couple reviewing financial documents and bills at home
  { slug: "what-to-do-when-family-member-dies-financial-steps-india", cover_image: pexels(6963023) },
  // Newlywed Indian couple holding hands on beach — clearly Indian
  { slug: "nri-estate-planning-india-complete-guide",               cover_image: pexels(20417059) },
  // Cryptocurrency data on laptop screen
  { slug: "digital-assets-after-death-crypto-social-media-india",   cover_image: pexels(5831662)  },
  // Indian man in turban using laptop at home — clearly Indian
  { slug: "store-important-documents-securely-online-india",        cover_image: pexels(4307853)  },
  // Smartphone near monitor and credit card — data/privacy
  { slug: "dpdp-act-2023-personal-data-india",                      cover_image: pexels(6289025)  },
  // Happy Indian family with newborn — clearly Indian
  { slug: "health-directives-medical-wishes-india",                 cover_image: pexels(30012175) },
  // Indian family in traditional clothing — clearly Indian
  { slug: "how-to-talk-to-family-about-legacy-planning",            cover_image: pexels(7685728)  },
  // Women signing documents
  { slug: "insurance-policy-nomination-india",                      cover_image: pexels(16475250) },
  // Gadgets with digital interface on table — vault/security
  { slug: "what-is-digital-legacy-vault",                           cover_image: pexels(4960630)  },
  // Woman signing document in office
  { slug: "how-to-choose-executor-will-india",                      cover_image: pexels(8439702)  },
  // Indian businessman working on laptop — clearly Indian
  { slug: "epf-nomination-update-online-2025",                      cover_image: pexels(4307856)  },
  // Woman holding phone and credit card — online banking
  { slug: "how-to-add-nominee-sbi-savings-account-online",          cover_image: pexels(8939519)  },
  // Woman looking at documents — comparison research
  { slug: "digilocker-vs-soult-digital-documents",                  cover_image: pexels(6963910)  },
  // Couple with financial stress and documents
  { slug: "how-to-claim-epf-after-death-of-employee-india",         cover_image: pexels(6963046)  },
  // Person paying with smartphone — mobile banking
  { slug: "hdfc-bank-fd-nominee-update-online-branch-2025",         cover_image: pexels(7621140)  },
];

console.log("Updating cover images for 20 blog posts...\n");

for (const { slug, cover_image } of IMAGES) {
  const { error } = await supabase
    .from("blog_posts")
    .update({ cover_image })
    .eq("slug", slug);

  if (error) {
    console.error(`❌ ${slug}: ${error.message}`);
  } else {
    console.log(`✅ ${slug}`);
  }
}

console.log("\nDone.");
