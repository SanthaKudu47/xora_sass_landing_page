import { ReactNode } from "react";
import "./styles.css";
function SocialMediaButton({
  children,
  size = 48,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <div
      className={`iconWrapper p-1 rounded-full bg-p1 w-[${size}px] h-[${size}px] flex justify-center items-center border-2 border-p7 hover:border-p6 cursor-pointer transition-[border] duration-200 delay-0 ease-out`}
    >
      {children}
    </div>
  );
}

export default SocialMediaButton;
