import React from 'react';
import { FaChalkboardTeacher, FaUniversity, FaClipboardList, FaStar } from 'react-icons/fa';

function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center" style={{ width: '70%' }}>
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Services we provide</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FaChalkboardTeacher className="text-orange-500 text-3xl" />
            <span className="text-lg font-semibold text-gray-800">Test Preparing & Coaching</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FaUniversity className="text-red-500 text-3xl" />
            <span className="text-lg font-semibold text-gray-800">Course, Country & University Selection</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FaClipboardList className="text-blue-500 text-3xl" />
            <span className="text-lg font-semibold text-gray-800">Application Assistance</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <FaStar className="text-purple-500 text-3xl" />
            <span className="text-lg font-semibold text-gray-800">Scholarships</span>
          </div>
        </div>
        <button className="mt-8 bg-orange-500 px-6 py-3 rounded text-white hover:bg-orange-600">Enquire Now</button>
      </div>
      <div className="container mx-auto mt-16 flex flex-col lg:flex-row items-center lg:space-x-8" style={{ width: '70%' }}>
        <div className="relative w-full lg:w-1/2">
          <div className="absolute bg-orange-100 rounded-lg w-4/5 h-4/5 top-4 left-4"></div>
          <img
            src={require('../assets/img.png')}
            alt="Counselling session"
            className="relative rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-left">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Realize your global ambitions with us</h3>
          <p className="text-gray-600 mb-6">
            With a keen ear for your choices and preferences, our counselling experience is so seamless that you will land in your dream university even before you do!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-orange-500 text-xl mr-2">★</span>
              <span className="text-gray-800">Virtual & In-Person Coaching and Counselling</span>
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 text-xl mr-2">★</span>
              <span className="text-gray-800">Comprehensive Assistance for Applications, Admissions & Visas</span>
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 text-xl mr-2">★</span>
              <span className="text-gray-800">High Value Scholarships and Study Loans</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;