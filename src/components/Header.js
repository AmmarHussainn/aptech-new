'use client';
import { NavLink, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ChevronDownIcon,
} from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const products = [
    { name: 'Vision', href: '/about' },
    { name: 'Mission', href: '/about' },
  ];
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
            to='/counsultancy'
            onClick={() => navigate('/counsultancy')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Consultancy
          </a>
          <a
            to='/about'
            onClick={() => navigate('/about')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Gallery
          </a>
          <Popover className='relative flex items-center'>
            <PopoverButton className='flex items-center gap-x-1 font-poppins text-[16px] font-medium leading-6 text-gray-900'>
             About
              <ChevronDownIcon
                aria-hidden='true'
                className='h-5 w-5 flex-none text-gray-400'
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute -left-8 top-full z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-2'>
               

                {products.map((item) => {
                  console.log(item); // Log the item to check its structure
                  return (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                      

                        <NavLink
                          to={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverPanel>
          </Popover>
          <a
            to='/contact'
            onClick={() => navigate('/contact')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Contact Us
          </a>
          <a
            to='/applynow'
            onClick={() => navigate('/applynow')}
            className='font-poppins text-[16px] cursor-pointer font-medium leading-6 text-gray-900 bg-[#49bbeb] p-2 rounded-md flex items-center'
          >
            Apply Now
          </a>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className='lg:hidden'
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f7f7f7] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5' onClick={() => navigate('/')}>
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
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Home
          </a>
          <a
            to='/courses'
            onClick={() => navigate('/courses')}
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Courses
          </a>
          <a
            to='/counsultancy'
            onClick={() => navigate('/counsultancy')}
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Consultancy
          </a>
          <a
            to='/about'
            onClick={() => navigate('/about')}
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Gallery
          </a>
          {/* <Popover className='relative flex items-center'>
            <PopoverButton className='flex items-center gap-x-1 py-2 font-poppins text-[14px] font-medium leading-6 text-gray-900'>
             About
              <ChevronDownIcon
                aria-hidden='true'
                className='h-5 w-5 flex-none text-gray-400'
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className='absolute -left-8 top-full z-10 mt-3 w-[300px] max-w-md overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'
            >
              <div className='p-2'>
               

                {products.map((item) => {
                  console.log(item); // Log the item to check its structure
                  return (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                      

                        <NavLink
                          to={item.href}
                          className='block font-semibold text-gray-900'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverPanel>
          </Popover> */}
           <Disclosure as='div' className='-mx-3'>
                  <DisclosureButton className='group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium font-poppins leading-7 text-gray-900 hover:bg-gray-50'>
                    About
                    <ChevronDownIcon
                      aria-hidden='true'
                      className='h-5 w-5 flex-none group-data-[open]:rotate-180'
                    />
                  </DisclosureButton>
                  <DisclosurePanel className='mt-2 space-y-2'>
                    {[...products].map((item) => (
                      // <DisclosureButton
                      //   key={item.name}
                      //   as='a'
                      //   href={item.href}
                      //   className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      // >
                      //   {item.name}
                      // </DisclosureButton>

                      <NavLink
                        to={item.href}
                        className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
          <a
            to='/contact'
            onClick={() => navigate('/contact')}
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Contact Us
          </a>
          <a
            to='/applynow'
            onClick={() => navigate('/applynow')}
            className='font-poppins text-[16px] py-2 cursor-pointer font-medium leading-6 text-gray-900 flex items-center'
          >
            Apply Now
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
