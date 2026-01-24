"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Scale, 
  CreditCard, 
  UserCheck, 
  MessageSquare, 
  Lock, 
  Briefcase, 
  AlertCircle 
} from "lucide-react";

export default function TermsOfService() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="bg-black min-h-screen text-white pt-32 pb-20 px-[8%] lg:px-[12%]">
      {/* --- Header Section --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b border-gray-800 pb-10"
      >
        <h1 className="Montserrat text-4xl md:text-6xl font-bold uppercase mb-4">
          [cite_start]Terms of <span className="text-[#0CB006]">Service</span> [cite: 1]
        </h1>
        <div className="flex items-center gap-4 text-gray-500 GolosText">
          <span className="px-3 py-1 bg-gray-900 rounded-full text-xs font-bold uppercase tracking-widest text-[#FFD700]">
            [cite_start]Version 1.0 [cite: 1]
          </span>
          [cite_start]<span>IMMAGINATION Customer and Client Policy [cite: 1]</span>
        </div>
      </motion.div>

      {/* --- Policy Grid --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Section 1 */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <UserCheck size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">1. [cite_start]Customer Respect [cite: 2]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Every client is treated with respect, patience, and professionalism[cite: 3]. 
            [cite_start]Rudeness, harassment, or disrespect will not be tolerated[cite: 3]. 
            [cite_start]All customers receive equal attention and quality without discrimination[cite: 4].
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <Briefcase size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">2. [cite_start]Service Delivery [cite: 5]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Service engagement requires clear agreement on scope, price, and timeline[cite: 6]. 
            [cite_start]Clients must provide complete project information[cite: 6]. 
            [cite_start]Work is delivered within agreed timelines, and delays will be communicated[cite: 7]. 
            [cite_start]Every project undergoes internal quality review before delivery[cite: 7].
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <CreditCard size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">3. [cite_start]Payment & Billing [cite: 8]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Payments or deposits must be made before work begins[cite: 9]. 
            [cite_start]Refunds are not issued after concepts or drafts are delivered[cite: 9]. 
            [cite_start]Extra revisions outside scope attract additional fees[cite: 10].
          </p>
        </motion.div>

        {/* Section 4 & 5 Combined */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <MessageSquare size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">4. [cite_start]Communication [cite: 13]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Clients must approve drafts promptly and communicate through official channels[cite: 11, 12]. 
            [cite_start]All communication occurs through email or WhatsApp Business[cite: 14]. 
            [cite_start]Response times follow standard working hours[cite: 14].
          </p>
        </motion.div>

        {/* Section 6 & 7 */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <Lock size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">5. [cite_start]Confidentiality & IP [cite: 15, 17]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Project files are kept confidential and stored securely[cite: 16]. 
            [cite_start]Ownership transfers to the client after full payment[cite: 19]. 
            [cite_start]RAW files require an additional fee[cite: 19]. 
            [cite_start]IMMAGINATION may showcase work unless privacy is requested[cite: 18].
          </p>
        </motion.div>

        {/* Section 8 & 9 */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <AlertCircle size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase">6. [cite_start]Resolutions & Behavior [cite: 20, 22]</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            [cite_start]Complaints will be investigated and resolved professionally[cite: 21]. 
            [cite_start]Abuse, threats, or fraudulent chargebacks are prohibited and may lead to legal action[cite: 23].
          </p>
        </motion.div>
      </motion.div>

      {/* --- Acceptance Footer --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-8 rounded-3xl bg-[#121212] border border-gray-800 text-center"
      >
        <ShieldCheck className="mx-auto mb-4 text-[#FFD700]" size={40} />
        [cite_start]<h2 className="Montserrat text-2xl font-bold mb-2 uppercase">Acceptance [cite: 24]</h2>
        <p className="GolosText text-gray-400 max-w-2xl mx-auto">
          [cite_start]By hiring IMMAGINATION or using our services, clients agree to these Terms of Service[cite: 25].
        </p>
      </motion.div>
    </main>
  );
}