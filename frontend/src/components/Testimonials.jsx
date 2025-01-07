import React from "react";
import Slider from "react-slick";
import { testimonials } from "../assets/images/assets";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div>
          <Slider {...settings}>
            {testimonials.map((item, id) => (
              <div key={id} className="px-4">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 text-center">
                  {/* Avatar */}
                  <img
                    src={item.image}
                    alt={`Testimonial from ${item.name}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
                  />
                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h3>
                  {/* Role */}
                  <p className="text-sm text-indigo-500">{item.role}</p>
                  {/* Rating */}
                  <p className="text-yellow-500">{item.rating}</p>
                  {/* Testimonial */}
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{item.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
