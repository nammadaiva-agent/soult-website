import { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

const BASE = "https://www.soultdigital.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug,published_at")
    .eq("published", true);

  const blogUrls: MetadataRoute.Sitemap = (posts ?? []).map((p: { slug: string; published_at: string | null }) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.published_at ? new Date(p.published_at) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE,                              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/pricing`,                 lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/faq`,                     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/security`,                lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/get-started`,             lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/financial`,               lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/relationships`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/physical-health`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/wisdom-spiritual`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,                    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/terms`,                   lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/privacy`,                 lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
    ...blogUrls,
  ];
}
