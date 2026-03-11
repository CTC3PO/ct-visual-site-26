"use client";

import { motion } from "framer-motion";

import Gallery from "@/components/gallery/Gallery";
import SkillsMatrix from "@/components/skills/SkillsMatrix";
import Narrative from "@/components/sections/Narrative";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 w-full p-6 md:px-12 lg:px-24 flex justify-between items-center z-50 mix-blend-difference text-system-bg">
        <span className="font-serif font-black text-xl uppercase tracking-tighter">CT / 25</span>
        <div className="flex gap-8 font-sans text-xs uppercase tracking-widest font-bold">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center min-h-[60vh] py-12">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-huge leading-[0.85] flex flex-col"
          >
            <span>Chau</span>
            <span className="md:ml-[0.2em]">Tran</span>
          </motion.h1>
        </div>

        <div className="mt-12 md:mt-0 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-system-text/10 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md"
          >
            <p className="font-sans text-lg md:text-xl font-medium leading-relaxed">
              Design-centric developer bridging the gap between physical urban planning and digital intelligence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-8 md:mt-0 flex flex-col items-end"
          >
            <span className="font-serif text-sm font-black uppercase tracking-widest opacity-30">Portfolio Index 20-25</span>
            <div className="mt-2 h-12 w-[1px] bg-system-text/20 origin-top"></div>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <Gallery />

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Narrative Section */}
      <Narrative />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
