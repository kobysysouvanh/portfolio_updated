"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import WordRotate from "./ui/word-rotate";

const Hero = () => {


  return (
    <motion.div
      className="w-full h-[80vh] max-w-7xl mx-auto flex px-3 2xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="space-y-10">
        <h1 className="text-3xl xl:text-4xl font-extrabold mt-32 px-10 xl:p-0">
          Hello, my name is Koby
        </h1>
        <div className="text-2xl xl:text-3xl font-bold px-10 2xl:px-0 flex items-center">
          I am a &nbsp;
          <WordRotate
          words={["SOFTWARE ENGINEER", "FULL STACK DEVELOPER", "WEB DEVELOPER"]}
          className="text-blue-500"
          duration={1500}
          />
        </div>
        <p className="text-2xl px-10 2xl:px-0">
          I am a junior Full Stack Developer that is
          committed to creating high quality web applications that are fully
          responsive, visually appealing, and user-friendly.
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
