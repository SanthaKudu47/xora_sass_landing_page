import useIsScrolled from "../../../hooks/useIsScrolled";
import logoImage from "/xora.svg";
import multiTouch from "/magic.svg";
import close from "/close.svg";
import MobileMenu from "./MobileMenu";
import { selectMenuStatus } from "../../../context";
import useSelector from "../../../hooks/useSelector";
import useDispatch from "../../../hooks/useDispatch";

function NavMobile() {
  const isOpened = useSelector(selectMenuStatus, "common");
  const dispatch = useDispatch();
  const isScrolled = useIsScrolled();

  const menuClickHandler = function () {
    isOpened === false
      ? dispatch("common", { type: "menuOpened" })
      : dispatch("common", { type: "menuClosed" });
  };

  return (
    <>
      <div className="left-0 right-0  fixed h-[88px] top-0  flex flex-row items-center z-50  w-screen px-4 overflow-hidden">
        <div className="flex my-auto flex-row justify-between w-screen">
          <img
            src={logoImage}
            alt="logo_img"
            width={116}
            height={40}
            className="flex"
          />

          <button
            className="w-[40px] h-[40px]  rounded-full  border-solid border-2 border-p3 flex justify-center items-center cursor-pointer"
            onClick={menuClickHandler}
          >
            <img
              src={isOpened === true ? close : multiTouch}
              alt="menu_btn_img"
            />
          </button>
        </div>
      </div>

      <div
        className={`top-0 fixed h-[88px]  w-full z-20 transition-[background] duration-300 ease-in delay-0  ${
          isScrolled ? "backdrop-blur-sm bg-p1" : "backdrop-blur-sm bg-p1/10"
        } `}
      ></div>

      <MobileMenu isOpened={isOpened} />
    </>
  );
}

export default NavMobile;
