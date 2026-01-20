"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Zap, Users, Trophy } from "lucide-react";

const academyFeatures = [
  { icon: <Zap size={20} />, text: "Advanced Design Systems" },
  { icon: <BookOpen size={20} />, text: "Brand Strategy Masterclasses" },
  { icon: <Users size={20} />, text: "Creative Mentorship" },
  { icon: <Trophy size={20} />, text: "Industry Certification" },
];

export default function AcademyComingSoon() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-28">
      
      {/* --- Background Decorative Glows --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--prim)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="z-10 max-w-4xl w-full text-center">
        
        {/* --- Badge --- */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full border border-[var(--G1)] text-[var(--G1)] text-xs font-bold uppercase tracking-[0.2em] mb-6"
        >
          Education Excellence
        </motion.span>

        {/* --- Main Heading --- */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="Bebas text-6xl md:text-8xl lg:text-9xl font-bold mb-4 tracking-tighter leading-none"
        >
          IMMAGINATION <br />
          <span className="text-[var(--prim)]">ACADEMY</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="GolosText text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          The next generation of African design talent starts here. We’re building a hub for creators to master precision, flair, and strategy.
        </motion.p>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {academyFeatures.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-2xl"
            >
              <span className="text-[var(--prim)]">{feat.icon}</span>
              <span className="GolosText text-sm font-medium">{feat.text}</span>
            </motion.div>
          ))}
        </div>

        {/* --- Status Label --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-[var(--prim)] Montserrat font-bold uppercase tracking-widest text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--prim)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--prim)]"></span>
            </span>
            Currently in Development
          </div>
          <p className="text-gray-600 text-xs Montserrat uppercase tracking-tighter mt-2">
            Curriculum is Launching Soon
          </p>
        </motion.div>

      </div>

    </main>
  );
} 