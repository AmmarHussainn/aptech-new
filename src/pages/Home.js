import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

function Home() {
  const [currentDiv, setCurrentDiv] = useState(1);
  const totalDivs = 2;

  const showNextDiv = () => {
    const current = document.getElementById(`div${currentDiv}`);
    const nextDiv = currentDiv < totalDivs ? currentDiv + 1 : 1;
    const next = document.getElementById(`div${nextDiv}`);
    current.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      current.style.transform = 'translateY(100%)';
    }, 500);
    next.style.transform = 'translateY(0)';
    setCurrentDiv(nextDiv);
  };

  useEffect(() => {
    showNextDiv();
  }, []);
  return (
    <div className='selection:bg-yellow-500'>
      <Header />

      {/* HERO SECTION */}
      <div className='h-[93vh] bg-[#605f5f] w-full min-h-[680px] relative'>
        <video
          src={process.env.PUBLIC_URL + '/accpaivideo.mp4'}
          controls={false}
          autoPlay
          muted
          playsInline
          className='object-cover  w-full h-full absolute'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='mt-[500px] absolute font-poppins  w-full flex justify-center'>
          <a className='bg-[#ff0000] w-[300px] text-white text-[18px] text-center p-4 rounded-md font-semibold cursor-pointer'>
            Transform Your Career with Nixor Tech
          </a>
        </div>
      </div>
      {/* 2ND SECTION */}
      <div className='flex p-5 flex-col items-center bg-[#fbfafa]'>
        <h2 className='font-poppins font-bold text-[22px] md:text-[30px]'>
          Get started right away
        </h2>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
          <div className='w-[100%] md:w-[55%] md:h-[400px]'>
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
              <h3 className='font-poppins font-bold text-[18px]'>
                Computer CIT
              </h3>
              <p className='font-poppins text-[14.4px]'>
                Learn the essentials of computer literacy, including basic
                hardware and software operations. This course covers fundamental
                skills such as operating systems, word processing, spreadsheets,
                and internet browsing. Ideal for beginners aiming to become
                proficient in everyday computer use. Provides foundational
                knowledge for further technical education. Perfect for students,
                professionals, and anyone looking to improve computer
                proficiency.
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
              <h3 className='font-poppins font-bold text-[18px]'>
                Amazon Virtual Assistant
              </h3>
              <p className='font-poppins text-[14.4px]'>
                Become skilled in assisting Amazon sellers with their online
                businesses. Learn product research, listing optimization, order
                processing, customer service, and inventory management. The
                course teaches best practices for managing Amazon Seller Central
                accounts. Equip yourself with valuable skills to work remotely
                as a virtual assistant. Suitable for individuals interested in
                e-commerce and online freelancing.
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
              src={process.env.PUBLIC_URL + '/amazonvabanner.jpg'}
              className='object-cover w-full h-full  rounded-md'
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
              <h3 className='font-poppins font-bold text-[14.4px]'>
                Office Automation
              </h3>
              <p className='font-poppins text-[14.4px]'>
                Master the automation tools used in modern offices, including
                document management, email handling, and scheduling systems.
                Learn how to automate repetitive office tasks to increase
                efficiency and productivity. The course includes training on
                office software like Microsoft Office Suite and Google
                Workspace. Ideal for administrative professionals and office
                managers. Gain the skills to streamline daily office operations.
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

        <div className='flex flex-col md:flex-row justify-between'>
          <div className=' md:w-[49%] flex flex-col  rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
            <div className='w-[100%]  '>
              <img
                src={process.env.PUBLIC_URL + '/webdevbanner.png'}
                className='object-contain w-full h-full rounded-md'
              />
            </div>
            <div className='w-[100%]  md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
              <div className='flex flex-col gap-4'>
                <h3 className='font-poppins font-bold text-[14.4px]'>
                  Advanced Web Development
                </h3>
                <p className='font-poppins text-[14.4px]'>
                  Dive deep into modern web technologies and frameworks like
                  React, Angular, and Node.js. Build dynamic, responsive, and
                  scalable websites and web applications. The course covers both
                  front-end and back-end development techniques. Explore topics
                  like RESTful APIs, databases, and server management. Ideal for
                  aspiring web developers looking to enhance their skills.
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
          <div className=' md:w-[49%]  flex flex-col  rounded-lg gap-5 md:gap-0 bg-white shadow-lg p-4 mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
            <div className='w-[100%]'>
              <img
                src={process.env.PUBLIC_URL + '/homestc.png'}
                className='object-contain w-full h-full rounded-md'
              />
            </div>
            <div className='w-[100%]  md:p-5  flex flex-col gap-4 md:gap-0 justify-between'>
              <div className='flex flex-col gap-4'>
                <h3 className='font-poppins font-bold text-[14.4px]'>
                  Mobile Application Development
                </h3>
                <p className='font-poppins text-[14.4px]'>
                  Learn how to develop applications for mobile devices using
                  platforms like Android and iOS. This course covers app
                  architecture, user interface design, and coding in languages
                  such as Java, Swift, and Kotlin. Understand mobile app
                  deployment and maintenance. Suitable for anyone aiming to
                  create user-friendly mobile applications. Gain hands-on
                  experience by building functional apps.
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
        </div>
      </div>

      {/* 3RD SECTION */}
      <div className='p-5 bg-[#ffffff] flex flex-col items-center'>
        {/* <h2 className='font-poppins font-bold text-[22px] md:text-[30px]'>
          Aptech cover every major cities in world.
        </h2> */}
        {/* <div className='w-full flex justify-between flex-col gap-4 md:gap-0 md:flex-row mt-5'>
          <div className='w-[100%] md:w-[33.3%] flex flex-col items-center'>
            <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
              04
            </h1>
            <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
              Continents
            </h3>
          </div>
          <div className='w-[100%] md:w-[33.3%] flex flex-col items-center border-t-2 border-b-0 border-l-0 border-r-0 md:border-l-2 md:border-t-0 md border-dashed border-black'>
            <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
              26
            </h1>
            <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
              Countries
            </h3>
          </div>
          <div className='w-[100%] md:w-[33.3%] flex flex-col items-center border-t-2 border-b-0 border-l-0 border-r-0 md:border-l-2 md:border-t-0 md border-dashed border-black'>
            <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
              1576
            </h1>
            <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
              Centers
            </h3>
          </div>
        </div> */}

        {/* <h2 className='font-poppins font-bold text-[22px] md:text-[30px] flex mt-9'>
          <div className='inline text-[#008000]'>36</div>
          centers across
          <img
            src={process.env.PUBLIC_URL + '/pakistan.png'}
            className='w-[30px] object-contain inline'
          />
          Pakistan
        </h2> */}

        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white p-4 mt-9 '>
          <div className='w-[100%] md:w-[55%] h-[400px] flex justify-end'>
            <img
              src={process.env.PUBLIC_URL + '/124.png'}
              className='object-contain w-full h-full rounded-md'
            />
          </div>
          <div className='w-[100%] md:w-[55%] h-[400px] md:p-5  flex flex-col gap-4 md:gap-0 justify-evenly '>
            <div className='flex flex-col gap-4'>
              <p className='font-poppins text-[14.4px] text-[#008000]'>
                Our Vision
              </p>
              <h3 className='font-poppins font-bold text-[22px] md:text-[30px]'>
                Empowering your future with technology education.
              </h3>
              <p className='font-poppins text-[14.4px] text-[#008000]'>
                We have helped build the careers of 68 lakh professionals in 40
                countries.
              </p>
              <p className='font-poppins text-[14.4px] text-[#008000]'>
                NixorTech prepares students to be a part of this growing industry
                through its courses and various placement assistance activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4TH SECTION */}

      {/* <div className='p-5'>
        <iframe
          width='100%'
          height='500'
          src='https://www.youtube.com/embed/5VgJCjRPMm0?si=cyoTrykvRb9wlgds'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div> */}
      {/* 5TH SECTION */}

      <div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-white p-4 mt-9 '>
          <div className='w-[100%] md:w-[55%] h-[400px] md:p-5  flex flex-col gap-4 md:gap-0 justify-evenly '>
            <div className='flex flex-col gap-4'>
              <p className='font-poppins text-[16px] text-[#1f89c9] font-semibold'>
                Job Placements
              </p>
              <h3 className='font-poppins font-bold text-[22px] md:text-[30px]'>
                Help students get a better placement.
              </h3>
              <p className='font-poppins text-[14.4px] text-[#000000]'>
                <p>
                  We have an active Placements Cell dedicated to fulfill market
                  requirements with quality IT HR, we not only conduct
                  placements activities in collaboration with industry leaders
                  but are also involved in preparing our student to meet
                  industry expectations.
                </p>
              </p>
              <ul className='list-disc pl-5'>
                <li className='font-poppins text-[14.4px] text-[#000000]'>
                  Placement Workshops{' '}
                </li>
                <li className='font-poppins text-[14.4px] text-[#000000]'>
                  Soft Skills Sessions
                </li>
                <li className='font-poppins text-[14.4px] text-[#000000]'>
                  Interview Sessions
                </li>
                <li className='font-poppins text-[14.4px] text-[#000000]'>
                  Semester End Projects
                </li>
              </ul>
            </div>
          </div>
          <div className='w-[100%] md:w-[55%] h-[400px] flex justify-end'>
            <video
              src={process.env.PUBLIC_URL + '/placement.mp4'}
              className='object-contain w-full h-full rounded-md'
              controls={false}
              autoPlay
              muted
              playsInline
            />
          </div>
        </div>
      </div>
      {/* 6TH SECTION */}

      <div className='bg-[#fbfafa] p-5 flex flex-col md:flex-row pt-[100px] pb-[100px] gap-9 md:gap-0'>
        <div className='w-[100%] md:w-[40%] flex flex-col justify-center'>
          <p className='font-poppins text-[16px] text-[#1f89c9] font-semibold'>
            Testimonials
          </p>
          <h3 className='font-poppins font-bold text-[22px] text-[#1f89c9] md:text-[30px]'>
            Nixortech creates values across the world.
          </h3>
        </div>
        <div className='w-[100%] md:w-[60%] flex'>
          <div className='flex justify-end mt-4'>
            <button onClick={showNextDiv}>
              <img
                src={process.env.PUBLIC_URL + '/ab_wt.png'}
                className='md:w-[48px] w-[30px]'
              />
            </button>
          </div>
          <div className='relative w-[calc(100%-60px)] md:w-[calc(100%-96px)] h-[300px]  overflow-hidden'>
            <div
              id='div1'
              className='absolute w-full overflow-hidden rounded-2xl  bg-[#ffffff] border border-black h-full transition-transform duration-500 transform flex'
            >
              <div className='w-[60%] md:w-[50%] p-2 md:p-5 flex flex-col justify-between'>
                <p className='font-poppins  md:text-[16px] text-[12.5px]  '>
                  &quot; At Nixortech Solutions, we offer a wide array of
                  courses including Artificial Intelligence, Mobile Application
                  Development, Web Development, Graphic Designing, Cyber
                  Security, and more. Our programs are carefully designed to
                  meet the demands of the ever-evolving tech industry
                </p>
                <div>
                  <h3 className='font-poppins text-[13px] font-bold text-[#1f89c9]'>
                    Ammar Akhter
                  </h3>
                  <h4 className='font-poppins text-[13px]'>
                    CEO Final Rentals
                  </h4>
                </div>
              </div>
              <div className='w-[40%] md:w-[50%] h-[100%] flex justify-center'>
                <img
                  src={process.env.PUBLIC_URL + '/AMMAR_AKHTER.png'}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div
              id='div2'
              className='absolute overflow-hidden w-full rounded-2xl bg-[#ffffff] border border-black h-full transition-transform duration-500 transform flex'
            >
              <div className='w-[60%] md:w-[50%] p-2 md:p-5 flex flex-col justify-between'>
                <p className='font-poppins  md:text-[16px] text-[12.5px] '>
                  &quot; Nixortech Solutions is a dynamic and forward-thinking
                  institution dedicated to empowering individuals through
                  cutting-edge technical education. Our focus is on providing
                  students with the practical skills and knowledge they need to
                  excel in the fast-paced world of technology.
                </p>
                <div>
                  <h3 className='font-poppins text-[13px] font-bold text-[#1f89c9]'>
                    Quratulain
                  </h3>
                  <h4 className='font-poppins text-[13px]'>CEO Nixor Tech</h4>
                </div>
              </div>
              <div className='w-[40%] md:w-[50%] h-[100%] flex justify-center'>
                <img
                  src={process.env.PUBLIC_URL + '/Sidra_Batool.png'}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
           
          </div>
          <div className='flex justify-between mt-4'>
            <button onClick={showNextDiv}>
              <img
                src={process.env.PUBLIC_URL + '/af_wt.png'}
                className='md:w-[48px] w-[30px]'
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
