"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="w-full h-full max-w-7xl mx-auto mt-32 px-3"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="border-2 border-neutral-800 bg-neutral-600 bg-opacity-10 backdrop-blur-sm p-3 rounded-xl">
        <h1 className="text-3xl font-bold text-center mb-6 mt-3">Experience</h1>
        <div className="space-y-8">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-semibold">Braid Utility Floater</h2>
              <h3 className="text-lg font-semibold">Nov 2023 - Jan 2024</h3>
            </div>
            <p className="mt-2">
              <span className="font-semibold">Company:</span> Ethicon
            </p>
            <p>
              <span className="font-semibold">Location:</span> Cornelia, Ga
            </p>
            <p>
              <span className="font-semibold">Description:</span> Collaborated
              in a fast-paced environment within cross-functional departments to
              ensure the production of medical grade sutures.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Reconciliation Specialist
              </h2>
              <h3 className="text-lg font-semibold">Jan 2022 - Apr 2024</h3>
            </div>
            <p className="mt-2">
              <span className="font-semibold">Company:</span> S Phase
            </p>
            <p>
              <span className="font-semibold">Location:</span> Atlanta, Ga
            </p>
            <p>
              <span className="font-semibold">Description:</span> Examined
              company’s accounting records using their software and reviewed
              them with additional documents from the server folder database to
              confirm all details are correct. Collaborated with different
              departments to ensure information are correct and updated.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-2xl font-semibold">Team Member</h2>
              <h3 className="text-lg font-semibold">Aug 2017 - Jul 2020</h3>
            </div>
            <p className="mt-2">
              <span className="font-semibold">Company:</span> FCL Recycling,
              Inc.
            </p>
            <p>
              <span className="font-semibold">Location:</span> Powder Springs,
              Ga
            </p>
            <p>
              <span className="font-semibold">Description:</span> Collected
              recyclable materials within Lockheed Martin and commercial
              businesses. Operated heavy machinery including a packer truck.
              Assisted in warehouse duties such as sorting and organizing
              materials.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
