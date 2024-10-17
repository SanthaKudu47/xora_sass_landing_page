import { useEffect } from "react";
import "./App.css";
import { selectMenuStatus } from "./context";
import useSelector from "./hooks/useSelector";
import Download from "./Sections/Download";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";
import QA from "./Sections/QA";
import Testimonials from "./Sections/Testimonials";

let scrollY = window.scrollY;

function App() {
  const isOpened = useSelector(selectMenuStatus, "common") as boolean;
  useEffect(() => {
    if (isOpened) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
      window.scrollTo(0, +scrollY);
    }
  }, [isOpened]);
  return (
    <div className="relative">
      <main className="relative flex ">
        <Header />
      </main>
      <Hero />
      <Features />
      <Pricing />
      <QA />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
