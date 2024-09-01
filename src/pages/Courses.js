import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

export const Courses = () => {
  return (
   <>
   <Header />

   <div className='flex p-5 flex-col items-center bg-[#fbfafa]'>
        <h2 className='font-poppins font-bold py-44 text-[22px] md:text-[30px]'>
          Courses We Offer
        </h2>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
             alt=''
              src={process.env.PUBLIC_URL + '/citbanner.png'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
               alt=''
                 src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Computer CIT</h3>
              <p className='font-poppins text-[14.4px]'>
              Learn the essentials of computer literacy, including basic hardware and software operations. This course covers fundamental skills such as operating systems, word processing, spreadsheets, and internet browsing. Ideal for beginners aiming to become proficient in everyday computer use. Provides foundational knowledge for further technical education. Perfect for students, professionals, and anyone looking to improve computer proficiency.

              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
               alt=''
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Amazon Virtual Assistant</h3>
              <p className='font-poppins text-[14.4px]'>
              Become skilled in assisting Amazon sellers with their online businesses. Learn product research, listing optimization, order processing, customer service, and inventory management. The course teaches best practices for managing Amazon Seller Central accounts. Equip yourself with valuable skills to work remotely as a virtual assistant. Suitable for individuals interested in e-commerce and online freelancing.
              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>{' '}
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg2.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[55%] h-[200px]'>
            <img
              src={process.env.PUBLIC_URL + '/homesp.png'}
              className='object-contain w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[14.4px]'>Office Automation</h3>
              <p className='font-poppins text-[14.4px]'>
              Master the automation tools used in modern offices, including document management, email handling, and scheduling systems. Learn how to automate repetitive office tasks to increase efficiency and productivity. The course includes training on office software like Microsoft Office Suite and Google Workspace. Ideal for administrative professionals and office managers. Gain the skills to streamline daily office operations.

              </p>
            </div>
            <div className='bg-[#1f89c9] w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>

       

        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
             alt=''
              src={process.env.PUBLIC_URL + '/webdevelopmentbanner.png'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
               alt=''
                 src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Advanced Web Development</h3>
              <p className='font-poppins text-[14.4px]'>
              Dive deep into modern web technologies and frameworks like React, Angular, and Node.js. Build dynamic, responsive, and scalable websites and web applications. The course covers both front-end and back-end development techniques. Explore topics like RESTful APIs, databases, and server management. Ideal for aspiring web developers looking to enhance their skills.


              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
               alt=''
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Mobile Application Development</h3>
              <p className='font-poppins text-[14.4px]'>
              Learn how to develop applications for mobile devices using platforms like Android and iOS. This course covers app architecture, user interface design, and coding in languages such as Java, Swift, and Kotlin. Understand mobile app deployment and maintenance. Suitable for anyone aiming to create user-friendly mobile applications. Gain hands-on experience by building functional apps.


              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>{' '}
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/mobiledevbanner.png'}
              className='object-center w-full h-full rounded-md'
            />
          </div>
        </div>


        {/* ADD ON  NEW */}


        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/aibanner.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                 src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Artificial Intelligence</h3>
              <p className='font-poppins text-[14.4px]'>
              Explore the foundations of AI, including machine learning, neural networks, and data analysis. Learn how to create AI models to solve complex problems in areas like automation, pattern recognition, and natural language processing. Understand the ethical implications and real-world applications of AI technology. Ideal for tech enthusiasts and professionals interested in emerging technologies. Practical projects will allow hands-on experience with AI tools.


              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Programming & Development</h3>
              <p className='font-poppins text-[14.4px]'>
              Develop coding skills in various programming languages such as Python, Java, and C++. Learn how to write clean, efficient, and error-free code. The course covers essential algorithms, data structures, and software development methodologies. Gain practical experience by working on real-world projects. Ideal for beginners or those looking to strengthen their programming foundations.   </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>{' '}
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg4.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg1.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                 src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Graphic Designing</h3>
              <p className='font-poppins text-[14.4px]'>
              Learn the principles of visual design and develop your creativity with tools like Adobe Photoshop, Illustrator, and InDesign. Create stunning visuals for branding, marketing, and digital media. The course includes color theory, typography, and composition techniques. Ideal for aspiring graphic designers or those looking to improve their design skills. Hands-on projects will help build a strong portfolio.
              </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Digital Forensics & Cyber Security</h3>
              <p className='font-poppins text-[14.4px]'>
              Understand the techniques used to investigate cybercrimes and protect digital systems. Learn how to collect and analyze digital evidence, secure networks, and prevent cyber-attacks. The course covers topics like encryption, malware analysis, and data recovery. Ideal for individuals interested in law enforcement or IT security roles. Gain skills to combat cyber threats and protect sensitive information.

                </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>{' '}
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg2.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        </div>
        
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg3.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                 src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>E-Commerce</h3>
              <p className='font-poppins text-[14.4px]'>
              Learn the ins and outs of setting up and managing an online business. This course covers topics like website development, digital marketing, payment gateways, and inventory management. Gain knowledge about customer behavior, sales strategies, and online advertising. Ideal for entrepreneurs looking to start or scale their e-commerce ventures. Stay ahead in the growing digital marketplace.
               </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[45%] md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
            <div className='w-[80px] h-[60px]'>
              <img
                src={process.env.PUBLIC_URL + '/nixorlogo.jpeg'}
                className='object-cover w-full h-full rounded-md'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-poppins font-bold text-[18px]'>Project Management</h3>
              <p className='font-poppins text-[14.4px]'>
              Master the skills needed to manage projects efficiently from start to finish. Learn about project planning, risk management, budgeting, and team leadership. The course covers popular project management methodologies such as Agile and Waterfall. Ideal for professionals aiming to lead successful projects across various industries. Gain the knowledge to ensure project success and timely delivery.
                </p>
            </div>
            <div className='bg-[#1f89c9] w-[45px] h-[45px] rounded-full flex justify-center items-center cursor-pointer'>
              <img
                src={process.env.PUBLIC_URL + '/arrow_r.png'}
                width={'24px'}
              />
            </div>
          </div>{' '}
          <div className='w-[100%] md:h-[400px] md:w-[55%]'>
            <img
              src={process.env.PUBLIC_URL + '/nixorimg4.jpeg'}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
        </div>

      </div>

   <Footer/>
   </>
  )
}
