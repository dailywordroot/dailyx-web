import stripe from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    if (!secret || !signature) {
      throw new Error("Missing secret or signature");
    }

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    switch (event.type) {
      case "checkout.session.completed":
        if (event.data.object.payment_status === "paid") {
          // pagagamento por cartão com sucesso
          const customerData = event.data.object.customer_details;
          const planType = event.data.object.metadata?.planType;

          console.log("pagamento por cartão com sucesso", { customerData, planType });

          try {
            const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/auth/register`, {
              body: JSON.stringify({ email: customerData?.email, planType }),
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
            })

            const rJson = await r.json();
            console.log('resposta', rJson)
          }
          catch (err) {
            console.error('para enviar para a api', err)
          }


        }

        if (
          event.data.object.payment_status === "unpaid" &&
          event.data.object.payment_intent
        ) {
          // Pagamento por boleto
          const paymentIntent = await stripe.paymentIntents.retrieve(
            event.data.object.payment_intent.toString()
          );

          const hostedVoucherUrl =
            paymentIntent.next_action?.boleto_display_details
              ?.hosted_voucher_url;

          if (hostedVoucherUrl) {
            // O cliente gerou um boleto, manda um email pra ele
            // const userEmail = event.data.object.customer_details?.email;
            console.log("gerou o boleto e o link é", hostedVoucherUrl);
          }
        }
        break;

      case "checkout.session.expired":
        if (event.data.object.payment_status === "unpaid") {
          // O cliente saiu do checkout e expirou :(
          const testeId = event.data.object.metadata?.testeId;
          console.log("checkout expirado", testeId);
        }
        break;

      case "checkout.session.async_payment_succeeded":
        if (event.data.object.payment_status === "paid") {
          // O cliente pagou o boleto e o pagamento foi confirmado
          const testeId = event.data.object.metadata?.testeId;
          console.log("pagamento boleto confirmado", testeId);
        }
        break;

      case "checkout.session.async_payment_failed":
        if (event.data.object.payment_status === "unpaid") {
          // O cliente não pagou o boleto e ele venceu :(
          const testeId = event.data.object.metadata?.testeId;
          console.log("pagamento boleto falhou", testeId);
        }
        break;

      case "customer.subscription.deleted":
        // O cliente cancelou o plano :(
        break;
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `Webhook error: ${error}`,
        ok: false,
      },
      { status: 500 }
    );
  }
}
