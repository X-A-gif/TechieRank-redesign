import React from 'react';

import bg from '../assets/dots-bg.png';

const Hero = () => {
  return (
    <div className='flex items-center mt-96 justify-center h-screen min-w-full relative'>
      <div
        className='absolute top-0 bg-no-repeat bg-cover left-0 w-full h-full'
        style={{backgroundImage: `url(${bg})`, opacity: 0.3,  }}>
      </div> 
      <div className='flex flex-col justify-center mt-32 items-center w-full text-white md:w-1/2 md:text-center'>
        <h1 className='font-bold text-7xl mb-4'>
          Uncover Hidden Talent with GitScores
        </h1>
        <p className='text-color text-3xl my-5'>
          The Ultimate Developer Assessment Platform
        </p>
        <div className='w-6.1'>
          <div className='flex justify-center'>
            <button className='py-2 text-black px-4 my-5 bg-white text-xl font-normal rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300  '>
              Git Ranked Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
