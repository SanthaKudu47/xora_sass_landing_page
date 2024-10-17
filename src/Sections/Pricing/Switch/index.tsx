export default function Switch({
  subPlan,
  setSubPlan,
}: {
  subPlan: "monthly" | "annually";
  setSubPlan: React.Dispatch<React.SetStateAction<"monthly" | "annually">>;
}) {
  const switchHandler = (id = "M") => {
    if (subPlan === "monthly" && id === "M") {
      return;
    }
    setSubPlan(subPlan === "monthly" ? "annually" : "monthly");
  };
  return (
    <div className="bg-white h-[75px] w-[350px] rounded-[20px] flex justify-center items-center border-[4px]  border-solid border-p16 bg-gradient-to-t from-p12 to-p11">
      <div className="rounded-2xl justify-center items-center flex w-full h-full border-2 border-black border-solid">
        <div className="cursor-pointer  flex flex-row w-full h-full justify-around items-center font-baseFont font-semibold text-tp1 text-[16px] uppercase relative">
          <span
            className="z-10 w-full h-full inline-flex justify-center items-center"
            onClick={() => {
              switchHandler("M");
            }}
          >
            <h4>Monthly</h4>
          </span>
          <span
            className="z-10 w-full h-full inline-flex justify-center items-center"
            onClick={() => {
              switchHandler("A");
            }}
          >
            <h4>annual</h4>
          </span>
          <div
            className={`flex absolute top-0 bottom-0  rounded-[13px] m-1 bg-p12 overflow-hidden transition-[left,right] duration-200 delay-0 ease-in ${
              subPlan == "monthly"
                ? "left-0 right-[calc(50%)]"
                : "left-[calc(50%)] right-0"
            }`}
          >
            <div className="w-full h-[30px] bg-th rounded-3xl blur-[20px] mx-1 -mt-3 opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
