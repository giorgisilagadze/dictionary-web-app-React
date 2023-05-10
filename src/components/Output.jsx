import { useRef } from "react";

export default function Output({
  isDark,
  word,
  phonetic,
  definitionsNoun,
  synonyms,
  definitionsVerb,
  voice,
}) {
  const audio = useRef(null);

  return (
    <div className="w-full mt-24">
      <div className="flex justify-between items-center">
        <div>
          <h1
            className={`${
              isDark ? "text-txtOnDark" : "text-txtOnWhite"
            } font-bold text-word`}
          >
            {word}
          </h1>
          <p className="font-normal text-phonetic text-violet mt-2">
            {phonetic}
          </p>
        </div>
        <img
          src="./images/icon-play.svg"
          alt="icon-play"
          className="w-12 h-12"
          onClick={() => {
            audio.current.play();
            console.log(voice?.[0]);
          }}
        />
        <audio
          controls
          className="hidden"
          ref={audio}
          onClick={() => {
            console.log(voice?.[0]);
          }}
        >
          <source src={voice?.[0]} type="audio/mpeg" />
        </audio>
      </div>
      {definitionsNoun?.length !== 0 ? (
        <div>
          <div className="mt-[29px] flex gap-[16px] items-center">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-bold text-noun italic`}
            >
              noun
            </p>
            <hr
              className={`w-full h-[1px] border-none ${
                isDark ? "bg-hrDark" : "bg-headerDiv"
              }`}
            />
          </div>
          <div className="mt-[31px]">
            <p className="font-normal text-input text-meaning">Meaning</p>
            <ul className="list-disc ml-5">
              {definitionsNoun?.map((item) => {
                return (
                  <li className="text-li mt-[13px]" key={Math.random()}>
                    <span
                      className={`${
                        isDark ? "text-txtOnDark" : "text-txtOnWhite"
                      } font-normal text-definition`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="mt-[20px] flex gap-6 items-center flex-wrap">
        <p className="font-normal text-switchOff text-meaning">Synonyms</p>
        {synonyms?.[0]?.map((item) => {
          return (
            <p
              className="font-normal text-input text-violet"
              key={Math.random()}
            >
              {item}
            </p>
          );
        })}
      </div>

      {definitionsVerb?.length !== 0 ? (
        <div>
          <div className="mt-[33px] flex gap-[16px] items-center">
            <p
              className={`${
                isDark ? "text-txtOnDark" : "text-txtOnWhite"
              } font-bold text-noun italic`}
            >
              verb
            </p>
            <hr
              className={`w-full h-[1px] border-none ${
                isDark ? "bg-hrDark" : "bg-headerDiv"
              }`}
            />
          </div>
          <div className="mt-[31px]">
            <p className="font-normal text-input text-meaning">Meaning</p>
            <ul className="list-disc ml-5">
              {definitionsVerb?.map((item) => {
                return (
                  <li className="text-li mt-[13px]" key={Math.random()}>
                    <span
                      className={`${
                        isDark ? "text-txtOnDark" : "text-txtOnWhite"
                      } font-normal text-definition`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
