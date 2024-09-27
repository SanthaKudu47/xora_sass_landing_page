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
      },
    },
  },
  plugins: [],
};
