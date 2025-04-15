import React, { useState } from 'react';
import webinar1 from '../assets/webinar1.png';
import webinar2 from '../assets/webinar2.png';
import webinar3 from '../assets/webinar3.png';

function WebinarsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const webinars = [
    {
      image: webinar1,
      date: "Mar 19 · 05:00 PM to 07:30 PM",
      title: "USA Virtual Admission Day",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit..."
    },
    {
      image: webinar2,
      date: "May 18 - May 21 · 04:30 PM to 06:30 PM",
      title: "New Zealand Virtual Admissions Week",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit..."
    },
    {
      image: webinar3,
      date: "May 24 - May 28 · 04:00 PM to 06:00 PM",
      title: "UK Virtual Admissions Week",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit..."
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">Webinars & Events</h3>
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide pb-8" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-4 px-4">
                {webinars.map((webinar, index) => (
                  <div 
                    key={index} 
                    className="flex-none w-[280px]"
                  >
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[420px]">
                      <img src={webinar.image} alt={webinar.title} className="w-full h-[180px] object-cover" />
                      <div className="p-5 h-[240px] flex flex-col justify-between">
                        <div>
                          <p className="text-blue-600 text-sm mb-2">{webinar.date}</p>
                          <h4 className="font-bold text-lg mb-2">{webinar.title}</h4>
                          <p className="text-gray-600 text-sm">{webinar.description}</p>
                        </div>
                        <button className="text-[#FF6B2C] text-sm font-bold mt-4">
                          Register Now →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-8 pb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Large card */}
            <img src={webinar1} alt="USA Virtual Admission" className="w-full h-[300px] object-cover" />
            <div className="p-6">
              <p className="text-blue-600 text-sm mb-2">{webinars[0].date}</p>
              <h4 className="font-bold text-xl mb-3">{webinars[0].title}</h4>
              <p className="text-gray-600 mb-4">{webinars[0].description}</p>
              <button className="text-[#FF6B2C] font-bold">Register Now →</button>
            </div>
          </div>
          
          <div className="space-y-8">
            {webinars.slice(1).map((webinar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex">
                <img src={webinar.image} alt={webinar.title} className="w-1/3 object-cover" />
                <div className="p-6 flex-1">
                  <p className="text-blue-600 text-sm mb-2">{webinar.date}</p>
                  <h4 className="font-bold text-lg mb-2">{webinar.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                  <button className="text-[#FF6B2C] font-bold text-sm">Register Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="text-[#FF6B2C] font-bold text-sm">See More →</button>
        </div>
      </div>
    </section>
  );
}

export default WebinarsSection;

