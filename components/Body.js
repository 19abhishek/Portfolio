import React from "react";
import styles from "./Body.module.css";

function Body() {
  return (
    <div className="">
      <div className={`${styles.gradientText} text-center`}>
        Bringing designs to life
      </div>
      <div>Code</div>
      <div>
        Hello, I'm Abhishek. Welcome to my digital garden where I share my
        learnings and the stuff which I've made.{" "}
      </div>
    </div>
  );
}

export default Body;
