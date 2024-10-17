import { priceCardData } from "../../data/data";
import Card from "../Card";

export default function PriceCardsMobile({
  subscriptionType = "monthly",
}: {
  subscriptionType: "monthly" | "annually";
}) {
  return (
    <>
      <div className="flex flex-row gap-5  absolute left-0 right-0 overflow-x-scroll pt-10 px-5">
        <Card
          subPlan={subscriptionType}
          caption={priceCardData[1].caption}
          features={priceCardData[1].features}
          price={priceCardData[1].price}
          text={priceCardData[1].text}
          pricePlanImgSrc={priceCardData[1].pricePlanImgSrc}
          btnIconSrc={priceCardData[1].btnIconSrc}
          selected={false}
          place="left"
        />
        <Card
          subPlan={subscriptionType}
          caption={priceCardData[0].caption}
          features={priceCardData[0].features}
          price={priceCardData[0].price}
          text={priceCardData[0].text}
          pricePlanImgSrc={priceCardData[0].pricePlanImgSrc}
          btnIconSrc={priceCardData[0].btnIconSrc}
          selected={true}
          place="middle"
        />
        <Card
          subPlan={subscriptionType}
          caption={priceCardData[2].caption}
          features={priceCardData[2].features}
          price={priceCardData[2].price}
          text={priceCardData[2].text}
          pricePlanImgSrc={priceCardData[2].pricePlanImgSrc}
          btnIconSrc={priceCardData[2].btnIconSrc}
          selected={false}
          place="right"
        />
      </div>
    </>
  );
}
