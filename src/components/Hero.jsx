import React from 'react';
import './utils.css';

const Hero = () => {
  return (
    <div className='Hero flex ml-auto md:ml-10 items-center justify-center h-96'>
      <div className='w-full text-white md:w-1/2  md:text-left '>
        <h1 className=' font-bold text-7xl text-center mb-4'>Where future developers git ranked</h1>
        <p className=' text-lg my-5 text-center'>Employ developers? Wish you could get an instant technical & soft skills assessment of a candidate?</p>
          <div className='flex justify-center item-center w-6.1'>
          <button className="py-2 text-black px-4 my-5 bg-white text-xl font-normal rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300">
            Git Ranked Now
          </button>
          </div>
          
      </div>
    </div>
  );
}

export default Hero;
