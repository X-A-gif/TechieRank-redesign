import React from 'react';
import Card from './Card'

import bg from '../assets/dots-bg.png';
import land from '../assets/land-bg2.png';

import mark from '../assets/github-mark-white.png';
import stack from '../assets/Stack_Overflow.png';

import './utils.css';

const LogoBanner = () => {
  return (
    <div className='glass info flex justify-center items-center border-2 w-full mt-24 mx-10 h-screen'>
      <img src={land} alt="" className='techie flex justify-center items-center h-full border-r-2' />
      ...
      <div className='w-full'>
      
      ...
      <div className='flex px-4 py-8 bg-opacity-40 bg-cover bg-center bg-no-repeat -ml-4'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-3xl font-bold my-10 text-white text-center md:text-4xl xl:text-4xl'>Supercharge Your GitHub and Stack Overflow Assessments with Our Chrome Extension</h1>
            <p className='text-color text-center mt-6 font-light border-t-2 text-sm md:text-lg xl:text-2xl mx-10'>Verified Credentials: Easily share verified credentials of your GitHub ownership to LinkedIn, making your profile stand out to potential employers</p>
            <div className='flex justify-center mt-10'>
              <a href='#' className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-lg'>
                Get the
                <svg className='w-5 h-5 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
              </a>
              <a href='https://chrome.google.com/webstore/detail/techierank-github-stack-o/hafpijmdkicjolibafkgekojggaaicid?hl=en-US' className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>
                Chrome extension
              </a>
            </div>
          </div>
          <div className='flex-grow justify-center items-center'>
            <div className='flex justify-center items-center'>
              <img src={stack}  alt="" className='h-24' />
              <img src={mark}  alt="" className='h-24' />
            </div>
            </div> {/* Add this div to fill the remaining space */}
    
        </div>
        ...

          <div className='flex flex-col justify-center items-center my-10 mr-20'>
            <Card />
          </div>
        </div>
      ...

      </div>
  );
};

export default LogoBanner;
