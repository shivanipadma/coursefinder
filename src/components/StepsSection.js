import React from 'react';

function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Counselling",
      description: "Plan your Academic and Career Goals",
      icon: require("../assets/Vector1.png"),
      bgColor: "#FDC98D",
      active: true
    },
    {
      number: "2",
      title: "Test Preparation",
      description: "Appear for Standardized Tests",
      icon: require("../assets/Vector2.png"),
      bgColor: "#FDC98D",
      active: false
    }
  ];

  return (
    <section className="py-8 md:py-16" style={{ backgroundColor: 'rgba(219, 217, 255, 1)' }}>
      <div className="container mx-auto text-center px-4 md:px-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-[120px] text-gray-800">
          7 Easy Steps to Land in your Dream University
        </h3>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative pb-6">
            {/* Connecting Line */}
            {/* <div className="absolute top-4 left-[35%] right-[35%] h-0.5 border-dashed border-gray-400 z-0"></div> */}
            
            <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-4 px-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex-none w-[280px] pt-10"
                  >
                    {/* Number Circle */}
                    <div className="relative mb-6">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-300 shadow-md">
                          <span className={`font-bold text-base text-gray-800}`}>
                            {step.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between`} style={{ height: '260px' }}>
                      <div className="relative" style={{ width: '105px', height: '60px', marginTop: '20px' }}>
                        <div 
                          className="w-full h-full rounded-t-full"
                          style={{ backgroundColor: step.bgColor }}
                        ></div>
                        <img 
                          src={step.icon} 
                          alt={step.title}
                          className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-gray-800 mt-4">{step.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative" style={{ height: '360px' }}>
            {/* Step 1 - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 text-center z-20 flex flex-col items-center justify-center" style={{ width: '440px', height: '260px' }}>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 shadow-md">
                  <span className="text-gray-800 font-bold text-lg">1</span>
                </div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white mx-auto mt-2"></div>
              </div>
              <div className="relative" style={{ width: '105px', height: '60px', marginTop: '20px' }}>
                <div className="w-full h-full" style={{ backgroundColor: '#FDC98D', borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}></div>
                <img src={require('../assets/Vector1.png')} alt="Vector1" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Counselling</h4>
              <p className="text-sm text-gray-600 mt-2">Plan your Academic and Career Goals</p>
            </div>

            {/* Step 2 - Right */}
            <div className="absolute -right-10 bg-white/80 rounded-lg shadow-lg p-6 text-center z-10 flex flex-col items-center justify-center blur-[0.3px]" style={{ width: '440px', height: '260px', transform: 'scale(0.95)' }}>
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 shadow-md">
                  <span className="text-gray-800 font-bold text-lg">2</span>
                </div>
                <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white mx-auto mt-2"></div>
              </div>
              <div className="relative" style={{ width: '105px', height: '60px', marginTop: '20px' }}>
                <div className="w-full h-full" style={{ backgroundColor: '#D3D5DB', borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}></div>
                <img src={require('../assets/Vector2.png')} alt="Vector2" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-10 h-10 object-contain" />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mt-4">Test Preparation</h4>
              <p className="text-sm text-gray-600 mt-2">Appear for Standardized Tests</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 text-orange-500 text-sm gap-10">
          <button className="flex items-center space-x-2 hover:underline">
            <span>‹</span>
            <span>Previous Step</span>
          </button>
          <button className="flex items-center space-x-2 hover:underline">
            <span>Next Step</span>
            <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;