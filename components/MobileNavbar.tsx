"use client";
import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const MobileNavbar = () => {
  return (
    <motion.div
      className="md:hidden h-20 border-b border-neutral-800 bg-neutral-600 bg-opacity-10 sticky top-0 backdrop-blur-sm z-[999] w-full"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center h-full">
        <SocialIcon
          url="https://www.linkedin.com/in/kobysysouvanh/"
          target="_blank"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/kobysysouvanh"
          target="_blank"
          bgColor="transparent"
        />
      </div>
    </motion.div>
  );
};

export default MobileNavbar;
