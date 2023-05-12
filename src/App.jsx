import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";
import Output from "./components/Output";
import "./index.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("inter");

  return (
    <div
      className={`w-full min-h-screen px-6 pt-6 pb-[84px] ${
        isDark ? "bg-wholeDark" : "bg-wholeWhite"
      } ${
        font === "inter"
          ? "font-inter"
          : font === "lora"
          ? "font-lora"
          : "font-inconsolata"
      } md:pt-[58px] md:px-[39.5px] md:pb-[118px]`}
    >
      <div className="md:max-w-[736px] md:m-auto">
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          font={font}
          setFont={setFont}
        />
        <Input isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
}

export default App;
