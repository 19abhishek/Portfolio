import React from "react";
import Image from "next/image";
import Fit from "../Image/Project-Image/FIT-IN.png";

function Card({ img, text }) {
  const cImg = img;
  if (!img) {
    return (
      <div className="w-[32rem] relative h-[18rem] flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms] hover:shadow-lg hover:shadow-orange-500"></div>
    );
  }
  return (
    <div className="w-[32rem] relative h-[18rem] flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms] hover:shadow-lg hover:shadow-orange-500">
      <Image src={img} layout="fill" className="object-cover rounded-xl z-0" />
      <div className="absolute top justify-center z-10 ">{text}</div>
    </div>
  );
}

export default Card;
