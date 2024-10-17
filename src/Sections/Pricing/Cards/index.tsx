import PriceCardsDesktop from "./desktop";
import PriceCardsMobile from "./mobile";

export default function PricingCards({
  subscriptionType = "monthly",
}: {
  subscriptionType: "monthly" | "annually";
}) {
  return (
    <>
      <div className="hidden lg:flex">
        <PriceCardsDesktop subscriptionType={subscriptionType} />
      </div>
      <div className="flex lg:hidden">
        <PriceCardsMobile  subscriptionType={subscriptionType} />
      </div>
    </>
  );
}
