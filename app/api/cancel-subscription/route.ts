import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const { subscriptionId } = await req.json();

  try {

    const subscription = await stripe.subscriptions.cancel(subscriptionId);

    return NextResponse.json({ subscriptionId: subscription.id, status: subscription.status });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
