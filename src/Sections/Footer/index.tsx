import {
  DiscordIcon,
  InstaIcon,
  LogoImg,
  ThreadsIcon,
  XIcon,
} from "../../assets/svg";
import Marker from "../../components/nav/common/ButtonV1/Marker";
import { Container } from "../../components/nav/common/Container";
import lines from "../../../public/lines.svg";
import SocialMediaButton from "../../components/nav/SocialMediaButton";
import Logo from "../../../public/faq-logo.svg";

function Footer() {
  return (
    <div className="overflow-hidden flex-col relative mx-auto flex w-full">
      <div className="absolute -top-[150px] md:top-[300px] lg:-top-[150px] justify-end md:justify-center left-0 right-0 flex z-0">
        <LogoImg cls="w-[600px] opacity-20 relative left-[200px] md:left-0" color="#172554" />
      </div>

      <Container cls="flex-col mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[600px]">
          <div className="flex flex-col justify-around order-2 h-[600px] lg:h-auto  lg:order-1">
            <div className="pt-10 z-10 px-5 flex ">
              <ul className="font-baseFont font-bold text-tp2 text-[32px] flex gap-y-6 flex-col">
                <li className="hover:text-th cursor-pointer">Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Download</li>
              </ul>
            </div>
            <div className="flex flex-row justify-between font-baseFont font-bold text-tp2 text-[12px]  z-10 px-5">
              <div>© Copyright UI8, LLC.</div>
              <div>
                <ul className="flex flex-row gap-x-2">
                  <li>Privacy</li>
                  <li>.</li>
                  <li>Terms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 hidden md:block">
            <div className="max-w-[440px]  flex flex-col justify-between h-full pt-20 pb-10 w-full mx-auto">
              <div className="flex flex-col">
                <h2 className="text-[48px] font-bold text-tp1 py-2">
                  Subscribe
                </h2>
                <p className="text-[22px] text-tp2 py-5">
                  Sign up to our newsletter for feature updates and our undying
                  love.
                </p>
                <form className="border-buttonBorderBase border-2 border-solid rounded-2xl  bg-p11 overflow-hidden p-1 relative flex my-5">
                  <div className="flex flex-row border-2 border-solid border-black rounded-xl px-1 items-center w-full">
                    <input
                      type="email"
                      placeholder="youremail@domain.com"
                      required
                      className="w-full h-[60px] bg-p11 focus-visible:outline-none rounded-3xl text-tp1 font-baseFont"
                    />
                    <button type="submit" name="" className="flex h-full ">
                      <div className="relative flex  w-[60px] h-full items-center justify-center flex-col">
                        <img src={lines} alt="" className="absolute w-[50px]" />
                        <div className="flex">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <path d="M16.837 5.755l.123.092 6.063 5.055.038.036-.1-.092.071.063.099.103.074.092.067.099.08.146.038.086c.071.174.11.365.11.565s-.039.39-.11.564l-.092.188-.06.095-.086.113-.079.088-.087.082-6.026 5.022a1.5 1.5 0 0 1-2.033-2.201l.113-.104 2.815-2.348H10a1.5 1.5 0 0 1-.144-2.993L10 10.5h7.857L15.04 8.152a1.5 1.5 0 0 1 1.669-2.475l.129.078zM4 10.5a1.5 1.5 0 0 1 .144 2.993L4 13.5H2a1.5 1.5 0 0 1-.144-2.993L2 10.5h2z"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className="absolute flex justify-start items-center right-0 origin-center rotate-180 ">
                      <Marker />
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex flex-row gap-5 ">
                <SocialMediaButton size={60}>
                  <XIcon size={25} />
                </SocialMediaButton>
                <SocialMediaButton size={60}>
                  <ThreadsIcon size={25} />
                </SocialMediaButton>
                <SocialMediaButton size={60}>
                  <InstaIcon size={25} />
                </SocialMediaButton>
                <SocialMediaButton size={60}>
                  <DiscordIcon size={25} />
                </SocialMediaButton>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute flex h-[250px] overflow-hidden left-0 right-0 bottom-0">
        <div className="absolute w-[200px] h-[200px] bg-blue-500 rounded-full blur-3xl -left-[100px] -bottom-[100px]" />
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2 justify-center items-center absolute inset-0 z-0">
        <div className="order-2 lg:order-1"></div>
        <div className="order-1 lg:order-2 bg-gradient-to-t from-btnHoveredG1 to-p10 font-baseFont h-full justify-center lg:justify-start relative hidden md:flex ">
          <div className=" absolute -bottom-[35px] lg:top-[100px] -mx-[35px] w-[70px] h-[70px] bg-p1 border-2 border-solid border-buttonBorderBase rounded-full flex justify-center items-center">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
