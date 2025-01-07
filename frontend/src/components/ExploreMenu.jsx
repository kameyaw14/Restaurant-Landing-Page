import React from "react";
import { menu_list } from "../assets/images/assets";

const ExploreMenu = () => {
  return (
    <div className=" flex flex-col gap-[20px] ">
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
