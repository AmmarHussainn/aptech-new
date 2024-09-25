import { Footer } from '../components/Footer';
import Header from '../components/Header';

function About() {
  return (
    <div className=' bg-[#f8f9fa]'>
      <div className='shadow-lg'>
        <Header />
      </div>

      {/* 1ST SECTION */}

      <div className='flex justify-center bg-[#f8f9fa] pt-[50px] pb-9 mt-9'>
        <div className='w-[90%] flex flex-col md:flex-row gap-5 md:gap-0 '>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10'>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              Nixortech Solutions is a dynamic and forward-thinking institution
              dedicated to empowering individuals through cutting-edge technical
              education. Our focus is on providing students with the practical
              skills and knowledge they need to excel in the fast-paced world of
              technology. With a commitment to innovation and quality education,
              Nixortech Solutions is paving the way for future tech leaders.
            </p>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              At Nixortech Solutions, we offer a wide array of courses including
              Artificial Intelligence, Mobile Application Development, Web
              Development, Graphic Designing, Cyber Security, and more. Our
              programs are carefully designed to meet the demands of the
              ever-evolving tech industry, ensuring our students are equipped
              with the latest skills and industry insights to succeed in their
              careers.
            </p>
          </div>
          <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL + '/pakmap.jpg'} alt='about' />
          </div>
        </div>
      </div>

      {/* 2ND SECTION */}
      {/* <div className='flex justify-center bg-[#f8f9fa] pt-[50px] pb-9 mt-9'>
        <div className='w-[90%] flex flex-col-reverse md:flex-row gap-5  '>
          <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL + '/pakmap.jpg'} alt='about' />
          </div>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10'>
            <h1 className='text-[34px] md:text-[44px] font-bold font-poppins'>
              Nixortech
            </h1>

            <p className='font-poppins text-[16px] md:text-[18px]'>
              Nixortech Solutions is dedicated to excellence in education,
              striving to deliver top-quality training that is customer-centric
              and industry-relevant. Our commitment to excellence ensures that
              our students are not just skilled professionals but also future
              leaders in the global technology space.
            </p>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              Our mission is to advance the technological landscape of Pakistan
              by nurturing talent and fostering innovation. We believe that
              technology, when effectively harnessed, drives growth, enhances
              productivity, and creates a lasting impact on individuals,
              organizations, and society at large.
            </p>
          </div>
        </div>
      </div> */}

      <div className='flex justify-center  pt-[50px] pb-9 mt-9 bg-[#1f89c9]'>
        <div className='w-[90%] flex flex-col md:flex-row gap-5 md:gap-0 '>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10  text-white p-2 '>
            <h2 className='text-3xl font-bold'>Our Vision</h2>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              Nixortech Solutions is a dynamic and forward-thinking institution
              dedicated to empowering individuals through cutting-edge technical
              education. Our focus is on providing students with the practical
              skills and knowledge they need to excel in the fast-paced world of
              technology. With a commitment to innovation and quality education,
              Nixortech Solutions is paving the way for future tech leaders.
            </p>

            <h2 className='text-3xl font-bold'>Our Mission</h2>
            <p className='font-poppins text-[16px] md:text-[18px]'>
            The mission of Nixortech Solutions is to provide high-quality, practical, and industry-relevant technical education that prepares students for successful careers in the tech industry. We are committed to fostering innovation, critical thinking, and hands-on experience through comprehensive learning programs. By bridging the gap between academic knowledge and real-world applications, we aim to equip our students with the skills and confidence needed to thrive in today's rapidly evolving digital landscape. Our focus is on empowering individuals to lead, create, and succeed in their professional journeys.
            </p>
          </div>
          <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL + '/vision.jpg'} alt='about' />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
