import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  onClick: () => void;
  isActive: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClick, isActive }) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      className="w-full h-screen left-0 bg-neutral-800 absolute z-[-1] flex flex-col items-center font-semibold justify-center space-y-4 text-2xl"
      variants={variants}
      initial="closed"
      animate={isActive ? "open" : "closed"}
    >
      <a href="#about" onClick={() => onClick()}>
        About
      </a>
      <a href="#experience" onClick={() => onClick()}>
        Experience
      </a>
      <a href="#skills" onClick={() => onClick()}>
        Skills
      </a>
      <a href="#projects" onClick={() => onClick()}>
        Projects
      </a>
      <a href="#contact" onClick={() => onClick()}>
        Contact
      </a>
    </motion.div>
  );
};

export default MobileMenu;
