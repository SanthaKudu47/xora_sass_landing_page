import check from "/check.png";
import ButtonV1 from "../../../../components/nav/common/ButtonV1";
import { useEffect } from "react";

let timer: number | undefined = undefined;
let valueFrom = {
  middle: 0,
  left: 0,
  right: 0,
};

function updatePriceValue(valueTo: number) {
  const span = document.getElementById("price");
  const id = span?.dataset["id"] as "middle" | "left" | "right";
  if (!span || !id) return;
  if (valueFrom[id] < valueTo) {
    valueFrom[id] = valueFrom[id] + 1;
    console.log("in logic", valueFrom);
    span.innerHTML = valueFrom[id].toString();
    timer = setTimeout(() => {
      updatePriceValue(valueTo);
    }, 50);
  } else {
    if (timer) clearInterval(timer);
  }
}

function incrementAnimation(valueFromP: number, valueTo: number) {
  const span = document.getElementById("price");
  const id = span?.dataset["id"] as "middle" | "left" | "right";
  if (!span || !id) return;
  valueFrom[id] = valueFromP;
  updatePriceValue(valueTo);
}

export default function Card({
  caption,
  price,
  text,
  features,
  isMarkerLighted = false,
  btnIconSrc,
  pricePlanImgSrc,
  selected = false,
  place = "middle",
}: {
  caption: string;
  price: string;
  text: string;
  features: string[];
  isMarkerLighted?: boolean;
  btnIconSrc: string;
  pricePlanImgSrc: string;
  selected: boolean;
  place: "left" | "right" | "middle";
}) {
  useEffect(() => {
    console.log("cards...");
    incrementAnimation(5, 85);
  }, []);
  return (
    <div
      className={`w-[370px]  ${
        place === "middle"
          ? "rounded-[40px]"
          : place === "left"
          ? "lg:rounded-l-[40px]"
          : "lg:rounded-r-[40px]"
      }     border-2 border-pcBorderLight border-solid relative`}
    >
      <div className="absolute left-0 right-0 z-20">
        <img
          src={pricePlanImgSrc}
          alt="plan_icon"
          className="w-[80px] h-[80px] mx-auto -mt-5"
        />
      </div>
      <div
        className={`${
          selected ? "bg-pcCardSelected1" : "bg-pcCardBase"
        } left-0 right-0 absolute top-0 z-10 ${
          place === "middle"
            ? "rounded-t-[36px]"
            : place === "left"
            ? "rounded-l-[36px]"
            : "rounded-r-[36px]"
        }  px-5  m-[2px] pt-[100px] flex justify-center flex-col `}
      >
        <div
          className={`font-baseFont font-bold uppercase ${
            selected
              ? "text-caption1   border-caption1"
              : "text-p18   border-p18"
          } border-2 border-solid rounded-3xl inline mx-auto px-3 tracking-[4px] text-[12px] ${
            selected ? "py-3" : "py-1"
          }`}
        >
          {caption}
        </div>
        <div
          className={`font-baseFont font-bold ${
            selected ? "text-caption1" : "text-tp2"
          } text-[80px] flex justify-center  relative`}
        >
          <span>$</span>
          <span id="price" data-id={place}>
            {price}
          </span>
          <span className="absolute text-tp2 text-[17px] uppercase right-10 top-5">
            / mo
          </span>
        </div>
        <h3 className="font-normal text-tp2 text-center text-[25px] -mt-4 pb-4">
          {text}
        </h3>
        {!selected && (
          <div className="border-b-2 border-buttonBorderBase "></div>
        )}
      </div>
      <div
        className={`flex flex-col relative w-full h-full ${
          selected
            ? "bg-gradient-to-t from-pcCardSelectedGradientFrom to-pcCardSelectedGradientTo"
            : "bg-pcCardBase"
        } ${
          place === "middle"
            ? "rounded-[38px]"
            : place === "left"
            ? "rounded-l-[38px]"
            : "rounded-r-[38px]"
        }`}
      >
        <div className="pt-[320px] pl-[56px]">
          <ul className={`mx-auto ${selected ? "my-5" : "my-0"}`}>
            {features.map((data, index) => (
              <li
                key={index}
                className="flex flex-row items-center gap-4 font-baseFont text-[16px] text-tp2 font-semibold my-3"
              >
                <span className="inline">
                  <img src={check} width={40} alt="check_img" />
                </span>
                <span>{data}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-9 mx-auto">
          <ButtonV1 isMarkerLighted={isMarkerLighted} label="get started">
            <span>
              <img src={btnIconSrc} alt="button_icon" />
            </span>
          </ButtonV1>
        </div>

        {selected && (
          <div
            className={`mx-auto mb-5 font-baseFont text-caption1 text-[12px]`}
          >
            <span>- &nbsp;&nbsp; Limited time offer &nbsp;&nbsp; -</span>
          </div>
        )}
      </div>
    </div>
  );
}
