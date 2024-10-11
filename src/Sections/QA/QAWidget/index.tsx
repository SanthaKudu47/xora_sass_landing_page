import {
  MouseEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "./styles.css";

const data = {
  questionNumber: "1",
  question: "How easy is it to setup Xora?",
  answer:
    "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
};

function ExpandButton({
  clickHandler,
  isOpen,
}: {
  clickHandler: (
    _event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
  isOpen: boolean;
}) {
  return (
    <div
      className="flex justify-center items-center overflow-hidden p-[3px] qaButtonBorderEffect"
      onClick={clickHandler}
    >
      <div className="w-[40px] h-[40px] rounded-full relative bg-qaButtonLight overflow-hidden flex justify-center items-center mx-auto">
        <span className="relative top-1">
          <span className="w-[36px] h-[36px] rounded-full  bg-qaButtonBase text-center flex justify-center items-center blur-sm" />
        </span>
      </div>
      <span className="absolute flex inset-0 justify-start items-center  text-caption1  font-baseFont text-[30px]">
        <div className="mx-auto flex justify-center flex-col items-center w-5 h-5 relative">
          <div className="w-[15px] h-[4px] bg-caption1 relative top-[2px]" />
          <div
            className={`w-[15px] h-[4px] ${
              isOpen ? "bg-caption1" : "bg-th"
            } origin-center transition-all duration-200 ease-in-out delay-0 ${
              isOpen && "rotate-90"
            } relative -top-[2px]`}
          ></div>
        </div>
      </span>
    </div>
  );
}

export default function QAWidget({
  questionNumber = "01",
  question = "How easy is it to setup Xora?",
  answer = "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
}: {
  questionNumber: string;
  question: string;
  answer: string;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const clickHandler = function (
    _event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col text-white w-full px-5 rounded-3xl  p-3 bg-p1 overflow-hidden relative ${
        isOpen ? "" : "bg-p1 "
      } `}
    >
      <div
        className={`hidden lg:block absolute bg-gradient-to-t from-buttonGradientColor2 to-buttonGradientColor1 rounded-3xl inset-0 border-2 border-solid border-buttonBorderBase  ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200 delay-0 ease-in`}
      >
        <div className="w-1/4 h-[1px] bg-th absolute -top-[1px] left-7"></div>
      </div>
      <div className="relative">
        <div className="hidden lg:block text-caption1 font-baseFont">
          {questionNumber}
        </div>
        <div className="flex flex-row justify-between items-center text-tp1 text-[24px] font-baseFont w-full mx-auto">
          <span className={`flex ${isOpen && "text-th"}`}>{question}</span>
          <span className="flex w-[50px] justify-center relative">
            <ExpandButton clickHandler={clickHandler} isOpen={isOpen} />
          </span>
        </div>

        <div
          className={`grid relative py-4 resizeAnimation  ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="text-[18px] text-tp2 leading-7 pr-5 text-left flex  overflow-hidden">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
