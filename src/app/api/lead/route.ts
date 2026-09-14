import { NextResponse } from "next/server";

// Stub: logs the submission only. Before going live this must notify Manam
// instantly (email/SMS/webhook) per the pilot's "fast awareness" requirement —
// the phone-verification step depends on seeing the lead right away.
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.phone || !body.budget || !body.timeline) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("[lead:new]", body);

  return NextResponse.json({ ok: true });
}
