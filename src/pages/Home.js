import Header from '../components/Header';
import { Footer } from '../components/Footer';
import courses from '../components/coursesData';
import { useNavigate } from 'react-router-dom';
import { Carousel } from '../components/carousal';

function Home() {
  const navigate = useNavigate();

  return (
    <div className=' bg-[#f8f9fa]'>
      <Header />

      {/* HERO SECTION */}
      {/* <div className='h-[93vh] bg-[#605f5f] w-full min-h-[680px] relative'>
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
      </div> */}

      <div className='flex justify-center bg-[#f8f9fa] pt-[50px] lg:pt-[10px] pb-9 lg:mt-0 mt-9'>
        {/* <div className='w-[90%]  flex flex-col md:flex-row gap-10 md:gap-5'>
    <div className='w-[100%] md:w-[50%] md:py-20 flex flex-col gap-10'>
      <h1 className='text-[34px] md:text-[44px] font-bold font-poppins'>
        Unlock Your Future with Industry-Leading Tech Education
      </h1>

      <p className='font-poppins text-[16px] md:text-[18px]'>
        Master the skills of tomorrow with expert-led courses in AI, full-stack development, and DevOps. Empower your career with hands-on training and real-world experience.
      </p>
      
      <a onClick={()=>{navigate('/applynow')}} className='font-poppins text-[16px] text-center p-1 rounded-md w-[130px] md:text-[18px] text-white bg-[#49bbeb] font-semibold'>
        Enroll Today  
      </a>
    </div>

    <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
      <img src={process.env.PUBLIC_URL + '/mainbanner.jpg'} className=' h-full lg:h-[600px]' alt='about' />
    </div>
  </div> */}
        <Carousel />
      </div>

      {/* ADDED SECTION */}

      <div className='flex justify-center  bg-[#ebebeb] pt-[50px] lg:pt-[10px] pb-9 lg:mt-0 mt-9'>
        <div className='w-[90%] md:w-[70%] flex flex-col items-center gap-5'>
          <div className='font-poppins md:text-[40px] text-[30px] text-center font-semibold'>
            Global Technology Enabler In Pakistan
          </div>
          <div className='w-[100px] h-[2px] bg-black'></div>
          <div className='font-poppins md:text-[20px] text-[18px]  font-[300] text-center md:leading-9'>
          Noxortech is a distinguished global technology enabler, renowned for its strategic partnerships with innovative tech companies. Noxortech is headquartered in Pakistan, its mission is to support emerging and established technology businesses, helping them thrive in competitive international markets. Through a strong network of influential partners and deep insights into global business dynamics, Noxortech bridges the gap between cutting-edge innovation and global market access.
          </div>
          <div className='text-white border-[1px] border-white bg-[#1f89c9] hover:bg-white hover:text-[#1f89c9] hover:border-[#1f89c9] text-[18px]  py-3 px-9 rounded-full cursor-pointer'>
            View All
          </div>
        </div>
      </div>

      {/* 2ND SECTION */}
      <div className='flex flex-col items-center gap-5 mt-9'>
        <div className='font-poppins md:text-[40px] text-[30px] text-center font-semibold'>
          Courses
        </div>
        <div className='w-[100px] h-[2px] bg-black'></div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:gap-5 flex-wrap mt-9'>
        {courses?.slice(0, 6).map((course) => {
          return (
            <div
            className="lg:w-[32%] mt-2 md:p-0 p-2 md:w-[44%] w-[95%] h-[250px] flex justify-start cursor-pointer items-end bg-cover bg-center transition-all duration-500 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(180deg, transparent 0%, #000 100%) , url(${process.env.PUBLIC_URL + course.image})`,
              backgroundSize: "100%",
              transition: "background-size 0.5s ease-in-out",
              backgroundRepeat : "no-repeat",
              backgroundPosition : "center"

            }}
            onMouseEnter={e => e.currentTarget.style.backgroundSize = '110%'}
            onMouseLeave={e => e.currentTarget.style.backgroundSize = '100%'}
          >
            {
              <p className='text-white ml-5 mb-5 font-poppins font-semibold text-[22px]'>{course.title}</p>
            }
          </div>
          
          
          

           
          );
        })}
      </div>
      
      <div onClick={()=> navigate('/courses')} className='text-white border-[1px] w-fit ml-auto mr-auto mt-9 border-white bg-[#1f89c9] hover:bg-white hover:text-[#1f89c9] hover:border-[#1f89c9] text-[18px]  py-3 px-9 rounded-full cursor-pointer'>
            View All
          </div>
      {/* <div className='flex flex-col md:flex-row justify-center md:gap-5 flex-wrap'>
        {courses?.slice(0, 5).map((course) => {
          return (
            <div className='lg:w-[32%] md:p-0 p-2 md:w-[44%] cursor-pointer  flex flex-col  rounded-lg gap-5 md:gap-0 bg-white shadow-lg  mt-5 transform transition-transform duration-500 hover:-translate-y-2'>
              <div className='w-[100%] h-[315px] md:h-[350px] '>
                <img
                  alt={course.title}
                  src={process.env.PUBLIC_URL + course.image}
                  className='object-cover w-full h-full rounded-md'
                />
              </div>
              <div className='w-[100%]  md:p-5 p-2 flex flex-col gap-4 md:gap-0 justify-between'>
                <div className='flex flex-col gap-4'>
                  <h3 className='font-poppins font-bold text-[18px]'>
                    {course.title}
                  </h3>
                  <p className='font-poppins text-[14.4px]'>
                    {course.description}
                  </p>
                </div>
                <div className='bg-[#1f89c9] w-[35px] h-[35px] rounded-full flex justify-center mt-4 items-center cursor-pointer'>
                  <img
                    src={process.env.PUBLIC_URL + '/arrow_r.png'}
                    width={'24px'}
                    alt='arrow'
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* 3RD SECTION */}
      <div className='flex flex-col items-center gap-5 mt-9'>
        <div className='font-poppins md:text-[40px] text-[30px] text-center font-semibold'>
        Nixor Tech Academy 
        </div>
        <div className='w-[100px] h-[2px] bg-black'></div>
      </div>



      <div className='flex justify-center  pt-[50px] pb-9 mt-9 bg-[#1f89c9]'>
        <div className='w-[90%] flex flex-col md:flex-row gap-5 md:gap-0 '>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10  text-white p-2 '>
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

      {/* <div className='p-5 bg-[#f8f9fa] flex flex-col items-center'>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0  p-4 mt-9 '>
          <div className='w-[100%] md:w-[55%] h-[400px] flex justify-end'>
            <img
              src={process.env.PUBLIC_URL + '/124.png'}
              className='object-contain w-full h-full rounded-md'
              alt='about'
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
                NixorTech prepares students to be a part of this growing
                industry through its courses and various placement assistance
                activities.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* 4TH SECTION */}

      {/* 5TH SECTION */}

      {/* <div>
        <div className='flex flex-col md:flex-row rounded-lg gap-5 md:gap-0 bg-[#f8f9fa] p-4 mt-9 '>
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
      </div> */}
      {/* 6TH SECTION */}

      {/* <div className='bg-[#fbfafa] p-5 flex flex-col md:flex-row pt-[100px] pb-[100px] gap-9 md:gap-0'>
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
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
