import React from 'react';
import './utils.css';

const Hero = () => {
  return (
    <div className='Hero flex flex-col md:flex-row items-center h-96'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-white font-bold text-6xl mb-4 text-center md:text-left'>Where future developers meet</h1>
        <p className='text-white text-lg text-center md:text-left'>Employ developers? Wish you could get an instant technical & soft skills assessment of a candidate?
        </p>
      </div>
      <div className='w-full md:w-1/2'>
      </div>
    </div>
  );
}

export default Hero;
