import { Container } from "../../components/nav/common/Container";
import logo from "../../../public/xora.svg";
import PlatformIcon from "./PlatformIcon";
import {
  GlobeIcon,
  IosIcon,
  WindowsIcon,
  XboxIcon,
} from "../../assets/svg/apple";

import screen from "../../../public/screen.jpg";

export default function Download() {
  return (
    <div className="flex bg-gradient-to-t from-p20 to-btnHoveredG2  w-full relative overflow-hidden">
      <Container cls="mx-auto w-full flex-col">
        <div className="grid grid-cols-2 w-full py-5 ">
          <div className="flex flex-col my-auto shrink-0 w-full">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="font-baseFont text-[22px] leading-10 text-tp2 my-5">
              Try it now for free on iOS, Android, PC, Web - whatever your
              flavor, we’ve got you covered.
            </p>
            <div className="flex flex-row gap-3">
              <PlatformIcon>
                <IosIcon />
              </PlatformIcon>
              <PlatformIcon>
                <XboxIcon />
              </PlatformIcon>
              <PlatformIcon>
                <WindowsIcon />
              </PlatformIcon>
              <PlatformIcon>
                <GlobeIcon />
              </PlatformIcon>
            </div>
          </div>
          <div className="flex w-full shrink-0">
            <div className="flex relative">
              <div className="w-[954px] p-5 border-2 border-solid border-buttonBorderBase rounded-3xl">
                <div className="bg-p1 flex p-3">
                 
                  <img src={screen} alt="screen_img" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
