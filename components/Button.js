import React from "react";

function Button({ text }) {
  return (
    <div>
      <div className="grid gap-10  items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-2 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="px-4 py-2 text-xl text-black-400 hover:opacity-70  transition duration-200">
              {text}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Button;
