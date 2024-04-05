"use client";
import ContactButton from "./Contact-Button";
import { motion } from "framer-motion";

const nav = [
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

const Navbar = () => {
  return (
    <motion.div
      className="h-20 w-full z-1 bg-neutral-600 backdrop-blur-sm bg-clip-padding backdrop-filter bg-opacity-10 top-0 border-b border-neutral-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl items-center justify-between mx-auto h-20 px-6 hidden sm:flex">
        <div className="text-xl w-32 text-center">KS</div>
        <div className="flex gap-6 rounded-full h-12 items-center text-cen border-neutral-600 border p-4 backdrop-blur-sm">
          {nav.map((item) => (
            <a href={item.href} key={item.name}>
              <button className="text-md opacity-70 hover:opacity-100 transition truncate">
                {item.name}
              </button>
            </a>
          ))}
        </div>
        <ContactButton />
      </div>
    </motion.div>
  );
};

export default Navbar;
