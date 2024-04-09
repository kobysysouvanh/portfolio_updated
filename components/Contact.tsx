"use client"
import React from 'react'
import { motion } from "framer-motion"
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';


const Contact = () => {
  return (
    <div 
    className="w-full h-full mx-auto mt-32 overflow-x-hidden"
    >
      <div className="border-t border-l border-neutral-800 bg-neutral-600 bg-opacity-10 backdrop-blur-sm p-3">
        <div className='flex w-full flex-wrap sm:flex-nowrap justify-between max-w-7xl mx-auto'>
            <div className='flex items-center gap-2'>
                <MdOutlineEmail className='w-8 h-8 text-neutral-600'/>
                kobysysouvanh@gmail.com
            </div>
            <div className="flex gap-2 items-center">
          <SocialIcon
            url="https://www.linkedin.com/in/kobysysouvanh/"
            target="_blank"
            bgColor="transparent"
            className="hover:bg-neutral-800 rounded-full transition-all duration-500 ease-in-out"
          />
          <SocialIcon
            url="https://github.com/kobysysouvanh"
            target="_blank"
            bgColor="transparent"
            className="hover:bg-neutral-800 rounded-full transition-all duration-500 ease-in-out"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact