import "./App.css";
import { selectMenuStatus } from "./context";
import useSelector from "./hooks/useSelector";
import Header from "./Sections/Header";

function App() {
  console.log("App ...Rendering...");
  const isOpened = useSelector(selectMenuStatus, "common");
  return (
    <div
      className={`relative ${
        isOpened ? "h-screen overflow-hidden " : "overflow-auto"
      }`}
    >
      <main className="relative flex">
        <Header />
      </main>
      <div className="w-full bg-b1 h-screen relative">section 1</div>
      <div className="w-full bg-blue-200 h-screen relative">section 2</div>
    </div>
  );
}

export default App;
