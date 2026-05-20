import { supabase } from "@/lib/supabase";
import type { Announcement } from "@/lib/supabase";
import Link from "next/link";

async function getAnnouncement(): Promise<Announcement | null> {
  try {
    const { data } = await supabase
      .from("announcements")
      .select("*")
      .eq("active", true)
      .or("expires_at.is.null,expires_at.gt." + new Date().toISOString())
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    return data;
  } catch {
    return null;
  }
}

export default async function AnnouncementBar() {
  const ann = await getAnnouncement();
  if (!ann) return null;

  const bg = ann.bg_color ?? "#D7B56D";
  const fg = ann.text_color ?? "#301C1A";

  return (
    <div style={{ background: bg, color: fg }} className="sd-ann-bar">
      <style>{`
        .sd-ann-bar {
          width: 100%; padding: 10px 24px;
          text-align: center; font-size: 13px; font-weight: 600;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          flex-wrap: wrap; position: relative; z-index: 1000;
        }
        .sd-ann-cta {
          font-size: 11px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: underline;
          opacity: 0.85; transition: opacity 0.2s;
        }
        .sd-ann-cta:hover { opacity: 1; }
      `}</style>
      <span>{ann.message}</span>
      {ann.cta_text && ann.cta_url && (
        <Link href={ann.cta_url} className="sd-ann-cta" style={{ color: fg }}>
          {ann.cta_text} →
        </Link>
      )}
    </div>
  );
}
