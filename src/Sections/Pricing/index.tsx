import { useState } from "react";
import { Container } from "../../components/nav/common/Container";
import PricingCards from "./Cards";
import Switch from "./Switch";
import lineArt from "/line_art.svg";
export default function Pricing() {
  const [subscription, setSubscription] = useState<"monthly" | "annually">(
    "monthly"
  );
  return (
    <div className="relative h-[1165px] lg:h-[1220px]" id="section3">
      <Container cls="flex-col items-center mx-auto relative">
        <div className="flex relative">
          <div className="w-full overflow-hidden pb-[250px]  px-5 sm:px-20 -mt-9 lg:mt-0">
            <div className="relative w-full lg:w-[950px] h-[550px] lg:h-[600px] flex mx-auto lg:border-x-2 border-solid border-buttonBorderBase justify-center">
              <h2 className="z-20 font-baseFont text-[32px] md:text-[48px] font-semibold text-tp1 text-center mt-[130px] lg:mt-[120px] leading-10 lg:leading-[60px] px-9">
                Flexible pricing <br />
                for teams of all sizes
              </h2>
              <div className="absolute top-1/2 z-20 ">
                <Switch setSubPlan={setSubscription} subPlan={subscription} />
              </div>

              <div className="absolute bottom-0 w-[1500px] z-10 flex justify-center">
                <img src={lineArt} alt="" />
              </div>
              <div className="absolute flex justify-center bottom-0">
                <div className="bg-p15 blur-[400px]  rounded-full z-0 w-[400px] h-[400px]  relative top-[100px] lg:top-[120px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center z-40 -mt-[370px] mx-auto">
          <PricingCards subscriptionType={subscription} />
        </div>
      </Container>
    </div>
  );
}
