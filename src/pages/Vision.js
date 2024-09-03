import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

// Import icons from Font Awesome or Heroicons
import { FaLaptopCode, FaHandshake, FaGraduationCap, FaRegLightbulb, FaGlobe } from 'react-icons/fa';

const Vision = () => {
  return (
    <>
      <div className=''>
        <div className='shadow-lg'>
          <Header />
        </div>

        <div className="bg-[#f8f9fa] py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-8">Our Vision</h1>
            <p className="text-lg md:text-xl font-poppins mb-12 text-gray-700">
              Nixortech Solutions envisions a future where every individual is empowered with the technical skills and knowledge necessary to thrive in the digital age. We aspire to be the leading institution in technical education, recognized globally for our innovative programs, exceptional faculty, and transformative learning experiences.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2 text-center">
              <FaLaptopCode className="w-16 h-16 mx-auto mb-4 text-[#4abbeb]" />
              <h2 className="text-2xl font-semibold mb-4">Innovative Curriculum</h2>
              <p className="text-gray-600">
                Delivering cutting-edge curriculum that reflects the latest advancements in technology, keeping our students at the forefront of their fields.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2 text-center">
              <FaHandshake className="w-16 h-16 mx-auto mb-4 text-[#4abbeb]" />
              <h2 className="text-2xl font-semibold mb-4">Industry Partnerships</h2>
              <p className="text-gray-600">
                Fostering strong industry partnerships to provide real-world experience, internships, and job opportunities, bridging the gap between education and industry.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2 text-center">
              <FaGraduationCap className="w-16 h-16 mx-auto mb-4 text-[#4abbeb]" />
              <h2 className="text-2xl font-semibold mb-4">Student-Centric Approach</h2>
              <p className="text-gray-600">
                Promoting a student-centric approach that ensures each learner receives personalized attention and guidance throughout their educational journey.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2 text-center">
              <FaRegLightbulb className="w-16 h-16 mx-auto mb-4 text-[#4abbeb]" />
              <h2 className="text-2xl font-semibold mb-4">Creativity and Innovation</h2>
              <p className="text-gray-600">
                Fostering a dynamic learning environment that encourages creativity, innovation, and excellence among our students and faculty.
              </p>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2 text-center">
              <FaGlobe className="w-16 h-16 mx-auto mb-4 text-[#4abbeb]" />
              <h2 className="text-2xl font-semibold mb-4">Global Recognition</h2>
              <p className="text-gray-600">
                Aspiring to be recognized globally as a leader in technical education, renowned for our innovative programs and transformative learning experiences.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Vision;
