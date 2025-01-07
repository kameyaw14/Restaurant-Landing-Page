import React from "react";
import { menu_list } from "../assets/images/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu flex flex-col gap-[20px] ">
      <h1 className="text-gray-600 font-bold sm:text-4xl text-xl">
        Explore Our Menu
      </h1>
      <p className="explore-text max-w-[60%] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="explore-list flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
