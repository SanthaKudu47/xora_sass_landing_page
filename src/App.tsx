import "./App.css";
import { selectMenuStatus } from "./context";
import useSelector from "./hooks/useSelector";
import Features from "./Sections/Features";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Pricing from "./Sections/Pricing";
import QA from "./Sections/QA";

function App() {
  console.log("App ...Rendering...");
  const isOpened = useSelector(selectMenuStatus, "common");
  return (
    <div
      className={`relative overflow-auto ${
        isOpened ? "h-screen overflow-hidden" : ""
      }`}
    >
      <main className="relative flex ">
        <Header />
      </main>
      <Hero />
      <Features/>
      <Pricing/>
      <QA/>
      {/* <div className="w-full h-screen bg-red-500">
        section
      </div> */}
    </div>
  );
}

export default App;
