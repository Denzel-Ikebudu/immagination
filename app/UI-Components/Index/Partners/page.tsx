"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <section className="px-[8%] lg:px-[12%] py-24 bg-[#0a0a0a]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[3rem] border border-gray-800 bg-gradient-to-br from-[#121212] to-black p-10 md:p-20 text-center"
      >
        <Handshake className="absolute -top-10 -right-10 w-64 h-64 text-gray-900 opacity-20 -rotate-12" />

        <div className="relative z-10">
          <span className="text-[#0CB006] uppercase tracking-[0.3em] font-bold text-sm mb-6 block">
            Collaborative Growth
          </span>
          <h2 className="Montserrat text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">
            Let’s Scale Your <span className="text-[#FFD700]">Vision</span> Together
          </h2>
          <p className="GolosText text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            We’re looking for creative agencies, print suppliers, and corporate 
            visionaries to build the next generation of brand legacies.
          </p>
          
          <Link href="/Pages/Partners">                   
            <button className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold transition-all hover:bg-[#FFD700]">
              Become a Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}