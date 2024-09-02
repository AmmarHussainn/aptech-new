import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import courses from '../components/coursesData';

export const Courses = () => {
  return (
    <>
      <Header />

      <div className='flex p-5 flex-col items-center bg-[#fbfafa]'>
        <h2 className='font-poppins font-bold py-44 text-[22px] md:text-[30px]'>
          Courses We Offer
        </h2>
        <div className='flex flex-col md:flex-row justify-center md:gap-5 flex-wrap'>
          {courses?.map((course) => {
            return (
              <div className='lg:w-[32%] md:w-[44%] cursor-pointer  flex flex-col  rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
                <div className='w-[100%] h-[315px] md:h-[350px] '>
                  <img
                    alt=''
                    src={process.env.PUBLIC_URL + course.image}
                    className='object-cover w-full h-full rounded-md'
                  />
                </div>
                <div className='w-[100%]  md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
                  <div className='flex flex-col gap-4'>
                    <h3 className='font-poppins font-bold text-[18px]'>
                      {course.title}
                    </h3>
                    <p className='font-poppins text-[14.4px]'>
                      {course.description}
                    </p>
                  </div>
                  <div className='bg-[#1f89c9] w-[35px] h-[35px] rounded-full flex justify-center mt-4 items-center cursor-pointer'>
                    <img
                      src={process.env.PUBLIC_URL + '/arrow_r.png'}
                      width={'24px'}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};
