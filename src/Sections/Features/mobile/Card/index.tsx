import { ReactNode } from "react";
import ButtonV1 from "../../../../components/nav/common/ButtonV1";
import Caption from "../../../../components/nav/common/Caption";
import CaptionV1 from "../../../../components/nav/common/CaptionV1/CaptionV1";
import magicTouch from "/magictouch.svg";

function FeatureCard({
  caption1Text = "easy integration",
  caption2Text = "Work smarter not harder",
  description = "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
  icon = null,
}: {
  caption1Text: string;
  caption2Text: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className=" max-w-[300px] min-w-[300px] h-[500px] rounded-2xl border-2 border-solid border-buttonBorderBase feature_card_bg px-4 pt-[60px] pb-[10px]">
      <div className="flex flex-col h-full relative px-2">
        <Caption text={caption1Text} />
        <CaptionV1 text={caption2Text} />
        <div className="my-5">
          <p className="text-cardText font-baseFont text-[16px] leading-7">
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 mx-auto w-full left-0 right-0 flex justify-center">
          <ButtonV1 label="Watch the demo">{icon}</ButtonV1>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
