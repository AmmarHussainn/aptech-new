import React, { useState } from 'react';
import { TextInputField } from '../components/InputTextField';
import Header from '../components/Header';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your API call or form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />

      <div className='mt-9 flex w-[90%] mx-auto justify-center'>
        <div className='w-[100%] md:w-[80%]'>
          <form onSubmit={handleSubmit}>
            <h1 className='text-[30px] md:text-[40px] font-bold font-poppins'>
              Course Registration
            </h1>

            {/* Name Fields */}
            <TextInputField
              label='Name (Complete Name as per CNIC)'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your full name'
            />

            <TextInputField
              label="Father's Name or Husband's Name"
              name='fatherName'
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name or Husband's name"
            />

            <div className='flex flex-col py-2 cursor-pointer'>
              <label className='font-roboto'>Date of Birth</label>
              <input
                type='date'
                name='dateOfBirth'
                value={formData.dateOfBirth}
                onChange={handleChange}
                className='border border-black p-2 cursor-pointer '
              />
            </div>

            <TextInputField
              label='Email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
            />

            <TextInputField
              label='Contact Number'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder='Enter your contact number'
            />

            <TextInputField
              label='Postal Address'
              name='postalAddress'
              value={formData.postalAddress}
              onChange={handleChange}
              placeholder='Enter your postal address'
            />

            {/* Dropdown for Courses */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Select Course</label>
              <select
                name='course'
                value={formData.course}
                onChange={handleChange}
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

            {/* Course Type Select */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Course Type</label>
              <select
                name='courseType'
                value={formData.courseType}
                onChange={handleChange}
                className='border border-black p-2'
              >
                <option value=''>Select course type</option>
                <option value='Paid'>Paid Courses</option>
                <option value='Free'>Free Courses</option>
                <option value='Both'>Free + Paid Courses</option>
              </select>
            </div>

            {/* Qualification Select */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Latest Qualification</label>
              <select
                name='qualification'
                value={formData.qualification}
                onChange={handleChange}
                className='border border-black p-2'
              >
                <option value=''>Select your qualification</option>
                <option value='Matric'>Matric</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Bachelors'>Bachelors</option>
                <option value='Masters'>Masters</option>
              </select>
            </div>

            {/* Shift Select */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Shift</label>
              <select
                name='shift'
                value={formData.shift}
                onChange={handleChange}
                className='border border-black p-2'
              >
                <option value=''>Select your preferred shift</option>
                <option value='Morning'>Morning</option>
                <option value='Evening'>Evening</option>
                <option value='Any'>Any</option>
              </select>
            </div>

            {/* Gender Selection */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>Gender</label>
              <select
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                className='border border-black p-2'
              >
                <option value=''>Select your gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              
              </select>
            </div>

            {/* Feedback TextArea */}
            <div className='flex flex-col py-2'>
              <label className='font-roboto'>
                Suggestions/Feedback for New Course
              </label>
              <textarea
                name='feedback'
                value={formData.feedback}
                onChange={handleChange}
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
