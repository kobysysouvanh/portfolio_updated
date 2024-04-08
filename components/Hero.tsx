"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    {
      id: 1,
      content: "SOFTWARE ENGINEER",
    },
    {
      id: 2,
      content: "FULL-STACK DEVELOPER",
    },
    {
      id: 3,
      content: "WEB DEVELOPER",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= texts.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="w-full h-screen max-w-7xl mx-auto flex px-3"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="space-y-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mt-32">
          Hello, my name is Koby
        </h1>
        <p className="text-2xl md:text-3xl font-bold">
          I am a &nbsp;
          <AnimatePresence>
            <motion.span
              key={texts[index].id}
              className="text-blue-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              style={{ position: "absolute" }}
            >
              {texts[index].content}
            </motion.span>
          </AnimatePresence>
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
