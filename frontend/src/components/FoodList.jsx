import React from "react";
import { foodItems } from "../assets/images/assets";

const FoodList = () => {
  return (
    <div className="py-12 ">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-montserrat text-4xl font-bold text-center text-gray-800 mb-10">
          Our Delicious Dishes
        </h2>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className=" text-2xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <span className="text-xl font-bold text-gray-800">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodList;
