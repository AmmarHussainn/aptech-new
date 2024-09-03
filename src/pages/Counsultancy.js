import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

const Counsultancy = () => {
    const services = [
        {
          title: 'Custom Software Development',
          description: 'We specialize in delivering tailored software solutions designed to meet the unique needs of your business. From concept to deployment, our team ensures that the final product aligns perfectly with your goals and drives efficiency. Whether it’s streamlining operations or enhancing customer experience, our custom solutions help your business stand out in today’s competitive landscape.',
         image : 'CustomSoftwareDev.jpg'
        },
        {
          title: 'Web Development',
          description: 'Our web development services focus on building responsive, high-performing websites that captivate and engage your audience. We use cutting-edge technologies and frameworks to create sites that are not only visually appealing but also optimized for performance across all devices. Whether you need an e-commerce platform, a corporate website, or a dynamic web application, we ensure it meets modern standards for design and functionality.',
          image : 'mainbanner.jpg'
        },
        {
          title: 'Mobile App Development',
          description: 'We create intuitive and user-friendly mobile applications tailored to meet your business objectives. Our expertise spans across iOS and Android platforms, ensuring your app is both robust and scalable. From initial design to final launch, we work closely with you to bring your vision to life, helping your business connect with customers on the go.',
          image : 'appdev.jpg'
        },
        {
          title: 'IT Consulting',
          description: 'Our IT consulting services offer expert guidance to enhance your business’s IT infrastructure and strategy. We evaluate your current systems, identify areas of improvement, and implement solutions that align with your goals. Our team works with you to ensure your technology investments deliver maximum ROI, positioning your business for growth and innovation.',
         image : 'itconsulting.jpg'
        },
        {
          title: 'Cloud Solutions',
          description: 'Leverage the power of the cloud with our scalable and secure cloud solutions. We help businesses transition smoothly to cloud-based environments, optimizing operations and reducing overhead costs. Whether you need cloud storage, application hosting, or infrastructure management, our services are tailored to support your business operations seamlessly while ensuring data security and accessibility.',
         image : 'cloud.jpg'
        },
      ];
    
  return (
   <>
   <div className=''>
      <div className='shadow-lg'>
        <Header />
      </div>

      

<div className="px-4 py-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 py-32 text-center">Our Consultancy Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white cursor-pointer rounded-lg shadow-md p-6 hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
              >
                <img src={service.image} alt={service.title} className="w-full  object-cover rounded-t-md mb-4" />
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
     

      <Footer />
    </div>
   </>
  )
}

export default Counsultancy