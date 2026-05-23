import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on digital legacy planning, estate organisation, and protecting what matters most for Indian families.",
  alternates: { canonical: "https://www.soultdigital.com/blog" },
  openGraph: {
    title: "Soult Digital Blog — Legacy Planning Guides",
    description: "Practical advice on digital legacy, estate planning, financial organisation, and preserving family memories.",
    url: "https://www.soultdigital.com/blog",
    type: "website",
  },
};

export const revalidate = 60;

async function getPosts(): Promise<BlogPost[]> {
  const { data } = await supabase
    .from("blog_posts")
    .select("id,title,slug,excerpt,cover_image,author,tags,published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });
  return (data ?? []) as BlogPost[];
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.soultdigital.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.soultdigital.com/blog" },
  ],
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .bl-page { padding-top: 72px; background: var(--bg-primary); min-height: 100vh; }
        .bl-hero { padding: 80px 32px 48px; }
        .bl-inner { max-width: 1200px; margin: 0 auto; }
        .bl-label { font-size: 11px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .bl-h { font-size: clamp(28px,4vw,48px); font-weight: 900; letter-spacing: -0.02em; color: var(--beige); margin-bottom: 12px; }
        .bl-sub { font-size: 15px; color: var(--text-muted); max-width: 480px; line-height: 1.7; }
        .bl-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; padding: 0 32px 96px; max-width: 1200px; margin: 48px auto 0; }
        .bl-card { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: rgba(255,255,255,0.02); text-decoration: none; display: block; transition: border-color 0.3s; }
        .bl-card:hover { border-color: var(--border-strong); }
        .bl-cover { width: 100%; height: 200px; object-fit: cover; background: var(--bg-secondary); display: block; }
        .bl-cover-placeholder { width: 100%; height: 200px; background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(215,181,109,0.08) 100%); display: flex; align-items: center; justify-content: center; font-size: 40px; }
        .bl-card-body { padding: 20px; }
        .bl-card-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px; }
        .bl-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); background: rgba(215,181,109,0.1); border: 1px solid var(--border); padding: 3px 8px; }
        .bl-card-title { font-size: 18px; font-weight: 700; color: var(--beige); margin-bottom: 8px; line-height: 1.3; }
        .bl-card-excerpt { font-size: 13px; color: var(--text-muted); line-height: 1.7; margin-bottom: 16px; }
        .bl-card-meta { font-size: 12px; color: rgba(245,236,216,0.3); display: flex; gap: 12px; align-items: center; }
        .bl-empty { text-align: center; padding: 80px 32px; color: var(--text-muted); }
        .bl-empty h2 { font-size: 22px; font-weight: 700; color: var(--beige); margin-bottom: 10px; }
        @media (max-width: 900px) { .bl-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) { .bl-grid { grid-template-columns: 1fr; padding: 0 20px 64px; } .bl-hero { padding: 60px 20px 32px; } }
      `}</style>

      <div className="bl-page">
        <div className="bl-hero">
          <div className="bl-inner">
            <p className="bl-label">Knowledge Hub</p>
            <h1 className="bl-h">Guides for families who<br />plan ahead</h1>
            <p className="bl-sub">Practical advice on digital legacy, estate planning, financial organization, and preserving what matters most.</p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="bl-empty">
            <h2>Articles coming soon</h2>
            <p>We&apos;re preparing guides on digital legacy planning. Check back soon.</p>
          </div>
        ) : (
          <div className="bl-grid">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="bl-card">
                {post.cover_image
                  ? <img src={post.cover_image} alt={post.title} className="bl-cover" />
                  : <div className="bl-cover-placeholder">📖</div>
                }
                <div className="bl-card-body">
                  {post.tags.length > 0 && (
                    <div className="bl-card-tags">
                      {post.tags.slice(0, 2).map((t, i) => <span key={i} className="bl-tag">{t}</span>)}
                    </div>
                  )}
                  <h2 className="bl-card-title">{post.title}</h2>
                  {post.excerpt && <p className="bl-card-excerpt">{post.excerpt}</p>}
                  <div className="bl-card-meta">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{formatDate(post.published_at)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
