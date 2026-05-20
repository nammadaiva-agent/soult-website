import { createClient } from '@supabase/supabase-js'

// Lazy-initialized public client
let _supabase: ReturnType<typeof createClient> | null = null
export function getSupabase() {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }
  return _supabase
}

// Backwards-compat named export used in server components
// Returns empty results when Supabase is not configured (build-time SSG)
export const supabase = {
  from: (table: string) => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!url) {
      // Return a stub that resolves to empty data at build time
      const stub = {
        select: () => stub,
        eq: () => stub,
        or: () => stub,
        order: () => stub,
        limit: () => stub,
        maybeSingle: () => Promise.resolve({ data: null, error: null }),
        single: () => Promise.resolve({ data: null, error: null }),
        then: (resolve: (v: { data: never[]; error: null }) => unknown) =>
          Promise.resolve({ data: [], error: null }).then(resolve),
      }
      return stub as unknown as ReturnType<ReturnType<typeof createClient>["from"]>
    }
    return getSupabase().from(table)
  },
}

// Server-side admin client (never ship to browser)
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// ── Types ────────────────────────────────────────────────────────────────────

export type PricingPlan = {
  id: string
  name: string
  tagline: string | null
  price_monthly: number
  price_yearly: number
  currency: string
  features: string[]
  highlighted: boolean
  badge: string | null
  cta_text: string
  cta_url: string
  active: boolean
  sort_order: number
  created_at: string
}

export type Announcement = {
  id: string
  message: string
  cta_text: string | null
  cta_url: string | null
  bg_color: string | null
  text_color: string | null
  expires_at: string | null
  active: boolean
  created_at: string
}

export type Promotion = {
  id: string
  title: string
  body: string | null
  badge: string | null
  cta_text: string | null
  cta_url: string | null
  image_url: string | null
  display_position: 'hero' | 'pricing' | 'blog' | 'global'
  active: boolean
  created_at: string
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  author: string | null
  tags: string[]
  published: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}
