import React from "react";
import { menu_list } from "../assets/images/assets";

const ExploreMenu = () => {
  return (
    <div className=" flex flex-col gap-[20px] ">
      {/* <h1 className="text-gray-600 font-bold sm:text-4xl text-xl">
        Discover Our Delicious Menu
      </h1>
      <p className=" md:max-w-[60%] ">
        Explore a wide variety of flavors carefully crafted to suit every
        craving. Whether you're in the mood for something savory or sweet, we’ve
        got you covered.
      </p> */}
      <div className=" flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="">
              <img
                src={item.menu_image}
                alt=""
                className="w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition-[0.2s] border border-3 border-green-700"
              />
              <p className="mt-[10px] text-gray-600 text-[max(1.4vw,16px)] cursor-pointer font-medium font-montserrat">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] bg-gray-400 border-none" />
    </div>
  );
};

export default ExploreMenu;
