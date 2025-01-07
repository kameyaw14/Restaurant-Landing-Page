import React from "react";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft, SlideUp } from "../utils/animation";

const Menu = () => {
  return (
    <div className="py-12">
      <motion.div
        variants={SlideUp(0.2)}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto px-6 md:px-12"
      >
        {/* Heading */}
        <motion.h2
          variants={SlideRight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-montserrat text-4xl font-bold text-center text-white mb-10"
        >
          Our Menu
        </motion.h2>

        {/* Categories (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Category 1 */}
          <motion.div
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Appetizers
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600">
                <span>Spring Rolls</span>
                <span>$5.99</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Garlic Bread</span>
                <span>$3.99</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Bruschetta</span>
                <span>$7.49</span>
              </li>
            </ul>
          </motion.div>

          {/* Category 2 */}
          <motion.div
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Main Course
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600">
                <span>Grilled Chicken</span>
                <span>$12.99</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Spaghetti Carbonara</span>
                <span>$14.99</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Veggie Burger</span>
                <span>$11.49</span>
              </li>
            </ul>
          </motion.div>

          {/* Category 3 */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Desserts
            </h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600">
                <span>Chocolate Cake</span>
                <span>$6.99</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Tiramisu</span>
                <span>$5.49</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Cheesecake</span>
                <span>$5.99</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Call-to-action Section */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white text-xl px-8 py-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            Order Now
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
