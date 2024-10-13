import { Container } from "../../../components/nav/common/Container";

export default function QAHeader() {
  return (
    <div>
      <Container cls="flex-col mx-auto ">
        <div className="font-baseFont relative">
          <div className="relative z-10 my-[100px]  lg:my-[140px]  px-10 lg:px-14 md:max-w-[450px] lg:max-w-[790px] ">
            <h2 className="text-[32px] md:text-[45px] lg:text-[48px] font-semibold text-tp1 leading-[50px]">
              Curiosity didn’t kill the cat, it got answers.
            </h2>
            <h4 className="text-[22px] text-tp2 mt-7">
              You’ve got questions, we’ve got answers.
            </h4>
          </div>

          <div className="absolute inset-0 flex justify-center items-end -mt-1 -z-0  overflow-hidden">
            <div className="flex w-full justify-center">
              <div className="rounded-full border-2 border-solid border-buttonBorderBase bg-p1/5 w-[10px] h-[10px] top-0 absolute" />
              <div className="absolute top-2 bottom-0 w-[2px] bg-buttonBorderBase"></div>
            </div>
            <div className="bg-p15 blur-[400px] w-[300px] h-[300px] absolute rounded-full -bottom-[150px]"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}
