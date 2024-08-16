import React from 'react'
import {FaLinkedin,FaTwitter , FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' px-6 md:px-0  mt-12 text-white/70 py-8 container max-w-[1000px] mx-auto border-top border-gray-700 pt-4 flex justify-between items-center '>
        <div className='flex space-x-6 mt-4'>
            <a href="#" className='hover:text-gray-300'>
                <FaLinkedin size={24}/>
                <FaTwitter size={24}/>
                <FaInstagram size={24}/>
            </a>
        </div>

    </div>
  )
}

export default Footer