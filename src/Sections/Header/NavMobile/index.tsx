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

  console.log("isC", isScrolled);

  const menuClickHandler = function () {
    isOpened === false
      ? dispatch("common", { type: "menuOpened" })
      : dispatch("common", { type: "menuClosed" });
  };
  console.log("Nav rendering...", isScrolled);
  return (
    <>
      <div className="left-0 right-0  fixed h-[88px] top-0 px-4 flex items-center z-30 ">
        <div className="flex w-full my-auto items-center justify-between">
          <img src={logoImage} alt="logo_img" width={116} height={40} />

          <button
            className="w-[40px] h-[40px] rounded-full  border-solid border-2 border-p3 flex justify-center items-center cursor-pointer"
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
