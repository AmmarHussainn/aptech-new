import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

const Mission = () => {
  return (
    <>
      <div className=''>
        <div className='shadow-lg'>
          <Header />
        </div>

        <div className="bg-[#f8f9fa] py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-8">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl font-poppins mb-12 text-gray-700">
              The mission of Nixortech Solutions is to provide high-quality, practical, and industry-relevant technical education that prepares students for successful careers in the tech industry.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4">Delivering Excellence</h2>
              <p className="text-gray-600">
                Offering cutting-edge courses in Artificial Intelligence, Mobile Application Development, Web Development, Graphic Designing, Cyber Security, and more, ensuring our curriculum remains at the forefront of technological advancements.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4">Empowering Students</h2>
              <p className="text-gray-600">
                Equipping students with the practical skills and knowledge they need to excel in their chosen fields, fostering a culture of continuous learning and innovation.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4">Fostering Industry Collaboration</h2>
              <p className="text-gray-600">
                Building strong partnerships with leading tech companies to provide students with real-world experience, internships, and job opportunities.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4">Promoting Inclusivity</h2>
              <p className="text-gray-600">
                Creating an inclusive learning environment that welcomes and supports students from diverse backgrounds, ensuring equal access to quality education.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
              <h2 className="text-2xl font-semibold mb-4">Driving Innovation</h2>
              <p className="text-gray-600">
                Encouraging research and development initiatives that contribute to the advancement of technology and address global challenges.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Mission;
