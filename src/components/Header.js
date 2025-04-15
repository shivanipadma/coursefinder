import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white py-2 md:py-4" style={{ backgroundColor: '#6C48F0' }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold leading-none">KC Overseas</h1>
          <span className="text-xs md:text-sm">education</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav>
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-white/80">Study Destinations</a></li>
              <li><a href="#" className="hover:text-white/80">Services</a></li>
              <li><a href="#" className="hover:text-white/80">Company</a></li>
              <li><a href="#" className="hover:text-white/80">Upcoming Events</a></li>
            </ul>
          </nav>

          {/* Course Finder Button */}
          <button className="text-white px-6 py-2 rounded hover:bg-white/10 border border-white">
            Course Finder
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenu />
        </button>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#6C48F0] p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              <li><a href="#" className="block py-2">Study Destinations</a></li>
              <li><a href="#" className="block py-2">Services</a></li>
              <li><a href="#" className="block py-2">Company</a></li>
              <li><a href="#" className="block py-2">Upcoming Events</a></li>
              <li><a href="#" className="block py-2">Course Finder</a></li>
            </ul>
          </div>
        )} */}
      </div>
    </header>
  );
}

export default Header;