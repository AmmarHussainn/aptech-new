import React from 'react';

export const Footer = () => {
  return (
    <div className='bg-[#f7f7f7] p-9'>
      <div className='flex md:flex-row flex-col gap-5 md:gap-0'>
        <div className='w-full md:w-[20%] flex flex-col'>
          <img
            src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
            alt=''
            className='w-[122px]'
          />
          <p className='font-poppins text-[14.4px] pt-[28px]'>
            We help you become a software developer, with better career.
          </p>
        </div>
        <div className='w-full md:w-[80%]'>
          <div className='flex justify-between md:justify-end items-center gap-5 flex-wrap'>
            <img
              src={process.env.PUBLIC_URL + '/convologo.jpg'}
              alt=''
              className='w-[100px]'
            />
            <img
              src={process.env.PUBLIC_URL + '/techwiz.png'}
              alt=''
              className='w-[100px] h-[32px]'
            />
            <img
              src={process.env.PUBLIC_URL + '/aptechvision.png'}
              alt=''
              className='w-[150px]'
            />
            <img
              src={process.env.PUBLIC_URL + '/apl.png'}
              alt=''
              className='w-[50px] h-[50px]'
            />
          </div>
          <div className='flex justify-between md:justify-end items-center gap-5 flex-wrap md:mt-0 mt-5'>
            <div className='bg-[#1877F2] w-[50px] h-[50px] flex justify-center items-center'>
              <img
                src={process.env.PUBLIC_URL + '/facebook1.png'}
                alt=''
                className='w-[32px] h-[32px]'
              />
            </div>
            <div className='bg-gradient-to-r from-pink-500 via-red-500 via-purple-500 to-yellow-500  w-[50px] h-[50px] flex justify-center items-center'>
              <img
                src={process.env.PUBLIC_URL + '/instagram1.png'}
                alt=''
                className='w-[32px] h-[32px]'
              />
            </div>
            <div className='bg-red-600 w-[50px] h-[50px] flex justify-center items-center'>
              <img
                src={process.env.PUBLIC_URL + '/youtube1.png'}
                alt=''
                className='w-[32px] h-[32px] '
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col gap-5 md:gap-0'>
        <div className='w-full md:w-[50%] flex flex-col justify-center'>
          <p className='font-poppins text-[12.4px] pt-[28px] font-semibold'>
            Copyright © 2023 Aptech Learning Pakistan. All rights reserved.
          </p>
        </div>
        <div className='w-full md:w-[50%]'>
          <div className='flex justify-between md:justify-end items-center gap-5 flex-wrap font-poppins text-[12.4px] pt-[28px] font-semibold'>
            Affiliations and Registrations
          </div>
          <div className='flex justify-between md:justify-end items-center gap-5 flex-wrap'>
            <img
              src={process.env.PUBLIC_URL + '/SBTE_01.png'}
              alt=''
              className='w-[70px]'
            />
            <img
              src={process.env.PUBLIC_URL + '/STEVTA_02.png'}
              alt=''
              className='w-[70px]'
            />
          </div>
        </div>
      </div>

      <ul className='pt-[28px] flex gap-10 font-poppins text-[12.4px] cursor-pointer mt-5 md:mt-0 flex-wrap'>
        <li>
          <a href='#'>Disclaimer &amp; Terms of Use</a>
        </li>
        <li>
          <a href='#'>Privacy Policy</a>
        </li>
        <li>
          <a href='#'>Profanity Policy</a>
        </li>
        <li>
          <a href='#'>Sitemap</a>
        </li>
        <li>
          <a href='faq.html'>FAQs</a>
        </li>
        <li>
          <a href='#'>Career</a>
        </li>
      </ul>
    </div>
  );
};
