/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baseFont: "Poppins, sans-serif",
      },

      colors: {
        p1: "#080D27",
        p2: "#05091D", //nav var bg on mobile view
        p3: "#0A1D41", //mobile button border color
        p4: "#1959ad", //mobile nav gradient color
        p5: "#0c1838", //mobile menu bg color
        p6: "#1959AD", //social icon border highlight color
        p7: "#0D244F", //social icon border color
        p8: "#0E1435",
        p9: "#1A2658",
        tp1: "#eaedff", //text primary color
        th: "#2EF2FF",
        tp2: "#C4CBF5",
        caption1: "#C8EA80", //caption one color
        caption2: "#eaedff",
        cardText: "#c4cbf5",
        buttonBorderBase: "#334679",
        buttonBorderHighLight: "#2876A5",
        buttonGradientColor1: "#253575",
        buttonGradientColor2: "#162561",
        btnHoveredG1: "#0F1638",
        btnHoveredG2: "#1B2659",
        dotColor: "#3c52d9",
        desktopNav: "#05091d",
      },
    },
  },
  plugins: [],
};
