import { data } from "../data";
import FeatureCard from "./Card";

function FeaturesMobileView() {
  return (
    <div className="relative -mt-[500px] h-[500px]  w-full">
      <div className="absolute left-0 right-0 h-full overflow-x-scroll flex-row flex gap-5 sm:gap-20 sm:justify-center px-5">
        {data.map((data, index) => {
          return (
            <FeatureCard
              key={index}
              caption1Text={data.caption1Text}
              caption2Text={data.caption2Text}
              description={data.description}
              icon={
                <span>
                  <img src={data.iconSrc} alt="btn_icon_img" />
                </span>
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default FeaturesMobileView;
