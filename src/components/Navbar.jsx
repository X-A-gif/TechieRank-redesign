import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import logo from '../assets/gitScores.png';

const Navbar = ({ cRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 w-full bg-transparent mr-24 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:py-6 lg:py-8">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-8 md:h-14 mr-2 md:mr-4 cursor-pointer" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center text-white">
              <li className="mr-4">
                <button className="py-2 px-4 text-sm font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300" onClick={cRef}>
                  How it Works
                </button>
              </li>
              <li>
                <button className="py-2 px-4 text-sm font-medium bg-gray-800 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
                  GitRank
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="flex items-center justify-center p-2 text-gray-900 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300" onClick={toggleMenu}>
              <HiMenuAlt4 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="bg-white py-2">
          <li className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition duration-300">How it Works</li>
          <li className="block px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition duration-300">GitRank</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
