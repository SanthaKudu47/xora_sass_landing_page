import bgOutLines from "/bg-outlines.svg";
import bgFill from "/bg-outlines-fill.png";
import NavLink from "../../../../components/nav/NavLink";
import SocialMediaButton from "../../../../components/nav/SocialMediaButton";
import {
  DiscordIcon,
  InstaIcon,
  ThreadsIcon,
  XIcon,
} from "../../../../assets/svg";

function MobileMenu({ isOpened = false }: { isOpened: boolean }) {
  return (
    <>
      {isOpened && (
        <div className="flex w-screen  h-screen z-20  overflow-y-hidden bg-p5">
          <div className="flex absolute inset-0">
            <div className="relative w-full my-auto h-auto z-20">
              <nav className="ml-14">
                <ul>
                  <NavLink text={"Features"} target="" />
                  <NavLink text={"Pricing"} target="" />
                  <NavLink text={"FAQ"} target="" />
                  <NavLink text={"Download"} target="" />
                </ul>
              </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-row gap-4 p-5">
              <SocialMediaButton>
                <XIcon />
              </SocialMediaButton>
              <SocialMediaButton>
                <ThreadsIcon />
              </SocialMediaButton>
              <SocialMediaButton>
                <InstaIcon />
              </SocialMediaButton>
              <SocialMediaButton>
                <DiscordIcon />
              </SocialMediaButton>
            </div>
          </div>

          {/* bg */}
          <div className="flex h-[960px] min-w-[380px]">
            <img className="absolute" src={bgFill} alt="bg_fill" width={380} />
            <img className="" src={bgOutLines} alt="bg_outlines" />
          </div>
          <div className="w-[252px] h-[440px] bg-p4 absolute rounded-full blur-[200px] -right-[260px] top-[calc(50%-220px)]"></div>
          {/* bg */}
        </div>
      )}
    </>
  );
}

export default MobileMenu;
