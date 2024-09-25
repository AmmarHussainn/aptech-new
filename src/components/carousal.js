import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Carousel = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0); // Keep track of the active slide

  const slides = [
    {
      title: 'Unlock Your Future with Industry-Leading Tech Education',
      description:
        'Master the skills of tomorrow with expert-led courses in AI, full-stack development, and DevOps. Empower your career with hands-on training and real-world experience.',
      imgSrc: process.env.PUBLIC_URL + '/mainbanner.jpg',
    },
    {
      title: 'Join the Best Tech Programs Today',
      description:
        "Get access to cutting-edge technology courses designed to boost your career potential. With hands-on learning, you're set up for success.",
      imgSrc: process.env.PUBLIC_URL + '/vision.jpg',
    },
    {
      title: 'Become a Certified Tech Pro',
      description:
        'Transform your career by mastering in-demand skills with our industry-recognized certifications in AI, full-stack development, and more.',
      imgSrc: process.env.PUBLIC_URL + '/mobiledevbanner.jpg',
    },
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id='default-carousel' className='relative w-[90%]'>
      <div className='relative overflow-hidden rounded-lg'>
        {/* <!-- Slides --> */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={` w-[100%] duration-700 ease-in-out transition-all ${
              index === activeIndex ? 'block' : 'hidden'
            }`}
          >
            <div className='w-[100%] flex flex-col md:flex-row gap-10 md:gap-5'>
              <div className='w-[100%] md:w-[50%] md:py-20 flex flex-col gap-10'>
                <h1 className='text-[34px] md:text-[44px] font-bold font-poppins'>
                  {slide.title}
                </h1>
                <p className='font-poppins text-[16px] md:text-[18px]'>
                  {slide.description}
                </p>
                <button
                  onClick={() => navigate('/applynow')}
                  className='font-poppins text-[16px] text-center p-1 rounded-md w-[130px] md:text-[18px] text-white bg-[#1f89c9] font-semibold'
                >
                  Enroll Today
                </button>
              </div>
              <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
                <img
                  src={slide.imgSrc}
                  className='h-full lg:h-[600px]'
                  alt='carousel-slide'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- Slider indicators --> */}
      <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? 'bg-[#1f89c9]' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    
    </div>
  );
};
