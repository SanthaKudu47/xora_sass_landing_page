import DesktopNav from "./NavDesktop";
import NavMobile from "./NavMobile";

function Header() {
  return (
    <>
      <div className="flex absolute lg:hidden w-screen overflow-hidden z-50">
        <NavMobile />
      </div>
      <div className="hidden  lg:block">
        <DesktopNav />
      </div>
    </>
  );
}

export default Header;
