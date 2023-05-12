import { useState } from "react";

export default function Header({ isDark, setIsDark, font, setFont }) {
  const [isVisible, setIsVisible] = useState(false);
  const [fontName, setFontName] = useState("Sans Serif");

  const fonts = [
    { name: "Sans Serif", font: "inter" },
    { name: "Serif", font: "lora" },
    { name: "Mono", font: "inconsolata" },
  ];

  return (
    <div className="flex w-full justify-between items-center">
      <img src="./images/logo.svg" alt="logo" />
      <div className="flex gap-4 items-center md:gap-[26px]">
        <div
          className="flex gap-4 items-center"
          onClick={() => setIsVisible(!isVisible)}
        >
          <p
            className={`${
              isDark ? "text-txtOnDark" : "text-txtOnWhite"
            } font-bold text-head md:text-phonetic`}
          >
            {fontName}
          </p>
          <img src="./images/icon-arrow-down.svg" alt="arrow-down" />
        </div>
        <div className="w-[1px] h-8 bg-headerDiv" />
        <div className="flex gap-3 items-center">
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
          <img
            src="./images/icon-moon.svg"
            alt="icon-moon"
            className={`${isDark ? "filter" : ""}`}
          />
          {isVisible ? (
            <div
              className={`absolute z-50 top-[64px] right-[129px] w-[140px] h-[100px] ${
                isDark ? "bg-inputDark" : "bg-wholeWhite"
              } rounded-2xl ${
                isDark ? "shadow-shadDark" : "shadow-shad"
              } p-3 md:top-[105px] md:w-[183px] md:h-[152px] md:px-6 md:py-2 md:right-[168px]`}
            >
              {fonts.map((item) => {
                return (
                  <p
                    onClick={() => {
                      setFont(item.font);
                      setFontName(item.name);
                      setIsVisible(!isVisible);
                    }}
                    key={Math.random()}
                    className={`${
                      isDark ? "text-txtOnDark" : "text-txtOnWhite"
                    } font-bold text-head md:text-phonetic md:mt-4`}
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
