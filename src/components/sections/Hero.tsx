"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col pt-12 pb-12">
      <div className="overflow-hidden">
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

      <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-system-text/10 pt-8 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-md"
        >
          <p className="font-sans text-sm md:text-base font-medium leading-relaxed opacity-60 uppercase tracking-widest font-black mb-6">
            Design-centric developer bridging the gap between physical urban planning and digital intelligence.
          </p>
          <div className="flex flex-col items-start shrink-0">
            <span className="font-serif text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Portfolio Index 20-25</span>
            <div className="mt-2 h-8 w-[1px] bg-system-text/20 origin-top"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative max-w-sm md:text-right"
        >
          <span className="absolute -left-4 -top-2 md:-right-4 md:left-auto font-serif text-4xl opacity-10 leading-none">"</span>
          <p className="font-serif text-2xl md:text-3xl leading-tight tracking-tight">
            I build <span className="text-system-accent">logic systems</span> for the physical world. 
            My background in urban planning taught me to see cities as complex, multi-layered data sets. 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
