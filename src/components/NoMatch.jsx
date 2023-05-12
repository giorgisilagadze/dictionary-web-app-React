export default function NoMatch({ isDark }) {
  return (
    <div className="w-full mt-24 py-[108px] md:mt-[165.5px] md:py-[120px]">
      <img src="./images/emoji.svg" alt="sad-emoji" className="m-auto" />
      <p
        className={`font-bold text-input text-center mt-5 ${
          isDark ? "text-txtOnDark" : "text-txtOnWhite"
        } md:mt-[44px] md:text-inputTab`}
      >
        No Definitions Found
      </p>
      <p className="font-normal text-definition text-meaning text-center mt-3 md:mt-6 md:text-phonetic">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}
