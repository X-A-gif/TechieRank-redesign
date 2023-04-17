import React from 'react';

import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail, AiOutlineSend } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from '../assets/Reputationaire.png'

function Footer() {
  return (
    <footer className="bg-transparent py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-center">
        <div className="mb-8 md:mb-0">
        <h3 className='flex items-center text-white'>
            Powered by <img src={logo} alt="Reputationaire" style={{ marginLeft: 5 }} />
        </h3>
            
         
            <a href="#" className="text-white  mr-4"><FaFacebookF className="inline-block mr-2 mb-1" /></a>
            <a href="#" className="text-white  mr-4"><FaTwitter className="inline-block mr-2 mb-1" /></a>
            <a href="#" className="text-white  mr-4"><FaInstagram className="inline-block mr-2 mb-1" /></a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
