import React from 'react';
import rank from '../assets/techierank.png';

const LogoBanner = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='mx-10 text-white'>
        text
      </div>
      
    <div className="bg-gray-800 rounded-md flex flex-col items-center w-72 py-2">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className='flex justify-center mb-2 md:mb-0'>
          <div className='flex items-center'> 
            <img src={rank} alt="" className='h-10 w-10 mr-5 justify-center my-5 items-center' />
            <h4 className='flex justify-center items-center font-normal text-2xl text-white text-center md:text-left'>
              Chrome extension
            </h4>
          </div>
        </div>
      </div>  
    </div>
    </div>
  );
};

export default LogoBanner;
