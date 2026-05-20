"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import type { BlogPost } from "@/lib/supabase";

const SECRET = "soult-admin-2026";

function slugify(str: string) {
  return str.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function EditBlogPost() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "",
    cover_image: "", author: "", tags: "", published: false,
  });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/admin/blog").then(r => r.json()).then((posts: BlogPost[]) => {
      const p = posts.find(x => x.id === id);
      if (p) {
        setPost(p);
        setForm({
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt ?? "",
          content: p.content,
          cover_image: p.cover_image ?? "",
          author: p.author ?? "Soult Digital",
          tags: p.tags.join(", "),
          published: p.published,
        });
      }
    });
  }, [id]);

  function set(key: string, val: string | boolean) {
    setForm(p => ({ ...p, [key]: val }));
  }

  async function save(publish?: boolean) {
    setSaving(true); setErr(""); setSaved(false);
    const payload = {
      ...form,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
      published: publish !== undefined ? publish : form.published,
    };
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      setSaved(true);
      if (publish !== undefined) router.push("/admin/blog");
    } else {
      const e = await res.json();
      setErr(e.error);
    }
    setSaving(false);
  }

  if (!post) return <div style={{ padding: 40, color: "#6b7280" }}>Loading…</div>;

  return (
    <>
      <style>{`
        .eb-page { padding: 40px; max-width: 900px; }
        .eb-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .eb-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .eb-back { font-size: 13px; color: #6b7280; text-decoration: none; display: block; margin-bottom: 6px; }
        .eb-status { font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 3px; }
        .eb-status.published { background: #dbeafe; color: #1d4ed8; }
        .eb-status.draft { background: #fef3c7; color: #b45309; }
        .eb-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px; }
        .eb-field { margin-bottom: 20px; }
        .eb-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .eb-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 10px 14px; font-size: 15px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .eb-input:focus { border-color: #D7B56D; background: #fff; }
        .eb-input.mono { font-family: monospace; font-size: 13px; }
        .eb-textarea { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 10px 14px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; resize: vertical; transition: border-color 0.2s; line-height: 1.7; }
        .eb-textarea:focus { border-color: #D7B56D; background: #fff; }
        .eb-textarea.content { font-family: monospace; font-size: 13px; }
        .eb-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .eb-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }
        .eb-actions { display: flex; gap: 10px; margin-top: 24px; justify-content: flex-end; flex-wrap: wrap; }
        .eb-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 11px 20px; border-radius: 5px; cursor: pointer; border: none; transition: background 0.2s; text-decoration: none; display: inline-block; text-align: center; }
        .eb-btn.primary { background: #301C1A; color: #D7B56D; }
        .eb-btn.outline { background: #f3f4f6; color: #374151; }
        .eb-btn.publish { background: #15803d; color: #fff; }
        .eb-btn.unpublish { background: #f97316; color: #fff; }
        .eb-err { font-size: 13px; color: #dc2626; margin-top: 8px; }
        .eb-saved { font-size: 13px; color: #15803d; margin-top: 8px; font-weight: 600; }
        .eb-view { font-size: 12px; color: #D7B56D; text-decoration: none; }
        .eb-view:hover { text-decoration: underline; }
      `}</style>

      <div className="eb-page">
        <div className="eb-header">
          <div>
            <Link href="/admin/blog" className="eb-back">← Back to Blog</Link>
            <h1 className="eb-h1">Edit Article</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className={`eb-status ${form.published ? "published" : "draft"}`}>{form.published ? "Published" : "Draft"}</span>
            {form.published && <Link href={`/blog/${form.slug}`} target="_blank" className="eb-view">View live ↗</Link>}
          </div>
        </div>

        <div className="eb-card">
          <div className="eb-field">
            <label className="eb-label">Title</label>
            <input className="eb-input" value={form.title} onChange={e => set("title", e.target.value)} />
          </div>

          <div className="eb-row2">
            <div className="eb-field">
              <label className="eb-label">Slug (URL)</label>
              <input className="eb-input mono" value={form.slug} onChange={e => set("slug", slugify(e.target.value))} />
              <p className="eb-hint">/blog/{form.slug}</p>
            </div>
            <div className="eb-field">
              <label className="eb-label">Author</label>
              <input className="eb-input" value={form.author} onChange={e => set("author", e.target.value)} />
            </div>
          </div>

          <div className="eb-field">
            <label className="eb-label">Excerpt</label>
            <textarea className="eb-textarea" rows={2} value={form.excerpt} onChange={e => set("excerpt", e.target.value)} />
          </div>

          <div className="eb-field">
            <label className="eb-label">Tags (comma separated)</label>
            <input className="eb-input" value={form.tags} onChange={e => set("tags", e.target.value)} />
          </div>

          <div className="eb-field">
            <label className="eb-label">Cover Image URL</label>
            <input className="eb-input" value={form.cover_image} onChange={e => set("cover_image", e.target.value)} placeholder="https://..." />
          </div>

          <div className="eb-field">
            <label className="eb-label">Content (Markdown)</label>
            <textarea className="eb-textarea content" rows={24} value={form.content} onChange={e => set("content", e.target.value)} />
          </div>

          {err && <p className="eb-err">Error: {err}</p>}
          {saved && <p className="eb-saved">Changes saved ✓</p>}

          <div className="eb-actions">
            <Link href="/admin/blog" className="eb-btn outline">Cancel</Link>
            <button className="eb-btn primary" onClick={() => save()} disabled={saving}>{saving ? "Saving…" : "Save Draft"}</button>
            {form.published
              ? <button className="eb-btn unpublish" onClick={() => save(false)} disabled={saving}>Unpublish</button>
              : <button className="eb-btn publish" onClick={() => save(true)} disabled={saving}>Publish</button>
            }
          </div>
        </div>
      </div>
    </>
  );
}
