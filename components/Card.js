import React from "react";
import Image from "next/image";

function Card({ text }) {
  return (
    <div className="w-[32rem] h-[18rem] flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms]">
      {text}
    </div>
  );
}

export default Card;
