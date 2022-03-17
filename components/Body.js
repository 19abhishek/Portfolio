import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import Button from "./Button";

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
    <div className="flex flex-col gap-8 p-4">
      <div className={`${styles.gradientText} text-center mt-8`}>
        Bringing designs to life
      </div>
      <div className={`${styles.gradientText} text-center`}>{currWord}</div>
      <div className="text-[1.8rem] dark:text-white text-center mt-8">
        <div>
          Hello, I&apos;m Abhishek. Welcome to my digital garden where I share
          my learnings and the stuff that I make.
        </div>{" "}
        <div className="mt-4">
          I am a self taught developer and I love building websites which are
          both functional and aesthetic.
        </div>
      </div>
      <a href="mailto:abhishek.kum1908@gmail.com">
        <Button text={"say Hello!"} />
      </a>
    </div>
  );
}

export default Body;
