import { useRef, useState, useEffect } from "react";
import axios from "axios";

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
    const info = response.data;
    const status = response.status;
    setData(info);
    console.log(status);
    console.log(word.current);
    audio = info?.[0]?.phonetics?.[0]?.audio;
  };

  return (
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
      {/* <audio
        controls
        // onClick={() => audio.play()}
        className="block mt-[50px]"
      >
        <source src={audio} />
      </audio> */}
    </div>
  );
}
