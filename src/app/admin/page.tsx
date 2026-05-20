import { supabaseAdmin } from "@/lib/supabase";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getStats() {
  const db = supabaseAdmin();
  const [plans, anns, promos, posts] = await Promise.all([
    db.from("pricing_plans").select("id,active,name").order("sort_order"),
    db.from("announcements").select("id,active,message").order("created_at", { ascending: false }),
    db.from("promotions").select("id,active,title,display_position").order("created_at", { ascending: false }),
    db.from("blog_posts").select("id,published,title,published_at").order("created_at", { ascending: false }),
  ]);
  return {
    plans: plans.data ?? [],
    announcements: anns.data ?? [],
    promotions: promos.data ?? [],
    posts: posts.data ?? [],
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const activePlans = stats.plans.filter(p => p.active).length;
  const activeAnns = stats.announcements.filter(a => a.active).length;
  const activePromos = stats.promotions.filter(p => p.active).length;
  const publishedPosts = stats.posts.filter(p => p.published).length;

  return (
    <>
      <style>{`
        .adm-page { padding: 40px; max-width: 1100px; }
        .adm-header { margin-bottom: 36px; }
        .adm-h1 { font-size: 28px; font-weight: 800; color: #1a1a1a; letter-spacing: -0.01em; margin-bottom: 4px; }
        .adm-sub { font-size: 14px; color: #6b7280; }
        .adm-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 40px; }
        .adm-stat {
          background: #fff; border: 1px solid #e5e7eb; border-radius: 8px;
          padding: 20px 24px; text-decoration: none; display: block;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .adm-stat:hover { border-color: #D7B56D; box-shadow: 0 2px 12px rgba(215,181,109,0.15); }
        .adm-stat-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin-bottom: 10px; }
        .adm-stat-num { font-size: 36px; font-weight: 800; color: #1a1a1a; letter-spacing: -0.02em; }
        .adm-stat-sub { font-size: 12px; color: #6b7280; margin-top: 4px; }
        .adm-stat-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; margin-right: 5px; }
        .adm-stat-dot.green { background: #22c55e; }
        .adm-stat-dot.gold { background: #D7B56D; }

        .adm-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 24px; }
        .adm-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; }
        .adm-card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .adm-card-h { font-size: 16px; font-weight: 700; color: #1a1a1a; }
        .adm-card-action { font-size: 12px; font-weight: 600; color: #D7B56D; text-decoration: none; }
        .adm-card-action:hover { text-decoration: underline; }
        .adm-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f3f4f6; gap: 12px; }
        .adm-row:last-child { border-bottom: none; }
        .adm-row-label { font-size: 13px; color: #374151; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .adm-badge { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 3px; flex-shrink: 0; }
        .adm-badge.active { background: #dcfce7; color: #15803d; }
        .adm-badge.inactive { background: #f3f4f6; color: #9ca3af; }
        .adm-badge.published { background: #dbeafe; color: #1d4ed8; }
        .adm-badge.draft { background: #fef3c7; color: #b45309; }
        .adm-empty { font-size: 13px; color: #9ca3af; padding: 16px 0; }

        .adm-quick { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 32px; }
        .adm-quick-btn {
          background: #301C1A; color: #D7B56D; border: none; cursor: pointer;
          padding: 12px; border-radius: 6px; font-size: 12px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none;
          text-align: center; display: block; transition: background 0.2s;
        }
        .adm-quick-btn:hover { background: #3d2320; }

        @media (max-width: 900px) {
          .adm-stats { grid-template-columns: repeat(2,1fr); }
          .adm-grid { grid-template-columns: 1fr; }
          .adm-quick { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) { .adm-page { padding: 24px 20px; } }
      `}</style>

      <div className="adm-page">
        <div className="adm-header">
          <h1 className="adm-h1">Dashboard</h1>
          <p className="adm-sub">Overview of your Soult Digital content</p>
        </div>

        {/* Stats */}
        <div className="adm-stats">
          <Link href="/admin/pricing" className="adm-stat">
            <div className="adm-stat-label">Pricing Plans</div>
            <div className="adm-stat-num">{stats.plans.length}</div>
            <div className="adm-stat-sub"><span className="adm-stat-dot green" />{activePlans} active</div>
          </Link>
          <Link href="/admin/announcements" className="adm-stat">
            <div className="adm-stat-label">Announcements</div>
            <div className="adm-stat-num">{stats.announcements.length}</div>
            <div className="adm-stat-sub"><span className="adm-stat-dot green" />{activeAnns} live</div>
          </Link>
          <Link href="/admin/promotions" className="adm-stat">
            <div className="adm-stat-label">Promotions</div>
            <div className="adm-stat-num">{stats.promotions.length}</div>
            <div className="adm-stat-sub"><span className="adm-stat-dot gold" />{activePromos} active</div>
          </Link>
          <Link href="/admin/blog" className="adm-stat">
            <div className="adm-stat-label">Blog Posts</div>
            <div className="adm-stat-num">{stats.posts.length}</div>
            <div className="adm-stat-sub"><span className="adm-stat-dot green" />{publishedPosts} published</div>
          </Link>
        </div>

        {/* Quick actions */}
        <div className="adm-quick">
          <Link href="/admin/announcements" className="adm-quick-btn">+ New Announcement</Link>
          <Link href="/admin/promotions" className="adm-quick-btn">+ New Promotion</Link>
          <Link href="/admin/blog/new" className="adm-quick-btn">+ New Article</Link>
          <Link href="/admin/pricing" className="adm-quick-btn">Edit Pricing</Link>
        </div>

        {/* Recent content */}
        <div className="adm-grid">
          <div className="adm-card">
            <div className="adm-card-header">
              <span className="adm-card-h">Pricing Plans</span>
              <Link href="/admin/pricing" className="adm-card-action">Manage →</Link>
            </div>
            {stats.plans.length === 0 ? (
              <p className="adm-empty">No pricing plans yet.</p>
            ) : (
              stats.plans.map(p => (
                <div key={p.id} className="adm-row">
                  <span className="adm-row-label">{p.name}</span>
                  <span className={`adm-badge ${p.active ? "active" : "inactive"}`}>{p.active ? "Active" : "Hidden"}</span>
                </div>
              ))
            )}
          </div>

          <div className="adm-card">
            <div className="adm-card-header">
              <span className="adm-card-h">Recent Blog Posts</span>
              <Link href="/admin/blog" className="adm-card-action">Manage →</Link>
            </div>
            {stats.posts.length === 0 ? (
              <p className="adm-empty">No posts yet. <Link href="/admin/blog/new" style={{ color: "#D7B56D" }}>Write your first article →</Link></p>
            ) : (
              stats.posts.slice(0, 5).map(p => (
                <div key={p.id} className="adm-row">
                  <span className="adm-row-label">{p.title}</span>
                  <span className={`adm-badge ${p.published ? "published" : "draft"}`}>{p.published ? "Published" : "Draft"}</span>
                </div>
              ))
            )}
          </div>

          <div className="adm-card">
            <div className="adm-card-header">
              <span className="adm-card-h">Announcements</span>
              <Link href="/admin/announcements" className="adm-card-action">Manage →</Link>
            </div>
            {stats.announcements.length === 0 ? (
              <p className="adm-empty">No announcements.</p>
            ) : (
              stats.announcements.slice(0, 4).map(a => (
                <div key={a.id} className="adm-row">
                  <span className="adm-row-label">{a.message}</span>
                  <span className={`adm-badge ${a.active ? "active" : "inactive"}`}>{a.active ? "Live" : "Off"}</span>
                </div>
              ))
            )}
          </div>

          <div className="adm-card">
            <div className="adm-card-header">
              <span className="adm-card-h">Promotions</span>
              <Link href="/admin/promotions" className="adm-card-action">Manage →</Link>
            </div>
            {stats.promotions.length === 0 ? (
              <p className="adm-empty">No promotions.</p>
            ) : (
              stats.promotions.slice(0, 4).map(p => (
                <div key={p.id} className="adm-row">
                  <span className="adm-row-label">{p.title}</span>
                  <span className={`adm-badge ${p.active ? "active" : "inactive"}`}>{p.display_position}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
