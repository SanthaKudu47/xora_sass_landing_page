import { ReactNode } from "react";
import "./styles.css";
function SocialMediaButton({ children }: { children: ReactNode }) {
  return (
    <div className="iconWrapper p-1 rounded-full bg-p1 w-[48px] h-[48px] flex justify-center items-center border-2 border-p7 hover:border-p6 cursor-pointer transition-[border] duration-200 delay-0 ease-out">
      {children}
    </div>
  );
}

export default SocialMediaButton;
