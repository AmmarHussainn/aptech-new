import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { TextInputField } from '../components/InputTextField';
import { useFormik } from 'formik';

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  return (
    <div>
      <div className='shadow-lg'>
        <Header />
      </div>
      <div className='mt-9 flex w-[90%] mx-auto justify-center'>
        <div className='w-[100%] md:w-[80%]'>
          <div className='flex justify-between flex-col md:flex-row'>
            <h1 className='text-[30px] md:text-[40px] font-bold font-poppins'>
              Contact Us
            </h1>
          </div>
          <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-[100%] md:w-[49%]'>
              <TextInputField
                label='First Name'
                value={formik.values.firstName}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    firstName: e.target.value,
                  });
                }}
                placeholder='First Name'
              />
            </div>
            <div className='w-[100%] md:w-[49%]'>
              <TextInputField
                label='Last Name'
                value={formik.values.lastName}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    lastName: e.target.value,
                  });
                }}
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-[100%] '>
              <TextInputField
                label='Your Email'
                value={formik.values.email}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    email: e.target.value,
                  });
                }}
                placeholder='Your Email'
              />
            </div>
          </div>
          <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-[100%] '>
              <TextInputField
                label='Subject of Message'
                placeholder='Subject of Message'
                value={formik.values.subject}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    subject: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className='flex justify-between flex-col md:flex-row'>
            <div className='w-[100%] py-2 gap-2 flex flex-col'>
              <div className='text-[14px] md:text-[16px]  font-roboto w-full'>
                Your Message Here...
              </div>
              <textarea
                placeholder='Your Message Here...'
                className='p-2 border border-black w-full focus:outline-none'
                rows={8}
                value={formik.values.message}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    message: e.target.value,
                  });
                }}
              ></textarea>
            </div>
          </div>

          <div className='flex justify-end flex-col md:flex-row py-2'>
            <button className='w-[100%] md:w-[200px] text-white bg-black p-3 focus:bg-white focus:text-black border border-black'>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className='mt-[100px]'>
        <Footer />
      </div>
    </div>
  );
};
