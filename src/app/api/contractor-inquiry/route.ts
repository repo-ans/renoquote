import { NextResponse } from "next/server";

// Stub: logs the submission only. Wire to a real notification channel before
// launch — see src/app/api/lead/route.ts for the same gap on the homeowner side.
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.business || !body.phone || !body.services) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("[contractor-inquiry:new]", body);

  return NextResponse.json({ ok: true });
}
