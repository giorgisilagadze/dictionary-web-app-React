import { useRef, useEffect, useState } from "react";

export default function Output({ isDark, data }) {
  const audio = useRef(null);
  const [hover, setHover] = useState(false);

  const voice = data
    ?.map((item) =>
      item.phonetics
        .map((phonetic) => phonetic.audio)
        .filter((audio) => audio != "")
    )
    .flat();

  useEffect(() => {
    if (audio.current && voice) {
      audio.current.src = voice[0];
    }
  }, [voice]);

  const getDefinitionsByPartOfSpeech = (data, partOfSpeech) => {
    return data?.flatMap((item) =>
      item.meanings.flatMap((meaning) =>
        meaning.partOfSpeech === partOfSpeech
          ? meaning.definitions.map((def) => def.definition)
          : []
      )
    );
  };

  const definitionsNoun = getDefinitionsByPartOfSpeech(data, "noun");
  const definitionsVerb = getDefinitionsByPartOfSpeech(data, "verb");
  const definitionsAdj = getDefinitionsByPartOfSpeech(data, "adjective");

  const getExamplesByPartOfSpeech = (data, partOfSpeech) => {
    return data?.flatMap((item) =>
      item.meanings.flatMap((meaning) =>
        meaning.partOfSpeech === partOfSpeech
          ? meaning.definitions.map((def) => def.example)
          : []
      )
    );
  };

  const exampleOfNoun = getExamplesByPartOfSpeech(data, "noun");
  const exampleOfVerb = getExamplesByPartOfSpeech(data, "verb");
  const exampleOfAdj = getExamplesByPartOfSpeech(data, "adjective");

  const word = data[0].word;

  const phonetic = data?.[0]?.phonetic;

  const synonyms = data?.[0].meanings
    .map((synonym) => synonym.synonyms)
    .filter((synonyms) => synonyms != "");

  const source = data?.[0]?.sourceUrls;

  return (
    <div className="w-full mt-24 md:mt-[165.5px]">
      <div className="flex justify-between items-center">
        <div>
          <h1
            className={`${
              isDark ? "text-txtOnDark" : "text-txtOnWhite"
            } font-bold text-word md:text-wordTab`}
          >
            {word}
          </h1>
          <p className="font-normal text-phonetic text-violet mt-2 md:mt-[11px] md:text-phoneticTab">
            {phonetic}
          </p>
        </div>
        <div
          className="relative w-12 h-12 md:h-[75px] md:w-[75px] fl:cursor-pointer"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={() => {
            console.log(audio.current);
            audio.current.play();
          }}
        >
          <img
            src="./images/Oval.svg"
            alt="oval"
            className={`absolute opacity-25 ${hover && "fl:opacity-100"}`}
          />
          <img
            src="./images/icon-play.svg"
            alt="icon-play"
            className={`w-[13px] h-[13px] absolute top-[18px] left-[19px] z-40 md:top-[27px] md:left-[29px] md:w-[21px] md:h-[21px] ${
              hover && "fl:brightness-[500%]"
            }`}
          />
        </div>

        <audio controls className="hidden" ref={audio}>
          <source src="" type="audio/mpeg" />
        </audio>
      </div>
      {definitionsNoun?.length !== 0 ? (
        <div>
          <div className="mt-[29px] flex gap-[16px] items-center md:mt-[42px] md:gap-[32px]">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-bold text-noun italic md:text-nounTab`}
            >
              noun
            </p>
            <hr
              className={`w-full h-[1px] border-none ${
                isDark ? "bg-hrDark" : "bg-headerDiv"
              }`}
            />
          </div>
          <div className="mt-[31px] md:mt-[40px]">
            <p className="font-normal text-input text-meaning md:text-inputTab md:pb-[14px]">
              Meaning
            </p>
            <ul className="list-disc ml-5 md:ml-10">
              {definitionsNoun?.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="text-li mt-[13px]">
                      <span
                        className={`${
                          isDark ? "text-txtOnDark" : "text-txtOnWhite"
                        } font-normal text-definition md:text-phonetic`}
                      >
                        {item}
                      </span>
                    </li>
                    {exampleOfNoun[index] && (
                      <p className="mt-[13px] text-meaning text-definition md:text-phonetic">
                        "{exampleOfNoun[index]}"
                      </p>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      {synonyms?.length !== 0 ? (
        <div className="mt-[20px] flex gap-4 items-center flex-wrap md:mt-[40px] md:gap-5">
          <p className="font-normal text-meaning md:text-inputTab">Synonyms</p>
          {synonyms?.[0]?.map((item) => {
            return (
              <p
                className="font-normal text-input text-violet md:text-inputTab fl:cursor-pointer fl:hover:underline"
                key={Math.random()}
              >
                {item}
              </p>
            );
          })}
        </div>
      ) : null}

      {definitionsVerb?.length !== 0 ? (
        <div>
          <div className="mt-[33px] flex gap-[16px] items-center md:mt-[40px] md:gap-[32px]">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-bold text-noun italic md:text-nounTab`}
            >
              verb
            </p>
            <hr
              className={`w-full h-[1px] border-none ${
                isDark ? "bg-hrDark" : "bg-headerDiv"
              }`}
            />
          </div>
          <div className="mt-[31px] md:mt-[40px]">
            <p className="font-normal text-input text-meaning md:text-inputTab md:pb-[14px]">
              Meaning
            </p>
            <ul className="list-disc ml-5 md:ml-10">
              {definitionsVerb?.map((item, index) => {
                return (
                  <div key={Math.random()}>
                    <li className="text-li mt-[13px]">
                      <span
                        className={`${
                          isDark ? "text-txtOnDark" : "text-txtOnWhite"
                        } font-normal text-definition md:text-phonetic`}
                      >
                        {item}
                      </span>
                    </li>
                    {exampleOfVerb[index] && (
                      <p className="mt-[13px] text-meaning text-definition md:text-phonetic">
                        "{exampleOfVerb[index]}"
                      </p>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      {definitionsAdj?.length !== 0 ? (
        <div>
          <div className="mt-[33px] flex gap-[16px] items-center md:mt-[40px] md:gap-[32px]">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-bold text-noun italic md:text-nounTab`}
            >
              adjective
            </p>
            <hr
              className={`w-full h-[1px] border-none ${
                isDark ? "bg-hrDark" : "bg-headerDiv"
              }`}
            />
          </div>
          <div className="mt-[31px] md:mt-[40px]">
            <p className="font-normal text-input text-meaning md:text-inputTab md:pb-[14px]">
              Meaning
            </p>
            <ul className="list-disc ml-5 md:ml-10">
              {definitionsAdj?.map((item, index) => {
                return (
                  <div key={index}>
                    <li className="text-li mt-[13px]">
                      <span
                        className={`${
                          isDark ? "text-txtOnDark" : "text-txtOnWhite"
                        } font-normal text-definition md:text-phonetic`}
                      >
                        {item}
                      </span>
                    </li>
                    {exampleOfAdj[index] && (
                      <p className="mt-[13px] text-meaning text-definition md:text-phonetic">
                        "{exampleOfAdj[index]}"
                      </p>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      <hr
        className={`w-full h-[1px] border-none mt-[32px] ${
          isDark ? "bg-hrDark" : "bg-headerDiv md:mt-[40px]"
        }`}
      />

      <div className="mt-6 md:flex md:gap-[25px] md:items-center">
        <p className="font-normal text-source text-meaning underline">Source</p>
        <div className="mt-2 flex gap-2 md:mt-0">
          <a href={source} target="_blank">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-normal text-source underline`}
            >
              {source[0]}
            </p>
          </a>
          <img src="./images/icon-new-window.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
