import { Container } from "../../components/nav/common/Container";
import logo from "/xora.svg";
import PlatformIcon from "./PlatformIcon";
import {
  GlobeIcon,
  IosIcon,
  WindowsIcon,
  XboxIcon,
} from "../../assets/svg/apple";

import screen from "/screen.jpg?url";

export default function Download() {
  return (
    <div className="flex flex-col bg-gradient-to-t from-p20 to-btnHoveredG2 w-full relative overflow-hidden pb-[100px]" id="section6">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-[1252px] relative mx-auto">
        <div className="col-span-1 flex w-full" />
        <div className="col-span-2 flex w-full relative justify-center h-[100px] pr-[22px]">
          <div className="hidden md:block  h-[100px] w-[1.5px]  bg-buttonBorderBase md:absolute" />
        </div>
      </div>
      <Container cls="mx-auto w-full flex-col px-5">
        <div className="grid grid-cols-1 md:grid-cols-12  lg:grid-cols-2 w-full">
          <div className="flex flex-col col-span-4 lg:col-span-1 my-auto shrink-0 w-full">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="font-baseFont text-[22px] leading-10 text-tp2 my-5 pr-5 lg:pr-0">
              Try it now for free on iOS, Android, PC, Web - whatever your
              flavor, we’ve got you covered.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 relative overflow-hidden ">
              <div className="flex gap-5">
                <PlatformIcon>
                  <IosIcon />
                </PlatformIcon>
                <PlatformIcon>
                  <XboxIcon />
                </PlatformIcon>
                <div className="block md:hidden">
                  <PlatformIcon>
                    <WindowsIcon />
                  </PlatformIcon>
                </div>
              </div>

              <div className="flex-row flex w-full">
                <div className="flex gap-5 flex-row">
                  <div className="hidden md:block">
                    <PlatformIcon>
                      <WindowsIcon />
                    </PlatformIcon>
                  </div>
                  <PlatformIcon>
                    <GlobeIcon />
                  </PlatformIcon>
                </div>

                <div className="items-center relative left-0 right-0 w-full hidden md:flex">
                  <div className="h-[1.7px] bg-buttonBorderBase  lg:flex absolute w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full col-span-8 lg:col-span-1 shrink-0 hidden md:flex">
            <div className="flex relative">
              <div className="w-[954px] p-4 border-2 border-solid border-buttonBorderBase rounded-3xl">
                <div className="bg-p1 flex px-5 pt-8 pb-5 rounded-3xl relative">
                  <div className="absolute top-3 left-6 z-10 flex-row gap-2 flex">
                    <div className="rounded-full w-[10px] h-[10px] bg-blue-500" />
                    <div className="rounded-full w-[10px] h-[10px] bg-blue-500" />
                    <div className="rounded-full w-[10px] h-[10px] bg-blue-500" />
                  </div>

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
