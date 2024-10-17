import FeaturesDesktopView from "./dektop";
import FeaturesMobileView from "./mobile";

function Features() {
  return (
    <div className="relative">
      <div className="absolute top-0 -mt-[600px] lg:-mt-[538px]" id="section2" />
      <div className="flex md:hidden">
        <FeaturesMobileView />
      </div>

      <div className="hidden md:flex">
        <FeaturesDesktopView />
      </div>
    </div>
  );
}

export default Features;
