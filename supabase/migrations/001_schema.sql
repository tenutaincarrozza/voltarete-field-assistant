-- VoltaRete demo: fictional EV charging operator
create table public.sites (
  code text primary key,
  name text not null,
  city text not null,
  address text not null
);

create table public.chargers (
  code text primary key,
  site_code text not null references public.sites(code),
  model text not null check (model in ('VR-DC150','VR-DC50','VR-AC22')),
  status text not null default 'available'
    check (status in ('available','charging','degraded','out_of_service','offline')),
  active_error text,
  last_seen timestamptz not null default now()
);

create table public.fault_events (
  id bigint generated always as identity primary key,
  charger_code text not null references public.chargers(code),
  error_code text not null,
  occurred_at timestamptz not null default now()
);
create index fault_events_charger_idx on public.fault_events (charger_code, occurred_at desc);

create table public.tickets (
  id bigint generated always as identity primary key,
  site_code text not null references public.sites(code),
  charger_code text not null references public.chargers(code),
  error_code text,
  description text not null,
  priority text not null check (priority in ('P1','P2','P3','P4')),
  charger_state_after text not null
    check (charger_state_after in ('in_service','degraded','out_of_service')),
  status text not null default 'open' check (status in ('open','in_progress','closed')),
  source text not null default 'voice_agent',
  created_at timestamptz not null default now()
);
create index tickets_created_idx on public.tickets (created_at desc);

-- RLS: synthetic demo data is publicly readable; writes only through Edge Functions (service role)
alter table public.sites enable row level security;
alter table public.chargers enable row level security;
alter table public.fault_events enable row level security;
alter table public.tickets enable row level security;

create policy "public read sites" on public.sites for select to anon, authenticated using (true);
create policy "public read chargers" on public.chargers for select to anon, authenticated using (true);
create policy "public read tickets" on public.tickets for select to anon, authenticated using (true);

-- live updates for the demo page
alter publication supabase_realtime add table public.tickets;
alter publication supabase_realtime add table public.chargers;
