"use client";
import { useEffect, useState } from "react";
import type { Announcement } from "@/lib/supabase";

const SECRET = "soult-admin-2026";

const EMPTY: Partial<Announcement> = {
  message: "", cta_text: "", cta_url: "",
  bg_color: "#D7B56D", text_color: "#301C1A",
  expires_at: null, active: true,
};

export default function AdminAnnouncements() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [editing, setEditing] = useState<Partial<Announcement> | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  async function load() {
    const res = await fetch("/api/admin/announcements");
    setItems(await res.json());
  }

  useEffect(() => { load(); }, []);

  async function save() {
    if (!editing) return;
    setSaving(true);
    const method = editing.id ? "PATCH" : "POST";
    const res = await fetch("/api/admin/announcements", {
      method,
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify(editing),
    });
    if (res.ok) { setMsg("Saved ✓"); await load(); }
    else { const e = await res.json(); setMsg("Error: " + e.error); }
    setSaving(false);
  }

  async function del(id: string) {
    if (!confirm("Delete this announcement?")) return;
    await fetch("/api/admin/announcements", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  async function toggle(item: Announcement) {
    await fetch("/api/admin/announcements", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id: item.id, active: !item.active }),
    });
    await load();
  }

  return (
    <>
      <style>{`
        .aa-page { padding: 40px; max-width: 900px; }
        .aa-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .aa-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .aa-info { background: #fef9f0; border: 1px solid #fde68a; border-radius: 6px; padding: 12px 16px; font-size: 13px; color: #92400e; margin-bottom: 24px; }
        .aa-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #301C1A; color: #D7B56D; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; }
        .aa-btn:hover { background: #3d2320; }
        .aa-btn.secondary { background: #f3f4f6; color: #374151; }
        .aa-btn.danger { background: #fef2f2; color: #dc2626; }
        .aa-list { display: flex; flex-direction: column; gap: 12px; }
        .aa-item {
          background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
          padding: 16px 20px; display: flex; align-items: flex-start; gap: 16px;
        }
        .aa-preview {
          flex: 1; padding: 10px 16px; border-radius: 4px;
          font-size: 13px; font-weight: 600;
        }
        .aa-item-meta { font-size: 12px; color: #6b7280; margin-top: 6px; }
        .aa-item-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .aa-badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; }
        .aa-badge.active { background: #dcfce7; color: #15803d; }
        .aa-badge.inactive { background: #f3f4f6; color: #9ca3af; }
        .aa-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; display: flex; align-items: center; justify-content: center; }
        .aa-modal { background: #fff; border-radius: 10px; padding: 32px; width: 560px; max-height: 90vh; overflow-y: auto; }
        .aa-modal-h { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 24px; }
        .aa-field { margin-bottom: 16px; }
        .aa-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .aa-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .aa-input:focus { border-color: #D7B56D; }
        .aa-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .aa-checkbox-row { display: flex; align-items: center; gap: 8px; }
        .aa-checkbox-row input { accent-color: #D7B56D; width: 16px; height: 16px; }
        .aa-modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }
        .aa-msg { font-size: 13px; color: #D7B56D; margin-top: 8px; font-weight: 600; }
        .aa-color-row { display: flex; align-items: center; gap: 10px; }
        .aa-color-row input[type=color] { width: 36px; height: 36px; border: 1px solid #e5e7eb; border-radius: 4px; cursor: pointer; padding: 2px; }
      `}</style>

      <div className="aa-page">
        <div className="aa-header">
          <h1 className="aa-h1">Announcements</h1>
          <button className="aa-btn" onClick={() => { setEditing({ ...EMPTY }); setMsg(""); }}>+ New Announcement</button>
        </div>

        <div className="aa-info">
          💡 The top announcement bar on your website shows the most recent <strong>active</strong> announcement. Only one is shown at a time.
        </div>

        <div className="aa-list">
          {items.length === 0 && <p style={{ color: "#6b7280", fontSize: 14 }}>No announcements yet.</p>}
          {items.map(item => (
            <div key={item.id} className="aa-item">
              <div style={{ flex: 1 }}>
                <div
                  className="aa-preview"
                  style={{ background: item.bg_color ?? "#D7B56D", color: item.text_color ?? "#301C1A" }}
                >
                  {item.message}
                  {item.cta_text && <span style={{ marginLeft: 12, opacity: 0.8, textDecoration: "underline" }}>{item.cta_text} →</span>}
                </div>
                <div className="aa-item-meta">
                  <span className={`aa-badge ${item.active ? "active" : "inactive"}`}>{item.active ? "Live" : "Off"}</span>
                  {item.expires_at && <span style={{ marginLeft: 8 }}>Expires: {new Date(item.expires_at).toLocaleDateString()}</span>}
                </div>
              </div>
              <div className="aa-item-actions">
                <button className="aa-btn secondary" onClick={() => { setEditing({ ...item }); setMsg(""); }}>Edit</button>
                <button className="aa-btn secondary" onClick={() => toggle(item)}>{item.active ? "Disable" : "Enable"}</button>
                <button className="aa-btn danger" onClick={() => del(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {editing && (
          <div className="aa-modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setEditing(null); }}>
            <div className="aa-modal">
              <h2 className="aa-modal-h">{editing.id ? "Edit Announcement" : "New Announcement"}</h2>

              <div className="aa-field">
                <label className="aa-label">Message</label>
                <input className="aa-input" value={editing.message ?? ""} onChange={e => setEditing(p => ({ ...p!, message: e.target.value }))} placeholder="🎉 Early bird pricing — 30% off until Dec 31!" />
              </div>

              <div className="aa-row2">
                <div className="aa-field">
                  <label className="aa-label">CTA Button Text</label>
                  <input className="aa-input" value={editing.cta_text ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_text: e.target.value }))} placeholder="Claim offer" />
                </div>
                <div className="aa-field">
                  <label className="aa-label">CTA URL</label>
                  <input className="aa-input" value={editing.cta_url ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_url: e.target.value }))} placeholder="/pricing" />
                </div>
              </div>

              <div className="aa-row2">
                <div className="aa-field">
                  <label className="aa-label">Background Color</label>
                  <div className="aa-color-row">
                    <input type="color" value={editing.bg_color ?? "#D7B56D"} onChange={e => setEditing(p => ({ ...p!, bg_color: e.target.value }))} />
                    <input className="aa-input" value={editing.bg_color ?? "#D7B56D"} onChange={e => setEditing(p => ({ ...p!, bg_color: e.target.value }))} style={{ flex: 1 }} />
                  </div>
                </div>
                <div className="aa-field">
                  <label className="aa-label">Text Color</label>
                  <div className="aa-color-row">
                    <input type="color" value={editing.text_color ?? "#301C1A"} onChange={e => setEditing(p => ({ ...p!, text_color: e.target.value }))} />
                    <input className="aa-input" value={editing.text_color ?? "#301C1A"} onChange={e => setEditing(p => ({ ...p!, text_color: e.target.value }))} style={{ flex: 1 }} />
                  </div>
                </div>
              </div>

              <div className="aa-field">
                <label className="aa-label">Expires At (optional)</label>
                <input className="aa-input" type="datetime-local" value={editing.expires_at ? editing.expires_at.slice(0, 16) : ""} onChange={e => setEditing(p => ({ ...p!, expires_at: e.target.value ? new Date(e.target.value).toISOString() : null }))} />
              </div>

              <div className="aa-checkbox-row" style={{ marginBottom: 16 }}>
                <input type="checkbox" id="ann-active" checked={!!editing.active} onChange={e => setEditing(p => ({ ...p!, active: e.target.checked }))} />
                <label htmlFor="ann-active" style={{ fontSize: 13, color: "#374151" }}>Active (show on website)</label>
              </div>

              {msg && <p className="aa-msg">{msg}</p>}

              <div className="aa-modal-actions">
                <button className="aa-btn secondary" onClick={() => setEditing(null)}>Cancel</button>
                <button className="aa-btn" onClick={save} disabled={saving}>{saving ? "Saving…" : "Save"}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
