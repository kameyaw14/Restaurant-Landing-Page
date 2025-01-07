import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utils/animation";

const Hero = () => {
  const primaryBtn =
    "bg-white rounded-[50px] text-gray-500 font-semibold py-[2vw] px-[4vw] sm:py-[1vw] sm:px-[3vw] md:py-[1rem] md:px-[2rem]  hover:!scale-110 duration-300 text-[max(1.2vw,14px)] sm:text-[max(1.5vw,16px)] md:text-[1rem] lg:text-[1.2rem]";

  return (
    <div className="Header relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] my-[20px] mx-auto ">
      <div className="header-contents  absolute flex flex-col items-start gap-[4%] sm:gap-[3%] md:gap-[2.5%] lg:gap-[2%] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] bottom-[10%] left-[5%]">
        <motion.h2
          variants={SlideRight(1)}
          initial="hidden"
          animate="visible"
          className="font-bold text-white text-[max(6vw,22px)]  sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw] [text-shadow:2px_2px_4px_green] leading-tight"
        >
          Lorem ipsum dolor sit amet.
        </motion.h2>
        <motion.p
          variants={SlideLeft(1.3)}
          initial="hidden"
          animate="visible"
          className="mt-3 text-white text-[max(3.5vw,14px)] sm:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] xl:text-[1vw] [text-shadow:2px_2px_4px_black] leading-snug"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
          quod culpa incidunt ut quos repudiandae architecto cumque cupiditate
          ipsum.
        </motion.p>

        <motion.div
          variants={SlideRight(1.6)}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10"
        >
          <button
            className={`${primaryBtn} flex items-center gap-2 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] mt-4`}
          >
            View Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
