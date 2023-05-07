import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div
        className={`w-full h-full px-6 pt-6 pb-[84px] ${
          isDark ? "bg-wholeDark" : "bg-wholeWhite"
        }`}
      >
        <Header isDark={isDark} setIsDark={setIsDark} />
      </div>
    </>
  );
}

export default App;
