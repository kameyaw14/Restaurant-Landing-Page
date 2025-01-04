import React from "react";

const Hero = () => {
  return (
    <div className="Header relative h-[34vw] my-[30px] mx-auto">
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]">
        <h2 className="font-bold text-white text-[max(4.5vw,22px)] [text-shadow:2px_2px_4px_green]">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="text-white text-[1vw] [text-shadow:2px_2px_4px_black]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
          quod culpa incidunt ut quos repudiandae architecto cumque cupiditate
          ipsum.
        </p>
        <button className="border-none text-gray-500 py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;
