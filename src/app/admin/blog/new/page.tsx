"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SECRET = "soult-admin-2026";

function slugify(str: string) {
  return str.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewBlogPost() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "", slug: "", excerpt: "", content: "",
    cover_image: "", author: "Soult Digital", tags: "", published: false,
  });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");

  function set(key: string, val: string | boolean) {
    setForm(p => ({ ...p, [key]: val }));
    if (key === "title" && !(form.slug)) {
      setForm(p => ({ ...p, title: val as string, slug: slugify(val as string) }));
    }
  }

  async function save(publish: boolean) {
    setSaving(true); setErr("");
    const payload = {
      ...form,
      slug: form.slug || slugify(form.title),
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
      published: publish,
    };
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      const e = await res.json();
      setErr(e.error);
    }
    setSaving(false);
  }

  return (
    <>
      <style>{`
        .anb-page { padding: 40px; max-width: 900px; }
        .anb-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .anb-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .anb-back { font-size: 13px; color: #6b7280; text-decoration: none; }
        .anb-back:hover { color: #1a1a1a; }
        .anb-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px; }
        .anb-field { margin-bottom: 20px; }
        .anb-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .anb-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 10px 14px; font-size: 15px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .anb-input:focus { border-color: #D7B56D; background: #fff; }
        .anb-input.mono { font-family: monospace; font-size: 13px; }
        .anb-textarea { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 10px 14px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; resize: vertical; transition: border-color 0.2s; line-height: 1.7; }
        .anb-textarea:focus { border-color: #D7B56D; background: #fff; }
        .anb-textarea.content { font-family: monospace; font-size: 13px; }
        .anb-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .anb-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }
        .anb-md-info { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 5px; padding: 10px 14px; font-size: 12px; color: #0369a1; margin-bottom: 8px; }
        .anb-actions { display: flex; gap: 10px; margin-top: 24px; justify-content: flex-end; }
        .anb-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 11px 24px; border-radius: 5px; cursor: pointer; border: none; transition: background 0.2s; }
        .anb-btn.primary { background: #301C1A; color: #D7B56D; }
        .anb-btn.primary:hover { background: #3d2320; }
        .anb-btn.outline { background: #f3f4f6; color: #374151; }
        .anb-btn.outline:hover { background: #e5e7eb; }
        .anb-btn.publish { background: #15803d; color: #fff; }
        .anb-btn.publish:hover { background: #166534; }
        .anb-err { font-size: 13px; color: #dc2626; margin-top: 8px; }
        .anb-checkbox-row { display: flex; align-items: center; gap: 8px; }
        .anb-checkbox-row input { accent-color: #D7B56D; width: 16px; height: 16px; }
      `}</style>

      <div className="anb-page">
        <div className="anb-header">
          <div>
            <Link href="/admin/blog" className="anb-back">← Back to Blog</Link>
            <h1 className="anb-h1" style={{ marginTop: 8 }}>New Article</h1>
          </div>
        </div>

        <div className="anb-card">
          <div className="anb-field">
            <label className="anb-label">Title</label>
            <input className="anb-input" value={form.title} onChange={e => set("title", e.target.value)} placeholder="How to organize your family's financial documents" />
          </div>

          <div className="anb-row2">
            <div className="anb-field">
              <label className="anb-label">Slug (URL)</label>
              <input className="anb-input mono" value={form.slug} onChange={e => set("slug", slugify(e.target.value))} placeholder="auto-generated-from-title" />
              <p className="anb-hint">Will appear at /blog/{form.slug || "your-slug"}</p>
            </div>
            <div className="anb-field">
              <label className="anb-label">Author</label>
              <input className="anb-input" value={form.author} onChange={e => set("author", e.target.value)} />
            </div>
          </div>

          <div className="anb-field">
            <label className="anb-label">Excerpt / Summary</label>
            <textarea className="anb-textarea" rows={2} value={form.excerpt} onChange={e => set("excerpt", e.target.value)} placeholder="Brief 1-2 sentence summary shown on blog index cards" />
          </div>

          <div className="anb-field">
            <label className="anb-label">Tags (comma separated)</label>
            <input className="anb-input" value={form.tags} onChange={e => set("tags", e.target.value)} placeholder="Estate Planning, NRI, Digital Legacy" />
          </div>

          <div className="anb-field">
            <label className="anb-label">Cover Image URL (optional)</label>
            <input className="anb-input" value={form.cover_image} onChange={e => set("cover_image", e.target.value)} placeholder="https://..." />
          </div>

          <div className="anb-field">
            <label className="anb-label">Content (Markdown)</label>
            <div className="anb-md-info">
              📝 Write in Markdown. Use # for headings, **bold**, *italic*, - for lists, [link text](url) for links.
            </div>
            <textarea
              className="anb-textarea content"
              rows={20}
              value={form.content}
              onChange={e => set("content", e.target.value)}
              placeholder={`# Introduction\n\nYour article content here...\n\n## Section 1\n\n- Point one\n- Point two\n\n## Conclusion`}
            />
          </div>

          {err && <p className="anb-err">Error: {err}</p>}

          <div className="anb-actions">
            <Link href="/admin/blog" className="anb-btn outline" style={{ textDecoration: "none", display: "inline-block", textAlign: "center" }}>Cancel</Link>
            <button className="anb-btn primary" onClick={() => save(false)} disabled={saving}>Save as Draft</button>
            <button className="anb-btn publish" onClick={() => save(true)} disabled={saving}>{saving ? "Saving…" : "Publish Now"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
