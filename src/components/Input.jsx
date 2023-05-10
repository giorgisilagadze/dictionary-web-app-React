import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Output from "./Output";
import NoMatch from "./NoMatch";

export default function InAndOut({ isDark, setIsDark }) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [value, setValue] = useState();
  const [result, setResult] = useState(false);

  console.log(value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value != "") {
      getData(event.target.value);
      setValue(event.target.value);
    }
  };

  const getDefinitionsByPartOfSpeech = (data, partOfSpeech) => {
    return data?.flatMap((item) =>
      item.meanings.flatMap((meaning) =>
        meaning.partOfSpeech === partOfSpeech
          ? meaning.definitions.map((def) => def.definition)
          : []
      )
    );
  };

  const getData = async (value) => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
    );
    const wordInfo = response.data;
    const status = response.status;
    setData(wordInfo);
    console.log(status);

    const getAudioLinks = wordInfo?.[0].phonetics
      .map((phonetic) => phonetic.audio)
      .filter((audio) => audio != "");

    const getSynonyms = wordInfo?.[0].meanings
      .map((synonym) => synonym.synonyms)
      .filter((synonyms) => synonyms != "");

    console.log(getAudioLinks);
    const nounDefinitions = getDefinitionsByPartOfSpeech(wordInfo, "noun");
    const verbDefinitions = getDefinitionsByPartOfSpeech(wordInfo, "verb");
    console.log(nounDefinitions);
    console.log(verbDefinitions);
    console.log(getSynonyms[0]);
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
            } absolute z-10`}
            placeholder="Search for any word…"
            onKeyDown={(event) => handleKeyDown(event)}
          />
          <img
            src="./images/icon-search.svg"
            alt="search-icon"
            className="absolute top-4 right-6 z-20"
            onClick={() => {
              if (value != "") {
                getData();
              }
            }}
          />
        </div>
      </div>
      {value != undefined &&
        (data?.[0]?.word === value ? (
          <Output
            isDark={isDark}
            word={value}
            phonetic={data?.[0]?.phonetic}
            definitionsNoun={getDefinitionsByPartOfSpeech(data, "noun")}
            synonyms={data?.[0].meanings
              .map((synonym) => synonym.synonyms)
              .filter((synonyms) => synonyms != "")}
            definitionsVerb={getDefinitionsByPartOfSpeech(data, "verb")}
            voice={data?.[0].phonetics
              .map((phonetic) => phonetic.audio)
              .filter((audio) => audio != "")}
          />
        ) : (
          <NoMatch isDark={isDark} />
        ))}
    </>
  );
}
