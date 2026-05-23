import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { submitUrlsToGoogle } from "@/lib/google-indexing";

function auth(req: NextRequest) {
  return req.headers.get("x-admin-secret") === process.env.ADMIN_SECRET;
}

export async function GET() {
  const { data, error } = await supabaseAdmin().from("blog_posts").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const now = new Date().toISOString();
  const payload = {
    ...body,
    updated_at: now,
    published_at: body.published ? (body.published_at ?? now) : null,
  };
  const { data, error } = await supabaseAdmin().from("blog_posts").insert(payload).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Auto-submit to Google when published
  if (data?.published && data?.slug) {
    await submitUrlsToGoogle([`/blog/${data.slug}`, "/blog", "/sitemap.xml"]);
  }

  return NextResponse.json(data);
}
