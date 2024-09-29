import heroImage from "/hero.png";

function Hero() {
  return (
    <div className="flex w-full h-auto mt-[88px] px-5 flex-col md:flex-row max-w-[1252px] mx-auto pt-[60px] pb-[128px] overflow-hidden relative">
      <div className="flex flex-col my-auto z-10 max-w-[380px]">
        <h4 className="font-baseFont text-[12px] font-semibold text-caption1 uppercase tracking-[0.3rem] mb-4">
          Video editing
        </h4>
        <h1 className="text-tp1 font-extrabold uppercase text-[48px] leading-[48px] mb-4">
          Amazingly <br /> simple
        </h1>
        <p className="mb-9 text-tp2 text-[22px] font-baseFont text-justify leading-9 tracking-tighter">
          We designed XORA AI Video Editor to be an easy to use, quick to learn
          and surprisingly powerful.
        </p>

        <div className="my-10">button</div>
      </div>

      <div className="flex overflow-hidden bg-slate-100 w-full">
        <img
          src={heroImage}
          alt="hero_img"
          className="max-w-[1150px] -top-10  left-[calc(50%-400px)] absolute "
        />
      </div>
    </div>
  );
}

export default Hero;
