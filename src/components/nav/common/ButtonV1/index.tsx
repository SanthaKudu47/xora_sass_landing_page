import zapIcon from "/public/zap.svg";
import "./styles.css";
import Marker from "./Marker";

function ButtonV1({ label = "My Button" }: { label?: string }) {
  return (
    <div className="h-[64px] inline-flex p-4 rounded-xl bg-gradient-to-t from-buttonGradientColor2 to-buttonGradientColor1 border-solid border-2 relative border-buttonGradientColor2 buttonV1 cursor-pointer">
      <div
        className="absolute -top-[1.5px]  h-[1.65px] bg-buttonGradientColor2
       left-5 right-5  p-0 m-0 overflow-hidden"
      >
        <div className="light h-[2px]  w-2/3  mx-auto absolute  light_top"></div>
      </div>

      <div className="flex items-center p-0 gap-5">
        <span className="absolute -left-[1px]">
          <Marker />
        </span>
        <img src={zapIcon} alt="zap_icon" />
        <h4 className="font-baseFont text-th font-semibold uppercase">
          {label}
        </h4>
      </div>

      <div
        className="absolute -bottom-[1.5px]  h-[1.65px] bg-buttonGradientColor2
       left-5 right-5  p-0 m-0 overflow-hidden"
      >
        <div className="light h-[2px]  w-2/3  mx-auto absolute light_bottom"></div>
      </div>
    </div>
  );
}

export default ButtonV1;
