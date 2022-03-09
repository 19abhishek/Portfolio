import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";

function Body() {
  const words = ["dream.", "believe.", "achieve."];
  const [index, setIndex] = useState(0);
  const [currWord, setCurrWord] = useState(words[index]);

  function getWord() {
    setCurrWord(words[index++ % 3]);
  }

  useEffect(() => {
    setInterval(getWord, 2500);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className={`${styles.gradientText} text-center`}>
        Bringing designs to life
      </div>
      <div className={`${styles.gradientText} text-center`}>{currWord}</div>
      <div className="text-[1.8rem] text-gray-200 dark:text-gray-800 leading-10 leading-8 text-center mt-8">
        Hello, I'm Abhishek. Welcome to my digital garden where I share my
        learnings and the stuff that I make.
        <br /> I am a self taught developer and I love building websites which
        are both functional and aesthetic.
      </div>
    </div>
  );
}

export default Body;
