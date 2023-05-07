import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex w-full justify-between items-center">
      <img src="./images/logo.svg" alt="logo" />
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <p>Sans Serif</p>
          <img src="./images/icon-arrow-down.svg" alt="arrow-down" />
        </div>
        <div className="w-[1px] h-8 bg-headerDiv" />
        <div className="flex gap-3">
          <div
            className={`w-10 h-5 ${
              isDark ? "bg-switchOn" : "bg-switchOff"
            } rounded-[10px] p-[3px]`}
            onClick={() => setIsDark(!isDark)}
          >
            <div
              className={`w-[14px] h-[14px] bg-wholeWhite rounded-[50%] ${
                isDark ? "ml-5" : "ml-0"
              } ease-in duration-100`}
            />
          </div>
          <img src="./images/icon-moon.svg" alt="icon-moon" />
        </div>
      </div>
    </div>
  );
}
