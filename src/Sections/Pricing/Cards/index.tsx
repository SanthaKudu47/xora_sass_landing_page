import PriceCardsDesktop from "./desktop";

export default function PricingCards({
  subscriptionType = "monthly",
}: {
  subscriptionType: "monthly" | "annually";
}) {
  return (
    <div>
      <PriceCardsDesktop subscriptionType={subscriptionType} />
    </div>
  );
}
