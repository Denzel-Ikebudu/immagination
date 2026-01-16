"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import galleryData from "@/app/JsonData/Gallery.json";

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="px-[8%] lg:px-[12%] py-24 bg-black min-h-screen">
      {/* --- Headline Section --- */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h1 className="Montserrat text-5xl md:text-7xl text-white font-bold mb-6 uppercase tracking-tight">
          The <span className="text-[#FFD700]">Showcase</span>
        </h1>
        <div className="h-1 w-20 bg-[#0CB006] mb-6"></div>
        <p className="GolosText text-gray-400 max-w-2xl text-lg leading-relaxed">
          Welcome to our Gallery. Explore our curation of visual legacies, from
          digital precision to physical perfection.
        </p>
      </motion.div>

      {/* --- Animated Bento Grid --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]"
      >
        {galleryData.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2.5rem] bg-[#121212] border border-gray-800"
          >
            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 md:opacity-90 group-hover:opacity-100"
              />

              {/* --- OVERLAY FIX --- */}
              {/* Changed opacity-0 to opacity-100, then added md:opacity-0 for desktop hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                              opacity-100 md:opacity-0 md:group-hover:opacity-100 
                              transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                
                {/* --- TAG FIX --- */}
                {/* Removed Framer Motion initial opacity so it shows on mobile */}
                <span className="text-[#FFD700] text-xs md:text-sm uppercase font-bold tracking-[0.2em] mb-2">
                  {product.category}
                </span>

                <h3 className="text-white Montserrat text-2xl md:text-3xl font-bold leading-tight">
                  {product.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Decorative Footer --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 text-center"
      >
        <p className="GolosText text-gray-600 italic">
          Precision in every pixel. Excellence in every print.
        </p>
      </motion.div>
    </section>
  );
}