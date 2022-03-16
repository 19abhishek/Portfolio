import React from "react";
import Image from "next/image";
import styles from "./Body.module.css";

function Card({ img, text, link, desc }) {
  const cImg = img;
  if (!img) {
    return (
      <div className="w-[32rem] relative h-[18rem] flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms] hover:shadow-lg hover:shadow-pink-500"></div>
    );
  }
  return (
    <a href={link} target="_blank">
      <div className="w-[32rem] relative h-[18rem] flex justify-between  bg-gradient-to-r from-gray-500 to-white-500 text-white rounded-xl hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms] hover:shadow-lg hover:shadow-pink-500">
        <Image
          src={img}
          layout="fill"
          className="object-cover rounded-xl z-0 opacity-40 hover:opacity-10"
        />
        <div
          className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-center z-10 font-bold text-xl ${styles.projectText}`}
        >
          {text}
        </div>
      </div>
    </a>
  );
}

export default Card;
