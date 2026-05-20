"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { href: "/admin/pricing", label: "Pricing Plans", icon: "₹" },
  { href: "/admin/announcements", label: "Announcements", icon: "📣" },
  { href: "/admin/promotions", label: "Promotions", icon: "🎯" },
  { href: "/admin/blog", label: "Blog & Articles", icon: "✍️" },
];

export default function AdminSidebar() {
  const path = usePathname();

  return (
    <>
      <style>{`
        .adm-sidebar {
          width: 240px; flex-shrink: 0;
          background: #301C1A; min-height: 100vh;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh;
        }
        .adm-logo {
          padding: 24px 20px; border-bottom: 1px solid rgba(215,181,109,0.15);
          font-size: 18px; font-weight: 800; color: #D7B56D;
          letter-spacing: -0.01em;
        }
        .adm-logo span { color: #F5ECD8; }
        .adm-logo-sub { font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(215,181,109,0.5); margin-top: 2px; }
        .adm-nav { padding: 16px 12px; flex: 1; }
        .adm-nav-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(215,181,109,0.4); padding: 0 8px; margin-bottom: 8px; }
        .adm-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px; border-radius: 6px;
          font-size: 13px; font-weight: 500;
          color: rgba(245,236,216,0.65); text-decoration: none;
          transition: background 0.2s, color 0.2s;
          margin-bottom: 2px;
        }
        .adm-link:hover { background: rgba(215,181,109,0.08); color: #F5ECD8; }
        .adm-link.active { background: rgba(215,181,109,0.12); color: #D7B56D; font-weight: 700; }
        .adm-link-icon { width: 18px; text-align: center; font-size: 15px; }
        .adm-footer { padding: 16px 20px; border-top: 1px solid rgba(215,181,109,0.15); }
        .adm-footer a { font-size: 12px; color: rgba(215,181,109,0.5); text-decoration: none; display: block; margin-bottom: 6px; transition: color 0.2s; }
        .adm-footer a:hover { color: #D7B56D; }
      `}</style>

      <aside className="adm-sidebar">
        <div className="adm-logo">
          <Image src="/soult-logo.png" alt="Soult" width={90} height={32} style={{ objectFit: "contain", display: "block" }} />
          <div className="adm-logo-sub">Admin Console</div>
        </div>

        <nav className="adm-nav">
          <div className="adm-nav-label">Management</div>
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`adm-link${path === item.href || (item.href !== "/admin" && path.startsWith(item.href)) ? " active" : ""}`}
            >
              <span className="adm-link-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="adm-footer">
          <Link href="/" target="_blank">↗ View Website</Link>
          <Link href="/pricing" target="_blank">↗ View Pricing</Link>
        </div>
      </aside>
    </>
  );
}
