import zapIcon from "/zap.svg";
import "./styles.css";
import Marker from "./Marker";
import { ReactNode } from "react";

function ButtonV1({
  label = "My Button",
  children = null,
  isMarkerLighted = false,
}: {
  label?: string;
  children?: ReactNode;
  isMarkerLighted?: boolean;
}) {
  const icon = children ? (
    children
  ) : (
    <span>
      <img src={zapIcon} alt="zap_icon" />
    </span>
  );
  return (
    <div className="h-[64px] relative inline-flex cursor-pointer rounded-xl justify-center items-center buttonV1">
      <div className="z-20 h-[64px] inline-flex p-4 rounded-xl shadow-2xl ">
        <div className="z-10 absolute top-0  h-[1.65px] bg-buttonGradientColor2 left-5 right-5 p-0 m-0 overflow-hidden">
          <div className="light h-[2px]  w-2/3  mx-auto absolute  light_top"></div>
        </div>

        <div className="flex items-center p-0 gap-5 ">
          <span className="absolute left-0">
            <Marker fill={isMarkerLighted ? '#c8ea80':'#2ef2ff'} />
          </span>
          {icon}
          <h4 className="font-baseFont text-th font-semibold uppercase">
            {label}
          </h4>
        </div>

        <div
          className="absolute bottom-0  h-[1.65px] bg-buttonGradientColor2
     left-5 right-5  p-0 m-0 overflow-hidden z-10 "
        >
          <div className="light h-[2px]  w-2/3  mx-auto absolute light_bottom"></div>
        </div>
      </div>

      <div className="z-10  buttonV1_bg_hovered w-full h-full absolute rounded-xl flex justify-center border-2 border-solid border-buttonGradientColor2 overflow-hidden ">
        <div className="buttonV1_bg w-full h-full absolute buttonV1_opacity flex mx-auto my-auto"></div>
      </div>
      <div className="bg-blue-400 -z-0 absolute  rounded-xl blur-lg opacity-30 h-1/2 left-1 right-1 top-[1px]"></div>
    </div>
  );
}

export default ButtonV1;
