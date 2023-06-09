import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Output from "./Output";
import NoMatch from "./NoMatch";

export default function InAndOut({ isDark, setIsDark }) {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [isRed, setIsRed] = useState(false);

  const search = () => {
    if (value != "") {
      getData();
      setIsRed(false);
    } else {
      setIsRed(true);
      setData(null);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
      );
      const wordInfo = response.data;
      setData(wordInfo);
      setValue(wordInfo[0].word);
    } catch {
      setData("");
    }
  };

  return (
    <>
      <div className="mt-6 w-full md:mt-[51.5px]">
        <div className="relative">
          <input
            type="text"
            className={`w-full h-[48px] ${
              isDark ? "bg-inputDark" : "bg-input"
            } rounded-2xl pt-[12px] pb-[14px] pl-[24px] focus:outline-none font-bold text-input ${
              isDark ? "text-txtOnDark" : "text-txtOnWhite"
            } absolute z-10 ${
              isRed ? "border-[1px] border-rose-500" : ""
            } md:pt-[19px] md:pb-[22px] md:h-[64px] md:text-inputTab fl:hover:cursor-pointer fl:hover:border-input fl:hover:border-[1px]`}
            placeholder="Search for any word…"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => {
              setValue(event.target.value);
              setIsRed(false);
            }}
          />
          <img
            src="./images/icon-search.svg"
            alt="search-icon"
            className="absolute top-4 right-6 z-20 md:top-6"
            onClick={() => {
              search();
            }}
          />
          {isRed ? (
            <p className="text-red absolute top-[52px] left-1 text-input md:text-inputTab md:top-[68px]">
              Whoops, can’t be empty…
            </p>
          ) : null}
        </div>
      </div>
      {!isRed &&
        data != undefined &&
        (data != "" ? (
          <Output data={data} isDark={isDark} />
        ) : (
          <NoMatch isDark={isDark} />
        ))}
    </>
  );
}
