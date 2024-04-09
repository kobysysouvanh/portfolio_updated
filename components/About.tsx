"use client"
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
    className="w-full h-screen max-w-7xl mx-auto mt-32 px-3 overflow-x-hidden"
    whileInView={{ opacity: 1}}
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    >
      <div className="border-2 border-neutral-800 bg-neutral-600 bg-opacity-10 backdrop-blur-sm p-3 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-6 mt-3">About Me</h1>
        <p className="text-xl mt-4 font-light">
          My name is Koby Sysouvanh. I am a graduate from Kennesaw State
          University where I have obtained my Bachelors of Science Degree in
          Computer Science with a Minor in Software Engineering. I am primarily
          focusing on full-stack development technologies such as React,
          Next.js, MongoDB, TypeScript, and many more. I am currently seeking a
          full-time position as a Software Engineer or Full-Stack Developer. My
          goal is to leverage my skills to promote business growth and become a
          crucial team member.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
