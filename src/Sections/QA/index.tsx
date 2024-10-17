import { Container } from "../../components/nav/common/Container";
import QAHeader from "./Header";
import QAWidget from "./QAWidget";

import faqImage from "/faq-logo.svg";
const qaData = [
  {
    questionNumber: "01",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "02",
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "03",
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "04",
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "05",
    question: "Do you have corporate plans?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "06",
    question: "What happens when I’m out of storage?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "07",
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "08",
    question: "How do I invite my team?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "09",
    question: "Do you offer training for individuals and teams?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    questionNumber: "10",
    question: "I’m locked out of my account what do I do?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];

export default function QA() {
  return (
    <div>
      <QAHeader />
      <div className="relative flex  mx-auto flex-col">
        <div className="flex border-t-2 border-solid border-p19">
          <div className="w-[80px] h-[80px] bg-p1 mx-auto rounded-full -mt-[40px] border-2 border-sold border-p19 flex justify-center items-center">
            <img src={faqImage} className="w-[40px] h-[40px]" alt="qa_img" />
          </div>
        </div>
        <Container cls="flex  mx-auto lg:flex-col">
          <div className="flex lg:grid lg:grid-cols-2 flex-col">
            <div className="lg:col-span-1 p-5 gap-5 flex flex-col lg:border-r-2 lg:border-solid lg:border-p19">
              {qaData.slice(0, 5).map((qaData, index) => {
                return (
                  <div className="flex" key={index}>
                    <QAWidget
                      answer={qaData.answer}
                      question={qaData.question}
                      questionNumber={qaData.questionNumber}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-1 p-5 gap-5 flex flex-col">
              {qaData.slice(5, 10).map((qaData, index) => {
                return (
                  <div className="flex" key={index}>
                    <QAWidget
                      answer={qaData.answer}
                      question={qaData.question}
                      questionNumber={qaData.questionNumber}
                      key={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
        <div className="flex w-full">
          <div className="mx-auto w-[10px] h-[10px] rounded-full border-2 border-solid border-p19 bg-p1"></div>
        </div>
      </div>
    </div>
  );
}
