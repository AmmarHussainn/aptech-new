import React, { useEffect, useState } from 'react';
import { TextInputField } from '../components/InputTextField';
import Header from '../components/Header';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import swal from 'sweetalert'
const Applynow = () => {
  const [loader, setLoader] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dateOfBirth: '',
    email: '',
    contactNumber: '',
    postalAddress: '',
    course: '',
    courseType: '',
    qualification: '',
    shift: '',
    gender: '',
    feedback: '',
  });
  const [error, setError] = useState({
    name: '',
    fatherName: '',
    dateOfBirth: '',
    email: '',
    contactNumber: '',
    postalAddress: '',
    course: '',
    courseType: '',
    qualification: '',
    shift: '',
    gender: '',
    feedback: '',
  });
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const DataValidation = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.fatherName)
      newErrors.fatherName = "Father's name is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'A valid email is required';
    }
    if (!formData.contactNumber)
      newErrors.contactNumber = 'Contact number is required';
    if (!formData.postalAddress)
      newErrors.postalAddress = 'Postal address is required';
    if (!formData.course) newErrors.course = 'Course is required';
    if (!formData.courseType) newErrors.courseType = 'Course type is required';
    if (!formData.qualification)
      newErrors.qualification = 'Qualification is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.shift) newErrors.shift = 'Shift is required';

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (DataValidation()) {
      const apiBody = {
        name: formData.name,
        fatherOrHusbandName: formData.fatherName,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        email: formData.email,
        contactNumber: formData.contactNumber,
        postalAddress: formData.postalAddress,
        selectedCourse: formData.course,
        courseType: formData.courseType,
        latestQualification: formData.qualification,
        shift: formData.shift,
        suggestionsFeedback: formData.feedback,
      };
    
      try {
        const response = await axios.post(
          'https://nixortech-backend.onrender.com/form/register',
          apiBody
        );
        setLoader(false);
      
        swal("Form submitted successfully!", " An email has been sent to you. Please check your email.", "success");
        setFormData({
          name: '',
          fatherName: '',
          dateOfBirth: '',
          email: '',
          contactNumber: '',
          postalAddress: '',
          course: '',
          courseType: '',
          qualification: '',
          shift: '',
          gender: '',
          feedback: '',
        });

        
      } catch (error) {
       
        setFormData({
          name: '',
          fatherName: '',
          dateOfBirth: '',
          email: '',
          contactNumber: '',
          postalAddress: '',
          course: '',
          courseType: '',
          qualification: '',
          shift: '',
          gender: '',
          feedback: '',
        });
        setLoader(false);
        swal ( "Oops" ,  "Error submitting the form:" ,  "error" )

        
      }
    } else {
      setLoader(false);
      return;
    }
    setLoader(false);
  };

  const handleChange = (name, value) => {
  
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: '' });
  };



  return (
    <>
      <Header />

      <div className='mt-9 flex w-[90%] mx-auto justify-center'>
        <div className='w-[100%] md:w-[80%]'>
          {loader && (
            <div class='flex justify-center items-center h-screen'>
              <div class='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#0077bc]'></div>
            </div>
          )}
          {!loader && (
            <form onSubmit={handleSubmit}>
              <h1 className='text-[30px] md:text-[40px] font-bold font-poppins'>
                Course Registration
              </h1>

              <TextInputField
                label='Name (Complete Name as per CNIC)'
                name='name'
                onChange={(e) => handleChange('name', e.target.value)}
                value={formData.name}
                placeholder='Enter your full name'
                error={error.name}
              />

              <TextInputField
                label="Father's Name or Husband's Name"
                name='fatherName'
                onChange={(e) => handleChange('fatherName', e.target.value)}
                value={formData.fatherName}
                placeholder="Enter father's name or Husband's name"
                error={error.fatherName}
              />

              <div className='flex flex-col py-2 gap-2 cursor-pointer'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Date of Birth
                </label>
                <input
                  type='date'
                  name='dateOfBirth'
                  onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                  value={formData.dateOfBirth}
                  className={`border p-2 w-full cursor-pointer ${
                    error.dateOfBirth ? 'border-[#ff0000]' : 'border-black'
                  }`}
                />
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.dateOfBirth}
                </div>
              </div>

              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Gender
                </label>
                <select
                  name='gender'
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className={`border focus:outline-none ${
                    error.gender ? 'border-[#ff0000]' : 'border-black'
                  } p-2`}
                >
                  <option value=''>Select your gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>

                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.gender}
                </div>
              </div>

              <TextInputField
                label='Email'
                name='email'
                onChange={(e) => handleChange('email', e.target.value)}
                value={formData.email}
                placeholder='Enter your email'
                error={error.email}
              />
              <div className='flex flex-col gap-2 py-2'>
                <div className='text-[14px] md:text-[16px]  font-poppins w-full'>
                  Phone Number
                </div>
                <PhoneInput
                  country={'pk'}
                  onChange={(e) => handleChange('contactNumber', e)}
                  value={formData.contactNumber}
                  inputClass='!w-[100%] !border-none  my-2 p-2 '
                  className={`w-[100%]  border ${
                    error.contactNumber ? 'border-[#ff0000]' : 'border-black'
                  }`}
                />
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.contactNumber}
                </div>
              </div>
              <TextInputField
                label='Postal Address'
                name='postalAddress'
                onChange={(e) => handleChange('postalAddress', e.target.value)}
                value={formData.postalAddress}
                placeholder='Enter your postal address'
                error={error.postalAddress}
              />

              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Select Course
                </label>
                <select
                  name='course'
                  onChange={(e) => handleChange('course', e.target.value)}
                  value={formData.course}
                  className={`border focus:outline-none ${
                    error.course ? 'border-[#ff0000]' : 'border-black'
                  } p-2`}
                >
                  <option value=''>Select a course</option>
                  <option value='Computer CIT'>Computer CIT</option>
                  <option value='Amazon Virtual Assistant'>
                    Amazon Virtual Assistant
                  </option>
                  <option value='Office Automation'>Office Automation</option>
                  <option value='Advanced Web Development'>
                    Advanced Web Development
                  </option>
                  <option value='Mobile Application Development'>
                    Mobile Application Development
                  </option>
                  <option value='Artificial Intelligence'>
                    Artificial Intelligence
                  </option>
                  <option value='Programming & Development'>
                    Programming & Development
                  </option>
                  <option value='Graphic Designing'>Graphic Designing</option>
                  <option value='Digital Forensics & Cyber Security'>
                    Digital Forensics & Cyber Security
                  </option>
                  <option value='E-Commerce'>E-Commerce</option>
                  <option value='Project Management'>Project Management</option>
                </select>
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.course}
                </div>
              </div>

              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Course Type
                </label>
                <select
                  name='courseType'
                  onChange={(e) => handleChange('courseType', e.target.value)}
                  value={formData.courseType}
                  className={`border focus:outline-none ${
                    error.courseType ? 'border-[#ff0000]' : 'border-black'
                  } p-2`}
                >
                  <option value=''>Select course type</option>
                  <option value='Paid'>Paid Courses</option>
                  <option value='Free'>Free Courses</option>
                  <option value='Both'>Free + Paid Courses</option>
                </select>
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.courseType}
                </div>
              </div>

              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Latest Qualification
                </label>
                <select
                  name='qualification'
                  onChange={(e) =>
                    handleChange('qualification', e.target.value)
                  }
                  value={formData.qualification}
                  className={`border focus:outline-none ${
                    error.qualification ? 'border-[#ff0000]' : 'border-black'
                  } p-2`}
                >
                  <option value=''>Select your qualification</option>
                  <option value='Matric'>Matric</option>
                  <option value='Intermediate'>Intermediate</option>
                  <option value='Bachelors'>Bachelors</option>
                  <option value='Masters'>Masters</option>
                </select>
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.qualification}
                </div>
              </div>

              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Shift
                </label>
                <select
                  name='shift'
                  onChange={(e) => handleChange('shift', e.target.value)}
                  value={formData.shift}
                  className={`border focus:outline-none ${
                    error.shift ? 'border-[#ff0000]' : 'border-black'
                  } p-2`}
                >
                  <option value=''>Select your preferred shift</option>
                  <option value='Morning'>Morning</option>
                  <option value='Evening'>Evening</option>
                  <option value='Any'>Any</option>
                </select>
                <div className='text-[14px] md:text-[16px]  font-roboto w-full text-[#ff0000]'>
                  {error.shift}
                </div>
              </div>

              {/* Feedback TextArea */}
              <div className='flex flex-col py-2 gap-2'>
                <label className='text-[14px] md:text-[16px]  font-poppins'>
                  Suggestions/Feedback for New Course
                </label>
                <textarea
                  name='feedback'
                  onChange={(e) => handleChange('feedback', e.target.value)}
                  value={formData.feedback}
                  placeholder='Enter your suggestions or feedback'
                  className='border border-black p-2'
                  rows={4}
                />
              </div>

              <div className='flex justify-end py-2'>
                <button
                  type='submit'
                  className='w-[100%] md:w-[200px] text-white bg-black p-3 border border-black'
                >
                  Submit
                </button>
              </div>
            </form>
          )}

        
        </div>
      </div>
    </>
  );
};

export default Applynow;
