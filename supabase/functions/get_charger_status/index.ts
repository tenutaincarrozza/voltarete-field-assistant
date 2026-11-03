import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { authorized, corsHeaders, db, json, normalizeChargerCode, ticketNumber } from "../_shared/common.ts";

// Tool called by the ElevenLabs agent: returns live status, fault history and open tickets for a charger.
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (!authorized(req)) return json({ error: "unauthorized" }, 401);

  let body: { charger_code?: string };
  try { body = await req.json(); } catch { return json({ error: "invalid JSON body" }, 400); }
  if (!body.charger_code) return json({ error: "charger_code is required" }, 400);

  const code = normalizeChargerCode(body.charger_code);
  const supabase = db();

  const { data: charger, error } = await supabase
    .from("chargers")
    .select("code, model, status, active_error, last_seen, site:sites(code, name, city, address)")
    .eq("code", code)
    .maybeSingle();
  if (error) return json({ error: error.message }, 500);
  if (!charger) {
    return json({
      found: false,
      charger_code: code,
      message: "Colonnina non trovata. Chiedi al tecnico di ripetere il codice (formato VR-XXX-00-C0).",
    });
  }

  const since = new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString();
  const [{ data: faults }, { data: tickets }, { count: activeOnSite }] = await Promise.all([
    supabase.from("fault_events").select("error_code, occurred_at")
      .eq("charger_code", code).gte("occurred_at", since).order("occurred_at", { ascending: false }),
    supabase.from("tickets").select("id, error_code, priority, status, created_at")
      .eq("charger_code", code).neq("status", "closed").order("created_at", { ascending: false }),
    supabase.from("chargers").select("code", { count: "exact", head: true })
      // deno-lint-ignore no-explicit-any
      .eq("site_code", (charger.site as any).code).in("status", ["available", "charging"]),
  ]);

  const byCode: Record<string, number> = {};
  for (const f of faults ?? []) byCode[f.error_code] = (byCode[f.error_code] ?? 0) + 1;
  const recurring = Object.entries(byCode).filter(([, n]) => n > 3).map(([c]) => c);

  return json({
    found: true,
    charger_code: charger.code,
    model: charger.model,
    status: charger.status,
    active_error: charger.active_error,
    site: charger.site,
    working_chargers_on_site: activeOnSite ?? 0,
    faults_last_30_days: byCode,
    recurring_faults: recurring,
    open_tickets: (tickets ?? []).map((t) => ({ ...t, ticket_number: ticketNumber(t.id) })),
  });
});
