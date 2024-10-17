import FeaturesDesktopView from "./dektop";
import FeaturesMobileView from "./mobile";

function Features() {
  return (
    <div>
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
