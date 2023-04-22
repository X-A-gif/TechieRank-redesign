import React from 'react';

const LogoBanner = () => {
  return (
    <div className="card flex flex-col  items-center w-full py-2">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className='flex mb-2 md:mb-0 '>
          <h4 className='justify-center items-center text-xl text-white text-center md:text-left'>Some partner companies hiring & accepting TechieRank profiles</h4>
        </div>
      
        <div className="flex items-center justify-center md:justify-end md:mt-4">
          <div className='flex-row'>
          <img className="h-6 md:h-8 w-auto mx-1 mb-2 md:mb-0" src="placeholder " alt="Logo" />
          <img className="h-6 md:h-8 w-auto mx-1 mb-2 md:mb-0" src="placeholder " alt="Logo" />
          <img className="h-6 md:h-8 w-auto mx-1 mb-2 md:mb-0" src="placeholder " alt="Logo" /></div>
        </div>
      </div>  
    </div>
  );
};

export default LogoBanner;
