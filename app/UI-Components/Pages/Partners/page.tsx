"use client";
import { motion } from "framer-motion";
import { Briefcase, Paintbrush, Truck } from "lucide-react";

const tiers = [
  {
    icon: <Paintbrush className="text-[#FFD700]" />,
    title: "Creative Affiliates",
    desc: "For freelance designers and agencies looking for premium production support for their clients."
  },
  {
    icon: <Truck className="text-[#0CB006]" />,
    title: "Supply Chain Partners",
    desc: "For vendors providing raw materials and cutting-edge printing technology."
  },
  {
    icon: <Briefcase className="text-blue-400" />,
    title: "Corporate Allies",
    desc: "Long-term branding contracts for established organizations needing consistent visual strategy."
  }
];

export default function PartnersPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20">
      <div className="px-[8%] lg:px-[12%]">
        {/* --- Hero Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="Montserrat text-6xl md:text-8xl font-bold mb-8 uppercase tracking-tighter">
            Strategic <span className="text-[#0CB006]">Synergy</span>
          </h1>
          <p className="GolosText text-xl text-gray-400 leading-relaxed">
            At IMMAGINATION, we believe that great brands aren’t built in isolation. 
            We partner with the best in the industry to deliver precision, flair, 
            and excellence at scale.
          </p>
        </motion.div>

        {/* --- Partnership Tiers --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2rem] border border-gray-800 bg-[#0f0f0f] hover:border-[#FFD700] transition-colors"
            >
              <div className="w-12 h-12 mb-6">{tier.icon}</div>
              <h3 className="Montserrat text-2xl font-bold mb-4">{tier.title}</h3>
              <p className="GolosText text-gray-500">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Inquiry Form Area --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="Montserrat text-4xl font-bold mb-6">Start a Conversation</h2>
            <p className="GolosText text-gray-400 mb-8">
              Tell us about your business or project. Our partnership team will reach 
              out within 48 hours to discuss how we can grow together.
            </p>
            <div className="space-y-4 text-gray-500">
              <p>📧 partnerships@immagination.com</p>
              <p>📍 Design Studio: Lagos, Nigeria</p>
            </div>
          </div>

          <form className="bg-[#121212] p-10 rounded-3xl border border-gray-800 space-y-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-[#0CB006] outline-none"
            />
            <input 
              type="email" 
              placeholder="Business Email" 
              className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-[#0CB006] outline-none"
            />
            <textarea 
              placeholder="How would you like to partner?" 
              rows={4} 
              className="w-full bg-black border border-gray-700 p-4 rounded-xl focus:border-[#0CB006] outline-none"
            />
            <button className="w-full bg-[#0CB006] text-black font-bold py-4 rounded-xl hover:bg-white transition-colors">
              Send Proposal
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}