"use client"
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
    className="w-full h-screen flex justify-center"
    initial={{ y:100, opacity: 0 }}
    animate={{ y:1, opacity: 1 }}
    transition={{ duration: 1 }}

    
    >
      <div className="bg-neutral-600 p-8 py-20 mx-8 max-w-4xl w-full h-[60%] mt-10 rounded-xl bg-opacity-10 backdrop-blur-sm border-2 border-neutral-800">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-4xl mt-12">Koby Sysouvanh</p>
          <p className="text-md font-light text-blue-500 mt-4">
            Software Engineer/Full-Stack Developer
          </p>
          <div className="flex bg-neutral-600 bg-opacity-10 backdrop-blur-sm items-center justify-center rounded-full px-2 py-2 gap-3 mt-4 border-2 border-neutral-500/30">
            <SocialIcon
              url="https://www.linkedin.com/in/kobysysouvanh/"
              target="_blank"
            />
            <SocialIcon
              url="https://github.com/kobysysouvanh"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
