"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import { TiCss3 } from "react-icons/ti";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";


const Skills = () => {
  return (
    <motion.div
      className="w-full h-screen max-w-7xl mx-auto mt-32 px-3 overflow-x-hidden"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="border-2 border-neutral-800 bg-neutral-600 bg-opacity-10 backdrop-blur-sm p-3 rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
        <div className="grid grid-cols-3 gap-3 md:flex md:justify-evenly items-center text-center">
          <div className="flex flex-col items-center">
            <RiJavascriptFill className="w-24 h-24 rounded-xl text-yellow-300" />
            <p>JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoTypescript className="w-24 h-24 rounded-xl text-blue-500" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <RiHtml5Fill className="w-24 h-24 rounded-xl text-orange-700" />
            <p className="text-center">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <TiCss3 className="w-24 h-24 rounded-xl text-blue-500" />
            <p className="text-center">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <BiLogoTailwindCss className="w-24 h-24 rounded-xl text-sky-400" />
            <p className="text-center">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center"> 
            <FaJava className="w-24 h-24 rounded-xl text-red-800 pb-2" />
            <p className="text-center">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="w-24 h-24 rounded-xl text-green-700" />
            <p className="text-center">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <GrMysql className="w-24 h-24 rounded-xl text-cyan-800" />
            <p className="text-center">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPrisma className="w-24 h-24 rounded-xl text-cyan-950 pb-2" />
            <p className="text-center">Prisma</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
