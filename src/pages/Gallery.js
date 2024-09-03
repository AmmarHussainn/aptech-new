import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

// Replace with your actual image URLs
const galleryImages = [
  'nixorimg1.jpeg',
    'nixorimg2.jpeg',
    'nixorimg3.jpeg',
    'nixorimg4.jpeg',
];

const Gallery = () => {
  return (
    <>
      <div className=''>
        <div className='shadow-lg'>
          <Header />
        </div>

        <div className="bg-[#f8f9fa] py-16 px-4">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Gallery
            </h1>
            <p className="text-lg md:text-xl font-poppins text-gray-700">
              Explore our gallery to see our moments, achievements, and events.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((imageUrl, index) => (
              <div key={index} className="bg-white p-2 shadow-md rounded-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1">
                <img src={imageUrl} alt={`Gallery Image ${index + 1}`} className="w-full h-full  object-cover rounded" />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
