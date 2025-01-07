import React from "react";
import { assets } from "../assets/images/assets";
import { SlideLeft, SlideRight } from "../utils/animation";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            className="font-montserrat text-4xl font-bold text-gray-800 mb-4"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={SlideLeft(0.25)}
            initial="hidden"
            whileInView="visible"
            className="text-lg text-gray-600"
          >
            Discover the story behind our passion for great food and service.
          </motion.p>
        </div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side: Image */}
          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center lg:justify-start"
          >
            <img
              src={assets.restaurant}
              alt="Restaurant"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right side: Text */}
          <motion.div
            variants={SlideRight(0.25)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our restaurant was founded with a simple vision in mind: to bring
              exceptional food and a warm, welcoming atmosphere to our
              community. From the very beginning, we've been dedicated to
              sourcing the freshest ingredients and providing our guests with
              unforgettable experiences. Our team works tirelessly to ensure
              that each dish is crafted with care and passion.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <ul className="list-disc pl-5 text-gray-600 text-lg">
              <li>Commitment to quality and freshness</li>
              <li>Excellence in customer service</li>
              <li>Community involvement and support</li>
              <li>Passion for creating memorable dining experiences</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
