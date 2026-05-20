"use client";
import { useEffect, useState } from "react";
import type { Promotion } from "@/lib/supabase";

const SECRET = "soult-admin-2026";
const POSITIONS = ["hero", "pricing", "blog", "global"] as const;

const EMPTY: Partial<Promotion> = {
  title: "", body: "", badge: "", cta_text: "", cta_url: "",
  image_url: "", display_position: "hero", active: true,
};

export default function AdminPromotions() {
  const [items, setItems] = useState<Promotion[]>([]);
  const [editing, setEditing] = useState<Partial<Promotion> | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  async function load() {
    const res = await fetch("/api/admin/promotions");
    setItems(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function save() {
    setSaving(true);
    const method = editing?.id ? "PATCH" : "POST";
    const res = await fetch("/api/admin/promotions", {
      method,
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify(editing),
    });
    if (res.ok) { setMsg("Saved ✓"); await load(); }
    else { const e = await res.json(); setMsg("Error: " + e.error); }
    setSaving(false);
  }

  async function del(id: string) {
    if (!confirm("Delete this promotion?")) return;
    await fetch("/api/admin/promotions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  async function toggle(item: Promotion) {
    await fetch("/api/admin/promotions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id: item.id, active: !item.active }),
    });
    await load();
  }

  return (
    <>
      <style>{`
        .apm-page { padding: 40px; max-width: 1000px; }
        .apm-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .apm-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .apm-info { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; padding: 12px 16px; font-size: 13px; color: #0369a1; margin-bottom: 24px; }
        .apm-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #301C1A; color: #D7B56D; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; }
        .apm-btn.secondary { background: #f3f4f6; color: #374151; }
        .apm-btn.danger { background: #fef2f2; color: #dc2626; }
        .apm-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
        .apm-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; }
        .apm-card-badge { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: #fef3c7; color: #b45309; padding: 3px 8px; margin-bottom: 8px; display: inline-block; }
        .apm-card-title { font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 6px; }
        .apm-card-body { font-size: 13px; color: #6b7280; margin-bottom: 12px; }
        .apm-card-pos { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #ede9fe; color: #7c3aed; padding: 2px 8px; display: inline-block; border-radius: 3px; }
        .apm-card-status { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; margin-left: 6px; }
        .apm-card-status.active { background: #dcfce7; color: #15803d; }
        .apm-card-status.inactive { background: #f3f4f6; color: #9ca3af; }
        .apm-card-actions { display: flex; gap: 6px; margin-top: 14px; }
        .apm-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; display: flex; align-items: center; justify-content: center; }
        .apm-modal { background: #fff; border-radius: 10px; padding: 32px; width: 580px; max-height: 90vh; overflow-y: auto; }
        .apm-modal-h { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 24px; }
        .apm-field { margin-bottom: 16px; }
        .apm-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .apm-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .apm-input:focus { border-color: #D7B56D; }
        .apm-textarea { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; resize: vertical; transition: border-color 0.2s; }
        .apm-textarea:focus { border-color: #D7B56D; }
        .apm-select { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; }
        .apm-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .apm-checkbox-row { display: flex; align-items: center; gap: 8px; }
        .apm-checkbox-row input { accent-color: #D7B56D; width: 16px; height: 16px; }
        .apm-modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }
        .apm-msg { font-size: 13px; color: #D7B56D; margin-top: 8px; font-weight: 600; }
        @media (max-width: 640px) { .apm-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="apm-page">
        <div className="apm-header">
          <h1 className="apm-h1">Promotions</h1>
          <button className="apm-btn" onClick={() => { setEditing({ ...EMPTY }); setMsg(""); }}>+ New Promotion</button>
        </div>

        <div className="apm-info">
          💡 Promotions appear in different positions on your website — <strong>hero</strong> (homepage strip), <strong>pricing</strong> (pricing page callout), <strong>blog</strong> (blog sidebar), or <strong>global</strong> (all pages).
        </div>

        <div className="apm-grid">
          {items.length === 0 && <p style={{ color: "#6b7280", fontSize: 14 }}>No promotions yet.</p>}
          {items.map(item => (
            <div key={item.id} className="apm-card">
              {item.badge && <div className="apm-card-badge">{item.badge}</div>}
              <h3 className="apm-card-title">{item.title}</h3>
              {item.body && <p className="apm-card-body">{item.body}</p>}
              <div>
                <span className="apm-card-pos">{item.display_position}</span>
                <span className={`apm-card-status ${item.active ? "active" : "inactive"}`}>{item.active ? "Active" : "Off"}</span>
              </div>
              <div className="apm-card-actions">
                <button className="apm-btn secondary" onClick={() => { setEditing({ ...item }); setMsg(""); }}>Edit</button>
                <button className="apm-btn secondary" onClick={() => toggle(item)}>{item.active ? "Disable" : "Enable"}</button>
                <button className="apm-btn danger" onClick={() => del(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        {editing && (
          <div className="apm-modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setEditing(null); }}>
            <div className="apm-modal">
              <h2 className="apm-modal-h">{editing.id ? "Edit Promotion" : "New Promotion"}</h2>

              <div className="apm-field">
                <label className="apm-label">Title</label>
                <input className="apm-input" value={editing.title ?? ""} onChange={e => setEditing(p => ({ ...p!, title: e.target.value }))} placeholder="30% Early Bird Offer" />
              </div>

              <div className="apm-field">
                <label className="apm-label">Body / Description</label>
                <textarea className="apm-textarea" rows={3} value={editing.body ?? ""} onChange={e => setEditing(p => ({ ...p!, body: e.target.value }))} placeholder="Sign up before December 31 and get 30% off your first year." />
              </div>

              <div className="apm-row2">
                <div className="apm-field">
                  <label className="apm-label">Badge Text</label>
                  <input className="apm-input" value={editing.badge ?? ""} onChange={e => setEditing(p => ({ ...p!, badge: e.target.value }))} placeholder="Limited Time" />
                </div>
                <div className="apm-field">
                  <label className="apm-label">Display Position</label>
                  <select className="apm-select" value={editing.display_position ?? "hero"} onChange={e => setEditing(p => ({ ...p!, display_position: e.target.value as Promotion["display_position"] }))}>
                    {POSITIONS.map(pos => <option key={pos} value={pos}>{pos}</option>)}
                  </select>
                </div>
              </div>

              <div className="apm-row2">
                <div className="apm-field">
                  <label className="apm-label">CTA Text</label>
                  <input className="apm-input" value={editing.cta_text ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_text: e.target.value }))} placeholder="Claim offer" />
                </div>
                <div className="apm-field">
                  <label className="apm-label">CTA URL</label>
                  <input className="apm-input" value={editing.cta_url ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_url: e.target.value }))} placeholder="/pricing" />
                </div>
              </div>

              <div className="apm-field">
                <label className="apm-label">Image URL (optional)</label>
                <input className="apm-input" value={editing.image_url ?? ""} onChange={e => setEditing(p => ({ ...p!, image_url: e.target.value }))} placeholder="https://..." />
              </div>

              <div className="apm-checkbox-row" style={{ marginBottom: 16 }}>
                <input type="checkbox" id="promo-active" checked={!!editing.active} onChange={e => setEditing(p => ({ ...p!, active: e.target.checked }))} />
                <label htmlFor="promo-active" style={{ fontSize: 13, color: "#374151" }}>Active</label>
              </div>

              {msg && <p className="apm-msg">{msg}</p>}

              <div className="apm-modal-actions">
                <button className="apm-btn secondary" onClick={() => setEditing(null)}>Cancel</button>
                <button className="apm-btn" onClick={save} disabled={saving}>{saving ? "Saving…" : "Save"}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
