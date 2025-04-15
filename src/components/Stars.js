import React from 'react';
import star from '../assets/star.png';

function Stars() {
  return (
    <div className="flex justify-center items-center space-x-4">
      <img src={star} alt="Star" className="w-6 h-6" />
      <img src={star} alt="Star" className="w-6 h-6" />
      <img src={star} alt="Star" className="w-6 h-6" />
    </div>
  );
}

export default Stars;
