

import React from 'react';
import rank from '../assets/techierank.png';

import bg from '../assets/dots-bg.png';
import land from '../assets/land-bg2.png';

import './utils.css';

const LogoBanner = () => {
  return (
    <div className='flex justify-center items-center w-full mx-10 h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
      <div className='w-full flex justify-end'> 
            <div className=' px-4 py-8 bg-opacity-40 bg-cover  bg-center bg-no-repeat' style={{backgroundImage: `url(${land})`, width: 200, height: 650, }}>
            </div>
        </div>
        <div className='w-full h-3/4 border-2 py-4'>
            <h1 className='text-3xl font-bold my-10 text-white text-center md:text-4xl xl:text-4xl'>Supercharge Your GitHub and Stack Overflow Assessments with Our Chrome Extension</h1>
            <p className='text-color text-center mt-6 font-light text-sm md:text-lg xl:text-2xl mx-10'>Verified Credentials: Easily share verified credentials of your GitHub ownership to LinkedIn, making your profile stand out to potential employers</p>
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
    </div>
  );
};

export default LogoBanner;
