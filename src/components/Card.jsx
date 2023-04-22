import React from 'react';

import mark from '../assets/github-mark-white.png';
import stack from '../assets/Stack_Overflow.png';
import overflow from '../assets/stackoverflow-xxl.png';
import blackMark from '../assets/GitHub-Mark.png';


const Card = () => {
  return (
    <div className='flex flex-col md:flex-row bg-cover object-cover bg-no-repeat space-y-4 md:space-y-0 md:space-x-14'>
      <div className='glass max-w-full mx-auto rounded-md overflow-hidden shadow-md text-white flex-1'>
        <img src={mark} alt='github icon' className='mx-auto my-5 h-12 w-12' />
        <h1 className='text-3xl my-5'>Works with Github</h1>
        <div className=''>
          <p className='text-lg font-thin'>
            Check your GitHub rank then stand out by sharing a free verified credential proving ownership of your GitHub to LinkedIn
          </p>
        </div>
        
          <div className='flex justify-center items-center ml-6 my-10 text-black'>
            <button className="github-button border-2 rounded-xl h-10 text-sm bg-white font-bold mr-10"><img src={blackMark} alt='github icon' className='mx-auto my-5 h-5 w-5' />
              Login with GitHub
            </button>
          </div>

          <img src={stack} alt='github icon' className='mx-auto mt-24 h-12 w-12' />

          <h1 className='text-3xl my-5'>Stack Overflow</h1>
            <p className=' text-lg mx-10 font-thin'>
              Check your Stack Overflow rank then stand out by sharing a free verified credential proving ownership of your Stack Overflow to LinkedIn</p>
            <div className='flex justify-center items-center text-black '>
              <button className="stack-button my-10 rounded-gl h-10 text-sm font-bold "><img src={overflow} alt='github icon' className='flex-col md:flex-row my-4 h-5 w-10' />Login with Stack Overflow</button>
            </div>
        </div>
    </div>
  )
}

export default Card;
