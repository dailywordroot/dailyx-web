import stripe from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  type SubscriptionType = '1m' | '3m' | '6m' | '1y';
  const { testeId, assinatura, planType } = await req.json();

  const subscriptionType = {
    '1m': process.env.STRIPE_SUBSCRIPTION_1M_PRICE_ID,
    '3m': process.env.STRIPE_SUBSCRIPTION_3M_PRICE_ID,
    '6m': process.env.STRIPE_SUBSCRIPTION_6M_PRICE_ID,
    '1y': process.env.STRIPE_SUBSCRIPTION_1Y_PRICE_ID,
  }

  const price = subscriptionType[planType as SubscriptionType]

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price,
          quantity: 1,
        },
      ],
      mode: assinatura ? "subscription" : "payment",
      payment_method_types: assinatura ? ["card"] : ["card", "boleto"],
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/`,
      metadata: {
        testeId,
        planType
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    return NextResponse.error();
  }
}
