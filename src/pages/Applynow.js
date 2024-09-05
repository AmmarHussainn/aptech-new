import React, { useEffect, useState } from 'react';
import { TextInputField } from '../components/InputTextField';
import Header from '../components/Header';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Applynow = () => {
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

  const handleChange = (name, value) => {
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Header />

      <div className='mt-9 flex w-[90%] mx-auto justify-center'>
        <div className='w-[100%] md:w-[80%]'>
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
            />

            <TextInputField
              label="Father's Name or Husband's Name"
              name='fatherName'
              onChange={(e) => handleChange('fatherName', e.target.value)}
              value={formData.fatherName}
              placeholder="Enter father's name or Husband's name"
            />

            <div className='flex flex-col py-2 cursor-pointer'>
              <label className='font-roboto'>Date of Birth</label>
              <input
                type='date'
                name='dateOfBirth'
                onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                value={formData.dateOfBirth}
                className='border border-black p-2 w-full cursor-pointer '
              />
            </div>

            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Gender</label>
              <select
                name='gender'
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className='border border-black p-2'
              >
                <option value=''>Select your gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>

            <TextInputField
              label='Email'
              name='email'
              onChange={(e) => handleChange('email', e.target.value)}
              value={formData.email}
              placeholder='Enter your email'
            />
            {/* 
            <TextInputField
              label='Contact Number'
              name='contactNumber'
              onChange={(e) => handleChange('contactNumber', e.target.value)}
              value={formData.contactNumber}
              placeholder='Enter your contact number'
            /> */}
            <PhoneInput
              country={'pk'}
              onChange={(e) => handleChange('contactNumber', e)}
              value={formData.contactNumber}
              inputClass='!w-[100%] !border-none  my-2 p-2 '
              className='w-[100%]  border border-black'
            />
            <TextInputField
              label='Postal Address'
              name='postalAddress'
              onChange={(e) => handleChange('postalAddress', e.target.value)}
              value={formData.postalAddress}
              placeholder='Enter your postal address'
            />

            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Select Course</label>
              <select
                name='course'
                onChange={(e) => handleChange('course', e.target.value)}
                value={formData.course}
                className='border border-black p-2'
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
            </div>

            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Course Type</label>
              <select
                name='courseType'
                onChange={(e) => handleChange('courseType', e.target.value)}
                value={formData.courseType}
                className='border border-black p-2'
              >
                <option value=''>Select course type</option>
                <option value='Paid'>Paid Courses</option>
                <option value='Free'>Free Courses</option>
                <option value='Both'>Free + Paid Courses</option>
              </select>
            </div>

            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Latest Qualification</label>
              <select
                name='qualification'
                onChange={(e) => handleChange('qualification', e.target.value)}
                value={formData.qualification}
                className='border border-black p-2'
              >
                <option value=''>Select your qualification</option>
                <option value='Matric'>Matric</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Bachelors'>Bachelors</option>
                <option value='Masters'>Masters</option>
              </select>
            </div>

            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Shift</label>
              <select
                name='shift'
                onChange={(e) => handleChange('shift', e.target.value)}
                value={formData.shift}
                className='border border-black p-2'
              >
                <option value=''>Select your preferred shift</option>
                <option value='Morning'>Morning</option>
                <option value='Evening'>Evening</option>
                <option value='Any'>Any</option>
              </select>
            </div>

            {/* Feedback TextArea */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>
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
        </div>
      </div>
    </>
  );
};

export default Applynow;
