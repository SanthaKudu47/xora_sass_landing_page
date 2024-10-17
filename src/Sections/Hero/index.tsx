import ButtonV1 from "../../components/nav/common/ButtonV1";
import Caption from "../../components/nav/common/Caption";
import heroImage from "/hero.png";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden" id="section1">
      
      <div className="relative flex w-full h-auto mt-[88px] sm:mt-[136px]  px-5 flex-col md:flex-row max-w-[1252px] mx-auto pt-[60px] pb-[620px]">
        <div className="flex flex-col my-auto z-10 max-w-[380px]">
          <Caption />
          <h1 className="text-tp1 font-extrabold uppercase text-[48px] leading-[48px] md:text-[64px] md:leading-[64px]  lg:text-[84px] lg:leading-[84px] mb-4">
            Amazingly <br /> simple
          </h1>
          <p className="mb-9 text-tp2 text-[22px] font-baseFont text-justify leading-9 tracking-tighter">
            We designed XORA AI Video Editor to be an easy to use, quick to
            learn and surprisingly powerful.
          </p>

          <div className="my-3">
            <ButtonV1 label="try it now" />
          </div>
        </div>

        <img
          src={heroImage}
          alt="hero_img"
          className="absolute  max-w-[1150px] lg:max-w-[1200px] -top-10 md:-top-[280px] lg:-top-[260px] md:left-[calc(50%-300px)]  left-[calc(50%-400px)]"
        />
      </div>
    </div>
  );
}

export default Hero;
