import React from "react";

function BlogCard({ text }) {
  return (
    <div className="w-[56rem] relative h-[8rem] flex justify-center items-center  bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 rounded-2xl font-bold hover:-translate-y-2 hover:transition-all cursor-pointer hover:transition-duration-[1000ms] hover:shadow-lg hover:shadow-pink-500">
      {text}
    </div>
  );
}

export default BlogCard;
