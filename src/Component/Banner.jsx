import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from "../assets/banner1.jpeg";
import img2 from "../assets/banner2.jpeg";
import img3 from "../assets/banner3.jpeg";

const Banner = () => {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentIndex];

  return (
    <div className="relative w-full mx-auto my-4 overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <div className="w-full h-[300px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={slide.img}
          alt="banner"
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 pt-10 pb-10 pr-5 bg-white p-3 shadow-md"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 pt-10 pb-10 pl-5 bg-white p-3  shadow-md"
        >
          <FaArrowRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
