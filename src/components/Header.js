'use client';
import { NavLink, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className='bg-[#f7f7f7]'>
      <nav
        aria-label='Global'
        className='mx-auto flex max-w-9xl items-center justify-between p-7 lg:px-8'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <img
              alt=''
              src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
              className=' w-[79px]'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setMobileMenuOpen(true)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon aria-hidden='true' className='h-6 w-6' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-10'>
          <a
            to='/'
            onClick={() => navigate('/')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Home
          </a>
          <a
            to='/courses'
            onClick={() => navigate('/courses')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Courses
          </a>
          <a
            to='/about'
            onClick={() => navigate('/about')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            About
          </a>
          <a
            to='/contact'
            onClick={() => navigate('/contact')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Contact Us
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'  onClick={() => navigate('/')}>
              <span className='sr-only'>Your Company</span>
              <img
                alt=''
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className=' w-[50px]'
              />
            </a>
            <button
              type='button'
              onClick={() => setMobileMenuOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='h-6 w-6' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <a
                  to='/'
                  onClick={() => navigate('/')}
                  className='font-poppins text-[16px] cursor-pointer py-3 font-medium leading-6 text-gray-900 flex items-center'
                >
                  Home
                </a>
                <a
                  to='/courses'
                  onClick={() => navigate('/courses')}
                  className='font-poppins text-[16px] cursor-pointer py-3 font-medium leading-6 text-gray-900 flex items-center'
                >
                  Courses
                </a>
                <a
                  to='/about'
                  onClick={() => navigate('/about')}
                  className='font-poppins text-[16px] cursor-pointer py-3 font-medium leading-6 text-gray-900 flex items-center'
                >
                  About
                </a>
                <a
                  to='/contact'
                  onClick={() => navigate('/contact')}
                  className='font-poppins text-[16px] cursor-pointer py-3 font-medium leading-6 text-gray-900 flex items-center'
                >
                  Contact Us
                </a>
              </div>
              {/* <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block mb-2 text-base font-semibold leading-7 text-gray-900  items-center bg-[#5C57C3] p-3 px-5 rounded-md'
                >
                  Get Started
                </a>
                <a
                  href='#'
                  className='-mx-3 block  text-base font-semibold leading-7items-center border-[2px] border-[#5C57C3] py-3 px-5 rounded hover:bg-[#5C57C3] text-gray-900 hover:text-white'
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
