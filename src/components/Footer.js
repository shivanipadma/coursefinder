import React from 'react';

function Footer() {
  return (
    <div className="relative">
      {/* <img
        src={require('../assets/decorativeIcon.png')}
        alt="Decorative icon"
        className="absolute top-7 left-12 w-[80px] mix-blend-screen z-50"
        style={{ background: "transparent" }}
      /> */}
      <div>
        <svg viewBox="0 0 1440 100" className="bg-[#0E1B2C]">
          <path fill="white" d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="relative">
        <footer className="bg-[#0E1B2C] text-white pt-2 pb-12 px-6">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="font-semibold text-2xl mb-5">Stay updated with KC Overseas</h3>
              
              <form className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
                <input 
                  type="email" 
                  placeholder="Email ID" 
                  className="px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 w-full md:w-[400px] focus:outline-none focus:border-orange-500"
                />
                <select 
                  className="px-4 py-3 rounded-lg bg-white text-gray-800 w-full md:w-[400px] focus:outline-none focus:border-orange-500 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>I'm Interested in</option>
                  <option value="study">Study Abroad</option>
                  <option value="counseling">Career Counseling</option>
                  <option value="visa">Visa Services</option>
                  <option value="test">Test Preparation</option>
                </select>
                <button className="bg-[#E97754] px-6 py-3 rounded-lg font-medium hover:bg-[#E97754]/90 transition-colors w-full md:w-auto whitespace-nowrap">
                  Suscribe Now
                </button>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;