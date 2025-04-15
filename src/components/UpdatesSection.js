import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import Stars from './Stars';

function UpdatesSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-gray-800 text-center">Latest KC Updates</h3>
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-4 mb-8">
              {/* Mobile Update Card 1 */}
              <div className="flex-none w-[280px]">
                <div className="bg-[#FDAF4D] rounded-2xl p-6 flex flex-col" style={{ height: '320px' }}>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">We're Hiring!</h4>
                    <p className="text-gray-700">
                      KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.
                    </p>
                  </div>
                  <button className="w-full bg-white text-[#FF6B2C] py-3 rounded-lg font-bold">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Mobile Update Card 2 & 3 */}
              {[
                { logo: logo1, title: "American International Recruitment Council", cert: "Certified Agents", date: "October 2018 - 2028" },
                { logo: logo2, title: "The British Council", cert: "Advanced Agent Certificate", date: "August 2016 - 2018" }
              ].map((item, index) => (
                <div key={index} className="flex-none w-[280px]">
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between" style={{ height: '320px' }}>
                    <img 
                      src={item.logo} 
                      alt={item.title}
                      className="mb-4"
                      style={index === 0 ? { width: '120px', height: '120px' } : { width: '180px', height: '59.0625px', marginTop: '30px' }}
                    />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                      <Stars />
                      <p className="text-blue-600 font-bold mb-1 mt-4">{item.cert}</p>
                      <p className="text-gray-600 text-sm">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="text-center mt-6">
            <a href="#" className="text-[#FF6B2C] text-sm font-bold inline-flex items-center">
              More News <span className="ml-1">›</span>
            </a>
          </div> */}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-8 mb-8">
          {/* Update 1 */}
          <div className="bg-[#FDAF4D] rounded-lg shadow-lg p-6 relative flex-shrink-0" style={{ width: '570px', height: '500px' }}>
            <h4 className="text-2xl font-bold text-gray-800 mb-4">We’re Hiring!</h4>
            <p className="text-gray-700 mb-6">
              KC continues recruitments for its offices across India and Asia even during the unprecedented times of Covid.
            </p>
            <button className="absolute bottom-6 left-6 bg-white text-orange-500 px-4 py-2 rounded font-bold hover:bg-orange-50">
              Apply now
            </button>
          </div>

          {/* Update 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-evenly text-center flex-shrink-0" style={{ width: '270px', height: '500px' }}>
            <img src={logo1} alt="AIRC Logo" style={{ width: '120px', height: '120px' }} className="mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">American International Recruitment Council</h4>
            <Stars />
            <p className="text-blue-600 font-bold mb-1 mt-4">Certified Agents</p>
            <p className="text-gray-600 text-sm">October 2018 - 2028</p>
          </div>

          {/* Update 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-evenly text-center flex-shrink-0" style={{ width: '270px', height: '500px' }}>
            <img src={logo2} alt="British Council Logo" style={{ width: '180px', height: '59.0625px', margin: '30px 0' }} className="mx-auto mb-4" />
            <h4 className="text-lg font-bold text-gray-800 mb-2">The British Council</h4>
            <Stars />
            <p className="text-blue-600 font-bold mb-1 mt-4">Advanced Agent Certificate</p>
            <p className="text-gray-600 text-sm">August 2016 - 2018</p>
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="text-orange-500 text-sm font-bold hover:underline">
            More News <span className="ml-1">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default UpdatesSection;