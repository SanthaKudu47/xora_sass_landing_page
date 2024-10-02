import DesktopNav from "./NavDesktop";
import NavMobile from "./NavMobile";

function Header() {
  return (
    <>
    
      <div className="flex lg:hidden w-full">
        <NavMobile />
      </div>
      <div className="hidden lg:block">
        <DesktopNav />
      </div>

    </>
  );
}

export default Header;
