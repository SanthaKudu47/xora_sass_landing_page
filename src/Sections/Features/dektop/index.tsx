import ButtonV1 from "../../../components/nav/common/ButtonV1";
import Caption from "../../../components/nav/common/Caption";
import CaptionV1 from "../../../components/nav/common/CaptionV1/CaptionV1";
import { Container } from "../../../components/nav/common/Container";

import feature1Img from "/feature-1.png";
import feature2Img from "/feature-2.png";

import { data, detailData } from "../data";

function DetailBox({
  imgScr = "",
  text = "AI automated video editing",
}: {
  imgScr: string;
  text: string;
}) {
  return (
    <div className="w-[164px] flex flex-col gap-2 items-center my-auto px-5">
      <span className="w-[1px] absolute top-0 bottom-0 bg-buttonBorderBase z-0"></span>
      <div className="w-[84px] z-10">
        <img src={imgScr} alt="detail_img" />
      </div>
      <h4 className="font-baseFont font-bold text-tp2 uppercase text-[14px] text-center z-10">
        {text}
      </h4>
    </div>
  );
}

function FeaturesDesktopView() {
  const CardInner = function ({
    caption1 = "",
    caption2 = "",
    description = "",
    imgSrc = "",
    buttonLabel = "watch the demo",
  }: {
    caption1: string;
    caption2: string;
    description: string;
    imgSrc: string;
    buttonLabel: string;
  }) {
    return (
      <div className="relative flex flex-col justify-between">
        <div className="relative">
          <Caption text={caption1} />
          <div className="mb-[24px] mt-[20px]">
            <CaptionV1 text={caption2} />
          </div>
          <p className="font-baseFont text-[22px] leading-9 text-tp2 mb-[40px]">
            {description}
          </p>
        </div>
        <div>
          <ButtonV1 label={buttonLabel}>
            <span>
              <img src={imgSrc} alt="btn_icon_img" />
            </span>
          </ButtonV1>
        </div>
      </div>
    );
  };

  const ArtWork = function ({ imgSrc }: { imgSrc: string }) {
    return (
      <>
        <div className="flex flex-col items-center absolute top-0 left-[60px]">
          <div className="relative w-[1.7px] h-[60px] bg-buttonBorderBase"></div>
          <div
            className="relative  rounded-full w-[120px] h-[120px] flex justify-center
 items-center"
          >
            <div className="flex relative top-1">
              <img src={imgSrc} alt="feature_img" />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="relative -mt-[450px] w-full flex justify-center">
      <Container cls="justify-center items-center w-full px-5">
        <div className="w-full rounded-3xl grid grid-cols-2 border-2 border-solid border-buttonBorderBase overflow-hidden">
          <div className="relative w-full flex col-span-1 bg-gradient-to-t from-p11 to-p10 px-[60px] pt-[230px] pb-[305px]">
            {/* artwork */}
            <ArtWork imgSrc={feature1Img} />
            {/* artwork */}
            <CardInner
              caption1={data[0].caption1Text}
              caption2={data[0].caption2Text}
              description={data[0].description}
              imgSrc={data[0].iconSrc}
              buttonLabel={data[0].buttonText}
            />
          </div>
          <div className="relative w-full flex col-span-1 bg-gradient-to-t from-p13 to-p12 px-[60px] pt-[230px] pb-[305px]">
            {/* artwork */}
            <ArtWork imgSrc={feature2Img} />
            {/* artwork */}
            <CardInner
              caption1={data[1].caption1Text}
              caption2={data[1].caption2Text}
              description={data[1].description}
              imgSrc={data[1].iconSrc}
              buttonLabel={data[1].buttonText}
            />
          </div>

          <div className="relative col-span-2 w-full h-auto  flex border-2 border-solid border-buttonBorderBase rounded-3xl -mt-[255px] z-10 bg-gradient-to-b from-p1">
            <div className="absolute left-0 right-0 h-[1px] bg-buttonBorderBase top-[100px]"></div>
            <ul className="flex flex-row justify-around items-center w-full relative">
              {detailData.map((data, index) => {
                return (
                  <li key={index}>
                    <DetailBox
                      imgScr={data.imgSrc}
                      text={data.text}
                      key={index}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FeaturesDesktopView;
