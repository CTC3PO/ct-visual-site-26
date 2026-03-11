"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-vh-[60vh] pt-12 pb-12">
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-huge leading-[0.85] flex flex-col font-black"
        >
          <span>Chau</span>
          <span className="md:ml-[0.1em]">Tran</span>
        </motion.h1>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-system-text/10 pt-6">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-md"
        >
          <p className="font-sans text-[11px] md:text-xs font-black uppercase tracking-[0.2em] leading-relaxed opacity-40">
            Design-centric developer bridging the gap between physical urban planning and digital intelligence.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 md:mt-0 flex flex-col items-end shrink-0"
        >
          <span className="font-serif text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Portfolio Index 20-25</span>
          <div className="mt-2 h-8 w-[1px] bg-system-text/20 origin-top"></div>
        </motion.div>
      </div>
    </section>
  );
}
