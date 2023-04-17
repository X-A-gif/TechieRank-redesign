import React from 'react';

import mark from '../assets/github-mark-white.png';
import stack from '../assets/Stack_Overflow.png';
import Github from '../assets/GitHub_Logo.png';

const Card = () => {
  return (
    <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14'>
      <div className='glass max-w-md mx-auto rounded-md overflow-hidden shadow-md text-white flex-1'>
        <img src={mark} alt='github icon' className='ml-10 my-5 h-12 w-12' />
        <h1 className='text-3xl my-5'>Works with Github</h1>
        <p className='text-lg font-thin'>
           Check your GitHub rank then stand out by sharing a free verified credential proving ownership of your GitHub to LinkedIn
        </p>
        <div className='absolute bottom-0'>
          <div className='flex justify-center item-center text-black'>
            <button className="github-button  border-2 rounded-xl h-10 text-sm bg-white font-bold mr-10">Login with GitHub</button>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center text-white'>
        or
      </div>

      <div className='glass max-w-md mx-auto h-96 text-white rounded-md overflow-hidden shadow-md flex-1'>
      <img src={stack} alt='github icon' className='ml-10 my-5 h-12 w-12' />

      <h1 className='text-3xl my-5'>Stack Overflow</h1>
        <p className='text-lg font-thin'>
          Check your Stack Overflow rank then stand out by sharing a free verified credential proving ownership of your Stack Overflow to LinkedIn        </p>
        <div className='absolute bottom-0 ml-10 text-black'>
          <button className="github-button border-2 rounded-xl h-10 text-sm bg-white font-bold mr-10">Login with GitHub</button>
        </div>
      </div>
    </div>
  )
}

export default Card;
