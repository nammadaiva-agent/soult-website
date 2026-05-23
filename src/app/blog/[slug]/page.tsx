import { supabase } from "@/lib/supabase";
import type { BlogPost } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE = "https://www.soultdigital.com";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? post.title,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? post.title,
      url: `${BASE}/blog/${slug}`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      authors: post.author ? [post.author] : [],
      images: post.cover_image ? [{ url: post.cover_image, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? post.title,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export const revalidate = 60;

async function getPost(slug: string): Promise<BlogPost | null> {
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  return data;
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

// Minimal markdown → HTML converter
function mdToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, s => `<ul>${s}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|o|l])/gm, '')
    .replace(/^(.+)$/gm, (line) => line.startsWith('<') ? line : `<p>${line}</p>`)
    .replace(/<p><\/p>/g, '')
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? post.title,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Soult Digital",
      url: BASE,
    },
    datePublished: post.published_at,
    image: post.cover_image ?? `${BASE}/og-image.png`,
    url: `${BASE}/blog/${slug}`,
    mainEntityOfPage: `${BASE}/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <style>{`
        .bp-page { padding-top: 72px; background: var(--bg-primary); min-height: 100vh; }
        .bp-hero {
          max-width: 800px; margin: 0 auto; padding: 64px 32px 0;
        }
        .bp-back {
          font-size: 13px; color: var(--text-muted); text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; margin-bottom: 32px;
          transition: color 0.2s;
        }
        .bp-back:hover { color: var(--gold); }
        .bp-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
        .bp-tag { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); background: rgba(215,181,109,0.1); border: 1px solid var(--border); padding: 3px 10px; }
        .bp-title { font-size: clamp(28px,4vw,44px); font-weight: 900; letter-spacing: -0.02em; color: var(--beige); line-height: 1.1; margin-bottom: 16px; }
        .bp-meta { font-size: 13px; color: rgba(245,236,216,0.4); display: flex; gap: 12px; margin-bottom: 40px; }
        .bp-cover { width: 100%; border-radius: 8px; margin-bottom: 48px; aspect-ratio: 16/9; object-fit: cover; }
        .bp-cover-placeholder { width: 100%; aspect-ratio: 16/9; background: var(--bg-secondary); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 64px; margin-bottom: 48px; }
        .bp-body { max-width: 800px; margin: 0 auto; padding: 0 32px 96px; }
        .bp-body .bp-content h1, .bp-body .bp-content h2, .bp-body .bp-content h3 {
          color: var(--beige); font-weight: 700; letter-spacing: -0.01em; margin: 32px 0 12px;
        }
        .bp-body .bp-content h1 { font-size: 28px; }
        .bp-body .bp-content h2 { font-size: 22px; }
        .bp-body .bp-content h3 { font-size: 18px; }
        .bp-body .bp-content p { font-size: 16px; color: var(--beige-2); line-height: 1.8; margin-bottom: 16px; }
        .bp-body .bp-content ul { margin: 12px 0 20px 20px; }
        .bp-body .bp-content li { font-size: 15px; color: var(--beige-2); line-height: 1.7; margin-bottom: 6px; }
        .bp-body .bp-content a { color: var(--gold); text-decoration: underline; }
        .bp-body .bp-content strong { color: var(--beige); }
        .bp-cta-band {
          margin: 0 32px 64px; max-width: 800px;
          background: rgba(215,181,109,0.06); border: 1px solid var(--border);
          padding: 32px; text-align: center;
        }
        .bp-cta-h { font-size: 20px; font-weight: 700; color: var(--beige); margin-bottom: 8px; }
        .bp-cta-p { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; }
        @media (max-width: 640px) { .bp-hero, .bp-body { padding-left: 20px; padding-right: 20px; } .bp-cta-band { margin: 0 20px 48px; } }
      `}</style>

      <div className="bp-page">
        <div className="bp-hero">
          <Link href="/blog" className="bp-back">← Back to Blog</Link>
          {post.tags.length > 0 && (
            <div className="bp-tags">
              {post.tags.map((t, i) => <span key={i} className="bp-tag">{t}</span>)}
            </div>
          )}
          <h1 className="bp-title">{post.title}</h1>
          <div className="bp-meta">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.published_at)}</span>
          </div>
        </div>

        <div className="bp-body">
          {post.cover_image
            ? <Image src={post.cover_image} alt={post.title} className="bp-cover" width={800} height={450} style={{ width: "100%", height: "auto" }} />
            : <div className="bp-cover-placeholder">📖</div>
          }
          <div
            className="bp-content"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
          />

          <div className="bp-cta-band">
            <h3 className="bp-cta-h">Ready to secure your family&apos;s future?</h3>
            <p className="bp-cta-p">Start your free Life Vault today. No credit card required.</p>
            <Link href="https://app.soultdigital.com/signup" style={{
              fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#301C1A", background: "var(--gold)", padding: "12px 28px", borderRadius: "4px",
              textDecoration: "none",
            }}>
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
