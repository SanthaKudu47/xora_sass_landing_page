import { Container } from "../../../components/nav/common/Container";
import useIsScrolled from "../../../hooks/useIsScrolled";
import xora from "/xora.svg";

function DesktopNav() {
  const isScrolled = useIsScrolled();
  return (
    <div
      className={`left-0 right-0 ${
        isScrolled ? "h-[88px] bg-desktopNav/90 " : "h-[136px] bg-desktopNav/10"
      } flex top-0 fixed mx-auto justify-center backdrop-blur-sm  z-50 transition-[height,background] duration-300 delay-0 ease-out`}
    >
      <Container cls="flex-row items-center justify-center min-w-[1252px]">
        <div className="font-baseFont text-tp1 font-bold uppercase text-[16px] w-full">
          <ul className="inline-flex gap-4 items-center w-full justify-between">
            <li>features</li>
            <li>
              <div className="rounded-full bg-dotColor w-[6px] h-[6px]"></div>
            </li>
            <li>pricing</li>
            <li>
              <div className="my-auto px-2">
                <img
                  src={xora}
                  alt="xora_logo"
                  width={`${isScrolled ? 100 : 150}`}
                  className={`origin-center transition-[width] duration-300 delay-0 ease-out`}
                />
              </div>
            </li>
            <li>faq</li>
            <li>
              <div className="rounded-full bg-dotColor w-[6px] h-[6px]"></div>
            </li>
            <li>download</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default DesktopNav;
