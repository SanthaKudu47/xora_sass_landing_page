import magicTouch from "/magictouch.svg";
import docs from "/docs.svg";

import detail1 from "/detail-1.png";
import detail2 from "/detail-1.png";
import detail3 from "/detail-1.png";
import detail4 from "/detail-1.png";

const data = [
  {
    caption1Text: "Easy integration",
    caption2Text: "Work smarter not harder",
    description:
      "With Xora, tedious tasks are history. Automation and smart processes bring your productivity to new heights. It's like having an extra cup of coffee, but without the jitters.",
    iconSrc: magicTouch,
    buttonText: "watch the demo",
  },
  {
    caption1Text: "Secure & trustworthy",
    caption2Text: "Sleep easy, we got your back",
    description:
      "Your data security is our priority. With state-of-the-art encryption and robust privacy controls, Xora helps keeps your information secure and locked up tighter than Fort Knox.",
    iconSrc: docs,
    buttonText: "read the docs",
  },
];

const detailData = [
  { imgSrc: detail1, text: "AI automated video editing" },
  { imgSrc: detail2, text: "Collaborate with your team" },
  { imgSrc: detail3, text: "Ultra fast cloud-engine" },
  { imgSrc: detail4, text: "24 / 7 Customer support" },
];

export { data,detailData };
