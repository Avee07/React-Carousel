import { React, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Carousel = ({ slides }) => {
  const [currentIndex, SetCurrentIndex] = useState(0);

  const handlePrev = () => {
    SetCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const handleNext = () => {
    SetCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative">
      <div className="flex justify-center items-center w-[480px]">
        <img
          className="object-fill  h-96 w-lvw rounded-xl"
          key={slides[currentIndex].id}
          src={slides[currentIndex].url}
          alt=""
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={handlePrev}
          className="rounded-full shadow bg-blur hover:bg-white text-gray"
        >
          <FaAngleLeft size={30} />
        </button>
        <button
          onClick={handleNext}
          className="rounded-full shadow bg-blur hover:bg-white text-gray"
        >
          <FaAngleRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all duration-100 w-3 h-3 bg-white rounded-full  ${
                currentIndex === i ? " w-6" : "bg-opacity-50"
              }`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
