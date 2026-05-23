/**
 * POST /api/admin/indexing
 * Bulk-submits all published blog posts + static pages to Google Indexing API.
 * Call this once after setup, then it runs automatically on every publish/update.
 */
import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { submitUrlsToGoogle } from "@/lib/google-indexing";

function auth(req: NextRequest) {
  return req.headers.get("x-admin-secret") === process.env.ADMIN_SECRET;
}

const STATIC_PAGES = ["/", "/pricing", "/blog", "/faq"];

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Get all published blog slugs
  const { data: posts } = await supabaseAdmin()
    .from("blog_posts")
    .select("slug")
    .eq("published", true);

  const blogUrls = (posts ?? []).map((p: { slug: string }) => `/blog/${p.slug}`);
  const allUrls = [...STATIC_PAGES, ...blogUrls];

  await submitUrlsToGoogle(allUrls);

  return NextResponse.json({
    submitted: allUrls.length,
    urls: allUrls,
  });
}
