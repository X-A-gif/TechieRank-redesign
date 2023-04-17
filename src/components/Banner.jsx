import React from 'react';
// import logo from '../images/logo.png'; // replace with your logo image file path

const LogoBanner = () => {
  return (
    <div className="bg-gray-600 py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className='flex mb-2 md:mb-0 md:mr-4'>
          <h4 className='justify-center items-center text-sm text-white text-center md:text-left'>Some partner companies hiring & accepting TechieRank profiles</h4>
        </div>
      
        <div className="flex items-center justify-center md:justify-end">
          <img className="h-6 md:h-8 w-auto mx-1" src="placeholder " alt="Logo" />
          <img className="h-6 md:h-8 w-auto mx-1" src="placeholder " alt="Logo" />
          <img className="h-6 md:h-8 w-auto mx-1" src="placeholder " alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;
