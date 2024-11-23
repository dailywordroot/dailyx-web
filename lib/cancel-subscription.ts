import { loadStripe } from "@stripe/stripe-js";

type SubscriptionType = "1m" | '3m' | '6m' | '1y'
// @typescript-eslint/no-unsafe-function-type
export default async function cancelSubs ({ subscriptionId }: { subscriptionId: string }) {
    try {
        return await fetch("/api/cancel-subscription", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ subscriptionId }),
        });

      // const stripeClient = await loadStripe(
      //   process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
      // );

      // if (!stripeClient) throw new Error("Stripe failed to initialize.");

      // const { sessionId } = await checkoutResponse.json();
      // await stripeClient.cancel({ sessionId });
    } catch (error) {
      console.error(error);
    } finally {
   }
}