import React from "react";
import { assets } from "../assets/images/assets";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600">
            Discover the story behind our passion for great food and service.
          </p>
        </div>

        {/* About Us Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side: Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={assets.restaurant}
              alt="Restaurant"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side: Text */}
          <div className="flex flex-col justify-center space-y-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
