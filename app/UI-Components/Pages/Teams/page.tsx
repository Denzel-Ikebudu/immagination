"use client";

import React from "react";
import { motion } from "framer-motion";

import teamData from "@/app/JsonData/Teams.json";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="px-[8%] lg:px-[12%]">
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="Montserrat text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Meet The <span className="text-[var(--prim)]">Visionaries</span>
          </h2>
          <p className="GolosText text-gray-400 mt-4 max-w-2xl mx-auto">
            The brilliant minds and creative souls driving innovation forward.
          </p>
        </motion.div>

        {/* --- Grid of Team Cards --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="group relative bg-[#121212] rounded-[2rem] border border-gray-800 overflow-hidden hover:border-[var(--prim)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-0 md:grayscale-1 lg:grayscale-1 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                {/* Gold overlay on hover */}
                <div className="absolute inset-0 bg-[var(--prim)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="Montserrat text-xl font-bold text-white mb-2 group-hover:text-[var(--prim)] transition-colors">
                  {member.name}
                </h3>
                <p className="GolosText text-sm text-gray-400 uppercase tracking-wider font-semibold">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}