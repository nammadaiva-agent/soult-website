"use client";
import { useEffect, useState } from "react";
import type { PricingPlan } from "@/lib/supabase";

const ADMIN_SECRET = "soult-admin-2026";

const EMPTY: Partial<PricingPlan> = {
  name: "", tagline: "", price_monthly: 0, price_yearly: 0, currency: "INR",
  features: [], highlighted: false, badge: "", cta_text: "Get Started",
  cta_url: "/signup", active: true, sort_order: 0,
};

export default function AdminPricing() {
  const [plans, setPlans] = useState<PricingPlan[]>([]);
  const [editing, setEditing] = useState<Partial<PricingPlan> | null>(null);
  const [saving, setSaving] = useState(false);
  const [featuresText, setFeaturesText] = useState("");
  const [msg, setMsg] = useState("");

  async function load() {
    const res = await fetch("/api/admin/pricing");
    setPlans(await res.json());
  }

  useEffect(() => { load(); }, []);

  function openNew() {
    setEditing({ ...EMPTY });
    setFeaturesText("");
    setMsg("");
  }

  function openEdit(plan: PricingPlan) {
    setEditing({ ...plan });
    setFeaturesText(plan.features.join("\n"));
    setMsg("");
  }

  async function save() {
    if (!editing) return;
    setSaving(true);
    const payload = {
      ...editing,
      features: featuresText.split("\n").map(s => s.trim()).filter(Boolean),
    };
    const method = editing.id ? "PATCH" : "POST";
    const res = await fetch("/api/admin/pricing", {
      method,
      headers: { "Content-Type": "application/json", "x-admin-secret": ADMIN_SECRET },
      body: JSON.stringify(payload),
    });
    if (res.ok) { setMsg("Saved ✓"); await load(); }
    else { const e = await res.json(); setMsg("Error: " + e.error); }
    setSaving(false);
  }

  async function deletePlan(id: string) {
    if (!confirm("Delete this plan?")) return;
    await fetch("/api/admin/pricing", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-secret": ADMIN_SECRET },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  async function toggleActive(plan: PricingPlan) {
    await fetch("/api/admin/pricing", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": ADMIN_SECRET },
      body: JSON.stringify({ id: plan.id, active: !plan.active }),
    });
    await load();
  }

  return (
    <>
      <style>{`
        .ap-page { padding: 40px; max-width: 1000px; }
        .ap-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .ap-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .ap-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #301C1A; color: #D7B56D; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; transition: background 0.2s; }
        .ap-btn:hover { background: #3d2320; }
        .ap-btn.secondary { background: #f3f4f6; color: #374151; }
        .ap-btn.secondary:hover { background: #e5e7eb; }
        .ap-btn.danger { background: #fef2f2; color: #dc2626; }
        .ap-btn.danger:hover { background: #fee2e2; }
        .ap-table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
        .ap-table th { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b7280; padding: 12px 16px; text-align: left; background: #f9fafb; border-bottom: 1px solid #e5e7eb; }
        .ap-table td { font-size: 13px; color: #374151; padding: 12px 16px; border-bottom: 1px solid #f3f4f6; }
        .ap-table tr:last-child td { border-bottom: none; }
        .ap-badge { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; }
        .ap-badge.active { background: #dcfce7; color: #15803d; }
        .ap-badge.inactive { background: #f3f4f6; color: #9ca3af; }
        .ap-badge.highlighted { background: #fef3c7; color: #b45309; }
        .ap-actions { display: flex; gap: 6px; }
        .ap-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 100; display: flex; align-items: center; justify-content: center; }
        .ap-modal { background: #fff; border-radius: 10px; padding: 32px; width: 600px; max-height: 90vh; overflow-y: auto; }
        .ap-modal-h { font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 24px; }
        .ap-field { margin-bottom: 16px; }
        .ap-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .ap-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .ap-input:focus { border-color: #D7B56D; }
        .ap-textarea { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 5px; padding: 9px 12px; font-size: 13px; color: #1a1a1a; font-family: monospace; outline: none; resize: vertical; transition: border-color 0.2s; }
        .ap-textarea:focus { border-color: #D7B56D; }
        .ap-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ap-checkbox-row { display: flex; align-items: center; gap: 8px; }
        .ap-checkbox-row input { accent-color: #D7B56D; width: 16px; height: 16px; }
        .ap-checkbox-row label { font-size: 13px; color: #374151; }
        .ap-modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }
        .ap-msg { font-size: 13px; color: #D7B56D; margin-top: 8px; font-weight: 600; }
        .ap-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }
      `}</style>

      <div className="ap-page">
        <div className="ap-header">
          <h1 className="ap-h1">Pricing Plans</h1>
          <button className="ap-btn" onClick={openNew}>+ New Plan</button>
        </div>

        <table className="ap-table">
          <thead>
            <tr>
              <th>Name</th><th>Price / mo</th><th>Status</th><th>Highlighted</th><th>Sort</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td><strong>{plan.name}</strong>{plan.badge && <span className="ap-badge highlighted" style={{ marginLeft: 8 }}>{plan.badge}</span>}</td>
                <td>{plan.price_monthly === 0 ? "Free" : `₹${plan.price_monthly}`}</td>
                <td><span className={`ap-badge ${plan.active ? "active" : "inactive"}`}>{plan.active ? "Active" : "Hidden"}</span></td>
                <td>{plan.highlighted ? "⭐ Yes" : "—"}</td>
                <td>{plan.sort_order}</td>
                <td>
                  <div className="ap-actions">
                    <button className="ap-btn secondary" onClick={() => openEdit(plan)}>Edit</button>
                    <button className="ap-btn secondary" onClick={() => toggleActive(plan)}>{plan.active ? "Hide" : "Show"}</button>
                    <button className="ap-btn danger" onClick={() => deletePlan(plan.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editing && (
          <div className="ap-modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) setEditing(null); }}>
            <div className="ap-modal">
              <h2 className="ap-modal-h">{editing.id ? "Edit Plan" : "New Plan"}</h2>

              <div className="ap-row2">
                <div className="ap-field">
                  <label className="ap-label">Plan Name</label>
                  <input className="ap-input" value={editing.name ?? ""} onChange={e => setEditing(p => ({ ...p!, name: e.target.value }))} placeholder="e.g. Family" />
                </div>
                <div className="ap-field">
                  <label className="ap-label">Badge Text</label>
                  <input className="ap-input" value={editing.badge ?? ""} onChange={e => setEditing(p => ({ ...p!, badge: e.target.value }))} placeholder="e.g. Most Popular" />
                </div>
              </div>

              <div className="ap-field">
                <label className="ap-label">Tagline</label>
                <input className="ap-input" value={editing.tagline ?? ""} onChange={e => setEditing(p => ({ ...p!, tagline: e.target.value }))} placeholder="Short description" />
              </div>

              <div className="ap-row2">
                <div className="ap-field">
                  <label className="ap-label">Price / Month (₹)</label>
                  <input className="ap-input" type="number" value={editing.price_monthly ?? 0} onChange={e => setEditing(p => ({ ...p!, price_monthly: +e.target.value }))} />
                </div>
                <div className="ap-field">
                  <label className="ap-label">Price / Year (₹)</label>
                  <input className="ap-input" type="number" value={editing.price_yearly ?? 0} onChange={e => setEditing(p => ({ ...p!, price_yearly: +e.target.value }))} />
                </div>
              </div>

              <div className="ap-field">
                <label className="ap-label">Features (one per line)</label>
                <textarea className="ap-textarea" rows={6} value={featuresText} onChange={e => setFeaturesText(e.target.value)} placeholder={"Up to 10 documents\n5 nominees\nMobile app access"} />
                <p className="ap-hint">Each line becomes one feature bullet on the pricing card.</p>
              </div>

              <div className="ap-row2">
                <div className="ap-field">
                  <label className="ap-label">CTA Button Text</label>
                  <input className="ap-input" value={editing.cta_text ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_text: e.target.value }))} />
                </div>
                <div className="ap-field">
                  <label className="ap-label">CTA URL</label>
                  <input className="ap-input" value={editing.cta_url ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_url: e.target.value }))} />
                </div>
              </div>

              <div className="ap-row2">
                <div className="ap-field">
                  <label className="ap-label">Sort Order</label>
                  <input className="ap-input" type="number" value={editing.sort_order ?? 0} onChange={e => setEditing(p => ({ ...p!, sort_order: +e.target.value }))} />
                </div>
                <div className="ap-field" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 22 }}>
                  <div className="ap-checkbox-row">
                    <input type="checkbox" id="highlighted" checked={!!editing.highlighted} onChange={e => setEditing(p => ({ ...p!, highlighted: e.target.checked }))} />
                    <label htmlFor="highlighted">Highlighted (featured card)</label>
                  </div>
                  <div className="ap-checkbox-row">
                    <input type="checkbox" id="active" checked={!!editing.active} onChange={e => setEditing(p => ({ ...p!, active: e.target.checked }))} />
                    <label htmlFor="active">Active (visible on site)</label>
                  </div>
                </div>
              </div>

              {msg && <p className="ap-msg">{msg}</p>}

              <div className="ap-modal-actions">
                <button className="ap-btn secondary" onClick={() => setEditing(null)}>Cancel</button>
                <button className="ap-btn" onClick={save} disabled={saving}>{saving ? "Saving…" : "Save Plan"}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
