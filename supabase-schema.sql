-- ── Soult Digital — Supabase Schema ─────────────────────────────────────────

-- Pricing Plans
create table if not exists pricing_plans (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  tagline       text,
  price_monthly numeric(10,2) not null default 0,
  price_yearly  numeric(10,2) not null default 0,
  currency      text not null default 'INR',
  features      text[] not null default '{}',
  highlighted   boolean not null default false,
  badge         text,
  cta_text      text not null default 'Get Started',
  cta_url       text not null default '/signup',
  active        boolean not null default true,
  sort_order    int not null default 0,
  created_at    timestamptz not null default now()
);

-- Announcements
create table if not exists announcements (
  id          uuid primary key default gen_random_uuid(),
  message     text not null,
  cta_text    text,
  cta_url     text,
  bg_color    text default '#D7B56D',
  text_color  text default '#301C1A',
  expires_at  timestamptz,
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Promotions
create table if not exists promotions (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  body             text,
  badge            text,
  cta_text         text,
  cta_url          text,
  image_url        text,
  display_position text not null default 'global' check (display_position in ('hero','pricing','blog','global')),
  active           boolean not null default true,
  created_at       timestamptz not null default now()
);

-- Blog Posts
create table if not exists blog_posts (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  slug         text not null unique,
  excerpt      text,
  content      text not null default '',
  cover_image  text,
  author       text default 'Soult Digital',
  tags         text[] not null default '{}',
  published    boolean not null default false,
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Seed pricing plans
insert into pricing_plans (name, tagline, price_monthly, price_yearly, currency, features, highlighted, badge, cta_text, sort_order) values
  ('Starter', 'For individuals getting started', 0, 0, 'INR', '{"1 Life Vault","Up to 10 documents","Emergency access for 1 nominee","Basic will storage","Mobile app access"}', false, 'Free Forever', 'Start Free', 0),
  ('Family', 'For families who want complete peace of mind', 499, 4999, 'INR', '{"1 Life Vault","Unlimited documents","Up to 5 nominees","Will & legal documents","Memory preservation vault","Health wishes & emergency binder","Priority support"}', true, 'Most Popular', 'Start Free Trial', 1),
  ('Estate', 'For HNIs, business owners & NRIs', 1499, 14999, 'INR', '{"3 Life Vaults","Unlimited documents","Unlimited nominees","Everything in Family","Business succession planning","Dedicated relationship manager","White-glove onboarding","API access"}', false, 'Enterprise', 'Talk to Us', 2);

-- Enable RLS (public read for active content)
alter table pricing_plans  enable row level security;
alter table announcements   enable row level security;
alter table promotions      enable row level security;
alter table blog_posts      enable row level security;

create policy "Public read active pricing"       on pricing_plans  for select using (active = true);
create policy "Public read active announcements" on announcements   for select using (active = true and (expires_at is null or expires_at > now()));
create policy "Public read active promotions"    on promotions      for select using (active = true);
create policy "Public read published posts"      on blog_posts      for select using (published = true);

-- Service role has full access (admin dashboard uses service role key)
