import { NextResponse } from "next/server";

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

  const webhookUrl = process.env.GHL_HOMEOWNER_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      // Don't fail the homeowner's submission just because the CRM webhook
      // hiccuped — they've already been told "thanks, we'll be in touch."
      // Log it so the miss is visible without blocking the user.
      console.error("[homeowner-lead:ghl-forward-failed]", err);
    }
  } else {
    console.warn(
      "[homeowner-lead] GHL_HOMEOWNER_WEBHOOK_URL is not set — lead was only logged, not forwarded to GHL."
    );
  }

  return NextResponse.json({ ok: true });
}
