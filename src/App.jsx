import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [font, setFont] = useState("inter");

  return (
    <>
      <div
        className={`w-full h-full px-6 pt-6 pb-[84px] ${
          isDark ? "bg-wholeDark" : "bg-wholeWhite"
        } font-${font}`}
      >
        <Header
          isDark={isDark}
          setIsDark={setIsDark}
          font={font}
          setFont={setFont}
        />
      </div>
    </>
  );
}

export default App;
