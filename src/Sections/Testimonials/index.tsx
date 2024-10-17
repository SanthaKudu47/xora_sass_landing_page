import { tData } from "./data";
import Header from "./Header";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <div className="relative flex flex-col mx-auto overflow-hidden  -mt-[6px] border-t-2 border-solid border-p19">
      <div className="grid grid-cols-3  lg:grid-cols-3 mx-auto  max-w-[1252px]">
        <div className="flex max-w-[400px] lg:max-w-[450px] col-span-3 lg:col-span-1 mx-auto lg:mt-10">
          <Header />
        </div>
        <div className="col-span-3 lg:col-span-2  max-w-[1252px] z-0 flex flex-col md:flex-row  lg:px-0">
          <div className="border-0 lg:border-r-2 border-p19 border-solid">
            {tData.slice(0, 3).map((data, index) => {
              return (
                <div className="relative lg:py-[100px]" key={index}>
                  <Testimonial
                    name={data.name}
                    description={data.description}
                    imgScr={data.imgScr}
                    text={data.text}
                    key={index}
                  />
                  {index != 2 && (
                    <div className="bg-p19 w-screen absolute h-[1.5px] right-0 bottom-0" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative lg:hidden hidden md:flex ">
            <div className=" w-[1.5px]  absolute -top-[310px] bottom-0 bg-p19"></div>
          </div>
          <div>
            {tData.slice(3).map((data, index) => {
              return (
                <div className="relative lg:py-[100px]" key={index}>
                  <Testimonial
                    name={data.name}
                    description={data.description}
                    imgScr={data.imgScr}
                    text={data.text}
                    key={index}
                  />
                  {index != 2 && (
                    <div className="bg-p19 w-screen bottom-0 absolute h-[1.5px] left-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
