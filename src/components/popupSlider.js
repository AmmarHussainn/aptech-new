import React, { useState } from 'react';

const PopupSlider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
 '/nixoritbanner.jpeg',
 '/nixoritnewbanner.jpeg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    isOpen && (
      <div className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg h-[90%] w-11/12 md:w-2/3 lg:w-1/2">
       

          {/* Slider */}
          <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300"
          >
            ✖
          </button>
         <div className='h-[90vh] rounded-t-lg '>
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className=" w-full h-[100%] object-contain "
            />
         </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            >
              ▶
            </button>
          </div>

          {/* Indicators */}
          {/* <div className="flex justify-center py-3">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div> */}
        </div>
      </div>
    )
  );
};

export default PopupSlider;
