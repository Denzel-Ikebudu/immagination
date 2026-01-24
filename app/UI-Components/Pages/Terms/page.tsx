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
  AlertCircle,
  Gavel,
  FileText
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
      {/* --- Header --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b border-gray-800 pb-10"
      >
        <h1 className="Montserrat text-4xl md:text-6xl font-bold uppercase mb-4">
          Terms of <span className="text-[#0CB006]">Service</span>
        </h1>
        <div className="flex items-center gap-4 text-gray-500 GolosText">
          <span className="px-3 py-1 bg-gray-900 rounded-full text-xs font-bold uppercase tracking-widest text-[#FFD700]">
            Version 1.0
          </span>
          <span>Effective Customer and Client Policy</span>
        </div>
      </motion.div>

      {/* --- Detailed Policy Sections --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {/* 1. Respect Policy */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <UserCheck size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">1. Respect & Treatment</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Every client is treated with respect, patience, and professionalism. Rudeness, 
            harassment, or disrespect will not be tolerated. All customers receive equal 
            attention and quality without discrimination.
          </p>
        </motion.div>

        {/* 2. Service Delivery */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <Briefcase size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">2. Workflow & Delivery</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Service engagement requires clear agreement on scope, price, and timeline. 
            Work is delivered within agreed timelines, and delays will be communicated. 
            Every project undergoes internal quality review before delivery.
          </p>
        </motion.div>

        {/* 3. Payment Terms */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <CreditCard size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">3. Payment & Billing</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Payments or deposits must be made before work begins. Refunds are not issued 
            after concepts or drafts are delivered. Extra revisions outside the agreed 
            scope will attract additional fees.
          </p>
        </motion.div>

        {/* 4. Communication & Responsibilities */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <MessageSquare size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">4. Client Communication</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Clients must provide accurate info and approve drafts promptly. All communication 
            occurs through official channels like email or WhatsApp Business. Response 
            times follow standard working hours.
          </p>
        </motion.div>

        {/* 5. Confidentiality & Files */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <Lock size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">5. Data & Confidentiality</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Client information and project files are kept confidential and stored securely. 
            Ownership transfers to the client after full payment. Note that RAW files 
            require an additional fee.
          </p>
        </motion.div>

        {/* 6. Showcase & Complaints */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3 text-[#0CB006]">
            <Scale size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">6. Usage & Complaints</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            We may showcase non-confidential work unless privacy is requested. Complaints 
            must be explained clearly; we will investigate and resolve them professionally 
            or escalate to management if needed.
          </p>
        </motion.div>

        {/* 7. Prohibited Behavior */}
        <motion.div variants={itemVariants} className="md:col-span-2 p-8 rounded-3xl bg-red-900/10 border border-red-900/30">
          <div className="flex items-center gap-3 text-red-500 mb-4">
            <AlertCircle size={24} />
            <h2 className="Montserrat text-xl font-bold uppercase tracking-tight">7. Prohibited Behaviors</h2>
          </div>
          <p className="GolosText text-gray-400 leading-relaxed">
            Abuse, threats, or fraudulent chargebacks are strictly prohibited and may 
            lead to immediate refusal of service or legal action.
          </p>
        </motion.div>
      </motion.div>

      {/* --- Final Acceptance --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-10 rounded-[2.5rem] bg-[#121212] border border-gray-800 text-center"
      >
        <ShieldCheck className="mx-auto mb-6 text-[#FFD700]" size={48} />
        <h2 className="Montserrat text-3xl font-bold mb-4 uppercase">Agreement of Terms</h2>
        <p className="GolosText text-gray-400 max-w-2xl mx-auto text-lg">
          By hiring IMMAGINATION or using our services, you acknowledge that you have 
          read and agreed to this Terms of Service policy.
        </p>
      </motion.div>
    </main>
  );
}