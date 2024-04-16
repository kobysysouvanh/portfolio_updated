"use client";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import txt from "../public/txt.png";

const Projects = () => {
  return (
    <motion.div
      className="w-full h-full max-w-7xl mx-auto mt-32 px-3 2xl:px-0"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="border-2 border-neutral-800 bg-neutral-600 bg-opacity-10 backdrop-blur-sm p-3 py-6 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-10 mt-3">Projects</h1>
        <div className="grid lg:grid-cols-3 items-center justify-center gap-5 overflow-auto">
          <div className="w-full border h-full bg-black border-neutral-800 rounded-xl max-w-[30rem]">
            <div className="w-full h-full p-6 flex flex-col">
              <div className="flex items-center text-center justify-between mb-3">
                <h3 className="font-semibold text-xl">txt.io</h3>
                <a href="https://txt-io.vercel.app/" target="_blank">
                  <FiExternalLink className="text-2xl text-white" />
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-400">
                  Realtime messaging application created using Next.js,
                  TypeScript, MongoDB, and Pusher. Includes many features such
                  as direct messaging, group chats, authentication, image
                  uploading, and more.
                </span>
              </div>
              <img
                src="/txt.png"
                alt="txt.io image"
                className="rounded-lg my-3"
              />
              <div className="flex mt-4 text-center flex-wrap gap-2 items-center w-full text-slate-400">
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  React
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  Next.js
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  TypeScript
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  MongoDB
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  Pusher
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border h-full bg-black border-neutral-800 rounded-xl max-w-[30rem]">
            <div className="w-full h-full p-6 flex flex-col">
              <div className="flex items-center text-center justify-between mb-3">
                <h3 className="font-semibold text-xl">Cloneflix</h3>
                <a href="https://cloneflix-alpha.vercel.app/" target="_blank">
                  <FiExternalLink className="text-2xl text-white" />
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-400 ">
                  Application created using Next.js, MongoDB, NextAuth and
                  Tailwind CSS. Displays a variety of movie titles and tv series
                  where users can interact with to either add to their list or
                  visit an individual more descriptive page.
                </span>
              </div>
              <img
                src="/cloneflix.png"
                alt="cloneflix image"
                className="rounded-lg my-3"
              />
              <div className="flex mt-4 text-center flex-wrap gap-2 items-center w-full text-slate-400">
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  React
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  Next.js
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  TypeScript
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  MongoDB
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  NextAuth
                </span>
              </div>
            </div>
          </div>
          <div className="w-full border h-full bg-black border-neutral-800 rounded-xl max-w-[30rem]">
            <div className="w-full h-full p-6 flex flex-col">
              <div className="flex items-center text-center justify-between mb-3">
                <h3 className="font-semibold text-xl">Staycation!</h3>
                <a href="https://staycation-ks.vercel.app/" target="_blank">
                  <FiExternalLink className="text-2xl text-white" />
                </a>
              </div>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-400 ">
                  Home rental application that includes full responsiveness,
                  authentications, listing of properties, search bar filtering,
                  booking/reservation system, pricing calculation, and
                  cancellation of reservations.
                </span>
              </div>
              <img
                src="/staycation.png"
                alt="staycationimage"
                className="rounded-lg my-3"
              />
              <div className="flex mt-4 text-center flex-wrap gap-2 items-center w-full text-slate-400">
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  React
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  Next.js
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  TypeScript
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  MongoDB
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  NextAuth
                </span>
                <span className="rounded-full border-2 border-neutral-800 py-[0.5] px-2 text-sm text-center">
                  Prisma
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
