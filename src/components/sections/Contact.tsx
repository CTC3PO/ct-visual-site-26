"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="mt-16 pb-24 border-t border-system-text pt-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-major font-black uppercase leading-[0.8] tracking-tighter"
          >
            Let's <br/>Connect.
          </motion.h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-8">
          <div className="flex gap-8 font-sans text-xs uppercase tracking-widest font-black">
            <a href="mailto:chautrancmt26@gmail.com" className="hover:opacity-50 transition-opacity">Email</a>
            <a href="https://linkedin.com" target="_blank" className="hover:opacity-50 transition-opacity">LinkedIn</a>
            <a href="https://github.com" target="_blank" className="hover:opacity-50 transition-opacity">GitHub</a>
            <a href="https://twitter.com" target="_blank" className="hover:opacity-50 transition-opacity">Twitter</a>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-system-text/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold opacity-30">
        <span>&copy; 2025 CHAU TRAN</span>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Design-Centric Development</span>
          <span>Brooklyn / Saigon</span>
        </div>
      </footer>
    </section>
  );
}
