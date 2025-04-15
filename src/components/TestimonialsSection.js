import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const testimonials = [
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    name: "Mandar Suryawanshi",
    college: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    name: "Aarohi Sighel",
    college: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    name: "Susan Mendonca",
    college: "Conestoga College, Canada",
  }
];

export default function NativeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-8 md:py-16 px-4 relative" style={{backgroundColor: '#FFDCD8'}}>
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#151515] mb-8 md:mb-12">
        Our students love us
      </h2>
      <div className="max-w-7xl mx-auto relative flex justify-center items-center px-12">
        {/* Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 border border-gray-200"
        >
          <HiChevronLeft className="text-gray-800 text-2xl" />
        </button>

        {/* Cards */}
        <div className="flex gap-4 md:gap-6 overflow-hidden relative py-4 md:py-8">
          {[...Array(3)].map((_, i) => {
            const index = (currentIndex + i) % testimonials.length;
            const item = testimonials[index];
            const isSelected = i === 1;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 md:p-6 flex flex-col justify-between transition-all duration-300 
                  ${isSelected ? 'shadow-xl transform translate-y-4 z-20' : 'shadow-md z-10'}
                  ${i !== 1 ? 'hidden md:flex' : 'flex'}`}
                style={{
                  width: 'calc(100vw - 32px)',
                  maxWidth: '370px',
                  height: 'auto',
                  minHeight: '320px',
                  '@media (min-width: 768px)': {
                    width: '370px',
                    height: '321px'
                  }
                }}
              >
                <FaQuoteLeft className="text-blue-600 text-xl mb-4" />
                <p className="text-gray-700 mb-6 text-sm md:text-base">{item.text}</p>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{item.college}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-30 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 border border-gray-200"
        >
          <HiChevronRight className="text-gray-800 text-2xl" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 md:mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
