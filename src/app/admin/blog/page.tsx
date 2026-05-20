"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/supabase";

const SECRET = "soult-admin-2026";

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/admin/blog");
    setPosts(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function togglePublish(post: BlogPost) {
    await fetch(`/api/admin/blog/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ published: !post.published }),
    });
    await load();
  }

  async function del(id: string) {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    setDeleting(id);
    await fetch(`/api/admin/blog/${id}`, {
      method: "DELETE",
      headers: { "x-admin-secret": SECRET },
    });
    await load();
    setDeleting(null);
  }

  function formatDate(iso: string | null) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
  }

  return (
    <>
      <style>{`
        .ab-page { padding: 40px; max-width: 1100px; }
        .ab-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .ab-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .ab-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #301C1A; color: #D7B56D; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; text-decoration: none; display: inline-block; transition: background 0.2s; }
        .ab-btn:hover { background: #3d2320; }
        .ab-btn.secondary { background: #f3f4f6; color: #374151; }
        .ab-btn.secondary:hover { background: #e5e7eb; }
        .ab-btn.danger { background: #fef2f2; color: #dc2626; }
        .ab-btn.success { background: #f0fdf4; color: #15803d; }
        .ab-table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
        .ab-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b7280; padding: 12px 16px; text-align: left; background: #f9fafb; border-bottom: 1px solid #e5e7eb; }
        .ab-table td { font-size: 13px; color: #374151; padding: 12px 16px; border-bottom: 1px solid #f3f4f6; vertical-align: middle; }
        .ab-table tr:last-child td { border-bottom: none; }
        .ab-title { font-weight: 600; color: #1a1a1a; }
        .ab-slug { font-size: 11px; color: #9ca3af; font-family: monospace; }
        .ab-badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; }
        .ab-badge.published { background: #dbeafe; color: #1d4ed8; }
        .ab-badge.draft { background: #fef3c7; color: #b45309; }
        .ab-tags { display: flex; gap: 4px; flex-wrap: wrap; }
        .ab-tag { font-size: 10px; background: #f3f4f6; color: #374151; padding: 2px 6px; border-radius: 2px; }
        .ab-actions { display: flex; gap: 6px; }
        .ab-empty { padding: 48px; text-align: center; }
        .ab-empty h2 { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; }
        .ab-empty p { font-size: 14px; color: #6b7280; margin-bottom: 20px; }
      `}</style>

      <div className="ab-page">
        <div className="ab-header">
          <h1 className="ab-h1">Blog & Articles</h1>
          <Link href="/admin/blog/new" className="ab-btn">+ New Article</Link>
        </div>

        <table className="ab-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Tags</th>
              <th>Author</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr><td colSpan={6}>
                <div className="ab-empty">
                  <h2>No articles yet</h2>
                  <p>Start publishing content to attract and educate your audience.</p>
                  <Link href="/admin/blog/new" className="ab-btn">Write your first article</Link>
                </div>
              </td></tr>
            )}
            {posts.map(post => (
              <tr key={post.id}>
                <td>
                  <div className="ab-title">{post.title}</div>
                  <div className="ab-slug">/blog/{post.slug}</div>
                </td>
                <td><span className={`ab-badge ${post.published ? "published" : "draft"}`}>{post.published ? "Published" : "Draft"}</span></td>
                <td>
                  <div className="ab-tags">
                    {post.tags.slice(0, 3).map((t, i) => <span key={i} className="ab-tag">{t}</span>)}
                  </div>
                </td>
                <td>{post.author}</td>
                <td>{formatDate(post.published_at)}</td>
                <td>
                  <div className="ab-actions">
                    <Link href={`/admin/blog/${post.id}`} className="ab-btn secondary">Edit</Link>
                    <button className={`ab-btn ${post.published ? "secondary" : "success"}`} onClick={() => togglePublish(post)}>
                      {post.published ? "Unpublish" : "Publish"}
                    </button>
                    {post.published && (
                      <Link href={`/blog/${post.slug}`} target="_blank" className="ab-btn secondary">View ↗</Link>
                    )}
                    <button className="ab-btn danger" onClick={() => del(post.id)} disabled={deleting === post.id}>
                      {deleting === post.id ? "…" : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
