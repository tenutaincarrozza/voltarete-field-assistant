import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { authorized, corsHeaders, db, json, normalizeChargerCode, ticketNumber } from "../_shared/common.ts";

const PRIORITIES = ["P1", "P2", "P3", "P4"];
const STATES = ["in_service", "degraded", "out_of_service"];
// Charger status to set once the ticket is opened
const STATUS_AFTER: Record<string, string> = {
  in_service: "available",
  degraded: "degraded",
  out_of_service: "out_of_service",
};

// Tool called by the ElevenLabs agent once the technician has confirmed the ticket recap.
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (!authorized(req)) return json({ error: "unauthorized" }, 401);

  let b: {
    charger_code?: string; error_code?: string; description?: string;
    priority?: string; charger_state_after?: string;
  };
  try { b = await req.json(); } catch { return json({ error: "invalid JSON body" }, 400); }

  const missing = ["charger_code", "description", "priority", "charger_state_after"]
    .filter((k) => !(b as Record<string, unknown>)[k]);
  if (missing.length) return json({ error: `missing fields: ${missing.join(", ")}` }, 400);

  const priority = b.priority!.toUpperCase();
  if (!PRIORITIES.includes(priority)) return json({ error: "priority must be P1, P2, P3 or P4" }, 400);
  if (!STATES.includes(b.charger_state_after!)) {
    return json({ error: "charger_state_after must be in_service, degraded or out_of_service" }, 400);
  }

  const code = normalizeChargerCode(b.charger_code!);
  const supabase = db();
  const { data: charger } = await supabase.from("chargers").select("code, site_code")
    .eq("code", code).maybeSingle();
  if (!charger) return json({ error: `charger ${code} not found` }, 404);

  const errorCode = b.error_code ? b.error_code.toUpperCase().replace(/^E\s*-?\s*/, "E-") : null;

  const { data: ticket, error } = await supabase.from("tickets").insert({
    site_code: charger.site_code,
    charger_code: charger.code,
    error_code: errorCode,
    description: b.description!.slice(0, 2000),
    priority,
    charger_state_after: b.charger_state_after,
  }).select("id, created_at").single();
  if (error) return json({ error: error.message }, 500);

  await supabase.from("chargers").update({
    status: STATUS_AFTER[b.charger_state_after!],
    active_error: b.charger_state_after === "in_service" ? null : errorCode,
    last_seen: new Date().toISOString(),
  }).eq("code", charger.code);

  return json({
    created: true,
    ticket_number: ticketNumber(ticket.id),
    site_code: charger.site_code,
    charger_code: charger.code,
    priority,
    created_at: ticket.created_at,
  });
});
