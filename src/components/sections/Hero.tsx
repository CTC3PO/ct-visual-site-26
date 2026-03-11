"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Name Column */}
        <div className="md:col-span-7 overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-huge leading-[0.8] flex flex-col"
          >
            <span>Chau</span>
            <span className="md:ml-[0.1em]">Tran</span>
          </motion.h1>
        </div>

        {/* Integrated Narrative Column */}
        <div className="md:col-span-5 md:pt-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <span className="absolute -left-4 -top-2 font-serif text-4xl opacity-10 leading-none">"</span>
            <p className="font-serif text-2xl md:text-3xl leading-tight tracking-tight max-w-sm">
              I build <span className="text-system-accent">logic systems</span> for the physical world. 
              My background in urban planning taught me to see cities as complex, multi-layered data sets. 
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-system-text/10 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-md"
        >
          <p className="font-sans text-sm md:text-base font-medium leading-relaxed opacity-60 uppercase tracking-widest font-black">
            Design-centric developer bridging the gap between physical urban planning and digital intelligence.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 md:mt-0 flex flex-col items-end shrink-0"
        >
          <span className="font-serif text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Portfolio Index 20-25</span>
          <div className="mt-2 h-8 w-[1px] bg-system-text/20 origin-top"></div>
        </motion.div>
      </div>
    </section>
  );
}
