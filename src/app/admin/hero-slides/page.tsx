"use client";
import { useEffect, useState, useRef } from "react";
import type { HeroSlide } from "@/lib/supabase";

const SECRET = "soult-admin-2026";

const POSITIONS = [
  ["left top",    "center top",    "right top"],
  ["left center", "center center", "right center"],
  ["left bottom", "center bottom", "right bottom"],
];

const EMPTY: Partial<HeroSlide> = {
  image_url: "",
  image_position: "center 30%",
  badge: "",
  headline: "",
  sub_text: "",
  cta_label: "Get Started Free",
  cta_url: "https://app.soultdigital.com/signup",
  ghost_label: "Learn More",
  ghost_url: "#features",
  sort_order: 0,
  active: true,
};

export default function AdminHeroSlides() {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [editing, setEditing] = useState<Partial<HeroSlide> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function load() {
    const res = await fetch("/api/admin/hero-slides");
    const data = await res.json();
    setSlides(Array.isArray(data) ? data : []);
  }
  useEffect(() => { load(); }, []);

  async function save() {
    if (!editing) return;
    setSaving(true); setMsg("");
    const method = editing.id ? "PATCH" : "POST";
    const res = await fetch("/api/admin/hero-slides", {
      method,
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify(editing),
    });
    if (res.ok) { setMsg("Saved ✓"); await load(); }
    else { const e = await res.json(); setMsg("Error: " + e.error); }
    setSaving(false);
  }

  async function del(id: string) {
    if (!confirm("Delete this slide?")) return;
    await fetch("/api/admin/hero-slides", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id }),
    });
    await load();
  }

  async function toggle(slide: HeroSlide) {
    await fetch("/api/admin/hero-slides", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id: slide.id, active: !slide.active }),
    });
    await load();
  }

  async function moveOrder(slide: HeroSlide, dir: -1 | 1) {
    await fetch("/api/admin/hero-slides", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-secret": SECRET },
      body: JSON.stringify({ id: slide.id, sort_order: slide.sort_order + dir }),
    });
    await load();
  }

  async function uploadFile(file: File) {
    setUploading(true); setMsg("");
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "x-admin-secret": SECRET },
      body: form,
    });
    const data = await res.json();
    if (res.ok) {
      setEditing(p => ({ ...p!, image_url: data.url }));
    } else {
      setMsg("Upload failed: " + data.error);
    }
    setUploading(false);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault(); setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  }

  return (
    <>
      <style>{`
        .hs-page { padding: 40px; max-width: 1100px; }
        .hs-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
        .hs-h1 { font-size: 26px; font-weight: 800; color: #1a1a1a; }
        .hs-info { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; padding: 12px 16px; font-size: 13px; color: #0369a1; margin-bottom: 28px; line-height: 1.6; }
        .hs-btn { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: #301C1A; color: #D7B56D; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px; transition: background 0.2s; }
        .hs-btn:hover { background: #3d2320; }
        .hs-btn.secondary { background: #f3f4f6; color: #374151; }
        .hs-btn.secondary:hover { background: #e5e7eb; }
        .hs-btn.danger { background: #fef2f2; color: #dc2626; }
        .hs-btn.danger:hover { background: #fee2e2; }
        .hs-btn.icon { padding: 6px 10px; font-size: 14px; }

        /* Slide cards grid */
        .hs-grid { display: flex; flex-direction: column; gap: 14px; }
        .hs-card {
          background: #fff; border: 1px solid #e5e7eb; border-radius: 10px;
          overflow: hidden; display: flex; gap: 0;
        }
        .hs-card.inactive { opacity: 0.55; }

        /* Image thumb */
        .hs-thumb {
          width: 200px; flex-shrink: 0;
          background: #f3f0eb; display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden; min-height: 140px;
        }
        .hs-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .hs-thumb-placeholder { font-size: 36px; opacity: 0.3; }
        .hs-thumb-overlay {
          position: absolute; inset: 0; background: rgba(48,28,26,0.6);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s; cursor: pointer;
        }
        .hs-thumb:hover .hs-thumb-overlay { opacity: 1; }
        .hs-thumb-overlay span { color: #fff; font-size: 12px; font-weight: 700; }
        .hs-sort-num {
          position: absolute; top: 8px; left: 8px;
          background: #301C1A; color: #D7B56D;
          font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 3px;
        }

        /* Card body */
        .hs-card-body { flex: 1; padding: 18px 20px; min-width: 0; }
        .hs-card-badge { font-size: 10px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #D7B56D; margin-bottom: 6px; }
        .hs-card-headline { font-size: 17px; font-weight: 800; color: #1a1a1a; margin-bottom: 5px; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .hs-card-sub { font-size: 12px; color: #6b7280; line-height: 1.5; margin-bottom: 10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .hs-card-ctas { display: flex; gap: 8px; flex-wrap: wrap; }
        .hs-cta-pill { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; padding: 3px 10px; border-radius: 20px; }
        .hs-cta-pill.primary { background: #fef3c7; color: #b45309; }
        .hs-cta-pill.ghost { background: #f3f4f6; color: #374151; }

        /* Card actions */
        .hs-card-actions {
          flex-shrink: 0; padding: 18px 16px;
          display: flex; flex-direction: column; gap: 6px;
          border-left: 1px solid #f3f4f6; align-items: stretch; min-width: 100px;
        }
        .hs-status { font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 3px; text-align: center; }
        .hs-status.active { background: #dcfce7; color: #15803d; }
        .hs-status.inactive { background: #f3f4f6; color: #9ca3af; }
        .hs-order-btns { display: flex; gap: 4px; }

        /* Empty state */
        .hs-empty { background: #fff; border: 2px dashed #e5e7eb; border-radius: 10px; padding: 48px; text-align: center; }
        .hs-empty h3 { font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 8px; }
        .hs-empty p { font-size: 13px; color: #6b7280; margin-bottom: 20px; }

        /* Modal */
        .hs-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .hs-modal { background: #fff; border-radius: 12px; padding: 32px; width: 640px; max-height: 92vh; overflow-y: auto; }
        .hs-modal-h { font-size: 20px; font-weight: 800; color: #1a1a1a; margin-bottom: 24px; }
        .hs-field { margin-bottom: 18px; }
        .hs-label { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #374151; display: block; margin-bottom: 5px; }
        .hs-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }
        .hs-input { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px 14px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; transition: border-color 0.2s; }
        .hs-input:focus { border-color: #D7B56D; background: #fff; }
        .hs-textarea { width: 100%; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px 14px; font-size: 14px; color: #1a1a1a; font-family: inherit; outline: none; resize: vertical; transition: border-color 0.2s; line-height: 1.6; }
        .hs-textarea:focus { border-color: #D7B56D; background: #fff; }
        .hs-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .hs-section-label { font-size: 10px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #D7B56D; margin: 24px 0 14px; padding-bottom: 8px; border-bottom: 1px solid #f0ebe3; }
        .hs-img-preview { width: 100%; height: 160px; object-fit: cover; border-radius: 6px; margin-top: 8px; border: 1px solid #e5e7eb; }
        .hs-upload-zone {
          border: 2px dashed #e5e7eb; border-radius: 8px;
          padding: 28px 20px; text-align: center; cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          background: #f9fafb; position: relative;
        }
        .hs-upload-zone:hover, .hs-upload-zone.dragover { border-color: #D7B56D; background: #fefdf8; }
        .hs-upload-icon { font-size: 28px; margin-bottom: 8px; }
        .hs-upload-text { font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 4px; }
        .hs-upload-hint { font-size: 11px; color: #9ca3af; }
        .hs-upload-actions { display: flex; gap: 10px; margin-top: 12px; align-items: center; justify-content: center; }
        .hs-upload-or { font-size: 11px; color: #9ca3af; }
        .hs-img-remove {
          position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6);
          color: #fff; border: none; border-radius: 4px; padding: 4px 8px;
          font-size: 11px; cursor: pointer; font-weight: 600;
        }
        .hs-focal-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;
          width: 96px; margin-top: 10px;
        }
        .hs-focal-btn {
          width: 28px; height: 28px; border-radius: 4px;
          border: 1.5px solid #e5e7eb; background: #f9fafb;
          cursor: pointer; transition: all 0.15s;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #9ca3af;
        }
        .hs-focal-btn:hover { border-color: #D7B56D; background: #fefdf8; }
        .hs-focal-btn.active { border-color: #D7B56D; background: #D7B56D; color: #fff; }
        .hs-focal-row { display: flex; align-items: center; gap: 16px; margin-top: 10px; }
        .hs-focal-label { font-size: 11px; color: #6b7280; }
        .hs-checkbox-row { display: flex; align-items: center; gap: 8px; }
        .hs-checkbox-row input { accent-color: #D7B56D; width: 16px; height: 16px; }
        .hs-modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 24px; }
        .hs-msg { font-size: 13px; color: #D7B56D; margin-top: 8px; font-weight: 600; }

        /* Full preview overlay */
        .hs-preview-overlay {
          position: fixed; inset: 0; background: rgba(48,28,26,0.97); z-index: 200;
          display: flex; align-items: center; justify-content: center; cursor: pointer;
        }
        .hs-preview-overlay img { max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 8px; }
        .hs-preview-close { position: absolute; top: 24px; right: 24px; color: #fff; font-size: 28px; cursor: pointer; }

        @media (max-width: 640px) {
          .hs-page { padding: 24px 20px; }
          .hs-thumb { width: 100px; min-height: 100px; }
          .hs-row2 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="hs-page">
        <div className="hs-header">
          <div>
            <h1 className="hs-h1">Hero Slides</h1>
            <p style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>{slides.length} slide{slides.length !== 1 ? "s" : ""} · {slides.filter(s => s.active).length} active</p>
          </div>
          <button className="hs-btn" onClick={() => { setEditing({ ...EMPTY, sort_order: slides.length }); setMsg(""); }}>
            + Add Slide
          </button>
        </div>

        <div className="hs-info">
          💡 Each slide appears in the hero carousel on your homepage. Upload a background photo, write the headline and sub-text, set your CTA buttons, then toggle it active. Drag or use the ↑↓ arrows to reorder slides.
        </div>

        <div className="hs-grid">
          {slides.length === 0 && (
            <div className="hs-empty">
              <h3>No slides yet</h3>
              <p>Add your first hero slide — give it a background image and a message that resonates with your visitors.</p>
              <button className="hs-btn" onClick={() => { setEditing({ ...EMPTY }); setMsg(""); }}>Add First Slide</button>
            </div>
          )}

          {slides.map((slide, idx) => (
            <div key={slide.id} className={`hs-card${!slide.active ? " inactive" : ""}`}>
              {/* Thumbnail */}
              <div className="hs-thumb">
                <span className="hs-sort-num">{idx + 1}</span>
                {slide.image_url
                  ? <>
                      <img src={slide.image_url} alt={slide.headline} />
                      <div className="hs-thumb-overlay" onClick={() => setPreview(slide.image_url)}>
                        <span>View image</span>
                      </div>
                    </>
                  : <span className="hs-thumb-placeholder">🖼️</span>
                }
              </div>

              {/* Content */}
              <div className="hs-card-body">
                {slide.badge && <div className="hs-card-badge">{slide.badge}</div>}
                <div className="hs-card-headline">{slide.headline}</div>
                {slide.sub_text && <p className="hs-card-sub">{slide.sub_text}</p>}
                <div className="hs-card-ctas">
                  {slide.cta_label && <span className="hs-cta-pill primary">{slide.cta_label}</span>}
                  {slide.ghost_label && <span className="hs-cta-pill ghost">{slide.ghost_label}</span>}
                </div>
              </div>

              {/* Actions */}
              <div className="hs-card-actions">
                <span className={`hs-status ${slide.active ? "active" : "inactive"}`}>{slide.active ? "Active" : "Hidden"}</span>
                <button className="hs-btn secondary" style={{ fontSize: 11, padding: "6px 10px" }} onClick={() => { setEditing({ ...slide }); setMsg(""); }}>Edit</button>
                <button className="hs-btn secondary" style={{ fontSize: 11, padding: "6px 10px" }} onClick={() => toggle(slide)}>{slide.active ? "Disable" : "Enable"}</button>
                <div className="hs-order-btns">
                  <button className="hs-btn secondary icon" onClick={() => moveOrder(slide, -1)} disabled={idx === 0} title="Move up">↑</button>
                  <button className="hs-btn secondary icon" onClick={() => moveOrder(slide, 1)} disabled={idx === slides.length - 1} title="Move down">↓</button>
                </div>
                <button className="hs-btn danger" style={{ fontSize: 11, padding: "6px 10px" }} onClick={() => del(slide.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit / New modal */}
      {editing && (
        <div className="hs-modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setEditing(null); }}>
          <div className="hs-modal">
            <h2 className="hs-modal-h">{editing.id ? "Edit Slide" : "New Slide"}</h2>

            {/* Image */}
            <div className="hs-section-label">Background Image</div>
            <div className="hs-field">
              {editing.image_url ? (
                <div style={{ position: "relative" }}>
                  <img src={editing.image_url} alt="Preview" className="hs-img-preview" />
                  <button className="hs-img-remove" onClick={() => setEditing(p => ({ ...p!, image_url: "" }))}>✕ Remove</button>
                </div>
              ) : (
                <div
                  className={`hs-upload-zone${dragOver ? " dragover" : ""}`}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="hs-upload-icon">🖼️</div>
                  <div className="hs-upload-text">{uploading ? "Uploading…" : "Drop image here or click to upload"}</div>
                  <div className="hs-upload-hint">JPG, PNG, WEBP · Max 10 MB · Recommended 1920×1080px</div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                    style={{ display: "none" }}
                    onChange={handleFileInput}
                  />
                </div>
              )}
              {!editing.image_url && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 0 6px" }}>
                    <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                    <span style={{ fontSize: 11, color: "#9ca3af" }}>or paste a URL</span>
                    <div style={{ flex: 1, height: 1, background: "#e5e7eb" }} />
                  </div>
                  <input
                    className="hs-input"
                    value={editing.image_url ?? ""}
                    onChange={e => setEditing(p => ({ ...p!, image_url: e.target.value }))}
                    placeholder="https://images.unsplash.com/photo-…"
                  />
                </>
              )}
            </div>

            {/* Focal point */}
            {editing.image_url && (
              <div className="hs-field">
                <label className="hs-label">Image Focal Point</label>
                <div className="hs-focal-row">
                  <div className="hs-focal-grid">
                    {POSITIONS.map((row, ri) => row.map((pos, ci) => (
                      <button
                        key={pos}
                        title={pos}
                        className={`hs-focal-btn${editing.image_position === pos ? " active" : ""}`}
                        onClick={() => setEditing(p => ({ ...p!, image_position: pos }))}
                      >
                        {ri === 0 && ci === 0 ? "↖" : ri === 0 && ci === 1 ? "↑" : ri === 0 && ci === 2 ? "↗" :
                         ri === 1 && ci === 0 ? "←" : ri === 1 && ci === 1 ? "·" : ri === 1 && ci === 2 ? "→" :
                         ri === 2 && ci === 0 ? "↙" : ri === 2 && ci === 1 ? "↓" : "↘"}
                      </button>
                    )))}
                  </div>
                  <div>
                    <span className="hs-focal-label">Click a position to move<br />the image focal point</span>
                  </div>
                </div>
                <p className="hs-hint">Use this to ensure the subject (face/person) is visible and not cropped.</p>
              </div>
            )}

            {/* Content */}
            <div className="hs-section-label">Slide Content</div>

            <div className="hs-field">
              <label className="hs-label">Badge / Category Label</label>
              <input
                className="hs-input"
                value={editing.badge ?? ""}
                onChange={e => setEditing(p => ({ ...p!, badge: e.target.value }))}
                placeholder="e.g. Financial & Legal Protection"
              />
              <p className="hs-hint">Short label shown above the headline. Helps set context for each slide topic.</p>
            </div>

            <div className="hs-field">
              <label className="hs-label">Headline</label>
              <textarea
                className="hs-textarea"
                rows={3}
                value={editing.headline ?? ""}
                onChange={e => setEditing(p => ({ ...p!, headline: e.target.value }))}
                placeholder={"Your wealth,\nyour property,\nyour documents."}
              />
              <p className="hs-hint">Use line breaks for visual impact. Max 3 lines recommended.</p>
            </div>

            <div className="hs-field">
              <label className="hs-label">Sub-text / Description</label>
              <textarea
                className="hs-textarea"
                rows={3}
                value={editing.sub_text ?? ""}
                onChange={e => setEditing(p => ({ ...p!, sub_text: e.target.value }))}
                placeholder="Bank accounts, investments, property deeds, insurance policies — organised and encrypted, passed on with clarity."
              />
            </div>

            {/* CTAs */}
            <div className="hs-section-label">Call to Action Buttons</div>

            <div className="hs-row2">
              <div className="hs-field">
                <label className="hs-label">Primary Button Label</label>
                <input className="hs-input" value={editing.cta_label ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_label: e.target.value }))} placeholder="Get Started Free" />
              </div>
              <div className="hs-field">
                <label className="hs-label">Primary Button URL</label>
                <input className="hs-input" value={editing.cta_url ?? ""} onChange={e => setEditing(p => ({ ...p!, cta_url: e.target.value }))} placeholder="https://app.soultdigital.com/signup" />
              </div>
            </div>

            <div className="hs-row2">
              <div className="hs-field">
                <label className="hs-label">Secondary Button Label</label>
                <input className="hs-input" value={editing.ghost_label ?? ""} onChange={e => setEditing(p => ({ ...p!, ghost_label: e.target.value }))} placeholder="Learn More" />
              </div>
              <div className="hs-field">
                <label className="hs-label">Secondary Button URL</label>
                <input className="hs-input" value={editing.ghost_url ?? ""} onChange={e => setEditing(p => ({ ...p!, ghost_url: e.target.value }))} placeholder="#features" />
              </div>
            </div>

            {/* Settings */}
            <div className="hs-section-label">Settings</div>
            <div className="hs-row2">
              <div className="hs-field">
                <label className="hs-label">Sort Order</label>
                <input className="hs-input" type="number" value={editing.sort_order ?? 0} onChange={e => setEditing(p => ({ ...p!, sort_order: +e.target.value }))} />
                <p className="hs-hint">Lower number = appears first</p>
              </div>
              <div className="hs-field" style={{ display: "flex", alignItems: "center", paddingTop: 22 }}>
                <div className="hs-checkbox-row">
                  <input type="checkbox" id="slide-active" checked={!!editing.active} onChange={e => setEditing(p => ({ ...p!, active: e.target.checked }))} />
                  <label htmlFor="slide-active" style={{ fontSize: 13, color: "#374151" }}>Active (show on website)</label>
                </div>
              </div>
            </div>

            {msg && <p className="hs-msg">{msg}</p>}

            <div className="hs-modal-actions">
              <button className="hs-btn secondary" onClick={() => setEditing(null)}>Cancel</button>
              <button className="hs-btn" onClick={save} disabled={saving}>{saving ? "Saving…" : "Save Slide"}</button>
            </div>
          </div>
        </div>
      )}

      {/* Full image preview */}
      {preview && (
        <div className="hs-preview-overlay" onClick={() => setPreview(null)}>
          <span className="hs-preview-close">✕</span>
          <img src={preview} alt="Preview" />
        </div>
      )}
    </>
  );
}
