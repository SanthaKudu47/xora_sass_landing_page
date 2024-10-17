import { ReactNode } from "react";
import lines from "/lines.svg";
import { Chip, IosIcon } from "../../../assets/svg/apple";

import "./styles.css";

function PlatformIcon({ children = <IosIcon /> }: { children: ReactNode }) {
  return (
    <div className="platform_icon_container relative w-[88px] h-[88px] rounded-full bg-p1 border-2 border-solid border-buttonBorderBase p-1 hover:border-blue-500 cursor-pointer flex justify-center shrink-0">
      <div
        className="absolute z-10 flex justify-center -top-[1.5px]
      w-full"
      >
        <Chip />
      </div>
      <div className="bg-p5 rounded-full w-full h-full flex justify-center items-center relative">
        <img src={lines} alt="lines_bg" />
        <div className="absolute flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PlatformIcon;
