"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import AnimatedHamburgerMenu from "./AnimatedHamburgerMenu";
import MobileMenu from "./MobileMenu";

const MobileNavbar = () => {

  return (
    <motion.div
      className="xl:hidden h-24 border-b border-neutral-800 bg-neutral-600 bg-opacity-10 px-3 sticky top-0 backdrop-blur-sm z-[999] w-full"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center h-full">
          <SocialIcon
            url="https://www.linkedin.com/in/kobysysouvanh/"
            target="_blank"
            bgColor="transparent"
            className="text-xl"
          />
          <SocialIcon
            url="https://github.com/kobysysouvanh"
            target="_blank"
            bgColor="transparent"
          />
        </div>
        <div className="z-[999]">
          <AnimatedHamburgerMenu />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
