import { createClient } from "npm:@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-agent-secret, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/** Shared-secret check: the ElevenLabs tool sends `x-agent-secret`. */
export function authorized(req: Request): boolean {
  const expected = Deno.env.get("AGENT_SECRET");
  return !!expected && req.headers.get("x-agent-secret") === expected;
}

/** Service-role client: Edge Functions are the only write path (RLS blocks anon writes). */
export function db() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false } },
  );
}

/**
 * Voice transcripts arrive loosely formatted ("vr mil 01 c2", "VR-MIL-01 C2").
 * Normalize to the canonical code VR-MIL-01-C2.
 */
export function normalizeChargerCode(raw: string): string {
  const parts = raw.toUpperCase().replace(/[^A-Z0-9]+/g, " ").trim().split(" ");
  const joined = parts.join("");
  const m = joined.match(/^(?:VR)?([A-Z]{3})(\d{1,2})C(\d{1,2})$/);
  if (!m) return raw.toUpperCase().trim();
  return `VR-${m[1]}-${m[2].padStart(2, "0")}-C${Number(m[3])}`;
}

export const ticketNumber = (id: number) => `TK-${String(id).padStart(5, "0")}`;
