export default function Output({ isDark, word, phonetic, definitions }) {
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
        />
        {/* <audio
        controls
        // onClick={() => audio.play()}
        className="block mt-[50px]"
      >
        <source src={audio} />
      </audio> */}
      </div>
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
        <p className="font-normal text-switchOff text-meaning">Meaning</p>
        <ul className="list-disc ml-5">
          {definitions?.map((item) => {
            return (
              <li className="text-li mt-[13px]" key={Math.random()}>
                <span
                  className={`${
                    isDark ? "text-txtOnDark" : "text-txtOnWhite"
                  } font-normal text-definition`}
                >
                  {item.definition}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
