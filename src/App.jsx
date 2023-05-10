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
      className={`w-full px-6 pt-6 pb-[84px] ${
        isDark ? "bg-wholeDark" : "bg-wholeWhite"
      } font-${font}`}
    >
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        font={font}
        setFont={setFont}
      />
      <Input isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
