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
    <div className='bg-[#f7f7f7]'>
      <div className='shadow-lg'>
        <Header />
      </div>
      <section className='border'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
          <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Visit Our Location
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              We are located in Hyderabad, Pakistan. Feel free to visit us or
              contact us via email or phone.
            </p>
          </div>
          <div className='mt-16 lg:mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='rounded-lg overflow-hidden'>
                {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480"  allowfullscreen="" loading="lazy"></iframe> */}
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.2570082202351!2d68.33979070868848!3d25.38957768556671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71005212a087%3A0x7c790b7d76b3e321!2sNixorTech%20Academy%20Hyderabad!5e0!3m2!1sen!2s!4v1725212062368!5m2!1sen!2s'
                  width='600'
                  height='450'
                  
                  className='border-0 w-full '
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
              <div>
                <div className='max-w-full mx-auto rounded-lg overflow-hidden'>
                  <div className='px-6 py-4'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      Our Address
                    </h3>
                    <p className='mt-1 text-gray-600'>
                    98QQ+RVM, Main Qasimabad Rd, Phase - I Qasimabad, Hyderabad, Sindh 71000, Pakistan
                    </p>
                  </div>
                  <div className='border-t border-gray-200 px-6 py-4'>
                    <h3 className='text-lg font-medium text-gray-900'>Hours</h3>
                    <p className='mt-1 text-gray-600'>
                      Monday - Friday: 9am - 5pm
                    </p>
                    <p className='mt-1 text-gray-600'>Saturday: 10am - 4pm</p>
                    <p className='mt-1 text-gray-600'>Sunday: Closed</p>
                  </div>
                  <div className='border-t border-gray-200 px-6 py-4'>
                    <h3 className='text-lg font-medium text-gray-900'>
                      Contact
                    </h3>
                    <p className='mt-1 text-gray-600'>
                      Email: nixortechsolutions@gmail.com
                    </p>
                    <p className='mt-1 text-gray-600'>Phone: 0222670700</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='mt-[100px]'>
        <Footer />
      </div>
    </div>
  );
};
