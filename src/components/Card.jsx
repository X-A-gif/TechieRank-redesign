import React from 'react';

import overflow from '../assets/stackoverflow-xxl.png';
import blackMark from '../assets/GitHub-Mark.png';


const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center border-2 h-24  space-y-4 md:space-y-0 md:space-x-14'>
      <div className='glass flex h-fit w-full rounded-xl overflow-hidden shadow-md text-white flex-1'>
      
        
          <div className='flex justify-center items-center ml-6 my-10 text-black'>
            <button className="github-button border-2 rounded-xl h-10 text-sm bg-white font-bold mr-10"><img src={blackMark} alt='github icon' className='mx-auto my-5 h-5 w-5' />
              Login with GitHub
            </button>
          </div>


            <div className='text-black mr-8'>
              <button className="stack-button my-10 rounded-gl h-10 text-sm font-bold "><img src={overflow} alt='github icon' className='flex-col md:flex-row my-4 h-5 w-10' />Login with Stack Overflow</button>
            </div>
        </div>
    </div>
  )
}

export default Card;
