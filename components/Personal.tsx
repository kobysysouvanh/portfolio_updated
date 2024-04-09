"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Personal = () => {
  return (
    <motion.div
      className="w-full xl:w-96 px-6 h-[40rem] xl:h-screen flex flex-col xl:sticky xl:top-0 xl:justify-between justify-center items-center xl:border-r xl:border-neutral-800 xl:bg-neutral-600 xl:bg-opacity-10 backdrop-blur-sm py-8"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 1, opacity: 1 }}
      transition={{ duration: 0.5, }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center rounded-xl bg-neutral-600 bg-opacity-10 border-2 border-neutral-800 xl:bg-transparent xl:border-none xl:justify-between">
        <div className="flex flex-col justify-center items-center text-center xl:pt-16">
          <Image
            src="/avatar.jpg"
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
          <p className="text-5xl xl:text-3xl mt-12">Koby Sysouvanh</p>
          <p className="text-xl md:text-md font-light text-blue-500 mt-4">
            Full-Stack Developer
          </p>
        </div>
        <div className="flex bg-neutral-600 bg-opacity-10 backdrop-blur-sm items-center justify-center rounded-full px-2 py-2 gap-3 mt-4 border-2 border-neutral-500/30">
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
    </motion.div>
  );
};

export default Personal;
