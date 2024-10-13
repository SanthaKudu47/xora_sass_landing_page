export default function Testimonial({
  text = "I was skeptical at first, but now I can't imagine our content operations without it. It's that impactful.",
  imgScr,
  description = "Vid capital intl",
  name = "Mark Erixon",
}: {
  text?: string;
  imgScr?: string;
  name?: string;
  description?: string;
}) {
  return (
    <div className="flex justify-center flex-col px-3">
      <p className=" text-tp1 font-baseFont text-[24px]  leading-8 my-3 text-left">
        {text}
      </p>
      <div className=" flex flex-row gap-1 items-center">
        <div className="rounded-full w-[67px] h-[67px] p-[3px] border-2 border-buttonBorderBase border-solid">
          <img src={imgScr} alt="testimonial_img" />
        </div>
        <div className="font-baseFont my-10">
          <h3 className="text-[18px] text-th font-semibold">{name}</h3>
          <h4 className="text-[12px] font-bold uppercase text-buttonBorderBase">
            {description}
          </h4>
        </div>
      </div>
      
    </div>
  );
}
