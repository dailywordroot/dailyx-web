import { loadStripe } from "@stripe/stripe-js";

type SubscriptionType = "1m" | '3m' | '6m' | '1y'
export default async function ({ planType, setLoading }: { planType: SubscriptionType, setLoading: Function }) {
    setLoading(true);
    try {
        const checkoutResponse = await fetch("/api/create-checkout", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ assinatura: true, testeId: '123', planType }),
        });

      const stripeClient = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string
      );

      if (!stripeClient) throw new Error("Stripe failed to initialize.");

      const { sessionId } = await checkoutResponse.json();
      await stripeClient.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
}