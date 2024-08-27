import { Footer } from '../components/Footer';
import Header from '../components/Header';

function About() {
  return (
    <div className='selection:bg-yellow-500'>
      <div className='shadow-lg'>
        <Header />
      </div>

      {/* 1ST SECTION */}

      <div className='flex justify-center bg-white pt-[50px] pb-9 mt-9'>
        <div className='w-[90%] flex flex-col md:flex-row gap-5 md:gap-0 '>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10'>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              Aptech Pakistan is a premier institute for technical education,
              dedicated to providing students with the knowledge and skills they
              need to succeed in the ever-evolving world of technology. With
              over 30 years of experience in designing courses and providing
              topnotch education to students, Aptech Pakistan is the go-to
              choice for students who want to excel in their careers.
            </p>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              At Aptech Pakistan, we offer a wide range of technical education
              courses, including Information Technology, Multimedia & Animation,
              Hardware & Networking, and Aviation & Hospitality. Our courses are
              designed to provide students with a rigorous and challenging
              learning experience that prepares them for the real-world
              challenges they will face in their careers.
            </p>
          </div>
          <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL + '/pakistan1.png'} alt='about' />
          </div>
        </div>
      </div>

      {/* 2ND SECTION */}
      <div className='flex justify-center bg-[#f8f9fa] pt-[50px] pb-9 mt-9'>
        <div className='w-[90%] flex flex-col-reverse md:flex-row gap-5 md:gap-0 '>
          <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
            <img src={process.env.PUBLIC_URL + '/pakistan1.png'} alt='about' />
          </div>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10'>
            <h1 className='text-[34px] md:text-[44px] font-bold font-poppins'>
              Aptech Pakistan
            </h1>

            <p className='font-poppins text-[16px] md:text-[18px]'>
              Aptech Pakistan is a premier institute for technical education,
              dedicated to providing students with the knowledge and skills they
              need to succeed in the ever-evolving world of technology. With
              over 30 years of experience in designing courses and providing
              topnotch education to students, Aptech Pakistan is the go-to
              choice for students who want to excel in their careers.
            </p>
            <p className='font-poppins text-[16px] md:text-[18px]'>
              At Aptech Pakistan, we offer a wide range of technical education
              courses, including Information Technology, Multimedia & Animation,
              Hardware & Networking, and Aviation & Hospitality. Our courses are
              designed to provide students with a rigorous and challenging
              learning experience that prepares them for the real-world
              challenges they will face in their careers.
            </p>
          </div>
        </div>
      </div>

      {/* 3RD SECTION */}

      <div className='flex justify-center bg-[#ffffff] pt-[50px] pb-9 mt-9'>
        <div className='w-[90%] flex flex-col md:flex-row gap-4 md:gap-0 items-center '>
          <div className='w-[100%] md:w-[50%] flex flex-col gap-10'>
            <h1 className='text-[34px] md:text-[44px] font-bold font-poppins'>
              Mission
            </h1>

            <p className='font-poppins text-[16px] md:text-[18px]'>
            Our mission is to advance the technological landscape of Pakistan by nurturing talent and fostering innovation. We believe that technology, when effectively harnessed, drives growth, enhances productivity, and creates a lasting impact on individuals, organizations, and society at large.

            </p>
            <p className='font-poppins text-[16px] md:text-[18px]'>
            Nixortech Solutions is dedicated to excellence in education, striving to deliver top-quality training that is customer-centric and industry-relevant. Our commitment to excellence ensures that our students are not just skilled professionals but also future leaders in the global technology space.
            </p>
           
          </div>{' '}
          <div className='w-[100%] h-[500px] md:w-[50%] flex justify-center items-center'>
            <img
            alt=''
              src={process.env.PUBLIC_URL + '/siriqbal.jpg'}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>

      {/* 4TH SECTION */}
      <div className='w-[100%] bg-[#f8f9fa] flex justify-center'>
        <div className='w-[90%] pt-5 pb-5  flex flex-col items-center'>
          <h2 className='font-poppins font-bold text-[22px] md:text-[30px]'>
            Aptech cover every major cities in world.
          </h2>
          <div className='w-full flex justify-between flex-col gap-4 md:gap-0 md:flex-row mt-5'>
            <div className='w-[100%] md:w-[33.3%] flex flex-col items-center'>
              <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
                05
              </h1>
              <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
                Continents
              </h3>
            </div>
            <div className='w-[100%] md:w-[33.3%] flex flex-col items-center border-t-2 border-b-0 border-l-0 border-r-0 md:border-l-2 md:border-t-0 md border-dashed border-black'>
              <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
                40
              </h1>
              <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
                Countries
              </h3>
            </div>
            <div className='w-[100%] md:w-[33.3%] flex flex-col items-center border-t-2 border-b-0 border-l-0 border-r-0 md:border-l-2 md:border-t-0 md border-dashed border-black'>
              <h1 className='text-[48px] md:text-[80px] text-[#444444] font-poppins font-bold'>
                2500
              </h1>
              <h3 className='text-[18px] md:text-[20px] text-[#000000] font-poppins mt-[-20px] '>
                Centers
              </h3>
            </div>
          </div>

          <h2 className='font-poppins font-bold text-[22px] md:text-[30px] flex mt-9'>
            <div className='inline text-[#008000]'>36</div>
            centers across
            <img
             alt=''
              src={process.env.PUBLIC_URL + '/pakistan.png'}
              className='w-[30px] object-contain inline'
            />
            Pakistan
          </h2>

          <div className='w-[100%] md:w-[70%] mt-10 flex flex-col gap-4'>
            <h1 className='text-[30px] md:text-[44px] font-bold font-poppins'>
              🏆 Acheivement
            </h1>
            <p className='text-[16px] font-poppins'>
            With a rapidly growing footprint, Nixortech Solutions has emerged as a trusted name in tech education. Our commitment to quality has been recognized by industry experts, and we take pride in our contributions to the tech ecosystem
            </p>
          </div>

          <div className='flex flex-col md:flex-row shadow-sm hover:shadow-lg w-[100%] md:w-[70%] gap-5 md:gap-0 bg-white  mt-9 '>
            <div className='w-[100%] md:w-[50%]  md:p-5 p-4  flex flex-col gap-4 md:gap-0  '>
              <div className='flex flex-col  gap-4'>
                <h3 className='font-poppins font-bold text-[18px] md:text-[20px]'>
                  Empowering your future with technology education.
                </h3>
                <p className='font-poppins text-[14.4px]'>
                  9th April, 2017 was a great day in the history of Aptech
                  Computer Education Pakistan when its was called to receive the
                  first International “International Start for Leadership in
                  Quality”
                </p>
              </div>
            </div>{' '}
            <div className='w-[100%] md:w-[50%] h-[400px] flex justify-end'>
              <img
               alt=''
                src={process.env.PUBLIC_URL + '/award.jpg'}
                className='object-contain w-full h-full rounded-md'
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row shadow-sm hover:shadow-lg w-[100%] md:w-[70%] gap-5 md:gap-0 bg-white  mt-9 '>
            <div className='w-[100%] md:w-[50%] h-[400px] flex justify-end'>
              <img
               alt=''
                src={process.env.PUBLIC_URL + '/aboutimg.jpg'}
                className='object-contain w-full h-full rounded-md'
              />
            </div>{' '}
            <div className='w-[100%] md:w-[50%]  md:p-5 p-4  flex flex-col gap-4 md:gap-0  '>
              <div className='flex flex-col  gap-4'>
                <p className='font-poppins text-[14.4px]'>
                  Pioneer. More than 2 decades of experience in training (since
                  1986). Trained over 6.4 million students.{' '}
                </p>
              </div>
            </div>
          </div>




          <div className='flex flex-col md:flex-row shadow-sm hover:shadow-lg w-[100%] md:w-[70%] gap-5 md:gap-0 bg-white  mt-9 mb-9 '>
            <div className='w-[100%]   md:p-5 p-4  flex flex-col gap-4 md:gap-0  '>
              <div className='flex flex-col  gap-5'>
                <h3 className='font-poppins font-bold text-[18px] md:text-[20px]'>
                Aptech Pakistan Won 🏆 awards
                </h3>
                <p className='font-poppins text-[16px]'>
                 <span className='bg-[#ffbe11] pl-3 pr-3 pt-1 pb-1 text-white'>(2018)</span> -  Brands of the Year
                </p>
                <p className='font-poppins text-[16px]'>
                 <span className='bg-[#ffbe11] pl-3 pr-3 pt-1 pb-1 text-white'>(2017)</span> -  International Star for Leadership in Quality
                </p>
                <p className='font-poppins text-[16px]'>
                 <span className='bg-[#ffbe11] pl-3 pr-3 pt-1 pb-1 text-white'>(2016)</span> -  Who's Who Award
                </p>
                <p className='font-poppins text-[16px]'>
                 <span className='bg-[#ffbe11] pl-3 pr-3 pt-1 pb-1 text-white'>(2014)</span> -  Brand Scientist Award
                </p>
                <p className='font-poppins text-[16px]'>
                 <span className='bg-[#ffbe11] pl-3 pr-3 pt-1 pb-1 text-white'>(2013)</span> -  Best Achievement, at APTECH World Leadership Summit, Thailand
                </p>
              </div>
            </div>{' '}
          
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
