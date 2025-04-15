import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function HeroSection() {
  return (
    <>
    <section className="text-white text-center relative overflow-hidden" style={{ backgroundColor: '#6C48F0' }}>
      <div className="container mx-auto px-4 sm:px-8 w-full md:w-1/2">
        <div className="top-4 left-4 text-sm text-white pb-4">
          <span className="opacity-70">Home</span> <span>•</span> <span className="font-bold">Pune Branch</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">KC Overseas Education Pune</h2>
        <p className="text-lg mb-6">
          We value your career aspirations, which is why we map your preferences with the best that our global universities have to offer. Thousands of our students are pursuing their programs and aspirations in eminent universities globally, and we welcome you to pursue yours!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            className="bg-orange-500 rounded text-white hover:bg-orange-600 flex items-center justify-center"
            style={{ width: '160px', height: '48px' }}
          >
            Enquire Now
          </button>
          <button className="px-6 py-3 rounded-full text-white hover:opacity-90 flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
              <IoIosArrowDown className="text-black text-xl" />
            </div>
            <span className="font-semibold">Branch Address</span>
          </button>
        </div>
      </div>

    </section>
          <svg viewBox="0 0 1440 100" class="bottom-curve" style={{
            backgroundColor: '#6C48F0'}}>
                <path fill="white" d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z" />
              </svg>
              </>
  );
}

export default HeroSection;