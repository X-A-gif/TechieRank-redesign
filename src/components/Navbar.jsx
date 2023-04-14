import React, { useState, useEffect } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';

import logo from '../assets/Gitscorestxt.png';

const Navbar = ({ cRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

 
  return (
    <nav className="absolute mx-auto w-full z-50">
      <div className="flex items-center justify-between h-16 px-8">
        <div className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="Risidio"
              className={`h-48 mr-4 ml-48 mt-16 mx-auto my-6 ${isSmallScreen ? "smaller-logo" : ""}`}
            /> 
            <div className="flex items-center -ml-20">
          </div>
          <div className="ml-4 flex items-center mt-8">
            <div className="hidden lg:block">
     
            </div>
          </div>
          <button className="absolute right-5 block md:hidden bg-transparent text-white hover:text-gray-100 focus:outline-none" onClick={toggleMenu}> 
            <HiMenuAlt4 className="w-6 h-6" />
          </button>
        </div>
        <div className="hidden lg:block mt-8 mr-44">
          <ul className="flex cursor-pointer font-thin">
          <button className="border-0 bg-transparent border-none font-medium text-sm text-white py-2 px-6 hover:bg-blue-500 hover:text-white transition duration-300" onClick={cRef}>
              How it Works
          </button>
            <button className="bg-gray-600 font-medium text-sm text-white rounded-full py-2 px-6  hover:bg-blue-500 hover:text-white transition duration-300">
              GitRank
            </button>
          </ul>
        </div>
      </div>
      <div className="lg:hidden">
        {isOpen && (
          <div className='mt-12'>
            <ul className="burgerMenu grid place-items-start text-white text-lg w-full font-normal">
                <li className="block px-4 py-2 cursor-pointer">Gallery</li>
                <li className="block px-4 py-2 cursor-pointer">Collections</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
