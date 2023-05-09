import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Output from "./Output";

export default function InAndOut({ isDark, setIsDark }) {
  const word = useRef(null);
  let audio = useRef(null);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);

  // const say = () => {
  //   const word = voice.current.value;
  //   if (word) {
  //     const speech = new SpeechSynthesisUtterance(word);
  //     window.speechSynthesis.speak(speech);
  //   }
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && word.current.value != "") {
      getData();
    }
  };

  const getData = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word.current.value}`
    );
    const wordInfo = response.data;
    const status = response.status;
    setData(wordInfo);
    console.log(status);
    console.log(word.current);
    audio = wordInfo?.[0]?.phonetics?.[0]?.audio;
  };

  return (
    <>
      <div className="mt-6 w-full">
        <div className="relative">
          <input
            type="text"
            className={`w-full h-[48px] ${
              isDark ? "bg-inputDark" : "bg-input"
            } rounded-2xl pt-[12px] pb-[14px] pl-[14px] focus:outline-none font-bold text-input ${
              isDark ? "text-txtOnDark" : "text-txtOnWhite"
            } absolute z-1`}
            placeholder="Search for any word…"
            ref={word}
            onKeyDown={handleKeyDown}
          />
          <img
            src="./images/icon-search.svg"
            alt="search-icon"
            className="absolute top-4 right-6 z-2"
            onClick={() => {
              if (word.current.value != "") {
                getData();
              }
            }}
          />
        </div>
      </div>
      <Output
        isDark={isDark}
        word={word?.current?.value}
        phonetic={data?.[0]?.phonetic}
        definitions={data?.[0]?.meanings?.[0]?.definitions}
      />
    </>
  );
}
