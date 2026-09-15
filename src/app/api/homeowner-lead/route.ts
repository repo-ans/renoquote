import { NextResponse } from "next/server";

// Stub: logs the submission only. Once a GHL "Inbound Webhook" workflow URL
// (or API key + location id) is provided, forward `body` there via fetch()
// instead of just logging — that's what actually gets the lead into GHL and
// notifies the admin. See conversation notes for what's needed to wire this up.
export async function POST(request: Request) {
  const body = await request.json();

  if (
    !body.service ||
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.address ||
    !body.city ||
    !body.postalCode ||
    !body.budget ||
    !body.timeline
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("[homeowner-lead:new]", body);

  return NextResponse.json({ ok: true });
}
