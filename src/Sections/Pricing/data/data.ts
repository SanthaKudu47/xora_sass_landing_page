import triangleBtnIcon from "/triangle.svg";
import plane2 from "/plan-2.png";
import plane1 from "/plan-1.png";
import plane3 from "/plan-3.png";
const priceCardData = [
  {
    caption: "Overdrive",
    price: "79",
    text: "Most popular plan",
    btnIconSrc: triangleBtnIcon,
    pricePlanImgSrc: plane2,
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
  },
  {
    caption: "Core",
    price: "19",
    text: "Best for solo creators",
    btnIconSrc: triangleBtnIcon,
    pricePlanImgSrc: plane1,
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
  },
  {
    caption: "Team",
    price: "39",
    text: "Exclusively for teams",
    btnIconSrc: triangleBtnIcon,
    pricePlanImgSrc: plane3,
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
  },
];

export { priceCardData };
